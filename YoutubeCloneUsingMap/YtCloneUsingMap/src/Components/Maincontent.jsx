// import React from 'react';
// import './Yt.css'

// const main1 = [
//   {
//     id:1,
//     img: "./assets/Thumbnail-8.png",
//     profil: "./assets/Ellipse 4 (1).png",
//     text1: "Bulbuli|Coke Studion Bangla|",
//     text2: "Season One |Ritu Raj X Nandita",
//     channelname: "Coke Studio Bangla",
//     views: "1.5M views • 2 Days ago"
//   },
//   {
//     id:2,
//     img: "./assets/Thumbnail-9.png",
//     profil: "./assets/Ellipse 4 (2).png",
//     text1: "Bulbuli|Coke Studion Bangla|",
//     text2: "Season One |Ritu Raj X Nandita",
//     channelname: "Coke Studio Bangla",
//     views: "1.5M views • 2 Days ago"
//   },
//   {
//     id:3,
//     img: "./assets/Thumbnail-10.png",
//     profil: "./assets/Ellipse 4 (3).png",
//     text1: "Bulbuli|Coke Studion Bangla|",
//     text2: "Season One |Ritu Raj X Nandita",
//     channelname: "Coke Studio Bangla",
//     views: "1.5M views • 2 Days ago"
//   },
//   {
//     id:4,
//     img: "./assets/Thumbnail-11.png",
//     profil: "./assets/Ellipse 4 (4).png",
//     text1: "Bulbuli|Coke Studion Bangla|",
//     text2: "Season One |Ritu Raj X Nandita",
//     channelname: "Coke Studio Bangla",
//     views: "1.5M views • 2 Days ago"
//   },
//   {
//     id:5,
//     img: "./assets/Thumbnail-8.png",
//     profil: "./assets/Ellipse 4 (1).png",
//     text1: "Bulbuli|Coke Studion Bangla|",
//     text2: "Season One |Ritu Raj X Nandita",
//     channelname: "Coke Studio Bangla",
//     views: "1.5M views • 2 Days ago"
//   },
//   {
//     id:6,
//     img: "./assets/Thumbnail-9.png",
//     profil: "./assets/Ellipse 4 (2).png",
//     text1: "Bulbuli|Coke Studion Bangla|",
//     text2: "Season One |Ritu Raj X Nandita",
//     channelname: "Coke Studio Bangla",
//     views: "1.5M views • 2 Days ago"
//   },
//   {
//     id:7,
//     img: "./assets/Thumbnail-10.png",
//     profil: "./assets/Ellipse 4 (3).png",
//     text1: "Bulbuli|Coke Studion Bangla|",
//     text2: "Season One |Ritu Raj X Nandita",
//     channelname: "Coke Studio Bangla",
//     views: "1.5M views • 2 Days ago"
//   },
//   {
//     id:8,
//     img: "./assets/Thumbnail-11.png",
//     profil: "./assets/Ellipse 4 (4).png",
//     text1: "Bulbuli|Coke Studion Bangla|",
//     text2: "Season One |Ritu Raj X Nandita",
//     channelname: "Coke Studio Bangla",
//     views: "1.5M views • 2 Days ago"
//   },

//   {
//     id:9,
//     img: "./assets/Thumbnail-8.png",
//     profil: "./assets/Ellipse 4 (1).png",
//     text1: "Bulbuli|Coke Studion Bangla|",
//     text2: "Season One |Ritu Raj X Nandita",
//     channelname: "Coke Studio Bangla",
//     views: "1.5M views • 2 Days ago"
//   },
//   {
//     id:10,
//     img: "./assets/Thumbnail-9.png",
//     profil: "./assets/Ellipse 4 (2).png",
//     text1: "Bulbuli|Coke Studion Bangla|",
//     text2: "Season One |Ritu Raj X Nandita",
//     channelname: "Coke Studio Bangla",
//     views: "1.5M views • 2 Days ago"
//   },
//   {
//     id:11,
//     img: "./assets/Thumbnail-10.png",
//     profil: "./assets/Ellipse 4 (3).png",
//     text1: "Bulbuli|Coke Studion Bangla|",
//     text2: "Season One |Ritu Raj X Nandita",
//     channelname: "Coke Studio Bangla",
//     views: "1.5M views • 2 Days ago"
//   },
//   {
//     id:12,
//     img: "./assets/Thumbnail-11.png",
//     profil: "./assets/Ellipse 4 (4).png",
//     text1: "Bulbuli|Coke Studion Bangla|",
//     text2: "Season One |Ritu Raj X Nandita",
//     channelname: "Coke Studio Bangla",
//     views: "1.5M views • 2 Days ago"
//   },

// ]


// function Maincontent() {
//   return (
//     <>
//       <div className='maincontents'>
//         <div className='row1'>
//           {main1.map((i) => (
//             <div key={i.id} className='thumbnail'>
//               <div className='bigimg'>
//                 <img className='bigimg' src={i.img} alt="Thumbnail" />
//               </div>
//               <div className='insideflex'>
//                 <div >
//                   <img className='smallimg'src={i.profil} alt="Profile" />
//                 </div>
//                 <div>
//                   <div className='T1'>
//                     <p>{i.text1}</p>
//                   </div>
//                   <div className='T2'>
//                     <p>{i.text2}</p>
//                   </div>
//                 </div>
//               </div>
//               <div className='lowerinfo'>
//                 <div className='channelname'>
//                   <p>{i.channelname}</p>
//                 </div>
//                 <div className='views'>
//                   <p>{i.views}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>



//     </>
//   );
// }

// export default Maincontent;


// form fetch method

import { useEffect, useState } from 'react';
import './Yt.css';

function Maincontent() {
  const [main1, setMain1] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch('https://functionalyoutube.onrender.com/main1');  // Correct URL to fetch data
        if (!response.ok) {
          throw new Error('Failed to fetch videos');
        }
        const data = await response.json();
        setMain1(data);  // Set video data to state
        setLoading(false);
      } catch (err) {
        setError(err.message);  // Handle any errors
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  if (loading) {
    return <div>Loading videos...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <div className='maincontents'>
        <div className='row1'>
          {main1.map((i) => (
            <div key={i.id} className='thumbnail'>
              <div className='bigimg'>
                <img className='bigimg' src={i.img} alt="Thumbnail" />
              </div>
              <div className='insideflex'>
                <div >
                  <img className='smallimg' src={i.profil} alt="Profile" />
                </div>
                <div>
                  <div className='T1'>
                    <p>{i.text1}</p>
                  </div>
                  <div className='T2'>
                    <p>{i.text2}</p>
                  </div>
                </div>
              </div>
              <div className='lowerinfo'>
                <div className='channelname'>
                  <p>{i.channelname}</p>
                </div>
                <div className='views'>
                  <p>{i.views}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>



    </>
  );
}

export default Maincontent;

// import { useEffect, useState } from 'react';
// import axios from 'axios';  // Import axios
// import './Yt.css';

// function Maincontent() {
//   const [main1, setMain1] = useState([]);  // Store fetched video data
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // YouTube API Key (Replace with your actual key)
//   const API_KEY = 'AIzaSyBNzCriFj5BLK7TsM1k2fqR2lGoCvoxwzk';
//   const CHANNEL_ID = 'UC_x5XG1OV2P6uZZ5b7S4XyA'; // Example: Google's channel ID
  
//   // Fetch videos from YouTube API
//   useEffect(() => {
//     const fetchVideos = async () => {
//       try {
//         const response = await axios.get(
//           `https://www.googleapis.com/youtube/v3/search`, {
//             params: {
//               part: 'snippet',
//               channelId: CHANNEL_ID,  // You can also use 'q' for a search term
//               maxResults: 12,  // Max number of videos to fetch
//               key: API_KEY,
//             }
//           });

//         if (response.data.items) {
//           const videos = response.data.items.map(item => ({
//             id: item.id.videoId,
//             img: item.snippet.thumbnails.high.url,  // Thumbnail image URL
//             profil: item.snippet.thumbnails.default.url, // Profile image URL (can use channel thumbnail)
//             text1: item.snippet.title,
//             text2: item.snippet.description,
//             channelname: item.snippet.channelTitle,
//             views: "N/A",  // You can modify this to fetch actual view counts
//             videoUrl: `https://www.youtube.com/watch?v=${item.id.videoId}`,  // Video URL
//           }));
//           setMain1(videos);  // Update state with video data
//         }
//         setLoading(false);
//       } catch (err) {
//         setError('Failed to fetch videos');
//         setLoading(false);
//       }
//     };

//     fetchVideos();  // Trigger video fetch on component mount
//   }, []);

//   if (loading) {
//     return <div>Loading videos...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   // Handle thumbnail click to display selected video
//   const handleThumbnailClick = (videoUrl) => {
//     window.open(videoUrl, '_blank');  // Open the video in a new tab
//   };

//   return (
//     <>
//     <div className='maincontents'>
//          <div className='row1'>
//            {main1.map((i) => (
//             <div key={i.id} className='thumbnail'>
//               <div className='bigimg'>
//                 <img className='bigimg' src={i.img} alt="Thumbnail" />
//               </div>
//               <div className='insideflex'>
//                 <div >
//                   <img className='smallimg' src={i.profil} alt="Profile" />
//                 </div>
//                 <div>
//                   <div className='T1'>
//                     <p>{i.text1}</p>
//                   </div>
//                   <div className='T2'>
//                     <p>{i.text2}</p>
//                   </div>
//                 </div>
//               </div>
//               <div className='lowerinfo'>
//                 <div className='channelname'>
//                   <p>{i.channelname}</p>
//                 </div>
//                 <div className='views'>
//                   <p>{i.views}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// }

// export default Maincontent;


