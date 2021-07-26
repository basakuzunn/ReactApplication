import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./users.css";

export default function Users() {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    try {
      const users = await axios.get(
        "https://jsonplaceholder.typicode.com/users/"
      );
      setUsers(users.data);
    } catch (err) {
      console.error(err.message);
    }
  };
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="users">
      {users.map((user) => {
        return (
          <div className="usersItem">
            <Link to={`/user/${user.id}`} className="link">
              <span className="userName">{user.name}</span>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
