import { ethers } from "ethers";

const defaultProvider = new ethers.providers.JsonRpcProvider("http://localhost:8545");

// call to send fails with node 18 and succeeds with node 16.
console.log("eth_chainId", await defaultProvider.send("eth_chainId"));
