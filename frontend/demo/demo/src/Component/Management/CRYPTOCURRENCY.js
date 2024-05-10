import React from 'react'
import './CRYPTOCURRENCY.css'
// import { Link } from 'react-router-dom';
import SocialMedia from '../Home/SocialMedia';
// import CIOT from '../Curriculum/EEE/CIOT';
import CCCY from '../Curriculum/Management/CCCY';
import MGPrice from './MGPrice';
import DetailsPage from '../Home/DetailsPage';
import MgPrice from '../Curriculum/Management/MgPrice';
import Offers from '../CSE/Offers';

function CRYPTOCURRENCY() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
    return (
        <div>
  <div className='CCBG1'>
    <h1 className='CCH1'>CRYPTOCURRENCY</h1>
    <h4 className='CCH6 container'>Cryptocurrency is a digital form of currency that operates on decentralized networks, offering security, transparency, and borderless transactions, but is subject to volatility and regulatory uncertainty.</h4>
    <h4><button className='Mgbtn btn btn-dark d-flex m-5' onClick={() => scrollToSection('section5')}>Continue to pay</button></h4>

  </div>
      <Offers/>
      <CCCY/>
      <DetailsPage/>
      <section id="section5">
      {/* <MGPrice/> */}
      <MgPrice/>
      </section>

<SocialMedia/>
</div>

      )
}

export default CRYPTOCURRENCY;
