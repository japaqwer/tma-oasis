"use client";

import React from "react";
import { useTonAddress, useTonConnectModal } from "@tonconnect/ui-react";
import { FaWallet } from "react-icons/fa";
import s from "./Header.module.scss";

export default function Header() {
  // адрес в пользовательском формате, или пустая строка, если не подключено
  const address = useTonAddress();
  // методы для открытия и закрытия модального окна
  const { open, close } = useTonConnectModal();

  const handleConnectClick = () => {
    if (address) {
      close(); // отключить
    } else {
      open(); // открыть список кошельков
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
