import React, { useState } from "react";
import { ethers, BigNumber } from "ethers";
import DemoNFT from "../utils/DemoNFT.json";

const ContractAddress = "0xa543D5e76e2adf69538cdA0439B62b413252906b";

const MainMint = ({ accounts, setAccount }) => {
  const [mintAmount, setMintAccount] = useState(1);
  const isConnected = Boolean[0];

  const handleMint = async () => {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        ContractAddress,
        DemoNFT.abi,
        signer
      );
      try {
        const response = await contract.mint(BigNumber.from(mintAmount));
        console.log("Response: ", response);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleDecrement = () => {
    if (mintAmount <= 1) return;
    setMintAccount(mintAmount - 1);
  };

  const handleIncrement = () => {
    if (mintAmount >= 3) return;
    setMintAccount(mintAmount + 1);
  };

  return (
    <div>
      <h1>DemoNFT</h1>
      <p>
        It's 2069. Can the DemoNFT save humans from destructive rampant NFT
        speculation? Mint DemoNFT to find out.
      </p>
      {isConnected ? (
        <div>
          <div>
            <button onClick={handleDecrement}>-</button>
            <input type="number" value={mintAmount} />
            <button onClick={handleIncrement}>+</button>
          </div>
          <button onClick={handleMint}>Mint Now</button>
        </div>
      ) : (
        <p>You must be connect your wallet to Mint.</p>
      )}
    </div>
  );
};

export default MainMint;
