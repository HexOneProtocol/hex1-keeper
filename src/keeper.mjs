import { FEED_ABI } from "./abi/feed-abi.mjs";
import { ethers } from "ethers";

const PERIOD = 300000;

const PROVIDER = new ethers.JsonRpcProvider(process.env.RPC_URL);
const KEEPER = new ethers.Wallet(process.env.PRIVATE_KEY, PROVIDER);
const FEED = new ethers.Contract(process.env.FEED_ADDR, FEED_ABI, KEEPER);

const update = async () => {
    try {
        const tx = await FEED.update();
        await tx.wait();
        console.log(`Update transaction hash: ${tx.hash} confirmed at ${new Date().toISOString()}`);
    } catch (error) {
        console.log(`Failed to execute update: ${error}`);
    }
}

const main = async () => {
    console.log(`Starting update process with RPC_URL: ${process.env.RPC_URL} and FEED_ADDR: ${process.env.FEED_ADDR}...`);

    await update();

    setInterval(update, PERIOD);
}

main().catch(err => {
    console.error(err);
    process.exit(1);
});