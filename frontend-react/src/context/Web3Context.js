import { createContext, useEffect, useState } from "react";
import { ethers } from "ethers";
import contractABI from "../artifacts/contracts/PatientConsent.sol/PatientConsent.json";

export const Web3Context = createContext();

const CONTRACT_ADDRESS = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

export const Web3Provider = ({ children }) => {
  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);
  const [contract, setContract] = useState(null);
  const [account, setAccount] = useState(null);

  useEffect(() => {
    const init = async () => {
      if (window.ethereum) {
        const web3Provider = new ethers.BrowserProvider(window.ethereum);
        await window.ethereum.request({ method: "eth_requestAccounts" });

        const signer = await web3Provider.getSigner();
        const address = await signer.getAddress();

        const contractInstance = new ethers.Contract(
          CONTRACT_ADDRESS,
          contractABI.abi,
          signer
        );

        setProvider(web3Provider);
        setSigner(signer);
        setContract(contractInstance);
        setAccount(address);
      }
    };

    init();
  }, []);

  return (
    <Web3Context.Provider value={{ provider, signer, contract, account }}>
      {children}
    </Web3Context.Provider>
  );
};
