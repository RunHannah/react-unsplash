import React, { Component } from "react";

class Landing extends Component {
  state = {
    url: "",
    loading: true
  };

  componentDidMount() {
    const randomNumber = Math.floor(Math.random() * 10 + 1);

    const url = this.props.photos[randomNumber].urls.regular;
    this.setState({ url, loading: false });
  }

  render() {
    return (
      <div className="landing">
        {this.state.loading ? (
          <h2>Loading Image...</h2>
        ) : (
          <div>
            {/* <p>Landing Image</p> */}
            <img src={this.state.url} alt="unsplash" />
          </div>
        )}
      </div>
    );
  }
}

export default Landing;
