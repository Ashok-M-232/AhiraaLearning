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
function Curriculum() {
  return (
    <div className='CBG'>
    <div className="curriculum">
      <h1 className="curriculum-heading">Curriculum</h1>
      <div className="accordion-container">
        <div className="accordion-column">
        <AccordionItem
  title="Introduction to Artificial Intelligence"
  bgColor="lightcyan"
  content={
    <ul className='ulbg'>
      <li>History and Evolution of AI</li>
      <li>AI Applications in Various Industries</li>
      <li>Ethics and Impact of AI</li>
      <li>Future Trends in AI</li>
    </ul>
  }
/>

<AccordionItem
  title="Introduction to Python"
  bgColor="lightcyan"
  content={
    <ul>
      <li>Basic Syntax and Data Types</li>
      <li>Control Structures (loops, conditionals)</li>
      <li>Functions and Modules</li>
      <li>File Handling</li>
      <li>Exception Handling</li>
      <li>Data Structures (lists, dictionaries, tuples)</li>
      <li>Object-Oriented Programming in Python</li>
    </ul>
  }
/>

<AccordionItem
  title="Introduction to Machine Learning"
  bgColor="lightcyan"
  content={
    <ul>
      <li>Types of Machine Learning (Supervised, Unsupervised, Reinforcement Learning)</li>
      <li>Model Evaluation and Validation</li>
      <li>Feature Engineering</li>
      <li>Dimensionality Reduction</li>
      <li>Hyperparameter Tuning</li>
      <li>Ensemble Methods</li>
    </ul>
  }
/>

<AccordionItem
  title="Deep Learning"
  bgColor="lightcyan"
  content={
    <ul>
      <li>Introduction to Neural Networks</li>
      <li>Backpropagation Algorithm</li>
      <li>Activation Functions</li>
      <li>Optimization Techniques (Gradient Descent, Adam, RMSprop)</li>
      <li>Regularization Methods (Dropout, L1/L2 regularization)</li>
      <li>Transfer Learning</li>
      <li>Generative Adversarial Networks (GANs)</li>
    </ul>
  }
/>
</div>
<div className="accordion-column">


<AccordionItem
  title="Artificial Neural Networks"
  bgColor="lightcyan"
  content={
    <ul>
      <li>Perceptrons</li>
      <li>Multilayer Perceptrons (MLPs)</li>
      <li>Feedforward Neural Networks</li>
      <li>Recurrent Neural Networks (RNNs)</li>
      <li>Long Short-Term Memory (LSTM)</li>
      <li>Gated Recurrent Units (GRUs)</li>
    </ul>
  }
/>

<AccordionItem
  title="Convolutional Neural Networks"
  bgColor="lightcyan"
  content={
    <ul>
      <li>Convolutional Layers</li>
      <li>Pooling Layers</li>
      <li>CNN Architectures (LeNet, AlexNet, VGG, GoogLeNet, ResNet)</li>
      <li>Object Detection</li>
      <li>Image Classification</li>
      <li>Image Segmentation</li>
    </ul>
  }
/>

<AccordionItem
  title="Natural Language Understanding"
  bgColor="lightcyan"
  content={
    <ul>
      <li>Tokenization and Text Preprocessing</li>
      <li>Word Embeddings (Word2Vec, GloVe, FastText)</li>
      <li>Recurrent Neural Networks for NLP</li>
      <li>Attention Mechanisms</li>
      <li>Sequence-to-Sequence Models</li>
      <li>Transformer Models (BERT, GPT)</li>
    </ul>
  }
/>

<AccordionItem
  title="Image Processing"
  bgColor="lightcyan"
  content={
    <ul>
      <li>Basic Image Manipulations (resize, crop, rotate)</li>
      <li>Filtering and Edge Detection</li>
      <li>Feature Extraction</li>
      <li>Histogram Equalization</li>
      <li>Morphological Operations</li>
      <li>Image Segmentation Techniques (thresholding, region-based segmentation)</li>
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

export default Curriculum;
