import {
  Connection,
  Keypair,
  LAMPORTS_PER_SOL,
  clusterApiUrl,
} from "@solana/web3.js";
import * as fs from "fs";
import wallet0 from "./wallet0.json";
import wallet1 from "./wallet1.json";

const generateKeypair = (number: number) => {
  for (let i = 0; i < number; i++) {
    const keypair = Keypair.generate();
    const secretKey = JSON.stringify([...keypair.secretKey]);
    fs.writeFileSync(`./wallet${i}.json`, secretKey);
    console.log(`wallet${i} generated`);
  }
};

const airdrop = async (keypair: Keypair) => {
  const connection = new Connection(clusterApiUrl("devnet"));
  let balance = await connection.getBalance(keypair.publicKey);
  console.log("Currency balance:", balance / LAMPORTS_PER_SOL, "SOL");
  const airdropSignature = await connection.requestAirdrop(
    keypair.publicKey,
    LAMPORTS_PER_SOL * 2
  );
   balance = await connection.getBalance(keypair.publicKey);
   console.log("Currency balance:", balance / LAMPORTS_PER_SOL, "SOL");
};

//generateKeypair(2);
const keypair1 = Keypair.fromSecretKey(new Uint8Array(wallet0));
const keypair2 = Keypair.fromSecretKey(new Uint8Array(wallet1));
airdrop(keypair1);
airdrop(keypair2);
