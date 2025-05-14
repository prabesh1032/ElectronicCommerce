import React, { useEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "aos/dist/aos.css";
import AOS from 'aos';

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  useEffect(() => {
    AOS.init({
      offset: 120,
      duration: 1000,
      easing: 'ease-in-out',
    });
  }, []);


  return (
    <div className="w-full">
     Hero
    </div>
  );
};

export default Hero;