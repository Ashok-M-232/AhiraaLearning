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
function CSTK() {
  return (
    <div className='MGBG'>
    <div className="curriculum">
      <h1 className="curriculum-heading">Curriculum</h1>
      <div className="accordion-container">
        <div className="accordion-column">
        <AccordionItem
  title="1. Introduction to Stock Market"
  bgColor="lightcyan"
  content={
    <ul>
      <li>Definition and Basics of Stock Market</li>
      <li>Participants in the Stock Market (Investors, Traders, Brokers, Market Makers)</li>
      <li>Purpose and Function of Stock Exchanges</li>
      <li>Historical Overview of the Stock Market</li>
    </ul>
  }
/>

<AccordionItem
  title="2. Stock Market Instruments"
  bgColor="lightcyan"
  content={
    <ul>
      <li>Stocks (Common Stock, Preferred Stock)</li>
      <li>Bonds (Government Bonds, Corporate Bonds)</li>
      <li>Exchange-Traded Funds (ETFs)</li>
      <li>Mutual Funds</li>
      <li>Derivatives (Options, Futures)</li>
    </ul>
  }
/>

<AccordionItem
  title="3. Fundamental Analysis"
  bgColor="lightcyan"
  content={
    <ul>
      <li>Introduction to Fundamental Analysis</li>
      <li>Financial Statement Analysis (Income Statement, Balance Sheet, Cash Flow Statement)</li>
      <li>Analyzing Company Performance (Revenue, Earnings, Profitability Ratios)</li>
      <li>Evaluating Financial Health and Stability</li>
    </ul>
  }
/>

<AccordionItem
  title="4. Technical Analysis"
  bgColor="lightcyan"
  content={
    <ul>
      <li>Introduction to Technical Analysis</li>
      <li>Price Patterns and Chart Analysis (Support and Resistance, Trends, Candlestick Patterns)</li>
      <li>Technical Indicators (Moving Averages, Relative Strength Index (RSI), MACD)</li>
      <li>Volume Analysis and Market Sentiment</li>
    </ul>
  }
/>

<AccordionItem
  title="5. Market Structure and Order Types"
  bgColor="lightcyan"
  content={
    <ul>
      <li>Understanding Market Orders, Limit Orders, Stop Orders</li>
      <li>Market Depth and Order Book</li>
      <li>Bid-Ask Spread and Market Liquidity</li>
      <li>Market Microstructure and High-Frequency Trading (HFT)</li>
    </ul>
  }
/>

<AccordionItem
  title="6. Trading Strategies"
  bgColor="lightcyan"
  content={
    <ul>
      <li>Long-Term Investing Strategies</li>
      <li>Short-Term Trading Strategies (Day Trading, Swing Trading)</li>
      <li>Value Investing and Growth Investing</li>
      <li>Momentum Trading and Contrarian Strategies</li>
    </ul>
  }
/>


        </div>

        
        <div className="accordion-column">
        
<AccordionItem
  title="7. Risk Management"
  bgColor="lightcyan"
  content={
    <ul>
      <li>Types of Investment Risk (Market Risk, Credit Risk, Liquidity Risk, etc.)</li>
      <li>Diversification and Asset Allocation</li>
      <li>Setting Stop-Loss Orders and Risk Limits</li>
      <li>Portfolio Rebalancing Techniques</li>
    </ul>
  }
/>

<AccordionItem
  title="8. Market Analysis and Research Tools"
  bgColor="lightcyan"
  content={
    <ul>
      <li>News and Information Sources (Financial News Websites, Market Reports)</li>
      <li>Stock Screener Tools</li>
      <li>Trading Platforms and Software (Online Brokers, Trading Apps)</li>
      <li>Research Reports and Analyst Recommendations</li>
    </ul>
  }
/>

<AccordionItem
  title="9. Regulation and Compliance"
  bgColor="lightcyan"
  content={
    <ul>
      <li>Securities and Exchange Commission (SEC) Regulations</li>
      <li>Insider Trading Laws</li>
      <li>Market Manipulation and Fraud Prevention</li>
      <li>Compliance with Trading Rules and Regulations</li>
    </ul>
  }
/>

<AccordionItem
  title="10. Investment Psychology and Behavior"
  bgColor="lightcyan"
  content={
    <ul>
      <li>Understanding Investor Psychology (Fear, Greed, Herding Behavior)</li>
      <li>Behavioral Biases in Investing (Confirmation Bias, Loss Aversion, Anchoring)</li>
      <li>Emotional Discipline and Mental Toughness in Trading</li>
    </ul>
  }
/>

<AccordionItem
  title="11. Global Markets and International Investing"
  bgColor="lightcyan"
  content={
    <ul>
      <li>Overview of International Stock Exchanges</li>
      <li>Currency Exchange and Foreign Exchange Markets</li>
      <li>Risks and Opportunities in International Investing</li>
      <li>Emerging Markets and Frontier Markets</li>
    </ul>
  }
/>

<AccordionItem
  title="12. Emerging Trends in Stock Market"
  bgColor="lightcyan"
  content={
    <ul>
      <li>Algorithmic Trading and Quantitative Investing</li>
      <li>Impact of Artificial Intelligence and Machine Learning in Trading</li>
      <li>Social Trading Platforms and Crowd-Sourced Investment Strategies</li>
      <li>Regulatory Changes and Market Evolution</li>
    </ul>
  }
/>
        </div>


        
      </div>
    </div>
    </div>
  );
}

export default CSTK;
