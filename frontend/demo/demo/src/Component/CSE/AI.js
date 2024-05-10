import React from 'react';
import './AI1.css'
import Curriculum from '../Curriculum/CSE/Curriculum';
// import { Link } from 'react-router-dom';
import SocialMedia from '../Home/SocialMedia';
import CPrice from '../Curriculum/CSE/CPrice';
import Offers from './Offers';
import DetailsPage from '../Home/DetailsPage';

const AI = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
    <div>
      <div className='AI1BG1'>
        <h1 className='AIH1'>Artificial Intelligence </h1>
        <h4 className='AIH6 container'>AI automates tasks, improves efficiency, and provides predictive insights across industries. It enables personalization, problem-solving, and cost reduction. Ethical considerations are important for responsible AI development and use.</h4>
        <h4><button className='csebtn btn-dark d-flex m-5' onClick={() => scrollToSection('section5')}>Continue to pay</button></h4>

      </div >
      <Offers/>
      </div>
      <Curriculum/>
      <DetailsPage/>
      <section id="section5">
      <CPrice/>
      </section>

<SocialMedia/>
      </div>
   
  );
};

export default AI;
