import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  hamburgerToggle = () => {
    let linksElement = document.querySelector(".navbarNarrowLinks");
    if (linksElement.style.display === "block") {
      linksElement.style.display = "none";
    } else {
      linksElement.style.display = "block";
    }
  };

  render() {
    return (
      <div className="navbar">
        <Link to="/react-unsplash/" className="unsplash">
          <i className="fas fa-camera" />
        </Link>
        <li className="search">
          <form className="search" onSubmit={this.props.getPhotos}>
            <input
              className="search-input"
              type="text"
              name="searchInput"
              placeholder="Search free photos"
            />
          </form>
        </li>
        <div className="navbarWide">
          <Link to="/layout-one">Layout One</Link>
          <Link to="/layout-two">Layout Two</Link>
          <Link to="/layout-three">Layout Three</Link>
        </div>
        <div className="navbarNarrow">
          <button style={{ color: "pink" }} onClick={this.hamburgerToggle}>
            {"\u2630"}
          </button>
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
  }
}

export default Navbar;
