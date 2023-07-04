import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const Project = () => {
  const el3 = useRef(null);
  useEffect(() => {
    var typed = new Typed(el3.current, {
      strings: ["MY PROJECT"],
      typeSpeed: 300,
      backSpeed: 100,
      backDelay: 3000,
      loop: true
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <div className='Project' id='Project'>
      <div className='containers'>
        <h1 className='sub' ><span className='typedText' ref={el3} /></h1>
        <div className='work-list'>
          <div className='work'>
            <img className="paragImg2" src={require("./docs/Project1.png")} alt='' />
            <div className='layer'>
              <h3>Movie Recommendation System</h3>
              <p>This app offers personalized movie recommendations based on your viewing
                history and feedback. After successful Login with easy search, rating, and feedback
                features, you can improve the algorithm and get the best recommendations</p>
              <div className='btns'>
                <a href="https://github.com/ParagKesharDas/MovieRecommendationSystem" className='btn' target="_blank" rel="noreferrer">Github</a>
                <a href="https://huggingface.co/spaces/ParagKesharDas360/MovieRecommadationApp" className='btn btn-p' target="_blank" rel="noreferrer">Live Demo</a>
              </div>
            </div>
          </div>
          <div className='work'>
            <img className="paragImg2" src={require("./docs/Project2.png")} alt="" />
            <div className='layer'>
              <h3>User Management App</h3>
              <p>The user management application is a project built using ReactJS.It allows users
                to perform various operations on user information, including viewing, adding,
                editing, and deleting user records</p>
              <div className='btns'>
                <a href="https://github.com/ParagKesharDas/userManageapp" className='btn' target="_blank" rel="noreferrer">Github</a>
                <a href="https://rad-faloodeh-902d91.netlify.app/" className='btn btn-p' target="_blank" rel="noreferrer">Live Demo</a>
              </div>
            </div>
          </div>
          <div className='work'>
            <img className="paragImg2" src={require("./docs/Project3.png")} alt="" />
            <div className='layer'>
              <h3>Magic Note </h3>
              <p> Magic Note helps to note something and save it .you can delete any note and search any note by keywords</p>
              <div className='btns'>
                <a href="https://github.com/ParagKesharDas/MagicNote.github.io" className='btn' target="_blank" rel="noreferrer">Github</a>
                <a href="https://paragkeshardas.github.io/MagicNote.github.io/" className='btn btn-p' target="_blank" rel="noreferrer">Live Demo</a>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project