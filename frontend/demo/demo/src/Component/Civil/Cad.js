import React from 'react'
import './Cad.css'
import SocialMedia from '../Home/SocialMedia';
import CivilPayment from './CivilPayment';
import CCAD from '../Curriculum/Civil/CCPBD';
import CivPrice from '../Curriculum/Civil/CivPrice';
import CCAD1 from '../Curriculum/Civil/CCAD1';
import Offers from '../CSE/Offers';

function Cad() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

    return (
        <div>
  <div className='CadBG1'>
    <h1 className='CadH1'>AUTOCAD</h1>
    <h4 className='CadH6 container'>Civil AutoCAD offers precision drafting, design, and analysis tools for civil engineering projects. It streamlines workflows and enhances project collaboration, but users must ensure data security and compliance.</h4>
    <h4><button className='btn btn-dark d-flex m-5' onClick={() => scrollToSection('section5')}>Continue to pay</button></h4>

  </div>

      <Offers/>
      <CCAD1/>
      <section id="section5">
     {/* <CivilPayment/> */}
     <CivPrice/>
      </section>

<SocialMedia/>
</div>

      )
}

export default Cad;
