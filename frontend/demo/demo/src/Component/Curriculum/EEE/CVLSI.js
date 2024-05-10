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
function CVLSI() {
  return (
    <div className='EEEBG'>
    <div className="curriculum">
      <h1 className="curriculum-heading">CURRICULUM</h1>
      <div className="accordion-container">
        <div className="accordion-column">
        <AccordionItem
  title="1. Introduction to VLSI"
  bgColor="lightcyan"
  content={
    <div>
      <ul>
        <li>Definition and Importance of VLSI</li>
        <li>Evolution and Milestones in VLSI Technology</li>
        <li>VLSI Design Flow Overview</li>
        <li>Applications and Impact of VLSI in Various Industries</li>
      </ul>
    </div>
  }
/>

<AccordionItem
  title="2. Semiconductor Fundamentals"
  bgColor="lightcyan"
  content={
    <div>
      <ul>
        <li>Semiconductor Basics (Intrinsic and Extrinsic Semiconductors)</li>
        <li>Semiconductor Materials (Silicon, Gallium Arsenide, etc.)</li>
        <li>Semiconductor Manufacturing Processes (Crystal Growth, Wafer Fabrication)</li>
      </ul>
    </div>
  }
/>

<AccordionItem
  title="3. VLSI Design Process"
  bgColor="lightcyan"
  content={
    <div>
      <ul>
        <li>VLSI Design Levels (System, Architecture, Logic, Circuit, Layout)</li>
        <li>Design Abstraction and Hierarchy</li>
        <li>Register-Transfer Level (RTL) Design</li>
        <li>Design Verification Techniques</li>
      </ul>
    </div>
  }
/>

<AccordionItem
  title="4. Digital VLSI Design"
  bgColor="lightcyan"
  content={
    <div>
      <ul>
        <li>Combinational Logic Design</li>
        <li>Sequential Logic Design (Flip-flops, Latches, Registers)</li>
        <li>Finite State Machine (FSM) Design</li>
        <li>Design Optimization Techniques (Area, Power, Delay)</li>
      </ul>
    </div>
  }
/>

<AccordionItem
  title="5. Analog VLSI Design"
  bgColor="lightcyan"
  content={
    <div>
      <ul>
        <li>Basic Analog Building Blocks (Op-amps, Comparators, Filters)</li>
        <li>Analog Circuit Design Techniques (Biasing, Amplification, Feedback)</li>
        <li>Analog Layout Design Considerations</li>
        <li>Mixed-Signal Design and Integration</li>
      </ul>
    </div>
  }
/>

<AccordionItem
  title="6. VLSI Design Automation Tools"
  bgColor="lightcyan"
  content={
    <div>
      <ul>
        <li>Electronic Design Automation (EDA) Software</li>
        <li>VLSI Design Tools (Cadence, Synopsys, Mentor Graphics, etc.)</li>
        <li>RTL Synthesis and Logic Optimization</li>
        <li>Place-and-Route Tools for Physical Design</li>
      </ul>
    </div>
  }
/>


        </div>

        
        <div className="accordion-column">
        
<AccordionItem
  title="7. VLSI Testing and Verification"
  bgColor="lightcyan"
  content={
    <div>
      <ul>
        <li>Design for Testability (DFT) Techniques</li>
        <li>Built-In Self-Test (BIST) Methods</li>
        <li>Automatic Test Pattern Generation (ATPG)</li>
        <li>Fault Modeling and Simulation</li>
      </ul>
    </div>
  }
/>

<AccordionItem
  title="8. VLSI Fabrication Process"
  bgColor="lightcyan"
  content={
    <div>
      <ul>
        <li>Semiconductor Manufacturing Processes (Lithography, Etching, Deposition)</li>
        <li>CMOS Fabrication Technology</li>
        <li>Photomask Design and Mask Manufacturing</li>
        <li>Yield Enhancement Techniques</li>
      </ul>
    </div>
  }
/>

<AccordionItem
  title="9. Advanced VLSI Topics"
  bgColor="lightcyan"
  content={
    <div>
      <ul>
        <li>Advanced CMOS Technologies (FinFET, FD-SOI, etc.)</li>
        <li>Low-Power VLSI Design Techniques</li>
        <li>VLSI for Emerging Technologies (Quantum Computing, Neuromorphic Computing)</li>
        <li>Silicon Photonics and Optical Interconnects</li>
      </ul>
    </div>
  }
/>

<AccordionItem
  title="10. VLSI Applications and Case Studies"
  bgColor="lightcyan"
  content={
    <div>
      <ul>
        <li>Digital Signal Processing (DSP) Chips</li>
        <li>Microprocessors and Microcontrollers</li>
        <li>Application-Specific Integrated Circuits (ASICs)</li>
        <li>System-on-Chip (SoC) Designs</li>
      </ul>
    </div>
  }
/>

<AccordionItem
  title="11. VLSI Standards and Intellectual Property (IP)"
  bgColor="lightcyan"
  content={
    <div>
      <ul>
        <li>Semiconductor Industry Standards (IEEE, ISO, etc.)</li>
        <li>IP Core Integration and Reuse</li>
        <li>Design for Intellectual Property Protection (IP Protection, Encryption)</li>
      </ul>
    </div>
  }
/>

<AccordionItem
  title="12. Future Trends in VLSI"
  bgColor="lightcyan"
  content={
    <div>
      <ul>
        <li>Moore's Law and Beyond</li>
        <li>Three-Dimensional Integrated Circuits (3D ICs)</li>
        <li>Neuromorphic Computing and Brain-Inspired Architectures</li>
        <li>Quantum Computing and Quantum VLSI</li>
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

export default CVLSI;
