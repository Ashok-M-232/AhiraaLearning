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
function CCAR() {
  return (
    <div className='CMechBG'>
    <div className="curriculum">
      <h1 className="curriculum-heading">CURRICULUM </h1>
      <div className="accordion-container">
        <div className="accordion-column">
        <AccordionItem
  title="1. Introduction to Car Design"
  bgColor="lightcyan"
  content={
    <div>
      <ul>
        <li>Overview of Automotive Design Process</li>
        <li>Importance of Car Design in the Automotive Industry</li>
        <li>Historical Evolution of Car Design</li>
        <li>Role of Aesthetics, Functionality, and Engineering in Car Design</li>
      </ul>
    </div>
  }
/>

<AccordionItem
  title="2. Design Fundamentals"
  bgColor="lightcyan"
  content={
    <div>
      <ul>
        <li>Elements of Design (Line, Shape, Form, Texture, Color)</li>
        <li>Principles of Design (Balance, Proportion, Harmony, Contrast, Emphasis)</li>
        <li>Ergonomics and Human Factors in Car Design</li>
        <li>Design Inspiration and Mood Boards</li>
      </ul>
    </div>
  }
/>

<AccordionItem
  title="3. Sketching and Rendering Techniques"
  bgColor="lightcyan"
  content={
    <div>
      <ul>
        <li>Freehand Sketching (Orthographic, Perspective, Thumbnail Sketching)</li>
        <li>Digital Sketching Tools (Adobe Photoshop, SketchBook, Procreate)</li>
        <li>Rendering Techniques (Markers, Digital Rendering, 3D Rendering)</li>
        <li>Presentation Techniques (Storyboarding, Digital Presentation Boards)</li>
      </ul>
    </div>
  }
/>

<AccordionItem
  title="4. Clay Modeling and Sculpting"
  bgColor="lightcyan"
  content={
    <div>
      <ul>
        <li>Introduction to Clay Modeling</li>
        <li>Clay Modeling Tools and Materials</li>
        <li>Clay Sculpting Techniques (Hand Sculpting, Digital Sculpting)</li>
        <li>Clay Modeling Process from Concept to Final Model</li>
      </ul>
    </div>
  }
/>

<AccordionItem
  title="5. Digital Modeling and CAD Software"
  bgColor="lightcyan"
  content={
    <div>
      <ul>
        <li>Introduction to Computer-Aided Design (CAD)</li>
        <li>CAD Software for Automotive Design (Autodesk Alias, Rhino, CATIA, etc.)</li>
        <li>Surface Modeling Techniques (Class-A Surfacing, NURBS Modeling)</li>
        <li>Parametric Modeling for Design Iterations</li>
      </ul>
    </div>
  }
/>

<AccordionItem
  title="6. Design Language and Brand Identity"
  bgColor="lightcyan"
  content={
    <div>
      <ul>
        <li>Understanding Design Languages (Fluidic, Geometric, Organic, etc.)</li>
        <li>Establishing Brand Identity through Design</li>
        <li>Design Elements Specific to Different Automotive Brands</li>
        <li>Case Studies of Iconic Design Languages (BMW, Mercedes-Benz, Ferrari, etc.)</li>
      </ul>
    </div>
  }
/>


        </div>

        
        <div className="accordion-column">
        
<AccordionItem
  title="7. Packaging and Interior Design"
  bgColor="lightcyan"
  content={
    <div>
      <ul>
        <li>Vehicle Packaging Considerations (Wheelbase, Seating Layout, Cargo Space)</li>
        <li>Interior Design Principles (Driver-Centric Design, Ergonomic Layout)</li>
        <li>Materials and Finishes for Automotive Interiors</li>
        <li>Infotainment and Human-Machine Interface (HMI) Design</li>
      </ul>
    </div>
  }
/>

<AccordionItem
  title="8. Exterior Design Development"
  bgColor="lightcyan"
  content={
    <div>
      <ul>
        <li>Concept Sketching and Ideation</li>
        <li>Clay Modeling for Exterior Surfaces</li>
        <li>Digital Sculpting and Surface Refinement</li>
        <li>Aerodynamics and Wind Tunnel Testing</li>
      </ul>
    </div>
  }
/>

<AccordionItem
  title="9. Safety and Regulatory Compliance"
  bgColor="lightcyan"
  content={
    <div>
      <ul>
        <li>Designing for Crashworthiness and Impact Protection</li>
        <li>Compliance with Safety Standards (NCAP, FMVSS, Euro NCAP, etc.)</li>
        <li>Pedestrian Safety Considerations</li>
        <li>Passive and Active Safety Features</li>
      </ul>
    </div>
  }
/>

<AccordionItem
  title="10. Prototype Development and Testing"
  bgColor="lightcyan"
  content={
    <div>
      <ul>
        <li>Prototyping Techniques (Rapid Prototyping, CNC Machining, 3D Printing)</li>
        <li>Virtual Prototyping and Digital Mockup (DMU)</li>
        <li>Physical Prototype Testing and Evaluation</li>
        <li>Iterative Design Process based on Feedback</li>
      </ul>
    </div>
  }
/>

<AccordionItem
  title="11. Environmental Sustainability and Efficiency"
  bgColor="lightcyan"
  content={
    <div>
      <ul>
        <li>Designing for Fuel Efficiency and Emissions Reduction</li>
        <li>Lightweighting Strategies and Material Selection</li>
        <li>Sustainable Design Practices (Recyclability, Eco-friendly Materials)</li>
        <li>Electric and Hybrid Vehicle Design Considerations</li>
      </ul>
    </div>
  }
/>

<AccordionItem
  title="12. Future Trends and Innovations in Car Design"
  bgColor="lightcyan"
  content={
    <div>
      <ul>
        <li>Autonomous Vehicle Design and Interior Concepts</li>
        <li>Connected Car Design (Internet of Things, Infotainment Systems)</li>
        <li>Urban Mobility Solutions and Micro-Mobility Design</li>
        <li>Emerging Technologies (Augmented Reality, Biometrics, AI) in Car Design</li>
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

export default CCAR;
