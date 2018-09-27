import React from "react";
import { Link } from "react-router-dom";

const Navbar = props => {
  return (
    <div className="navbar">
      <Link to="/react-unsplash" className="unsplash">
        <i class="fas fa-camera" />
      </Link>
      <li className="search">
        <form className="search" onSubmit={props.getPhotos}>
          <input
            className="search-input"
            type="text"
            name="searchInput"
            placeholder="Search free photos"
          />
        </form>
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
