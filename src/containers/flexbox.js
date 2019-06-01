import React, { Component } from 'react';
import Photo from '../components/photo';

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

export default Flexbox;
