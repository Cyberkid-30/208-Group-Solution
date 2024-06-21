import "./Navbar2.css";

const Navbar2 = () => {
  return (
    <nav className="nav-bar">
      <img className="logo" src="src\assets\Grammophone2 2.png" alt="" />
      <ul className="nav-ul">
        <li>DASHBOARD</li>
        <li>COURSES</li>
        <li>ABOUT</li>
        <button className="signUp">LOG OUT</button>
      </ul>
    </nav>
  );
};

export default Navbar2;
