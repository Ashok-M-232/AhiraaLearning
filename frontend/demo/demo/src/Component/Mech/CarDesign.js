import React from 'react'
import './CarDesign.css'
import { Link } from 'react-router-dom';
import Price from './Price';
import SocialMedia from '../Home/SocialMedia';
import CCAR from '../Curriculum/Mech/CCAR';
import MechPrice from '../Curriculum/Mech/MechPrice';
import Offers from '../CSE/Offers';

function CarDesign() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
    return (
        <div>
  <div className='CarDeBG1'>
    <h1 className='CaeDeH1'>Car Design</h1>
    <h4 className='CaeDeH6 container'>Car design encompasses the styling and engineering of a vehicle, focusing on aesthetics, aerodynamics, and functionality. It integrates form and function, creating vehicles that are visually appealing while meeting safety and performance standards.</h4>
    <h4><button className='btn btn-dark d-flex m-5' onClick={() => scrollToSection('section5')}>Continue to pay</button></h4>

</div>

  <Offers/>
      <CCAR/>
      <section id="section5">
     <MechPrice/>
      </section>

<SocialMedia/>
</div>

      )
}

export default CarDesign;
