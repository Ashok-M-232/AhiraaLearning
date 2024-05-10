import React from 'react'
import SocialMedia from '../Home/SocialMedia';
import './Mechanical.css';
import DetailsPage from '../Home/DetailsPage';
import MechPrice from '../Curriculum/Mech/MechPrice';

function Mechanical() {
  return (
    <div>
      

      <div>
  <div className='Mechbg' >
    <div className='CseHd'>
      <h1 className='CseH1'> MECHANICAL ENGINEERING</h1>
    </div>
  </div>
</div>

      <div className='MechBg3'>
        <div className='container'>
          <div className='row mx my-5'>
          <div className='col-md-12'>
  <h3 className="text-center" style={{color: 'white'}}>Why to Choose Mechanical Internship</h3> {/* Centering the h3 element */}<br></br>
  <h6 style={{color: 'white'}}>
    Internships provide valuable online experiences, enabling students to develop skills, network with professionals, explore specialties, enhance resumes, and prepare for future careers, often leading to employment opportunities
  </h6>
</div>
{/* style={{ color: 'white' }} */}
          </div>
      </div>
      <div className="container">
        <h2 style={{ color:'white',textAlign: 'center', marginBottom:"52px" }}>CHOOSE YOUR BEST PATH</h2>
      <div className="row">
      <div className="col-12 col-md-6 col-lg-4">
  <div className="card " style={{borderRadius: '12px', overflow: 'hidden' }}>
  <a  href="/Mech/AuroCad"><img src={require("../Mech/Images/Autocad.gif")} className="card-img-top" alt="..." style={{ width: '100%' , height: '100%', objectFit: 'cover', transition: 'transform 0.4s' }} /></a>
    <div className="card-body d-flex align-items-end" style={{ backgroundColor: 'black' }}>
      {/* <a href="#" className="btn btn-secoundry w-100 p-25"><span style={{ color: 'white', fontWeight: 'bold' }}>Artificial Intelligence (AI)</span></a> */}
      <a href="/Mech/AuroCad" className="btn btn-secoundry w-100 p-25"><span style={{ color: 'white', fontWeight: 'bold' }}>AUTOCAD</span></a>

    </div>
    <style jsx>{`
      .card:hover img {
        transform: scale(1.2);
      }
    `}</style>
  </div>
</div>
<div className="col-12 col-md-6 col-lg-4">
      <div className="card " style={{borderRadius: '12px', overflow: 'hidden' }}>
      <a  href="/Mech/ICEngine"><img src={require("../Mech/Images/IcEngine.gif")} className="card-img-top" alt="..." style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s' }} /></a>
    <div className="card-body" style={{ backgroundColor: 'black' }}>
    {/* <a href="#" className="btn btn-secoundry w-100 p-25"><span style={{ color: 'white', fontWeight: 'bold' }}>Cloud Computing</span></a> */}
    <a href="/Mech/ICEngine" className="btn btn-secoundry w-100 p-25"><span style={{ color: 'white', fontWeight: 'bold' }}>IC ENGINE</span></a>

    </div>
  </div>
</div>
<div className="col-12 col-md-6 col-lg-4">
      <div className="card " style={{borderRadius: '12px', overflow: 'hidden' }}>
      <a  href="/Mech/MEV"><img src={require("../Mech/Images/CarDesign1.jpg")} className="card-img-top" alt="..." style={{ width: '100%', height: '100%',  transition: 'transform 0.4s' }} /></a>
    <div className="card-body" style={{ backgroundColor: 'black' }}>
    <a href="/Mech/MEV" className="btn btn-secoundry w-100 p-25"><span style={{ color: 'white', fontWeight: 'bold' }}>Hybrid -Electrical Vehicle (EV)</span></a>
    </div>
  </div>
</div>
<div className="col-12 col-md-6 col-lg-4">
      <div className="card " style={{borderRadius: '12px', overflow: 'hidden' }}>
      <a  href="/Mech/CarDesign"><img src={require("../Mech/Images/CarDesgn.gif")} className="card-img-top" alt="..." style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s' }} /></a>
    <div className="card-body" style={{ backgroundColor: 'black' }}>
    {/* <a href="#" className="btn btn-secoundry w-100 p-25"><span style={{ color: 'white', fontWeight: 'bold' }}>Cyber Security</span></a> */}
    <a  href="/Mech/CarDesign" className="btn btn-secoundry w-100 p-25"><span style={{ color: 'white', fontWeight: 'bold' }}>CAR DESIGN</span></a>

    </div>
  </div>
</div>



</div>
        


      </div>
    </div>
      
    <div className='Mechbg4'>
      <h2 className='text-center font-weight-bold mb-4' style={{color:'white'}}>Why Choose Ahiraa for Mechanical Engineering</h2>
      <ul className="list-unstyled mb-0">
        <li className="mb-3"><strong>Comprehensive Learning:</strong> Covering diverse Mechanical Engineering topics for a holistic understanding.</li>
        <li className="mb-3"><strong>Expert Instructors:</strong> Experienced professionals with expertise in AutoCAD, Hybrid & Electric Vehicle design, Car Design, IC Engine, and more.</li>
        <li className="mb-3"><strong>Hands-on Experience:</strong> Practical training on real-world projects to develop skills in design, analysis, and manufacturing.</li>
        <li className="mb-3"><strong>Industry-relevant Curriculum:</strong> Courses designed to meet the demands of the industry and prepare students for future challenges.</li>
        <li className="mb-3"><strong>State-of-the-art Facilities:</strong> Access to advanced labs, workshops, and equipment for experimentation and research.</li>
        <li className="mb-3"><strong>Career Guidance:</strong> Assistance with resume building, interview preparation, and job placement to kickstart your career in Mechanical Engineering.</li>
        <li className="mb-3"><strong>Networking Opportunities:</strong> Engage with peers, alumni, and industry professionals for collaboration and knowledge sharing.</li>
        <li className="mb-3"><strong>Continuous Improvement:</strong> Regular updates to the curriculum to incorporate the latest trends and technologies in the field.</li>
        <li className="mb-3"><strong>Global Exposure:</strong> Connect with a diverse community of learners and experts from around the world for a global perspective on Mechanical Engineering.</li>
      </ul>
    </div>


      <DetailsPage/>
      <MechPrice/>
      <SocialMedia/>
    </div>
  )
}

export default Mechanical
