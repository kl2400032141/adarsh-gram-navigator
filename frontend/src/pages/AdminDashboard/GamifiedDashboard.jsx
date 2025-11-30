// src/pages/AdminDashboard/GamifiedDashboard.jsx
import React, { useEffect, useState } from "react";
import AdminLayout from "../../components/Admin/AdminLayout";
import VillageCard from "../../components/Gamified/VillageCard";
import Leaderboard from "../../components/Gamified/Leaderboard";
import QuestBoard from "../../components/Gamified/QuestBoard";
import MiniMap from "../../components/Gamified/MiniMap";
import HealthMeter from "../../components/Gamified/HealthMeter";
import NotificationToast from "../../components/Gamified/NotificationToast";
import GameTipBubble from "../../components/Gamified/GameTipBubble";
import { fetchVillages, fetchQuests, fetchLeaderboard } from "../../services/gamifiedAPI";

export default function GamifiedDashboard() {
  const [villages, setVillages] = useState([]);
  const [quests, setQuests] = useState([]);
  const [leaderboard, setLeaderboard] = useState([]);
  const [toasts, setToasts] = useState([]);

  useEffect(()=> {
    fetchVillages().then(setVillages);
    fetchQuests().then(setQuests);
    fetchLeaderboard().then(setLeaderboard);
    // demo toast
    setToasts([{ title:"Narayana Puram leveled up!", msg: "Gold unlocked — +300 XP", type:"success"}]);
    const t = setTimeout(()=> setToasts([]), 6000);
    return ()=> clearTimeout(t);
  },[]);

  function openVillage(v) {
    setToasts(prev => [{ title: `${v.name} opened`, msg: `XP: ${v.xp}`, type:"info"}, ...prev]);
  }

  function claimQuest(qid) {
    setToasts(prev => [{ title: `Quest claimed`, msg: `+${quests.find(q=>q.id===qid)?.reward.xp || 0} XP`, type:"success"}, ...prev]);
    // no backend: update local progress
    setQuests(quests.map(q => q.id === qid ? { ...q, progress: { ...q.progress, current: q.progress.target } } : q));
  }

  return (
    <AdminLayout>
      <div style={{ display:"grid", gridTemplateColumns: "1fr 360px", gap:20 }}>
        <div>
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center" }}>
            <h1 style={{ margin:0 }}>Adarsh Gram Quest — Gamified Dashboard</h1>
            <div style={{ width:360 }}>
              <HealthMeter score={82} />
            </div>
          </div>

          <div style={{ marginTop:20, display:"flex", gap:16, flexWrap:"wrap" }}>
            {villages.map(v => <VillageCard key={v.id} village={v} onOpen={openVillage} />)}
          </div>

          <div style={{ marginTop:20 }}>
            <h2 style={{ color:"#94a3b8" }}>Mini Map</h2>
            <MiniMap villages={villages} onSelect={openVillage} />
          </div>
        </div>

        <div style={{ display:"flex", flexDirection:"column", gap:12 }}>
          <Leaderboard villages={leaderboard} />
          <QuestBoard quests={quests} onClaim={claimQuest} />
          <div style={{ height:12 }} />
        </div>
      </div>

      <GameTipBubble tip="Tip: Verify 2 projects in Ward 4 to push Narayana Puram to Platinum +" />
      <NotificationToast list={toasts} />
    </AdminLayout>
  );
}
