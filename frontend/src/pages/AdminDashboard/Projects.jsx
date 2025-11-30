import AdminLayout from "../../components/Admin/AdminLayout";
import { useState } from "react";

export default function Projects() {
  const [projects] = useState([
    { id: 1, name: "School Renovation", status: "In Progress" },
    { id: 2, name: "Road Construction", status: "Completed" },
    { id: 3, name: "Water Pipeline", status: "Pending" }
  ]);

  return (
    <AdminLayout>
      <h1>Projects</h1>

      <table style={{ width: "100%", marginTop: "20px", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ background: "#e2e8f0" }}>
            <th style={{ padding: "12px", border: "1px solid #ccc" }}>ID</th>
            <th style={{ padding: "12px", border: "1px solid #ccc" }}>Project Name</th>
            <th style={{ padding: "12px", border: "1px solid #ccc" }}>Status</th>
          </tr>
        </thead>

        <tbody>
          {projects.map(p => (
            <tr key={p.id}>
              <td style={{ padding: "12px", border: "1px solid #ccc" }}>{p.id}</td>
              <td style={{ padding: "12px", border: "1px solid #ccc" }}>{p.name}</td>
              <td style={{ padding: "12px", border: "1px solid #ccc" }}>{p.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </AdminLayout>
  );
}
