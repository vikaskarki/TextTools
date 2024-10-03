
// import { useState } from 'react'; //about.js ko lagi 
import './App.css';
// import About from './components/About'; //about.js ko lagi
import Navbar from './components/Navbar';
import Textform from './components/Textform1';
import React, { useState } from 'react';

function App() {
  const [mode, setMode] = useState('light'); //whether dark mode is enabled or not

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor='grey'
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white'
    }
  }

  return (
    <>
<Navbar title= "TextTools69" mode= {mode} home= "Home" about= "About" contact= "Contact" toggleMode={toggleMode}/>
{/* container le text box lai bich ma lyauna help garcha */}
<div className="container">
<Textform heading= "Enter your text here" />
{/* <About/> about.js ko lagi */}
</div>

    </>
  );
}



export default App;
