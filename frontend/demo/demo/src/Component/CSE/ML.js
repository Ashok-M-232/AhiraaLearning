import React from 'react'
import { Link } from 'react-router-dom';
import './ML1.css'
import SocialMedia from '../Home/SocialMedia';
import CML from '../Curriculum/CSE/CML'
import CPrice from '../Curriculum/CSE/CPrice';
import Offers from './Offers';
import DetailsPage from '../Home/DetailsPage';

function ML() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div>
      <div className='ML1BG1'>
        <h1 className='MLH1'>Machine Learning (ML)</h1>
        <h4 className='MLH6'>Machine learning uses algorithms for computers to learn from data and make predictions. Techniques include supervised, unsupervised, and reinforcement learning. Applications span predictive analytics, language processing, and autonomous systems.</h4>
        <h4><button className='btnMl btn btn-dark d-flex m-5 ' onClick={() => scrollToSection('section5')}>Continue to pay</button></h4>

      </div>

     <Offers/>
      <CML/>
      <DetailsPage/>
      <section id="section5">
      <CPrice/>
      </section>
<SocialMedia/>
    </div>
  )
}

export default ML
