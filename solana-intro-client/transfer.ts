import { Connection, Keypair, LAMPORTS_PER_SOL, SystemProgram, Transaction, clusterApiUrl, sendAndConfirmTransaction } from "@solana/web3.js";
import wallet0 from "./wallet0.json";
import wallet1 from "./wallet1.json";

const keypair1 = Keypair.fromSecretKey(new Uint8Array(wallet0));
const keypair2 = Keypair.fromSecretKey(new Uint8Array(wallet1));
const connection = new Connection(clusterApiUrl("devnet"));
const makeTransfer = async (to : Keypair, from: Keypair, amount : number) => {
    console.log("transfering", amount, "SOL from", from.publicKey.toBase58(), "to", to.publicKey.toBase58());
    try {
        const transfer = new Transaction().add(
            SystemProgram.transfer({
                fromPubkey: from.publicKey,
                toPubkey: to.publicKey,
                lamports: amount * LAMPORTS_PER_SOL,
            })
        );
        transfer.recentBlockhash = (await connection.getLatestBlockhash()).blockhash;
        transfer.feePayer = from.publicKey;
        const signature = await sendAndConfirmTransaction(connection, transfer, [from])
        console.log("SIGNATURE", signature);


    } catch (error) {
        console.log(error);
    }
};


makeTransfer(keypair2, keypair1, 0.1);

