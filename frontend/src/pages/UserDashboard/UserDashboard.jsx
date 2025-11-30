import { useEffect, useState } from "react";
import axios from "axios";

export default function UserDashboard() {
  const [data, setData] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000/api/user/dashboard")
      .then(res => setData(res.data.message));
  }, []);

  return (
    <div style={{ padding: 40 }}>
      <h1>User Dashboard</h1>
      <p>{data}</p>
    </div>
  );
}
