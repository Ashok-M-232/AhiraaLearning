import React from 'react';
import Subjects from './Subjects';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Services() {
  return (
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
      <Subjects/>
    </div>
  )
}

export default Services
