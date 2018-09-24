import React, { Component } from "react";
import Landing from "./containers/landing";
import "./App.css";

const apiKey = process.env.REACT_APP_UNSPLASH_API_KEY

class App extends Component {
  state = {
    photos: []
  }

  componentDidMount() {
    fetch(
      `https://api.unsplash.com/photos/?client_id=${apiKey}`
    )
      .then(resp => { return resp.json() })
      .then(data => {
        console.log('data', data);
        this.setState({ photos: data})
        console.log('line 20 this.state.photos', this.state.photos);
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  render() {
    const { photos } = this.state.photos

    console.log('line 29', this.state.photos);
    return (
      <div>
        <Landing />
      </div>
    );
  }
}

export default App;
