"use client";
// import React, { useState } from "react";

// const Sidebar = () => {
//   // State to manage search, selected category, and selected year
//   const [searchInput, setSearchInput] = useState("");
//   const [selectedCategory, setSelectedCategory] = useState(null); // Tracks the selected category
//   const [selectedYear, setSelectedYear] = useState(null); // Tracks the selected year
//   const [isCategoryDropdownVisible, setCategoryDropdownVisible] =
//     useState(false); // Controls visibility of category dropdown
//   const [isYearDropdownVisible, setYearDropdownVisible] = useState(false); // Controls visibility of year dropdown

//   // Sample category options (dropdown values when a category is selected)
//   const categoryOptions = {
//     Categories: ["Science", "Engineering", "Humanities"],
//     Education: ["Primary", "Secondary", "Higher Education"],
//     Information: ["Data Science", "AI", "Cybersecurity"],
//     Jobs: ["Engineering Jobs", "Teaching Jobs", "IT Jobs"],
//     Learn: ["Online Courses", "Workshops", "Seminars"],
//     Skill: ["Programming", "Public Speaking", "Problem Solving"],
//   };

//   // Sample year options (dropdown values for the year filter)
//   const yearOptions = ["2024", "2023", "2022", "2021", "2020"];

//   // Handle search input change
//   const handleSearchChange = (e) => {
//     setSearchInput(e.target.value);
//   };

//   // Handle form submission (you can replace this with filtering logic)
//   const handleSearchSubmit = (e) => {
//     e.preventDefault();
//     console.log("Searching for:", searchInput);
//   };

//   // Handle category selection
//   const handleCategorySelect = (category) => {
//     setSelectedCategory(category);
//     setCategoryDropdownVisible(true); // Show the category dropdown
//     console.log("Selected Category:", category);
//   };

//   // Handle year selection
//   const handleYearSelect = () => {
//     setYearDropdownVisible(!isYearDropdownVisible); // Toggle year dropdown visibility
//   };

//   return (
//     <div className="col-xl-4 col-lg-4">
//       <aside className="side-bar sticky-top right">
//         {/* Search Box */}
//         <div className="widget">
//           <div className="widget-title">
//             <h4 className="title">Search</h4>
//           </div>
//           <div className="search-bx">
//             <form role="search" method="post" onSubmit={handleSearchSubmit}>
//               <div className="input-group">
//                 <input
//                   name="text"
//                   className="form-control style-1"
//                   placeholder="Search.."
//                   type="text"
//                   value={searchInput}
//                   onChange={handleSearchChange}
//                 />
//                 <span className="input-group-btn">
//                   <button
//                     type="submit"
//                     className="btn btn-primary sharp radius-no"
//                   >
//                     <i className="fa-solid fa-magnifying-glass scale3" />
//                   </button>
//                 </span>
//               </div>
//             </form>
//           </div>
//         </div>

//         {/* Category Filter */}
//         <div className="widget widget_categories">
//           <div className="widget-title">
//             <h4 className="title">Categories</h4>
//           </div>
//           <ul>
//             {Object.keys(categoryOptions).map((category, index) => (
//               <li
//                 key={index}
//                 className={`cat-item ${
//                   selectedCategory === category ? "active" : ""
//                 }`}
//                 onClick={() => handleCategorySelect(category)}
//               >
//                 <a href="#">{category}</a>
//               </li>
//             ))}
//           </ul>
//           {isCategoryDropdownVisible && selectedCategory && (
//             <div className="category-dropdown">
//               <h5>{selectedCategory} Options</h5>
//               <ul>
//                 {categoryOptions[selectedCategory].map((option, index) => (
//                   <li key={index}>
//                     <a href="#">{option}</a>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           )}
//         </div>

//         {/* Year Filter */}
//         <div className="widget">
//           <div className="widget-title">
//             <h4 className="title">Filter by Year</h4>
//           </div>
//           <ul>
//             <li onClick={handleYearSelect}>
//               <a href="#">Select Year</a>
//             </li>
//           </ul>
//           {isYearDropdownVisible && (
//             <div className="year-dropdown">
//               <h5>Year Options</h5>
//               <ul>
//                 {yearOptions.map((year, index) => (
//                   <li
//                     key={index}
//                     className={`year-item ${
//                       selectedYear === year ? "active" : ""
//                     }`}
//                     onClick={() => setSelectedYear(year)}
//                   >
//                     <a href="#">{year}</a>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           )}
//         </div>
//       </aside>
//     </div>
//   );
// };


// const Sidebar = () => {
//   // State to manage search, selected category, and selected year
//   const [searchInput, setSearchInput] = useState("");
//   const [selectedCategory, setSelectedCategory] = useState(null); // Tracks the selected category
//   const [selectedYear, setSelectedYear] = useState(null); // Tracks the selected year
//   const [visibleCategoryDropdown, setVisibleCategoryDropdown] = useState(null); // Controls visibility of dropdown for each category
//   const [isYearDropdownVisible, setYearDropdownVisible] = useState(false); // Controls visibility of year dropdown

//   // Sample category options (dropdown values when a category is selected)
//   const categoryOptions = {
//     Categories: ["Science", "Engineering", "Humanities"],
//     Education: ["Primary", "Secondary", "Higher Education"],
//     Information: ["Data Science", "AI", "Cybersecurity"],
//     Jobs: ["Engineering Jobs", "Teaching Jobs", "IT Jobs"],
//     Learn: ["Online Courses", "Workshops", "Seminars"],
//     Skill: ["Programming", "Public Speaking", "Problem Solving"]
//   };

//   // Sample year options (dropdown values for the year filter)
//   const yearOptions = ["2024", "2023", "2022", "2021", "2020"];

//   // Handle search input change
//   const handleSearchChange = (e) => {
//     setSearchInput(e.target.value);
//   };

//   // Handle form submission (you can replace this with filtering logic)
//   const handleSearchSubmit = (e) => {
//     e.preventDefault();
//     console.log("Searching for:", searchInput);
//   };

//   // Handle category selection and toggle its dropdown visibility
//   const handleCategorySelect = (category) => {
//     if (visibleCategoryDropdown === category) {
//       setVisibleCategoryDropdown(null); // Close the dropdown if already open
//     } else {
//       setVisibleCategoryDropdown(category); // Open the clicked category's dropdown
//     }
//   };

//   // Handle year selection dropdown toggle
//   const handleYearSelect = () => {
//     setYearDropdownVisible(!isYearDropdownVisible); // Toggle year dropdown visibility
//   };

//   return (
//     <div className="col-xl-4 col-lg-4">
//       <aside className="side-bar sticky-top right">
//         {/* Search Box */}
//         <div className="widget">
//           <div className="widget-title">
//             <h4 className="title">Search</h4>
//           </div>
//           <div className="search-bx">
//             <form role="search" method="post" onSubmit={handleSearchSubmit}>
//               <div className="input-group">
//                 <input
//                   name="text"
//                   className="form-control style-1"
//                   placeholder="Search.."
//                   type="text"
//                   value={searchInput}
//                   onChange={handleSearchChange}
//                 />
//                 <span className="input-group-btn">
//                   <button
//                     type="submit"
//                     className="btn btn-primary sharp radius-no"
//                   >
//                     <i className="fa-solid fa-magnifying-glass scale3" />
//                   </button>
//                 </span>
//               </div>
//             </form>
//           </div>
//         </div>

//         {/* Category Filter */}
//         <div className="widget widget_categories">
//           <div className="widget-title">
//             <h4 className="title">Categories</h4>
//           </div>
//           <ul>
//             {Object.keys(categoryOptions).map((category, index) => (
//               <li
//                 key={index}
//                 className={`cat-item ${selectedCategory === category ? "active" : ""}`}
//                 onClick={() => handleCategorySelect(category)}
//               >
//                 <a href="#">{category}</a>

//                 {/* Display dropdown under the selected category */}
//                 {visibleCategoryDropdown === category && (
//                   <ul className="dropdown-list">
//                     {categoryOptions[category].map((option, idx) => (
//                       <li key={idx}>
//                         <a href="#">{option}</a>
//                       </li>
//                     ))}
//                   </ul>
//                 )}
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Year Filter */}
//         <div className="widget">
//           <div className="widget-title">
//             <h4 className="title">Filter by Year</h4>
//           </div>
//           <ul>
//             <li onClick={handleYearSelect}>
//               <a href="#">Select Year</a>

//               {/* Display year dropdown under the "Select Year" option */}
//               {isYearDropdownVisible && (
//                 <ul className="dropdown-list">
//                   {yearOptions.map((year, index) => (
//                     <li
//                       key={index}
//                       className={`year-item ${selectedYear === year ? "active" : ""}`}
//                       onClick={() => setSelectedYear(year)}
//                     >
//                       <a href="#">{year}</a>
//                     </li>
//                   ))}
//                 </ul>
//               )}
//             </li>
//           </ul>
//         </div>
//       </aside>
//     </div>
//   );
// };

import React, { useState } from "react";

const Sidebar = () => {
  // State to manage search, selected category, and selected year
  const [searchInput, setSearchInput] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(""); // Stores the selected category
  const [selectedYear, setSelectedYear] = useState(""); // Stores the selected year
  const [visibleCategoryDropdown, setVisibleCategoryDropdown] = useState(null); // Controls dropdown visibility for categories
  const [isYearDropdownVisible, setYearDropdownVisible] = useState(false); // Controls year dropdown visibility

  // Sample category options
  const categoryOptions = {
    Topic: ["Science", "Engineering", "Humanities"],
    Author: ["Mark", "Sans", "Harris Edwinn"],
    Keywords: ["Data Science", "AI", "Cybersecurity"],
    
    Year: ["2024", "2023", "2022", "2021", "2020"]
  };

  // Sample year options
  const yearOptions = ["2024", "2023", "2022", "2021", "2020"];

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchInput(e.target.value);
  };

  // Handle form submission (you can replace this with filtering logic)
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const searchQuery = `${searchInput} ${selectedCategory} ${selectedYear}`.trim();
    console.log("Searching for:", searchQuery); // Combined search query with category and year
    // Add your search logic here
  };

  // Handle category selection
  const handleCategorySelect = (category, option) => {
    setSelectedCategory(`${category}: ${option}`); // Append selected category and option
    setVisibleCategoryDropdown(null); // Close the dropdown after selection
  };

  // Handle year selection
  const handleYearSelect = (year) => {
    setSelectedYear(`Year: ${year}`); // Append selected year
    setYearDropdownVisible(false); // Close the dropdown after selection
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
                  value={`${searchInput} ${selectedCategory} ${selectedYear}`.trim()} // Display the search query with selected filters
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

        {/* Year Filter */}
        <div className="widget">
          <div className="widget-title">
            <h4 className="title">Filter by Year</h4>
          </div>
          <ul>
            <li onClick={() => setYearDropdownVisible(!isYearDropdownVisible)}>
              <a href="#">Select Year</a>

              {/* Display year dropdown under the "Select Year" option */}
              {isYearDropdownVisible && (
                <ul className="dropdown-list">
                  {yearOptions.map((year, index) => (
                    <li
                      key={index}
                      className="year-item"
                      onClick={() => handleYearSelect(year)}
                    >
                      <a href="#">{year}</a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;


