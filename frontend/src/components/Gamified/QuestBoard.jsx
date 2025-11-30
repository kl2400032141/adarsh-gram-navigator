// src/components/Gamified/QuestBoard.jsx
import React from "react";
import "./QuestBoard.css";

export default function QuestBoard({ quests=[], onClaim=(id)=>{} }) {
  return (
    <div className="quest-root">
      <h3>Quests</h3>
      <div className="quest-list">
        {quests.map(q => (
          <div className="quest-row" key={q.id}>
            <div>
              <div className="quest-title">{q.title}</div>
              <div className="quest-meta">{q.type} • {q.progress.current}/{q.progress.target}</div>
            </div>
            <div style={{ display:"flex", flexDirection:"column", gap:6 }}>
              <div className="quest-reward">+{q.reward.xp} XP</div>
              <button className="quest-btn" onClick={()=>onClaim(q.id)}>Claim</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
