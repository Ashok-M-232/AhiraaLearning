import React from 'react';
import SocialMedia from '../Home/SocialMedia';
import './CSE.css';
import DetailsPage from '../Home/DetailsPage';
import CPrice from '../Curriculum/CSE/CPrice';



function CSE() {
  return (
    <div>
      <div>
  <div className='Csebg' >
    <div className='CseHd'>
      <h1 className='CseH1'>COMPUTER SCIENCE ENGINEERING</h1>
    </div>
  </div>
</div>

      <div className='cseBg3'>
        <div className='container'>
          <div className='row mx my-4'>
          <div className='col-md-12'>
  <h3 className="text-center" style={{ color: 'white' }}>Why to Choose COMPUTER SCIENCE ENGINEERING Internship</h3> {/* Centering the h3 element */}
  <h6 style={{ color: 'white' }}>
  Internships in Computer Science Engineering provide valuable online experiences, helping students develop skills, network, and prepare for careers, often leading to job opportunities.  </h6>
</div>

          </div>
      </div>
      <div className="container">
        <h2 style={{ color: 'white',textAlign: 'center', marginBottom:"52px" }}>CHOOSE YOUR BEST PATH</h2>
      <div className="row">
      <div className="col-md-4 my-2">
  <div className="card " style={{borderRadius: '12px', overflow: 'hidden' }}>
    <a  href="/CSE/AI"><img src={require("../../Component/Technology/IMGCSE/AI1.jpg")} className="card-img-top" alt="..." style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s' }} /></a>
    <div className="card-body d-flex align-items-end" style={{ backgroundColor: 'black' }}>
      {/* <a href="#" className="btn btn-secoundry w-100 p-25"><span style={{ color: 'white', fontWeight: 'bold' }}>Artificial Intelligence (AI)</span></a> */}
      <a href="/CSE/AI" className="btn btn-secoundry w-100 p-25"><span style={{ color: 'white', fontWeight: 'bold' }}>Artificial Intelligence </span></a>

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
      <a  href="/CSE/ML"><img src={require("../../Component/Technology/IMGCSE/ML1.jpg")} className="card-img-top" alt="..." style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s' }} /></a>
    <div className="card-body" style={{ backgroundColor: 'black' }}>
    <a href="/CSE/ML" className="btn btn-secoundry w-100 p-25"><span style={{ color: 'white', fontWeight: 'bold' }}>Machine Learning</span></a>
    </div>
  </div>
</div>

      <div className="col-md-4 my-2">
      <div className="card " style={{borderRadius: '12px', overflow: 'hidden' }}>
      <a  href="/CSE/DataScience"><img src={require("../../Component/Technology/IMGCSE/DS1.jpg")} className="card-img-top" alt="..." style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s' }} /></a>
    <div className="card-body" style={{ backgroundColor: 'black' }}>
    {/* <a href="#" className="btn btn-secoundry w-100 p-25"><span style={{ color: 'white', fontWeight: 'bold' }}>Data Science</span></a> */}
    <a href="/CSE/DataScience" className="btn btn-secoundry w-100 p-25"><span style={{ color: 'white', fontWeight: 'bold' }}>Data Science</span></a>
      
    </div>
  </div>
</div>

      <div className="col-md-4 my-2">
      <div className="card " style={{borderRadius: '12px', overflow: 'hidden' }}>
      <a  href="/CSE/CloudComputing"><img src={require("../../Component/Technology/IMGCSE/CLD4.jpg")} className="card-img-top" alt="..." style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s' }} /></a>
    <div className="card-body" style={{ backgroundColor: 'black' }}>
    {/* <a href="#" className="btn btn-secoundry w-100 p-25"><span style={{ color: 'white', fontWeight: 'bold' }}>Cloud Computing</span></a> */}
    <a href="/CSE/CloudComputing" className="btn btn-secoundry w-100 p-25"><span style={{ color: 'white', fontWeight: 'bold' }}>Cloud Computing</span></a>

    </div>
  </div>
</div>

      <div className="col-md-4 my-2">
      <div className="card " style={{borderRadius: '12px', overflow: 'hidden' }}>
      <a  href="/CSE/CyberSecurity"><img src={require("../../Component/Technology/IMGCSE/CS2.jpg")} className="card-img-top" alt="..." style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s' }} /></a>
    <div className="card-body" style={{ backgroundColor: 'black' }}>
    {/* <a href="#" className="btn btn-secoundry w-100 p-25"><span style={{ color: 'white', fontWeight: 'bold' }}>Cyber Security</span></a> */}
    <a  href="/CSE/CyberSecurity" className="btn btn-secoundry w-100 p-25"><span style={{ color: 'white', fontWeight: 'bold' }}>Cyber Security</span></a>

    </div>
  </div>
</div>

      <div className="col-md-4 my-2">
      <div className="card " style={{borderRadius: '12px', overflow: 'hidden' }}>
      <a  href="/CSE/WebDevelopment"><img src={require("../../Component/Technology/IMGCSE/WEB2.jpg")} className="card-img-top" alt="..." style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s' }} /></a>
    <div className="card-body" style={{ backgroundColor: 'black' }}>
    {/* <a href="#" className="btn btn-secoundry w-100 p-25"><span style={{ color: 'white', fontWeight: 'bold' }}>Web Development</span></a> */}
    <a  href="/CSE/WebDevelopment" className="btn btn-secoundry w-100 p-25"><span style={{ color: 'white', fontWeight: 'bold' }}>Web Development</span></a>

    </div>
  </div>
</div>

      <div className="col-md-4 my-2">
      <div className="card " style={{borderRadius: '12px', overflow: 'hidden' }}>
      <a  href="/CSE/AndroidDevelopment"><img src={require("../../Component/Technology/IMGCSE/ARD2.jpg")} className="card-img-top" alt="..." style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s' }} /></a>
    <div className="card-body" style={{ backgroundColor: 'black' }}>
    {/* <a href="#" className="btn btn-secoundry w-100 p-25"><span style={{ color: 'white', fontWeight: 'bold' }}>Android Development</span></a> */}
    <a href="/CSE/AndroidDevelopment" className="btn btn-secoundry w-100 p-25"><span style={{ color: 'white', fontWeight: 'bold' }}>Android Development</span></a>

    </div>
  </div>
</div>

      <div className="col-md-4 my-2">
      <div className="card " style={{borderRadius: '12px', overflow: 'hidden' }}>
      <a  href="/CSE/DBMS"><img src={require("../../Component/Technology/IMGCSE/DB4.jpg")} className="card-img-top" alt="..." style={{ width: '100%',height: '100%', objectFit: 'cover', transition: 'transform 0.4s' }} /></a>
    <div className="card-body" style={{ backgroundColor: 'black' }}>
    {/* <a href="#" className="btn btn-secoundry w-100 p-25"><span style={{ color: 'white', fontWeight: 'bold' }}>Database Management Systems (DBMS)</span></a> */}
    <a href="/CSE/DBMS" className="btn btn-secoundry w-100 p-25"><span style={{ color: 'white', fontWeight: 'bold' }}>Database Management Systems (DBMS)</span></a>

    </div>
  </div>
</div>

</div>
        


      </div>
    </div>
      
    <div className='csebg4'>
      <h2 className='text-center font-weight-bold mb-4'>Why Choose Ahiraa for Computer Science Engineering</h2>
      <ul className="list-unstyled mb-0">
        <li className="mb-3"><strong >Comprehensive Learning:</strong> Covering diverse CSE topics for a holistic understanding.</li>
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
      <CPrice/>
      <SocialMedia/>
    </div>
  );
}

export default CSE;

