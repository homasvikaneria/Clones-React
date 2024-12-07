import React from 'react';
import './Yt.css'


function Topbar() {

    return (
        <>
        <div className='maincontents'>
            <div className='Topbar'>
                <div >
                    <input className='searchbar' type="text" placeholder='Search' />
                </div>
                <div><img className='searchicon' src="./assets/search.png" alt="" /></div>
                <div><img className='mic' src="./assets/mic.png" alt="" /></div>
                <div><img className='create' src="./assets/create.png" alt="" /></div>
                <div><img className='more' src="./assets/more.png" alt="" /></div>
                <div><img className='bell' src="./assets/bell.png" alt="" /></div>
                <div><img className='userprofile' src="./assets/Ellipse 4-1.png" alt="" /></div>
            </div>
            <div className='hr3'></div>

            <div className='recenttopic'>
                <div style={{backgroundColor:"white", color:'black'}}>
                    All
                </div>
                <div >
                    Coke Studio
                </div>
                <div >
                    UX
                </div>
                <div >
                    Case Study
                </div>
                <div >
                    Music
                </div>
                <div>
                    Bangla Lofi
                </div>
                <div>
                    Tour
                </div>
                <div >
                    Saintmartin
                </div>
                <div>
                    Tech
                </div>
                <div >
                    iPhone13
                </div>
                <div >
                    User Interface Desing
                </div>

            </div>
            <div className='hr4'></div>
            </div>


        </>
    );
}

export default Topbar
