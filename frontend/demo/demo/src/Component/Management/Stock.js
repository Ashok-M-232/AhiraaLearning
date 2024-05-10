import React from 'react'
import './Stock.css'
// import { Link } from 'react-router-dom';
import SocialMedia from '../Home/SocialMedia';
// import CIOT from '../Curriculum/EEE/CIOT';
import CSTK from '../Curriculum/Management/CSTK';
// import MGPrice from './MGPrice';
import DetailsPage from '../Home/DetailsPage';
import MgPrice from '../Curriculum/Management/MgPrice';
import Offers from '../CSE/Offers';

function Stock() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

    return (
        <div>
  <div className='STKBG1'>
    <h1 className='HRH1'>Stock Market</h1>
    <h4 className='HRH6 container'>Stock marketing involves buying and selling shares of publicly traded companies, aiming to generate profits through capital gains and dividends. It requires an understanding of market trends, analysis, and risk management for successful investment strategies.</h4>
    <h4><button className='Mgbtn btn btn-dark d-flex m-5' onClick={() => scrollToSection('section5')}>Continue to pay</button></h4>

  </div>

      <Offers/>
      <CSTK/>
      <DetailsPage/>
      <section id="section5">
     {/* <MGPrice/> */}
     <MgPrice/>
      </section>

<SocialMedia/>
</div>

      )
}

export default Stock;
