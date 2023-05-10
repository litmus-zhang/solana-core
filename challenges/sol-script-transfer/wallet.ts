import * as fs from "fs";
import {
  PublicKey,
  Keypair,
  Transaction,
  TransactionInstruction,
} from "@solana/web3.js";

const generateWallet = (numberOfWallet: number) => {
  for (let i = 0; i < numberOfWallet; i++) {
    const keypair = Keypair.generate();
    const secretKey = JSON.stringify([...keypair.secretKey]);
    fs.writeFileSync(`./dev-wallet${i}.json`, secretKey);
    console.log(`dev-wallet${i} generated`);
  }
};

generateWallet(2);
