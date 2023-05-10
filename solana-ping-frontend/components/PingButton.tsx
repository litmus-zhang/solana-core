import { FC, useState } from "react";
import styles from "../styles/PingButton.module.css";
import React from "react";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import {
  PublicKey,
  Transaction,
  TransactionInstruction,
} from "@solana/web3.js";

const PROGRAM_ID = new PublicKey(
  "ChT1B39WKLS8qUrkLvFDXMhEJ4F1XZzwUNHUt4AU9aVa"
);
const PROGRAM_DATA_PUBLIC_KEY = new PublicKey(
  "Ah9K7dQ8EHaZqcAsgBW8w37yN2eAy3koFmUn4x3CJtod"
);

export const PingButton: FC = () => {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();

  const onClick = () => {
    if (!connection || !publicKey) {
      alert("Connect to a wallet first!");
      return;
    }
    const transaction = new Transaction();
    const instruction = new TransactionInstruction({
      keys: [
        {
          pubkey: PROGRAM_DATA_PUBLIC_KEY,
          isSigner: false,
          isWritable: true,
        },
      ],
      programId: PROGRAM_ID,
    });
	transaction.add(instruction);
	sendTransaction(transaction, connection).then((res) => {
		console.log("Explorer URL: https://explorer.solana.com/tx/" + res + "?cluster=devnet")
	});
  };


  return (
    <div className={styles.buttonContainer} onClick={onClick}>
      <button className={styles.button}>Ping!</button>
    </div>
  );
};
