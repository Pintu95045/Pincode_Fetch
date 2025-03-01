// PincodeForm.jsx - Component for pincode lookup form

import React, { useState } from "react";
import "../styles/PincodeForm.css";

const PincodeForm = ({ onLookup }) => {
  const [pincode, setPincode] = useState("");

  const handleLookupClick = () => {
    if (pincode.length === 6) {
      onLookup(pincode);
    } else {
      alert("The code must be 6 digits");
    }
  };

  return (
    <div className="form-container">
      <label htmlFor="pincodeInput">Enter Pincode:</label>
      <input
        type="text"
        placeholder="Pincode"
        value={pincode}
        onChange={(e) => setPincode(e.target.value)}
      />
      <button onClick={handleLookupClick} className="lookup-button">
        Lookup
      </button>
    </div>
  );
};

export default PincodeForm;
