// src/components/Gamified/HealthMeter.jsx
import React from "react";
import "./HealthMeter.css";

export default function HealthMeter({ score=72 }) {
  // score 0-100
  const pct = Math.max(0, Math.min(100, score));
  return (
    <div className="health-root">
      <div className="health-title">Village Health</div>
      <div className="health-track">
        <div className="health-fill" style={{ width: `${pct}%` }} />
      </div>
      <div className="health-meta">
        <span>{pct}%</span>
        <span className="health-note">Overall development score</span>
      </div>
    </div>
  );
}
