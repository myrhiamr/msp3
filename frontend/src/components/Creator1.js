import React from 'react';
import '../index.css'; // Import the CSS file for styling

const Creator1 = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <div className="text-content">
          <h1>Creator 1</h1>
          <p>
            Welcome to the "About Me" page of Creator 1. This page provides insight into the background, 
            inspirations, and works of our talented poet. Creator 1 has been crafting beautiful poetry 
            that touches the hearts of many. Their work explores themes of love, nature, and the human experience.
          </p>
          <p>
            With a passion for words and an eye for detail, Creator 1 brings a unique voice to the world of poetry. 
            Dive into their world and discover the beauty of their words.
          </p>
        </div>
        <div className="image-content">
          <img src="../assets/ana.jpeg" alt="Creator 1" />
        </div>
      </div>
    </div>
  );
};

export default Creator1;
