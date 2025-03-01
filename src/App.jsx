// App.jsx - Main application component

import React, { useState } from "react";
import "./styles/App.css"; // Updated path for global styles
import PincodeForm from "./components/PincodeForm";
import FilterInput from "./components/FilterInput";
import PostOfficeDetails from "./components/PostOfficeDetails";
import Loader from "./components/Loader";

function App() {
  const [postOffices, setPostOffices] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [filter, setFilter] = useState("");

  // Function to handle pincode lookup
  const handleLookup = (pincode) => {
    if (pincode.length !== 6) {
      setError("Please enter a valid 6-digit pincode.");
      return;
    }
    setLoading(true);
    setError("");

    fetch(`https://api.postalpincode.in/pincode/${pincode}`)
      .then((response) => response.json())
      .then((result) => {
        if (result[0].Status === "Success") {
          setPostOffices(result[0].PostOffice);
        } else {
          setPostOffices([]);
          setError("No data found for this pincode.");
        }
      })
      .catch(() => {
        setError("Error fetching data. Please try again.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  // Filter post office data by name
  const filteredData = postOffices.filter((office) =>
    office.Name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="app-container">
      <div className="app-content">
        <PincodeForm onLookup={handleLookup} />
        {loading && <Loader />}
        {error && <p className="error">{error}</p>}
        {postOffices.length > 0 && (
          <>
            <div className="result-summary">
              <p>Pincode: <strong>{postOffices[0].Pincode}</strong></p>
              <p>Message: <strong>{postOffices.length} post office(s) found.</strong></p>
            </div>
            <FilterInput filter={filter} onFilterChange={setFilter} />
            <PostOfficeDetails data={filteredData} />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
