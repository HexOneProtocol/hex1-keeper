import { FEED_ABI } from "./abi/feed-abi.mjs";
import { ethers } from "ethers";

const PERIOD = 300000;

var provider;
var keeper;
var feed;

const update = async () => {
    try {
        const tx = await feed.update();
        await tx.wait();
        console.log(`Update transaction hash: ${tx.hash} confirmed at ${new Date().toISOString()}`);
    } catch (error) {
        console.log(`Failed to execute update: ${error}`);
    }
}

const main = async () => {
    provider = new ethers.JsonRpcProvider(process.env.RPC_URL);
    keeper = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
    feed = new ethers.Contract(process.env.FEED_ADDR, FEED_ABI, keeper);

    console.log(`Starting update process with RPC_URL: ${process.env.RPC_URL} and FEED_ADDR: ${process.env.FEED_ADDR}...`);

    await update();

    setInterval(update, PERIOD);
}

main().catch(err => {
    console.error(err);
    process.exit(1);
});