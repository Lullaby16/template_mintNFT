import React, { useState } from "react";
import { ethers, BigNumber } from "ethers";
import DemoNFT from "../utils/DemoNFT.json";

const ContractAddress = "0xa543D5e76e2adf69538cdA0439B62b413252906b";

const MainMint = ({ accounts }) => {
  const [mintAmount, setMintAccount] = useState(1);
  const isConnected = Boolean(accounts[0]);

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
        const response = await contract.mint(BigNumber.from(mintAmount), {
          value: ethers.utils.parseEther((0.02 * mintAmount).toString()),
        });
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
    <div className="text-center font-vt323 mt-60">
      <p className="text-7xl">AOX</p>
      <p className="text-2xl">
        Decentralized trading card game on blockchain. Mint AOX Card to play it.
      </p>
      {isConnected ? (
        <div className="mt-8">
          <div>
            <button className="border-2 w-5" onClick={handleDecrement}>
              -
            </button>
            <input
              className="border-2 text-black text-center"
              type="number"
              value={mintAmount}
            />
            <button className="border-2 w-5" onClick={handleIncrement}>
              +
            </button>
          </div>
          <button
            className="text-2xl w-50 h-50 bg-[#D65170] rounded shadow-md cursor-pointer p-2 mt-5"
            onClick={handleMint}
          >
            Mint Now
          </button>
        </div>
      ) : (
        <p>You must be connect your wallet to Mint.</p>
      )}
    </div>
  );
};

export default MainMint;
