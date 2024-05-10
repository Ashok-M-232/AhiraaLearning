import React from 'react'
import './MEV.css'
import { Link } from 'react-router-dom';
import SocialMedia from '../Home/SocialMedia';
import CEV from '../Curriculum/Mech/CEV';
import Price from './Price';
import MechPrice from '../Curriculum/Mech/MechPrice';
import Offers from '../CSE/Offers';
function MEV() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
    return (
        <div>
  <div className='EV1BG1'>
    <h1 className='EV1H1'>EV</h1>
    <h4 className='EV1H6 container'>Electric vehicles (EVs) use electric motors powered by batteries, offering clean and efficient transportation with lower emissions compared to traditional vehicles. They require specialized design for battery management and electric drivetrain components.</h4>
    <h4><button className='btn btn-dark d-flex m-5' onClick={() => scrollToSection('section5')}>Continue to pay</button></h4>

  </div>

  <Offers/>
     <CEV/>
     <section id="section5">
     <MechPrice/>
      </section>

<SocialMedia/>
</div>

      )
}

export default MEV;
