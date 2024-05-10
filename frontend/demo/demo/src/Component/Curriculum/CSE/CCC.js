import React, { useState } from 'react';
import '../CSE/Accordion.css';
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
function CCC() {
  return (
    <div className='CBG'>
    <div className="curriculum">
      <h1 className="curriculum-heading">CURRICULUM</h1>
      <div className="accordion-container">
        <div className="accordion-column">
        <AccordionItem
  title="Introduction to Cybersecurity"
  bgColor="lightcyan"
  content={
    <ul className='ulbg'>
      <li>What is Cybersecurity?</li>
      <li>Importance of Cybersecurity</li>
      <li>Threat Landscape</li>
    </ul>
  }
/>

<AccordionItem
  title="Network Security"
  bgColor="lightcyan"
  content={
    <ul>
      <li>Firewall Technologies</li>
      <li>Virtual Private Networks (VPNs)</li>
      <li>Virtual Private Networks (VPNs)</li>
    </ul>
  }
/>

<AccordionItem
  title="Endpoint Security"
  bgColor="lightcyan"
  content={
    <ul>
    <li>Host-based Firewalls</li>
    <li>Patch Management</li>
    <li>Mobile Device Management (MDM)</li>
    </ul>
  }
/>

<AccordionItem
  title="Cloud Security"
  bgColor="lightcyan"
  content={
    <ul>
     <li>Compliance in the Cloud</li>
     <li>Security Monitoring and Logging</li>
     <li>Identity and Access Management in the Cloud</li>
    </ul>
  }
/>
</div>
<div className="accordion-column">


<AccordionItem
  title="Cryptography and Cryptanalysis"
  bgColor="lightcyan"
  content={
    <ul>
     <li>Digital Signatures</li>
     <li>Cryptanalysis Techniques</li>
     <li>Quantum Cryptography</li>
    </ul>
  }
/>

<AccordionItem
  title="Threat Intelligence"
  bgColor="lightcyan"
  content={
    <ul>
      <li>Open Source Intelligence (OSINT)</li>
      <li>Cyber Threat Hunting</li>
      <li>Threat Intelligence Platforms (TIPs)</li>
    </ul>
  }
/>

<AccordionItem
  title="Regulatory Compliance and Data Privacy:"
  bgColor="lightcyan"
  content={
    <ul>
      <li>GDPR (General Data Protection Regulation)</li>
      <li>CCPA (California Consumer Privacy Act)</li>
      <li>Compliance Audits and Assessments</li>
    </ul>
  }
/>

<AccordionItem
  title="Security Awareness and Training"
  bgColor="lightcyan"
  content={
    <ul>
   <li>Phishing Awareness</li>
   <li>Social Engineering Techniques</li>
   <li>Creating a Security Culture</li>
    </ul>
  }
/>

        </div>
        
        {/* Add more AccordionColumns here */}
      </div>
    </div>
    </div>
  );
}

export default CCC;
