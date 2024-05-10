import React from 'react'

function Mech() {
    return (
        <div>
          <div className='CMBg'>
            <div className='CHd'>
              <h1 className='CH1'>CIVIL ENGINEERING</h1>
            </div>
          </div>
          
          {/* Why to Choose Civil Internship*/}
          <div className='CBg3'>
          <div className='container'>
            <div className='row mx my-5'>
              <div className='col-md-12'>
              <h3 className="text-center">Why Choose a Mechanical Engineering Internship</h3> {/* Centering the h3 element */}
    
                <h6>
                Internships in Mechanical Engineering offer invaluable hands-on experiences, allowing students to cultivate practical skills, establish connections with industry experts, delve into specialized areas of interest, bolster their resumes, and gear up for prospective career pathways, frequently paving the way for lucrative employment prospects                </h6>
              </div>
            </div>
    
            <div className='row justify-content-center '>
        <div className='col-md-6 autocad '>
          <h2>AUTOCAD</h2>
          <h6>
            AUTOCAD is an industry-standard computer-aided design (CAD) software widely used in Civil Engineering for its powerful drafting and modeling capabilities. It allows engineers and architects to create precise 2D and 3D drawings, schematics, and models of civil structures and infrastructure. AUTOCAD enhances productivity by streamlining the design process, enabling quick iterations, and ensuring accurate documentation.
          </h6>
          <h6><strong>Highlighted line:</strong> AUTOCAD revolutionizes Civil Engineering design, offering unparalleled precision and efficiency in creating 2D and 3D models of infrastructure projects.</h6>
        </div>
        <div className='col-md-6 cpbd'>
          <h2>CPBD (Construction Planning & Building Design)</h2>
          <h6>
            CPBD encompasses the crucial phases of project planning, architectural design, and structural engineering in the construction industry. It involves conceptualizing, visualizing, and developing plans for buildings, bridges, roads, and other civil structures, ensuring functionality, safety, and aesthetics. CPBD professionals play a pivotal role in translating architectural visions into tangible structures, considering factors such as site constraints, environmental impact, and building codes.
          </h6>
          <h6><strong>Highlighted line:</strong> CPBD is the cornerstone of Civil Engineering, integrating architectural design principles with structural engineering expertise to bring innovative and sustainable construction projects to life.</h6>
        </div>
      </div>
          </div>
        </div>
          
          
          {/* Civil Engineering Benefits */}
          <div className='CBg5 d-flex justify-content-center align-items-center'>
          <div className='bgMov'>
          <div className='row'>
        <div className='col-md-6'>
          <div className='benefits'>
            <h2 className='text-center mb-4'>Civil Engineering Benefits</h2>
            <ul className='list-unstyled'>
              <li><i className='fas fa-check'></i> Practical Experience in Civil Engineering Projects</li>
              <li><i className='fas fa-check'></i> Guidance from Experienced Mentors in the Field</li>
              <li><i className='fas fa-check'></i> Exposure to Real-world Civil Engineering Challenges</li>
              <li><i className='fas fa-check'></i> Opportunities to Apply Theoretical Knowledge in Practical Settings</li>
              <li><i className='fas fa-check'></i> Skill Enhancement in Areas such as AutoCAD, Construction Planning & Building Design</li>
              <li><i className='fas fa-check'></i> Networking with Professionals and Peers in the Civil Engineering Industry</li>
              <li><i className='fas fa-check'></i> Preparation for Career Advancement in Civil Engineering</li>
            </ul>
          </div>
        </div>
    
        <div className='col-md-6'>
          <div className='instructors'>
            <h2>Civil Engineering Instructors</h2>
            <p>Our team of instructors consists of experienced professionals and esteemed professors specializing in civil engineering. Here are some highlights:</p>
            <ul className='list-unstyled'>
              <li><i className='fas fa-user-tie'></i> Top Professors from IITs and IIMs</li>
              <li><i className='fas fa-user-tie'></i> Industry Experts with Over 15 Years of Experience</li>
              <li><i className='fas fa-user-tie'></i> Specialists in AutoCAD, Construction Planning & Building Design</li>
              <li><i className='fas fa-user-tie'></i> Committed to Providing Comprehensive Training</li>
              <li><i className='fas fa-user-tie'></i> Dedicated to Mentoring Students Throughout Their Learning Journey</li>
            </ul>
          </div>
        </div>
        </div>
      </div>
      </div>
      <DetailsPage/>
          {/* Plan Details */}
          <div class="CBg7 "><div>
          <h6 class="text-center my-2">Students can choose the plan that best fits their learning preferences and career goals.</h6></div>
            <div className='ForCenter'>
      <div class="row">
        <div class="col-md-4">
          <div class="plan-card self-led">
            <h2>Self-led Plan:</h2>
            <ul>
              <li>2+ hours of live sessions</li>
              <li>Live doubt-clearing sessions</li>
              <li>Recorded sessions for flexible learning</li>
              <li>Real-time projects to apply learning</li>
              <li>Portal access for up to 2 months</li>
              <li>PDF materials for comprehensive study</li>
              <li>Interview access and mock interview sessions</li>
            </ul>
          </div>
        </div>
    
        <div class="col-md-4">
          <div class="plan-card acknowledge-pre">
            <h2>Acknowledge Pre Plan:</h2>
            <ul>
              <li>4+ hours of live sessions with extended support</li>
              <li>Live doubt-clearing sessions for individual attention</li>
              <li>One-on-one discussions with mentors</li>
              <li>Mentor guidance and interview access</li>
              <li>Recorded sessions for flexible learning</li>
              <li>Portal access for up to 4 months</li>
              <li>PDF materials and LOR for career support</li>
            </ul>
          </div>
        </div>
    
        <div class="col-md-4">
          <div class="plan-card advanced-mentor-pre">
            <h2>Advanced Mentor Pre Plan:</h2>
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
          </div>
        </div>
      </div>
      </div>
    </div>
    
          
         
          
        </div>
      );
}

export default Mech
