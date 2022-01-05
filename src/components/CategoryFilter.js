import React from "react";

function CategoryFilter({ categories, handleFilter, selected }) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category) => {
        return (<button 
          key={category}
          value={category}
          className={selected === category ? 'selected' : ''}
          onClick={handleFilter}>
            {category}
          </button>
        )
      })}
    </div>
  );
}

export default CategoryFilter;
