const express = require("express");
const router = express.Router();
const {
  giveConsent,
  revokeConsent,
  getConsentStatus,
} = require("../controllers/consentController");

router.post("/give", giveConsent);
router.post("/revoke", revokeConsent);
router.get("/status/:patient", getConsentStatus);

module.exports = router;
