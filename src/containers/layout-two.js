import React, { Component } from 'react';
import Photo from '../components/photo';

class LayoutTwo extends Component {
  state = {
    isLoading: true
  };

  componentDidMount() {
    this.setState({ isLoading: false });
  }

  render() {
    return (
      <div className="layout-two">
        {this.props.photos.map(photo => (
          <Photo key={photo.id} photo={photo} />
        ))}
      </div>
    );
  }
}

export default LayoutTwo;
