import React from 'react'
import './CLD.css';
import { Link } from 'react-router-dom';
import CCC from '../Curriculum/CSE/CCC';
import CPrice from '../Curriculum/CSE/CPrice';
import SocialMedia from '../Home/SocialMedia';
import Offers from './Offers';
import DetailsPage from '../Home/DetailsPage';

function CLD1() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div>
          <div className='CLD1BG1'>
            <h1 className='CLD1H1'>Cloud Computing</h1>
         {/* <h4 className='CLD1H6'>Cloud Computing provides on-demand access to a pool of configurable computing resources over the internet, enabling organizations to scale their infrastructure dynamically and efficiently. It offers a flexible and cost-effective alternative to traditional IT solutions, facilitating rapid deployment of applications and services while enhancing collaboration and scalability.</h4> */}
         <h4 className='CLD1H6'>Data science analyzes complex datasets to extract insights, helping organizations make informed decisions and gain a competitive edge. It uses various techniques and tools for processing, manipulating, and visualizing data. This drives innovation and efficiency across industries.</h4>
         <h4><button className=' btnDS btn btn-dark d-flex m-5' onClick={() => scrollToSection('section5')}>Continue to pay</button></h4>

          </div>

          <Offers/>
      <CCC/>
      <DetailsPage/>
      <section id="section5">
      <CPrice/>
      </section>
      <SocialMedia/>
        </div>
  )
}

export default CLD1
