import React from "react";
import './LandingPage.css'

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./Postview.css"
import cloneLogo from "./images/cloneLogo.png";
import camera from "./images/camera.png";


const LandingPage = () => {
  return (
    <div className="LandingPage-container">
      <div className="navBar">
        <label>
          <img className="instaLogo" src={cloneLogo} alt="instaLogo" />
        </label>
        <label className="logoName">Instaclone</label>
        <label>
          <img className="camera" src={camera} alt="camera" />{" "}
        </label>
      </div>
      <div className="Page-section">

      <div className="Image-container">

        
        <img src="https://picsum.photos/300/300"></img>
      </div>
      <div className="Text-container">
      <div >
        <h1>10x Team Batch 04</h1>
      </div>
      {/* <div className="Button"> */}
      <Link to = '/Postview' className="Button">Enter</Link>
      {/* </div> */}
     
      </div>
      </div>
      </div>
      
     
       
         
    
  );
};

export default LandingPage;
