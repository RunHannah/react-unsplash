import React, { Component } from 'react';
import Photo from './photo';
import PropTypes from 'prop-types';

class Grid extends Component {
  state = {
    isLoading: true
  };

  componentDidMount() {
    this.setState({ isLoading: false });
  }

  render() {
    return (
      <div className="grid">
        {this.props.photos.map(photo => (
          <Photo key={photo.id} photo={photo} />
        ))}
      </div>
    );
  }
}

Grid.propTypes = {
  photos: PropTypes.array.isRequired
};

export default Grid;
