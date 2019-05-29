import React, { Component } from 'react';

class Menu extends Component {
  handleOnClick = search => {
    this.props.photoSearch(search);
  };

  render() {
    return (
      <div className="menu">
        <ul>
          <li>
            <a onClick={() => this.handleOnClick('Wallpapers')}>Wallpapers</a>
          </li>
          <li>
            <a onClick={() => this.handleOnClick('Textures & Patterns')}>
              Textures & Patterns
            </a>
          </li>
          <li>
            <a onClick={() => this.handleOnClick('Nature')}>Nature</a>
          </li>
          <li>
            <a onClick={() => this.handleOnClick('Current Events')}>
              Current Events
            </a>
          </li>
          <li>
            <a onClick={() => this.handleOnClick('Architecture')}>
              Architecture
            </a>
          </li>
          <li>
            <a onClick={() => this.handleOnClick('Business & Work')}>
              Business & Work
            </a>
          </li>
          <li>
            <a onClick={() => this.handleOnClick('Animals')}>Animals</a>
          </li>
          <li>
            <a onClick={() => this.handleOnClick('Travel')}>Travel</a>
          </li>
          <li>
            <a onClick={() => this.handleOnClick('Fashion')}>Fashion</a>
          </li>
          <li>
            <a onClick={() => this.handleOnClick('Food & Drink')}>
              Food & Drink
            </a>
          </li>
          <li>
            <a onClick={() => this.handleOnClick('Spirituality')}>
              Spirituality
            </a>
          </li>
          <li>
            <a onClick={() => this.handleOnClick('Experimental')}>
              Experimental
            </a>
          </li>
          <li>
            <a onClick={() => this.handleOnClick('People')}>People</a>
          </li>
          <li>
            <a onClick={() => this.handleOnClick('Health')}>Health</a>
          </li>
          <li>
            <a onClick={() => this.handleOnClick('Arts & Culture')}>
              Arts & Culture
            </a>
          </li>
        </ul>
      </div>
    );
  }
}
export default Menu;
