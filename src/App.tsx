import "./App.css";
import { useMemo } from "react";
import * as anchor from "@project-serum/anchor";

//import Home from "./Home";

import { DEFAULT_TIMEOUT } from "./connection";
import { clusterApiUrl } from "@solana/web3.js";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import {
  getPhantomWallet,
  getSlopeWallet,
  getSolflareWallet,
  getSolletExtensionWallet,
  getSolletWallet,
} from "@solana/wallet-adapter-wallets";

import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletDialogProvider } from "@solana/wallet-adapter-material-ui";

import { Box, Container, createTheme, Grid, ThemeProvider, Typography } from "@material-ui/core";
import MintingApp from "./MintingApp";

const theme = createTheme({
  palette: {
    type: "dark",
  },
  typography: {
    fontFamily: [
      "Source Sans 3",
      "sans-serif",
    ].join(','),
  },
});

const getCandyMachineId = (_id: number): anchor.web3.PublicKey | undefined => {
  //const  _candyMachine: string;
  //let _candyMachine = null;

  try {
    if(_id === 1){
      return new anchor.web3.PublicKey(process.env.REACT_APP_CANDY_MACHINE_ID_1!);
      console.log("_candyMachine: "+1);

    }
    else if(_id === 2){
      return new anchor.web3.PublicKey(process.env.REACT_APP_CANDY_MACHINE_ID_2!);
      console.log("_candyMachine: "+2);

    }
    else{
      // Default
      return new anchor.web3.PublicKey(process.env.REACT_APP_CANDY_MACHINE_ID!);
      console.log("_candyMachine: "+0);

    }
    //console.log("_candyMachine:"+_candyMachine);

  } catch (e) {
    console.log("Failed to construct CandyMachineId", e);
    return undefined;
  }
};

let error: string | undefined = undefined;

if (process.env.REACT_APP_SOLANA_NETWORK === undefined) {
  error =
    "Your REACT_APP_SOLANA_NETWORK value in the .env file doesn't look right! The options are devnet and mainnet-beta!";
} else if (process.env.REACT_APP_SOLANA_RPC_HOST === undefined) {
  error =
    "Your REACT_APP_SOLANA_RPC_HOST value in the .env file doesn't look right! Make sure you enter it in as a plain-text url (i.e., https://metaplex.devnet.rpcpool.com/)";
}

const candyMachineId1 = getCandyMachineId(1);
const candyMachineId2 = getCandyMachineId(2);

const network = (process.env.REACT_APP_SOLANA_NETWORK ??
  "devnet") as WalletAdapterNetwork;
const rpcHost =
  process.env.REACT_APP_SOLANA_RPC_HOST ?? anchor.web3.clusterApiUrl("devnet");
const connection = new anchor.web3.Connection(rpcHost);

/*
const crossmit_1 = (process.env.REACT_APP_CROSSMIT_CLIENT_ID_1) as string ;
const crossmit_2 = (process.env.REACT_APP_CROSSMIT_CLIENT_ID_2) as string;
*/

const App = () => {
  const endpoint = useMemo(() => clusterApiUrl(network), []);

  const wallets = useMemo(
    () => [
      getPhantomWallet(),
      getSolflareWallet(),
      getSlopeWallet(),
      getSolletWallet({ network }),
      getSolletExtensionWallet({ network }),
    ],
    []
  );

  

  return (
    <>
    <Box>
      <Container maxWidth="lg">
        <Typography
          component="h5"
          variant="h5"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          WELCOME TO OUR MINT PAGE!
        </Typography>
        <Typography variant="h6" align="center" color="textSecondary" paragraph>
        Each <span className="span_bold">UNIQUE AND AMAZING</span> NFT can be worth <span className="span_bold">10X</span> more OpenSea!
        </Typography>
        <Typography variant="body2" align="center" color="textSecondary" paragraph>
         Claim you Super Star NFT by pressing the <span className="span_bold">&quot;MINT&quot;</span> Button and a random NFT will be deliver in your Wallet. Don&apos;t have a Solana Wallet? Buy it with you Credit Card or ETH.
         </Typography>
         <Typography variant="body2" align="center" color="textSecondary" paragraph>
         Become part of the Club! Get <span className="span_bold">EXCLUSIVE</span> Giveaways, Events and <span className="span_bold">EARN $SOL EVERY MONTH.</span> 
        </Typography>
      </Container>
    </Box>
   
    
    <ThemeProvider theme={theme}>
      <ConnectionProvider endpoint={endpoint}>
        <WalletProvider wallets={wallets} autoConnect>
          <WalletDialogProvider>
          <Container maxWidth="lg">
          {/* End hero unit */}
          <Grid container spacing={1}>
            <Grid item xs={12} sm={3}>
            <MintingApp
              candyMachineName="KING 7 ♔"
              candyMachineImage="KING7.GIF"
              candyMachineDesc=""
              crossmintClient="c23ef00b-ff4f-4def-9d78-b25fc6c5285b"
              candyMachineId={candyMachineId1}
              connection={connection}
              txTimeout={DEFAULT_TIMEOUT}
              rpcHost={rpcHost}
              network={network}
              error={error}
            />
            </Grid>
            <Grid item xs={12} sm={3}>
            <MintingApp
              candyMachineName="LADY LIPS ❤"
              candyMachineImage="LADYLIPS.GIF"
              candyMachineDesc=""
              crossmintClient="b577ec84-3886-4884-b4f5-880954b65441"
              candyMachineId={candyMachineId2}
              connection={connection}
              txTimeout={DEFAULT_TIMEOUT}
              rpcHost={rpcHost}
              network={network}
              error={error}
            />
            </Grid>
            <Grid item xs={12} sm={3}>
            </Grid>
            <Grid item xs={12} sm={3}>
            </Grid>
          </Grid>
          </Container>
            
          </WalletDialogProvider>
        </WalletProvider>
      </ConnectionProvider>
    </ThemeProvider>
    </>
  );
};

export default App;
