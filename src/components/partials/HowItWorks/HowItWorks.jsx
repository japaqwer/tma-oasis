import React from "react";
import { FaNetworkWired, FaCheckCircle } from "react-icons/fa";
import s from "./HowItWorks.module.scss";

export default function HowItWorks() {
  const levels = [
    { label: "Уровень 1: 5% от дохода" },
    { label: "Уровень 2-5: 3% от дохода" },
    { label: "Уровень 6-10: 1% от дохода" },
  ];

  return (
    <section className={s.how}>
      <h2 className={s.title}>Как это работает?</h2>

      <div className={s.card}>
        <div className={s.header}>
          <FaNetworkWired className={s.iconBlue} />
          <p className={s.description}>
            Приглашайте пользователей и получайте процент с их дохода до 10
            поколений в глубину. Чем активнее ваша сеть — тем выше ваш пассивный
            доход.
          </p>
        </div>

        <ul className={s.list}>
          {levels.map((lvl, i) => (
            <li key={i}>
              <FaCheckCircle className={s.iconGreen} />
              <span>{lvl.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
