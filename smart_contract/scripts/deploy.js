const hre = require("hardhat");

const main = async () => {
  const DemoNFT = await hre.ethers.getContractFactory("DemoNFT");
  const demoNFT = await DemoNFT.deploy();

  await demoNFT.deployed();

  console.log("DemoNFT deployed to:", demoNFT.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
