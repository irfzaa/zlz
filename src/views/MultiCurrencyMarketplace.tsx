import { CandyShop } from "@liqnft/candy-shop-sdk";
import { Orders, Stat } from "@liqnft/candy-shop";
import { useAnchorWallet } from "@solana/wallet-adapter-react";
import { PublicKey } from "@solana/web3.js";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import styled from "styled-components";
import { useCurrency } from "../components/Currency";
import { useMemo } from "react";
import {

  CANDY_SHOP_PROGRAM_ID,
  NETWORK,
} from "../utils/candy-shop";

const DesContainer = styled.div`
  width: 100%;
`;

const MultiCurrencyMarketplace: React.FC = () => {
  const wallet = useAnchorWallet();
  const { getCurrencySettings } = useCurrency();
  const settings = getCurrencySettings();

  const candyShop = useMemo(
    () =>
      new CandyShop({
        candyShopCreatorAddress: new PublicKey("7UvG2hBMtJafTFizetKLzqRXAMwjp3BBU8FqReeZDHBg"),
        treasuryMint: new PublicKey("7vG8c9DyEUj3k6Sf2FYZ9NsN7nUXDE4XWzvkAoUQwjCp"),
        candyShopProgramId: CANDY_SHOP_PROGRAM_ID,
        env: NETWORK,
        settings,
      }),
    [settings]
  );
  console.log("Currency Settings", settings);

  if (!candyShop) return null;

  return (
    <DesContainer>
      <Stat
        candyShop={candyShop}
        title={"Bloodlust Marketplace"}
        description={
          "Use your Bloodlust token to buy NFT here"
        }
        style={{ paddingBottom: 50 }}
      />
      <Orders
        wallet={wallet}
        candyShop={candyShop}
        walletConnectComponent={<WalletMultiButton />}
      />
    </DesContainer>
  );
};

export default MultiCurrencyMarketplace;
