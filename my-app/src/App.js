
import { useState } from 'react'; //about.js ko lagi 
import './App.css';
import Alert from './components/Alert';
import About from './components/About'; //about.js ko lagi
import Navbar from './components/Navbar';
import Textform1 from './components/Textform1';

// import React, { useState } from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";



function App() {
  const [mode, setMode] = useState('light'); //whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);
  // const [textcolor, setTextColor] = useState(null);

  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
  }
  // Clear alert after 2 seconds
  setTimeout(() => {
    setAlert(null);
  }, 2500);

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor='grey';
      showAlert("Dark mode has been enabled!","Success!");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      // showAlert("Light mode has been enabled!","Success!");
    }
  }

  // background red ra green ma change garna lai
  const makeBlue = () => {
    document.body.style.backgroundColor = '#87CEEB';
    showAlert("Blue background has been enabled!", "success");
    // setTextColor('white')
  };

  // const makeRed = ()=>{
  //   document.body.style.backgroundColor = 'red';
  //   showAlert("Red background has been enabled!", "success");
  // }

  return (
    <>
    <Router>
<Navbar title= "TextTools69" mode= {mode} home= "Home" about= "About" contact= "Contact"
   toggleMode={toggleMode} makeBlue={makeBlue} />
{/* container le text box lai bich ma lyauna help garcha */}
<Alert alert={alert} />
<div className="container" >
<Routes>
  <Route exact path="/about" element={<About />}>
  </Route>
  <Route exact path="/" element={<Textform1 heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />}>
  </Route>
</Routes>
{/* partial routing garnu bhanda exact routing gareko ramro tei bhayera exact path rakheko. */}

{/* about.js ko lagi */}

</div>
</Router>
  </>
  );
}
 
export default App;
