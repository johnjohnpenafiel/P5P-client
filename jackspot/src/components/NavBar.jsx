import { NavLink } from "react-router-dom";
import "./NavBar.css"


function NavBar() {
  return (
    <nav id="navbar">
      <NavLink to="/dashboard" className="nav-link">
        Dashboard
      </NavLink>
      <NavLink to="/collections" className="nav-link">
        Collections
      </NavLink>
      <NavLink to="/share" className="nav-link">
        Share
      </NavLink>
    </nav>
  );
};

export default NavBar;