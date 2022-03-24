import React, { useState } from 'react';
import Slider from "react-slick";
import s2 from '../img/zc-2.jpg';
import s3 from '../img/zc-1.jpg';
import s4 from '../img/zc-5.jpg';

function Banner() {
  
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding:0
      };
  return (   
    <div className="banner">
        <Slider {...settings}>
   
    <div className="img-banner">
      <h3><img className="logo" src={s2} alt="s2" /></h3>
    </div>
    <div className="img-banner">
      <h3><img className="logo" src={s4} alt="s4" /></h3>
    </div>
    
  </Slider>
  </div>
   
  );
}

export default Banner;
