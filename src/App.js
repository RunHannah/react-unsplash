import React, { Component } from "react";
import Navbar from "./components/navbar";
import Landing from "./containers/landing";
import ContentOne from "./containers/content-one";
import ContentTwo from "./containers/content-two";
import "./App.css";

const apiKey = process.env.REACT_APP_UNSPLASH_API_KEY;

class App extends Component {
  state = {
    photos: [],
    loading: true
  };

  async componentDidMount() {
    await fetch(`https://api.unsplash.com/photos/?client_id=${apiKey}`)
      .then(resp => {
        return resp.json();
      })
      .then(data => {
        this.setState({ photos: data, loading: false });
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  render() {
    console.log("App component photos", this.state.photos);

    return (
      <div>
        <Navbar />
        {this.state.loading ? (
          <h2>Loading products...</h2>
        ) : (
          <div className="wrapper">
            <Landing photos={this.state.photos} />
            <ContentOne photos={this.state.photos} />
            <ContentTwo photos={this.state.photos} />
          </div>
        )}
      </div>
    );
  }
}

export default App;
