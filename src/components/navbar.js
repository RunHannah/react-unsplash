import React from "react";
import { Link } from "react-router-dom";

const Navbar = props => {
  let hamburgerToggle = () => {
    let linksElement = document.querySelector(".navbarNarrowLinks");
    if (linksElement.style.display === "block") {
      linksElement.style.display = "none";
    } else {
      linksElement.style.display = "block";
    }
  };

  return (
    <div className="navbar">
      <Link to="/react-unsplash/" className="unsplash">
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
      <div className="narbarWide">
        <Link to="/layout-one">Layout One</Link>
        <Link to="/layout-two">Layout Two</Link>
        <Link to="/layout-three">Layout Three</Link>
      </div>
      <div className="navbarNarrow">
        <p style={{ color: "pink" }} onClick={this.hamburgerToggle}>
          {"\u2630"}
        </p>
        <div className="navbarNarrowLinks">
          <Link to="/layout-one" onClick={this.hamburgerToggle}>
            Layout One
          </Link>
          <Link to="/layout-two" onClick={this.hamburgerToggle}>
            Layout Two
          </Link>
          <Link to="/layout-three" onClick={this.hamburgerToggle}>
            Layout Three
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
