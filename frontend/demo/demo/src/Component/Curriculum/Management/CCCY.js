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
function CCCY() {
  return (
    <div className='MGBG'>
    <div className="curriculum">
      <h1 className="curriculum-heading">Curriculum</h1>
      <div className="accordion-container">
        <div className="accordion-column">
        <AccordionItem
  title="1. Introduction to Cryptocurrency"
  bgColor="lightcyan"
  content={
    <ul>
      <li>Definition and Basics of Cryptocurrency</li>
      <li>History of Cryptocurrency (Bitcoin, Altcoins, etc.)</li>
      <li>Decentralization and Blockchain Technology</li>
      <li>Importance and Role of Cryptocurrency in the Financial Landscape</li>
    </ul>
  }
/>

<AccordionItem
  title="2. Blockchain Technology"
  bgColor="lightcyan"
  content={
    <ul>
      <li>Understanding Blockchain Technology</li>
      <li>Basics of Cryptography and Hash Functions</li>
      <li>Components of a Blockchain (Blocks, Nodes, Consensus Mechanisms)</li>
      <li>Public vs. Private Blockchains</li>
    </ul>
  }
/>

<AccordionItem
  title="3. Popular Cryptocurrencies"
  bgColor="lightcyan"
  content={
    <ul>
      <li>Overview of Major Cryptocurrencies (Bitcoin, Ethereum, Ripple, Litecoin, etc.)</li>
      <li>Characteristics and Unique Features of Different Cryptocurrencies</li>
      <li>Market Capitalization and Trading Volume Analysis</li>
      <li>Emerging Cryptocurrencies and Altcoins</li>
    </ul>
  }
/>

<AccordionItem
  title="4. Cryptocurrency Exchanges and Trading Platforms"
  bgColor="lightcyan"
  content={
    <ul>
      <li>Types of Cryptocurrency Exchanges (Centralized, Decentralized, Peer-to-Peer)</li>
      <li>Registering and Using Cryptocurrency Exchanges</li>
      <li>Trading Strategies and Techniques</li>
      <li>Security Considerations for Cryptocurrency Trading</li>
    </ul>
  }
/>

<AccordionItem
  title="5. Wallets and Storage"
  bgColor="lightcyan"
  content={
    <ul>
      <li>Types of Cryptocurrency Wallets (Hardware Wallets, Software Wallets, Paper Wallets)</li>
      <li>Setting up and Securing Cryptocurrency Wallets</li>
      <li>Cold Storage vs. Hot Wallets</li>
      <li>Best Practices for Cryptocurrency Storage and Backup</li>
    </ul>
  }
/>

<AccordionItem
  title="6. Mining and Consensus Mechanisms"
  bgColor="lightcyan"
  content={
    <ul>
      <li>Introduction to Cryptocurrency Mining</li>
      <li>Proof of Work (PoW) vs. Proof of Stake (PoS) Consensus Mechanisms</li>
      <li>Mining Pools and Solo Mining</li>
      <li>Energy Consumption and Environmental Impact of Mining</li>
    </ul>
  }
/>

        </div>

        
        <div className="accordion-column">
        
<AccordionItem
  title="7. Smart Contracts and Decentralized Finance (DeFi)"
  bgColor="lightcyan"
  content={
    <ul>
      <li>Understanding Smart Contracts</li>
      <li>Ethereum and Smart Contract Development</li>
      <li>Decentralized Applications (DApps) and Use Cases</li>
      <li>Overview of Decentralized Finance (DeFi) Platforms</li>
    </ul>
  }
/>

<AccordionItem
  title="8. Regulation and Legal Considerations"
  bgColor="lightcyan"
  content={
    <ul>
      <li>Regulatory Landscape for Cryptocurrency (SEC, CFTC, etc.)</li>
      <li>Legal Status of Cryptocurrency in Different Countries</li>
      <li>Compliance with Anti-Money Laundering (AML) and Know Your Customer (KYC) Regulations</li>
      <li>Taxation of Cryptocurrency Transactions</li>
    </ul>
  }
/>

<AccordionItem
  title="9. Security and Risks"
  bgColor="lightcyan"
  content={
    <ul>
      <li>Security Threats in the Cryptocurrency Space (Hacks, Scams, Phishing)</li>
      <li>Best Practices for Securing Cryptocurrency Assets</li>
      <li>Multi-Signature Wallets and Two-Factor Authentication (2FA)</li>
      <li>Risks Associated with Initial Coin Offerings (ICOs) and Token Sales</li>
    </ul>
  }
/>

<AccordionItem
  title="10. Cryptocurrency Investment and Trading Strategies"
  bgColor="lightcyan"
  content={
    <ul>
      <li>Long-Term Investment vs. Short-Term Trading</li>
      <li>Fundamental Analysis and Technical Analysis in Cryptocurrency Trading</li>
      <li>Dollar-Cost Averaging (DCA) and Portfolio Diversification</li>
      <li>Risk Management Strategies for Cryptocurrency Investors</li>
    </ul>
  }
/>

<AccordionItem
  title="11. Emerging Trends in Cryptocurrency"
  bgColor="lightcyan"
  content={
    <ul>
      <li>Non-Fungible Tokens (NFTs) and Digital Collectibles</li>
      <li>Central Bank Digital Currencies (CBDCs)</li>
      <li>Cross-Chain Interoperability and Blockchain Scaling Solutions</li>
      <li>Privacy Coins and Anonymity Solutions</li>
    </ul>
  }
/>

<AccordionItem
  title="12. Future of Cryptocurrency"
  bgColor="lightcyan"
  content={
    <ul>
      <li>Adoption Trends and Mainstream Acceptance</li>
      <li>Institutional Investment in Cryptocurrency</li>
      <li>Regulatory Developments and Global Policy Changes</li>
      <li>Potential Impact of Cryptocurrency on Traditional Financial Systems</li>
    </ul>
  }
/>

        </div>


        
      </div>
    </div>
    </div>
  );
}

export default CCCY;
