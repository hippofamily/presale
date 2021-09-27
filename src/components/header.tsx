import React from "react";
import { useMemo } from "react";
import Home from "../Home";

import { WalletDialogProvider } from "@solana/wallet-adapter-material-ui";

import * as anchor from "@project-serum/anchor";
import { clusterApiUrl } from "@solana/web3.js";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import {
  getPhantomWallet,
  getSolflareWallet,
  getSolletWallet,
} from "@solana/wallet-adapter-wallets";

import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
const treasury = new anchor.web3.PublicKey(
  process.env.REACT_APP_TREASURY_ADDRESS!
);

const config = new anchor.web3.PublicKey(
  process.env.REACT_APP_CANDY_MACHINE_CONFIG!
);

const candyMachineId = new anchor.web3.PublicKey(
  process.env.REACT_APP_CANDY_MACHINE_ID!
);

const network = process.env.REACT_APP_SOLANA_NETWORK as WalletAdapterNetwork;

const rpcHost = process.env.REACT_APP_SOLANA_RPC_HOST!;
const connection = new anchor.web3.Connection(rpcHost);

const startDateSeed = parseInt(process.env.REACT_APP_CANDY_START_DATE!, 10);

const txTimeout = 30000; // milliseconds (confirm this works for your project)

const Header = () => {
  const endpoint = useMemo(() => clusterApiUrl(network), []);

  const wallets = useMemo(
    () => [getPhantomWallet(), getSolflareWallet(), getSolletWallet()],
    []
  );

  return (
    <div>
      <div id="home">
        <header id="header">
          <div className="intro">
            <div className="overlay">
              <div className="container">
                <div className="row">
                  <div className="col-xs-12 col-md-12">
                    <div className="col-md-6 intro-text">
                      <h1>Welcome to HippoFamily</h1>
                      <p>
                        Uniquely algorithmically generated, cute and collectible
                        Hippo Family NFTs that live on the Solana
                      </p>
                      
                      <ConnectionProvider endpoint={endpoint}>
                        <WalletProvider wallets={wallets} autoConnect>
                          <WalletDialogProvider>
                            <Home
                              candyMachineId={candyMachineId}
                              config={config}
                              connection={connection}
                              startDate={startDateSeed}
                              treasury={treasury}
                              txTimeout={txTimeout}
                            />
                          </WalletDialogProvider>
                        </WalletProvider>
                      </ConnectionProvider>
                    </div>

                    <div className="col-xs-2 col-md-4 intro-text">
                      <img
                        src="img/hippo-gif.gif"
                        width='300px' height='300px'
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Header;
