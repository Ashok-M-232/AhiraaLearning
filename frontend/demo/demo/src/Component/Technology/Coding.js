import React from 'react';
import { Link } from 'react-router-dom';
import SocialMedia from '../Home/SocialMedia';
import './Coding.css';
import DetailsPage from '../Home/DetailsPage';

// Import the image
import java from '../Code/Images/java.png';
import python from '../Code/Images/python.png';
import c from '../Code/Images/c.jpg';
import js from '../Code/Images/js.jpg';
import css from '../Code/Images/css.jpg';
import mysql from '../Code/Images/mysql.png';
function Coding() {
  return (
    <div>
      <h3 className='Codh3'>Free Coding classes</h3>
    
      <div className='codBg3'>
      <h5 className='codh6'>
        Internships provide valuable online experiences, enabling students to develop skills, network with professionals, explore specialties, enhance resumes, and prepare for future careers, often leading to employment opportunities
      </h5>
        <div className='container'>
          <div className='row mx my-3'>
            <div className='col-md-12'>
              
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-4 my-2">
              <div className="card " style={{ borderRadius: '50px', overflow: 'hidden' }}>
                <Link >
                  <img src={java} className="card-img-top" alt="..." style={{ width: '100%',  height: '100%', objectFit: 'cover', transition: 'transform 0.4s' }} />
                </Link>
                <div className="card-body d-flex align-items-end" style={{ backgroundColor: 'black' }}>
                  <Link  className="btn btn-secoundry w-100 p-25"><span style={{ color: 'white', fontWeight: 'bold' }}>java</span></Link>
                </div>
              </div>
            </div>

            <div className="col-md-4 my-2">
              <div className="card " style={{ borderRadius: '50px', overflow: 'hidden' }}>
                <Link >
                  <img src={python} className="card-img-top" alt="..." style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s' }} />
                </Link>
                <div className="card-body d-flex align-items-end" style={{ backgroundColor: 'black' }}>
                  <Link  className="btn btn-secoundry w-100 p-25"><span style={{ color: 'white', fontWeight: 'bold' }}>Python</span></Link>
                </div>
              </div>
            </div>

            <div className="col-md-4 my-2">
              <div className="card " style={{ borderRadius: '50px', overflow: 'hidden' }}>
              <Link >
                  <img src={c} className="card-img-top" alt="..." style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s' }} />
                </Link>
                <div className="card-body d-flex align-items-end" style={{ backgroundColor: 'black' }}>
                  <Link className="btn btn-secoundry w-100 p-25"><span style={{ color: 'white', fontWeight: 'bold' }}>c++</span></Link>
                </div>
              </div>
            </div>
            <div className="col-md-4 my-2">
              <div className="card " style={{ borderRadius: '50px', overflow: 'hidden' }}>
                <Link >
                  <img src={css} className="card-img-top" alt="..." style={{ width: '100%',  height: '100%', objectFit: 'cover', transition: 'transform 0.4s' }} />
                </Link>
                <div className="card-body d-flex align-items-end" style={{ backgroundColor: 'black' }}>
                  <Link className="btn btn-secoundry w-100 p-25"><span style={{ color: 'white', fontWeight: 'bold' }}>HTML5,CSS3</span></Link>
                </div>
              </div>
            </div>

            <div className="col-md-4 my-2">
              <div className="card " style={{ borderRadius: '50px', overflow: 'hidden' }}>
              <Link>
                  <img src={js} className="card-img-top" alt="..." style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s' }} />
                </Link>
                <div className="card-body d-flex align-items-end" style={{ backgroundColor: 'black' }}>
                  <Link className="btn btn-secoundry w-100 p-25"><span style={{ color: 'white', fontWeight: 'bold' }}>HTML5,CSS3,JS</span></Link>
                </div>
              </div>
            </div>

            <div className="col-md-4 my-2">
              <div className="card " style={{ borderRadius: '50px', overflow: 'hidden' }}>
                <Link >
                  <img src={mysql} className="card-img-top" alt="..." style={{ width: '100%',  height: '100%', objectFit: 'cover', transition: 'transform 0.4s' }} />
                </Link>
                <div className="card-body d-flex align-items-end" style={{ backgroundColor: 'black' }}>
                  <Link className="btn btn-secoundry w-100 p-25"><span style={{ color: 'white', fontWeight: 'bold' }}>SQL WorkBench</span></Link>
                </div>
              </div>
            </div>
           
            {/* Include other columns with similar structure */}
          </div>
        </div>
      </div>

      <div className='eeebg4'>
      <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '90%', margin: '0 auto' }}>
      <h2 style={{ fontSize: '30px', marginBottom: '20px', color:'white' }}>🌟 Free Coding Classes for Selected Stream Students! 🌟</h2>
      <p style={{ fontSize: '16px', marginBottom: '20px' }}>
        Welcome to our complimentary coding classes, exclusively available for students their respective streams. Our goal is to empower you with essential coding skills, preparing you for future opportunities in the tech industry.
      </p>
      <h3 style={{ fontSize: '24px', marginBottom: '10px' }}>What sets us apart:</h3>
      <ul style={{ listStyleType: 'none', padding: '0', margin: '0 0 30px 0' }}>
        <li style={{ fontSize: '16px', marginBottom: '15px' }}>
          ✅ Experienced Faculty: Our instructors are seasoned professionals with extensive experience in the field. They are dedicated to providing you with the highest quality of education and guidance.
        </li>
        <li style={{ fontSize: '16px', marginBottom: '15px' }}>
          ✅ Stream-Specific Focus: Unlike generic coding classes, our curriculum is tailored to the specific needs and requirements of students. This targeted approach ensures that you acquire skills that are directly relevant to your academic and career pursuits.
        </li>
        <li style={{ fontSize: '16px', marginBottom: '15px' }}>
          ✅ Comprehensive Curriculum: Our classes cover a wide range of topics, providing you with a solid foundation in coding and programming principles. Whether you're a beginner or have some prior coding experience, our classes are designed to accommodate learners of all levels.
        </li>
        <li style={{ fontSize: '16px', marginBottom: '15px' }}>
          ✅ Career Advancement: By participating in our coding classes, you'll gain a competitive edge in the job market. Employers value candidates with strong coding skills, and our program is designed to help you secure lucrative job opportunities and advance in your chosen career path.
        </li>
      </ul>
      <p style={{ fontSize: '16px', marginBottom: '30px' }}>
        Don't miss out on this incredible opportunity to enhance your coding skills and propel your career forward! Secure your spot today and take the first step towards a brighter future. For more information and enrollment details, contact us now.
      </p>
      <p style={{ fontSize: '16px', marginBottom: '0' }}>
        For any inquiries or assistance, feel free to reach out to us at [insert contact information].
      </p>
      
    </div>
    <br/>
    <h1>choose any One as per your career Plan</h1>
    <div className='Mg4'>
      <div className="container">
        {/* <h1 className="text-center mb-4 heading ">Engineering & Management Domains</h1> */}
        <div className="row justify-content-center container"> {/* Centering the cards */}
          {/* CSE card */}
          <div className="col-lg-4 col-md-6 mb-4 ">
            <a href="/cse" className="text-decoration-none">
              <div className="card h-100 cse-card">
                <div className="card-body text-center">
                  <h5 className="card-title">CSE</h5>
                </div>
              </div>
            </a>
          </div>

          {/* ECE/EEE card */}
          <div className="col-lg-4 col-md-6 mb-4">
            <a href="/eee" className="text-decoration-none">
              <div className="card h-100 ece-eee-card">
                <div className="card-body text-center">
                  <h5 className="card-title">ECE / EEE</h5>
                </div>
              </div>
            </a>
          </div>
          
          {/* MECH card */}
          <div className="col-lg-4 col-md-6 mb-4">
            <a href="/mechanical" className="text-decoration-none">
              <div className="card h-100 mech-card">
                <div className="card-body text-center">
                  <h5 className="card-title">MECH</h5>
                </div>
              </div>
            </a>
          </div>
          
          
          
          
          
          {/* Civil card */}
          <div className="col-lg-4 col-md-6 mb-4">
            <a href="/civil" className="text-decoration-none">
              <div className="card h-100 civil-card">
                <div className="card-body text-center">
                  <h5 className="card-title">Civil</h5>
                </div>
              </div>
            </a>
          </div>
          
          {/* Management card */}
          <div className="col-lg-4 col-md-6 mb-4">
            <a href="/management" className="text-decoration-none">
              <div className="card h-100 management-card">
                <div className="card-body text-center">
                  <h5 className="card-title">Management</h5>
                </div>
              </div>
            </a>
          </div>


          {/* Free Coding Class card */}
          <div className="col-lg-4 col-md-6 mb-4">
            <a href="/Coding" className="text-decoration-none">
              <div className="card h-100 coding-card">
                <div className="card-body text-center">
                  <h5 className="card-title">Free Coding Class</h5>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
    
      </div>

      <DetailsPage />

      {/* <div>
        <div className="eeebg5 ">
          <div>
            <h6 className="text-center my-2 white-text">Students can choose the plan that best fits their learning preferences and career goals.</h6>
          </div>
          <div className='ForCenter'>
            <div class="row">
              <div class="col-md-4">
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <SocialMedia />
    </div>
  )
}

export default Coding;
