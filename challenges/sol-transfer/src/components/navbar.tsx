import React from "react";
import Image from "next/image";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

export default function Navbar() {
  return (
    <header className="flex items-center justify-between sticky bg-gray-800 top-0 left-0 right-0 p-4">
      <Image src="/solanaLogo.png" alt="Solana Logo" width={100} height={80} />
      <h1 className="text-xl font-extrabold">Solana Giveaway Page</h1>
      <WalletMultiButton  />
    </header>
  );
}
