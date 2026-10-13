import React, { useState } from "react";
import { useContract } from "../hooks/useContract";

function DoctorRequest() {
  const { contract } = useContract();
  const [patient, setPatient] = useState("");

  const requestAccess = async () => {
    const tx = await contract.requestAccess(patient);
    await tx.wait();
    alert("Access requested!");
  };

  return (
    <div>
      <h2>Doctor Request Access</h2>
      <input
        type="text"
        placeholder="Patient Address"
        value={patient}
        onChange={(e) => setPatient(e.target.value)}
      />
      <button onClick={requestAccess}>Request</button>
    </div>
  );
}

export default DoctorRequest;
