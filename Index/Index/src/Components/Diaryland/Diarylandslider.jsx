// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const slides = [
//   {
//     image: "https://images.pexels.com/photos/29892850/pexels-photo-29892850/free-photo-of-boston-public-garden-winter-wonderland.jpeg",
//     title: "Top Deals on Electronics!",
//     description: "Save big on the latest gadgets. Limited time offer.",
//   },
//   {
//     image: "https://images.pexels.com/photos/29304914/pexels-photo-29304914/free-photo-of-snow-covered-mountains-and-fishing-boats-in-arctic-waters.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     title: "Mega Fashion Sale",
//     description: "Up to 70% off on top fashion brands.",
//   },
//   {
//     image: "https://images.pexels.com/photos/15566467/pexels-photo-15566467/free-photo-of-pavement-along-water-pond-in-city.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     title: "Home Essentials",
//     description: "Discounts on furniture, kitchenware, and more.",
//   },
//   {
//     image: "https://images.pexels.com/photos/29304914/pexels-photo-29304914/free-photo-of-snow-covered-mountains-and-fishing-boats-in-arctic-waters.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     title: "Mega Fashion Sale",
//     description: "Up to 70% off on top fashion brands.",
//   },
// ];

// const CustomPrevArrow = ({ onClick }) => (
//   <button
//     className="absolute top-[35%] left-2 transform -translate-y-1/2 z-20 bg-black/50 text-white rounded-full p-2 hover:bg-black border border-gray-400"
//     onClick={onClick}
//   >
//     &#8592; {/* Left Arrow */}
//   </button>
// );

// const CustomNextArrow = ({ onClick }) => (
//   <button
//     className="absolute top-[35%] right-2 transform -translate-y-1/2 z-20 bg-black/50 text-white rounded-full p-2 hover:bg-black border border-gray-400"
//     onClick={onClick}
//   >
//     &#8594; {/* Right Arrow */}
//   </button>
// );

// const Diarylandslider = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     prevArrow: <CustomPrevArrow />,
//     nextArrow: <CustomNextArrow />,
//   };
  

//   return (
//     <div className="w-full h-full overflow-hidden relative mx-auto md:px-4 px-2">
//       <Slider {...settings}>
//         {slides.map((slide, index) => (
//           <div key={index} className="px-4">
//             <div
//               className="w-full h-[400px] bg-cover bg-center rounded-lg shadow-lg"
//               style={{
//                 backgroundImage: `url(${slide.image})`,
//               }}
//             ></div>
//             <div className="text-center text-white mt-4">
//               <h2 className="text-2xl font-bold">{slide.title}</h2>
//               <p className="text-lg">{slide.description}</p>
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default Diarylandslider;

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

const CustomPrevArrow = ({ onClick }) => (
  <button
    className="absolute top-1/2 left-2 transform -translate-y-1/2 z-20 bg-black/50 text-white rounded-full p-2 hover:bg-black border border-gray-400"
    onClick={onClick}
  >
    &#8592;
  </button>
);

const CustomNextArrow = ({ onClick }) => (
  <button
    className="absolute top-1/2 right-2 transform -translate-y-1/2 z-20 bg-black/50 text-white rounded-full p-2 hover:bg-black border border-gray-400"
    onClick={onClick}
  >
    &#8594;
  </button>
);

const Diarylandslider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />, 
    nextArrow: <CustomNextArrow />, 
    responsive: [
      {
        breakpoint: 1024, // Tablets & small desktops
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // Mobile landscape & smaller tablets
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // Mobile portrait
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: true, // Hide arrows on small screens for better UI
        },
      },
    ],
  };

  return (
    <div className="w-full h-full max-w-6xl mx-auto">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="md:p-4 p-1">
            <div
              className="w-full h-[225px] sm:h-[300px] md:h-[300px] lg:h-[350px] bg-cover bg-center rounded-lg shadow-lg"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
               <div className="text-center text-white h-full w-full">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold">{slide.title}</h2>
              <p className="text-sm sm:text-base md:text-lg">{slide.description}</p>
            </div>
            </div>           
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Diarylandslider;
