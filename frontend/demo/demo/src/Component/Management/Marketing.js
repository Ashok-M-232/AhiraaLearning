import React from 'react'
import './Marketing.css'
import { Link } from 'react-router-dom';
import SocialMedia from '../Home/SocialMedia';
import CIOT from '../Curriculum/EEE/CIOT';
import MGPrice from './MGPrice';
import CMKG from '../Curriculum/Management/CMKG';
import DetailsPage from '../Home/DetailsPage';
import MgPrice from '../Curriculum/Management/MgPrice';
import Offers from '../CSE/Offers';


function Marketing() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

    return (
        <div>
  <div className='MRKBG1'>
    <h1 className='MRKH1'>MARKETING</h1>
    <h4 className='MRKH6 container'>Marketing involves strategizing and implementing tactics to promote products or services, encompassing market research, branding, advertising, and customer engagement, aiming to attract and retain customers while adapting to dynamic market trends and competition.</h4>
    <h4><button className='Mgbtn btn btn-dark d-flex m-5' onClick={() => scrollToSection('section5')}>Continue to pay</button></h4>

  </div>
      <Offers/>
      <CMKG/>
      <DetailsPage/>
      <section id="section5">
      <MGPrice/>
      <MgPrice/>
      </section>


<SocialMedia/>
</div>

      )
}

export default Marketing;
