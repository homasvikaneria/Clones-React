import React from 'react';
import './Yt.css'

const main1 = [
  {
    id:1,
    img: "./assets/Thumbnail-8.png",
    profil: "./assets/Ellipse 4 (1).png",
    text1: "Bulbuli|Coke Studion Bangla|",
    text2: "Season One |Ritu Raj X Nandita",
    channelname: "Coke Studio Bangla",
    views: "1.5M views • 2 Days ago"
  },
  {
    id:2,
    img: "./assets/Thumbnail-9.png",
    profil: "./assets/Ellipse 4 (2).png",
    text1: "Bulbuli|Coke Studion Bangla|",
    text2: "Season One |Ritu Raj X Nandita",
    channelname: "Coke Studio Bangla",
    views: "1.5M views • 2 Days ago"
  },
  {
    id:3,
    img: "./assets/Thumbnail-10.png",
    profil: "./assets/Ellipse 4 (3).png",
    text1: "Bulbuli|Coke Studion Bangla|",
    text2: "Season One |Ritu Raj X Nandita",
    channelname: "Coke Studio Bangla",
    views: "1.5M views • 2 Days ago"
  },
  {
    id:4,
    img: "./assets/Thumbnail-11.png",
    profil: "./assets/Ellipse 4 (4).png",
    text1: "Bulbuli|Coke Studion Bangla|",
    text2: "Season One |Ritu Raj X Nandita",
    channelname: "Coke Studio Bangla",
    views: "1.5M views • 2 Days ago"
  },
  
]
const main2 = [
  {
    id:1,
    img: "./assets/Thumbnail-8.png",
    profil: "./assets/Ellipse 4 (1).png",
    text1: "Bulbuli|Coke Studion Bangla|",
    text2: "Season One |Ritu Raj X Nandita",
    channelname: "Coke Studio Bangla",
    views: "1.5M views • 2 Days ago"
  },
  {
    id:2,
    img: "./assets/Thumbnail-9.png",
    profil: "./assets/Ellipse 4 (2).png",
    text1: "Bulbuli|Coke Studion Bangla|",
    text2: "Season One |Ritu Raj X Nandita",
    channelname: "Coke Studio Bangla",
    views: "1.5M views • 2 Days ago"
  },
  {
    id:3,
    img: "./assets/Thumbnail-10.png",
    profil: "./assets/Ellipse 4 (3).png",
    text1: "Bulbuli|Coke Studion Bangla|",
    text2: "Season One |Ritu Raj X Nandita",
    channelname: "Coke Studio Bangla",
    views: "1.5M views • 2 Days ago"
  },
  {
    id:4,
    img: "./assets/Thumbnail-11.png",
    profil: "./assets/Ellipse 4 (4).png",
    text1: "Bulbuli|Coke Studion Bangla|",
    text2: "Season One |Ritu Raj X Nandita",
    channelname: "Coke Studio Bangla",
    views: "1.5M views • 2 Days ago"
  },
  
]
const main3 = [
  {
    id:1,
    img: "./assets/Thumbnail-8.png",
    profil: "./assets/Ellipse 4 (1).png",
    text1: "Bulbuli|Coke Studion Bangla|",
    text2: "Season One |Ritu Raj X Nandita",
    channelname: "Coke Studio Bangla",
    views: "1.5M views • 2 Days ago"
  },
  {
    id:2,
    img: "./assets/Thumbnail-9.png",
    profil: "./assets/Ellipse 4 (2).png",
    text1: "Bulbuli|Coke Studion Bangla|",
    text2: "Season One |Ritu Raj X Nandita",
    channelname: "Coke Studio Bangla",
    views: "1.5M views • 2 Days ago"
  },
  {
    id:3,
    img: "./assets/Thumbnail-10.png",
    profil: "./assets/Ellipse 4 (3).png",
    text1: "Bulbuli|Coke Studion Bangla|",
    text2: "Season One |Ritu Raj X Nandita",
    channelname: "Coke Studio Bangla",
    views: "1.5M views • 2 Days ago"
  },
  {
    id:4,
    img: "./assets/Thumbnail-11.png",
    profil: "./assets/Ellipse 4 (4).png",
    text1: "Bulbuli|Coke Studion Bangla|",
    text2: "Season One |Ritu Raj X Nandita",
    channelname: "Coke Studio Bangla",
    views: "1.5M views • 2 Days ago"
  },
  
]

function Maincontent() {
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
                  <img className='smallimg'src={i.profil} alt="Profile" />
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


      <div className='maincontents'>
        <div className='row2'>
          {main2.map((i) => (
            <div key={i.id} className='thumbnail'>
              <div className='bigimg'>
                <img className='bigimg' src={i.img} alt="Thumbnail" />
              </div>
              <div className='insideflex'>
                <div >
                  <img className='smallimg'src={i.profil} alt="Profile" />
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



      <div className='maincontents'>
        <div className='row3'>
          {main3.map((i) => (
            <div key={i.id} className='thumbnail'>
              <div className='bigimg'>
                <img className='bigimg' src={i.img} alt="Thumbnail" />
              </div>
              <div className='insideflex'>
                <div >
                  <img className='smallimg'src={i.profil} alt="Profile" />
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
      