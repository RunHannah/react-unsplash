import React from "react";

const Photo = ({ photo }) => (
  <div>
    <img src={photo.urls.small} alt="random-unsplash" />
    {console.log("photo", photo)}
  </div>
);

export default Photo;
