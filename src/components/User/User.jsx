import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router";
import "./User.css";

export default function Users(props) {
  const [user, setUser] = useState({ company: {}, address: {} });
  const location = useLocation();
  const [posts, setPosts] = useState([]);
  const path = location.pathname.split("/")[2];
  const [filterPosts, setFilterPosts] = useState([]);

  useEffect(() => {
    function filterUserPosts(userId) {
      let filterList = [];

      posts.forEach(async (post) => {
        if (post.userId === userId) {
          filterList.push(post);
        }
      });
      return filterList;
    }
    let userPosts = filterUserPosts(user.id);
    setFilterPosts(userPosts);
  }, [posts, user.id]);

  useEffect(() => {
    const getUser = async () => {
      const user = await axios.get(
        "https://jsonplaceholder.typicode.com/users/" + path
      );
      setUser(user.data);
    };
    getUser();
  }, [path]);
  useEffect(() => {
    const getPosts = async () => {
      const posts = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setPosts(posts.data);
    };

    getPosts();
  }, [path]);
  return (
    <div className="user">
      <span className="userName">{user.name}</span>
      <span className="userEmail">{user.email}</span>
      <span className="userAddress">
        {user.address.city} {user.address.street} {user.address.suite}{" "}
        {user.address.zipcode}
      </span>

      <span className="userCompany">{user.company.name}</span>
      <div className="userPosts"></div>
      {filterPosts.map((post) => {
        return (
          <div className="userPost">
            <div className="postEdit">
              <i className="postIcon fas fa-pencil-alt"></i>
              <i className="postIcon fas fa-trash-alt"></i>
            </div>
            <span className="userPostId">{post.id}</span>
            <span className="userTitle">{post.title}</span>
            <br />
            <span className="userPostDesc">{post.body}</span>
            <span className="userPostDate">Date: 1 hour ago </span>
          </div>
        );
      })}
    </div>
  );
}
