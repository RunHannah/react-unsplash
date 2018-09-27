import React, { Component } from "react";
import Photo from "../components/photo";

class LayoutThree extends Component {
  state = {
    loading: true
  };

  componentDidMount() {
    this.setState({ loading: false });
  }

  render() {
    return (
      <div className="layout-three">
        {this.props.photos.map(photo => (
          <Photo key={photo.id} photo={photo} />
        ))}
      </div>
    );
  }
}

export default LayoutThree;
