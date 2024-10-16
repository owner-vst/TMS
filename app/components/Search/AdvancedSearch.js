"use client";
import React, { useState } from "react";

const AdvancedSearch = () => {
  // State to manage search, selected categories, and the visibility of dropdowns
  const [searchInput, setSearchInput] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]); // Stores selected categories
  const [visibleCategoryDropdown, setVisibleCategoryDropdown] = useState(null); // Controls dropdown visibility for categories

  // Category options including Year
  const categoryOptions = {
    Topic: ["Science", "Engineering", "Humanities"],
    Author: ["Mark", "Sans", "Harris Edwinn"],
    Keywords: ["Data Science", "AI", "Cybersecurity"],
    Year: ["2024", "2023", "2022", "2021", "2020"],
  };

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchInput(e.target.value);
  };

  // Handle form submission (you can replace this with filtering logic)
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const searchQuery = `${searchInput} ${selectedCategories.join(" ")}`.trim();
    console.log("Searching for:", searchQuery); // Combined search query with selected categories
    // Add your search logic here
  };

  // Handle category selection
  const handleCategorySelect = (category, option) => {
    const newCategory = `${category}: ${option}`;
    if (!selectedCategories.includes(newCategory)) {
      setSelectedCategories([...selectedCategories, newCategory]); // Add selected category if not already selected
    }
    setVisibleCategoryDropdown(null); // Close the dropdown after selection
  };

  // Handle reset of the search input and categories
  const handleReset = () => {
    setSearchInput("");
    setSelectedCategories([]); // Reset the selected categories
  };

  return (
    <div className="col-xl-4 col-lg-4">
      <aside className="side-bar sticky-top right">
        {/* Search Box */}
        <div className="widget">
          <div className="widget-title">
            <h4 className="title">Search</h4>
          </div>
          <div className="search-bx">
            <form role="search" method="post" onSubmit={handleSearchSubmit}>
              <div className="input-group">
                <input
                  name="text"
                  className="form-control style-1"
                  placeholder="Search.."
                  type="text"
                  value={`${searchInput} ${selectedCategories.join(" ")}`.trim()} // Display the search query with selected filters
                  onChange={handleSearchChange}
                />
                <span className="input-group-btn">
                  <button
                    type="submit"
                    className="btn btn-primary sharp radius-no"
                  >
                    <i className="fa-solid fa-magnifying-glass scale3" />
                  </button>
                </span>
              </div>
            </form>
          </div>
        </div>

        {/* Category Filter */}
        <div className="widget widget_categories">
          <div className="widget-title">
            <h4 className="title">Categories</h4>
          </div>
          <ul>
            {Object.keys(categoryOptions).map((category, index) => (
              <li
                key={index}
                className="cat-item"
                onClick={() => setVisibleCategoryDropdown(category)}
              >
                <a href="#">{category}</a>

                {/* Display dropdown under the selected category */}
                {visibleCategoryDropdown === category && (
                  <ul className="dropdown-list">
                    {categoryOptions[category].map((option, idx) => (
                      <li key={idx} onClick={() => handleCategorySelect(category, option)}>
                        <a href="#">{option}</a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Reset Button */}
        <div className="widget">
          <button
            className="btn btn-secondary"
            onClick={handleReset} // Reset search input and selected categories
          >
            Reset
          </button>
        </div>
      </aside>
    </div>
  );
};

export default AdvancedSearch;
