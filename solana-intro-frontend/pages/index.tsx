import type { NextPage } from "next";
import { useState } from "react";
import styles from "../styles/Home.module.css";
import AddressForm from "../components/AddressForm";
import {
  Connection,
  PublicKey,
  LAMPORTS_PER_SOL,
  clusterApiUrl,
} from "@solana/web3.js";

const Home: NextPage = () => {
  const [balance, setBalance] = useState(0);
  const [address, setAddress] = useState("");
  const [executable, setExecutable] = useState("Nope");

  // testing-wallet = ComputeBudget111111111111111111111111111111
  const addressSubmittedHandler = (address: string) => {
    try {
      const key = new PublicKey(address);
    setAddress(key.toBase58());
    const connection = new Connection(clusterApiUrl("devnet"));
    connection.getBalance(key).then((balance) => {
      setBalance(balance / LAMPORTS_PER_SOL);
    });
    connection.getAccountInfo(key).then((accountInfo) => {
      if (accountInfo?.executable) {
        setExecutable("Yep");
      } else {
        setExecutable("Nope");
      }
    });
    } catch (error) {
      setAddress("")
      setBalance(0)
      alert(error);
    }
  };

  return (
    <div className={styles.App}>
      <header className={styles.AppHeader}>
        <p>Start Your Solana Journey</p>
        <AddressForm handler={addressSubmittedHandler} />
        <p>{`Address: ${address}`}</p>
        <p>{`Balance: ${balance} SOL`}</p>
      </header>
    </div>
  );
};

export default Home;
