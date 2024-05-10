import React from 'react'
import './DELD.css'
import CVLSI from '../Curriculum/EEE/CVLSI';
import SocialMedia from '../Home/SocialMedia';
import Offers from '../CSE/Offers';
import EEEPrice from '../Curriculum/EEE/EEEPrice';
import DetailsPage from '../Home/DetailsPage';

function DELD() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

    return (
        <div>
        <div className='DELD_BG1'>
          <h1 className='DELD_H1'>VLSI</h1>
          <h4 className='DELD_H6 container'>Digital Electronics and Logic Design (DELD) focuses on the study of digital circuits and systems, including logic gates, flip-flops, and registers. It forms the foundation of modern computing and communication systems. DELD explores principles of Boolean algebra, combinational and sequential logic, enabling the design and analysis of digital systems. Applications range from microprocessors and memory devices to digital signal processing and embedded systems.</h4>
          <h4><button className='btn btn-dark d-flex m-5' onClick={() => scrollToSection('section5')}>Continue to pay</button></h4>

        </div>

       <Offers/>
      <CVLSI/>
      <DetailsPage/>
      <section id="section5">
    <EEEPrice/>
</section>

<SocialMedia/>
      </div>
      
      )
}

export default DELD
