import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'

const Nav = () => {
  const [moodIcon, setMoodIcon] = useState(faMoon);

  const moodChange = () => {
    document.body.classList.toggle("dark-theme")
    if(moodIcon===faSun){
        setMoodIcon(faMoon);
    }
    else{
        setMoodIcon(faSun)
    }
    
  }

  return (
    <>
      <header className='Nav'>
        <p class="logo">
          <span>P</span>
          <span>o</span>
          <span>r</span>
          <span>t</span>
          <span>f</span>
          <span>o</span>
          <span>l</span>
          <span>i</span>
          <span>o</span>
        </p>
        <nav className='navbar'>
          <a href='#home'>Home</a>
          <a href='#About'>About</a>
          <a href='#Project'>Project</a>
          <a href='#Contact'>Contact</a>
          <FontAwesomeIcon id='mood' icon={moodIcon} onClick={moodChange} /> 
        </nav>
      </header>
    </>
  )
}

export default Nav;
