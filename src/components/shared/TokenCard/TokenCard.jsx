import React from "react";
import { FaClock, FaArrowUp, FaCalendarAlt, FaTrophy } from "react-icons/fa";
import s from "./TokenCard.module.scss";

export default function TokenCard({
  balance = 0,
  daily = 0,
  timer = "00:00:00",
  level = 0,
  days = 0,
  total = 0,
}) {
  return (
    <div className={s.dashboard}>
      {/* Основная карточка */}
      <div className={s.card}>
        <div className={s.header}>
          <div className={s.balance}>
            <h2>{balance} ODDB</h2>
            <p>Текущий баланс</p>
          </div>
          <div className={s.level}>Farmer Lv.{level}</div>
        </div>

        <div className={s.info}>
          <div className={s.daily}>
            <FaArrowUp className={s.iconGreen} />
            <span>+{daily} ODDB/day</span>
          </div>
          <div className={s.timer}>
            <FaClock className={s.iconBlue} />
            <span>{timer}</span>
          </div>
        </div>

        <button className={s.button}>Claim Rewards</button>
      </div>

      {/* Нижний ряд из двух маленьких карточек */}
      <div className={s.bottom}>
        <div className={s.smallCard}>
          <FaCalendarAlt className={s.iconBlueSmall} />
          <div>
            <h3>{days} Дней</h3>
            <p>Активного фарма</p>
          </div>
        </div>

        <div className={s.smallCard}>
          <FaTrophy className={s.iconPurpleSmall} />
          <div>
            <h3>{total} ODDB</h3>
            <p>Всего заработано</p>
          </div>
        </div>
      </div>
    </div>
  );
}
