import React from "react";

function CategoryList({ categories }) {
  return (
    <div className="category-list">
      {categories.map((category) => (
        <div key={category.id} className="category-button">
          <img src={category.image} alt={category.name} />
          <p>{category.name}</p>
        </div>
      ))}
    </div>
  );
}

export default CategoryList;
