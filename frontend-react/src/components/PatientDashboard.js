import React, { useState } from "react";
import { useContract } from "../hooks/useContract";

function PatientDashboard() {
  const { contract, account } = useContract();
  const [status, setStatus] = useState("");

  const checkStatus = async () => {
    const result = await contract.getConsentStatus(account);
    setStatus(result);
  };

  return (
    <div>
      <h2>Consent Status</h2>
      <button onClick={checkStatus}>Check</button>
      <p>Status: {status.toString()}</p>
    </div>
  );
}

export default PatientDashboard;
