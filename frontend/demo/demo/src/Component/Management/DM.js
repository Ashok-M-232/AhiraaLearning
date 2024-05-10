import React from 'react'
import './DM.css'
import SocialMedia from '../Home/SocialMedia';
import MGPrice from './MGPrice';
import CDM from '../Curriculum/Management/CDM';
import DetailsPage from '../Home/DetailsPage';
import MgPrice from '../Curriculum/Management/MgPrice';
import Offers from '../CSE/Offers';



function DM() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

    return (
        <div>
  <div className='DMBG1'>
    <h1 className='DMH1'>DIGITAL MARKETING</h1>
    <h4 className='DMH6 container'>Digital marketing utilizes online platforms for targeted promotion, delivering measurable results, yet contends with challenges like ad fraud and privacy concerns.</h4>
    <h4><button className='Mgbtn btn btn-dark d-flex m-5' onClick={() => scrollToSection('section5')}>Continue to pay</button></h4>

  </div>
        <Offers/>
        <CDM/>
        <DetailsPage/>
      <section id="section5">
      {/* <MGPrice/> */}
      <MgPrice/>
      </section>


<SocialMedia/>
</div>

      )
}

export default DM;
