import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import InputComponents from "@/components/InputComponent";
import { useState } from "react";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { Form } from "@/components/Form";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [balance, setBalance] = useState(0);
const {connect, wallet} =  useWallet();

  
  return (
    <main className="">
      <Navbar />
      <div className="flex flex-col justify-center gap-2 items-center my-10 p-10 ">
      <h1>
          My balance: <span>{balance}</span>
        </h1>
        <Form/>
      </div>
    </main>

  );
}
