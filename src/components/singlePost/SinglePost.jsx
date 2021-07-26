import "./singlePost.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router";

export default function SinglePost() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});
  const PF = "https://jsonplaceholder.typicode.com/albums/1/photos";
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [updateMode, setUpdateMode] = useState(false);
  const [userId, setUserId] = useState(null);
  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/posts/" + path
      );
      setPost(res.data);
    };
    getPost();
  }, path);
  const handleDelete = async () => {
    const res = await axios.delete(
      `https://jsonplaceholder.typicode.com/posts/${post.id}`
    );
    setPost(res.data);
  };
  const handleUpdate = async () => {
    try {
      await axios.put(`https://jsonplaceholder.typicode.com/posts/${post.id}`, {
        userId: userId,
        title: title,
        body: desc
      });
      setUpdateMode(false);
    } catch (err) {}
  };
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {post.photo && (
          <img src={PF + post.photo} alt="" className="singlePostImg" />
        )}
        {updateMode ? (
          <input
            type="text"
            value={post.title}
            className="singlePostTitleInput"
          />
        ) : (
          <h1 className="singlePostTitle">
            {post.title}
            <div className="singlePostEdit">
              <i
                className="singlePostIcon fas fa-pencil-alt"
                onClick={() => setUpdateMode(true)}
              ></i>
              <i
                className="singlePostIcon fas fa-trash-alt"
                onClick={handleDelete}
              ></i>
            </div>
          </h1>
        )}
        <div className="singlePostInfo">
          <span className="singlePostOwner">
            Owner: <b>{post.userId}</b>
          </span>
          <span className="singlePostDate">Date: 1 hour ago </span>
        </div>
        {updateMode ? (
          <textarea
            className="singlePostDescInput"
            value={post.body}
            onChange={(e) => setDesc(e.target.value)}
          />
        ) : (
          <p className="singlePostDesc">{post.body}</p>
        )}
        {updateMode && (
          <button className="singlePostButton" onClick={handleUpdate}>
            Update
          </button>
        )}
      </div>
    </div>
  );
}
