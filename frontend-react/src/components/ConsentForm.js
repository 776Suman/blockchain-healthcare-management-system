import React, { useState } from "react";
import { useContract } from "../hooks/useContract";

function ConsentForm() {
  const { contract, account } = useContract();
  const [doctor, setDoctor] = useState("");

  const giveConsent = async () => {
    const tx = await contract.giveConsent(account, doctor);
    await tx.wait();
    alert("Consent given!");
  };

  return (
    <div>
      <h2>Give Consent</h2>
      <input
        type="text"
        placeholder="Doctor Address"
        value={doctor}
        onChange={(e) => setDoctor(e.target.value)}
      />
      <button onClick={giveConsent}>Submit</button>
    </div>
  );
}

export default ConsentForm;
