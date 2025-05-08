"use client";

import React from "react";
import { FaWallet, FaTimes } from "react-icons/fa";
import s from "./ConnectWalletModal.module.scss";

export default function ConnectWalletModal({ onClose }) {
  return (
    <div className={s.backdrop} onClick={onClose}>
      <div className={s.modal} onClick={(e) => e.stopPropagation()}>
        <button className={s.closeBtn} onClick={onClose}>
          <FaTimes />
        </button>

        <h2 className={s.title}>
          Подключи свой <span>TON</span> wallet
        </h2>
        <p className={s.subtitle}>
          используй свой кошелек в Telegram
          <br />и получай $ODDB каждый день
        </p>

        <button
          className={s.connectBtn}
          onClick={() => {
            // здесь инициируйте логику Telegram Web App
          }}
        >
          <FaWallet className={s.walletIcon} />
          Подключить кошелек
        </button>
      </div>
    </div>
  );
}
