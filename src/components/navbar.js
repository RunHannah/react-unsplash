import React from "react";
import { Link } from "react-router-dom";

const Navbar = props => {
  return (
    <div className="navbar">
      <Link to="/react-unsplash" className="unsplash">
        <i className="fas fa-camera" />
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
      <Link to="/layout-one">Layout One</Link>
      <Link to="/layout-two">Layout Two</Link>
    </div>
  );
};

export default Navbar;
