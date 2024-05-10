import React from 'react';
import './WEB.css';
import './AI1.css'
import { Link } from 'react-router-dom';
import SocialMedia from '../Home/SocialMedia';
import CWEB from '../Curriculum/CSE/CWEB';
import CPrice from '../Curriculum/CSE/CPrice';
import Offers from './Offers';
import DetailsPage from '../Home/DetailsPage';

function WEB() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div>
      <div className='WEBBG1'>
        <h1 className='WEBH1'>Web Development</h1>
        <h4 className='WEBH6'>Web development creates and maintains websites and applications using languages, frameworks, and tools. It includes front-end and back-end development, as well as user experience design. The goal is to deliver interactive, responsive interfaces across devices and platforms.</h4>
        {/* <h4 className='WEBH6'>Web Development focuses on creating and maintaining websites and web applications, utilizing programming languages, frameworks, and tools to design interactive and responsive interfaces. It encompasses front-end and back-end development, user experience design, and optimization techniques to deliver seamless online experiences across various devices and platforms.</h4> */}
        <h4><button className='btnDS btn btn-dark d-flex m-5' onClick={() => scrollToSection('section5')}>Continue to pay</button></h4>

      </div>
      <Offers/>
      <CWEB/>
      <DetailsPage/>
      <section id="section5">
      <CPrice/>
      </section>

<SocialMedia/>
    </div>
  )
}

export default WEB
