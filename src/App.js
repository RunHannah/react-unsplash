import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/navbar';
import Landing from './components/landing';
import Grid from './components/grid';
import Flexbox from './components/flexbox';
import Menu from './components/menu';

import { unsplashInitialLoad, photoSearchApiCall } from './UnsplashApi';

import './App.css';

class App extends Component {
  state = {
    photos: [],
    isLoading: true
  };

  componentDidMount() {
    unsplashInitialLoad()
      .then(data => {
        this.setState({ photos: data.results, isLoading: false });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  getPhotos = async e => {
    // get search input from user
    let searchInput = e.target.elements.searchInput.value;
    e.preventDefault();
    e.target.reset();

    this.photoSearch(searchInput);
  };

  photoSearch = searchInput => {
    this.setState({ photos: [], isLoading: true });

    photoSearchApiCall(searchInput)
      .then(data => {
        this.setState({ photos: data.results, isLoading: false });
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  render() {
    return (
      <React.Fragment>
        <Navbar getPhotos={this.getPhotos} />
        {this.state.isLoading ? (
          <p>Loading Images...</p>
        ) : (
          <div>
            <Menu photoSearch={this.photoSearch} />
            <Switch>
              {/* Hosted on gh-pages so home path is /react-unsplash */}
              <Route exact path="/react-unsplash/">
                <Landing photos={this.state.photos} />
              </Route>
              <Route exact path="/grid">
                <Grid photos={this.state.photos} />
              </Route>
              <Route exact path="/flexbox">
                <Flexbox photos={this.state.photos} />
              </Route>
            </Switch>
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default App;
