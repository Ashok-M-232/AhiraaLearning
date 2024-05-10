import React from 'react'
import SocialMedia from '../Home/SocialMedia';

import DetailsPage from '../Home/DetailsPage';
import './Management.css'
import MgPrice from '../Curriculum/Management/MgPrice';


function Management() {
  return (
    <div>
      

      <div>
  <div className='MGbg' >
    <div className='CseHd'>
      <h1 className='CseH1'>MANAGEMENT</h1>
    </div>
  </div>
</div>

      <div className='MGBg3'>
        <div className='container'>
          <div className='row mx my-4'>
          <div className='col-md-12'>
  <h3 className="text-center" style={{color: 'white'}}>Why to Choose Management Internship</h3> {/* Centering the h3 element */}<br></br>
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
      <div className="col-12 col-md-6 col-lg-4 my-2">
  <div className="card " style={{borderRadius: '12px', overflow: 'hidden' }}>
  <a  href="/Management/DigitalMarketing"><img src={require("../Management/Image/DM.png")} className="card-img-top" alt="..." style={{ width: '100%',objectFit: 'cover', height: '100%', transition: 'transform 0.4s' }} /></a>
    <div className="card-body d-flex align-items-end" style={{ backgroundColor: 'black' }}>
      {/* <a href="#" className="btn btn-secoundry w-100 p-25"><span style={{ color: 'white', fontWeight: 'bold' }}>Artificial Intelligence (AI)</span></a> */}
      <a href="/Management/DigitalMarketing" className="btn btn-secoundry w-100 p-25"><span style={{ color: 'white', fontWeight: 'bold' }}> DIGITAL MARKETING</span></a>

    </div>
    <style jsx>{`
      .card:hover img {
        transform: scale(1.2);
      }
    `}</style>
  </div>
</div>
<div className="col-12 col-md-6 col-lg-4 my-2">
      <div className="card " style={{borderRadius: '12px', overflow: 'hidden' }}>
      <a  href="/Management/HumanResources"><img src={require("../Management/Image/HR.jpg")} className="card-img-top" alt="..." style={{ width: '100%',objectFit: 'cover', height: '100%', transition: 'transform 0.4s' }} /></a>
    <div className="card-body" style={{ backgroundColor: 'black' }}>
    {/* <a href="#" className="btn btn-secoundry w-100 p-25"><span style={{ color: 'white', fontWeight: 'bold' }}>Cloud Computing</span></a> */}
    <a href="/Management/HumanResources" className="btn btn-secoundry w-100 p-25"><span style={{ color: 'white', fontWeight: 'bold' }}>HUMAN RESOURCES</span></a>

    </div>
  </div>
</div>
<div className="col-12 col-md-6 col-lg-4 my-2">
      <div className="card " style={{borderRadius: '12px', overflow: 'hidden' }}>
      <a  href="/Management/FINANCE"><img src={require("../Management/Image/Finace1.jpg")} className="card-img-top" alt="..." style={{ width: '100%',objectFit: 'cover', height: '100%',  transition: 'transform 0.4s' }} /></a>
    <div className="card-body" style={{ backgroundColor: 'black' }}>
    <a href="/Management/FINANCE" className="btn btn-secoundry w-100 p-25"><span style={{ color: 'white', fontWeight: 'bold' }}>FINANCE</span></a>
    </div>
  </div>
</div>
<div className="col-12 col-md-6 col-lg-4 my-2">
      <div className="card " style={{borderRadius: '12px', overflow: 'hidden' }}>
      <a  href="/Management/MARKETING"><img src={require("../Management/Image/M1.jpg")} className="card-img-top" alt="..." style={{ width: '100%',objectFit: 'cover', height: '100%',  transition: 'transform 0.4s' }} /></a>
    <div className="card-body" style={{ backgroundColor: 'black' }}>
    {/* <a href="#" className="btn btn-secoundry w-100 p-25"><span style={{ color: 'white', fontWeight: 'bold' }}>Cyber Security</span></a> */}
    <a  href="/Management/MARKETING" className="btn btn-secoundry w-100 p-25"><span style={{ color: 'white', fontWeight: 'bold' }}>MARKETING</span></a>

    </div>
  </div>
</div>
<div className="col-12 col-md-6 col-lg-4 my-2">
      <div className="card " style={{borderRadius: '12px', overflow: 'hidden' }}>
      <a  href="/Management/CRYPTOCURRENCY"><img src={require("../Management/Image/CC.png")} className="card-img-top" alt="..." style={{ width: '100%',objectFit: 'cover', height: '100%', transition: 'transform 0.4s' }} /></a>
    <div className="card-body" style={{ backgroundColor: 'black' }}>
    {/* <a href="#" className="btn btn-secoundry w-100 p-25"><span style={{ color: 'white', fontWeight: 'bold' }}>Cyber Security</span></a> */}
    <a  href="/Management/CRYPTOCURRENCY" className="btn btn-secoundry w-100 p-25"><span style={{ color: 'white', fontWeight: 'bold' }}>CRYPTOCURRENCY </span></a>

    </div>
  </div>
</div>
<div className="col-12 col-md-6 col-lg-4 my-2">
      <div className="card " style={{borderRadius: '12px', overflow: 'hidden' }}>
      <a  href="/Management/StockMarker"><img src={require("../Management/Image/SM.jpg")} className="card-img-top" alt="..." style={{ width: '100%',objectFit: 'cover', height: '100%', transition: 'transform 0.4s' }} /></a>
    <div className="card-body" style={{ backgroundColor: 'black' }}>
    {/* <a href="#" className="btn btn-secoundry w-100 p-25"><span style={{ color: 'white', fontWeight: 'bold' }}>Cyber Security</span></a> */}
    <a  href="/Management/StockMarker" className="btn btn-secoundry w-100 p-25"><span style={{ color: 'white', fontWeight: 'bold' }}>SRTOCK MARKETING</span></a>

    </div>
  </div>
</div>
</div>

      </div>
    </div>
      
    <div className='MGbg4'>
  <h2 className='text-center font-weight-bold mb-4' style={{color:'white'}}>Why Choose Ahiraa for Management </h2>
  <ul className="list-unstyled mb-0">
    <li className="mb-3"><strong>Comprehensive Learning:</strong> Covering diverse Management topics such as Digital Marketing, Finance, Human Resources, Marketing, Stock Market, Cryptocurrency, and more for a holistic understanding.</li>
    <li className="mb-3"><strong>Expert Instructors:</strong> Experienced professionals with expertise in various fields including Digital Marketing strategies, Financial Management, HR practices, Marketing techniques, Stock Market analysis, Cryptocurrency trends, and more.</li>
    <li className="mb-3"><strong>Hands-on Experience:</strong> Practical training on real-world projects to develop skills in strategic planning, financial analysis, HR management, market research, stock analysis, cryptocurrency trading, and more.</li>
    <li className="mb-3"><strong>Industry-relevant Curriculum:</strong> Courses designed to meet the demands of the industry and prepare students for future challenges in the dynamic fields of Digital Marketing, Finance, HR, Marketing, Stock Market, Cryptocurrency, and beyond.</li>
    <li className="mb-3"><strong>State-of-the-art Facilities:</strong> Access to advanced labs, workshops, and software tools for practical application of digital marketing strategies, financial modeling, HR software, marketing analytics, stock market simulations, cryptocurrency trading platforms, and more.</li>
    <li className="mb-3"><strong>Career Guidance:</strong> Assistance with resume building, interview preparation, and job placement to kickstart your career in Management, whether it's in Digital Marketing, Finance, HR, Marketing, Stock Market, Cryptocurrency, or related fields.</li>
    <li className="mb-3"><strong>Networking Opportunities:</strong> Engage with peers, alumni, and industry professionals in the realms of Digital Marketing, Finance, HR, Marketing, Stock Market, Cryptocurrency, and more for collaboration, mentorship, and knowledge sharing.</li>
    <li className="mb-3"><strong>Continuous Improvement:</strong> Regular updates to the curriculum to incorporate the latest trends and technologies in Digital Marketing, Finance, HR practices, Marketing strategies, Stock Market dynamics, Cryptocurrency innovations, and other relevant areas of Management.</li>
    <li className="mb-3"><strong>Global Exposure:</strong> Connect with a diverse community of learners and experts from around the world in the fields of Digital Marketing, Finance, HR, Marketing, Stock Market, Cryptocurrency, and beyond, providing a global perspective and opportunities for cross-cultural collaboration and learning.</li>
  </ul>
</div>



      <DetailsPage/>
      <MgPrice/>

      <SocialMedia/>
    </div>
  )
}

export default Management
