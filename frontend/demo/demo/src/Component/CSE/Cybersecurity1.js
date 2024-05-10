import React from 'react';
import './CSRTY.css';
import './AI1.css'
// import { Link } from 'react-router-dom';
import SocialMedia from '../Home/SocialMedia';
import CDS from '../Curriculum/CSE/CDS';
import CPrice from '../Curriculum/CSE/CPrice';
import Offers from './Offers';
import DetailsPage from '../Home/DetailsPage';

function Cybersecurity1() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  

  return (
    <div>
      <div className='CS1BG1'>
        <h1 className='CS1H1'>Cyber Security</h1>
        {/* <h4 className='CS1H6 container'>Cybersecurity involves protecting computer systems, networks, and data from unauthorized access, cyberattacks, and data breaches. It encompasses preventive measures, detection mechanisms, and incident response protocols to safeguard digital assets, ensuring confidentiality, integrity, and availability in the face of evolving cyber threats.</h4> */}
        <h4 className='CS1H6 container'>Cybersecurity protects systems, networks, and data from unauthorized access and cyberattacks. It includes preventive measures, detection, and incident response to safeguard digital assets. It ensures confidentiality, integrity, and availability against evolving threats.</h4>
        <h4><button className=' btnDS btn btn-dark d-flex m-5' onClick={() => scrollToSection('section5')}>Continue to pay</button></h4>

      </div>

      <Offers/>
      <CDS/>
      <DetailsPage/>
      <section id="section5">
      <CPrice/>
      </section>

<SocialMedia/>
    </div>
  )
}

export default Cybersecurity1
