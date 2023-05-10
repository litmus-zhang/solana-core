import {
  Connection,
  Keypair,
  LAMPORTS_PER_SOL,
  PublicKey,
  SystemProgram,
  Transaction,
  clusterApiUrl,
  sendAndConfirmTransaction,
} from "@solana/web3.js";
import wallet0 from "./dev-wallet0.json";
import wallet1 from "./dev-wallet1.json";

const from = Keypair.fromSecretKey(new Uint8Array(wallet0));
const to = new PublicKey("D6R2h5zXaprFyKNh2QwqiY4ZvW6TE5cfyrCPTWvQdLcc");

const connection = new Connection(clusterApiUrl("devnet"));

(async (from: Keypair, to: PublicKey) => {
  try {
    // get the from and to wallet balance
    let fromBalance = await connection.getBalance(from.publicKey);
    console.log("from balance: " + fromBalance / LAMPORTS_PER_SOL);
    const transfer = new Transaction().add(
      SystemProgram.transfer({
        fromPubkey: from.publicKey,
        toPubkey: to,
        lamports: fromBalance - 1000000,
      })
    );
    transfer.recentBlockhash = (
      await connection.getLatestBlockhash()
    ).blockhash;
    transfer.feePayer = from.publicKey;
    const signature = await sendAndConfirmTransaction(connection, transfer, [
    from
    ]);

    const fee =
      (
        await connection.getFeeForMessage(
          transfer.compileMessage(),
          "confirmed"
        )
      ).value || 0;

      console.log("fee: " + fee / LAMPORTS_PER_SOL);

    console.log(`
    Successful transfer of lamports from ${from.publicKey} to ${to}
    check transaction details here https://explorer.solana.com/tx/${signature}?cluster=devnet
    `);
  } catch (error) {
    console.log(error);
  }
})(from, to);
