import React, { useState } from 'react';
import './Accordion1.css'; // Import external CSS file for styling
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
function CIOT() {
  return (
    <div className='EEEBG'>
    <div className="curriculum">
      <h1 className="curriculum-heading">CURRICULUM</h1>
      <div className="accordion-container">
        <div className="accordion-column">
        <AccordionItem
  title="1. Introduction to IoT"
  bgColor="lightcyan"
  content={
    <div>
      <ul>
        <li>Definition and Concept of IoT</li>
        <li>Evolution and History of IoT</li>
        <li>Key Components and Architecture of IoT Systems</li>
        <li>Applications and Use Cases of IoT in Various Industries</li>
      </ul>
    </div>
  }
/>

<AccordionItem
  title="2. Communication Protocols in IoT"
  bgColor="lightcyan"
  content={
    <div>
      <ul>
        <li>Overview of Communication Protocols (MQTT, CoAP, HTTP, etc.)</li>
        <li>IoT Network Topologies (Star, Mesh, Bus, etc.)</li>
        <li>Wireless Technologies for IoT (Wi-Fi, Bluetooth, Zigbee, LoRa, etc.)</li>
        <li>IoT Security and Privacy Concerns</li>
      </ul>
    </div>
  }
/>

<AccordionItem
  title="3. IoT Devices and Sensors"
  bgColor="lightcyan"
  content={
    <div>
      <ul>
        <li>Types of IoT Devices (Sensors, Actuators, Embedded Systems, etc.)</li>
        <li>Sensor Technologies and Classification</li>
        <li>Integration of Sensors with IoT Platforms</li>
        <li>Power Management and Energy Harvesting for IoT Devices</li>
      </ul>
    </div>
  }
/>

<AccordionItem
  title="4. IoT Data Management"
  bgColor="lightcyan"
  content={
    <div>
      <ul>
        <li>Data Acquisition and Collection in IoT Systems</li>
        <li>Data Processing and Analysis Techniques</li>
        <li>Data Storage and Management Solutions for IoT (Cloud, Edge, Fog Computing)</li>
        <li>Real-time Data Streaming and Analytics</li>
      </ul>
    </div>
  }
/>

<AccordionItem
  title="5. IoT Platforms and Frameworks"
  bgColor="lightcyan"
  content={
    <div>
      <ul>
        <li>Overview of IoT Platforms (AWS IoT, Azure IoT, Google Cloud IoT, etc.)</li>
        <li>IoT Development Frameworks and Tools</li>
        <li>Device Management and Provisioning</li>
        <li>Application Enablement Platforms (AEPs) for IoT</li>
      </ul>
    </div>
  }
/>

        </div>

        
        <div className="accordion-column">
        
<AccordionItem
  title="6. IoT Applications and Case Studies"
  bgColor="lightcyan"
  content={
    <div>
      <ul>
        <li>Smart Home Automation</li>
        <li>Industrial IoT (IIoT) and Industry 4.0</li>
        <li>Healthcare and Wearable Devices</li>
        <li>Smart Cities and Urban Infrastructure</li>
        <li>Agriculture and Environmental Monitoring</li>
      </ul>
    </div>
  }
/>

<AccordionItem
  title="7. IoT Connectivity and Integration"
  bgColor="lightcyan"
  content={
    <div>
      <ul>
        <li>Integration with Existing IT Systems and Enterprise Applications</li>
        <li>Interoperability Standards and Middleware Solutions</li>
        <li>Edge Computing and Edge Analytics in IoT</li>
        <li>Integration with Big Data and Machine Learning Platforms</li>
      </ul>
    </div>
  }
/>

<AccordionItem
  title="8. IoT Security and Privacy"
  bgColor="lightcyan"
  content={
    <div>
      <ul>
        <li>Threats and Vulnerabilities in IoT Systems</li>
        <li>Authentication and Access Control Mechanisms</li>
        <li>Data Encryption and Secure Communication Protocols</li>
        <li>Regulatory Compliance and Best Practices for IoT Security</li>
      </ul>
    </div>
  }
/>

<AccordionItem
  title="9. IoT Standards and Ecosystem"
  bgColor="lightcyan"
  content={
    <div>
      <ul>
        <li>Standardization Organizations (IEEE, IETF, ISO, etc.)</li>
        <li>IoT Reference Architectures and Frameworks (IoT-A, OMA LWM2M, etc.)</li>
        <li>Open Source Initiatives and Communities in IoT Development</li>
        <li>Collaboration and Partnerships in the IoT Industry</li>
      </ul>
    </div>
  }
/>

<AccordionItem
  title="10. Future Trends and Challenges in IoT"
  bgColor="lightcyan"
  content={
    <div>
      <ul>
        <li>Emerging Technologies (5G, Edge AI, Blockchain, etc.)</li>
        <li>Scalability and Interoperability Challenges</li>
        <li>Sustainability and Environmental Impact of IoT</li>
        <li>Ethical and Social Implications of Pervasive Connectivity</li>
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

export default CIOT;
