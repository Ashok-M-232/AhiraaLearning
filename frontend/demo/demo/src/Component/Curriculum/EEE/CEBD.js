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
function CEBD() {
  return (
    <div className='EEEBG'>
    <div className="curriculum">
      <h1 className="curriculum-heading">CURRICULUM</h1>
      <div className="accordion-container">
        <div className="accordion-column">
        <AccordionItem
  title="1. Introduction to Embedded Systems"
  bgColor="lightcyan"
  content={
    <div>
      <ul>
        <li>Definition and Characteristics of Embedded Systems</li>
        <li>Embedded System Components (Microcontrollers, Microprocessors, Sensors, Actuators)</li>
        <li>Embedded System Applications and Examples</li>
        <li>Challenges and Constraints in Embedded System Design</li>
      </ul>
    </div>
  }
/>

<AccordionItem
  title="2. Embedded Hardware Platforms"
  bgColor="lightcyan"
  content={
    <div>
      <ul>
        <li>Microcontroller Architecture and Selection Criteria</li>
        <li>Microprocessor-based Embedded Systems</li>
        <li>System-on-Chip (SoC) and Field-Programmable Gate Arrays (FPGAs)</li>
        <li>Single-board Computers and Development Kits (Arduino, Raspberry Pi, BeagleBone)</li>
      </ul>
    </div>
  }
/>

<AccordionItem
  title="3. Embedded Software Development"
  bgColor="lightcyan"
  content={
    <div>
      <ul>
        <li>Embedded Operating Systems (RTOS, Linux, FreeRTOS, etc.)</li>
        <li>Firmware Development and Embedded Programming Languages (C, C++, Assembly)</li>
        <li>Real-time Embedded Software Design Considerations</li>
        <li>Embedded Software Tools and Integrated Development Environments (IDEs)</li>
      </ul>
    </div>
  }
/>

<AccordionItem
  title="4. Embedded System Interfacing and Communication"
  bgColor="lightcyan"
  content={
    <div>
      <ul>
        <li>Serial Communication Protocols (UART, SPI, I2C)</li>
        <li>Parallel Communication Interfaces (GPIO, Parallel Port)</li>
        <li>Wireless Communication Technologies (Bluetooth, Wi-Fi, Zigbee, LoRa)</li>
        <li>Sensor Interfacing and Data Acquisition Techniques</li>
      </ul>
    </div>
  }
/>

<AccordionItem
  title="5. Embedded System Sensors and Actuators"
  bgColor="lightcyan"
  content={
    <div>
      <ul>
        <li>Types of Sensors (Temperature, Humidity, Motion, etc.)</li>
        <li>Sensor Selection and Characteristics</li>
        <li>Actuator Types (Motors, Servos, Solenoids, etc.)</li>
        <li>Interfacing Sensors and Actuators with Embedded Systems</li>
      </ul>
    </div>
  }
/>

<AccordionItem
  title="6. Embedded System Design and Development Process"
  bgColor="lightcyan"
  content={
    <div>
      <ul>
        <li>Requirements Analysis and Specification</li>
        <li>System Architecture and Design Patterns</li>
        <li>Prototyping and Simulation Techniques</li>
        <li>Testing and Validation Strategies for Embedded Systems</li>
      </ul>
    </div>
  }
/>

        </div>

        
        <div className="accordion-column">
        
<AccordionItem
  title="7. Embedded System Power Management and Optimization"
  bgColor="lightcyan"
  content={
    <div>
      <ul>
        <li>Power Supply Design and Management</li>
        <li>Low Power Techniques and Energy Harvesting</li>
        <li>Sleep Modes and Power Consumption Optimization</li>
        <li>Battery Management Systems (BMS) for Embedded Systems</li>
      </ul>
    </div>
  }
/>

<AccordionItem
  title="8. Embedded System Security and Safety"
  bgColor="lightcyan"
  content={
    <div>
      <ul>
        <li>Security Threats and Vulnerabilities in Embedded Systems</li>
        <li>Secure Boot and Firmware Update Mechanisms</li>
        <li>Encryption and Authentication Techniques</li>
        <li>Safety Standards and Compliance in Embedded System Design</li>
      </ul>
    </div>
  }
/>

<AccordionItem
  title="9. Embedded System Networking and IoT Integration"
  bgColor="lightcyan"
  content={
    <div>
      <ul>
        <li>Embedded Web Servers and Networking Protocols (TCP/IP, HTTP, MQTT)</li>
        <li>Integration with IoT Platforms and Cloud Services</li>
        <li>Edge Computing and Data Processing in Embedded Systems</li>
        <li>Security Considerations for Connected Embedded Devices</li>
      </ul>
    </div>
  }
/>

<AccordionItem
  title="10. Embedded System Applications and Case Studies"
  bgColor="lightcyan"
  content={
    <div>
      <ul>
        <li>Automotive Embedded Systems</li>
        <li>Consumer Electronics (Smartphones, Wearables, Home Automation)</li>
        <li>Industrial Automation and Control Systems</li>
        <li>Medical Devices and Healthcare Applications</li>
      </ul>
    </div>
  }
/>

<AccordionItem
  title="11. Future Trends and Emerging Technologies in Embedded Systems"
  bgColor="lightcyan"
  content={
    <div>
      <ul>
        <li>Internet of Things (IoT) and Embedded Systems Integration</li>
        <li>Artificial Intelligence and Machine Learning in Embedded Systems</li>
        <li>Edge Computing and Distributed Embedded Systems</li>
        <li>Wearable Computing and Augmented Reality</li>
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

export default CEBD;
