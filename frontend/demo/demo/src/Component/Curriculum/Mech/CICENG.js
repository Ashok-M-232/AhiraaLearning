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
function CICENG() {
  return (
    <div className='CMechBG'>
    <div className="curriculum">
      <h1 className="curriculum-heading">CURRICULUM</h1>
      <div className="accordion-container">
        <div className="accordion-column">
        <AccordionItem
  title="1. Introduction to Internal Combustion Engines"
  bgColor="lightcyan"
  content={
    <div>
      <ul>
        <li>Definition and Classification of IC Engines</li>
        <li>History and Evolution of IC Engines</li>
        <li>Importance and Applications of IC Engines in Transportation and Power Generation</li>
        <li>Basic Components and Working Principle of IC Engines</li>
      </ul>
    </div>
  }
/>

<AccordionItem
  title="2. Thermodynamics and Gas Dynamics Fundamentals"
  bgColor="lightcyan"
  content={
    <div>
      <ul>
        <li>Laws of Thermodynamics (First Law, Second Law)</li>
        <li>Ideal Gas Law and Specific Heat Ratio</li>
        <li>Thermodynamic Processes (Isentropic, Isobaric, Isochoric, etc.)</li>
        <li>Air-Fuel Ratio and Combustion Stoichiometry</li>
      </ul>
    </div>
  }
/>

<AccordionItem
  title="3. IC Engine Cycles"
  bgColor="lightcyan"
  content={
    <div>
      <ul>
        <li>Otto Cycle (Spark Ignition Engines)</li>
        <li>Diesel Cycle (Compression Ignition Engines)</li>
        <li>Dual Cycle and Actual Engine Cycles</li>
        <li>Comparison of Ideal and Actual Cycles</li>
      </ul>
    </div>
  }
/>

<AccordionItem
  title="4. Fuel and Air Induction Systems"
  bgColor="lightcyan"
  content={
    <div>
      <ul>
        <li>Fuel Injection Systems (Port Injection, Direct Injection)</li>
        <li>Carburetion Systems (Venturi, Float-Type)</li>
        <li>Air Induction Systems (Naturally Aspirated, Turbocharged, Supercharged)</li>
        <li>Intake Manifold Design and Tuning</li>
      </ul>
    </div>
  }
/>

<AccordionItem
  title="5. Combustion and Ignition Systems"
  bgColor="lightcyan"
  content={
    <div>
      <ul>
        <li>Combustion Process in IC Engines</li>
        <li>Ignition Systems (Spark Ignition, Compression Ignition)</li>
        <li>Ignition Timing and Spark Advance</li>
        <li>Combustion Chamber Design and Flame Propagation</li>
      </ul>
    </div>
  }
/>

<AccordionItem
  title="6. Engine Performance Parameters"
  bgColor="lightcyan"
  content={
    <div>
      <ul>
        <li>Engine Power and Torque</li>
        <li>Brake Mean Effective Pressure (BMEP)</li>
        <li>Engine Efficiency (Thermal Efficiency, Volumetric Efficiency)</li>
        <li>Engine Performance Testing and Measurement Techniques</li>
      </ul>
    </div>
  }
/>

        </div>

        
        <div className="accordion-column">
        
<AccordionItem
  title="7. Engine Cooling and Lubrication Systems"
  bgColor="lightcyan"
  content={
    <div>
      <ul>
        <li>Cooling System Components (Radiator, Water Pump, Thermostat)</li>
        <li>Types of Cooling Systems (Liquid Cooling, Air Cooling)</li>
        <li>Lubrication System Components (Oil Pump, Oil Filter, Oil Cooler)</li>
        <li>Lubrication Types and Properties</li>
      </ul>
    </div>
  }
/>

<AccordionItem
  title="8. Engine Exhaust and Emission Control"
  bgColor="lightcyan"
  content={
    <div>
      <ul>
        <li>Exhaust System Components (Exhaust Manifold, Catalytic Converter, Muffler)</li>
        <li>Exhaust Gas Recirculation (EGR) Systems</li>
        <li>Selective Catalytic Reduction (SCR) Systems</li>
        <li>Emission Control Technologies and Regulations</li>
      </ul>
    </div>
  }
/>

<AccordionItem
  title="9. Engine Friction and Wear"
  bgColor="lightcyan"
  content={
    <div>
      <ul>
        <li>Sources of Engine Friction</li>
        <li>Engine Friction Reduction Techniques</li>
        <li>Wear Mechanisms in IC Engines</li>
        <li>Lubrication Strategies for Friction Reduction and Wear Prevention</li>
      </ul>
    </div>
  }
/>

<AccordionItem
  title="10. Engine Performance Optimization and Tuning"
  bgColor="lightcyan"
  content={
    <div>
      <ul>
        <li>Engine Tuning Techniques (Camshaft Timing, Fuel Injection Mapping)</li>
        <li>Performance Modifications (Intake and Exhaust Upgrades, Turbocharging)</li>
        <li>Engine Dynamometer Testing and Tuning</li>
      </ul>
    </div>
  }
/>

<AccordionItem
  title="11. Advanced Engine Technologies"
  bgColor="lightcyan"
  content={
    <div>
      <ul>
        <li>Variable Valve Timing (VVT) and Variable Valve Lift (VVL)</li>
        <li>Cylinder Deactivation and Variable Displacement</li>
        <li>Homogeneous Charge Compression Ignition (HCCI)</li>
        <li>Hybrid Powertrains and Electrification</li>
      </ul>
    </div>
  }
/>

<AccordionItem
  title="12. Future Trends in IC Engines"
  bgColor="lightcyan"
  content={
    <div>
      <ul>
        <li>Alternative Fuels (Biofuels, Hydrogen, Natural Gas)</li>
        <li>Advanced Combustion Concepts (HCCI, Stratified Charge Compression Ignition)</li>
        <li>Engine Downsizing and Optimization for Efficiency</li>
        <li>Integration with Electric Powertrains and Hybrid Systems</li>
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

export default CICENG;
