import React, { useState, useRef } from 'react';
import VideoHeader from './VideoHeader';
import './VideoCard.css';

function VideoCard() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef(null);

  const onVideoPress = () => {
    if (isVideoPlaying) {
      videoRef.current.pause();
      setIsVideoPlaying(false);
    } else {
      videoRef.current.play();
      setIsVideoPlaying(true);
    }
  };

  return (
    <div className="videoCard">
      <VideoHeader />
      <video
        ref={videoRef}
        onClick={onVideoPress}
        className="videoCard__player"
        src="https://youtu.be/4u36xe00KA0"
        alt="IG reel video"
        loop
      />
    </div>
  );
}

export default VideoCard;
