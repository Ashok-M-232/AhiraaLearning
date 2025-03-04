// CarouselComponent.js
import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const CarouselComponent = () => {
  const options = {
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 5
      }
    }
  };

  return (
    <OwlCarousel className="owl-theme" {...options}>
      <div className="item"><h4>1</h4></div>
      <div className="item"><h4>2</h4></div>
      <div className="item"><h4>3</h4></div>
      <div className="item"><h4>4</h4></div>
      <div className="item"><h4>5</h4></div>
      <div className="item"><h4>6</h4></div>
      <div className="item"><h4>7</h4></div>
      <div className="item"><h4>8</h4></div>
      <div className="item"><h4>9</h4></div>
      <div className="item"><h4>10</h4></div>
    </OwlCarousel>
  );
}

export default CarouselComponent;
