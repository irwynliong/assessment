import React from 'react';

const VideoBackground = () => {
  return (
    <video autoPlay loop muted style={{
      position: "fixed",
      width: "100%",
      left: "50%",
      top: "50%",
      height: "100%",
      objectFit: "cover",
      transform: "translate(-50%, -50%)",
      zIndex: "-1"
    }}>
      <source src="/videos/home.webm" type="video/webm" />
      Your browser does not support the video tag.
    </video>
  );
};

export default VideoBackground;
