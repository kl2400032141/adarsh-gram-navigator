// src/services/gamifiedAPI.js
const sampleVillages = [
  {
    id: "v001",
    name: "Narayana Puram",
    taluk: "Krishna",
    district: "Eluru",
    avatar: "/assets/villages/v001.png",
    xp: 4200,
    xpForNext: 5000,
    level: "Gold",
    sectorScores: { education: 82, health: 76, water: 55, roads: 90, sanitation: 68, electricity: 100 },
    badges: [{ id: "b_elec", name: "100% Electrification", icon: "/icons/badge_elec.png" }],
    questsCompleted: ["q12"],
    geo: { lat: 16.5062, lng: 80.6480 },
    weeklyDelta: 40
  },
  {
    id: "v002",
    name: "Mitra Nagar",
    taluk: "NTR",
    district: "Vijayawada",
    avatar: "/assets/villages/v002.png",
    xp: 3200,
    xpForNext: 4000,
    level: "Silver",
    sectorScores: { education: 72, health: 64, water: 85, roads: 70, sanitation: 58, electricity: 95 },
    badges: [{ id: "b_water", name: "Clean Water Champion", icon: "/icons/badge_water.png" }],
    questsCompleted: ["q01"],
    geo: { lat: 16.5065, lng: 80.6488 },
    weeklyDelta: 25
  },
  {
    id: "v003",
    name: "Sankaram",
    taluk: "Guntur",
    district: "Guntur",
    avatar: "/assets/villages/v003.png",
    xp: 10200,
    xpForNext: 12000,
    level: "Adarsh",
    sectorScores: { education: 95, health: 92, water: 94, roads: 96, sanitation: 93, electricity: 100 },
    badges: [{ id: "b_skill", name: "Skill Development Hero", icon: "/icons/badge_skill.png" }],
    questsCompleted: ["q01","q03"],
    geo: { lat: 16.3062, lng: 80.4480 },
    weeklyDelta: 140
  }
];

const sampleQuests = [
  { id: "q01", title: "Update 3 projects", type: "daily", reward: { xp: 50, stars: 1 }, progress: { current: 1, target: 3 }, assignedTo: "officer_23" },
  { id: "q02", title: "Verify 2 villages", type: "weekly", reward: { xp: 120, stars: 2 }, progress: { current: 0, target: 2 }, assignedTo: "officer_23" },
  { id: "q03", title: "Upload 1 field report", type: "daily", reward: { xp: 30, stars: 1 }, progress: { current: 0, target: 1 }, assignedTo: "officer_23" }
];

export function fetchVillages() {
  return new Promise((resolve) => setTimeout(() => resolve(sampleVillages), 300));
}

export function fetchQuests() {
  return new Promise((resolve) => setTimeout(() => resolve(sampleQuests), 200));
}

export function fetchLeaderboard() {
  // Sorted by xp desc
  return new Promise((resolve) => setTimeout(() => resolve([...sampleVillages].sort((a,b)=>b.xp-a.xp)), 200));
}
