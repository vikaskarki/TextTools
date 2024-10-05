import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';


export default function Navbar(props) {

  
  return (
        //backticks use gareko cha dhyan de
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}> 
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">{props.home}</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">{props.about}</Link>
        </li>
        {/* <li className="nav-item">
          <Link className="nav-link" href="/">{props.contact}</Link>
        </li> */}

        {/* a ra href use garera pani link garna milxa, tara page load huna thalxa which is not a react based website/webapp, 
        tei bhayera react-router-dom package bata 'link' use gareko which helps to link from one nav bar component
        to another without loading the page. */}


      </ul>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}


      {/* EnableDarkMode ko lagi */}
      <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}> 
        {/* props.mode le text light bhaako bela enable dark mode dark banauxa bhane text dark bhaako bela enable dark mode dark banaidinxas */}
        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/> 
        {/* props.toggleMode function click garyo bhane enable dark mode switch click gareko ho. */}
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">EnableDarkMode</label>
      </div>

    
      {/* <button className="btn btn-danger mx-2" onClick={props.makeRed}>Red </button>
      <button className="btn btn-success mx-2" onClick={props.makeGreen}>Green </button> */}
      <button className="btn btn-info mx-2" onClick={props.makeBlue}>Blue</button>
    

        




    </div>
  </div>
</nav>
  )
}

Navbar.propTypes = {
    title : PropTypes.string,
    about : PropTypes.string,
    contact: PropTypes.string,
}