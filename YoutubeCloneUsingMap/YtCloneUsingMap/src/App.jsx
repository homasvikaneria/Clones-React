import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import LeftNavbar from './Components/LeftNavbar'
import Maincontent from './Components/Maincontent'
import Topbar from './Components/Topbar';

function App() {

  return (
    <>
     
      <LeftNavbar/>
      <Topbar/>
      <Maincontent/>

    </>
  );
}

export default App
