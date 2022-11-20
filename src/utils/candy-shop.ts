import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { PublicKey } from "@solana/web3.js";
import { CandyShop } from "@liqnft/candy-shop-sdk";

const CANDY_SHOP_CREATOR_ADDRESS = new PublicKey(
  process.env.REACT_APP_CANDY_SHOP_CREATOR_ADDRESS!
);
const CANDY_SHOP_TREASURY_MINT = new PublicKey(
  process.env.REACT_APP_CANDY_SHOP_TREASURY_MINT!
);
const CANDY_SHOP_PROGRAM_ID = new PublicKey(
  process.env.REACT_APP_CANDY_SHOP_PROGRAM_ID!
);
const NETWORK = process.env.REACT_APP_SOLANA_NETWORK! as WalletAdapterNetwork;

const RPC_HOST = process.env.REACT_APP_SOLANA_RPC_HOST!;

const candyShop = new CandyShop({
  candyShopCreatorAddress: new PublicKey("4ySzzse9RNjDeqf46tWoweD8vjedfuTMJXVJcY9nZ3Cs"), // Candy Shop owner address
  treasuryMint: new PublicKey("8qyhuqWvBKYn2FT19G41rwK6WAC6PMsAvQpXUihEwLAa"), // Candy Shop transaction currency
  candyShopProgramId: new PublicKey("csbMUULiQfGjT8ezT16EoEBaiarS6VWRevTw1JMydrS"), // Candy Shop program ID
  env: "mainnet-beta", // network
  settings: {
    currencySymbol: "!paw", // Currency Symbol
    currencyDecimals: 6 // Currency Decimals
  }
});

export {
  candyShop,
  CANDY_SHOP_CREATOR_ADDRESS,
  CANDY_SHOP_TREASURY_MINT,
  CANDY_SHOP_PROGRAM_ID,
  NETWORK,
  RPC_HOST,
};
