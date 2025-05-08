"use client";

import React, { useState } from "react";
import { FaWallet } from "react-icons/fa";
import s from "./Header.module.scss";

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <header className={s.header}>
      <div className={s.connect_wallet}>
        <div className={s.connect_title}>
          <FaWallet color="#8B5CF6" />
          <p>Подключить кошелек</p>
        </div>
        <button className={s.button} onClick={() => setIsModalOpen(true)}>
          Connect
        </button>
      </div>
    </header>
  );
}
