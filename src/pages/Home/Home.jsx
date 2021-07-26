import axios from "axios";
import { useEffect, useState } from "react";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./home.css";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setPosts(res.data);
    };
    fetchPosts();
  }, []);
  return (
    <>
      <div className="header">
        <div className="headerTitles">Blog</div>
        <img
          className="headerImage"
          src="https://p.favim.com/orig/2019/02/20/lisa-theme-black-header-blackpink-theme-Favim.com-6933070.jpg"
          alt=""
        />
      </div>
      <div className="home">
        <header />
        <Posts posts={posts} setPosts={setPosts} />
        <Sidebar />
      </div>
    </>
  );
}
