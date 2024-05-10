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
function CCAD1() {
  return (
    <div className='CCAD'>
    <div className="curriculum">
      <h1 className="curriculum-heading">CURRICULUM</h1>
      <div className="accordion-container">
        <div className="accordion-column">
        <AccordionItem
  title="Introduction to AutoCAD for Civil Engineering"
  bgColor="lightcyan"
  content={
    <ul className='ulbg'>
      <li>Overview of AutoCAD software</li>
      <li>Importance in civil engineering projects</li>
      <li>Applications in various civil engineering disciplines</li>
      <li>Basic interface and navigation</li>
    </ul>
  }
/>

<AccordionItem
  title="Drawing Setup and Management"
  bgColor="lightcyan"
  content={
    <ul className='ulbg'>
      <li>Creating new drawings</li>
      <li>Managing drawing units and scales</li>
      <li>Setting up templates for different project types</li>
      <li>File management and organization</li>
    </ul>
  }
/>

<AccordionItem
  title="Basic Drawing and Editing Tools"
  bgColor="lightcyan"
  content={
    <ul className='ulbg'>
      <li>Drawing lines, arcs, circles, and polylines</li>
      <li>Editing commands: move, copy, rotate, mirror, and scale</li>
      <li>Using grips for quick editing</li>
      <li>Exploring advanced editing techniques</li>
    </ul>
  }
/>

<AccordionItem
  title="Geometric Construction and Precision Drawing"
  bgColor="lightcyan"
  content={
    <ul className='ulbg'>
      <li>Utilizing object snaps and tracking</li>
      <li>Ortho and polar modes for precision drawing</li>
      <li>Constructing accurate geometric shapes</li>
      <li>Dimensioning tools for precise measurements</li>
    </ul>
  }
/>

<AccordionItem
  title="Annotation and Dimensioning"
  bgColor="lightcyan"
  content={
    <ul className='ulbg'>
      <li>Adding text and annotations to drawings</li>
      <li>Creating and editing dimensions</li>
      <li>Using dimension styles for consistency</li>
      <li>Annotative objects for multiple scales</li>
    </ul>
  }
/>



        </div>

        
        <div className="accordion-column">
        
<AccordionItem
  title="Layer Management and Properties"
  bgColor="lightcyan"
  content={
    <ul className='ulbg'>
      <li>Understanding layers and their properties</li>
      <li>Organizing drawing elements into layers</li>
      <li>Assigning colors, linetypes, and lineweights</li>
      <li>Layer filters and overrides</li>
    </ul>
  }
/>

<AccordionItem
  title="Blocks and Attributes"
  bgColor="lightcyan"
  content={
    <ul className='ulbg'>
      <li>Creating and inserting blocks</li>
      <li>Defining attributes for dynamic information</li>
      <li>Editing block attributes</li>
      <li>Managing and reusing block libraries</li>
    </ul>
  }
/>

<AccordionItem
  title="Advanced Drawing and Editing Techniques"
  bgColor="lightcyan"
  content={
    <ul className='ulbg'>
      <li>Working with splines and curves</li>
      <li>Creating and editing complex objects</li>
      <li>Exploring grips and editing shortcuts</li>
      <li>Using advanced modify commands</li>
    </ul>
  }
/>

<AccordionItem
  title="Hatching and Gradients"
  bgColor="lightcyan"
  content={
    <ul className='ulbg'>
      <li>Applying hatch patterns to represent materials</li>
      <li>Creating custom hatch patterns</li>
      <li>Using gradients for visual representation</li>
      <li>Editing hatch and gradient properties</li>
    </ul>
  }
/>

<AccordionItem
  title="Introduction to 3D Modeling"
  bgColor="lightcyan"
  content={
    <ul className='ulbg'>
      <li>Basic concepts of 3D modeling</li>
      <li>Creating simple 3D objects</li>
      <li>Editing 3D objects</li>
      <li>Viewing and navigating in 3D space</li>
    </ul>
  }
/>

        </div>


        
      </div>
    </div>
    </div>
  );
}

export default CCAD1;
