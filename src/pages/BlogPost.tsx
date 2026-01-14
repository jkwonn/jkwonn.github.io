import { useParams, Link } from 'react-router-dom'

const posts: Record<string, { title: string; date: string; content: string }> = {
  'first-post': {
    title: 'First Post',
    date: '2025-01-14',
    content: 'This is the full content of the first blog post. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  'second-post': {
    title: 'Second Post',
    date: '2025-01-10',
    content: 'This is the full content of the second blog post. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  'third-post': {
    title: 'Third Post',
    date: '2025-01-05',
    content: 'This is the full content of the third blog post. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
}

export default function BlogPost() {
  const { slug } = useParams()
  const post = slug ? posts[slug] : null

  if (!post) {
    return (
      <article className="about-content">
        <p>Post not found.</p>
        <p><Link to="/thoughts">&lt; Thoughts</Link></p>
      </article>
    )
  }

  return (
    <article className="about-content">
      <h3 className="gear-category">{post.title}</h3>
      <p className="blog-date">{post.date}</p>
      <p>{post.content}</p>
      <p><Link to="/thoughts">&lt; Thoughts</Link></p>
    </article>
  )
}
