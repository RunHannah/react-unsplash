import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Navbar extends Component {
  render() {
    return (
      <div className="mainNav">
        <div className="navbar">
          <Link to="/react-unsplash/" className="camera">
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
        </div>
        <div className="navLayouts">
          <Link to="/grid">Grid</Link>
          <Link to="/flexbox">Flexbox</Link>
        </div>
      </div>
    );
  }
}

Navbar.propTypes = {
  getPhotos: PropTypes.func.isRequired
};

export default Navbar;
