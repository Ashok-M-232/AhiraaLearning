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
function CML() {
  return (
    <div className='CBG'>
    <div className="curriculum">
      <h1 className="curriculum-heading">CURRICULUM</h1>
      <div className="accordion-container">
        <div className="accordion-column">
        <AccordionItem
  title="Introduction to Machine Learning"
  bgColor="lightcyan"
  content={
    <ul className='ulbg'>
      <li>History and Evolution of Machine Learning</li>
      <li>Machine Learning Applications in Various Industries</li>
      <li>Ethics and Impact of Machine Learning</li>
      <li>Future Trends in Machine Learning</li>
    </ul>
  }
/>

<AccordionItem
  title="Basics of Statistics and Probability"
  bgColor="lightcyan"
  content={
    <ul>
      <li>Descriptive Statistics</li>
      <li>Inferential Statistics</li>
      <li>Probability Distributions</li>
      <li>Statistical Testing</li>
    </ul>
  }
/>

<AccordionItem
  title="Supervised Learning"
  bgColor="lightcyan"
  content={
    <ul>
      <li>Linear Regression</li>
      <li>Logistic Regression</li>
      <li>Decision Trees</li>
      <li>Random Forests</li>
      <li>Support Vector Machines (SVM)</li>
      <li>k-Nearest Neighbors (k-NN)</li>
    </ul>
  }
/>

<AccordionItem
  title="Unsupervised Learning"
  bgColor="lightcyan"
  content={
    <ul>
      <li>K-means Clustering</li>
      <li>Hierarchical Clustering</li>
      <li>Principal Component Analysis (PCA)</li>
    </ul>
  }
/>
</div>
<div className="accordion-column">


<AccordionItem
  title="Model Evaluation and Validation"
  bgColor="lightcyan"
  content={
    <ul>
      <li>Cross-Validation Techniques</li>
      <li>Bias-Variance Tradeoff</li>
      <li>Confusion Matrix</li>
    </ul>
  }
/>

<AccordionItem
  title="Feature Engineering"
  bgColor="lightcyan"
  content={
    <ul>
      <li>Feature Scaling</li>
      <li>Feature Selection</li>
      <li>Handling Missing Data</li>
    </ul>
  }
/>

<AccordionItem
  title="Dimensionality Reduction"
  bgColor="lightcyan"
  content={
    <ul>
      <li>Principal Component Analysis (PCA)</li>
      <li>Linear Discriminant Analysis (LDA)</li>
      <li>Singular Value Decomposition (SVD)</li>
    </ul>
  }
/>

<AccordionItem
  title="Ensemble Learning"
  bgColor="lightcyan"
  content={
    <ul>
    <li>Bagging (Bootstrap Aggregating)</li> 
    <li>Boosting (AdaBoost, Gradient Boosting, XGBoost)</li> 
    <li>Stacking</li> 
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

export default CML;
