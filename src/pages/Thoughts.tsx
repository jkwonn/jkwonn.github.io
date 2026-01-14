import { Link } from 'react-router-dom'

const posts = [
  {
    slug: 'first-post',
    title: 'First Post',
    date: '2025-01-14',
  },
  {
    slug: 'second-post',
    title: 'Second Post',
    date: '2025-01-10',
  },
  {
    slug: 'third-post',
    title: 'Third Post',
    date: '2025-01-05',
  },
]

export default function Thoughts() {
  return (
    <article className="about-content">
      <ul className="blog-list">
        {posts.map((post) => (
          <li key={post.slug}>
            [{post.date}] <Link to={`/thoughts/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </article>
  )
}
