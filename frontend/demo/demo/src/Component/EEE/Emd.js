import React from 'react'
import './Emd.css'
import CEBD from '../Curriculum/EEE/CEBD';
import SocialMedia from '../Home/SocialMedia';
import EEEPrice from '../Curriculum/EEE/EEEPrice';
import Offers from '../CSE/Offers';
import DetailsPage from '../Home/DetailsPage';


function Emd() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  <h4><button className='btn btn-dark d-flex m-5' onClick={() => scrollToSection('section5')}>Continue to pay</button></h4>

    return (
        <div>
        <div className='EmbeddedBG1'>
          <h1 className='EmbeddedH1'>Embedded Systems</h1>
          <h4 className='EmbeddedH6 container'>Embedded systems are specialized computing systems designed to perform specific functions within larger systems. They are ubiquitous in consumer electronics, automotive, healthcare, and industrial automation. Embedded systems optimize performance, power efficiency, and reliability while integrating hardware and software components. Challenges include real-time operation, resource constraints, and security vulnerabilities.</h4>
          <h4><button className='btn btn-dark d-flex m-5' onClick={() => scrollToSection('section5')}>Continue to pay</button></h4>

        </div>

        <Offers/>
      <CEBD/>
      <DetailsPage/>
      <section id="section5">
    <EEEPrice/>
</section>

<SocialMedia/>
      </div>
      
      )
}

export default Emd
