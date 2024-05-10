import React, { useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './Marquee.css'; // Import your custom CSS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faCodepen,
  faFreeCodeCamp,
  faDev,
  faReact,
  faVuejs,
  faAngular,
  faNode,
  faWordpress,
  faAws,
  faDocker,
  faAndroid,
  faJava,
  faPython,
  faHtml5,
  faCss3Alt,
  faBootstrap,
  faPhp,
  faSwift,
  faJenkins,
  faLaravel,
  faJira,
  faRedhat,
  faRaspberryPi,
} from '@fortawesome/free-brands-svg-icons';

import {
  faLock,
  faCloud,
  faServer,
  faCodeBranch,
} from '@fortawesome/free-solid-svg-icons';

function Marquee() {
  const marqueeContentRef = useRef(null);

  useEffect(() => {
    const root = document.documentElement;
    const marqueeElementsDisplayed = parseInt(getComputedStyle(root).getPropertyValue("--marquee-elements-displayed"), 10);
    const marqueeContent = marqueeContentRef.current;

    root.style.setProperty("--marquee-elements", marqueeContent.children.length);

    for (let i = 0; i < marqueeElementsDisplayed; i++) {
      marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
    }
  }, []);

  return (<div className='bg-dark'>
    <div className='container p-3 bg-dark rounded'> {/* Use Bootstrap classes */}
      <div className="marquee">
        <ul className="marquee-content d-flex align-items-center" ref={marqueeContentRef}>
          {/* Render FontAwesome icons */}
          <li className="mx-3">
            <FontAwesomeIcon icon={faGithub} size="2x" style={{ color: '#000000' }} />
          </li>
          <li className="mx-3">
            <FontAwesomeIcon icon={faCodepen} size="2x" style={{ color: '#000000' }} />
          </li>
          <li className="mx-3">
            <FontAwesomeIcon icon={faFreeCodeCamp} size="2x" style={{ color: '#006400' }} />
          </li>
          <li className="mx-3">
            <FontAwesomeIcon icon={faDev} size="2x" style={{ color: '#000000' }} />
          </li>
          <li className="mx-3">
            <FontAwesomeIcon icon={faReact} size="2x" style={{ color: '#61DBFB' }} />
          </li>
          <li className="mx-3">
            <FontAwesomeIcon icon={faVuejs} size="2x" style={{ color: '#4FC08D' }} />
          </li>
          <li className="mx-3">
            <FontAwesomeIcon icon={faAngular} size="2x" style={{ color: '#DD0031' }} />
          </li>
          <li className="mx-3">
            <FontAwesomeIcon icon={faNode} size="2x" style={{ color: '#68A063' }} />
          </li>
          <li className="mx-3">
            <FontAwesomeIcon icon={faWordpress} size="2x" style={{ color: '#21759B' }} />
          </li>
          <li className="mx-3">
  <FontAwesomeIcon icon={faDev} size="2x" style={{ color: '#000000' }} />
</li>

<li className="mx-3">
  <FontAwesomeIcon icon={faReact} size="2x" style={{ color: '#61DBFB' }} />
</li>

<li className="mx-3">
  <FontAwesomeIcon icon={faVuejs} size="2x" style={{ color: '#4FC08D' }} />
</li>

<li className="mx-3">
  <FontAwesomeIcon icon={faAngular} size="2x" style={{ color: '#DD0031' }} />
</li>

<li className="mx-3">
  <FontAwesomeIcon icon={faNode} size="2x" style={{ color: '#68A063' }} />
</li>

<li className="mx-3">
  <FontAwesomeIcon icon={faWordpress} size="2x" style={{ color: '#21759B' }} />
</li>

<li className="mx-3">
  <FontAwesomeIcon icon={faAws} size="2x" style={{ color: '#FF9900' }} />
</li>

<li className="mx-3">
  <FontAwesomeIcon icon={faDocker} size="2x" style={{ color: '#0DB7ED' }} />
</li>

<li className="mx-3">
  <FontAwesomeIcon icon={faAndroid} size="2x" style={{ color: '#3DDC84' }} />
</li>

<li className="mx-3">
  <FontAwesomeIcon icon={faJava} size="2x" style={{ color: '#007396' }} />
</li>

<li className="mx-3">
  <FontAwesomeIcon icon={faPython} size="2x" style={{ color: '#3776AB' }} />
</li>

<li className="mx-3">
  <FontAwesomeIcon icon={faHtml5} size="2x" style={{ color: '#E34F26' }} />
</li>

<li className="mx-3">
  <FontAwesomeIcon icon={faCss3Alt} size="2x" style={{ color: '#1572B6' }} />
</li>

<li className="mx-3">
  <FontAwesomeIcon icon={faBootstrap} size="2x" style={{ color: '#7952B3' }} />
</li>

<li className="mx-3">
  <FontAwesomeIcon icon={faPhp} size="2x" style={{ color: '#8892BF' }} />
</li>

<li className="mx-3">
  <FontAwesomeIcon icon={faSwift} size="2x" style={{ color: '#FA7343' }} />
</li>

<li className="mx-3">
  <FontAwesomeIcon icon={faJenkins} size="2x" style={{ color: '#D24939' }} />
</li>

<li className="mx-3">
  <FontAwesomeIcon icon={faLaravel} size="2x" style={{ color: '#FF2D20' }} />
</li>

<li className="mx-3">
  <FontAwesomeIcon icon={faJira} size="2x" style={{ color: '#0052CC' }} />
</li>

<li className="mx-3">
  <FontAwesomeIcon icon={faRedhat} size="2x" style={{ color: '#EE0000' }} />
</li>

<li className="mx-3">
  <FontAwesomeIcon icon={faRaspberryPi} size="2x" style={{ color: '#C51A4A' }} />
</li>
          <li className="mx-3">
            <FontAwesomeIcon icon={faGithub} size="2x" style={{ color: '#000000' }} />
          </li>
          <li className="mx-3">
            <FontAwesomeIcon icon={faCodepen} size="2x" style={{ color: '#000000' }} />
          </li>
          <li className="mx-3">
            <FontAwesomeIcon icon={faFreeCodeCamp} size="2x" style={{ color: '#006400' }} />
          </li>
          <li className="mx-3">
            <FontAwesomeIcon icon={faDev} size="2x" style={{ color: '#000000' }} />
          </li>
          <li className="mx-3">
            <FontAwesomeIcon icon={faReact} size="2x" style={{ color: '#61DBFB' }} />
          </li>
          <li className="mx-3">
            <FontAwesomeIcon icon={faVuejs} size="2x" style={{ color: '#4FC08D' }} />
          </li>
          <li className="mx-3">
            <FontAwesomeIcon icon={faAngular} size="2x" style={{ color: '#DD0031' }} />
          </li>
          <li className="mx-3">
            <FontAwesomeIcon icon={faNode} size="2x" style={{ color: '#68A063' }} />
          </li>
          <li className="mx-3">
            <FontAwesomeIcon icon={faWordpress} size="2x" style={{ color: '#21759B' }} />
          </li>
          <li className="mx-3">
  <FontAwesomeIcon icon={faDev} size="2x" style={{ color: '#000000' }} />
</li>

<li className="mx-3">
  <FontAwesomeIcon icon={faReact} size="2x" style={{ color: '#61DBFB' }} />
</li>

<li className="mx-3">
  <FontAwesomeIcon icon={faVuejs} size="2x" style={{ color: '#4FC08D' }} />
</li>

<li className="mx-3">
  <FontAwesomeIcon icon={faAngular} size="2x" style={{ color: '#DD0031' }} />
</li>

<li className="mx-3">
  <FontAwesomeIcon icon={faNode} size="2x" style={{ color: '#68A063' }} />
</li>

<li className="mx-3">
  <FontAwesomeIcon icon={faWordpress} size="2x" style={{ color: '#21759B' }} />
</li>

<li className="mx-3">
  <FontAwesomeIcon icon={faAws} size="2x" style={{ color: '#FF9900' }} />
</li>

<li className="mx-3">
  <FontAwesomeIcon icon={faDocker} size="2x" style={{ color: '#0DB7ED' }} />
</li>

<li className="mx-3">
  <FontAwesomeIcon icon={faAndroid} size="2x" style={{ color: '#3DDC84' }} />
</li>

<li className="mx-3">
  <FontAwesomeIcon icon={faJava} size="2x" style={{ color: '#007396' }} />
</li>

<li className="mx-3">
  <FontAwesomeIcon icon={faPython} size="2x" style={{ color: '#3776AB' }} />
</li>

<li className="mx-3">
  <FontAwesomeIcon icon={faHtml5} size="2x" style={{ color: '#E34F26' }} />
</li>

<li className="mx-3">
  <FontAwesomeIcon icon={faCss3Alt} size="2x" style={{ color: '#1572B6' }} />
</li>

<li className="mx-3">
  <FontAwesomeIcon icon={faBootstrap} size="2x" style={{ color: '#7952B3' }} />
</li>

<li className="mx-3">
  <FontAwesomeIcon icon={faPhp} size="2x" style={{ color: '#8892BF' }} />
</li>

<li className="mx-3">
  <FontAwesomeIcon icon={faSwift} size="2x" style={{ color: '#FA7343' }} />
</li>

<li className="mx-3">
  <FontAwesomeIcon icon={faJenkins} size="2x" style={{ color: '#D24939' }} />
</li>

<li className="mx-3">
  <FontAwesomeIcon icon={faLaravel} size="2x" style={{ color: '#FF2D20' }} />
</li>

<li className="mx-3">
  <FontAwesomeIcon icon={faJira} size="2x" style={{ color: '#0052CC' }} />
</li>

<li className="mx-3">
  <FontAwesomeIcon icon={faRedhat} size="2x" style={{ color: '#EE0000' }} />
</li>

<li className="mx-3">
  <FontAwesomeIcon icon={faRaspberryPi} size="2x" style={{ color: '#C51A4A' }} />
</li>
          <li className="mx-3">
            <FontAwesomeIcon icon={faGithub} size="2x" style={{ color: '#000000' }} />
          </li>
          <li className="mx-3">
            <FontAwesomeIcon icon={faCodepen} size="2x" style={{ color: '#000000' }} />
          </li>
          <li className="mx-3">
            <FontAwesomeIcon icon={faFreeCodeCamp} size="2x" style={{ color: '#006400' }} />
          </li>
          <li className="mx-3">
            <FontAwesomeIcon icon={faDev} size="2x" style={{ color: '#000000' }} />
          </li>
          <li className="mx-3">
            <FontAwesomeIcon icon={faReact} size="2x" style={{ color: '#61DBFB' }} />
          </li>
          <li className="mx-3">
            <FontAwesomeIcon icon={faVuejs} size="2x" style={{ color: '#4FC08D' }} />
          </li>
          <li className="mx-3">
            <FontAwesomeIcon icon={faAngular} size="2x" style={{ color: '#DD0031' }} />
          </li>
          <li className="mx-3">
            <FontAwesomeIcon icon={faNode} size="2x" style={{ color: '#68A063' }} />
          </li>
          <li className="mx-3">
            <FontAwesomeIcon icon={faWordpress} size="2x" style={{ color: '#21759B' }} />
          </li>
          <li className="mx-3">
  <FontAwesomeIcon icon={faDev} size="2x" style={{ color: '#000000' }} />
</li>

<li className="mx-3">
  <FontAwesomeIcon icon={faReact} size="2x" style={{ color: '#61DBFB' }} />
</li>

<li className="mx-3">
  <FontAwesomeIcon icon={faVuejs} size="2x" style={{ color: '#4FC08D' }} />
</li>

<li className="mx-3">
  <FontAwesomeIcon icon={faAngular} size="2x" style={{ color: '#DD0031' }} />
</li>

<li className="mx-3">
  <FontAwesomeIcon icon={faNode} size="2x" style={{ color: '#68A063' }} />
</li>

<li className="mx-3">
  <FontAwesomeIcon icon={faWordpress} size="2x" style={{ color: '#21759B' }} />
</li>

<li className="mx-3">
  <FontAwesomeIcon icon={faAws} size="2x" style={{ color: '#FF9900' }} />
</li>

<li className="mx-3">
  <FontAwesomeIcon icon={faDocker} size="2x" style={{ color: '#0DB7ED' }} />
</li>

<li className="mx-3">
  <FontAwesomeIcon icon={faAndroid} size="2x" style={{ color: '#3DDC84' }} />
</li>

<li className="mx-3">
  <FontAwesomeIcon icon={faJava} size="2x" style={{ color: '#007396' }} />
</li>

<li className="mx-3">
  <FontAwesomeIcon icon={faPython} size="2x" style={{ color: '#3776AB' }} />
</li>

<li className="mx-3">
  <FontAwesomeIcon icon={faHtml5} size="2x" style={{ color: '#E34F26' }} />
</li>

<li className="mx-3">
  <FontAwesomeIcon icon={faCss3Alt} size="2x" style={{ color: '#1572B6' }} />
</li>

<li className="mx-3">
  <FontAwesomeIcon icon={faBootstrap} size="2x" style={{ color: '#7952B3' }} />
</li>

<li className="mx-3">
  <FontAwesomeIcon icon={faPhp} size="2x" style={{ color: '#8892BF' }} />
</li>

<li className="mx-3">
  <FontAwesomeIcon icon={faSwift} size="2x" style={{ color: '#FA7343' }} />
</li>

<li className="mx-3">
  <FontAwesomeIcon icon={faJenkins} size="2x" style={{ color: '#D24939' }} />
</li>

<li className="mx-3">
  <FontAwesomeIcon icon={faLaravel} size="2x" style={{ color: '#FF2D20' }} />
</li>

<li className="mx-3">
  <FontAwesomeIcon icon={faJira} size="2x" style={{ color: '#0052CC' }} />
</li>

<li className="mx-3">
  <FontAwesomeIcon icon={faRedhat} size="2x" style={{ color: '#EE0000' }} />
</li>

<li className="mx-3">
  <FontAwesomeIcon icon={faRaspberryPi} size="2x" style={{ color: '#C51A4A' }} />
</li>
          <li className="mx-3">
            <FontAwesomeIcon icon={faGithub} size="2x" style={{ color: '#000000' }} />
          </li>
          <li className="mx-3">
            <FontAwesomeIcon icon={faCodepen} size="2x" style={{ color: '#000000' }} />
          </li>
          <li className="mx-3">
            <FontAwesomeIcon icon={faFreeCodeCamp} size="2x" style={{ color: '#006400' }} />
          </li>
          <li className="mx-3">
            <FontAwesomeIcon icon={faDev} size="2x" style={{ color: '#000000' }} />
          </li>
          <li className="mx-3">
            <FontAwesomeIcon icon={faReact} size="2x" style={{ color: '#61DBFB' }} />
          </li>
          <li className="mx-3">
            <FontAwesomeIcon icon={faVuejs} size="2x" style={{ color: '#4FC08D' }} />
          </li>
          <li className="mx-3">
            <FontAwesomeIcon icon={faAngular} size="2x" style={{ color: '#DD0031' }} />
          </li>
          <li className="mx-3">
            <FontAwesomeIcon icon={faNode} size="2x" style={{ color: '#68A063' }} />
          </li>
          <li className="mx-3">
            <FontAwesomeIcon icon={faWordpress} size="2x" style={{ color: '#21759B' }} />
          </li>
          <li className="mx-3">
  <FontAwesomeIcon icon={faDev} size="2x" style={{ color: '#000000' }} />
</li>

<li className="mx-3">
  <FontAwesomeIcon icon={faReact} size="2x" style={{ color: '#61DBFB' }} />
</li>

<li className="mx-3">
  <FontAwesomeIcon icon={faVuejs} size="2x" style={{ color: '#4FC08D' }} />
</li>

<li className="mx-3">
  <FontAwesomeIcon icon={faAngular} size="2x" style={{ color: '#DD0031' }} />
</li>

<li className="mx-3">
  <FontAwesomeIcon icon={faNode} size="2x" style={{ color: '#68A063' }} />
</li>

<li className="mx-3">
  <FontAwesomeIcon icon={faWordpress} size="2x" style={{ color: '#21759B' }} />
</li>

<li className="mx-3">
  <FontAwesomeIcon icon={faAws} size="2x" style={{ color: '#FF9900' }} />
</li>

<li className="mx-3">
  <FontAwesomeIcon icon={faDocker} size="2x" style={{ color: '#0DB7ED' }} />
</li>

<li className="mx-3">
  <FontAwesomeIcon icon={faAndroid} size="2x" style={{ color: '#3DDC84' }} />
</li>

<li className="mx-3">
  <FontAwesomeIcon icon={faJava} size="2x" style={{ color: '#007396' }} />
</li>

<li className="mx-3">
  <FontAwesomeIcon icon={faPython} size="2x" style={{ color: '#3776AB' }} />
</li>

<li className="mx-3">
  <FontAwesomeIcon icon={faHtml5} size="2x" style={{ color: '#E34F26' }} />
</li>

<li className="mx-3">
  <FontAwesomeIcon icon={faCss3Alt} size="2x" style={{ color: '#1572B6' }} />
</li>

<li className="mx-3">
  <FontAwesomeIcon icon={faBootstrap} size="2x" style={{ color: '#7952B3' }} />
</li>

<li className="mx-3">
  <FontAwesomeIcon icon={faPhp} size="2x" style={{ color: '#8892BF' }} />
</li>

<li className="mx-3">
  <FontAwesomeIcon icon={faSwift} size="2x" style={{ color: '#FA7343' }} />
</li>

<li className="mx-3">
  <FontAwesomeIcon icon={faJenkins} size="2x" style={{ color: '#D24939' }} />
</li>

<li className="mx-3">
  <FontAwesomeIcon icon={faLaravel} size="2x" style={{ color: '#FF2D20' }} />
</li>

<li className="mx-3">
  <FontAwesomeIcon icon={faJira} size="2x" style={{ color: '#0052CC' }} />
</li>

<li className="mx-3">
  <FontAwesomeIcon icon={faRedhat} size="2x" style={{ color: '#EE0000' }} />
</li>

<li className="mx-3">
  <FontAwesomeIcon icon={faRaspberryPi} size="2x" style={{ color: '#C51A4A' }} />
</li>
          <li className="mx-3">
            <FontAwesomeIcon icon={faGithub} size="2x" style={{ color: '#000000' }} />
          </li>
          <li className="mx-3">
            <FontAwesomeIcon icon={faCodepen} size="2x" style={{ color: '#000000' }} />
          </li>
          <li className="mx-3">
            <FontAwesomeIcon icon={faFreeCodeCamp} size="2x" style={{ color: '#006400' }} />
          </li>
          <li className="mx-3">
            <FontAwesomeIcon icon={faDev} size="2x" style={{ color: '#000000' }} />
          </li>
          <li className="mx-3">
            <FontAwesomeIcon icon={faReact} size="2x" style={{ color: '#61DBFB' }} />
          </li>
          <li className="mx-3">
            <FontAwesomeIcon icon={faVuejs} size="2x" style={{ color: '#4FC08D' }} />
          </li>
          <li className="mx-3">
            <FontAwesomeIcon icon={faAngular} size="2x" style={{ color: '#DD0031' }} />
          </li>
          <li className="mx-3">
            <FontAwesomeIcon icon={faNode} size="2x" style={{ color: '#68A063' }} />
          </li>
          <li className="mx-3">
            <FontAwesomeIcon icon={faWordpress} size="2x" style={{ color: '#21759B' }} />
          </li>
          <li className="mx-3">
  <FontAwesomeIcon icon={faDev} size="2x" style={{ color: '#000000' }} />
</li>

<li className="mx-3">
  <FontAwesomeIcon icon={faReact} size="2x" style={{ color: '#61DBFB' }} />
</li>

<li className="mx-3">
  <FontAwesomeIcon icon={faVuejs} size="2x" style={{ color: '#4FC08D' }} />
</li>

<li className="mx-3">
  <FontAwesomeIcon icon={faAngular} size="2x" style={{ color: '#DD0031' }} />
</li>

<li className="mx-3">
  <FontAwesomeIcon icon={faNode} size="2x" style={{ color: '#68A063' }} />
</li>

<li className="mx-3">
  <FontAwesomeIcon icon={faWordpress} size="2x" style={{ color: '#21759B' }} />
</li>

<li className="mx-3">
  <FontAwesomeIcon icon={faAws} size="2x" style={{ color: '#FF9900' }} />
</li>

<li className="mx-3">
  <FontAwesomeIcon icon={faDocker} size="2x" style={{ color: '#0DB7ED' }} />
</li>

<li className="mx-3">
  <FontAwesomeIcon icon={faAndroid} size="2x" style={{ color: '#3DDC84' }} />
</li>

<li className="mx-3">
  <FontAwesomeIcon icon={faJava} size="2x" style={{ color: '#007396' }} />
</li>

<li className="mx-3">
  <FontAwesomeIcon icon={faPython} size="2x" style={{ color: '#3776AB' }} />
</li>

<li className="mx-3">
  <FontAwesomeIcon icon={faHtml5} size="2x" style={{ color: '#E34F26' }} />
</li>

<li className="mx-3">
  <FontAwesomeIcon icon={faCss3Alt} size="2x" style={{ color: '#1572B6' }} />
</li>

<li className="mx-3">
  <FontAwesomeIcon icon={faBootstrap} size="2x" style={{ color: '#7952B3' }} />
</li>

<li className="mx-3">
  <FontAwesomeIcon icon={faPhp} size="2x" style={{ color: '#8892BF' }} />
</li>

<li className="mx-3">
  <FontAwesomeIcon icon={faSwift} size="2x" style={{ color: '#FA7343' }} />
</li>

<li className="mx-3">
  <FontAwesomeIcon icon={faJenkins} size="2x" style={{ color: '#D24939' }} />
</li>

<li className="mx-3">
  <FontAwesomeIcon icon={faLaravel} size="2x" style={{ color: '#FF2D20' }} />
</li>

<li className="mx-3">
  <FontAwesomeIcon icon={faJira} size="2x" style={{ color: '#0052CC' }} />
</li>

<li className="mx-3">
  <FontAwesomeIcon icon={faRedhat} size="2x" style={{ color: '#EE0000' }} />
</li>

<li className="mx-3">
  <FontAwesomeIcon icon={faRaspberryPi} size="2x" style={{ color: '#C51A4A' }} />
</li>
          <li className="mx-3">
            <FontAwesomeIcon icon={faGithub} size="2x" style={{ color: '#000000' }} />
          </li>
          <li className="mx-3">
            <FontAwesomeIcon icon={faCodepen} size="2x" style={{ color: '#000000' }} />
          </li>
          <li className="mx-3">
            <FontAwesomeIcon icon={faFreeCodeCamp} size="2x" style={{ color: '#006400' }} />
          </li>
          <li className="mx-3">
            <FontAwesomeIcon icon={faDev} size="2x" style={{ color: '#000000' }} />
          </li>
          <li className="mx-3">
            <FontAwesomeIcon icon={faReact} size="2x" style={{ color: '#61DBFB' }} />
          </li>
          <li className="mx-3">
            <FontAwesomeIcon icon={faVuejs} size="2x" style={{ color: '#4FC08D' }} />
          </li>
          <li className="mx-3">
            <FontAwesomeIcon icon={faAngular} size="2x" style={{ color: '#DD0031' }} />
          </li>
          <li className="mx-3">
            <FontAwesomeIcon icon={faNode} size="2x" style={{ color: '#68A063' }} />
          </li>
          <li className="mx-3">
            <FontAwesomeIcon icon={faWordpress} size="2x" style={{ color: '#21759B' }} />
          </li>
          <li className="mx-3">
  <FontAwesomeIcon icon={faDev} size="2x" style={{ color: '#000000' }} />
</li>

<li className="mx-3">
  <FontAwesomeIcon icon={faReact} size="2x" style={{ color: '#61DBFB' }} />
</li>

<li className="mx-3">
  <FontAwesomeIcon icon={faVuejs} size="2x" style={{ color: '#4FC08D' }} />
</li>

<li className="mx-3">
  <FontAwesomeIcon icon={faAngular} size="2x" style={{ color: '#DD0031' }} />
</li>

<li className="mx-3">
  <FontAwesomeIcon icon={faNode} size="2x" style={{ color: '#68A063' }} />
</li>

<li className="mx-3">
  <FontAwesomeIcon icon={faWordpress} size="2x" style={{ color: '#21759B' }} />
</li>

<li className="mx-3">
  <FontAwesomeIcon icon={faAws} size="2x" style={{ color: '#FF9900' }} />
</li>

<li className="mx-3">
  <FontAwesomeIcon icon={faDocker} size="2x" style={{ color: '#0DB7ED' }} />
</li>

<li className="mx-3">
  <FontAwesomeIcon icon={faAndroid} size="2x" style={{ color: '#3DDC84' }} />
</li>

<li className="mx-3">
  <FontAwesomeIcon icon={faJava} size="2x" style={{ color: '#007396' }} />
</li>

<li className="mx-3">
  <FontAwesomeIcon icon={faPython} size="2x" style={{ color: '#3776AB' }} />
</li>

<li className="mx-3">
  <FontAwesomeIcon icon={faHtml5} size="2x" style={{ color: '#E34F26' }} />
</li>

<li className="mx-3">
  <FontAwesomeIcon icon={faCss3Alt} size="2x" style={{ color: '#1572B6' }} />
</li>

<li className="mx-3">
  <FontAwesomeIcon icon={faBootstrap} size="2x" style={{ color: '#7952B3' }} />
</li>

<li className="mx-3">
  <FontAwesomeIcon icon={faPhp} size="2x" style={{ color: '#8892BF' }} />
</li>

<li className="mx-3">
  <FontAwesomeIcon icon={faSwift} size="2x" style={{ color: '#FA7343' }} />
</li>

<li className="mx-3">
  <FontAwesomeIcon icon={faJenkins} size="2x" style={{ color: '#D24939' }} />
</li>

<li className="mx-3">
  <FontAwesomeIcon icon={faLaravel} size="2x" style={{ color: '#FF2D20' }} />
</li>

<li className="mx-3">
  <FontAwesomeIcon icon={faJira} size="2x" style={{ color: '#0052CC' }} />
</li>

<li className="mx-3">
  <FontAwesomeIcon icon={faRedhat} size="2x" style={{ color: '#EE0000' }} />
</li>

<li className="mx-3">
  <FontAwesomeIcon icon={faRaspberryPi} size="2x" style={{ color: '#C51A4A' }} />
</li>
          <li className="mx-3">
            <FontAwesomeIcon icon={faGithub} size="2x" style={{ color: '#000000' }} />
          </li>
          <li className="mx-3">
            <FontAwesomeIcon icon={faCodepen} size="2x" style={{ color: '#000000' }} />
          </li>
          <li className="mx-3">
            <FontAwesomeIcon icon={faFreeCodeCamp} size="2x" style={{ color: '#006400' }} />
          </li>
          <li className="mx-3">
            <FontAwesomeIcon icon={faDev} size="2x" style={{ color: '#000000' }} />
          </li>
          <li className="mx-3">
            <FontAwesomeIcon icon={faReact} size="2x" style={{ color: '#61DBFB' }} />
          </li>
          <li className="mx-3">
            <FontAwesomeIcon icon={faVuejs} size="2x" style={{ color: '#4FC08D' }} />
          </li>
          <li className="mx-3">
            <FontAwesomeIcon icon={faAngular} size="2x" style={{ color: '#DD0031' }} />
          </li>
          <li className="mx-3">
            <FontAwesomeIcon icon={faNode} size="2x" style={{ color: '#68A063' }} />
          </li>
          <li className="mx-3">
            <FontAwesomeIcon icon={faWordpress} size="2x" style={{ color: '#21759B' }} />
          </li>
          <li className="mx-3">
  <FontAwesomeIcon icon={faDev} size="2x" style={{ color: '#000000' }} />
</li>

<li className="mx-3">
  <FontAwesomeIcon icon={faReact} size="2x" style={{ color: '#61DBFB' }} />
</li>

<li className="mx-3">
  <FontAwesomeIcon icon={faVuejs} size="2x" style={{ color: '#4FC08D' }} />
</li>

<li className="mx-3">
  <FontAwesomeIcon icon={faAngular} size="2x" style={{ color: '#DD0031' }} />
</li>

<li className="mx-3">
  <FontAwesomeIcon icon={faNode} size="2x" style={{ color: '#68A063' }} />
</li>

<li className="mx-3">
  <FontAwesomeIcon icon={faWordpress} size="2x" style={{ color: '#21759B' }} />
</li>

<li className="mx-3">
  <FontAwesomeIcon icon={faAws} size="2x" style={{ color: '#FF9900' }} />
</li>

<li className="mx-3">
  <FontAwesomeIcon icon={faDocker} size="2x" style={{ color: '#0DB7ED' }} />
</li>

<li className="mx-3">
  <FontAwesomeIcon icon={faAndroid} size="2x" style={{ color: '#3DDC84' }} />
</li>

<li className="mx-3">
  <FontAwesomeIcon icon={faJava} size="2x" style={{ color: '#007396' }} />
</li>

<li className="mx-3">
  <FontAwesomeIcon icon={faPython} size="2x" style={{ color: '#3776AB' }} />
</li>

<li className="mx-3">
  <FontAwesomeIcon icon={faHtml5} size="2x" style={{ color: '#E34F26' }} />
</li>

<li className="mx-3">
  <FontAwesomeIcon icon={faCss3Alt} size="2x" style={{ color: '#1572B6' }} />
</li>

<li className="mx-3">
  <FontAwesomeIcon icon={faBootstrap} size="2x" style={{ color: '#7952B3' }} />
</li>

<li className="mx-3">
  <FontAwesomeIcon icon={faPhp} size="2x" style={{ color: '#8892BF' }} />
</li>

<li className="mx-3">
  <FontAwesomeIcon icon={faSwift} size="2x" style={{ color: '#FA7343' }} />
</li>

<li className="mx-3">
  <FontAwesomeIcon icon={faJenkins} size="2x" style={{ color: '#D24939' }} />
</li>

<li className="mx-3">
  <FontAwesomeIcon icon={faLaravel} size="2x" style={{ color: '#FF2D20' }} />
</li>

<li className="mx-3">
  <FontAwesomeIcon icon={faJira} size="2x" style={{ color: '#0052CC' }} />
</li>

<li className="mx-3">
  <FontAwesomeIcon icon={faRedhat} size="2x" style={{ color: '#EE0000' }} />
</li>

<li className="mx-3">
  <FontAwesomeIcon icon={faRaspberryPi} size="2x" style={{ color: '#C51A4A' }} />
</li>

          
          {/* Add more icons as needed */}
        </ul>
      </div>
    </div>
    </div>
  );
}

export default Marquee;
