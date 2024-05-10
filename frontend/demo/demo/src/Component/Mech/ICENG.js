import React from 'react'
import './ICENG.css'
import SocialMedia from '../Home/SocialMedia';
import CICENG from '../Curriculum/Mech/CICENG';
import MechPrice from '../Curriculum/Mech/MechPrice';
import Offers from '../CSE/Offers';


function ICENG() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
    return (
        <div>
  <div className='ICENGBG1'>
    <h1 className='ICENGDH1'>IC ENGINE</h1>
    <h4 className='ICENGADH6 container'>Internal combustion (IC) engine converts fuel into mechanical energy using controlled combustion within a chamber, providing power for vehicles and machinery. It's efficient and reliable but produces emissions and requires regular maintenance.</h4>
    <h4><button className='btn btn-dark d-flex m-5' onClick={() => scrollToSection('section5')}>Continue to pay</button></h4>

  </div>
      <Offers/>
      <CICENG/>
      <section id="section5">
     <MechPrice/>
      </section>

<SocialMedia/>
</div>

      )
}

export default ICENG;
