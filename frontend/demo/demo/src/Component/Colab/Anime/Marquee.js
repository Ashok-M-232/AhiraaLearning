// Marquee.js

import React from 'react';
import './Marquee.css'; // Assuming you have a separate CSS file for styling

const Marquee = () => {
  return (
    <div className="marquee">
      <ul className="marquee-content">
        <li><i className="fab fa-github"></i></li>
        <li><i className="fab fa-codepen"></i></li>
        <li><i className="fab fa-free-code-camp"></i></li>
        {/* Add other icons here */}
      </ul>
    </div>
  );
};

export default Marquee;
