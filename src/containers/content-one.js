import React, { Component } from "react";
import Photo from "../components/photo";

class ContentOne extends Component {
  state = {
    loading: true,
    photos: this.props.photos
  };

  componentDidMount() {
    const photos = this.props.photos;
    this.setState({ photos, loading: false });
    console.log("content-one photos", this.state.photos);
  }

  render() {
    // const { photos } = this.state.photos;

    return (
      <div className="content-one">
        CONTENT ONE
        {this.state.loading ? (
          <h3>Retrieving Photos...</h3>
        ) : (
          this.state.photos.map(photo => <Photo key={photo.id} photo={photo} />)
        )}
      </div>
    );
  }
}

export default ContentOne;
