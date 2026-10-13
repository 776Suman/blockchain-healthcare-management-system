const getContract = require("../utils/contract");

exports.giveConsent = async (req, res) => {
  try {
    const { patient, doctor } = req.body;

    const contract = getContract();
    const tx = await contract.giveConsent(patient, doctor);
    await tx.wait();

    res.json({ message: "Consent given successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to give consent" });
  }
};

exports.revokeConsent = async (req, res) => {
  try {
    const { patient } = req.body;

    const contract = getContract();
    const tx = await contract.revokeConsent(patient);
    await tx.wait();

    res.json({ message: "Consent revoked successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to revoke consent" });
  }
};

exports.getConsentStatus = async (req, res) => {
  try {
    const patient = req.params.patient;

    const contract = getContract();
    const status = await contract.getConsentStatus(patient);

    res.json({ patient, status });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch consent status" });
  }
};
