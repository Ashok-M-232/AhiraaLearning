import React from 'react';
import './DS1.css';
import CDS from '../Curriculum/CSE/CDS';
import SocialMedia from '../Home/SocialMedia';
import { Link } from 'react-router-dom';
import CPrice from '../Curriculum/CSE/CPrice';
import Offers from './Offers';
import DetailsPage from '../Home/DetailsPage';


function DS() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
        <div>
          <div className='DS1BG1'>
            <h1 className='DS1H1'>Data Science</h1>
         <h4 className='DS1H6'>Data science analyzes complex datasets to extract insights, helping organizations make informed decisions and gain a competitive edge. It uses various techniques and tools for processing, manipulating, and visualizing data. This drives innovation and efficiency across industries.</h4>
         <h4><button className='btnDS btn btn-dark d-flex m-5' onClick={() => scrollToSection('section5')}>Continue to pay</button></h4>

     </div>
     <Offers/>
      <CDS/>
      <DetailsPage/>
      <section id="section5">
        <CPrice/>
      </section>
<SocialMedia/>
        </div>
  )
}

export default DS
