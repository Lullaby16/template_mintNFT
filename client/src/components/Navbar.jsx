import React from "react";
import Facebook from "../assets/icons/facebook.png";
import Twitter from "../assets/icons/twitter.png";
import Email from "../assets/icons/email.png";

const Navbar = ({ accounts, setAccounts }) => {
  const isConnected = Boolean(accounts[0]);

  const connectWallet = async () => {
    if (window.ethereum) {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setAccounts(accounts);
    }
  };

  return (
    <div className="flex flex-row snap-start justify-between items-center py-5 px-5 text-center font-vt323 text-xl">
      <div className="flex w-1/4 flex-row justify-around items-center">
        <img className="w-10 cursor-pointer" src={Facebook} />
        <img className="w-10 cursor-pointer" src={Twitter} />
        <img className="w-10 cursor-pointer" src={Email} />
      </div>

      <div className="flex w-1/4 flex-row justify-around items-center">
        <div className="cursor-pointer">Mint</div>
        <div className="cursor-pointer">Roadmap</div>
        <div className="cursor-pointer">Game</div>
        <div className="cursor-pointer">Team</div>
        {isConnected ? (
          <p>Connected</p>
        ) : (
          <button
            className="w-50 h-50 bg-[#D65170] rounded shadow-md cursor-pointer"
            onClick={connectWallet}
          >
            <p className="px-2">Connect</p>
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
