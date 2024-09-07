import React from "react";
import myImage from "./assets/images/myImage.png";

function ImageComponent() {
  return (
    <div>
      <img src={myImage} alt="My Custom Image" />
    </div>
  );
}

export default ImageComponent;
