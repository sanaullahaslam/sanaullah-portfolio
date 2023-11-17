// HeroSection.js

import React from 'react';

const HeroSection = () => {
  return (
    <div style={heroStyle}>
      <div style={textContainerStyle}>
        <h1 style={headingStyle}>I am</h1>
        <h1 style={animationHeadingStyle}>
          <span>Blockchain Developer</span>
          <span>App Developer</span>
          <span>Web Developer</span>
          <span>Programmer</span>
        </h1>
      </div>
      <div style={imageContainerStyle}>
        {/* {<img src=''>} */}
        {/* <img src="your-image-source" alt="Your Alt Text" style={imageStyle} /> */}
      </div>
    </div>
  );
};

const heroStyle = {
  backgroundColor: '#34495E',
  color: '#ffffff',
  display: 'flex',
  justifyContent: 'space-between',
  padding: '50px',
};

const textContainerStyle = {
  maxWidth: '60%',
};

const headingStyle = {
  fontSize: '2em',
  fontWeight: 'bold',
};

const animationHeadingStyle = {
  fontSize: '2.5em',
  fontWeight: 'bold',
  overflow: 'hidden',
};

const imageContainerStyle = {
  flex: '1',
  marginLeft: '50px', // Adjust the space as needed
};

const imageStyle = {
  width: '100%',
  height: 'auto',
  borderRadius: '8px',
};

export default HeroSection;
