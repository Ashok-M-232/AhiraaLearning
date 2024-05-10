import React from 'react';
import { Link } from 'react-router-dom';
import SocialMedia from '../Home/SocialMedia';
import './Civil.css'; // External CSS
import DetailsPage from '../Home/DetailsPage';
import Tieup from '../Colab/Tieup';
import CivPrice from '../Curriculum/Civil/CivPrice';
function Civil() {
  return (
    <div>
      <div className='CMBg'>
        <div className='CHd'>
          <h1 className='CH1'>CIVIL ENGINEERING</h1>
        </div>
      </div>
      
    
      <div className='CBg3'>
      <div className='container'>
        <div className='row mx my-5'>
          <div className='col-md-12'>
          <h3 className="text-center">Why to Choose Civil Internship</h3> {/* Centering the h3 element */}

            <h6>
              Internships in Civil Engineering provide valuable online experiences, enabling students to develop skills, network with professionals, explore specialties, enhance resumes, and prepare for future careers, often leading to employment opportunities
            </h6>
          </div>
        </div>

        {/* <div className='row justify-content-center '>
    <div className='col-md-6 autocad '>
      <h2>AUTOCAD</h2>
      <h6>
        AUTOCAD is an industry-standard computer-aided design (CAD) software widely used in Civil Engineering for its powerful drafting and modeling capabilities. It allows engineers and architects to create precise 2D and 3D drawings, schematics, and models of civil structures and infrastructure. AUTOCAD enhances productivity by streamlining the design process, enabling quick iterations, and ensuring accurate documentation.
      </h6>
      <h6><strong>Highlighted line:</strong> AUTOCAD revolutionizes Civil Engineering design, offering unparalleled precision and efficiency in creating 2D and 3D models of infrastructure projects.</h6>
      <a href={'/Cad'}>See more About the course</a>
    </div>
    <div className='col-md-6 cpbd'>
      <h2>CPBD (Construction Planning & Building Design)</h2>
      <h6>
        CPBD encompasses the crucial phases of project planning, architectural design, and structural engineering in the construction industry. It involves conceptualizing, visualizing, and developing plans for buildings, bridges, roads, and other civil structures, ensuring functionality, safety, and aesthetics. CPBD professionals play a pivotal role in translating architectural visions into tangible structures, considering factors such as site constraints, environmental impact, and building codes.
      </h6>
      <h6><strong>Highlighted line:</strong> CPBD is the cornerstone of Civil Engineering, integrating architectural design principles with structural engineering expertise to bring innovative and sustainable construction projects to life.</h6>
      <a href={'/CPBD'}>See more About the course</a>
    </div>
  </div> */}
  <div className="container">
        <h2 style={{ color:'white',textAlign: 'center', marginBottom:"52px" }}>CHOOSE YOUR BEST PATH</h2>
      <div className="row">
      <div className="col-12 col-md-6 col-lg-4">
  <div className="card " style={{borderRadius: '12px', overflow: 'hidden' }}>
  <a  href="/Civil/AutoCad"><img src={require("../Civil/Images/CivilCad1.jpg")} className="card-img-top" alt="..." style={{ width: '100%',objectFit: 'cover', height: '100%', objectFit: 'cover', transition: 'transform 0.4s' }} /></a>
    <div className="card-body d-flex align-items-end" style={{ backgroundColor: 'black' }}>
      {/* <a href="#" className="btn btn-secoundry w-100 p-25"><span style={{ color: 'white', fontWeight: 'bold' }}>Artificial Intelligence (AI)</span></a> */}
      <a href="/Civil/AutoCad" className="btn btn-secoundry w-100 p-25"><span style={{ color: 'white', fontWeight: 'bold' }}>AUTOCAD</span></a>

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
      <a  href="/Civil/CPBD"><img src={require("../Civil/Images/CPBD1.jpg")} className="card-img-top" alt="..." style={{ width: '100%',objectFit: 'cover', height: '100%', objectFit: 'cover', transition: 'transform 0.4s' }} /></a>
    <div className="card-body" style={{ backgroundColor: 'black' }}>
    {/* <a href="#" className="btn btn-secoundry w-100 p-25"><span style={{ color: 'white', fontWeight: 'bold' }}>Cloud Computing</span></a> */}
    <a href="/Civil/CPBD" className="btn btn-secoundry w-100 p-25"><span style={{ color: 'white', fontWeight: 'bold' }}>CPBD</span></a>

    </div>
  </div>
</div>





</div>
        


      </div>
  
      </div>
    </div>
      
      {/* Civil Engineering Benefits */}
      <div className='CBg5'>
              <h2 className='text-center mb-4'>Civil Engineering Benefits</h2>
              <ul className='list-unstyled'>
                <li><i className='fas fa-check'></i>- Practical Experience in Civil Engineering Projects</li>
                <li><i className='fas fa-check'></i>- Guidance from Experienced Mentors in the Field</li>
                <li><i className='fas fa-check'></i>- Exposure to Real-world Civil Engineering Challenges</li>
                <li><i className='fas fa-check'></i>- Opportunities to Apply Theoretical Knowledge in Practical Settings</li>
                <li><i className='fas fa-check'></i>- Skill Enhancement in Areas such as AutoCAD, Construction Planning & Building Design</li>
                <li><i className='fas fa-check'></i>- Networking with Professionals and Peers in the Civil Engineering Industry</li>
                <li><i className='fas fa-check'></i>- Preparation for Career Advancement in Civil Engineering</li>
                <li><i className='fas fa-check'></i>- Practical Experience in Civil Engineering Projects</li>
                <li><i className='fas fa-check'></i>- Guidance from Experienced Mentors in the Field</li>
                <li><i className='fas fa-check'></i>- Exposure to Real-world Civil Engineering Challenges</li>
                <li><i className='fas fa-check'></i>- Opportunities to Apply Theoretical Knowledge in Practical Settings</li>
                <li><i className='fas fa-check'></i>- Skill Enhancement in Areas such as AutoCAD, Construction Planning & Building Design</li>
                <li><i className='fas fa-check'></i>- Networking with Professionals and Peers in the Civil Engineering Industry</li>
                <li><i className='fas fa-check'></i>- Preparation for Career Advancement in Civil Engineering</li>
              </ul>
          
 

</div>

      
  <DetailsPage />
  <CivPrice/>

     
<SocialMedia/>
    </div>
  );
}

export default Civil;
