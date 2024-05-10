import React from 'react'
import { Link } from 'react-router-dom';
import './CPrice.css'

function CPrice() {
  return (
    <div>
        <div className="cse11bg5 ">
          <div>
            <h6 className="text-center" style={{color:'white', fontSize:'22px', padding:'15px'}}>Students can choose the plan that best fits their learning preferences and career goals.</h6>
          </div>
          <div className='ForCenter'>
            <div class="row">
              <div class="col-md-4">
                <div class="plan-card self-led">
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
                  <div  style={{ textAlign: 'center' }}><Link className='csebtn btn btn-dark'>3,500/-</Link></div>

                </div>
              </div>
              <div class="col-md-4">
                <div class="plan-card acknowledge-pre">
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
                  <div  style={{ textAlign: 'center' }}><Link className='csebtn btn btn-dark'>5,500/-</Link></div>

                </div>
              </div>
              <div class="col-md-4">
                <div class="plan-card advanced-mentor-pre">
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
                  <div  style={{ textAlign: 'center' }}><Link className='csebtn btn btn-dark'>7,500/-</Link></div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default CPrice
