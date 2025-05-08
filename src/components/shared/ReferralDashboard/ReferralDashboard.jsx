import React from "react";
import { FaArrowUp } from "react-icons/fa";
import s from "./ReferralDashboard.module.scss";

export default function ReferralDashboard({
  stats = [
    { title: "Реферальный доход", value: "5 400 ODDB", change: "+12.5%" },
    { title: "Всего рефералов", value: "142", change: "+3 за неделю" },
  ],
  partners = [
    {
      id: 1,
      avatar: "./assets/images/avatar.png",
      name: "User123456",
      date: "21 мая 2025",
      reward: "+125 ODDB",
    },
    {
      id: 2,
      avatar: "./assets/images/avatar.png",
      name: "User789012",
      date: "20 мая 2025",
      reward: "+85 ODDB",
    },
    {
      id: 3,
      avatar: "./assets/images/avatar.png",
      name: "User345678",
      date: "19 мая 2025",
      reward: "+60 ODDB",
    },
  ],
}) {
  return (
    <div className={s.dashboard}>
      {/* Статистика */}
      <div className={s.stats}>
        {stats.map((st, i) => (
          <div key={i} className={s.statCard}>
            <p className={s.statTitle}>{st.title}</p>
            <p className={s.statValue}>{st.value}</p>
            <div className={s.statChange}>
              <FaArrowUp className={s.iconGreen} />
              <span>{st.change}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Список партнёров */}
      <div className={s.partnersSection}>
        <h3 className={s.partnersHeader}>Приглашённые партнёры</h3>
        <div className={s.partnersList}>
          {partners.map((p) => (
            <div key={p.id} className={s.partnerItem}>
              <img src={p.avatar} alt={p.name} className={s.avatar} />
              <div className={s.info}>
                <p className={s.name}>{p.name}</p>
                <p className={s.date}>{p.date}</p>
              </div>
              <p className={s.reward}>{p.reward}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
