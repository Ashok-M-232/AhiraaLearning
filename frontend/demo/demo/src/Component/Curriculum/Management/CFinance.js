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
function CFinance() {
  return (
    <div className='MGBG'>
    <div className="curriculum">
      <h1 className="curriculum-heading">Curriculum</h1>
      <div className="accordion-container">
        <div className="accordion-column">
        <AccordionItem
  title="1. Introduction to Finance"
  bgColor="lightcyan"
  content={
    <ul>
      <li>Definition and Scope of Finance</li>
      <li>Importance of Finance in Business and Personal Decision Making</li>
      <li>Fundamental Concepts: Time Value of Money, Risk and Return, Diversification, Liquidity, etc.</li>
      <li>Overview of Financial Markets and Institutions</li>
    </ul>
  }
/>

<AccordionItem
  title="2. Financial Statements Analysis"
  bgColor="lightcyan"
  content={
    <ul>
      <li>Understanding Financial Statements (Balance Sheet, Income Statement, Cash Flow Statement)</li>
      <li>Ratio Analysis (Liquidity Ratios, Solvency Ratios, Profitability Ratios, Efficiency Ratios)</li>
      <li>Trend Analysis and Comparative Analysis</li>
      <li>Common-Size Analysis and Vertical Analysis</li>
    </ul>
  }
/>

<AccordionItem
  title="3. Financial Markets and Instruments"
  bgColor="lightcyan"
  content={
    <ul>
      <li>Money Markets vs. Capital Markets</li>
      <li>Types of Financial Instruments (Stocks, Bonds, Derivatives, etc.)</li>
      <li>Primary vs. Secondary Markets</li>
      <li>Overview of Stock Exchanges and Trading Mechanisms</li>
    </ul>
  }
/>

<AccordionItem
  title="4. Risk and Return"
  bgColor="lightcyan"
  content={
    <ul>
      <li>Understanding Risk and Risk Management</li>
      <li>Types of Risk (Market Risk, Credit Risk, Interest Rate Risk, etc.)</li>
      <li>Modern Portfolio Theory and Asset Allocation</li>
      <li>Capital Asset Pricing Model (CAPM) and Risk-Adjusted Return</li>
    </ul>
  }
/>

<AccordionItem
  title="5. Corporate Finance"
  bgColor="lightcyan"
  content={
    <ul>
      <li>Capital Budgeting and Investment Decision Making</li>
      <li>Cost of Capital and Capital Structure</li>
      <li>Dividend Policy and Share Repurchases</li>
      <li>Working Capital Management and Cash Conversion Cycle</li>
    </ul>
  }
/>

<AccordionItem
  title="6. Financial Planning and Analysis"
  bgColor="lightcyan"
  content={
    <ul>
      <li>Budgeting and Forecasting Techniques</li>
      <li>Cash Flow Management and Cash Flow Forecasting</li>
      <li>Financial Modeling and Sensitivity Analysis</li>
      <li>Scenario Planning and Stress Testing</li>
    </ul>
  }
/>


        </div>

        
        <div className="accordion-column">
        
<AccordionItem
  title="7. Financial Markets Regulation"
  bgColor="lightcyan"
  content={
    <ul>
      <li>Overview of Financial Regulatory Agencies (SEC, FINRA, etc.)</li>
      <li>Securities Laws and Regulations (Sarbanes-Oxley Act, Dodd-Frank Act, etc.)</li>
      <li>Compliance and Ethics in Financial Markets</li>
      <li>Insider Trading and Market Manipulation Laws</li>
    </ul>
  }
/>

<AccordionItem
  title="8. Investment Management"
  bgColor="lightcyan"
  content={
    <ul>
      <li>Types of Investments (Stocks, Bonds, Mutual Funds, ETFs, etc.)</li>
      <li>Investment Strategies (Value Investing, Growth Investing, Index Investing, etc.)</li>
      <li>Portfolio Management Techniques (Asset Allocation, Diversification, Rebalancing)</li>
      <li>Investment Performance Evaluation</li>
    </ul>
  }
/>

<AccordionItem
  title="9. Personal Finance"
  bgColor="lightcyan"
  content={
    <ul>
      <li>Budgeting and Financial Planning</li>
      <li>Managing Debt and Credit</li>
      <li>Saving and Investing for Retirement</li>
      <li>Estate Planning and Wealth Transfer</li>
    </ul>
  }
/>

<AccordionItem
  title="10. International Finance"
  bgColor="lightcyan"
  content={
    <ul>
      <li>Foreign Exchange Markets and Exchange Rate Determination</li>
      <li>Global Capital Markets and International Investment</li>
      <li>Political and Economic Risk in International Finance</li>
      <li>Multinational Corporations and International Financial Management</li>
    </ul>
  }
/>

<AccordionItem
  title="11. Financial Derivatives"
  bgColor="lightcyan"
  content={
    <ul>
      <li>Introduction to Derivatives (Options, Futures, Forwards, Swaps)</li>
      <li>Hedging and Speculation with Derivatives</li>
      <li>Derivatives Pricing Models (Black-Scholes Model, Binomial Option Pricing Model)</li>
      <li>Risks Associated with Derivatives Trading</li>
    </ul>
  }
/>

<AccordionItem
  title="12. Emerging Trends in Finance"
  bgColor="lightcyan"
  content={
    <ul>
      <li>Fintech Innovations and Digital Finance</li>
      <li>Impact of Artificial Intelligence and Machine Learning in Finance</li>
      <li>Sustainable Finance and Environmental, Social, and Governance (ESG) Investing</li>
      <li>Regulatory Changes and Evolving Business Models in Finance</li>
    </ul>
  }
/>
        </div>


        
      </div>
    </div>
    </div>
  );
}

export default CFinance;
