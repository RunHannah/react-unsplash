import React from "react";
import { Link } from "react-router-dom";

const Navbar = props => {
  return (
    <div className="navbar">
      <Link to="/" className="unsplash">
        Unsplash
      </Link>
      <li className="search">
        <form onSubmit={props.getPhotos}>
          <input
            className="search-input"
            type="text"
            name="searchInput"
            placeholder="search for photos"
          />
          <button className="form_button">Search</button>
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
