import AdminSidebar from "./AdminSidebar";

export default function AdminLayout({ children }) {
  return (
    <div style={{ display: "flex", height: "100vh", background: "#f1f5f9" }}>
      
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main Page Content */}
      <div style={{
        flexGrow: 1,
        padding: "20px",
        overflowY: "auto"
      }}>
        {children}
      </div>

    </div>
  );
}
