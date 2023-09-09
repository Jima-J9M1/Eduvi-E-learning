import React, { useEffect, useState } from 'react';

// Define types for video and playlist
type Video = {
  id: number;
  title: string;
  url: string;
};

type Playlist = {
  id: number;
  title: string;
  videos: Video[];
};

const CoursePlaylist: React.FC = () => {
  // State to hold the playlist data
  const [playlist, setPlaylist] = useState<Playlist | null>(null);

  // Fetch the playlist data from the API
  useEffect(() => {
    const fetchPlaylist = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
       
        const transformedData: Playlist = {
          id: 1, 
          title: 'Course Playlist',
          videos: data.map((video: any) => ({
            id: video.id,
            title: video.title,
            url: video.url,
          })),
        };

        setPlaylist(transformedData);
      } catch (error) {
        console.error('Error fetching playlist:', error);
      }
    };

    fetchPlaylist();
  }, []);

  if (!playlist) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{playlist.title}</h1>
      <ul>
        {playlist.videos.map((video) => (
          <li key={video.id}>
            <a href={video.url}>{video.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CoursePlaylist;
















// import React from 'react'

// interface CoursePlaylistProps {
//     episodes: Episode[]
//     onEpisodeClick: (episode: Episode) => void;
   
   

//   }
//   interface EpisodeItemProps {
//     episode: Episode;
//     onEpisodeClick: (episode: Episode) => void;
//   }
  
//   interface Episode {
//     title: string;
//     videoUrl: string;
//   }

  
//   const CoursePlaylist = ({episodes,onEpisodeClick}: CoursePlaylistProps) => {
  
//     return (
//       <div className="playlist">
//         <h3>Course Playlist</h3>
  
//         {episodes.map((episode:Episode) => (
//           <EpisodeItem 
//             key={episode.title}
//             episode={episode} 
//             onEpisodeClick={onEpisodeClick}
//           />  
//         ))}
  
//       </div>
//     )
    
//   }
//   const EpisodeItem = ({ episode, onEpisodeClick }:EpisodeItemProps) => (
//     <div 
//       className="episode"
//       onClick={() => onEpisodeClick(episode)} 
//     >
//       <button>{episode.title}</button>
//     </div>
//   )
//   // const EpisodeItem = ({episode}:{episode:Episode}) => (
//   //   <div className="episode">
//   //     <button>{episode.title}</button>
//   //   </div>  
//   // )
  
//   export default CoursePlaylist