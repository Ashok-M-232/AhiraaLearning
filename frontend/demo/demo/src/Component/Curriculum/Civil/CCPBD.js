import React, { useState } from 'react';
import './Accordion.css'; // Import external CSS file for styling
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

// AccordionItem component
function AccordionItem({ title, content, bgColor }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion-item">
  <div className="accordion-title" onClick={() => setIsOpen(!isOpen)} role="button">
    <span>{title}</span>
    <span className={`arrow ${isOpen ? 'open' : ''}`}>&#x25BE;</span>
  </div>
  <div className={`accordion-content ${isOpen ? 'open' : ''}`}>
    <div className="accordion-content-inner">{content}</div>
  </div>
</div>

  );
}

// Curriculum component
function CCPBD() {
  return (
    <div className='CCAD'>
    <div className="curriculum">
      <h1 className="curriculum-heading">CURRICULUM</h1>
      <div className="accordion-container">
        <div className="accordion-column">
        <AccordionItem
  title="Introduction to Construction Planning and Building Design"
  bgColor="lightcyan"
  content={
    <ul className='ulbg'>
      <li>Overview of construction planning and building design processes</li>
      <li>Importance of effective planning in construction projects</li>
      <li>Role of building design in construction projects</li>
      <li>Basic principles and concepts in construction planning and building design</li>
    </ul>
  }
/>

<AccordionItem
  title="Site Analysis and Selection"
  bgColor="lightcyan"
  content={
    <ul className='ulbg'>
      <li>Conducting site surveys and assessments</li>
      <li>Evaluating site constraints and opportunities</li>
      <li>Factors influencing site selection for construction projects</li>
      <li>Environmental considerations and regulations</li>
    </ul>
  }
/>

<AccordionItem
  title="Building Codes and Regulations"
  bgColor="lightcyan"
  content={
    <ul className='ulbg'>
      <li>Understanding local building codes and regulations</li>
      <li>Compliance with zoning ordinances and land use regulations</li>
      <li>Safety codes and standards for building design and construction</li>
      <li>Accessibility requirements and ADA compliance</li>
    </ul>
  }
/>

<AccordionItem
  title="Architectural Design Principles"
  bgColor="lightcyan"
  content={
    <ul className='ulbg'>
      <li>Principles of architectural design</li>
      <li>Spatial organization and functionality</li>
      <li>Aesthetic considerations and design aesthetics</li>
      <li>Integration of form and function in building design</li>
    </ul>
  }
/>

<AccordionItem
  title="Structural Design and Analysis"
  bgColor="lightcyan"
  content={
    <ul className='ulbg'>
      <li>Introduction to structural engineering principles</li>
      <li>Structural systems and load-bearing elements</li>
      <li>Analysis of structural loads and forces</li>
      <li>Structural design considerations for different building types</li>
    </ul>
  }
/>



        </div>

        
        <div className="accordion-column">
        
<AccordionItem
  title="Building Materials and Construction Methods"
  bgColor="lightcyan"
  content={
    <ul className='ulbg'>
      <li>Overview of common building materials</li>
      <li>Selection criteria for building materials</li>
      <li>Construction methods and techniques</li>
      <li>Sustainable building practices and green construction materials</li>
    </ul>
  }
/>

<AccordionItem
  title="Building Systems and Services"
  bgColor="lightcyan"
  content={
    <ul className='ulbg'>
      <li>Introduction to building systems (HVAC, plumbing, electrical, etc.)</li>
      <li>Integration of building systems into design</li>
      <li>Energy efficiency and sustainable building systems</li>
      <li>Coordination between architectural and engineering systems</li>
    </ul>
  }
/>

<AccordionItem
  title="Building Information Modeling (BIM)"
  bgColor="lightcyan"
  content={
    <ul className='ulbg'>
      <li>Introduction to BIM technology and software</li>
      <li>Benefits of BIM in construction planning and building design</li>
      <li>Creating and managing BIM models</li>
      <li>Collaborative BIM workflows and coordination</li>
    </ul>
  }
/>

<AccordionItem
  title="Cost Estimation and Budgeting"
  bgColor="lightcyan"
  content={
    <ul className='ulbg'>
      <li>Estimating construction costs and project budgets</li>
      <li>Factors influencing project costs</li>
      <li>Cost estimation techniques and tools</li>
      <li>Budgeting and cost control strategies</li>
    </ul>
  }
/>

<AccordionItem
  title="Construction Planning and Scheduling"
  bgColor="lightcyan"
  content={
    <ul className='ulbg'>
      <li>Developing construction schedules and timelines</li>
      <li>Critical path method (CPM) scheduling</li>
      <li>Resource allocation and leveling</li>
      <li>Construction phasing and sequencing</li>
    </ul>
  }
/>

        </div>


        
      </div>
    </div>
    </div>
  );
}

export default CCPBD;
