// src/components/Gamified/VillageCard.jsx
import React from "react";
import LevelBadge from "./LevelBadge";
import XPBar from "./XPBar";
import "./VillageCard.css";

export default function VillageCard({ village, onOpen=()=>{} }) {
  return (
    <div className="vcard-root">
      <div className="vcard-top">
        <div className="vcard-left">
          <img className="vcard-avatar" src={village.avatar || "/icons/village-placeholder.png"} alt={village.name} />
          <div>
            <div className="vcard-name">{village.name}</div>
            <div className="vcard-sub">{village.taluk} • {village.district}</div>
          </div>
        </div>
        <LevelBadge level={village.level} />
      </div>

      <div className="vcard-body">
        <XPBar xp={village.xp} xpForNext={village.xpForNext} />
        <div className="vcard-badges">
          {village.badges && village.badges.map(b => (
            <img key={b.id} src={b.icon || "/icons/badge_placeholder.png"} title={b.name} alt={b.name} className="v-badge" />
          ))}
        </div>

        <div className="vcard-actions">
          <button className="btn" onClick={()=>onOpen(village)}>Open</button>
          <button className="btn primary">Quick Action</button>
        </div>
      </div>
    </div>
  );
}
