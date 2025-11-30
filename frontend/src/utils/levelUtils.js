// src/utils/levelUtils.js
export function xpToLevel(xp) {
  if (xp >= 10000) return "Adarsh";
  if (xp >= 6000) return "Platinum";
  if (xp >= 3000) return "Gold";
  if (xp >= 1000) return "Silver";
  return "Bronze";
}

export function levelColor(level) {
  switch(level) {
    case "Bronze": return "#b87333";
    case "Silver": return "#c0c0c0";
    case "Gold": return "#ffd700";
    case "Platinum": return "#7dd3fc";
    case "Adarsh": return "#34d399";
    default: return "#94a3b8";
  }
}
