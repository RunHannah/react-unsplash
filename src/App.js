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

      })
      .catch(function(error) {
        console.log(error);
      });
  }
  render() {

    console.log('App component photos', this.state.photos);

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
