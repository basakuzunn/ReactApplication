import "./post.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";

export default function Post(props) {
  const PF = "https://jsonplaceholder.typicode.com/albums/1/photos";
  const [userId, setUserId] = useState(null);
  const [desc, setDesc] = useState("");
  const [title, setTitle] = useState("");
  const [updateMode, setUpdateMode] = useState(true);
  var post = props.post;

  const handleUpdate = async () => {
    try {
      await axios.put(`https://jsonplaceholder.typicode.com/posts/${post.id}`, {
        userId: userId,
        title: title,
        body: desc
      });
      setUpdateMode(true);
    } catch (err) {}
  };
  return (
    <div className="post">
      {post.photo && <img className="postImg" src={PF + post.photo} alt="" />}
      <div className="postInfo">
        <div className="postCats">
          {[post.categories].map((c) => (
            <span className="postCat"></span>
          ))}
        </div>

        <span className="postId">{post.id}</span>
        {updateMode ? (
          <input type="text" value={post.title} className="postTitleInput" />
        ) : (
          <span className="postTitle">{post.title}</span>
        )}

        <div className="postEdit">
          <i
            className="postIcon fas fa-pencil-alt"
            onClick={() => setUpdateMode(true)}
          ></i>
          <i
            className="postIcon fas fa-trash-alt"
            onClick={() => {
              props.handleDelete(post);
            }}
          ></i>
        </div>
        <hr />
        <div className="postDetails">
          <span className="postDate">
            {new Date(post.createdAt).toDateString()}
          </span>
          <span className="PostOwner">
            Owner: <b>{post.userId}</b>
          </span>
        </div>
      </div>
      {updateMode ? (
        <textarea
          className="postDescInput"
          value={post.body}
          onChange={(e) => setDesc(e.target.value)}
        />
      ) : (
        <p className="postDesc">{post.body}</p>
      )}
      {updateMode && (
        <button className="postButton" onClick={handleUpdate}>
          Update
        </button>
      )}
    </div>
  );
}
