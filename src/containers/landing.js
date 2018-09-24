import React, { Component } from "react";

class Landing extends Component {
  state = {
    photos: this.props.photos,
    url: '',
    loading: true
  }

  componentDidMount() {

    const randomNumber = Math.floor((Math.random() * 10) + 1);

    console.log('Landing photo FIRST item', this.state.photos[randomNumber].urls.regular);

    const url = this.state.photos[randomNumber].urls.regular;
    this.setState({ url, loading: false });

    console.log('this.state.url', this.state.url);
  }

  render() {
    return (
      <div>
        {this.state.loading ?
          <h2>Loading Image...</h2> :

        <div>
          <img src={this.state.url} alt="random image" />
        </div>
      }
    </div>
    );
  }
}

export default Landing;
