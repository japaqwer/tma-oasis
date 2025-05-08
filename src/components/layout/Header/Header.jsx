"use client";

import React, { useState, useCallback } from "react";
import { FaWallet } from "react-icons/fa";
import { useTonConnectUI } from "@tonconnect/ui-react";
import s from "./Header.module.scss";

export default function Header() {
  const tonConnectUI = useTonConnectUI();
  const [isLoading, setIsLoading] = useState(false);

  // адрес из контекста провайдера (или null)
  const address = tonConnectUI.account?.address || null;

  const formatAddress = useCallback((addr) => {
    return `${addr.slice(0, 6)}…${addr.slice(-4)}`;
  }, []);

  const handleAction = useCallback(async () => {
    setIsLoading(true);
    if (tonConnectUI.connected) {
      await tonConnectUI.disconnect();
    } else {
      await tonConnectUI.openModal();
    }
    setIsLoading(false);
  }, [tonConnectUI]);

  return (
    <header className={s.header}>
      <div className={s.connect_wallet}>
        <div className={s.connect_title}>
          <FaWallet color="#8B5CF6" />
          {address ? (
            <span className={s.username}>{formatAddress(address)}</span>
          ) : (
            <p>Подключить кошелек</p>
          )}
        </div>
        <button
          className={address ? s.disconnectBtn : s.button}
          onClick={handleAction}
          disabled={isLoading}
        >
          {isLoading ? "Loading…" : address ? "Disconnect" : "Connect"}
        </button>
      </div>
    </header>
  );
}
