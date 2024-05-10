import React from 'react'
import './IOT.css'
import SocialMedia from '../Home/SocialMedia';
import CIOT from '../Curriculum/EEE/CIOT';
import EEEPrice from '../Curriculum/EEE/EEEPrice';
import Offers from '../CSE/Offers';
import DetailsPage from '../Home/DetailsPage';

function IOT() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

    return (
        <div>
  <div className='IOTBG1'>
    <h1 className='IOTH1'>Internet of Things (IoT)</h1>
    <h4 className='IOTH6 container'>The Internet of Things (IoT) connects devices, sensors, and systems, enabling data exchange and automation across various domains. IoT drives efficiency, productivity, and insights through real-time monitoring, predictive maintenance, and remote control. However, it also raises concerns regarding security, privacy, and interoperability.</h4>
    <h4><button className='btn btn-dark d-flex m-5' onClick={() => scrollToSection('section5')}>Continue to pay</button></h4>

  </div>

      <Offers/>
      <CIOT/>
      <DetailsPage/>
      <section id="section5">
      <EEEPrice/>
      </section>

      <SocialMedia/>
</div>

      )
}

export default IOT;
