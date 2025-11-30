// src/components/Gamified/LevelBadge.jsx
import React from "react";
import "./LevelBadge.css";
import { levelColor } from "../../utils/levelUtils";

export default function LevelBadge({ level="Bronze" }) {
  const bg = levelColor(level);
  return (
    <div className="lvl-badge" style={{ background: bg }}>
      <span className="lvl-text">{level}</span>
    </div>
  );
}
