import React from 'react';
import './SliderLowa.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SliderLowa = ({children}) => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    speed: 6000,
    autoplaySpeed: 0,
    cssEase: 'linear',
    /* adaptiveHeight: true, */
    vertical: true,
  };
  return (
    <div className="CP-SliderLowa">
      <Slider {...settings}>{children}</Slider>
    </div>
  );
};
export default SliderLowa;
