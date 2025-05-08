"use client";
import React, { useState } from "react";
import { FaWallet } from "react-icons/fa";
import { useTonConnectUI } from "@tonconnect/ui-react";
import s from "./Header.module.scss";
import ConnectWalletModal from "@/components/shared/ConnectWalletModal/ConnectWalletModal";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { account } = useTonConnectUI();

  return (
    <header className={s.header}>
      <div className={s.connect_wallet}>
        {account ? (
          <div className={s.profile}>
            <span className={s.address}>
              {account.address.slice(0, 6)}…{account.address.slice(-4)}
            </span>
          </div>
        ) : (
          <>
            <div className={s.connect_title}>
              <FaWallet color="#8B5CF6" />
              <p>Подключить кошелек</p>
            </div>
            <button className={s.button} onClick={() => setIsOpen(true)}>
              Connect
            </button>
          </>
        )}
      </div>

      {isOpen && <ConnectWalletModal onClose={() => setIsOpen(false)} />}
    </header>
  );
}
