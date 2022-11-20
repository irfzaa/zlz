import { CandyShop } from "@liqnft/candy-shop-sdk";
import { Sell } from "@liqnft/candy-shop";
import { useAnchorWallet } from "@solana/wallet-adapter-react";
import { PublicKey } from "@solana/web3.js";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useCurrency } from "../components/Currency";
import styled from "styled-components";
import { useMemo } from "react";
import {
  CANDY_SHOP_PROGRAM_ID,
  NETWORK,
} from "../utils/candy-shop";

const DesContainer = styled.div`
  width: 100%;

  .wallet-adapter-button {
    margin: 0 auto;
  }
`;

const MyCollection: React.FC = () => {
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

  if (!candyShop) {
    return <></>;
  }

  return (
    <DesContainer>
      <h1 style={{ marginBottom: 30 }}>List with Bloodlust</h1>
      <Sell
        wallet={wallet}
        candyShop={candyShop}
        walletConnectComponent={<WalletMultiButton />}
        enableCacheNFT={true}
      />
    </DesContainer>
  );
};

export default MyCollection;
