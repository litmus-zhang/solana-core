import {
  Connection,
  Keypair,
  LAMPORTS_PER_SOL,
  clusterApiUrl,
} from "@solana/web3.js";
import wallet1 from "./dev-wallet1.json";

const from = Keypair.fromSecretKey(new Uint8Array(wallet1));

const connection = new Connection(clusterApiUrl("devnet"));

(async (from: Keypair, amount: number) => {
  const txHash = await connection.requestAirdrop(
    from.publicKey,
    amount * LAMPORTS_PER_SOL
  );
  console.log(
    "Checkout txhash on solana explorer:  https://explorer.solana.com/tx/" +
      txHash +
      "?cluster=devnet"
  );
})(from, 2);
