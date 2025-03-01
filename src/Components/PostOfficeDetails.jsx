// PostOfficeDetails.jsx - Component to display post office details

import React from "react";
import "../styles/PostOfficeDetails.css";

const PostOfficeDetails = ({ data }) => {
  return (
    <div className="post-office-details">
      {data.length > 0 ? (
        data.map((office, index) => (
          <div key={index} className="office-card">
            <h2>Office {index + 1}</h2>
            <p>Name: {office.Name}</p>
            <p>Pincode: {office.Pincode}</p>
            <p>District: {office.District}</p>
            <p>State: {office.State}</p>
          </div>
        ))
      ) : (
        <p>No postal data found for the given pincode.</p>
      )}
    </div>
  );
};

export default PostOfficeDetails;
