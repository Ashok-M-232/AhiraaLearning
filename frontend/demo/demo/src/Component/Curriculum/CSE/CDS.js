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
function CDS() {
  return (
    <div className='CBG'>
    <div className="curriculum">
      <h1 className="curriculum-heading">CURRICULUM</h1>
      <div className="accordion-container">
        <div className="accordion-column">
        
        <AccordionItem
  title="1. Introduction to Cybersecurity"
  bgColor="lightcyan"
  content={
    <div>
      <ul>
        <li>What is Cybersecurity?</li>
        <li>Importance of Cybersecurity</li>
        <li>Threat Landscape</li>
        <li>Cybersecurity Frameworks (NIST, ISO/IEC 27001, CIS)</li>
      </ul>
    </div>
  }
/>

<AccordionItem
  title="2. Information Security Fundamentals"
  bgColor="lightcyan"
  content={
    <div>
      <ul>
        <li>Confidentiality, Integrity, and Availability (CIA Triad)</li>
        <li>Authentication and Authorization</li>
        <li>Encryption Techniques</li>
        <li>Access Control Models (RBAC, ABAC)</li>
      </ul>
    </div>
  }
/>

<AccordionItem
  title="3. Network Security"
  bgColor="lightcyan"
  content={
    <div>
      <ul>
        <li>Firewall Technologies</li>
        <li>Intrusion Detection and Prevention Systems (IDPS)</li>
        <li>Virtual Private Networks (VPNs)</li>
        <li>Secure Socket Layer (SSL) and Transport Layer Security (TLS)</li>
        <li>Network Segmentation</li>
      </ul>
    </div>
  }
/>

<AccordionItem
  title="4. Endpoint Security"
  bgColor="lightcyan"
  content={
    <div>
      <ul>
        <li>Antivirus and Antimalware Solutions</li>
        <li>Host-based Firewalls</li>
        <li>Endpoint Detection and Response (EDR)</li>
        <li>Mobile Device Management (MDM)</li>
        <li>Patch Management</li>
      </ul>
    </div>
  }
/>

<AccordionItem
  title="5. Identity and Access Management (IAM)"
  bgColor="lightcyan"
  content={
    <div>
      <ul>
        <li>Single Sign-On (SSO)</li>
        <li>Multi-Factor Authentication (MFA)</li>
        <li>Identity Federation</li>
        <li>Privileged Access Management (PAM)</li>
        <li>Identity Governance and Administration (IGA)</li>
      </ul>
    </div>
  }
/>

<AccordionItem
  title="6. Security Operations and Incident Response"
  bgColor="lightcyan"
  content={
    <div>
      <ul>
        <li>Security Information and Event Management (SIEM)</li>
        <li>Security Orchestration, Automation, and Response (SOAR)</li>
        <li>Incident Response Planning</li>
        <li>Threat Hunting</li>
        <li>Digital Forensics</li>
      </ul>
    </div>
  }
/>



        </div>
        <div className="accordion-column">
        <AccordionItem
  title="7. Web Security"
  bgColor="lightcyan"
  content={
    <div>
      <ul>
        <li>Secure Coding Practices</li>
        <li>Web Application Firewalls (WAF)</li>
        <li>Secure Development Lifecycle (SDL)</li>
        <li>Cross-Site Scripting (XSS) and SQL Injection</li>
        <li>Content Security Policy (CSP)</li>
      </ul>
    </div>
  }
/>

<AccordionItem
  title="8. Cloud Security"
  bgColor="lightcyan"
  content={
    <div>
      <ul>
        <li>Shared Responsibility Model</li>
        <li>Identity and Access Management in the Cloud</li>
        <li>Data Encryption and Key Management</li>
        <li>Security Monitoring and Logging</li>
        <li>Compliance in the Cloud</li>
      </ul>
    </div>
  }
/>

<AccordionItem
  title="9. Cryptography and Cryptanalysis"
  bgColor="lightcyan"
  content={
    <div>
      <ul>
        <li>Cryptographic Algorithms (Symmetric and Asymmetric)</li>
        <li>Digital Signatures</li>
        <li>Public Key Infrastructure (PKI)</li>
        <li>Cryptanalysis Techniques</li>
        <li>Quantum Cryptography</li>
      </ul>
    </div>
  }
/>

<AccordionItem
  title="10. Threat Intelligence"
  bgColor="lightcyan"
  content={
    <div>
      <ul>
        <li>Understanding Threat Actors and TTPs (Tactics, Techniques, and Procedures)</li>
        <li>Threat Intelligence Platforms (TIPs)</li>
        <li>Open Source Intelligence (OSINT)</li>
        <li>Threat Feeds and Indicators of Compromise (IOCs)</li>
        <li>Cyber Threat Hunting</li>
      </ul>
    </div>
  }
/>

<AccordionItem
  title="11. Security Awareness and Training"
  bgColor="lightcyan"
  content={
    <div>
      <ul>
        <li>Employee Security Training Programs</li>
        <li>Phishing Awareness</li>
        <li>Social Engineering Techniques</li>
        <li>Creating a Security Culture</li>
        <li>Human Factors in Cybersecurity</li>
      </ul>
    </div>
  }
/>

<AccordionItem
  title="12. Regulatory Compliance and Data Privacy"
  bgColor="lightcyan"
  content={
    <div>
      <ul>
        <li>GDPR (General Data Protection Regulation)</li>
        <li>HIPAA (Health Insurance Portability and Accountability Act)</li>
        <li>PCI DSS (Payment Card Industry Data Security Standard)</li>
        <li>CCPA (California Consumer Privacy Act)</li>
        <li>Compliance Audits and Assessments</li>
      </ul>
    </div>
  }
/>

        </div>
      </div>
    </div>
    </div>
  );
}

export default CDS;
