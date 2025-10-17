import React from 'react';
import Slider from 'react-slick';
import '../styles/HomePage.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import cozyInterior from '../images/cozy-interior.jpg'
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();
  const images = [
    cozyInterior,
    cozyInterior,
    cozyInterior,
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="homepage">
      <Header/>
      <div className="carousel-container">
        <Slider {...settings}>
          {images.map((images, index) => (
            <div key={index} className="carousel-slide">
              <img src={images} alt={`Slide ${index + 1}`} className="carousel-image" />
            </div>
          ))}
        </Slider>

        <div className="promo-overlay">
          <h2>New Arrival</h2>
          <p>Discover Our New Collection</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </p>
          <button onClick={() => navigate("/products")}>BUY NOW</button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
