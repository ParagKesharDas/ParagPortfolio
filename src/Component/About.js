import React, { useEffect, useRef, useState } from 'react';
import Typed from 'typed.js';

const About = () => {
  const el2 = useRef(null);
  useEffect(() => {
    var typed = new Typed(el2.current, {
      strings: ["ABOUT ME"],
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

  const [activeTab, setActiveTab] = useState('TechnicalSkills');

  function openTab(tabname) {
    setActiveTab(tabname);
  }

  return (
    <div className='About' id='About'>
      <div className='container'>
        <h1 className='sub'><span className='typedText' ref={el2} /></h1>
        <div className='row'>
          <div className='col1'>
            <img className="paragImg1" src={require("./docs/pkdAbout.png")} alt="" />
          </div>
          <div className='col2'>
            <p>
              Passionate React.js frontend developer with an insatiable appetite for learning. Seeking a challenging position to contribute skills, gain experience, and expand knowledge as a fresher. Strong problem-solving skills and a collaborative team player, dedicated to success and innovation.
            </p>
            <div className='tab-titles'>
              <p className={`tab-links ${activeTab === 'Education' ? 'active-links' : ''}`} onClick={() => openTab('Education')}>Education</p>
              <p className={`tab-links ${activeTab === 'TechnicalSkills' ? 'active-links' : ''}`} onClick={() => openTab('TechnicalSkills')}>Technical Skills</p>
              <p className={`tab-links ${activeTab === 'SoftSkills' ? 'active-links' : ''}`} onClick={() => openTab('SoftSkills')}>Soft Skills</p>
              <p className={`tab-links ${activeTab === 'Language' ? 'active-links' : ''}`} onClick={() => openTab('Language')}>Language</p>
              <p className={`tab-links ${activeTab === 'Hobby' ? 'active-links' : ''}`} onClick={() => openTab('Hobby')}>Hobby</p>
            </div>

            <div className={`tab-content ${activeTab === 'TechnicalSkills' ? 'active-tab' : ''}`} id='TechnicalSkills'>
              <ul>
                <li><span>Programming Languages</span><br />Java, Python, JavaScript</li>
                <li><span>Frontend Web Development</span><br />HTML, CSS, React.js</li>
                <li><span>Backend Web Development</span><br />Node.js, Express.js</li>
                <li><span>Database</span><br />Oracle SQL</li>
                <li><span>Tools</span><br />Git, Postman, Netlify</li>
              </ul>
            </div>

            <div className={`tab-content ${activeTab === 'Education' ? 'active-tab' : ''}`} id='Education'>
              <ul>
                <li><span>B P Poddar Institute of Management and Technology (B.Tech in CSE)</span><br />CGPA: 9.344, Year of Passing: 2023</li>
                <li><span>Kalaberia P.K. High School (Class 12)</span><br />Percentage: 82.83%, Year of Passing: 2019</li>
                <li><span>Kalaberia P.K. High School (Class 10)</span><br />Percentage: 84.13%, Year of Passing: 2017</li>
              </ul>
            </div>

            <div className={`tab-content ${activeTab === 'SoftSkills' ? 'active-tab' : ''}`} id='SoftSkills'>
              <ul>
                <li><span>Problem Solving</span></li>
                <li><span>Team Worker</span></li>
                <li><span>Leadership & Time Management</span></li>
                <li><span>Work ethic and Adaptability</span></li>
                <li><span>Communication</span></li>
              </ul>
            </div>

            <div className={`tab-content ${activeTab === 'Language' ? 'active-tab' : ''}`} id='Language'>
              <ul>
                <li><span>English</span></li>
                <li><span>Hindi</span></li>
                <li><span>Bengali</span></li>
              </ul>
            </div>

            <div className={`tab-content ${activeTab === 'Hobby' ? 'active-tab' : ''}`} id='Hobby'>
              <ul>
                <li><span>Painting</span></li>
                <li><span>Editing Videos</span></li>
                <li><span>Photoshop</span></li>
                <li><span>Playing Cricket</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;
