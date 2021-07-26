import "./topbar.css";
import { Link } from "react-router-dom";
export default function Topbar() {
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fab fa-facebook-f"></i>
        <i className="topIcon fab fa-instagram"></i>
        <i className="topIcon fab fa-twitter"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link to="/" className="link">
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/" className="link">
              LOGOUT
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/write" className="link">
              WRITE
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/users" className="link">
              USERS
            </Link>
          </li>
        </ul>
      </div>
      <div className="topRight">
        <Link to="/setting">
          <img
            className="topImg"
            src="https://i.pinimg.com/originals/bd/70/22/bd702201a2b6d8960734f60f34a22754.jpg"
            alt=""
          />
        </Link>
      </div>
      <ul className="topList">
        <li className="topListItem">
          <Link to="/login" className="link">
            LOGIN
          </Link>
        </li>
        <li>
          <Link to="/register" className="link">
            REGISTER
          </Link>
        </li>
      </ul>
      <i className="topSearchIcon fas fa-search"></i>
    </div>
  );
}
