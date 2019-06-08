import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Landing extends Component {
  state = {
    photosWide: [],
    isLoading: true
  };

  componentDidMount() {
    // find only landscape photos with width > 4000
    let photos = [];

    this.props.photos.map(photo => {
      if (photo.width > '4000') {
        photos.push(photo);
      }
      return photos;
    });

    this.setState({ photosWide: photos, isLoading: false });
  }

  render() {
    const { photosWide } = this.state;
    return (
      <div className="landing">
        {this.state.isLoading ? (
          <p>Loading Images...</p>
        ) : (
          <div>
            {photosWide.map(photo => (
              <img
                key={photo.id}
                src={photo.urls.regular}
                alt="random-unsplash"
              />
            ))}
          </div>
        )}
      </div>
    );
  }
}

Landing.propTypes = {
  photos: PropTypes.array.isRequired
};

export default Landing;
