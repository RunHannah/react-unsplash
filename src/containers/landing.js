import React, { Component } from "react";

class Landing extends Component {
  state = {
    url: "",
    loading: true
  };

  componentDidMount() {
    const url = this.props.photos[this.randomNumber()].urls.regular;
    this.setState({ url, loading: false });
  }

  randomNumber = () => {
    const number = Math.floor(Math.random() * 10 + 1);
    return number;
  };

  render() {
    return (
      <div className="landing">
        {this.state.loading ? (
          <h2>Loading Image...</h2>
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
