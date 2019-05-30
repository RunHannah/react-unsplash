import React, { Component } from 'react';

class Menu extends Component {
  state = {
    menuSearch: [
      'Wallpapers',
      'Textures & Patterns',
      'Nature',
      'Current Events',
      'Architecture',
      'Business & Work',
      'Animals',
      'Travel',
      'Fashion',
      'Food & Drink',
      'Spirituality',
      'Experimental',
      'People',
      'Health',
      'Arts & Culture'
    ]
  };

  handleOnClick = search => {
    this.props.photoSearch(search);
  };

  render() {
    const { menuSearch } = this.state;

    return (
      <div className="menu">
        <ul>
          {menuSearch.map(search => (
            <li key={search}>
              <a onClick={() => this.handleOnClick(search)}>{search}</a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
export default Menu;
