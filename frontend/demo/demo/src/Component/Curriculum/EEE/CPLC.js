import React, { useState } from 'react';
import './Accordion1.css'; // Import external CSS file for styling
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
function CPLC() {
  return (
    <div className='EEEBG'>
    <div className="curriculum">
      <h1 className="curriculum-heading">CURRICULUM</h1>
      <div className="accordion-container">
        <div className="accordion-column">
        <AccordionItem
  title="1. Introduction to PLCs"
  bgColor="lightcyan"
  content={
    <div>
      <ul>
        <li>Definition and Purpose of PLCs</li>
        <li>History and Evolution of PLCs</li>
        <li>Advantages of PLCs over Traditional Control Systems</li>
        <li>Applications and Industries Using PLCs</li>
      </ul>
    </div>
  }
/>

<AccordionItem
  title="2. PLC Hardware Components"
  bgColor="lightcyan"
  content={
    <div>
      <ul>
        <li>Central Processing Unit (CPU)</li>
        <li>Input and Output Modules (I/O Modules)</li>
        <li>Power Supply Unit (PSU)</li>
        <li>Communication Interfaces (Ethernet, Serial, USB)</li>
      </ul>
    </div>
  }
/>

<AccordionItem
  title="3. PLC Programming Languages"
  bgColor="lightcyan"
  content={
    <div>
      <ul>
        <li>Ladder Logic (LAD)</li>
        <li>Function Block Diagram (FBD)</li>
        <li>Structured Text (ST)</li>
        <li>Sequential Function Chart (SFC)</li>
      </ul>
    </div>
  }
/>

<AccordionItem
  title="4. PLC Programming Software"
  bgColor="lightcyan"
  content={
    <div>
      <ul>
        <li>Overview of PLC Programming Software (Siemens TIA Portal, Allen-Bradley RSLogix, etc.)</li>
        <li>PLC Simulation and Emulation Tools</li>
        <li>Online and Offline Programming Modes</li>
        <li>Program Download and Monitoring</li>
      </ul>
    </div>
  }
/>

<AccordionItem
  title="5. PLC Operation Modes"
  bgColor="lightcyan"
  content={
    <div>
      <ul>
        <li>Program Mode</li>
        <li>Run Mode</li>
        <li>Stop Mode</li>
        <li>Fault Mode</li>
      </ul>
    </div>
  }
/>

<AccordionItem
  title="6. PLC Input/Output (I/O) Configuration"
  bgColor="lightcyan"
  content={
    <div>
      <ul>
        <li>Digital Inputs and Outputs</li>
        <li>Analog Inputs and Outputs</li>
        <li>Specialty Modules (High-Speed Counters, Analog Modules, etc.)</li>
        <li>Wiring and Terminations</li>
      </ul>
    </div>
  }
/>


        </div>

        
        <div className="accordion-column">
        
<AccordionItem
  title="7. PLC Networking and Communication"
  bgColor="lightcyan"
  content={
    <div>
      <ul>
        <li>Industrial Communication Protocols (Modbus, Profibus, Profinet, Ethernet/IP, etc.)</li>
        <li>PLC Network Topologies (Star, Bus, Ring)</li>
        <li>Remote I/O and Distributed Control Systems (DCS)</li>
      </ul>
    </div>
  }
/>

<AccordionItem
  title="8. PLC Troubleshooting and Maintenance"
  bgColor="lightcyan"
  content={
    <div>
      <ul>
        <li>Troubleshooting Techniques (Online Diagnostics, Status LEDs, Error Codes)</li>
        <li>PLC Backup and Restore Procedures</li>
        <li>Preventive Maintenance of PLC Hardware and Software</li>
        <li>PLC Documentation and System Documentation</li>
      </ul>
    </div>
  }
/>

<AccordionItem
  title="9. Advanced PLC Functions"
  bgColor="lightcyan"
  content={
    <div>
      <ul>
        <li>Timers and Counters</li>
        <li>Arithmetic and Logical Operations</li>
        <li>Math Functions and Data Manipulation</li>
        <li>Sequencers and Program Control Instructions</li>
      </ul>
    </div>
  }
/>

<AccordionItem
  title="10. PLC Applications and Case Studies"
  bgColor="lightcyan"
  content={
    <div>
      <ul>
        <li>Manufacturing Automation (Assembly Lines, Packaging Machines)</li>
        <li>Process Control (Chemical Plants, Water Treatment Facilities)</li>
        <li>Building Automation (HVAC Systems, Lighting Control)</li>
        <li>Automotive Industry (Robotic Assembly Cells, Test Stands)</li>
      </ul>
    </div>
  }
/>

<AccordionItem
  title="11. PLC Safety and Standards"
  bgColor="lightcyan"
  content={
    <div>
      <ul>
        <li>Safety PLCs and Safety Functions</li>
        <li>Compliance with Safety Standards (IEC 61508, IEC 61131, etc.)</li>
        <li>Safety Interlock Systems and Emergency Stop Circuits</li>
      </ul>
    </div>
  }
/>

<AccordionItem
  title="12. Future Trends in PLC Technology"
  bgColor="lightcyan"
  content={
    <div>
      <ul>
        <li>Integration with IoT and Industry 4.0</li>
        <li>Edge Computing and Cloud Connectivity</li>
        <li>Cybersecurity for Industrial Control Systems</li>
        <li>Evolution of PLCs in Smart Manufacturing and Digital Transformation</li>
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

export default CPLC;
