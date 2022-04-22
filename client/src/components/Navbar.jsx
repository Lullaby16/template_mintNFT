import React from "react";

const Navbar = ({ accounts, setAccount }) => {
  const isConnected = Boolean[0];

  const connectWallet = async () => {
    if (window.ethereum) {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setAccount(accounts);
    }
  };

  return (
    <div>
      <div>Facebook</div>
      <div>Twitter</div>
      <div>Email</div>

      <div>About</div>
      <div>Mint</div>
      <div>Team</div>

      {isConnected ? (
        <p>Connected</p>
      ) : (
        <button onClick={connectWallet}>Connect</button>
      )}
    </div>
  );
};

export default Navbar;
