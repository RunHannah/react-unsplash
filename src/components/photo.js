import React from 'react';
import PropTypes from 'prop-types';

const Photo = ({ photo }) => (
  <div>
    <img src={photo.urls.small} alt="random-unsplash" />
  </div>
);

Photo.propTypes = {
  photo: PropTypes.object.isRequired
};

export default Photo;
