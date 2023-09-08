import * as React from 'react'
import  videojs from 'video.js'
import { RefObject } from 'react'
// import { PlayerOptions } from 'video.js';
import "video.js/dist/video-js.css";

interface VideoPlayerProps{
  options:videojs.PlayerOptions
  }

 const initialOptions:videojs.PlayerOptions={
  controls:true,
  // fluid:true,
  // controlBar:{
  //   volumePanel:{
  //     inline:false
  //   }
  // }
}



const CustomVideoPlayer: React.FC<VideoPlayerProps> = ({options}) => {
  const videoNode = React.useRef<HTMLVideoElement>() as RefObject<HTMLVideoElement>;
  const player = React.useRef<videojs.player>();
  // const player = React.useRef();
  React.useEffect(() => {
    player.current = videojs(videoNode.current!,{
      ...initialOptions,
      ...options
    }).ready(function() {
      
    })

    return() => {
      if (player.current){
        player.current.dispose();
      }
    }
  }, [options])

  return (
    <div>
      <video ref={videoNode} className='video.js'/>
    </div>
  )
}

export default CustomVideoPlayer
