import React, { Component } from "react";

class Landing extends Component {
  state = {
    url: "",
    isLoading: true
  };

  componentDidMount() {
    const url = this.props.photos[this.randomNumber()].urls.regular;
    this.setState({ url, isLoading: false });
    console.log("url", url);
  }

  randomNumber = () => {
    const number = Math.floor(Math.random() * 10 + 1);
    return number;
  };

  render() {
    return (
      <div className="landing">
        {this.state.isLoading ? (
          <p>Loading Images...</p>
        ) : (
          <div>
            <p className="landing-text">
              Refresh page to view a random photo in collection.
            </p>
            <img src={this.state.url} alt="unsplash" />
          </div>
        )}
      </div>
    );
  }
}

export default Landing;
