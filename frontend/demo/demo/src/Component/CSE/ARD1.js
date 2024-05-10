import React from 'react'
import './ARD1.css'
import './AI1.css'
// import { Link } from 'react-router-dom';
import SocialMedia from '../Home/SocialMedia';
import CARD from '../Curriculum/CSE/CARD';
import CPrice from '../Curriculum/CSE/CPrice';
import Offers from './Offers';
import DetailsPage from '../Home/DetailsPage';

function ARD1() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div>
      <div className='ARD1BG1'>
        <h1 className='ARD1H1'>Android Development</h1>
    <h4 className='ARD1H6'>Android development builds mobile apps for Android devices using the Android SDK and languages like Java or Kotlin. It involves designing user interfaces, integrating features, and optimizing performance for high-quality apps.</h4>
    {/* <h4 className='ARD1H6'>Android Development entails building mobile applications for devices running on the Android operating system, leveraging the Android Software Development Kit (SDK) and programming languages like Java or Kotlin. It encompasses designing intuitive user interfaces, integrating features and functionalities, and optimizing performance to deliver high-quality apps tailored to the Android platform.</h4> */}
    <h4><button className='btnDS btn btn-dark d-flex m-5' onClick={() => scrollToSection('section5')}>Continue to pay</button></h4>

      </div>

      <Offers/>
      <CARD/>
      <DetailsPage/>
      <section id="section5">
        <CPrice/>
      </section>

<SocialMedia/>
    </div>
  )
}

export default ARD1
