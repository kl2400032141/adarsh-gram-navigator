import AdminLayout from "../../components/Admin/AdminLayout";
import { useState } from "react";

export default function Voice() {
  const [reports] = useState([
    { id: 1, text: "Street lights not working", status: "Pending" },
    { id: 2, text: "Water tank leak", status: "Reviewed" }
  ]);

  return (
    <AdminLayout>
      <h1>Voice Reports</h1>

      <div style={{ marginTop: 20 }}>
        {reports.map(r => (
          <div key={r.id} style={{
            background: "#fff",
            padding: 15,
            marginBottom: 10,
            borderRadius: 10,
            boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
          }}>
            <p><strong>Report:</strong> {r.text}</p>
            <p><strong>Status:</strong> {r.status}</p>
          </div>
        ))}
      </div>
    </AdminLayout>
  );
}
