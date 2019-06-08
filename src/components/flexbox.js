import React, { Component } from 'react';
import Photo from './photo';
import PropTypes from 'prop-types';

class Flexbox extends Component {
  state = {
    isLoading: true
  };

  componentDidMount() {
    this.setState({ isLoading: false });
  }

  render() {
    return (
      <div className="flexbox">
        {this.props.photos.map(photo => (
          <Photo key={photo.id} photo={photo} />
        ))}
      </div>
    );
  }
}

Flexbox.propTypes = {
  photos: PropTypes.array.isRequired
};

export default Flexbox;
