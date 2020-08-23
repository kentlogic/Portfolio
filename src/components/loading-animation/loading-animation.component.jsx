import React from "react";
import "./loading-animation.styles.scss";

const LoadingAnimation = () => {
  return (
    <div className="container">
      <button className="spinner-grow"></button>
      <br />
      <h1 className="display-5">Omachikudasai...</h1>
    </div>
  );
};

export default LoadingAnimation;
