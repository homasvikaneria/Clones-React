import React from 'react';
import './Yt.css'

   
    
    // Use map to render sidebar components
    const LeftSidebar = () => {
        return (
            <>
            <div className='ytlogoandmenu'>
            <div >
                <img className='menu' src="./assets/hambarger.png" alt="hoo" />
            </div>
            <div >
                <img className='ytlogo' src="./assets/Youtube logo.png" alt="" />
            </div>
            </div>
            <div className='left'>
            <div className='side-bar'>
            <Sidebar icon = './assets/home.png' name= "Home" />
            < Sidebar icon  = './assets/explore.png' name=  "Explore" />
            < Sidebar icon='./assets/shorts.png'name=  "Shorts" />
            < Sidebar icon= './assets/subscription.png'name=  "Subscription" />
            

            </div>
            <hr  className='hr1'/>
            <div className='side-bar'>
            < Sidebar icon= './assets/library.png'name=  "Library"  />
            < Sidebar icon= './assets/history.png'name=  "History" />
            < Sidebar icon= './assets/your_video.png'name= "Your Videos" />
            < Sidebar icon= './assets/watch_later.png'name=  "Watch Later"/>
            < Sidebar icon= './assets/liked.png'name=  "Liked videos" />
            <Sidebar icon= './assets/down_arrow.png'name=  "Show more" />
            </div>

            <hr  className='hr2'/>
            <div className='profil'>
                <h3 className='sub'>SUBSCRIPTIONS</h3>
                < Sidebar icon='./assets/Ellipse 1.png' name="Nadir On The Go"/>
                < Sidebar icon='./assets/Ellipse 1 (1).png' name="Coke Studio Bangle"/>
                < Sidebar icon='./assets/Ellipse 1 (2).png' name="MKBHD"/>
                < Sidebar icon='./assets/Ellipse 1 (3).png' name="Figma"/>
                < Sidebar icon='./assets/Ellipse 1 (4).png' name="ATC Andorid ToTo C.."/>
                < Sidebar icon='./assets/Ellipse 1 (5).png' name="Alux.com"/>
            </div>

                </div>
            
            </>

            
        );
    };
    const Sidebar = ({ icon, name }) => {
        return (
          <div className="sidebar-item">
            <img src={icon} alt={name} className="sidebar-icon" />
            <span className='sidebar-name'>{name} </span>
          </div>
        );
      };
    
    export default LeftSidebar;
    
  
  
