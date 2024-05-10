import React from 'react';
import './Subject.css'; // Import CSS file for styling

function Subjects() {
  return (
    <div className='MBg4'>
      <div className="container">
        <h1 className="text-center mb-4 heading ">Engineering & Management Domains</h1>
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
            <a href="/Civil" className="text-decoration-none">
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
  );
}

export default Subjects;
