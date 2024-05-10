import React from 'react';
import './ContactUs.css'
import DetailsPage from './DetailsPage';
import SocialMedia from './SocialMedia';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function ContactUs() {
    return (
        <div className="contact">
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
            <h2 className="contact-heading">Contact Us</h2>
           
            <div className='row'>
                <div className='col'>
                <h2 className="contact-subheading">Address</h2>
            <p className="contact-paragraph">Ahiraa Pvt Ltd, 14/432 1st Floor kamala nager, near Venkaswara Temple, Anantapur.</p></div>
                <div className='col'>
                <h2 className="contact-subheading">Phone.No</h2>
            <p className="contact-paragraph">9390808501</p></div>
                <div className='col'>
                <h2 className="contact-subheading">Email ID</h2>
                <a href="mailto:ahiraalearning.helpline@gmail.com"><p className="contact-paragraph">ahiraalearning.helpline@gmail.com</p> </a></div>
            </div>
            <DetailsPage />
            <SocialMedia className="social-media-section" />
            
        </div>
    );
}

export default ContactUs;
