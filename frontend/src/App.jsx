import { BrowserRouter, Routes, Route } from "react-router-dom";

// Auth Pages
import Landing from "./pages/Landing/Landing";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";

// Admin Pages
import AdminDashboard from "./pages/AdminDashboard/AdminDashboard";
import Projects from "./pages/AdminDashboard/Projects";
import Gaps from "./pages/AdminDashboard/Gaps";
import Map from "./pages/AdminDashboard/Map";
import Voice from "./pages/AdminDashboard/Voice";
import Users from "./pages/AdminDashboard/Users";

// ⭐ Import new gamified dashboard
import GamifiedDashboard from "./pages/AdminDashboard/GamifiedDashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Basic Routes */}
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Admin Routes */}
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/projects" element={<Projects />} />
        <Route path="/admin/gaps" element={<Gaps />} />
        <Route path="/admin/map" element={<Map />} />
        <Route path="/admin/voice" element={<Voice />} />
        <Route path="/admin/users" element={<Users />} />

        {/* ⭐ Gamified Dashboard */}
        <Route path="/admin/gamified" element={<GamifiedDashboard />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
