import React, { useState } from 'react';
import './AccordionMech.css'; // Import external CSS file for styling
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
    <div className='CMechBG'>
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
        <li>Importance of HEVs in Sustainable Transportation</li>
        <li>Basic Components and Architecture of HEVs</li>
        <li>Advantages and Challenges of HEVs compared to Conventional Vehicles</li>
      </ul>
    </div>
  }
/>

<AccordionItem
  title="2. Fundamentals of Electric Propulsion Systems"
  bgColor="lightcyan"
  content={
    <div>
      <ul>
        <li>Electric Motors and Generators (AC Induction, Permanent Magnet, etc.)</li>
        <li>Power Electronics (Inverters, Converters, Controllers)</li>
        <li>Battery Technologies (Lithium-ion, Nickel-metal Hydride, etc.)</li>
        <li>Energy Storage and Management Systems</li>
      </ul>
    </div>
  }
/>

<AccordionItem
  title="3. Hybrid Powertrain Configurations"
  bgColor="lightcyan"
  content={
    <div>
      <ul>
        <li>Series Hybrid Configuration</li>
        <li>Parallel Hybrid Configuration</li>
        <li>Series-Parallel Hybrid Configuration</li>
        <li>Power Split Hybrid Configuration</li>
      </ul>
    </div>
  }
/>

<AccordionItem
  title="4. Regenerative Braking and Energy Recovery"
  bgColor="lightcyan"
  content={
    <div>
      <ul>
        <li>Principles of Regenerative Braking</li>
        <li>Energy Conversion and Storage during Braking</li>
        <li>Regenerative Braking System Components</li>
        <li>Efficiency and Effectiveness of Regenerative Braking</li>
      </ul>
    </div>
  }
/>

<AccordionItem
  title="5. Engine Technologies and Integration"
  bgColor="lightcyan"
  content={
    <div>
      <ul>
        <li>Internal Combustion Engine Types (Gasoline, Diesel, etc.)</li>
        <li>Engine Start-stop Systems and Idle-off Features</li>
        <li>Engine Control Strategies for Hybrid Operation</li>
        <li>Powertrain Architecture and Component Integration</li>
      </ul>
    </div>
  }
/>

<AccordionItem
  title="6. Energy Management Strategies"
  bgColor="lightcyan"
  content={
    <div>
      <ul>
        <li>Hybrid Control Systems and Algorithms</li>
        <li>Energy Flow Management between Electric and Internal Combustion Power Sources</li>
        <li>Optimal Power Split Control Strategies</li>
        <li>Eco-driving Techniques for Maximizing Fuel Efficiency</li>
      </ul>
    </div>
  }
/>


        </div>

        
        <div className="accordion-column">
        
<AccordionItem
  title="7. Vehicle Dynamics and Performance"
  bgColor="lightcyan"
  content={
    <div>
      <ul>
        <li>Hybrid Vehicle Acceleration and Braking Dynamics</li>
        <li>Handling Characteristics and Stability Control</li>
        <li>Powertrain Response and Driveability</li>
        <li>Comparison of HEVs with Conventional Vehicles in terms of Performance</li>
      </ul>
    </div>
  }
/>

<AccordionItem
  title="8. Battery Management and Thermal Control"
  bgColor="lightcyan"
  content={
    <div>
      <ul>
        <li>Battery Charging and Discharging Control</li>
        <li>State-of-Charge (SOC) and State-of-Health (SOH) Monitoring</li>
        <li>Battery Thermal Management Systems</li>
        <li>Battery Safety and Reliability Considerations</li>
      </ul>
    </div>
  }
/>

<AccordionItem
  title="9. Hybrid Vehicle Design and Optimization"
  bgColor="lightcyan"
  content={
    <div>
      <ul>
        <li>Vehicle Packaging and Layout Considerations</li>
        <li>Weight Reduction Techniques and Material Selection</li>
        <li>Aerodynamic Optimization for Improved Efficiency</li>
        <li>Hybrid Vehicle Simulation and Modeling Tools</li>
      </ul>
    </div>
  }
/>

<AccordionItem
  title="10. Environmental Impact and Lifecycle Analysis"
  bgColor="lightcyan"
  content={
    <div>
      <ul>
        <li>Emissions Reduction and Environmental Benefits of HEVs</li>
        <li>Lifecycle Assessment of HEVs compared to Conventional Vehicles</li>
        <li>Sustainability Metrics and Greenhouse Gas Emissions Reduction</li>
      </ul>
    </div>
  }
/>

<AccordionItem
  title="11. Market Trends and Future Developments"
  bgColor="lightcyan"
  content={
    <div>
      <ul>
        <li>Market Adoption Trends and Consumer Acceptance</li>
        <li>Technological Innovations and Research Areas (Plug-in HEVs, Fuel Cell HEVs, etc.)</li>
        <li>Government Regulations and Incentives Promoting HEV Adoption</li>
        <li>Integration of HEVs with Autonomous and Connected Vehicle Technologies</li>
      </ul>
    </div>
  }
/>

<AccordionItem
  title="12. Case Studies and Real-world Applications"
  bgColor="lightcyan"
  content={
    <div>
      <ul>
        <li>Examples of HEV Models from Various Manufacturers</li>
        <li>Case Studies of Successful HEV Implementation in Different Industries</li>
        <li>Challenges and Lessons Learned from HEV Development and Deployment</li>
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
