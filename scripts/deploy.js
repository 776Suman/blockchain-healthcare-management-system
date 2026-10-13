const hre = require("hardhat");

async function main() {
  const Consent = await hre.ethers.getContractFactory("PatientConsent");
  const consent = await Consent.deploy();

  await consent.waitForDeployment();

  console.log("PatientConsent deployed at:", await consent.getAddress());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });





