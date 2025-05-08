// ConnectWalletModal.jsx
"use client";
import React from "react";
import { TonConnectButton, useTonConnectUI } from "@tonconnect/ui-react";
import s from "./ConnectWalletModal.module.scss";

export default function ConnectWalletModal({ onClose }) {
  const { connect, account, disconnect } = useTonConnectUI();

  return (
    <div className={s.backdrop} onClick={onClose}>
      <div className={s.modal} onClick={(e) => e.stopPropagation()}>
        <button className={s.closeBtn} onClick={onClose}>
          ×
        </button>
        <h2 className={s.title}>Подключите TON-кошелёк</h2>

        {/* ИЛИ свой вариант */}
        {!account ? (
          <button className={s.connectBtn} onClick={() => connect()}>
            Connect TON Wallet
          </button>
        ) : (
          <div className={s.account}>
            <p>Connected:</p>
            <code>{account.address}</code>
            <button onClick={() => disconnect()}>Disconnect</button>
          </div>
        )}
      </div>
    </div>
  );
}
