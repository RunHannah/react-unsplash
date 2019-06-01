import React, { Component } from 'react';
import Grid from './grid';

class Landing extends Component {
  state = {
    url: '',
    isLoading: true
  };

  componentDidMount() {
    // find only landscape photos with width > 4000
    const photos = [];

    this.props.photos.map(photo => {
      if (photo.width > '4000') {
        photos.push(photo);
      }
      return photos;
    });

    const photosLength = photos.length;
    const number = Math.floor(Math.random() * photosLength);
    const url = photos[number].urls.regular;

    this.setState({ url, isLoading: false });
  }

  render() {
    return (
      <div className="landing">
        {this.state.isLoading ? (
          <p>Loading Images...</p>
        ) : (
          <div>
            <p className="landing-text" />
            <img src={this.state.url} alt="unsplash" />
            <Grid photos={this.props.photos} />
          </div>
        )}
      </div>
    );
  }
}

export default Landing;
