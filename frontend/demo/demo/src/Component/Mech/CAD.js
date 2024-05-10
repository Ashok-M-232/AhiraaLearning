import React from 'react'
import './CAD.css'
import { Link } from 'react-router-dom';
import SocialMedia from '../Home/SocialMedia';
import CCAD from '../Curriculum/Mech/CCAD';
import Price from './Price';
import MechPrice from '../Curriculum/Mech/MechPrice';
import Offers from '../CSE/Offers';

function CAD() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  
    return (
        <div>
  <div className='CADBG1'>
    <h1 className='CADH1'>AUTOCAD</h1>
    <h4 className='CADH6 container'>AutoCAD for mechanical design enables precise 2D and 3D modeling with dimensioning, annotation, and layer management. It supports block libraries, standards compliance, and the creation of bills of materials (BOMs).</h4>
    <h4><button className='btn btn-dark d-flex m-5' onClick={() => scrollToSection('section5')}>Continue to pay</button></h4>

  </div>

      <Offers/>
      <CCAD/>
      <section id="section5">
     <MechPrice/>

      </section>

<SocialMedia/>
</div>

      )
}

export default CAD;
