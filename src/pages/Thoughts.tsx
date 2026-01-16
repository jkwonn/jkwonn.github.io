import { Link } from 'react-router-dom'
import { getAllPosts } from '../lib/posts'

export default function Thoughts() {
  const posts = getAllPosts()

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
