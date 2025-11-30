// src/components/Gamified/NotificationToast.jsx
import React from "react";
import "./NotificationToast.css";

export default function NotificationToast({ list=[] }) {
  return (
    <div className="toast-root">
      {list.map((t,i)=>(
        <div key={i} className={`toast-item ${t.type || "info"}`}>
          <div className="toast-icon">{t.type === "error" ? "⚠️" : t.type === "success" ? "🏆" : "🔔"}</div>
          <div className="toast-body">
            <div className="toast-title">{t.title}</div>
            <div className="toast-msg">{t.msg}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
