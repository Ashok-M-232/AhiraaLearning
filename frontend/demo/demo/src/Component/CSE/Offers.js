import React from 'react';
import './Offers.css';

function Offers() {
  return (
    <div className='Offers'>
      <div id="section1" className="container-fluid p-5 bg-lightpink container">
        <h2 className="text-center my-4">We are providing our best to student</h2>
        <div className="row">
          <div className="col-md-6 col-sm-12 mb-4">
            <div className="p-3">
              <h2>Live Training Sessions</h2>
              <p>Content for Live Training Sessions goes here.</p>
            </div>
          </div>
          <div className="col-md-6 col-sm-12 mb-4">
            <div className="p-3">
              <h2>Distinguished Mentors</h2>
              <p>Content for Distinguished Mentors goes here.</p>
            </div>
          </div>
          <div className="col-md-6 col-sm-12 mb-4">
            <div className="p-3">
              <h2>Internship Experience</h2>
              <p>Content for Internship Experience goes here.</p>
            </div>
          </div>
          <div className="col-md-6 col-sm-12 mb-4">
            <div className="p-3">
              <h2>Industry Relevant Projects</h2>
              <p>Content for Industry Relevant Projects goes here.</p>
            </div>
          </div>
          <div className="col-md-6 col-sm-12 mb-4">
            <div className="p-3">
              <h2>LMS Access</h2>
              <p>Content for LMS Access goes here.</p>
            </div>
          </div>
          <div className="col-md-6 col-sm-12 mb-4">
            <div className="p-3">
              <h2>Professional Certifications</h2>
              <p>Content for Professional Certifications goes here.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container p-4">
        <h3>We offer a comprehensive 2 months internship program, with flexible access to classes at any time. Our esteemed faculty ensures students receive the highest quality education and knowledge enrichment throughout their learning journey.</h3>
      </div>
    </div>
  );
}

export default Offers;
