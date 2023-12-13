import React from 'react';
import myBack from '../media/main.mp4';
function VideoPlayer() {
    return (
      <div className='back'>
        <video width="100%" height="auto" autoPlay loop muted>
          <source src={myBack} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    );
  }
  
  export default VideoPlayer;