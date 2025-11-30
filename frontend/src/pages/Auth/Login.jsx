import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [role, setRole] = useState("user");

  const handleLogin = () => {
    if (role === "admin") navigate("/admin/dashboard");
    else navigate("/user/dashboard");
  };

  return (
    <div style={{ padding: 40 }}>
      <h2>Login</h2>

      <select onChange={(e) => setRole(e.target.value)}>
        <option value="user">User</option>
        <option value="admin">Admin</option>
      </select>

      <br /><br />

      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
