import React from 'react';
import { Link } from 'react-router-dom';
import './MGPrice.css';

function MGPrice() {
  return (
    <div>
      <div className="MGbg5 ">
        <div>
          <h6 className="text-center my-2 black-text" style={{ fontSize: '30px', backgroundColor: 'White', padding: '12px' }}>Students can choose the plan that best fits their learning preferences and career goals.</h6>
        </div>
        <div className='ForCenter'>
          <div className="row">
            <div className="col-md-4">
              <div className="plan-card self-led" >
                <h2>Self-led Plan</h2>
                <ul>
                  <li>2+ hours of live sessions</li>
                  <li>Live doubt-clearing sessions</li>
                  <li>Recorded sessions for flexible learning</li>
                  <li>Real-time projects to apply learning</li>
                  <li>Portal access for up to 2 months</li>
                  <li>PDF materials for comprehensive study</li>
                  <li>Interview access and mock interview sessions</li>
                </ul>
                <div style={{ textAlign: 'center' }}>
                  <a href="/Payment7" className="btn btn-dark">₹ 3,500/-</a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="plan-card acknowledge-pre">
                <h2>Acknowledge Pre Plan</h2>
                <ul>
                  <li>4+ hours of live sessions with extended support</li>
                  <li>Live doubt-clearing sessions for individual attention</li>
                  <li>One-on-one discussions with mentors</li>
                  <li>Mentor guidance and interview access</li>
                  <li>Recorded sessions for flexible learning</li>
                  <li>Portal access for up to 4 months</li>
                  <li>PDF materials and LOR for career support</li>
                </ul>
                <div style={{ textAlign: 'center' }}>
                  <Link to="/Payment7" className="btn btn-dark">₹ 5,500/-</Link>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="plan-card advanced-mentor-pre">
                <h2>Advanced Mentor Pre Plan</h2>
                <ul>
                  <li>6+ hours of live sessions for in-depth learning</li>
                  <li>Live doubt-clearing sessions for individual attention</li>
                  <li>Recorded sessions for flexible learning</li>
                  <li>Portal access for up to 6 months</li>
                  <li>Mentor support and placement assistance</li>
                  <li>PDF materials and real-time projects</li>
                  <li>Interview access and LOR for career advancement</li>
                  <li>Live coding classes for practical skill development</li>
                </ul>
                <div style={{ textAlign: 'center' }}>
                  <Link to="/Payment7" className="btn btn-dark">₹ 7,500/-</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MGPrice;
