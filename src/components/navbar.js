import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <li className="unsplash">Unsplash</li>
      <li className="search">
        <input type="text" className="search-input" placeholder="search" />
      </li>
      <li className="page-one">Page-1</li>
      <li className="page-two">Page-2</li>
    </div>
  );
};

export default Navbar;
