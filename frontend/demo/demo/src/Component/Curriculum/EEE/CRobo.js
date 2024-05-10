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
function CRobo() {
  return (
    <div className='EEEBG'>
    <div className="curriculum">
      <h1 className="curriculum-heading">CURRICULUM</h1>
      <div className="accordion-container">
        <div className="accordion-column">
        <AccordionItem
  title="1. Introduction to Robotics"
  bgColor="lightcyan"
  content={
    <div>
      <ul>
        <li>Definition and Scope of Robotics</li>
        <li>History and Evolution of Robotics</li>
        <li>Basic Components of Robots (Actuators, Sensors, Controllers)</li>
        <li>Applications and Importance of Robotics in Various Industries</li>
      </ul>
    </div>
  }
/>

<AccordionItem
  title="2. Robotics Hardware Platforms"
  bgColor="lightcyan"
  content={
    <div>
      <ul>
        <li>Robot Anatomy and Kinematics</li>
        <li>Types of Robotic Actuators (DC Motors, Servo Motors, Stepper Motors)</li>
        <li>Robot Sensors (Position, Proximity, Vision, Force/Torque)</li>
        <li>End Effectors and Grippers</li>
      </ul>
    </div>
  }
/>

<AccordionItem
  title="3. Robotics Software and Programming"
  bgColor="lightcyan"
  content={
    <div>
      <ul>
        <li>Robot Operating Systems (ROS)</li>
        <li>Programming Languages for Robotics (Python, C++, MATLAB)</li>
        <li>Robot Simulation Environments (Gazebo, V-REP)</li>
        <li>Motion Planning and Pathfinding Algorithms</li>
      </ul>
    </div>
  }
/>

<AccordionItem
  title="4. Robot Control Systems"
  bgColor="lightcyan"
  content={
    <div>
      <ul>
        <li>Closed-loop Control Systems</li>
        <li>PID Controllers for Motion Control</li>
        <li>Feedback and Error Correction Mechanisms</li>
        <li>Trajectory Generation and Execution</li>
      </ul>
    </div>
  }
/>

<AccordionItem
  title="5. Robot Perception and Sensing"
  bgColor="lightcyan"
  content={
    <div>
      <ul>
        <li>Sensor Fusion Techniques</li>
        <li>Vision-based Perception (Cameras, LiDAR, Depth Sensors)</li>
        <li>Object Detection and Recognition</li>
        <li>Localization and Mapping (SLAM)</li>
      </ul>
    </div>
  }
/>


        </div>

        
        <div className="accordion-column">
        
<AccordionItem
  title="6. Robot Manipulation and Grasping"
  bgColor="lightcyan"
  content={
    <div>
      <ul>
        <li>Kinematic and Dynamic Analysis of Robotic Arms</li>
        <li>Inverse Kinematics and Forward Kinematics</li>
        <li>Gripping Mechanisms and Grasping Strategies</li>
        <li>Pick-and-Place Operations</li>
      </ul>
    </div>
  }
/>

<AccordionItem
  title="7. Mobile Robotics and Navigation"
  bgColor="lightcyan"
  content={
    <div>
      <ul>
        <li>Wheeled and Tracked Mobile Robots</li>
        <li>Localization Techniques (Odometry, GPS, Beacons)</li>
        <li>Path Planning Algorithms (Dijkstra, A*, RRT)</li>
        <li>Obstacle Avoidance and Collision Detection</li>
      </ul>
    </div>
  }
/>

<AccordionItem
  title="8. Human-Robot Interaction (HRI)"
  bgColor="lightcyan"
  content={
    <div>
      <ul>
        <li>User Interface Design for Human-Robot Interaction</li>
        <li>Gesture Recognition and Natural Language Processing</li>
        <li>Collaborative Robotics (Cobots)</li>
        <li>Social and Ethical Considerations in HRI</li>
      </ul>
    </div>
  }
/>

<AccordionItem
  title="9. Robotics Applications and Case Studies"
  bgColor="lightcyan"
  content={
    <div>
      <ul>
        <li>Industrial Robotics (Manufacturing, Assembly, Welding)</li>
        <li>Service Robotics (Domestic Robots, Healthcare Robots)</li>
        <li>Autonomous Vehicles and Drones</li>
        <li>Agricultural Robotics and Robotic Farming</li>
      </ul>
    </div>
  }
/>

<AccordionItem
  title="10. Robotics Challenges and Future Trends"
  bgColor="lightcyan"
  content={
    <div>
      <ul>
        <li>Challenges in Robotics (Safety, Reliability, Autonomy)</li>
        <li>Emerging Technologies (Soft Robotics, Bio-inspired Robotics)</li>
        <li>Robotics in Space Exploration and Extraterrestrial Environments</li>
        <li>Integration of Robotics with AI and IoT</li>
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

export default CRobo;
