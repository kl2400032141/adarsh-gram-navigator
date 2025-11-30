import AdminLayout from "../../components/Admin/AdminLayout";
import { useState } from "react";

export default function Users() {
  const [users] = useState([
    { id: 1, name: "Ravi", role: "Village User" },
    { id: 2, name: "Sita", role: "Admin" }
  ]);

  return (
    <AdminLayout>
      <h1>Users</h1>

      <table style={{ width: "100%", marginTop: "20px", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ background: "#e2e8f0" }}>
            <th style={{ padding: "12px", border: "1px solid #ccc" }}>ID</th>
            <th style={{ padding: "12px", border: "1px solid #ccc" }}>Name</th>
            <th style={{ padding: "12px", border: "1px solid #ccc" }}>Role</th>
          </tr>
        </thead>

        <tbody>
          {users.map(u => (
            <tr key={u.id}>
              <td style={{ padding: "12px", border: "1px solid #ccc" }}>{u.id}</td>
              <td style={{ padding: "12px", border: "1px solid #ccc" }}>{u.name}</td>
              <td style={{ padding: "12px", border: "1px solid #ccc" }}>{u.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </AdminLayout>
  );
}
