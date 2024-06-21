import { Link } from "react-router-dom";
import "./Navbar2.css";

const Navbar2 = () => {
  return (
    <nav className="nav-bar">
      <img className="logo" src="src\assets\Grammophone2 2.png" alt="" />
      <ul className="nav-ul">
        <Link className="links" to="/dashboard">
          DASHBOARD
        </Link>
        <Link className="links" to="/loggedIn">
          COURSES
        </Link>
        <Link className="links" to="/contactUs">
          CONTACT US
        </Link>
        <button className="signUp">
          <Link style={{ textDecoration: "none", color: "#121212" }} to="/">
            LOG OUT
          </Link>
        </button>
      </ul>
    </nav>
  );
};

export default Navbar2;
