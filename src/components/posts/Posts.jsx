import "./posts.css";
import Post from "../post/Post";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Posts(props) {
  const [desc, setDesc] = useState("");
  const [title, setTitle] = useState("");
  const [userId, setUserId] = useState(null);

  const handleUpdate = async (post) => {
    const res = await axios.put(
      `https://jsonplaceholder.typicode.com/posts/${post.id}`,
      {
        userId: userId,
        title: title,
        body: desc
      }
    );
  };
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
        return (
          <Post
            handleDelete={handleDelete}
            handleUpdate={handleUpdate}
            post={p}
          />
        );
      })}
    </div>
  );
}
