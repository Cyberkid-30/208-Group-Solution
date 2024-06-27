import Navbar2 from "../../components/Navbar2/Navbar2";
import "../LandingPage2/LandingPage2.css";

function LandingPage2() {
  return (
    <div>
      <Navbar2 />

      <div className="main-section">
        <h1 style={{ textAlign: "center" }}>COURSES</h1>
        <p style={{ textAlign: "center", color: "gray" }}>
          The courses you have signed up for so far!
        </p>
      </div>

      
    </div>
  );
}

export default LandingPage2;
