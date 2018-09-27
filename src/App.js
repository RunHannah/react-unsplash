import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
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
    // get photos from API
    await fetch(
      `https://api.unsplash.com/search/photos/?client_id=${apiKey}&query=california`
    )
      .then(resp => {
        return resp.json();
      })
      .then(data => {
        console.log("app js data", data.results);

        this.setState({ photos: data.results, loading: false });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  getPhotos = async e => {
    // get search input
    let searchInput = e.target.elements.searchInput.value;
    e.preventDefault();
    e.target.reset();

    // clearing state
    this.setState({ photos: [], loading: true });

    // get photos from API
    await fetch(
      `https://api.unsplash.com/search/photos/?client_id=${apiKey}&query=${searchInput}`
    )
      .then(resp => {
        return resp.json();
      })
      .then(data => {
        console.log("app js data", data.results);

        this.setState({ photos: data.results, loading: false });
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  render() {
    console.log("App component photos", this.state.photos);

    return (
      <div>
        <Navbar getPhotos={this.getPhotos} />
        {this.state.loading ? (
          <h2>Loading products...</h2>
        ) : (
          <div className="wrapper">
            <Switch>
              <Route exact path="/">
                <Landing photos={this.state.photos} />
              </Route>
              <Route exact path="/layout-one">
                <ContentOne photos={this.state.photos} />
              </Route>
              <Route exact path="/layout-two">
                <ContentTwo photos={this.state.photos} />
              </Route>
            </Switch>
          </div>
        )}
      </div>
    );
  }
}

export default App;
