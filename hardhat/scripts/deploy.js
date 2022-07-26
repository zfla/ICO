const { ethers } = require("hardhat");
require("dotenv").config({ path: "env" });
const { CRYPTO_DEVS_NFT_CONTRACT_ADDRESS } = require("../constants");

async function main() {
  const CryptoDevsNFTContract = CRYPTO_DEVS_NFT_CONTRACT_ADDRESS;
  const CryptoDevsTokenContract = await ethers.getContractFactory(
    "CryptoDevToken"
  );
  const deployedCryptoDevsContract = await CryptoDevsTokenContract.deploy(
    CryptoDevsNFTContract
  );
  console.log(
    "Crypto Devs Token Contract Address: ",
    deployedCryptoDevsContract.address
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });