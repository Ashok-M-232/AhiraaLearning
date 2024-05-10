import React from 'react'
import './CPBD.css'
import SocialMedia from '../Home/SocialMedia';
import CivilPayment from './CivilPayment';
import CCPBD from '../Curriculum/Civil/CCPBD';
import CivPrice from '../Curriculum/Civil/CivPrice';
import Offers from '../CSE/Offers';

function CPBD() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

    return (
        <div>
  <div className='CPBDBG1'>
    <h1 className='CPBDH1'>Construction Planning & Building Design</h1>
    <h4 className='CPBDH6 container'>Construction Planning & Building Design combines project management with architectural innovation to deliver efficient, high-quality structures. It involves careful scheduling, resource allocation, and adherence to safety standards to ensure successful project execution.</h4>
    <h4><button className='btn btn-dark d-flex m-5' onClick={() => scrollToSection('section5')}>Continue to pay</button></h4>

  </div>
      
      <Offers/>
      <CCPBD/>
      <section id="section5">
     {/* <CivilPayment/> */}
     <CivPrice/>
      </section>

<SocialMedia/>
</div>

      )
}

export default CPBD;
