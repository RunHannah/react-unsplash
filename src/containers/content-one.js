import React, { Component } from "react";

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
          <p>Placeholder</p>
        )}
      </div>
    );
  }
}

export default ContentOne;
