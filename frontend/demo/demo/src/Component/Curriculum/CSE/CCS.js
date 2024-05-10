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
    <div className='CBG'>
    <div className="curriculum">
      <h1 className="curriculum-heading">CURRICULUM</h1>
      <div className="accordion-container">
        <div className="accordion-column">
        <AccordionItem
  title="Introduction to Data Science"
  bgColor="lightcyan"
  content={
    <ul className='ulbg'>
      <li>What is Data Science?</li>
      <li>Role of Data Scientist</li>
      <li>Data Science Lifecycle</li>
    </ul>
  }
/>

<AccordionItem
  title="Data Collection and Cleaning"
  bgColor="lightcyan"
  content={
    <ul>
      <li>Data Sources and Acquisition</li>
      <li>Data Collection Methods</li>
      <li>Dealing with Missing Values</li>
    </ul>
  }
/>

<AccordionItem
  title="Exploratory Data Analysis (EDA)"
  bgColor="lightcyan"
  content={
    <ul>
     <li>Data Visualization Techniques</li>
     <li>Summary Statistics</li>
     <li>Distribution Analysis</li>
    </ul>
  }
/>

<AccordionItem
  title="Data Wrangling and Transformation"
  bgColor="lightcyan"
  content={
    <ul>
      <li></li>
    </ul>
  }
/>
</div>
<div className="accordion-column">


<AccordionItem
  title="Statistical Analysis"
  bgColor="lightcyan"
  content={
    <ul>
     <li>Hypothesis Testing</li>
     <li>Confidence Intervals</li>
     <li>Regression Analysis</li>
    </ul>
  }
/>

<AccordionItem
  title="Machine Learning for Data Science"
  bgColor="lightcyan"
  content={
    <ul>
      <li>Ensemble Learning</li>
      <li>Hyperparameter Tuning</li>
      <li>Cross-Validation Techniques</li>
    </ul>
  }
/>

<AccordionItem
  title="Time Series Analysis"
  bgColor="lightcyan"
  content={
    <ul>
      <li>Exponential Smoothing</li>
      <li>Seasonal Decomposition</li>
      <li>Time Series Data Characteristics</li>
    </ul>
  }
/>

<AccordionItem
  title="Big Data Analytics"
  bgColor="lightcyan"
  content={
    <ul>
   <li>Introduction to Big Data</li>
   <li>Big Data Visualization</li>
   <li>Data Streaming and Real-time Analytics</li>
    </ul>
  }
/>

        </div>
        
        {/* Add more AccordionColumns here */}
      </div>
    </div>
    </div>
  );
}

export default CCS;
