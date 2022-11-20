import { Auctions } from "@liqnft/candy-shop";
import { useAnchorWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { candyShop } from "../utils/candy-shop";
import styled from "styled-components";

const AuctionsView: React.FC = () => {
  const wallet = useAnchorWallet();

  return (
    <DesContainer>
      <h1 style={{ marginTop: 40, marginBottom: 15 }}>Auctions</h1>
      <p style={{ marginBottom: 40 }}>Are you an artist who wants your work to be auctioned using PAW? contact us <a href="https://discord.gg/FWEsuQ4Zu6" target="_blank" rel="noreferrer noopener">Discord </a>.</p>
      <Auctions candyShop={candyShop} wallet={wallet} walletConnectComponent={<WalletMultiButton />} />
    </DesContainer>
  );
};

export default AuctionsView;
const DesContainer = styled.div`
  width: 100%;

  p > a {
    color: #fff;
    text-decoration: underline;
  }
`;
