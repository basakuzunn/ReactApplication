import "./posts.css";
import Post from "../post/Post";
import axios from "axios";

export default function Posts(props) {
  const handleDelete = async (post) => {
    const res = await axios.delete(
      `https://jsonplaceholder.typicode.com/posts/${post.id}`
    );
    let tmp = props.posts.filter((filterPost) => post.id !== filterPost.id);
    props.setPosts(tmp);
  };
  return (
    <div className="posts">
      {props.posts.map((p) => {
        return <Post handleDelete={handleDelete} post={p} />;
      })}
    </div>
  );
}
