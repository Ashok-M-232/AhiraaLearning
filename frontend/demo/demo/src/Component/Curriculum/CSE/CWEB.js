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
function CWEB() {
  return (
    <div className='CBG'>
    <div className="curriculum">
      <h1 className="curriculum-heading">Curriculum</h1>
      <div className="accordion-container">
        <div className="accordion-column">
        <AccordionItem
  title="1. Introduction to Web Development"
  bgColor="lightcyan"
  content={
    <div>
      <ul>
        <li>What is Web Development?</li>
        <li>Client-Side vs. Server-Side Development</li>
        <li>Frontend, Backend, and Full-Stack Development</li>
        <li>Evolution of Web Technologies</li>
      </ul>
    </div>
  }
/>

<AccordionItem
  title="2. HTML (Hypertext Markup Language)"
  bgColor="lightcyan"
  content={
    <div>
      <ul>
        <li>Basic Structure of HTML Documents</li>
        <li>HTML Tags and Attributes</li>
        <li>Semantic HTML</li>
        <li>HTML Forms and Input Elements</li>
        <li>HTML5 Features and APIs</li>
      </ul>
    </div>
  }
/>

<AccordionItem
  title="3. CSS (Cascading Style Sheets)"
  bgColor="lightcyan"
  content={
    <div>
      <ul>
        <li>CSS Syntax and Selectors</li>
        <li>Box Model and Layouts</li>
        <li>Responsive Web Design</li>
        <li>CSS Preprocessors (Sass, Less)</li>
        <li>CSS Frameworks (Bootstrap, Foundation)</li>
      </ul>
    </div>
  }
/>

<AccordionItem
  title="4. JavaScript"
  bgColor="lightcyan"
  content={
    <div>
      <ul>
        <li>Introduction to JavaScript</li>
        <li>Variables, Data Types, and Operators</li>
        <li>Control Structures (Conditionals, Loops)</li>
        <li>Functions and Scope</li>
        <li>DOM Manipulation and Events</li>
      </ul>
    </div>
  }
/>

<AccordionItem
  title="5. Frontend Frameworks and Libraries"
  bgColor="lightcyan"
  content={
    <div>
      <ul>
        <li>React.js</li>
        <li>Angular</li>
        <li>Vue.js</li>
        <li>State Management (Redux, Vuex)</li>
        <li>Component-Based Architecture</li>
      </ul>
    </div>
  }
/>

<AccordionItem
  title="6. Backend Development"
  bgColor="lightcyan"
  content={
    <div>
      <ul>
        <li>Introduction to Backend Technologies</li>
        <li>Server-Side Languages (Node.js, Python, Ruby, PHP, Java, etc.)</li>
        <li>RESTful APIs and Web Services</li>
        <li>Server-Side Frameworks (Express.js, Django, Flask, Ruby on Rails, Laravel)</li>
      </ul>
    </div>
  }
/>



        </div>
        <div className="accordion-column">
        
<AccordionItem
  title="7. Databases and Data Management"
  bgColor="lightcyan"
  content={
    <div>
      <ul>
        <li>Relational Databases (MySQL, PostgreSQL, SQL Server)</li>
        <li>NoSQL Databases (MongoDB, Cassandra, Couchbase)</li>
        <li>Database Design and Normalization</li>
        <li>ORM (Object-Relational Mapping) Libraries</li>
      </ul>
    </div>
  }
/>

<AccordionItem
  title="8. Web Security"
  bgColor="lightcyan"
  content={
    <div>
      <ul>
        <li>Common Web Security Threats (SQL Injection, Cross-Site Scripting, CSRF)</li>
        <li>HTTPS and SSL/TLS</li>
        <li>Input Validation and Sanitization</li>
        <li>Authentication and Authorization</li>
        <li>Content Security Policy (CSP)</li>
      </ul>
    </div>
  }
/>

<AccordionItem
  title="9. Web Performance Optimization"
  bgColor="lightcyan"
  content={
    <div>
      <ul>
        <li>Techniques for Improving Page Load Time</li>
        <li>Minification and Concatenation of CSS/JS Files</li>
        <li>Image Optimization</li>
        <li>Caching Strategies</li>
        <li>Performance Monitoring and Profiling</li>
      </ul>
    </div>
  }
/>

<AccordionItem
  title="10. Version Control and Collaboration"
  bgColor="lightcyan"
  content={
    <div>
      <ul>
        <li>Git Version Control System</li>
        <li>GitHub, GitLab, Bitbucket</li>
        <li>Branching and Merging Strategies</li>
        <li>Code Review Processes</li>
        <li>Continuous Integration and Deployment (CI/CD)</li>
      </ul>
    </div>
  }
/>

<AccordionItem
  title="11. Web Accessibility"
  bgColor="lightcyan"
  content={
    <div>
      <ul>
        <li>Web Content Accessibility Guidelines (WCAG)</li>
        <li>ARIA (Accessible Rich Internet Applications)</li>
        <li>Semantic HTML for Accessibility</li>
        <li>Assistive Technologies and Screen Readers</li>
        <li>Accessibility Audits and Testing</li>
      </ul>
    </div>
  }
/>

<AccordionItem
  title="12. Progressive Web Applications (PWAs) and Mobile Web Development"
  bgColor="lightcyan"
  content={
    <div>
      <ul>
        <li>Principles of Progressive Enhancement</li>
        <li>Service Workers and Offline Support</li>
        <li>App Shell Architecture</li>
        <li>Web App Manifest</li>
        <li>Responsive Design for Mobile Devices</li>
      </ul>
    </div>
  }
/>

        </div>
        
        {/* Add more AccordionColumns here */}
      </div>
    </div>
    </div>
  );
}

export default CWEB;
