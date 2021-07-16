import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      {" "}
      <div className="sidebarItem">
        <span className="sidebarTitle"> About Me</span>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVnwzXmj56FdxMhG9GxhnWuZ-xQSeOQalARQ&usqp=CAU"
          alt=""
        />
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <div className="sidebarItem"></div>
      <span className="sidebarTitle"> Categories</span>
      <ul className="sidebarList">
        <li className="sidebarListItem">İnformations</li>
        <li className="sidebarListItem">Company</li>
        <li className="sidebarListItem">Contact</li>
      </ul>
    </div>
  );
}
