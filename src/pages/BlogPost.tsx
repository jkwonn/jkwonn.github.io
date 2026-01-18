import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { getPostBySlug } from "../lib/posts";

export default function BlogPost() {
  const { slug } = useParams();
  const post = slug ? getPostBySlug(slug) : null;

  if (!post) {
    return (
      <article className="about-content">
        <h3 className="gear-category">
          <Link to="/thoughts" className="back-arrow">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
          </Link>
          Post not found
        </h3>
      </article>
    );
  }

  return (
    <article className="about-content">
      <h3 className="gear-category">
        <Link to="/thoughts" className="back-arrow">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
        </Link>
        {post.title}
      </h3>
      <p className="blog-date">{post.date}</p>
      <div className="blog-content">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>
    </article>
  );
}
