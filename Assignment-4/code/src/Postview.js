import React, {useState, useEffect } from 'react';

import './Postview.css';
import threeDots from './images/threeDots.png';
import camera from './images/camera.png';
import likeHeart from './images/likeHeart.png';
import shareIcon from './images/shareIcon.png';
import cloneLogo from './images/cloneLogo.png';





const Postview=()=> {

  const [Posts, setPosts]= useState([]);

  useEffect(()=>{
    const fetchPosts = async ()=>{
      const response = await fetch("http://localhost:3004/user");
      const postsData = await response.json();
      setPosts(postsData);
    };
    fetchPosts();
  }, []);
    
    
  return (
    
    <div className="site-container">
      <div className='navBar'>
        <label><img className='instaLogo' src={cloneLogo} alt="instaLogo"/></label>
        <label className='logoName'>Instaclone</label>
        <label ><img className='camera' src={camera} alt="camera"/> </label>

      </div>


      {   
          Posts.map((Post)=>(
            <div  className="Posts">
              
              <div className='PostDetails'>
                <div className='userDetails'>
                  <h1>{Post.name}</h1>
                  <p>{Post.location}</p>
                </div>
                <img className='threedots' src={threeDots} alt="click"/>
              </div>

              <img className='profImage' src={Post.PostImage} alt="ProfileImg"/>
              
              <div className='actions'>

                <img className='likeImage' src={likeHeart} alt="like_image"/>
                <img className='shareImage' src={shareIcon} alt="share_image"/>

                <div className='date'>
                  <p>{Post.date}</p>
                </div>

              </div>
              
              <p className='likes'>
                {Post.likes + " Likes"}
              </p>
              
              <p className='description'>
                {Post.description}
              </p>
            
            </div>
          ))
      
      }

    </div>
  );
}

export default Postview;