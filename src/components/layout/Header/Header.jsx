"use client";

import React, { useState } from "react";
import { FaWallet } from "react-icons/fa";
import s from "./Header.module.scss";
import ConnectWalletModal from "@/components/shared/ConnectWalletModal/ConnectWalletModal";

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <header className={s.header}>
      <div className={s.connect_wallet}>
        <div className={s.user_data}>
          <img src="./assets/images/avatar.png" alt="" />
          <p>@username</p>
        </div>
        <button className={s.button} onClick={() => setIsModalOpen(true)}>
          Connect
        </button>
      </div>

      {isModalOpen && (
        <ConnectWalletModal onClose={() => setIsModalOpen(false)} />
      )}
    </header>
  );
}
