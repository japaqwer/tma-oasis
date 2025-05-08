"use client";

import React from "react";
import { FaCopy, FaShareAlt } from "react-icons/fa";
import s from "./ReferralCard.module.scss";

export default function ReferralCard({
  link = "t.me/TonFarm_bot?start=ref123456",
}) {
  const handleCopy = () => {
    navigator.clipboard.writeText(link);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({ title: "Моя реферальная ссылка", url: link })
        .catch(console.error);
    } else {
      // fallback: просто копируем
      navigator.clipboard.writeText(link);
    }
  };

  return (
    <div className={s.card}>
      <h3 className={s.title}>Ваша реферальная ссылка</h3>
      <div className={s.inputGroup}>
        <input
          className={s.input}
          type="text"
          readOnly
          value={link}
          onClick={(e) => e.target.select()}
        />
        <button className={s.copyBtn} onClick={handleCopy}>
          <FaCopy />
        </button>
      </div>
      <button className={s.shareBtn} onClick={handleShare}>
        <FaShareAlt className={s.icon} />
        Поделиться
      </button>
    </div>
  );
}
