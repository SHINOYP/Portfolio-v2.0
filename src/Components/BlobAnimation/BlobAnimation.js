import React from "react";
import "./BlobAnimation.css";

const BlobAnimation = () => {
  return (
    <div className="blob-container">
      <div className="blob"></div>
      <div className="blob-behind" />
    </div>
  );
};

export default BlobAnimation;
