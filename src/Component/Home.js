import React,{  useRef } from 'react';
import Typed from 'typed.js';

const Home = () => {
  // useRef()
  const el = React.useRef(null);
  const el2=React.useRef(null);
  React.useEffect(() => {
    var typed = new Typed(el.current, {
        strings: ["Frontend Developer", "Java Programmer", "Graphic Designer"],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    })

    return () => {
        // Destroy Typed instance during cleanup to stop animation
        typed.destroy();
    };
}, []);

React.useEffect(() => {
  var typed = new Typed(el2.current, {
      strings: ["HOME"],
      typeSpeed: 300,
      backSpeed: 100,
      backDelay: 3000,
      loop: true
  })

  return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
  };
}, []);
  return (
    <div className='home' id='home'>
      
      <div className='home-content'>
        <h1  id='Home' ><span className='typedText'ref={el2} /></h1>
        <h3 className='hi'>Hello,Myself</h3>
        <h1 className='name'>Parag Keshar Das</h1>
        <h3 className='typed'>And I'm a <span className='typedText' ref={el} /> </h3> 
        <p>I'm a Web Designer.</p>
        <p>expertise to create and wesite design,Frontend Development, and many more...</p>
      </div>
      <img className="paragImg" src={require("./docs/parag.png")} alt="" width="200px" height="200px"/>
    </div>
  )
}

export default Home