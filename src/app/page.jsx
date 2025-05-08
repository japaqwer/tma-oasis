"use client";

import React, { useState, useEffect, useCallback } from "react";
import { useTonConnectUI } from "@tonconnect/ui-react";
import { Address } from "@ton/core";

export default function Home() {
  // деструктурируем нужные поля и методы из провайдера
  const { connected, account, openModal, disconnect } = useTonConnectUI();

  const [walletAddress, setWalletAddress] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // при изменении connected или account сразу обновляем состояние
  useEffect(() => {
    setIsLoading(false);
    if (connected && account?.address) {
      setWalletAddress(account.address);
    } else {
      setWalletAddress(null);
    }
  }, [connected, account]);

  // обработчик кнопки: открытие модалки или дизконнект
  const handleWalletAction = useCallback(async () => {
    setIsLoading(true);
    try {
      if (connected) {
        await disconnect();
      } else {
        await openModal();
      }
    } finally {
      setIsLoading(false);
    }
  }, [connected, openModal, disconnect]);

  // форматируем адрес вида AAAA…ZZZZ
  const formatAddress = useCallback((addr) => {
    try {
      const str = Address.parse(addr).toString();
      return `${str.slice(0, 4)}…${str.slice(-4)}`;
    } catch {
      return addr;
    }
  }, []);

  // состояние загрузки
  if (isLoading) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center p-4">
        <div className="bg-gray-200 text-gray-700 font-bold py-2 px-4 rounded">
          Loading…
        </div>
      </main>
    );
  }

  // основной UI
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold mb-8">TON Connect Demo</h1>

      {walletAddress ? (
        <div className="flex flex-col items-center gap-4">
          <p>Connected: {formatAddress(walletAddress)}</p>
          <button
            onClick={handleWalletAction}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Disconnect Wallet
          </button>
        </div>
      ) : (
        <button
          onClick={handleWalletAction}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center gap-2"
        >
          Connect TON Wallet
        </button>
      )}
    </main>
  );
}
