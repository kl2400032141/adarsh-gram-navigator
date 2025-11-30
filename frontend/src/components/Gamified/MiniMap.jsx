// src/components/Gamified/MiniMap.jsx
import React from "react";
import "./MiniMap.css";

export default function MiniMap({ villages=[], onSelect=()=>{} }) {
  return (
    <div className="minimap-root">
      <div className="map-canvas">
        {villages.map((v,i)=>(
          <div key={v.id} className={`map-marker ${v.level.toLowerCase()}`} onClick={()=>onSelect(v)}>
            <div className="marker-dot" />
            <div className="marker-label">{v.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
