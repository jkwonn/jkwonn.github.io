import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { getPostBySlug } from "../lib/posts";

export default function BlogPost() {
  const { slug } = useParams();
  const post = slug ? getPostBySlug(slug) : null;

  if (!post) {
    return (
      <article className="about-content">
        <p>Post not found.</p>
        <p>
          <Link to="/thoughts">&lt; Thoughts</Link>
        </p>
      </article>
    );
  }

  return (
    <article className="about-content">
      <h3 className="gear-category">{post.title}</h3>
      <p className="blog-date">{post.date}</p>
      <div className="blog-content">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>
      <p>
        <Link to="/thoughts">&lt; back</Link>
      </p>
    </article>
  );
}
