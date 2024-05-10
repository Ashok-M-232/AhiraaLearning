import React from 'react'
import './Robo.css'
import CRobo from '../Curriculum/EEE/CRobo';
// import { Link } from 'react-router-dom';
import SocialMedia from '../Home/SocialMedia';
import EEEPrice from '../Curriculum/EEE/EEEPrice';
import Offers from '../CSE/Offers';
import DetailsPage from '../Home/DetailsPage';

function Robo() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

    return (
        <div>
  <div className='ECERoboticsBG1'>
    <h1 className='ECERoboticsH1'>ECE Robotics</h1>
    <h4 className='ECERoboticsH6 container'>Electronics and Communication Engineering (ECE) Robotics integrates electronics, programming, and communication technologies to design and develop intelligent robotic systems. These robots are utilized in various fields including manufacturing, healthcare, and exploration. ECE Robotics advancements focus on autonomy, sensing, and human-robot interaction, while addressing challenges such as reliability, safety, and ethical concerns.</h4>
    <h4><button className='btn btn-dark d-flex m-5' onClick={() => scrollToSection('section5')}>Continue to pay</button></h4>

  </div>

 <Offers/>
      <CRobo/>
      <DetailsPage/>
      <section id="section5">
    <EEEPrice/>
</section>

<SocialMedia/>
</div>

      )
}

export default Robo
