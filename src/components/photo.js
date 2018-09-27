import React from "react";

const Photo = ({ photo }) => (
  <div>
    <img src={photo.urls.small} alt="random-unsplash" />
  </div>
);

export default Photo;
