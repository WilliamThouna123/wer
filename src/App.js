import React from 'react';
import './App.css';
import VideoCard from './VideoCard';

function App() {
  return (
    // BEM naming convention
    <div className="app">
      <h1>fanshots</h1>
      <div className="app__top">
        <img
          className="app_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/198px-Instagram_logo_2016.svg.png"
          alt=""
        />
        <h1>Reels</h1>
        {/* Reels text */}
      </div>

      <div className="app__videos">
        {/* Container of app__videos (scrollable contaner) */}
        <VideoCard />
        {/* <video/> */}
        {/* <video/> */}
        {/* <video/> */}
        {/* <video/> */}
        {/* <video/> */}
      </div>
    </div>
  );
}

export default App;
