// FilterInput.jsx - Component for filtering post office data

import React from "react";
import "../styles/FilterInput.css";

const FilterInput = ({ filter, onFilterChange }) => {
  return (
    <input
      className="filter-input"
      type="text"
      placeholder="Filter by name"
      value={filter}
      onChange={(e) => onFilterChange(e.target.value)}
    />
  );
};

export default FilterInput;
