import React from 'react'
import './DB1.css'
import CARD from '../Curriculum/CSE/CARD';
import CPrice from '../Curriculum/CSE/CPrice';
import SocialMedia from '../Home/SocialMedia';
import CDS from '../Curriculum/CSE/CDS';
import CDB from '../Curriculum/CSE/CDB';
import Offers from './Offers';
import DetailsPage from '../Home/DetailsPage';

function BD1() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div>
    <div className='DB1BG1'>
      <h1 className='DB1H1'>Database Management Systems (DBMS)</h1>
    <h6 className='DB1H6'>Database Management Systems facilitate the storage, retrieval, and management of structured and unstructured data, ensuring data integrity, security, and efficiency. They provide a centralized repository for organizing and manipulating data, supporting critical business processes, decision-making, and data-driven insights for organizations across various industries.</h6>
    <h4><button className='btnDS btn btn-dark d-flex m-5' onClick={() => scrollToSection('section5')}>Continue to pay</button></h4>
    </div>
    <Offers/>
      <CDB/>
      <DetailsPage/>
      <section id="section5">
        <CPrice/>
      </section>

<SocialMedia/>
  </div>
  )
}

export default BD1
