import { defineConfig } from "hardhat/config";
import hardhatIgnitionViemPlugin from "@nomicfoundation/hardhat-ignition-viem";
//import hardhatVerify from "@nomicfoundation/hardhat-verify";
//import ethers from "@nomicfoundation/hardhat-ethers";
//import HardhatIgnitionEthersPlugin from "@nomicfoundation/hardhat-ignition-ethers";
//import "@nomicfoundation/hardhat-toolbox";
import  hardhatToolboxViemPlugin from "@nomicfoundation/hardhat-toolbox-viem"; 

//import "@nomicfoundation/hardhat-toolbox"; 
import { ENV_ALCHEMY_API_KEY } from './env.ts';

export default defineConfig({
  plugins: [hardhatIgnitionViemPlugin,hardhatToolboxViemPlugin],
  solidity: {
    version: "0.8.28",
  },
   networks: {
    sepoliaalchemy: {
      type: "http",
      chainType: "l1",
      url: ENV_ALCHEMY_API_KEY//"https://eth-sepolia.g.alchemy.com/v2/rWmu9sVEkanY0gbQXCow-",//configVariable("SEPOLIA_RPC_URL"),
      //accounts: [""],//your wallet private key
    },
  },
});


 