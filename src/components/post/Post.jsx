import "./post.css";

import { useEffect, useState } from "react";

export default function Post(props) {
  const PF = "https://jsonplaceholder.typicode.com/albums/1/photos";

  const [desc, setDesc] = useState("");
  const [title, setTitle] = useState("");
  var post = props.post;

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

        <input
          key={post.id}
          type="text"
          defaultValue={post.title}
          className="postTitleInput"
          onChange={(e) => setTitle(e.target.value)}
        />

        <div className="postEdit">
          <i className="postIcon fas fa-pencil-alt"></i>
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

      <textarea
        key={post.id}
        className="postDescInput"
        defaultValue={post.body}
        onChange={(e) => setDesc(e.target.value)}
      />

      <button
        className="postButton"
        onClick={() => {
          props.handleUpdate(post);
        }}
      >
        Update
      </button>
    </div>
  );
}
