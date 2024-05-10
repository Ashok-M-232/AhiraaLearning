import React, { useState } from 'react';
import './AccordionMgmt.css'; // Import external CSS file for styling
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

// AccordionItem component
function AccordionItem({ title, content }) {
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
function CDM() {
  return (
    <div className='MGBG'>
    <div className="curriculum">
      <h1 className="curriculum-heading">Curriculum</h1>
      <div className="accordion-container">
        <div className="accordion-column">
        <AccordionItem
  title="1. Introduction to Digital Marketing"
  bgColor="lightcyan"
  content={
    <ul>
      <li>Definition and Scope of Digital Marketing</li>
      <li>Evolution of Digital Marketing Channels</li>
      <li>Importance of Digital Marketing in Today's Business Landscape</li>
      <li>Key Concepts: SEO, SEM, PPC, Social Media Marketing, Email Marketing, Content Marketing, etc.</li>
    </ul>
  }
/>

<AccordionItem
  title="2. Digital Marketing Strategy Development"
  bgColor="lightcyan"
  content={
    <ul>
      <li>Setting SMART Goals for Digital Marketing Campaigns</li>
      <li>Understanding Target Audience and Buyer Personas</li>
      <li>Competitive Analysis and Market Research</li>
      <li>Developing a Digital Marketing Plan and Budget</li>
    </ul>
  }
/>

<AccordionItem
  title="3. Website Optimization and User Experience (UX)"
  bgColor="lightcyan"
  content={
    <ul>
      <li>Basics of Website Design and Development</li>
      <li>User-Centric Design Principles</li>
      <li>Mobile Responsiveness and Cross-Browser Compatibility</li>
      <li>Conversion Rate Optimization (CRO) Techniques</li>
    </ul>
  }
/>

<AccordionItem
  title="4. Search Engine Optimization (SEO)"
  bgColor="lightcyan"
  content={
    <ul>
      <li>On-Page SEO Optimization (Keyword Research, Meta Tags, Content Optimization)</li>
      <li>Off-Page SEO Techniques (Link Building, Social Signals)</li>
      <li>Technical SEO (Site Structure, XML Sitemaps, Page Speed Optimization)</li>
      <li>SEO Tools and Analytics (Google Search Console, Google Analytics, SEMrush, Moz)</li>
    </ul>
  }
/>

<AccordionItem
  title="5. Search Engine Marketing (SEM) and Pay-Per-Click (PPC) Advertising"
  bgColor="lightcyan"
  content={
    <ul>
      <li>Introduction to SEM and PPC Advertising Platforms (Google Ads, Bing Ads)</li>
      <li>Keyword Research and Selection</li>
      <li>Ad Copywriting and Ad Extensions</li>
      <li>Bid Management and Budget Optimization</li>
    </ul>
  }
/>

<AccordionItem
  title="6. Social Media Marketing (SMM)"
  bgColor="lightcyan"
  content={
    <ul>
      <li>Social Media Platforms Overview (Facebook, Instagram, Twitter, LinkedIn, etc.)</li>
      <li>Creating Engaging Content for Social Media</li>
      <li>Social Media Advertising and Targeting Options</li>
      <li>Community Management and Engagement Strategies</li>
    </ul>
  }
/>


        </div>

        
        <div className="accordion-column">
        
<AccordionItem
  title="7. Email Marketing"
  bgColor="lightcyan"
  content={
    <ul>
      <li>Building Email Lists and Segmentation</li>
      <li>Email Campaign Planning and Automation</li>
      <li>Email Design Best Practices</li>
      <li>Email Analytics and Performance Tracking</li>
    </ul>
  }
/>

<AccordionItem
  title="8. Content Marketing"
  bgColor="lightcyan"
  content={
    <ul>
      <li>Content Strategy Development</li>
      <li>Content Creation and Distribution (Blogs, Videos, Infographics, eBooks, etc.)</li>
      <li>Content Promotion and Amplification</li>
      <li>Measuring Content Marketing ROI</li>
    </ul>
  }
/>

<AccordionItem
  title="9. Influencer Marketing and Affiliate Marketing"
  bgColor="lightcyan"
  content={
    <ul>
      <li>Identifying and Engaging with Influencers</li>
      <li>Setting up Affiliate Marketing Programs</li>
      <li>Partnering with Affiliates and Influencers</li>
      <li>Tracking and Analyzing Influencer and Affiliate Campaign Performance</li>
    </ul>
  }
/>

<AccordionItem
  title="10. Marketing Analytics and Data Interpretation"
  bgColor="lightcyan"
  content={
    <ul>
      <li>Key Performance Indicators (KPIs) in Digital Marketing</li>
      <li>Google Analytics Metrics and Reports</li>
      <li>Conversion Tracking and Attribution Modeling</li>
      <li>A/B Testing and Multivariate Testing</li>
    </ul>
  }
/>

<AccordionItem
  title="11. Digital Marketing Tools and Technologies"
  bgColor="lightcyan"
  content={
    <ul>
      <li>Marketing Automation Platforms (HubSpot, Marketo, etc.)</li>
      <li>Social Media Management Tools (Hootsuite, Buffer, etc.)</li>
      <li>SEO and SEM Tools (SEMrush, Ahrefs, etc.)</li>
      <li>Email Marketing Software (Mailchimp, Constant Contact, etc.)</li>
    </ul>
  }
/>

<AccordionItem
  title="12. Ethical and Legal Considerations in Digital Marketing"
  bgColor="lightcyan"
  content={
    <ul>
      <li>Privacy and Data Protection Regulations (GDPR, CCPA)</li>
      <li>Ethical Marketing Practices (Transparency, Honesty, Respect)</li>
      <li>Intellectual Property Rights and Copyright Compliance</li>
      <li>Avoiding Fraudulent Activities and Ad Fraud</li>
    </ul>
  }
/>
        </div>


        
      </div>
    </div>
    </div>
  );
}

export default CDM;
