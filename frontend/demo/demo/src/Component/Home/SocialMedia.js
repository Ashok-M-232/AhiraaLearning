import React from 'react';
import './SocialMedia.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faYoutube, faWhatsapp, faGoogle } from '@fortawesome/free-brands-svg-icons';

const SocialMedia = () => {
  const linkStyles = {
    textDecoration: 'none',
    color: 'white',
};
  return (
    <div className='SMBg1'>
      <div className="container">
        <div className="row">
          <div className="col">
            <h2>Know More</h2>
            <ul>
            <li>
                <a href="/" style={linkStyles}>Home</a>
            </li>
            <li>
                <a href="/AboutUs" style={linkStyles}>About Us</a>
            </li>
            <li>
                <a href="services/" style={linkStyles}>Services</a>
            </li>
            <li>
                <a href="/contact" style={linkStyles}>Contact Us</a>
            </li>
        </ul>


          </div>
          <div className="col">
            <h2>Legal</h2>
            <ul>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>Return Policy</li>
            </ul>
          </div>
          <div className="col">
            <h2>Collaboration</h2>
            <ul>
              <li>IBM</li>
              <li>INFOSYS</li>
              <li>TCS</li>
              <li>MICROSOFT</li>
            </ul>
          </div>
          <div className="col">
            <h2>Address</h2>
            <p>Ahiraa Pvt Ltd, 14/432, 1st Floor Kamala Nagar, near Venkateshwara Swamy Temple, Anantapur.</p>
          </div>
        </div>
      </div>

      <div className="container">
        <hr style={{ borderColor: 'white' }} />
        <h3 className="text-white container">Contact us through</h3>
        <br />
        <ul className="wrapper">
          {/* <a href="https://facebook.com" style={{ color: 'blue' }}>
            <li className="icon facebook">
              <span className="tooltip">Facebook</span>
              <span><FontAwesomeIcon icon={faFacebookF} /></span>
            </li>
          </a> */}
          <a href="https://whatsapp.com/channel/0029VaTSRnqGJP8KBBQ3gn3n" style={{ color: 'green' }} target="_blank">
    <li className="icon whatsapp">
        <span className="tooltip">WhatsApp</span>
        <span><FontAwesomeIcon icon={faWhatsapp} /></span>
    </li>
</a>
<a href="https://instagram.com" style={{ color: 'red' }} target="_blank">
    <li className="icon instagram">
        <span className="tooltip">Instagram</span>
        <span><FontAwesomeIcon icon={faInstagram} /></span>
    </li>
</a>
<a href="https://youtube.com" style={{ color: 'red' }} target="_blank">
    <li className="icon youtube">
        <span className="tooltip">YouTube</span>
        <span><FontAwesomeIcon icon={faYoutube} /></span>
    </li>
</a>
<a href="mailto:ahiraalearning.helpline@gmail.com" style={{ color: '#3255a5' }} target="_blank">
    <li className="icon gmail">
        <span className="tooltip">Gmail</span>
        <span><FontAwesomeIcon icon={faGoogle} /></span>
    </li>
</a>

        </ul>
      </div>
    </div>
  );
};

export default SocialMedia;
