import { useState } from 'react'
import './App.css'
import Card from './card';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  return (
<div className='w-3/4 h-40 m-auto flex flex-col'>
    <Slider {...settings}>
      <Card btn = "Portrait" imgSrc="./src/Images/black&white.jpg"/>
      <Card btn ="Landscape" imgSrc="./src/Images/still-life.jpg"/>
      <Card btn ="Black&White" imgSrc="./src/Images/still-life.jpg"/>  
    </Slider>
 </div>
  )
}

export default App;