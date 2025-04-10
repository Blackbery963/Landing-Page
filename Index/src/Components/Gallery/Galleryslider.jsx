import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from '/home/swarnadip/Documents/Index/Index/Index/src/Age-Components/Beginner/Beginner-images/pexels-bess-hamiti-83687-36487.jpg'
import img2 from '/home/swarnadip/Documents/Index/Index/Index/src/Age-Components/Beginner/Beginner-images/pexels-daniyal-ghanavati-10741-70069.jpg'
import img3 from '/home/swarnadip/Documents/Index/Index/Index/src/Age-Components/Beginner/Beginner-images/pexels-fox-58267-212324.jpg'
import img4 from '/home/swarnadip/Documents/Index/Index/Index/src/Age-Components/Beginner/Beginner-images/pexels-pixabay-40784.jpg'


const slides = [
  {
    image: img1,
    title: "Top Deals on Electronics!",
    description: "Save big on the latest gadgets. Limited time offer.",
  },
  {
    image: img2,
    title: "Mega Fashion Sale",
    description: "Up to 70% off on top fashion brands.",
  },
  {
    image: img3,
    title: "Home Essentials",
    description: "Discounts on furniture, kitchenware, and more.",
  },
  {
    image: img4,
    title: "Mega Fashion Sale",
    description: "Up to 70% off on top fashion brands.",
  },
];

// Custom Arrow Components


const CustomPrevArrow = ({ onClick }) => (
  <button
    className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10 bg-black/50 text-white rounded-full p-2 hover:bg-black border border-gray-400"
    onClick={onClick}
  >
    &#8592; {/* Left Arrow */}
  </button>
);

const CustomNextArrow = ({ onClick }) => (
  <button
    className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10 bg-black/50 text-white rounded-full p-2 hover:bg-black border border-gray-400"
    onClick={onClick}
  >
    &#8594; {/* Right Arrow */}
  </button>
);

const Galleryslider = () => {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />, // Adding the custom previous arrow
    nextArrow: <CustomNextArrow />, // Adding the custom next arrow
  };

  return (
    <div className="h-full w-full overflow-hidden relative mx-auto">
      <Slider {...settings}>
       {slides.map((slide, index) => (
          <div key={index} className="relative">
            {/* Slide Background */}
            <div
              className="w-full lg:h-[35vh] md:h-[30vh] h-[25vh] bg-cover bg-center"
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            ></div>
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
            {/* Slide Content */}
            <div className="absolute bottom-10 left-10 text-white z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-fadeInUp font-Playfair">
                {slide.title}
              </h2>
              <p className="text-lg md:text-xl animate-fadeInUp delay-300 font-Funnel">
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

export default Galleryslider;
//  "https://images.pexels.com/photos/29892850/pexels-photo-29892850/free-photo-of-boston-public-garden-winter-wonderland.jpeg"