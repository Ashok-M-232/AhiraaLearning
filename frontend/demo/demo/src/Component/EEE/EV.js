import React from 'react'
import './EV.css'
import CEV from '../Curriculum/EEE/CEV';
// import { Link } from 'react-router-dom';
import SocialMedia from '../Home/SocialMedia';
import EEEPrice from '../Curriculum/EEE/EEEPrice';
import Offers from '../CSE/Offers';
import DetailsPage from '../Home/DetailsPage';

function EV() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  <h4><button className='btn btn-dark d-flex m-5' onClick={() => scrollToSection('section5')}>Continue to pay</button></h4>

    return (
        <div>
  <div className='EV1BG1'>
    <h1 className='EV1H1'>Electric Vehicles (EV)</h1>
    <h4 className='E1VH6 container' style={{color:'white'}}>Electric Vehicles (EVs) are revolutionizing transportation with their environmental benefits and energy efficiency. They reduce greenhouse gas emissions and dependency on fossil fuels, promoting sustainability. EVs offer advancements in battery technology, range, and charging infrastructure, but adoption faces challenges such as cost, infrastructure, and battery recycling.</h4>
    <h4><button className='btn btn-dark d-flex m-5' onClick={() => scrollToSection('section5')}>Continue to pay</button></h4>

  </div>
      <Offers/>
      <CEV/>
      <DetailsPage/>
      <section id="section5">
      <EEEPrice/>
      </section>

      <SocialMedia/>
</div>

      )
}

export default EV;
