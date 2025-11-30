// src/components/Gamified/Leaderboard.jsx
import React from "react";
import "./Leaderboard.css";

export default function Leaderboard({ villages=[] }) {
  return (
    <div className="leader-root">
      <h3 className="leader-title">Leaderboard</h3>
      <div className="leader-list">
        {villages.slice(0,10).map((v,i)=>(
          <div key={v.id} className="leader-row">
            <div className="leader-left">
              <div className="leader-rank">{i<3 ? ["🥇","🥈","🥉"][i] : (i+1)}</div>
              <img src={v.avatar || "/icons/village-placeholder.png"} alt="" className="leader-avatar"/>
              <div>
                <div className="leader-name">{v.name}</div>
                <div className="leader-sub">{v.level} • {v.xp} XP</div>
              </div>
            </div>
            <div className="leader-delta">+{v.weeklyDelta}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
