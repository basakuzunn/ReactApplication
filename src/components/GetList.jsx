import React from "react";
import propTypes from "prop-types";

GetList.propTypes = {
  userList: propTypes.array
};
GetList.defaultProps = {
  users: []
};
function GetList(props) {
  const { users } = props;
  return (
    <ul className="post-list">
      {users.map((post) => (
        <li key={post.id}>{post.name}</li>
      ))}
    </ul>
  );
}
