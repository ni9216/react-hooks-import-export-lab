// src/components/Home.js
import React from 'react';
import { username, city } from '../data/user'; // Import username and city variables

const Home = () => {
  return (
    <div id="home">
      <h2>Home</h2>
      <p>{username} lives in {city}</p>
    </div>
  );
};

export default Home;
