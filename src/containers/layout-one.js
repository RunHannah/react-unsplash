import React, { Component } from "react";
import Photo from "../components/photo";

class LayoutOne extends Component {
  state = {
    loading: true
  };

  componentDidMount() {
    this.setState({ loading: false });
  }

  render() {
    return (
      <div className="layout-one">
        {this.props.photos.map(photo => (
          <Photo key={photo.id} photo={photo} />
        ))}
      </div>
    );
  }
}

export default LayoutOne;
