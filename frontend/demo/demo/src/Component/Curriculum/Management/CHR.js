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
function CHR() {
  return (
    <div className='MGBG'>
    <div className="curriculum">
      <h1 className="curriculum-heading">Curriculum</h1>
      <div className="accordion-container">
        <div className="accordion-column">
        <AccordionItem
  title="1. Introduction to Human Resources Management"
  bgColor="lightcyan"
  content={
    <ul>
      <li>Definition and Scope of Human Resources (HR)</li>
      <li>Importance of HR in Organizations</li>
      <li>Evolution of HR Management</li>
      <li>Role of HR in Organizational Strategy</li>
    </ul>
  }
/>

<AccordionItem
  title="2. Human Resources Planning and Recruitment"
  bgColor="lightcyan"
  content={
    <ul>
      <li>Human Resource Planning Process</li>
      <li>Job Analysis and Job Design</li>
      <li>Recruitment Strategies and Methods</li>
      <li>Selection Process and Techniques (Interviews, Assessments, etc.)</li>
    </ul>
  }
/>

<AccordionItem
  title="3. Employee Onboarding and Orientation"
  bgColor="lightcyan"
  content={
    <ul>
      <li>Importance of Onboarding in Employee Integration</li>
      <li>Onboarding Process and Best Practices</li>
      <li>Orientation Programs and Employee Handbook</li>
      <li>Introduction to Organizational Culture and Values</li>
    </ul>
  }
/>

<AccordionItem
  title="4. Performance Management and Appraisal"
  bgColor="lightcyan"
  content={
    <ul>
      <li>Performance Management Cycle</li>
      <li>Setting SMART Goals and Objectives</li>
      <li>Performance Appraisal Methods (360-Degree Feedback, Rating Scales, etc.)</li>
      <li>Feedback and Performance Improvement Plans</li>
    </ul>
  }
/>

<AccordionItem
  title="5. Training and Development"
  bgColor="lightcyan"
  content={
    <ul>
      <li>Training Needs Analysis</li>
      <li>Designing Training Programs (Classroom, Online, On-the-job)</li>
      <li>Learning and Development Initiatives</li>
      <li>Career Development and Succession Planning</li>
    </ul>
  }
/>

<AccordionItem
  title="6. Compensation and Benefits"
  bgColor="lightcyan"
  content={
    <ul>
      <li>Components of Compensation (Salary, Bonus, Incentives, Benefits, etc.)</li>
      <li>Wage and Salary Administration</li>
      <li>Benefits Administration (Health Insurance, Retirement Plans, etc.)</li>
      <li>Compensation Benchmarking and Market Analysis</li>
    </ul>
  }
/>


        </div>

        
        <div className="accordion-column">
        
<AccordionItem
  title="7. Employee Relations and Engagement"
  bgColor="lightcyan"
  content={
    <ul>
      <li>Building Positive Employee Relations</li>
      <li>Conflict Resolution Techniques</li>
      <li>Employee Engagement Strategies</li>
      <li>Workplace Diversity and Inclusion Initiatives</li>
    </ul>
  }
/>

<AccordionItem
  title="8. Employee Health and Safety"
  bgColor="lightcyan"
  content={
    <ul>
      <li>Occupational Health and Safety Regulations</li>
      <li>Workplace Health and Wellness Programs</li>
      <li>Safety Training and Accident Prevention</li>
      <li>Employee Assistance Programs (EAPs)</li>
    </ul>
  }
/>

<AccordionItem
  title="9. HR Information Systems and Technology"
  bgColor="lightcyan"
  content={
    <ul>
      <li>Introduction to HRIS (Human Resources Information Systems)</li>
      <li>HRIS Implementation and Integration</li>
      <li>HR Analytics and Data-driven Decision Making</li>
      <li>Automation of HR Processes (Payroll, Attendance, Performance Management)</li>
    </ul>
  }
/>

<AccordionItem
  title="10. Legal and Ethical Considerations in HR"
  bgColor="lightcyan"
  content={
    <ul>
      <li>Employment Law Basics (Equal Employment Opportunity, Fair Labor Standards Act, etc.)</li>
      <li>Legal Compliance in Recruitment and Hiring</li>
      <li>Privacy and Confidentiality in HR Practices</li>
      <li>Ethical Standards for HR Professionals</li>
    </ul>
  }
/>

<AccordionItem
  title="11. Talent Management and Retention"
  bgColor="lightcyan"
  content={
    <ul>
      <li>Talent Acquisition Strategies</li>
      <li>Employee Retention Techniques</li>
      <li>Succession Planning and Talent Pipelining</li>
      <li>Exit Interviews and Offboarding Process</li>
    </ul>
  }
/>

<AccordionItem
  title="12. Emerging Trends in HR"
  bgColor="lightcyan"
  content={
    <ul>
      <li>Remote Work and Flexible Work Arrangements</li>
      <li>Artificial Intelligence and Automation in HR Processes</li>
      <li>Diversity, Equity, and Inclusion (DEI) Initiatives</li>
      <li>Employee Well-being and Mental Health Support</li>
    </ul>
  }
/>
        </div>


        
      </div>
    </div>
    </div>
  );
}

export default CHR;
