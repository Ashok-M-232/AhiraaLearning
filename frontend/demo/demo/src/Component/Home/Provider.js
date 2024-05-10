import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Provider.css';


function Provider() {
  return (
    <div className='MBg2'>
      <div className="why-to-choose">
        <Container>
        <h2 className="text-center mb-5 with-background-image">Why to Choose Ahiraa Learning</h2>
          <Row>
            <Col md={6} className="mb-4">
              <div className="reason transparent-card">
                <h3>Comprehensive Training and Internship Programs</h3>
                <p>
                  Our programs cover theoretical knowledge and practical skills, offering internship opportunities for real-world experience.
                </p>
              </div>
            </Col>
            <Col md={6} className="mb-4">
              <div className="reason transparent-card">
                <h3>Expert Mentorship from Prestigious Institutions</h3>
                <p>
                  Our mentors from esteemed institutions like IIT and IIM provide personalized guidance and support to enhance your learning experience.
                </p>
              </div>
            </Col>
            <Col md={6} className="mb-4">
              <div className="reason transparent-card">
                <h3>Collaboration with Renowned Universities and Institutions</h3>
                <p>
                  We collaborate with prestigious institutions such as IIT Bombay, IIT Madras, and others, adding credibility to our programs.
                </p>
              </div>
            </Col>
            
            <Col md={6} className="mb-4">
              <div className="reason transparent-card">
                <h3>Practical Skills Development and Career Opportunities</h3>
                <p>
                  Through real-time projects and career support services, we help you develop practical skills and enhance your career prospects.
                </p>
              </div>
            </Col>
            <Col md={6} className="mb-4">
              <div className="reason transparent-card">
                <h3>Flexibility and Convenience</h3>
                <p>
                  We offer flexible class timings and provide both live and recorded sessions to accommodate your schedule and learning pace.
                </p>
              </div>
            </Col>
          </Row>
        </Container>

      </div>
      
    </div>
  )
}

export default Provider;
