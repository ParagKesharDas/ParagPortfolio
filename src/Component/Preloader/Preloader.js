import React from 'react'
import './Preloader.css' 
import { useEffect } from 'react'
import { preLoaderAnim } from '../Animations/Animation'


const Preloader = () => {
    useEffect(()=>{
        preLoaderAnim()
    },[])
  return (
    <div className='Preloader'>
        <div className='texts-container'>
            <span>Developer</span>
            <span>Coder</span>
            <span>Innovator</span>
        </div>
    </div>
  )
}

export default Preloader