import React from 'react';
import Mechbtn2Image from './Btn/Mechbtn2.jpg';
import CDINGBTN from './Btn/CDINGBTN.webp';
import MNGMTBTN from './Btn/MNGMTBTN.jpeg';
import Civilbtn1 from './Btn/Civilbtn1.jpeg';
import Csebtn1 from './Btn/Csebtn1.jpg';
import eeebtn from './Btn/eeebtn.jpeg';
import './CardContainer.css'; // Import CSS file for styling

const CardWithImage = ({ imageUrl }) => (
  <div className="card" style={{ width: '200px', height: '200px', overflow: 'hidden' }}>
    <img src={imageUrl} alt="Card" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
  </div>
);

const CardContainer = () => {
  const imageUrls = [
    Csebtn1, eeebtn, Mechbtn2Image, Civilbtn1, MNGMTBTN, CDINGBTN,
  ];

  return (
    <div className='CardContainer'>
      <h2 style={{ color: 'blue', margin: '20px', padding: '10px' }}>Choose Your Branch</h2>
      <div className="container">
        <div className="row justify-content-center">
          {imageUrls.map((url, index) => (
            <div key={index} className="col-lg-4 col-md-6 col-sm-12 mb-4">
              <CardWithImage imageUrl={url} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardContainer;
