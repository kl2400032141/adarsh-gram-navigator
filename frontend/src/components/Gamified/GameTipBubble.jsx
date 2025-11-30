// src/components/Gamified/GameTipBubble.jsx
import React from "react";
import "./GameTipBubble.css";

export default function GameTipBubble({ tip="Verify 2 villages in Ward 2 to get +120 XP" }) {
  return (
    <div className="tip-root">
      <div className="tip-avatar">🧠</div>
      <div className="tip-body">
        <div className="tip-title">Game Tip</div>
        <div className="tip-text">{tip}</div>
      </div>
    </div>
  );
}
