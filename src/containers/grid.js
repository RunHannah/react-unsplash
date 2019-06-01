import React, { Component } from 'react';
import Photo from '../components/photo';

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

export default Grid;
