import React, { Component } from "react";

class Landing extends Component {
  state = {
    photos: this.props.photos
  }

  componentDidMount() {
    console.log('Landing this.state.photos', this.state.photos);
    console.log('Landing photo FIRST item', this.state.photos[0].urls.small);
  }
  render() {

    return <div>Landing Component</div>;
  }
}

export default Landing;
