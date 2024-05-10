import React from 'react';
import { Link } from 'react-router-dom';
import SocialMedia from '../Home/SocialMedia';
import './EEE.css';
import DetailsPage from '../Home/DetailsPage';
import Tieup from '../Colab/Tieup';
import EEEPrice from '../Curriculum/EEE/EEEPrice';
function EEE() {
  return (
    <div>
      

      <div>
  <div className='eeebg' >
    <div className='CseHd'>
      <h1 className='CseH1'>EEE / ECE</h1>
    </div>
  </div>
</div>

      <div className='eeeBg3'>
        <div className='container'>
          <div className='row mx my-5'>
          <div className='col-md-12'>
  <h3 className="text-center" style={{ fontSize: '30px',color:'white',   padding:'12px'}}>Why to Choose ECE/EEE Internship</h3> {/* Centering the h3 element */}<br></br>
  <h6 style={{ fontSize: '21px', color:'white',padding:'12px'}}>
    Internships provide valuable online experiences, enabling students to develop skills, network with professionals, explore specialties, enhance resumes, and prepare for future careers, often leading to employment opportunities
  </h6>
</div>
{/* style={{ color: 'white' }} */}
          </div>
      </div>
      <div className="container">
        <h2 style={{ textAlign: 'center', marginBottom:"52px" , color:'white'}}>CHOOSE YOUR BEST PATH</h2>
      <div className="row">
      <div className="col-md-4 my-2">
  <div className="card " style={{borderRadius: '12px', overflow: 'hidden' }}>
    <a  href="/EEE/IOT"><img src={require("../../Component/Technology/EEEIMG/2123320.png")} className="card-img-top" alt="..." style={{ width: '100%',objectFit: 'cover', height: '100%', objectFit: 'cover', transition: 'transform 0.4s' }} /></a>
    <div className="card-body d-flex align-items-end" style={{ backgroundColor: 'black' }}>
      {/* <a href="#" className="btn btn-secoundry w-100 p-25"><span style={{ color: 'white', fontWeight: 'bold' }}>Artificial Intelligence (AI)</span></a> */}
      <a to="/EEE/IOT" className="btn btn-secoundry w-100 p-25"><span style={{ color: 'white', fontWeight: 'bold' }}>Internet Of Things </span></a>

    </div>
    <style jsx>{`
      .card:hover img {
        transform: scale(1.2);
      }
    `}</style>
  </div>
</div>
<div className="col-md-4 my-2">
      <div className="card " style={{borderRadius: '12px', overflow: 'hidden' }}>
      <a  href="/EEE/EV"><img src={require("../../Component/Technology/EEEIMG/EV.jpg")} className="card-img-top" alt="..." style={{ width: '100%',objectFit: 'cover', height: '100%', objectFit: 'cover', transition: 'transform 0.4s' }} /></a>
    <div className="card-body" style={{ backgroundColor: 'black' }}>
    <a href="/EEE/EV" className="btn btn-secoundry w-100 p-25"><span style={{ color: 'white', fontWeight: 'bold' }}>Hybrid -Electrical Vehicle </span></a>
    </div>
  </div>
</div>

<div className="col-md-4 my-2">
      <div className="card " style={{borderRadius: '12px', overflow: 'hidden' }}>
      <a  href="/EEE/ES"><img src={require("../../Component/Technology/EEEIMG/EMDED.jpg")} className="card-img-top" alt="..." style={{ width: '100%',objectFit: 'cover', height: '100%', objectFit: 'cover', transition: 'transform 0.4s' }} /></a>
    <div className="card-body" style={{ backgroundColor: 'black' }}>
    {/* <a href="#" className="btn btn-secoundry w-100 p-25"><span style={{ color: 'white', fontWeight: 'bold' }}>Cyber Security</span></a> */}
    <a  href="/CSE/ES" className="btn btn-secoundry w-100 p-25"><span style={{ color: 'white', fontWeight: 'bold' }}>Emmbaded System</span></a>

    </div>
  </div>
</div>

{/* <div className="col-md-4 my-2">
      <div className="card " style={{borderRadius: '12px', overflow: 'hidden' }}>
      <a  href="/EEE/Robotics"><img src={require("../../Component/Technology/EEEIMG/ROBO.jpg")} className="card-img-top" alt="..." style={{ width: '100%',objectFit: 'cover', height: '100%', objectFit: 'cover', transition: 'transform 0.4s' }} /></a>
    <div className="card-body" style={{ backgroundColor: 'black' }}>
    <a href="#" className="btn btn-secoundry w-100 p-25"><span style={{ color: 'white', fontWeight: 'bold' }}>Cloud Computing</span></a>
    <a href="/EEE/Robotics" className="btn btn-secoundry w-100 p-25"><span style={{ color: 'white', fontWeight: 'bold' }}>Robotics</span></a>

    </div>
  </div>
</div> */}



<div className="col-md-4 my-2">
      <div className="card " style={{borderRadius: '12px', overflow: 'hidden' }}>
      <a  href="/EEE/PLC"><img src={require("../../Component/Technology/EEEIMG/PLC.jpg")} className="card-img-top" alt="..." style={{ width: '100%',objectFit: 'cover', height: '100%', objectFit: 'cover', transition: 'transform 0.4s' }} /></a>
    <div className="card-body" style={{ backgroundColor: 'black' }}>
    {/* <a href="#" className="btn btn-secoundry w-100 p-25"><span style={{ color: 'white', fontWeight: 'bold' }}>Cyber Security</span></a> */}
    <a  href="/EEE/PLC" className="btn btn-secoundry w-100 p-25"><span style={{ color: 'white', fontWeight: 'bold' }}>PLC</span></a>

    </div>
  </div>
</div>


     

      <div className="col-md-4 my-2">
      <div className="card " style={{borderRadius: '12px', overflow: 'hidden' }}>
      <a  href="/EEE/DELD"><img src={require("../../Component/Technology/EEEIMG/VLSI1.png")} className="card-img-top" alt="..." style={{ width: '100%',objectFit: 'cover', height: '100%', objectFit: 'cover', transition: 'transform 0.4s' }} /></a>
    <div className="card-body" style={{ backgroundColor: 'black' }}>
    {/* <a href="#" className="btn btn-secoundry w-100 p-25"><span style={{ color: 'white', fontWeight: 'bold' }}>Data Science</span></a> */}
    <a href="/EEE/DELD" className="btn btn-secoundry w-100 p-25"><span style={{ color: 'white', fontWeight: 'bold' }}>VLSI</span></a>
      
    </div>
  </div>
</div>

     

</div>
        


      </div>
    </div>
      
    <div className='eee1bg4'>
      <h2 className='text-center font-weight-bold mb-4' style={{color:'white'}}>Why Choose Ahira for Better Concepts</h2>
      <ul className="list-unstyled mb-0">
        <li className="mb-3"><strong>Comprehensive Learning:</strong> Covering diverse CSE topics for a holistic understanding.</li>
        <li className="mb-3"><strong>Renowned Instructors:</strong> Experts from IIT, IIM, and industry with 15+ years of experience.</li>
        <li className="mb-3"><strong>Cutting-edge Technologies:</strong> Specialization in AI, ML, Data Science, and more.</li>
        <li className="mb-3"><strong>Practical Insights:</strong> Emphasis on real-world projects for hands-on experience.</li>
        <li className="mb-3"><strong>Individualized Mentorship:</strong> Personal guidance at every stage of learning.</li>
        <li className="mb-3"><strong>Flexible Learning Options:</strong> Online courses, workshops, and interactive sessions.</li>
        <li className="mb-3"><strong>Career Support:</strong> Resume building, interview prep, and job placement assistance.</li>
        <li className="mb-3"><strong>Community Engagement:</strong> Networking opportunities with peers and professionals.</li>
        <li className="mb-3"><strong>Continuous Improvement:</strong> Regular updates to curriculum and resources.</li>
        <li className="mb-3"><strong>Global Reach:</strong> Access to a global community of learners and industry experts.</li>
      </ul>
    </div>

      <DetailsPage/>
      
      <EEEPrice/>

      <SocialMedia/>
    </div>
  );
  
}

export default EEE
