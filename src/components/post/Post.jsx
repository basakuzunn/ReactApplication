import "./post.css";
import { Link } from "react-router-dom";

export default function Post({ post }) {
  const PF = "https://jsonplaceholder.typicode.com/albums/1/photos";
  return (
    <div className="post">
      {post.photo && <img className="postImg" src={PF + post.photo} alt="" />}
      <div className="postInfo">
        <div className="postCats">
          {[post.categories].map((c) => (
            <span className="postCat"></span>
          ))}
        </div>
        <Link to={`/posts/${post.id}`} className="link">
          <span className="postTitle">{post.title}</span>
        </Link>
        <hr />
        <span className="postDate">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className="postDesc">{post.body}</p>
    </div>
  );
}
