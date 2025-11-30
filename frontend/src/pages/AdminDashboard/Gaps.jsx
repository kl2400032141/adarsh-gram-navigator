import AdminLayout from "../../components/Admin/AdminLayout";
import { useState } from "react";

export default function Gaps() {
  const [gaps] = useState([
    { id: 1, category: "Healthcare", issue: "No PHC in village" },
    { id: 2, category: "Water", issue: "Irregular water supply" },
    { id: 3, category: "Education", issue: "School lacks smart classrooms" }
  ]);

  return (
    <AdminLayout>
      <h1>Gap Analysis</h1>

      <ul style={{ marginTop: 20 }}>
        {gaps.map(g => (
          <li key={g.id} style={{ padding: 10, background: "#fff", marginBottom: 10, borderRadius: 8 }}>
            <strong>{g.category}:</strong> {g.issue}
          </li>
        ))}
      </ul>
    </AdminLayout>
  );
}
