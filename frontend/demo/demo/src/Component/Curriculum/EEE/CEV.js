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
function CEV() {
  return (
    <div className='EEEBG'>
    <div className="curriculum">
      <h1 className="curriculum-heading">CURRICULUM</h1>
      <div className="accordion-container">
        <div className="accordion-column">
        <AccordionItem
  title="1. Introduction to Hybrid Electric Vehicles (HEVs)"
  bgColor="lightcyan"
  content={
    <div>
      <ul>
        <li>Definition and Concept of HEVs</li>
        <li>History and Evolution of Hybrid Vehicles</li>
        <li>Types of Hybrid Electric Vehicles (Parallel, Series, Series-Parallel)</li>
        <li>Advantages and Challenges of HEVs</li>
      </ul>
    </div>
  }
/>

<AccordionItem
  title="2. Hybrid Vehicle Architectures"
  bgColor="lightcyan"
  content={
    <div>
      <ul>
        <li>Overview of Powertrain Components (Internal Combustion Engine, Electric Motor, Battery, Transmission)</li>
        <li>Parallel Hybrid Configuration</li>
        <li>Series Hybrid Configuration</li>
        <li>Power Split Hybrid Configuration</li>
      </ul>
    </div>
  }
/>

<AccordionItem
  title="3. Energy Management Strategies"
  bgColor="lightcyan"
  content={
    <div>
      <ul>
        <li>Regenerative Braking and Energy Recovery</li>
        <li>Engine Control Strategies (Start-stop Systems, Idle-off)</li>
        <li>Electric Motor Control and Power Distribution</li>
        <li>Hybrid Powertrain Control Algorithms</li>
      </ul>
    </div>
  }
/>

<AccordionItem
  title="4. Battery Technologies for HEVs"
  bgColor="lightcyan"
  content={
    <div>
      <ul>
        <li>Types of Batteries Used in HEVs (NiMH, Li-ion, Lead-Acid)</li>
        <li>Battery Management Systems (BMS)</li>
        <li>Battery Charging and Discharging Characteristics</li>
        <li>Battery Life Cycle and Degradation</li>
      </ul>
    </div>
  }
/>

<AccordionItem
  title="5. Engine Technologies and Fuel Efficiency"
  bgColor="lightcyan"
  content={
    <div>
      <ul>
        <li>Internal Combustion Engine Technologies (Atkinson Cycle, Miller Cycle)</li>
        <li>Variable Valve Timing and Cylinder Deactivation</li>
        <li>Fuel Injection Systems and Combustion Optimization</li>
        <li>Thermal Management Systems for Engine Efficiency</li>
      </ul>
    </div>
  }
/>


        </div>

        
        <div className="accordion-column">
        
<AccordionItem
  title="6. Electric Motor and Drive Systems"
  bgColor="lightcyan"
  content={
    <div>
      <ul>
        <li>Types of Electric Motors Used in HEVs (DC, AC Induction, Permanent Magnet Synchronous Motor)</li>
        <li>Motor Controllers and Inverter Systems</li>
        <li>Electric Drive Modes (EV Mode, Hybrid Mode)</li>
        <li>Motor Efficiency and Torque Characteristics</li>
      </ul>
    </div>
  }
/>

<AccordionItem
  title="7. Regulatory Standards and Emissions"
  bgColor="lightcyan"
  content={
    <div>
      <ul>
        <li>Emission Regulations and Standards for HEVs</li>
        <li>Environmental Impact and Greenhouse Gas Emissions Reduction</li>
        <li>Fuel Economy Testing and Certification Procedures</li>
        <li>Incentives and Policies Promoting HEV Adoption</li>
      </ul>
    </div>
  }
/>

<AccordionItem
  title="8. Hybrid Vehicle Dynamics and Performance"
  bgColor="lightcyan"
  content={
    <div>
      <ul>
        <li>Vehicle Dynamics in Hybrid Mode vs. Electric Mode</li>
        <li>Acceleration, Braking, and Handling Characteristics</li>
        <li>Energy Efficiency Metrics (MPG, kWh/100 miles, CO2 emissions)</li>
      </ul>
    </div>
  }
/>

<AccordionItem
  title="9. Charging Infrastructure and Plug-in Hybrid Electric Vehicles (PHEVs)"
  bgColor="lightcyan"
  content={
    <div>
      <ul>
        <li>Overview of Charging Infrastructure (Level 1, Level 2, DC Fast Charging)</li>
        <li>Plug-in Hybrid Vehicle Architecture</li>
        <li>Charging Station Standards and Compatibility</li>
        <li>Battery Charging Strategies for PHEVs</li>
      </ul>
    </div>
  }
/>

<AccordionItem
  title="10. Market Trends and Future of HEVs"
  bgColor="lightcyan"
  content={
    <div>
      <ul>
        <li>Market Analysis and Adoption Trends</li>
        <li>Technological Innovations and Research Areas (Fuel Cell HEVs, Range Extenders)</li>
        <li>Integration with Smart Grids and Vehicle-to-Grid (V2G) Technologies</li>
        <li>Future Challenges and Opportunities in the HEV Industry</li>
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

export default CEV;
