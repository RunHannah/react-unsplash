import React, { Component } from "react";
import Photo from "../components/photo";

class LayoutTwo extends Component {
  state = {
    loading: true
  };

  componentDidMount() {
    this.setState({ loading: false });
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
