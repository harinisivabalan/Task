import React, { useRef, useState } from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import "./App.css";

const VideoPlayer = () => {
  const videoRef = useRef(null); 
  const [isPlaying, setIsPlaying] = useState(false); 

  const handlePlayPause = () => {
    const video = videoRef.current;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="video-container">
      <video
        ref={videoRef}
        width="600"
        src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4
"
      />
      <button onClick={handlePlayPause} className="play-pause-button">
        {isPlaying ? <FaPause /> : <FaPlay />}
      </button>
    </div>
  );
};

export default VideoPlayer;
