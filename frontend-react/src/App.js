import React from "react";
import { Web3Provider } from "./context/Web3Context";
import ConsentForm from "./components/ConsentForm";
import PatientDashboard from "./components/PatientDashboard";
import DoctorRequest from "./components/DoctorRequest";

function App() {
  return (
    <Web3Provider>
      <div style={{ padding: "20px" }}>
        <h1>Blockchain Healthcare Management</h1>

        <ConsentForm />
        <DoctorRequest />
        <PatientDashboard />
      </div>
    </Web3Provider>
  );
}

export default App;
