// import { Link } from "react-router-dom";
// import { FaHome, FaUser, FaInfoCircle, FaPalette } from "react-icons/fa";
// import backgroundImage from '/home/swarnadip/Documents/Index/Index/Index/src/Age-Components/Mid-Carrier/Mid-images/medium-shot-man-creating-van-gogh-s-characterization.jpg'
// import Professionalslider from "/home/swarnadip/Documents/Index/Index/Index/src/Age-Components/Professional/Professionalslider.jsx";


// function Mid_Carrier() {
 
//   return (
//     <div className="min-h-screen max-w-screen overflow-x-hidden flex flex-col">
//       {/* Background Section */}
//       <div className="h-screen w-full bg-center bg-cover flex items-center justify-center" style={{backgroundImage:`url(${backgroundImage})`}}>
//         {/* Header */}
//         <header className="h-[100px] w-full backdrop-blur-md flex items-center justify-between shadow-lg px-4 md:px-6 fixed top-0 z-50">
//           <div className="flex items-center">
//             <h1 className="lg:text-[35px] md:text-[30px] sm:text-[25px] text-[20px] font-bold font-Eagle text-black">
//               Painters' Diary
//             </h1>
//           </div>
//           {/* Action Buttons */}
//           <div className="flex gap-x-2 sm:gap-x-4 md:gap-x-6 text-black font-Playfair font-bold">
//             <Link to="/">
//               <button className="px-2 md:px-4 md:py-2 py-1 rounded-md hover:bg-gray-200">
//                 <FaHome className="text-xl sm:hidden" />
//                 <span className="hidden sm:inline">Home</span>
//               </button>
//             </Link>
//             <Link to="/About">
//               <button className="px-2 md:px-4 md:py-2 py-1 rounded-md hover:bg-gray-200">
//                 <FaInfoCircle className="text-xl sm:hidden" />
//                 <span className="hidden sm:inline">About</span>
//               </button>
//             </Link>
//             <Link to="/Account">
//               <button className="px-2 md:px-4 md:py-2 py-1 rounded-md hover:bg-gray-200">
//                 <FaUser className="text-xl sm:hidden" />
//                 <span className="hidden sm:inline">Account</span>
//               </button>
//             </Link>
//             <button className="px-2 md:px-4 md:py-2 py-1 rounded-md bg-blue-500 text-white">
//               <FaPalette className="text-xl sm:hidden" />
//               <span className="hidden sm:inline">Mid-Carrier's Gallery</span>
//             </button>
//           </div>
//         </header>

//         {/* Swiper Slider */}
//         <div className="w-[80%] md:w-[60%] lg:w-[40%] h-[400px] mt-[100px] backdrop-blur-md">
//        <Professionalslider/>
//         </div>
//       </div>

//       {/* Title and Subtitle Section */}
//       <div className="max-w-7xl mx-auto text-center mb-12 mt-8">
//         <h2 className="text-2xl md:text-3xl font-bold font-Playfair text-gray-800 mb-4">
//         Masterstrokes Studio The Art of Professional Brilliance
//         </h2>
//         <p className="text-base md:text-lg text-gray-600">
//         Where Creativity Meets Expertise, Celebrating the Vision, Dedication, and Timeless Journey of Every Professional Artist in Their Pursuit of Mastery and Excellence
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Mid_Carrier;

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUser, FaInfoCircle, FaPalette } from 'react-icons/fa';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import backgroundImage from './Mid-images/medium-shot-man-creating-van-gogh-s-characterization.jpg';

// Placeholder gallery images (replace with local imports if available)
const galleryImages = [
  {
    src: 'https://images.pexels.com/photos/29892850/pexels-photo-29892850/free-photo-of-boston-public-garden-winter-wonderland.jpeg',
    title: 'Starry Night',
    artist: 'Swarna',
    price: '$350',
  },
  {
    src: 'https://images.pexels.com/photos/29304914/pexels-photo-29304914/free-photo-of-snow-covered-mountains-and-fishing-boats-in-arctic-waters.jpeg',
    title: 'Ocean Serenity',
    artist: 'Swarna',
    price: '$420',
  },
  {
    src: 'https://images.pexels.com/photos/15566467/pexels-photo-15566467/free-photo-of-pavement-along-water-pond-in-city.jpeg',
    title: 'Urban Reflections',
    artist: 'Swarna',
    price: '$300',
  },
  {
    src: 'https://images.pexels.com/photos/17081487/pexels-photo-17081487/free-photo-of-lake-and-snowy-mountains.jpeg',
    title: 'Mountain Majesty',
    artist: 'Swarna',
    price: '$380',
  },
];

function Mid_Carrier() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  // Framer Motion variants
  const headerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, delay: i * 0.2, ease: 'easeInOut' },
    }),
    hover: { scale: 1.05, boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)' },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const buttonVariants = {
    hover: { scale: 1.1, backgroundColor: '#1e40af', transition: { duration: 0.3 } },
    tap: { scale: 0.95 },
  };

  return (
    <div className="min-h-screen max-w-screen overflow-x-hidden flex flex-col bg-gray-100">
      {/* Hero Section */}
      <div
        className="relative h-[60vh] sm:h-[80vh] w-full bg-center bg-cover flex items-center justify-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

        {/* Header */}
        <motion.header
          className="h-16 sm:h-20 w-full bg-white/80 backdrop-blur-md flex items-center justify-between shadow-lg px-4 sm:px-8 fixed top-0 z-50"
          variants={headerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="flex items-center">
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold font-Eagle text-rose-700">
              Painters' Diary
            </h1>
          </div>
          <div className="flex gap-x-2 sm:gap-x-4 text-gray-800 font-playfair font-semibold">
            <Link to="/">
              <motion.button
                className="px-2 sm:px-4 py-1 sm:py-2 rounded-md hover:bg-rose-100 flex items-center gap-2"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <FaHome className="text-lg sm:text-xl" />
                <span className="hidden sm:inline">Home</span>
              </motion.button>
            </Link>
            <Link to="/About">
              <motion.button
                className="px-2 sm:px-4 py-1 sm:py-2 rounded-md hover:bg-rose-100 flex items-center gap-2"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <FaInfoCircle className="text-lg sm:text-xl" />
                <span className="hidden sm:inline">About</span>
              </motion.button>
            </Link>
            <Link to="/Account">
              <motion.button
                className="px-2 sm:px-4 py-1 sm:py-2 rounded-md hover:bg-rose-100 flex items-center gap-2"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <FaUser className="text-lg sm:text-xl" />
                <span className="hidden sm:inline">Account</span>
              </motion.button>
            </Link>
            <motion.button
              className="px-2 sm:px-4 py-1 sm:py-2 rounded-md bg-blue-600 text-white flex items-center gap-2"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <FaPalette className="text-lg sm:text-xl" />
              <span className="hidden sm:inline">Mid-Career Gallery</span>
            </motion.button>
          </div>
        </motion.header>

        {/* Hero Content */}
        <motion.div
          className="relative z-10 text-center text-white mt-16 sm:mt-20"
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold">
            Mid-Career Artists
          </h1>
          <p className="text-base sm:text-lg lg:text-xl font-newsreader mt-4 max-w-2xl mx-auto">
            Discover the brilliance of artists who have honed their craft, blending passion and expertise in every stroke.
          </p>
        </motion.div>
      </div>

      {/* Title and Subtitle Section */}
      <div className="max-w-7xl mx-auto text-center mb-12 mt-12 px-4 sm:px-8">
        <motion.h2
          className="text-2xl sm:text-3xl lg:text-4xl font-bold font-playfair text-rose-700 mb-4"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          data-aos="fade-up"
        >
          Masterstrokes Studio
        </motion.h2>
        <motion.p
          className="text-base sm:text-lg text-gray-600 font-newsreader"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Celebrating the vision, dedication, and timeless journey of mid-career artists in their pursuit of mastery.
        </motion.p>
      </div>

      {/* Gallery Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 mb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              custom={index}
              whileHover="hover"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <div className="h-48 sm:h-64 w-full overflow-hidden">
                <img
                  src={image.src}
                  alt={image.title}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold font-playfair text-gray-800">
                  {image.title}
                </h3>
                <p className="text-sm text-gray-600 font-newsreader">by {image.artist}</p>
                <p className="text-base font-bold text-rose-700 mt-2">{image.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
        {/* <div className="text-center mt-8">
          <Link to="">
            <motion.button
              className="px-6 py-3 bg-blue-600 text-white rounded-lg font-playfair font-semibold hover:bg-blue-700"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              data-aos="fade-right"
            >
              Explore More
            </motion.button>
          </Link>
        </div> */}
      </div>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-6 text-center">
        <p className="text-sm font-newsreader">
          &copy; 2025 Painters' Diary. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default Mid_Carrier;