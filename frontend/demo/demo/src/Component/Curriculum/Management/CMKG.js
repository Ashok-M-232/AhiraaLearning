import React, { useState } from 'react';
import './AccordionMgmt.css'; // Import external CSS file for styling
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
function CMKG() {
  return (
    <div className='MGBG'>
    <div className="curriculum">
      <h1 className="curriculum-heading">Curriculum</h1>
      <div className="accordion-container">
        <div className="accordion-column">
        <AccordionItem
  title="1. Introduction to Marketing"
  bgColor="lightcyan"
  content={
    <ul>
      <li>Definition and Scope of Marketing</li>
      <li>Importance of Marketing in Business</li>
      <li>Evolution of Marketing Concepts</li>
      <li>Role of Marketing in Creating Value for Customers and Businesses</li>
    </ul>
  }
/>

<AccordionItem
  title="2. Market Research and Consumer Behavior"
  bgColor="lightcyan"
  content={
    <ul>
      <li>Market Segmentation and Targeting</li>
      <li>Consumer Behavior Theories and Models</li>
      <li>Conducting Market Research (Qualitative and Quantitative Methods)</li>
      <li>Analyzing Market Trends and Competitor Analysis</li>
    </ul>
  }
/>


        </div>

        
        <div className="accordion-column">
        <AccordionItem
  title="3. Marketing Strategy Development"
  bgColor="lightcyan"
  content={
    <ul>
      <li>Setting Marketing Objectives and Goals</li>
      <li>Market Positioning and Branding Strategies</li>
      <li>Product Development and Innovation</li>
      <li>Pricing Strategies and Pricing Models</li>
    </ul>
  }
/>

<AccordionItem
  title="4. Marketing Communication"
  bgColor="lightcyan"
  content={
    <ul>
      <li>Integrated Marketing Communication (IMC)</li>
      <li>Advertising Strategies and Campaign Development</li>
      <li>Public Relations and Media Relations</li>
      <li>Digital Marketing Channels (Social Media, Email Marketing, Content Marketing, etc.)</li>
    </ul>
  }
/>
        </div>


        
      </div>
    </div>
    </div>
  );
}

export default CMKG;
