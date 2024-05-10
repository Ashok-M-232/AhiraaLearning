import React from 'react'
import './PLC.css'
import CPLC from '../Curriculum/EEE/CPLC';
import SocialMedia from '../Home/SocialMedia';
import Offers from '../CSE/Offers';
import EEEPrice from '../Curriculum/EEE/EEEPrice';
import DetailsPage from '../Home/DetailsPage';

function PLC() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

    return (
        <div>
  <div className='PLCBG1'>
    <h1 className='PLCH1'>Programmable Logic Controllers (PLC)</h1>
    <h4 className='PLCH6 container'>Programmable Logic Controllers (PLCs) are industrial digital computers used to automate electromechanical processes. They play a crucial role in manufacturing and industrial control systems, executing logic operations, and controlling machinery. PLCs offer reliability, flexibility, and scalability in automation, enabling efficient production processes. However, PLC programming and maintenance require specialized skills and knowledge.</h4>
    <h4><button className='btn btn-dark d-flex m-5' onClick={() => scrollToSection('section5')}>Continue to pay</button></h4>

  </div>

  <Offers/>
      <CPLC/>
      <DetailsPage/>
      <section id="section5">
    <EEEPrice/>
</section>

<SocialMedia/>
</div>

      )
}

export default PLC
