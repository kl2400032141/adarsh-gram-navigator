import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1>Adarsh Gram Navigator</h1>
      <p>Village Infrastructure Gap Analysis & Monitoring System</p>
      <Link to="/login">Login</Link>
    </div>
  );
}
