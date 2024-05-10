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
function CDB() {
  return (
    <div className='CBG'>
    <div className="curriculum">
    <h1 className="curriculum-heading">CURRICULUM</h1>
      
      <div className="accordion-container">
        <div className="accordion-column">
        <AccordionItem
      title="1. MySQL Installation and Setup"
      bgColor="lightcyan"
      content={
        <div>
          <ul>
            <li>How to install MySQL on different platforms (Windows, macOS, Linux).</li>
            <li>Initial configuration and security settings.</li>
          </ul>
        </div>
      }
/>

<AccordionItem
      title="2. Creating and Managing Databases"
      bgColor="lightcyan"
      content={
        <div>
          <ul>
            <li>How to create, alter, and drop databases.</li>
            <li>Understanding database storage engines and their differences.</li>
          </ul>
        </div>
      }
/>

<AccordionItem
      title="3. Creating and Managing Tables"
      bgColor="lightcyan"
      content={
        <div>
          <ul>
            <li>How to create, alter, and drop tables.</li>
            <li>Defining primary keys, foreign keys, and indexes.</li>
          </ul>
        </div>
      }
/>

<AccordionItem
      title="4. Basic SQL Commands"
      bgColor="lightcyan"
      content={
        <div>
          <ul>
            <li>CRUD operations: SELECT, INSERT, UPDATE, DELETE.</li>
            <li>Filtering data using WHERE clause.</li>
            <li>Sorting and limiting results using ORDER BY and LIMIT.</li>
          </ul>
        </div>
      }
/>

<AccordionItem
      title="5. Joins and Relationships"
      bgColor="lightcyan"
      content={
        <div>
          <ul>
            <li>Understanding different types of joins (INNER JOIN, LEFT JOIN, RIGHT JOIN).</li>
            <li>How to establish and query relationships between tables.</li>
          </ul>
        </div>
      }
/>


        </div>

        
        <div className="accordion-column">
        <AccordionItem
      title="6. Data Types and Column Constraints"
      bgColor="lightcyan"
      content={
        <div>
          <ul>
            <li>Overview of MySQL data types (INT, VARCHAR, DATE, etc.).</li>
            <li>Applying column constraints such as NOT NULL, UNIQUE, and DEFAULT.</li>
          </ul>
        </div>
      }
/>

<AccordionItem
      title="7. Indexes and Performance Optimization"
      bgColor="lightcyan"
      content={
        <div>
          <ul>
            <li>How to create and manage indexes.</li>
            <li>Understanding the impact of indexes on query performance.</li>
          </ul>
        </div>
      }
/>

<AccordionItem
      title="8. Transactions and ACID Properties"
      bgColor="lightcyan"
      content={
        <div>
          <ul>
            <li>Introduction to transactions in MySQL.</li>
            <li>Ensuring data consistency and reliability with ACID properties.</li>
          </ul>
        </div>
      }
/>

<AccordionItem
      title="9. MySQL Security and User Management"
      bgColor="lightcyan"
      content={
        <div>
          <ul>
            <li>Managing user accounts and permissions.</li>
            <li>Implementing authentication and authorization strategies.</li>
          </ul>
        </div>
      }
/>

<AccordionItem
      title="10. MySQL Backup and Recovery"
      bgColor="lightcyan"
      content={
        <div>
          <ul>
            <li>Techniques for backing up and restoring databases (e.g., using `mysqldump`).</li>
            <li>Strategies for data recovery and disaster planning.</li>
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

export default CDB;
