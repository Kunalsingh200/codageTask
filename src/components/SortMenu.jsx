import React from "react";

const SortingMenu = ({ onSort }) => {
  return (
    <div className="sorting-menu">
      <button onClick={() => onSort("price", "asc")}>Sort by Price (Asc)</button>
      <button onClick={() => onSort("price", "desc")}>Sort by Price (Desc)</button>
      <button onClick={() => onSort("brand", "asc")}>Sort by Brand (A-Z)</button>
      <button onClick={() => onSort("brand", "desc")}>Sort by Brand (Z-A)</button>
      <button onClick={() => onSort("category", "asc")}>
        Sort by Category (A-Z)
      </button>
      <button onClick={() => onSort("category", "desc")}>
        Sort by Category (Z-A)
      </button>
    </div>
  );
};

export default SortingMenu;
