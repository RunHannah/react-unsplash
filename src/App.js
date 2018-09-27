import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/navbar";
import Landing from "./containers/landing";
import LayoutOne from "./containers/layout-one";
import LayoutTwo from "./containers/layout-two";
import LayoutThree from "./containers/layout-three";

import "./App.css";

const apiKey = process.env.REACT_APP_UNSPLASH_API_KEY;

class App extends Component {
  state = {
    photos: [],
    loading: true
  };

  async componentDidMount() {
    // get photos from API to render photos when page initially loads
    await fetch(
      `https://api.unsplash.com/search/photos/?client_id=${apiKey}&query=california`
    )
      .then(resp => {
        return resp.json();
      })
      .then(data => {
        this.setState({ photos: data.results, loading: false });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  getPhotos = async e => {
    // clearing state
    this.setState({ photos: [], loading: true });

    // get search input from user
    let searchInput = e.target.elements.searchInput.value;
    e.preventDefault();
    e.target.reset();

    // get photos from API
    await fetch(
      `https://api.unsplash.com/search/photos/?client_id=${apiKey}&query=${searchInput}`
    )
      .then(resp => {
        return resp.json();
      })
      .then(data => {
        this.setState({ photos: data.results, loading: false });
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        <Navbar getPhotos={this.getPhotos} />
        {this.state.loading ? (
          <p>Loading Images...</p>
        ) : (
          <div>
            <Switch>
              {/* Hosted on gh-pages so home path is /react-unsplash */}
              <Route exact path="/react-unsplash/">
                <Landing photos={this.state.photos} />
              </Route>
              <Route exact path="/layout-one">
                <LayoutOne photos={this.state.photos} />
              </Route>
              <Route exact path="/layout-two">
                <LayoutTwo photos={this.state.photos} />
              </Route>
              <Route exact path="/layout-three">
                <LayoutThree photos={this.state.photos} />
              </Route>
            </Switch>
          </div>
        )}
      </div>
    );
  }
}

export default App;
