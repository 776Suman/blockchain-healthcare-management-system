// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/*
    PatientConsent Contract
    -----------------------
    This smart contract manages:
    - Patient → Provider access permissions
    - Granting and revoking access
    - Checking access status
    - Immutable audit logging through events
*/

contract PatientConsent {

    struct Consent {
        bool granted;
        uint256 updatedAt;
    }

    // Mapping structure:
    // patient => provider => recordId => Consent
    mapping(address => mapping(address => mapping(bytes32 => Consent))) public consents;

    // Events for blockchain audit logs
    event AccessGranted(address indexed patient, address indexed provider, bytes32 indexed recordId);
    event AccessRevoked(address indexed patient, address indexed provider, bytes32 indexed recordId);

    /*
        grantAccess()
        -------------
        Called by the patient.
        Allows a provider to access a specific medical record.
    */
    function grantAccess(address provider, bytes32 recordId) external {
        consents[msg.sender][provider][recordId] = Consent(true, block.timestamp);
        emit AccessGranted(msg.sender, provider, recordId);
    }

    /*
        revokeAccess()
        --------------
        Called by the patient.
        Removes provider access to a specific medical record.
    */
    function revokeAccess(address provider, bytes32 recordId) external {
        consents[msg.sender][provider][recordId] = Consent(false, block.timestamp);
        emit AccessRevoked(msg.sender, provider, recordId);
    }

    /*
        hasAccess()
        -----------
        Read-only function.
        Backend or frontend calls this to check if a provider
        currently has access to a patient’s record.
    */
    function hasAccess(address patient, address provider, bytes32 recordId)
        external
        view
        returns (bool)
    {
        return consents[patient][provider][recordId].granted;
    }
}