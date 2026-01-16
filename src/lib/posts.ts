export interface Post {
  slug: string
  title: string
  date: string
  content: string
}

const postFiles = import.meta.glob('../posts/*.md', { eager: true, query: '?raw', import: 'default' })

function parseFrontmatter(raw: string): { data: Record<string, string>; content: string } {
  const lines = raw.split('\n')
  const data: Record<string, string> = {}
  let contentStart = 0

  if (lines[0]?.trim() === '---') {
    for (let i = 1; i < lines.length; i++) {
      if (lines[i]?.trim() === '---') {
        contentStart = i + 1
        break
      }
      const match = lines[i]?.match(/^(\w+):\s*(.+)$/)
      if (match) {
        data[match[1]] = match[2]
      }
    }
  }

  return {
    data,
    content: lines.slice(contentStart).join('\n').trim(),
  }
}

export function getAllPosts(): Post[] {
  const posts: Post[] = []

  for (const path in postFiles) {
    const raw = postFiles[path] as string
    const { data, content } = parseFrontmatter(raw)

    posts.push({
      slug: data.slug || path.replace('../posts/', '').replace('.md', ''),
      title: data.title || 'Untitled',
      date: data.date || '',
      content,
    })
  }

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getPostBySlug(slug: string): Post | undefined {
  return getAllPosts().find((post) => post.slug === slug)
}
