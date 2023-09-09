// import CoursePlaylist from "./CoursePlaylist";
import VideoPlayer from "./VideoPlayer";
import {useState} from 'react'

const CoursePage = () => {

    const episodes = [
        {
        title: 'Intro',
        videoUrl:  "//vjs.zencdn.net/v/oceans.mp4"
        },
        // other episodes
    ]

    const [currentEpisode, setCurrentEpisode]= useState(episodes[0]);


  return (
    <div>
      {/* <CoursePlaylist 
        episodes={episodes}
        onEpisodeClick={setCurrentEpisode} 
      /> */}

      <VideoPlayer 
        src={currentEpisode.videoUrl}
      />
    </div>
  )
}

export default CoursePage

