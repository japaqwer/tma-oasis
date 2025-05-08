"use client";

import React, { useState, useEffect, useCallback } from "react";
import { useTonConnectUI } from "@tonconnect/ui-react";
import { Address } from "@ton/core";

export default function Header() {
  const tonConnectUI = useTonConnectUI();
  const [walletAddress, setWalletAddress] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const handleWalletConnection = useCallback((address) => {
    setWalletAddress(address);
    console.log("Wallet connected successfully!");
    setIsLoading(false);
  }, []);

  const handleWalletDisconnection = useCallback(() => {
    setWalletAddress(null);
    console.log("Wallet disconnected successfully!");
    setIsLoading(false);
  }, []);

  useEffect(() => {
    async function checkConnection() {
      if (tonConnectUI.account?.address) {
        handleWalletConnection(tonConnectUI.account.address);
      } else {
        handleWalletDisconnection();
      }
    }

    checkConnection();

    // Подписываемся на изменения статуса (connect/disconnect)
    const unsubConnect = tonConnectUI.on("connect", (wallet) => {
      handleWalletConnection(wallet.account.address);
    });
    const unsubDisconnect = tonConnectUI.on("disconnect", () => {
      handleWalletDisconnection();
    });

    return () => {
      unsubConnect();
      unsubDisconnect();
    };
  }, [tonConnectUI, handleWalletConnection, handleWalletDisconnection]);

  const handleAction = useCallback(async () => {
    setIsLoading(true);
    if (tonConnectUI.connected) {
      await tonConnectUI.disconnect();
    } else {
      await tonConnectUI.openModal();
    }
  }, [tonConnectUI]);

  const formatAddress = (addr) => {
    try {
      const parsed = Address.parse(addr).toString();
      return `${parsed.slice(0, 4)}…${parsed.slice(-4)}`;
    } catch {
      return addr;
    }
  };

  return (
    <header className="flex items-center justify-between p-4 bg-white border-b">
      {isLoading ? (
        <div className="text-gray-500">Loading…</div>
      ) : walletAddress ? (
        <div className="flex items-center gap-4">
          <span className="text-gray-700 font-mono">
            {formatAddress(walletAddress)}
          </span>
          <button
            onClick={handleAction}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Disconnect
          </button>
        </div>
      ) : (
        <button
          onClick={handleAction}
          className="flex items-center gap-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M3 4a1 1 0 011-1h4v2H5v10h3v2H4a1 1 0 01-1-1V4z" />
            <path d="M13 7l-1.293-1.293a1 1 0 111.414-1.414l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L13 7z" />
          </svg>
          Connect TON Wallet
        </button>
      )}
    </header>
  );
}
