import React, { useState } from "react";

function Filters({ setFilters }) {
  const [showModal, setShowModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [releasePeriod, setReleasePeriod] = useState("all");
  const [length, setLength] = useState("");
  const [sortBy, setSortBy] = useState("title");

  const applyFilters = () => {
    setFilters({ category: selectedCategory, releasePeriod, length, sortBy });
    setShowModal(false);
  };

  return (
    <div>
      {/* Filter Button with Icon */}
      <button className="filter-button" onClick={() => setShowModal(true)}>
        <img src="/filter-icon.png" alt="Filter" className="filter-icon" />
      </button>

      {/* Filter Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Filter Movies</h3>

            <label>Category:</label>
            <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
              <option value="">All</option>
              <option value="Action">Action</option>
              <option value="Sci-Fi">Sci-Fi</option>
              <option value="Romance">Romance</option>
            </select>

            <label>Released In:</label>
            <select value={releasePeriod} onChange={(e) => setReleasePeriod(e.target.value)}>
              <option value="all">All Time</option>
              <option value="10">Last 10 Years</option>
              <option value="20">Last 20 Years</option>
            </select>

            <label>Length:</label>
            <select value={length} onChange={(e) => setLength(e.target.value)}>
              <option value="">Any</option>
              <option value="short">Short</option>
              <option value="long">Long</option>
            </select>

            <label>Sort By:</label>
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
              <option value="title">Title</option>
              <option value="year">Release Year</option>
              <option value="rating">Rating</option>
            </select>

            <button onClick={applyFilters} className="apply-button">Apply</button>
            <button onClick={() => setShowModal(false)} className="close-button">Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Filters;
