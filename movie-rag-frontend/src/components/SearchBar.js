import React from "react";

function SearchBar({ setSearchTerm }) {
  return (
    <input
      type="text"
      placeholder="Search movies..."
      onChange={(e) => setSearchTerm(e.target.value)}
      className="search-bar"
    />
  );
}

export default SearchBar;
