import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/HomePage.css';
import cozyInterior from '../images/cozy-interior.jpg';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();
  const images = [cozyInterior, cozyInterior, cozyInterior];

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
      <Header />
      <div className="carousel-container">
        <Slider {...settings}>
          {images.map((img, index) => (
            <div key={index} className="carousel-slide">
              <img src={img} alt={`Slide ${index + 1}`} className="carousel-image" />
            </div>
          ))}
        </Slider>

        <div className="promo-overlay">
          <h2>New Arrival</h2>
          <p>Discover Our New Collection</p>
          <p>
            Elevate your living space with our carefully curated collection of elegant home pieces.
          </p>
          <button onClick={() => navigate('/products')}>Shop Now</button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
