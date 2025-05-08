"use client";

import { TonConnectUIProvider } from "@tonconnect/ui-react";

const manifestUrl = "https://tma-oasis.vercel.app/tonconnect-manifest.json";

export default function TonConnectProvider({ children }) {
  return (
    <TonConnectUIProvider manifestUrl={manifestUrl}>
      {children}
    </TonConnectUIProvider>
  );
}
