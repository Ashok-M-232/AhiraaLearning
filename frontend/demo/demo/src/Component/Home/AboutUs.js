import React from 'react';
import './AboutUs.css'; // Importing the CSS file for styles
import SocialMedia from './SocialMedia';
import DetailsPage from './DetailsPage';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function AboutUs() {
    return (
      <div className='AboutBg'>

        <div>
        <Navbar expand="lg " className='Hnavbar'>
    <div className="container d-flex align-items-center"> {/* Added d-flex and align-items-center */}
        {/* Brand */}
        <div className="d-flex align-items-center"> {/* Added d-flex and align-items-center */}
            <img src="./LogoHead.png" alt="Brand Logo" style={{ borderRadius: '150px', height: '33px', width: '32px' }} />
            <Link className="navbar-brand" style={{color:'white', padding:'12px'}} to="/">Ahiraa Learning  Pvt.Ltd</Link>
         
        
        {/* Navbar Toggle */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ color: 'white' }} />
        </div>
        
        {/* Navbar Collapse */}
        <Navbar.Collapse id="basic-navbar-nav" style={{color:'white'}}>
            <Nav className="ms-auto">
                <Nav.Link style={{color:'white'}}  href="/AboutUs">About</Nav.Link>
                <Nav.Link style={{color:'white'}}  href="/Services">Service</Nav.Link>
                <Nav.Link style={{color:'white'}}  href="/LMS">LMS Login</Nav.Link>
                <Nav.Link style={{color:'white'}}  href="/contact">Contact</Nav.Link>
                {/* Drop Down */}
                {/* <NavDropdown title="More Services" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#">Service 1</NavDropdown.Item>
                </NavDropdown> */}
            </Nav>
        </Navbar.Collapse>
    </div>
</Navbar>
        <div className="about-page">
            {/* Header Section */}
            <header className="about-header">
                <h1>About Us</h1>
            </header>
            
            {/* Main content section */}
            <section className="about-content">
                <p>
                    The company encompasses a comprehensive range of educational endeavors aimed at enriching learning experiences and supporting academic and professional growth. This includes the provision of specialized educational programs and courses tailored to individual needs, ranging from vocational training and language proficiency courses to niche skill development programs.
                </p>
                
                <p>
                    The company offers personalized tutoring, coaching, and mentoring services across various subjects and disciplines, ensuring that students receive the guidance they need to excel academically. Through workshops, seminars, and training sessions, the company facilitates knowledge exchange and skill acquisition, catering to both individuals and organizations seeking professional development opportunities.
                </p>

                <p>
                    Moreover, the company provides consultancy and advisory services to educational institutions, offering expertise in curriculum development, accreditation processes, and educational policy matters. Leveraging educational technology solutions and digital learning resources, the company enhances learning experiences and accessibility, promoting innovation and engagement in education.
                </p>

                <p>
                    Administrative and operational support services are extended to educational institutions, optimizing efficiency and compliance with regulatory standards. Collaborative initiatives with educational stakeholders, government agencies, and industry partners drive forward educational reform efforts and address pressing challenges facing the sector.
                </p>

                <p>
                    Research and development activities further the company's commitment to advancing knowledge, exploring innovative teaching methodologies, and informing evidence-based practices in education. Additionally, the company offers career counseling and student support services to facilitate academic and career advancement, fostering a holistic approach to education and lifelong learning.
                </p>
            </section>
        </div>
        </div>
        <DetailsPage/>
        <SocialMedia/>
        </div>

    );
}

export default AboutUs;
