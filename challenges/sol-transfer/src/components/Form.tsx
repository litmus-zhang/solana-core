import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import React, { FC } from "react";
import InputComponent from "./InputComponent";
import {
  LAMPORTS_PER_SOL,
  PublicKey,
  SystemProgram,
  Transaction,
  sendAndConfirmTransaction,
} from "@solana/web3.js";

export const Form: FC = () => {
  const [wallet, setWallet] = React.useState("");
  const [amount, setAmount] = React.useState(0);
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  const sendSol = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      if (!connection || !publicKey) {
        alert("Connect to a wallet");
        return;
      }
      const transaction = new Transaction().add(
        SystemProgram.transfer({
          fromPubkey: publicKey,
          toPubkey: new PublicKey(wallet),
          lamports: amount * LAMPORTS_PER_SOL,
        })
      );
      transaction.recentBlockhash = (
        await connection.getLatestBlockhash()
      ).blockhash;
      transaction.feePayer = publicKey;
      const signature = await sendTransaction(transaction, connection);
    } catch (error: any) {
      alert(error.message);
    }
  };
  return (
    <div>
      <form onSubmit={sendSol} className="flex flex-col gap-2">
        <InputComponent
          label={"To"}
          type={"text"}
          name={wallet}
          placeholder={"wallet"}
          onChange={(e) => setWallet(e.target.value)}
        />
        <InputComponent
          label={"Amount"}
          type={"Number"}
          name={amount.toString()}
          placeholder={"0.00"}
          onChange={(e) => setAmount(Number(e.target.value))}
        />
        <button
          type="submit"
          className="bg-blue-500 w-full text-white px-4 py-2 rounded-md"
        >
          Send
        </button>
      </form>
    </div>
  );
};
