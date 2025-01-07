import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const slides = [
  {
    image: "https://images.pexels.com/photos/29892850/pexels-photo-29892850/free-photo-of-boston-public-garden-winter-wonderland.jpeg",
    title: "Top Deals on Electronics!",
    description: "Save big on the latest gadgets. Limited time offer.",
  },
  {
    image: "https://images.pexels.com/photos/29304914/pexels-photo-29304914/free-photo-of-snow-covered-mountains-and-fishing-boats-in-arctic-waters.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Mega Fashion Sale",
    description: "Up to 70% off on top fashion brands.",
  },
  {
    image: "https://images.pexels.com/photos/15566467/pexels-photo-15566467/free-photo-of-pavement-along-water-pond-in-city.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Home Essentials",
    description: "Discounts on furniture, kitchenware, and more.",
  },
  {
    image: "https://images.pexels.com/photos/29304914/pexels-photo-29304914/free-photo-of-snow-covered-mountains-and-fishing-boats-in-arctic-waters.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Mega Fashion Sale",
    description: "Up to 70% off on top fashion brands.",
  },
];

const FlipkartSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
    arrows: true,
    customPaging: (i) => (
      <div className="w-3 h-3 bg-gray-400 rounded-full hover:bg-gray-600 transition-all"></div>
    ),
    dotsClass: "slick-dots flex justify-center space-x-2 mt-4",
  };

  return (
    <div className="w-[95vw] h-[70vh] overflow-hidden relative mx-auto mt-12">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative">
            {/* Slide Background */}
            <div
              className="w-full h-[70vh] bg-cover bg-center"
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover'
              }}
            ></div>
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
            {/* Slide Content */}
            <div className="absolute bottom-10 left-10 text-white z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-fadeInUp">
                {slide.title}
              </h2>
              <p className="text-lg md:text-xl animate-fadeInUp delay-300">
                {slide.description}
              </p>
            </div>
          </div>
        ))}
      </Slider>

      {/* Custom Styling for Dots */}
      <style jsx>{`
        .slick-dots li button:before {
          color: white;
          font-size: 10px;
        }
        .slick-dots li.slick-active button:before {
          color: #f9c22e; /* Highlighted dot color */
        }
      `}</style>
    </div>
  );
};

export default FlipkartSlider;
