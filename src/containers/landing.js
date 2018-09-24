import React, { Component } from "react";

class Landing extends Component {
  state = {
    data: ""
  };

  componentDidMount() {
    fetch(
      "https://api.unsplash.com/photos/?client_id=" +
        process.env.REACT_APP_UNSPLASH_API_KEY
    )
      .then(resp => resp.json())
      .then(function(data) {
        console.log("data", data);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    return <div>Hello World</div>;
  }
}

export default Landing;
