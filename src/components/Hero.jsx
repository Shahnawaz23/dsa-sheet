import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero-container">
      <h1 className="hero-heading">Master DSA with Ease</h1>
      <p className="hero-subtext">Unlock structured chapters, practice problems, and guided video tutorials.</p>
      <a className="hero-btn" href="/dashboard">Go to Dashboard</a>
    </div>
  );
};

export default Hero;
