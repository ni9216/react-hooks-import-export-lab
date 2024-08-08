// src/components/About.js
import React from 'react';
import { image } from '../data/user'; // Import the image variable

const About = () => {
  return (
    <div id="about">
      <h2>About</h2>
      <img src={image} alt="about" />
    </div>
  );
};

export default About;
