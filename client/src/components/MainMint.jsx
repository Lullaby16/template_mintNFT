import React, { useState, useEffect } from "react";
import { ethers, BigNumber } from "ethers";
import DemoNFT from "../utils/DemoNFT.json";
import Banner from "../assets/card/Banner.png";

const ContractAddress = "0xa543D5e76e2adf69538cdA0439B62b413252906b";

const CountDown = () => {
  const [days, setDays] = useState();
  const [hour, setHour] = useState();
  const [minute, setMinute] = useState();
  const [second, setSecond] = useState();

  let interval;

  const startTimer = () => {
    const countDate = new Date("May 10, 2022 00:00:00").getTime();
    interval = setInterval(() => {
      const now = new Date().getTime();
      const gap = countDate - now;

      const second = 1000;
      const minute = second * 60;
      const hour = minute * 60;
      const day = hour * 24;

      const textDay = Math.floor(gap / day);
      const textHour = Math.floor((gap % day) / hour);
      const textMinute = Math.floor((gap % hour) / minute);
      const textSecond = Math.floor((gap % minute) / second);

      if (gap < 0) {
        clearInterval(interval.current);
      } else {
        setDays(textDay);
        setHour(textHour);
        setMinute(textMinute);
        setSecond(textSecond);
      }
    });
  };

  useEffect(() => {
    startTimer();
  }, []);

  return (
    <div className="flex flex-row justify-around text-center p-10">
      <div>
        <h3 className="text-2xl">{days}</h3>
        <h3>Day</h3>
      </div>
      <div>
        <h3 className="text-2xl">{hour}</h3>
        <h3>Hour</h3>
      </div>
      <div>
        <h3 className="text-2xl">{minute}</h3>
        <h3>Minute</h3>
      </div>
      <div>
        <h3 className="text-2xl">{second}</h3>
        <h3>Second</h3>
      </div>
    </div>
  );
};

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
    <div className="flex flex-row snap-start bg-cyan-400 w-screen h-screen text-center font-vt323 justify-center items-center">
      <div className="mr-5">
        <p className="text-7xl">AOX</p>
        <p className="text-2xl">
          Decentralized trading card game on blockchain. Mint AOX Card to play
          it.
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
        <CountDown />
      </div>
      <div className="ml-5">
        <img src={Banner} />
      </div>
    </div>
  );
};

export default MainMint;
