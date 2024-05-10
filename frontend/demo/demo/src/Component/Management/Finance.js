import React from 'react'
import './Finance.css'
import SocialMedia from '../Home/SocialMedia';
import CFinance from '../Curriculum/Management/CFinance';
import DetailsPage from '../Home/DetailsPage';
import MgPrice from '../Curriculum/Management/MgPrice';
import Offers from '../CSE/Offers';

function Finance() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

    return (
        <div>
  <div className='FBG1'>
    <h1 className='FH1'>FINANCE</h1>
    <h4 className='FH6 container'>Finance involves managing funds, investments, and financial activities to optimize wealth creation and achieve financial goals, with key components including banking, investments, and financial planning, yet faces risks such as market volatility and regulatory changes.</h4>
    <h4><button className='Mgbtn btn btn-dark d-flex m-5' onClick={() => scrollToSection('section5')}>Continue to pay</button></h4>

  </div>
      <Offers/>
      <CFinance/>
      <DetailsPage/>
      <section id="section5">
      {/* <MGPrice/> */}
      <MgPrice/>
      </section>

<SocialMedia/>
</div>

      )
}

export default Finance;
