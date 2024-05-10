import React from 'react'
import './HR.css'
import SocialMedia from '../Home/SocialMedia';
import CHR from '../Curriculum/Management/CHR';
import MGPrice from './MGPrice';
import DetailsPage from '../Home/DetailsPage';
import MgPrice from '../Curriculum/Management/MgPrice';
import Offers from '../CSE/Offers';

function HR() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

    return (
        <div>
  <div className='HRB1'>
    <h1 className='HRH1'>HUMAN RESOURCES</h1>
    <h4 className='HRH6 container'>Human Resources (HR) manages an organization's workforce, covering recruitment, employee relations, training, and benefits administration, striving to foster a productive and supportive workplace environment while addressing challenges such as talent retention and compliance with employment laws.</h4>
    <h4><button className='Mgbtn btn btn-dark d-flex m-5' onClick={() => scrollToSection('section5')}>Continue to pay</button></h4>

  </div>
      <Offers/>
      <CHR/>
      <DetailsPage/>
      <section id="section5">
      {/* <MGPrice/> */}
      <MgPrice/>
      </section>
<SocialMedia/>
</div>

      )
}

export default HR;
