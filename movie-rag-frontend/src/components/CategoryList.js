import React from "react";

function CategoryList() {
  return (
    <div className="category-section">
      <h2>Browse by Category</h2>
      <div className="category-list">
        <button className="category-button">Action</button>
        <button className="category-button">Sci-Fi</button>
        <button className="category-button">Romance</button>
        <button className="category-button">Drama</button>
      </div>
    </div>
  );
}

export default CategoryList;
