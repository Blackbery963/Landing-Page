// import { useState } from 'react'
// import bgImage from '/home/swarnadip/Documents/Index/Index/Index/src/Components/Connecting/images/5570027.jpg'
// import image from '/home/swarnadip/Documents/Index/Index/Index/src/Components/Connecting/images/freepik-export-20240929163902GStv.png'
// import { Link } from 'react-router-dom'

// function Connecting () {
//   const [count, setCount] = useState(0)

//   return (
//   <div className='w-screen min-w-screen h-[60vh] bg-black bg-center bg-cover bg-no-repeat flex items-center justify-between pr-2 lg:overflow-hidden overflow-auto shadow-lg' 
//   style={{backgroundImage: `url(${bgImage})`}} >


//     <div className='h-[100%] lg:w-[40%] pl-4 lg:pl-16 pt-20 animate-slideDown '>
//     <h1 className=' font-DM lg:text-[60px] text-[40px]'>Connecting Hearts Through Art</h1>

//     <p className='font-Unna lg:text-left lg:text-[22px] text-[18px] mt-6 '>Art is a universal language that speaks to the soul,
//        sparking creativity and emotion. It tells stories and 
//        connect us across culture and time. Beyond beauty, art
//         inspires changes, challenges perspectives and brings 
//         meaning to our shared human beings.</p>
  
// <div className="flex gap-12 mt-12 group">
//   {/* First Button */}
//   <button className="h-[40px] w-[150px] bg-black text-white rounded-2xl font-semibold transition duration-300 ease-in-out 
//     hover:bg-transparent hover:text-black hover:border-2 hover:border-black group-hover:bg-transparent group-hover:text-black group-hover:border-2 group-hover:border-black">
//     Start Journey
//   </button>

//   {/* Second Button */}
//   <Link to ='/signup'>
//   <button className="h-[40px] w-[150px] bg-transparent text-black border-2 border-black rounded-2xl font-semibold transition duration-300 ease-in-out 
//     hover:bg-black hover:text-white group-hover:bg-black group-hover:text-white">
//     Sign up
//   </button>
//   </Link>
// </div>



//     </div>


//     <div className=' h-[60vh] w-[45%] animate-slideDown lg:visible invisible'>
//     <img className='h-[100%]' src={image} alt="" />
//     </div>
//   </div>

  
//   )
// }

// export default Connecting;


// import React, { useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import bgImage from './images/5570027.jpg';
// import image from './images/freepik-export-20240929163902GStv.png';

// function Connecting() {
//   useEffect(() => {
//     AOS.init({
//       duration: 1000,
//       easing: 'ease-in-out',
//       once: true,
//     });
//   }, []);

//   // Framer Motion variants for text and buttons
//   const contentVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
//   };

//   // Framer Motion variants for image
//   const imageVariants = {
//     hidden: { opacity: 0, scale: 0.8 },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       transition: { duration: 0.8, ease: 'easeOut', delay: 0.3 },
//     },
//     hover: { scale: 1.05, transition: { duration: 0.3 } },
//   };

//   // Button hover animation
//   const buttonVariants = {
//     hover: { scale: 1.1, boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)' },
//     tap: { scale: 0.95 },
//   };

//   return (
//     <motion.div
//       className="w-screen min-h-[60vh] bg-black bg-center bg-cover bg-no-repeat flex flex-col lg:flex-row items-center justify-between px-4 sm:px-8 lg:px-16 py-12 relative overflow-hidden shadow-lg"
//       style={{ backgroundImage: `url(${bgImage})` }}
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 1 }}
//     >
//       {/* Gradient Overlay for Readability */}
//       <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent z-0"></div>

//       {/* Content Section */}
//       <motion.div
//         className="relative z-10 h-auto lg:w-[50%] pt-8 lg:pt-20 space-y-6"
//         variants={contentVariants}
//         initial="hidden"
//         animate="visible"
//         data-aos="fade-up"
//       >
//         <motion.h1
//           className="font-DM text-[32px] sm:text-[40px] lg:text-[60px] text-white leading-tight"
//           variants={contentVariants}
//           transition={{ delay: 0.2 }}
//         >
//           Connecting Hearts Through Art
//         </motion.h1>
//         <motion.p
//           className="font-Unna text-[16px] sm:text-[18px] lg:text-[22px] text-gray-200 lg:text-left"
//           variants={contentVariants}
//           transition={{ delay: 0.4 }}
//         >
//         </motion.p>
//         <div className="flex gap-4 sm:gap-6 mt-8">
//           <motion.button
//             className="h-[40px] w-[140px] sm:w-[150px] bg-white text-black rounded-full font-semibold border-2 border-white transition duration-300"
//             variants={buttonVariants}
//             whileHover="hover"
//             whileTap="tap"
//           >
//             Start Journey
//           </motion.button>
//           <Link to="/signup">
//             <motion.button
//               className="h-[40px] w-[140px] sm:w-[150px] bg-transparent text-white border-2 border-white rounded-full font-semibold transition duration-300 hover:bg-white hover:text-black"
//               variants={buttonVariants}
//               whileHover="hover"
//               whileTap="tap"
//             >
//               Sign Up
//             </motion.button>
//           </Link>
//         </div>
//       </motion.div>

//       {/* Image Section */}
//       <motion.div
//         className="relative z-10 h-[40vh] sm:h-[50vh] lg:h-[60vh] w-full lg:w-[45%] mt-8 lg:mt-0"
//         variants={imageVariants}
//         initial="hidden"
//         animate="visible"
//         whileHover="hover"
//         data-aos="fade-left"
//         data-aos-delay="200"
//       >
//         <img
//           className="h-full w-full object-contain"
//           src={image}
//           alt="Artistic illustration"
//         />
//       </motion.div>
//     </motion.div>
//   );
// }

// export default Connecting;

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import bgImage from './images/5570027.jpg';
import image from './images/digital-art-style-mental-health-day-awareness-illustration.jpg';

function Connecting() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  // Framer Motion variants for text container
  const contentVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  // Framer Motion variants for individual characters
  const charVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.05, duration: 0.3 },
    }),
  };

  // Framer Motion variants for individual words
  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.4 },
    }),
  };

  // Framer Motion variants for buttons
  const buttonVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (i) => ({
      scale: 1,
      opacity: 1,
      transition: { type: 'spring', stiffness: 200, damping: 20, delay: i * 0.2 + 0.8 },
    }),
    hover: {
      scale: 1.1,
      rotate: 3,
      boxShadow: '0 8px 20px rgba(255, 255, 255, 0.4)',
      transition: { duration: 0.3 },
    },
    tap: { scale: 0.9, transition: { duration: 0.2 } },
  };

  // Framer Motion variants for image
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: 'easeOut', delay: 0.3 },
    },
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };

  // Split text for animation
  const headingText = 'Connecting Hearts Through Art';
  const paragraphText =
    'Art is a universal language that speaks to the soul, sparking creativity and emotion. It tells stories and connect us across culture and time. Beyond beauty, artinspires changes, challenges perspectives and brings meaning to our shared human beings.'
  const words = paragraphText.split(' ');

  return (
    <motion.div
      className="w-[95%] min-h-[60vh] mx-auto rounded-md bg-black bg-center bg-cover bg-no-repeat flex flex-col lg:flex-row items-center justify-between px-4 sm:px-8 lg:px-16 py-12 relative overflow-hidden shadow-lg"
      style={{ backgroundImage: `url(${bgImage})` }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Gradient Overlay for Readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent z-0"></div>

      {/* Content Section */}
      <motion.div
        className="relative z-10 h-auto lg:w-[50%] pt-8 lg:pt-20 space-y-6"
        variants={contentVariants}
        initial="hidden"
        animate="visible"
        data-aos="fade-right"
      >
        <h1 className="font-DM text-[32px] sm:text-[40px] lg:text-[60px] text-white leading-tight">
          {headingText.split('').map((char, index) => (
            <motion.span
              key={index}
              variants={charVariants}
              initial="hidden"
              animate="visible"
              custom={index}
            >
              {char}
            </motion.span>
          ))}
        </h1>
        <p className="font-Unna text-[16px] sm:text-[18px] lg:text-[22px] text-gray-200 lg:text-left">
          {words.map((word, index) => (
            <motion.span
              key={index}
              variants={wordVariants}
              initial="hidden"
              animate="visible"
              custom={index}
              className="inline-block mr-1"
            >
              {word}
            </motion.span>
          ))}
        </p>
        <div className="flex gap-4 sm:gap-6 mt-8">
          <motion.button
            className="h-[40px] w-[140px] sm:w-[150px] bg-white text-black rounded-full font-semibold border-2 border-white transition duration-300"
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
            custom={0}
            whileHover="hover"
            whileTap="tap"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            Start Journey
          </motion.button>
          <Link to="/signup">
            <motion.button
              className="h-[40px] w-[140px] sm:w-[150px] bg-transparent text-white border-2 border-white rounded-full font-semibold transition duration-300 hover:bg-white hover:text-black"
              variants={buttonVariants}
              initial="hidden"
              animate="visible"
              custom={1}
              whileHover="hover"
              whileTap="tap"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              Sign Up
            </motion.button>
          </Link>
        </div>
      </motion.div>

      {/* Image Section */}
      <motion.div
        className="relative z-10 h-[40vh] sm:h-[50vh] lg:h-[60vh] w-full lg:w-[45%] mt-8 lg:mt-0 rounded-lg shadow-lg overflow-hidden" 
        variants={imageVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
        data-aos="fade-left"
        data-aos-delay="200"
      >
        <img
          className="h-full w-full object-cover"
          src={image}
          alt="Artistic illustration"
        />
      </motion.div>
    </motion.div>
  );
}

export default Connecting;