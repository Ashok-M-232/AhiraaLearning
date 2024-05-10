import React from 'react';
import './Home.css';
import Content from './Content';
import Provider from './Provider';
import Subjects from './Subjects';
import SocialMedia from './SocialMedia';
import Tieup from '../Colab/Tieup';
import Collage from './Collage/Collage';
import { Link } from 'react-router-dom';
import Marquee from './Marquee/Marquee';
import { Navbar, Nav } from 'react-bootstrap';


function Home() {
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




            
            {/* Content sections */}
            <Content />

            <Marquee />
            <Provider />
            <Subjects />
            {/* <Dummy /> */}
            <Collage />
            {/* <Dummy /> */}
            <Tieup />
            <SocialMedia />
        </div>
    );
}

export default Home;
