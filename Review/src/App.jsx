import { useState } from 'react';
import './App.css'
import ReviewCard from './reviewCard';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



function App() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <Slider {...settings} className='ml-16 mr-8'> 
    <ReviewCard/>
    <ReviewCard/>
    <ReviewCard/>
    <ReviewCard/>
    <ReviewCard/>
    <ReviewCard/>
    <ReviewCard/>
  </Slider>
 
  )
}

export default App
