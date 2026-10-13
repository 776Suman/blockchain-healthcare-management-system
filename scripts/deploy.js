const hre = require("hardhat");

async function main() {
  const Consent = await hre.ethers.getContractFactory("PatientConsent");
  const consent = await Consent.deploy();

  await consent.deployed();

  console.log("PatientConsent deployed at:", consent.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });




