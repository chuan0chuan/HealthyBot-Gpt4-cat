// BackgroundComponent.js

import React from 'react';
import catImage from "../assets/cat02.png";

function BackgroundComponent({ transparent }) {
  const containerStyle = {
    opacity: transparent ? 0.5 : 1, // 根据 transparent 属性设置透明度
  };

  return (
    <div className="image-and-text-container" style={containerStyle}>
      <img  src={catImage} alt="Purrfessor"  />
      <p>Hey, I am your Purrfessor!</p>
    </div>
  );
}

export default BackgroundComponent;
