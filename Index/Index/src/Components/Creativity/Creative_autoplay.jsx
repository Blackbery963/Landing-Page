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
    image: "https://images.pexels.com/photos/3748174/pexels-photo-3748174.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Mega Fashion Sale",
    description: "Up to 70% off on top fashion brands.",
  },
  {
    image: "https://images.pexels.com/photos/1882017/pexels-photo-1882017.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Mega Fashion Sale",
    description: "Up to 70% off on top fashion brands.",
  },
  {
    image: "https://images.pexels.com/photos/19226322/pexels-photo-19226322/free-photo-of-forest-landscape-with-ferns.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Mega Fashion Sale",
    description: "Up to 70% off on top fashion brands.",
  },
  {
    image: "https://images.pexels.com/photos/30283157/pexels-photo-30283157/free-photo-of-misty-mountain-framed-by-evergreen-trees.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Mega Fashion Sale",
    description: "Up to 70% off on top fashion brands.",
  },
  {
    image: "https://images.pexels.com/photos/30271337/pexels-photo-30271337/free-photo-of-black-and-white-sea-turtle-swimming-close-up.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Mega Fashion Sale",
    description: "Up to 70% off on top fashion brands.",
  },
];

const CreativeAutoplay = () => {
  // const CustomPrevArrow = ({ onClick }) => (
  //   <button
  //     className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10 bg-black/50 text-white rounded-full p-2 hover:bg-black border border-gray-400"
  //     onClick={onClick}
  //     aria-label="Previous Slide"
  //   >
  //     &#8592; {/* Left Arrow */}
  //   </button>
  // );

  // const CustomNextArrow = ({ onClick }) => (
  //   <button
  //     className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10 bg-black/50 text-white rounded-full p-2 hover:bg-black border border-gray-400"
  //     onClick={onClick}
  //     aria-label="Next Slide"
  //   >
  //     &#8594; {/* Right Arrow */}
  //   </button>
  // );

  const settings = {
   
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
     // prevArrow: <CustomPrevArrow />,
    // nextArrow: <CustomNextArrow />,
    customPaging: (i) => (
      <div className="w-1 h-1 bg-gray-400 rounded-full hover:bg-gray-600 transition-all mt-2"></div>
    ),
    dotsClass: "slick-dots flex justify-center space-x-2 mt-4",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="h-full w-full gap-x-8 overflow-hidden relative mx-auto">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative px-2">
            {/* Slides background */}
            <div
              className="w-full md:h-[27vh] h-[25vh] bg-cover bg-center rounded-lg shadow-lg"
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
              }}
              aria-label={`Slide ${index + 1}`}
            ></div>
            {/* Slide Content */}
            <div className="absolute bottom-10 left-10 text-white z-10">
              <h2 className="text-xl md:text-2xl font-bold mb-4 animate-fadeInUp">
                {slide.title}
              </h2>
              <p className="text-sm md:text-base animate-fadeInUp delay-300">
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

export default CreativeAutoplay;