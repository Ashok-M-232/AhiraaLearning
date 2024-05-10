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
function CCS() {
  return (
    <div className='CCS'>
    <div className="curriculum">
      <h1 className="curriculum-heading">Curriculum</h1>
      <div className="accordion-container">
        <div className="accordion-column">
        
        </div>

        
        <div className="accordion-column">
        
        </div>


        
      </div>
    </div>
    </div>
  );
}

export default CCS;
