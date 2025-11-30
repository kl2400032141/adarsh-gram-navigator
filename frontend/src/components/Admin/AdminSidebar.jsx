import { Link } from "react-router-dom";
import "./AdminSidebar.css";

export default function AdminSidebar() {
  return (
    <div className="admin-sidebar">
      <h2 className="sidebar-title">Admin Panel</h2>

      <nav className="sidebar-nav">
  <Link to="/admin/dashboard" className="nav-link">Dashboard</Link>
  <Link to="/admin/gamified" className="nav-link">Game Dashboard</Link>
  <Link to="/admin/projects" className="nav-link">Projects</Link>
  <Link to="/admin/gaps" className="nav-link">Gap Analysis</Link>
  <Link to="/admin/map" className="nav-link">Village Map</Link>
  <Link to="/admin/voice" className="nav-link">Voice Reports</Link>
  <Link to="/admin/users" className="nav-link">Users</Link>
</nav>

    </div>
  );
}
