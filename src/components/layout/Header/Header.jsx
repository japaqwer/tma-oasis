"use client";

import React from "react";
import {
  useTonAddress,
  useTonConnectModal,
  useTonConnectUI,
} from "@tonconnect/ui-react";
import { FaWallet } from "react-icons/fa";
import s from "./Header.module.scss";

export default function Header() {
  // текущий адрес или пустая строка
  const address = useTonAddress();
  // метод для открытия модального окна
  const { open } = useTonConnectModal();
  // экземпляр TonConnectUI для disconnect()
  const [tonConnectUI] = useTonConnectUI();

  const handleConnectClick = async () => {
    try {
      if (address) {
        // полное отключение кошелька
        await tonConnectUI.disconnect();
      } else {
        // открываем выбор кошелька
        await open();
      }
    } catch (err) {
      console.error("TonConnect error:", err);
    }
  };

  return (
    <header className={s.header}>
      <div className={s.connect_wallet}>
        <div className={s.connect_title}>
          <FaWallet color="#8B5CF6" />
          <p>
            {address
              ? `${address.slice(0, 6)}…${address.slice(-4)}`
              : "Подключить кошелек"}
          </p>
        </div>
        <button className={s.button} onClick={handleConnectClick}>
          {address ? "Отключить" : "Connect"}
        </button>
      </div>
    </header>
  );
}
