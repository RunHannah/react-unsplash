import React, { Component } from "react";
import Landing from "./containers/landing";
import "./App.css";

const apiKey = process.env.REACT_APP_UNSPLASH_API_KEY

class App extends Component {
  state = {
    photos: [],
    loading: true
  }

  componentDidMount() {
    fetch(
      `https://api.unsplash.com/photos/?client_id=${apiKey}`
    )
      .then(resp => { return resp.json() })
      .then(data => {
        this.setState({ photos: data, loading: false})
        console.log('this.state.photos', this.state.photos);
        console.log('this.state.loading', this.state.loading);

      })
      .catch(function(error) {
        console.log(error);
      });
  }
  render() {

    const { photos } = this.state.photos
    console.log('photos', photos);

    return (
      <div>
        {this.state.loading ?
          <h2>Loading products...</h2> :

        <Landing photos={this.state.photos}/>
      }
    </div>
    );
  }
}

export default App;
