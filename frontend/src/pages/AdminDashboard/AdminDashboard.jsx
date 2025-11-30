import AdminLayout from "../../components/Admin/AdminLayout";

export default function AdminDashboard() {
  
  // Dummy data since backend is paused
  const adminStats = {
    totalProjects: 15,
    pendingGaps: 4,
    newReports: 7,
  };

  return (
    <AdminLayout>
      <h1>Admin Dashboard</h1>

      <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
        
        <div style={{
          background: "#ffffff",
          padding: "20px",
          borderRadius: "10px",
          width: "220px",
          boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
        }}>
          <h3>Total Projects</h3>
          <p style={{ fontSize: "22px", fontWeight: "bold" }}>{adminStats.totalProjects}</p>
        </div>

        <div style={{
          background: "#ffffff",
          padding: "20px",
          borderRadius: "10px",
          width: "220px",
          boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
        }}>
          <h3>Pending Gaps</h3>
          <p style={{ fontSize: "22px", fontWeight: "bold" }}>{adminStats.pendingGaps}</p>
        </div>

        <div style={{
          background: "#ffffff",
          padding: "20px",
          borderRadius: "10px",
          width: "220px",
          boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
        }}>
          <h3>New Reports</h3>
          <p style={{ fontSize: "22px", fontWeight: "bold" }}>{adminStats.newReports}</p>
        </div>

      </div>

    </AdminLayout>
  );
}
