// src/components/Gamified/XPBar.jsx
import React from "react";
import "./XPBar.css";

export default function XPBar({ xp=0, xpForNext=1000 }) {
  const pct = Math.min(100, Math.round((xp / xpForNext) * 100));
  return (
    <div className="xpbar-root" aria-label="xp-bar">
      <div className="xpbar-track">
        <div className="xpbar-fill" style={{ width: `${pct}%` }} />
      </div>
      <div className="xpbar-meta">
        <span className="xp-left">{xp} XP</span>
        <span className="xp-right">{xpForNext} XP</span>
      </div>
    </div>
  );
}
