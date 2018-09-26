import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/" className="unsplash">
        Unsplash
      </Link>
      <li className="search">
        <input type="text" className="search-input" placeholder="search" />
      </li>
      <Link to="/layout-one" className="page-one">
        Layout One
      </Link>
      <Link to="/layout-two" className="page-two">
        Layout Two
      </Link>
    </div>
  );
};

export default Navbar;
