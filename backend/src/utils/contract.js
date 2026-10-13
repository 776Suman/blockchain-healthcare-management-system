const { ethers } = require("ethers");
const contractABI = require("../../artifacts/contracts/PatientConsent.sol/PatientConsent.json");

// Your deployed contract address
const CONTRACT_ADDRESS = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

function getContract() {
  const provider = new ethers.JsonRpcProvider("http://127.0.0.1:8545");

  // Use first Hardhat account as signer
  const signer = provider.getSigner(0);

  const contract = new ethers.Contract(
    CONTRACT_ADDRESS,
    contractABI.abi,
    signer
  );

  return contract;
}

module.exports = getContract;
