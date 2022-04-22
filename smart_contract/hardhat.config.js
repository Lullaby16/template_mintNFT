require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.4",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/G4xZbw0_o8QLq-rZHfQRXxreI7sufLB0",
      accounts: [
        "f81720f58b8d13a501dd71150c55a43f2b2cb9c9c3e3949e19b890455a7eb89a",
      ],
    },
  },
};
