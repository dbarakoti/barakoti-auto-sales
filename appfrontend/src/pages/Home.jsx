import React from 'react';
import { useNavigate } from 'react-router-dom';
import './home.css';
import homepgvideo from '../assets/home-Pg.mp4';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="video-body-container">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="video-background"
      >
        <source src={homepgvideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="video-overlay-content">
        <h1 className="homepg-heading">Let's get on the<br />road.</h1>
        <button className="homepg-button" onClick={() => navigate('/inventory')}>
          Browse Inventory
        </button>
      </div>
    </div>
  );
};

export default Home;