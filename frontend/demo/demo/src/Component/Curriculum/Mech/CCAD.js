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
function CCAD() {
  return (
    <div className='CMechBG'>
    <div className="curriculum">
      <h1 className="curriculum-heading">CURRICULUM</h1>
      <div className="accordion-container">
        <div className="accordion-column">
        <AccordionItem
  title="1. Introduction to AutoCAD"
  bgColor="lightcyan"
  content={
    <div>
      <ul>
        <li>Overview of Computer-Aided Design (CAD)</li>
        <li>History and Evolution of AutoCAD</li>
        <li>Importance and Applications of AutoCAD in Mechanical Engineering</li>
        <li>Basic Interface and Navigation in AutoCAD</li>
      </ul>
    </div>
  }
/>

<AccordionItem
  title="2. Drawing Setup and Configuration"
  bgColor="lightcyan"
  content={
    <div>
      <ul>
        <li>Creating New Drawings and Templates</li>
        <li>Drawing Units and Scales</li>
        <li>Setting up Layers, Linetypes, and Colors</li>
        <li>Working with Model Space and Paper Space</li>
      </ul>
    </div>
  }
/>

<AccordionItem
  title="3. Basic Drawing and Editing Commands"
  bgColor="lightcyan"
  content={
    <div>
      <ul>
        <li>Drawing Lines, Circles, Arcs, and Polylines</li>
        <li>Modifying Objects (Move, Copy, Rotate, Scale)</li>
        <li>Editing Commands (Trim, Extend, Fillet, Chamfer)</li>
        <li>Creating and Editing Text and Dimensions</li>
      </ul>
    </div>
  }
/>

<AccordionItem
  title="4. Advanced Drawing Techniques"
  bgColor="lightcyan"
  content={
    <div>
      <ul>
        <li>Construction Lines and Guidelines</li>
        <li>Blocks and Dynamic Blocks</li>
        <li>Attributes and Attribute Extraction</li>
        <li>External References (Xrefs) and Data Linking</li>
      </ul>
    </div>
  }
/>

<AccordionItem
  title="5. Dimensioning and Annotation"
  bgColor="lightcyan"
  content={
    <div>
      <ul>
        <li>Dimension Styles and Settings</li>
        <li>Linear, Angular, and Radial Dimensions</li>
        <li>Leaders and Multileaders</li>
        <li>Annotations and Notes</li>
      </ul>
    </div>
  }
/>

<AccordionItem
  title="6. Geometric Construction and Constraints"
  bgColor="lightcyan"
  content={
    <div>
      <ul>
        <li>Using Geometric Constraints (Coincident, Parallel, Perpendicular, etc.)</li>
        <li>Applying Dimensional Constraints</li>
        <li>Parametric Drawing Techniques</li>
      </ul>
    </div>
  }
/>


        </div>

        
        <div className="accordion-column">
        
<AccordionItem
  title="7. Isometric and 3D Modeling"
  bgColor="lightcyan"
  content={
    <div>
      <ul>
        <li>Isometric Drawing Techniques</li>
        <li>Creating Basic 3D Objects (Extrude, Revolve, Loft)</li>
        <li>Editing 3D Models (Move, Rotate, Scale)</li>
        <li>3D Solid Modeling Tools and Commands</li>
      </ul>
    </div>
  }
/>

<AccordionItem
  title="8. Visualization and Rendering"
  bgColor="lightcyan"
  content={
    <div>
      <ul>
        <li>Applying Materials and Textures</li>
        <li>Adding Lights and Cameras</li>
        <li>Rendering Options and Settings</li>
        <li>Post-Processing Effects</li>
      </ul>
    </div>
  }
/>

<AccordionItem
  title="9. Mechanical Drawing Standards"
  bgColor="lightcyan"
  content={
    <div>
      <ul>
        <li>Understanding Mechanical Drawing Standards (ASME Y14.5, ISO 128, etc.)</li>
        <li>Dimensioning and Tolerancing Practices</li>
        <li>Title Blocks and Drawing Borders</li>
        <li>Bill of Materials (BOM) and Parts Lists</li>
      </ul>
    </div>
  }
/>

<AccordionItem
  title="10. Sheet Set Management"
  bgColor="lightcyan"
  content={
    <div>
      <ul>
        <li>Creating and Managing Sheet Sets</li>
        <li>Batch Plotting and Publishing</li>
        <li>Sheet Set Properties and Organization</li>
      </ul>
    </div>
  }
/>

<AccordionItem
  title="11. Customization and Automation"
  bgColor="lightcyan"
  content={
    <div>
      <ul>
        <li>Customizing the User Interface</li>
        <li>Creating Custom Commands and Macros</li>
        <li>Using AutoLISP and Scripting for Automation</li>
        <li>Integration with Other Autodesk Products (Inventor, Fusion 360)</li>
      </ul>
    </div>
  }
/>

<AccordionItem
  title="12. Collaboration and Data Exchange"
  bgColor="lightcyan"
  content={
    <div>
      <ul>
        <li>Importing and Exporting Drawing Files (DWG, DXF, PDF)</li>
        <li>Collaboration Tools (CAD Standards Checker, eTransmit)</li>
        <li>Cloud Collaboration and Autodesk 360 Integration</li>
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

export default CCAD;
