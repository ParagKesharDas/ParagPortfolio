import React, { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import CV from '../../src/Component/docs/cv.pdf';
import Typed from 'typed.js';

const Contact = () => {
  const el5 = useRef(null);

  useEffect(() => {
    var typed = new Typed(el5.current, {
      strings: ['CONTACT ME'],
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
  const CVDownload = (e) => {
    const msg1 = document.getElementById("msg1");
    msg1.innerHTML = "Thank You,Please Contact Me!!"
    msg1.style.color = "green";
    setTimeout(function () {
      msg1.innerHTML = ""
    }, 5000)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const scriptURL = 'https://script.google.com/macros/s/AKfycbyUPVDktHueMEvVJ4Bj6hPuqxhmccP4tTnMXEHK4cbaRhHW0BUjTVzQ-O7n07HlAI7r/exec';
    const form = new FormData(e.target);
    const msg = document.getElementById("msg")
    msg.innerHTML = "Sending...."
    msg.style.color = "yellow"
    if (form.get('Name') && form.get('Email') && document.getElementById("field").value !== "") {
      fetch(scriptURL, { method: 'POST', body: form })
        .then((response) => {
          msg.style.color = "green";
          msg.innerHTML = "Message sent Successfully"
          setTimeout(function () {
            msg.innerHTML = ""
          }, 5000)
          document.getElementById("Feedback-Form").reset();
        })
        .catch((error) => console.error('Error!', error.message));
    }
    else {
      msg.style.color = "red";
      msg.innerHTML = "Please provide a Massage"
      setTimeout(function () {
        msg.innerHTML = ""
      }, 5000)
    }
  };

  return (
    <div className='Contact' id='Contact'>
      <div className='container2'>
        <h1 className='sub'>
          <span className='typedText' ref={el5} />
        </h1>
        <div className='row'>
          <div className='contact-left'>
            <p>
              <FontAwesomeIcon className='icon' icon={faEnvelope} />
              paragkeshardas3600@gmail.com
            </p>
            <p>
              <FontAwesomeIcon className='icon' icon={faPhone} />
              8670842650
            </p>
            <div className='social-icons'>
              <a href='http://github.com/ParagKesharDas' target='_blank' rel='noreferrer'>
                <FontAwesomeIcon className='sicon' icon={faGithub} />
              </a>
              <a href='https://www.linkedin.com/in/parag-keshar-das-169aa61b5/' target='_blank' rel='noreferrer'>
                <FontAwesomeIcon className='sicon' icon={faLinkedin} />
              </a>
              <a href='https://twitter.com/Parag360Keshar' target='_blank' rel='noreferrer'>
                <FontAwesomeIcon className='sicon' icon={faTwitter} />
              </a>
            </div>
            <a href={CV} className='btn2' download={'ParagCV.pdf'} onClick={CVDownload}>
              Download Resume
            </a>
            <span id="msg1"></span>
          </div>
          <div className='contact-right'>
            <form name='submit-to-google-sheet' onSubmit={handleSubmit} id="Feedback-Form">
              <input type='text' name='Name' placeholder='Your Name' required />
              <input type='email' name='Email' placeholder='Your Email' required />
              <textarea id="field" name='Message' rows={6} placeholder='Your Message' />

              <button type='submit'>Submit</button>
            </form>
            <span id="msg"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
