import React, {useState, useRef, useEffect } from 'react';
import IconButton from '@mui/material/IconButton';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import  {Timestamp}  from '../../types';
import { VideoProps } from '../../types';
import { TimestampPlaylistProps } from '../../types';
import { TimestampProps } from '../../types';

 

const VideoPlayer: React.FC<VideoProps> = ({ src, timestamps }) => {
  
  const [currentTime, setCurrentTime] = useState(0);

  const videoRef = useRef<HTMLVideoElement>(null);


 
  useEffect(() => {
    const videoElement = videoRef.current;

    if (videoElement) {
      videoElement.src = src;
    }
  }, [src]);

  const handlePlay = () => {
    const videoElement = videoRef.current;

    if (videoElement) {
      videoElement.play();
    }
  };

  const handlePause = () => {
    const videoElement = videoRef.current;

    if (videoElement) {
      videoElement.pause();
    }
  };

  const handleSeek = (time: number) => {

    const videoElement = videoRef.current;

      if (videoElement) {
        videoElement.currentTime = time;
      }
      setCurrentTime(time);
  
  };
 

  return (
    
    <div className="flex flex-col align-center justify-center relative rounded-lg overflow-hidden ">
      <video ref={videoRef} className="w-4/5 h-[26rem] mx-10 mt-3 px-10  " controls />
      
      <button className='text-3xl flex flex-col justify-around absolute bottom-0 left-1/2 right-1/2  py-2 px-10 mx-10 text-white'>

      <TimestampPlaylist 
        timestamps={timestamps}
        onSeek={handleSeek}
       
      />
      </button>

      <div className="absolute top-1/2 right-1/2   transform -translate-x-1/2 -translate-y-1/2">
        <IconButton onClick={handlePlay}  className="text-6xl ">
          <PlayCircleOutlineIcon style={{ fontSize: '6rem', color:'#8b5cf6' } } />
        </IconButton>
        
      </div>
     
       {/* <div className="absolute bottom-0 left-1/2 right-0  py-2 px-10 mx-10 text-white text-3xl flex justify-between"> */}
        {/* <button className="text-white" onClick={handlePlay}>
          Play
        </button> */}
        {/* <button className="text-white" onClick={handlePause}>
          Pause
        </button>  */}
      {/* </div> */}
    
    
    </div>
  );
};

const TimestampPlaylist = ({timestamps, onSeek}:TimestampPlaylistProps) => {
    return(
      <div>
      {timestamps.map((ts: Timestamp) => (
        <TimestampComp
          key={ts.time} 
          time={ts.time}
          onClick={() => onSeek(ts.time)} 
        />  
      ))}
    </div>

    )
}

 const TimestampComp = ({ time, onClick }: TimestampProps) => (
  <button onClick={onClick}>
    {time}
  </button>
)

export default VideoPlayer;

// import React from 'react';
// import VideoPlayer from './VideoPlayer';

// const App: React.FC = () => {
//   const videoSrc = 'path/to/video.mp4';
//   const videoTimestamps = [10, 30, 60];

//   return (
//     <div>
//       <h1>Custom Video Player</h1>
//       <VideoPlayer src={videoSrc} timestamps={videoTimestamps} />
//     </div>
//   );
// };

// export default App;