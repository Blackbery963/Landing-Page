// import React from 'react'
// import { useEffect } from 'react';
// import { Link } from 'react-router-dom'
// import { FaBook, FaInfoCircle, FaHome, FaUser, } from 'react-icons/fa';
// import AOS from "aos";
// import "aos/dist/aos.css";
// import introBackground from '/home/swarnadip/Documents/Index/Index/Index/src/Company/About/About-images/side-view-man-holding-painting-brush.jpg'
// import uploadBackground from '/home/swarnadip/Documents/Index/Index/Index/src/Company/About/About-images/4860763.jpg'
// import DiaryBackground from '/home/swarnadip/Documents/Index/Index/Index/src/Company/About/About-images/3991843.jpg'
// import CollabBackground from '/home/swarnadip/Documents/Index/Index/Index/src/Company/About/About-images/19198668.jpg'
// import whyBackground from '/home/swarnadip/Documents/Index/Index/Index/src/Company/About/About-images/6943381.jpg'
// import diffBackground from '/home/swarnadip/Documents/Index/Index/Index/src/Company/About/About-images/5197176.jpg'
// import callBackground from '/home/swarnadip/Documents/Index/Index/Index/src/Company/About/About-images/3631943.jpg'
// import visionBackground from '/home/swarnadip/Documents/Index/Index/Index/src/Company/About/About-images/4346104.jpg'





// function About() {

//       useEffect(() => {
//         AOS.init({ duration: 1000 });
//       }, [])
    
//     return (
//         <div className=' max-w-full min-h-screen bg-[#edf2fa] overflow-x-hidden overflow-y-auto pb-8'>
//             <header className=' h-[100px] w-full bg-gradient-to-l from-black/80 via-blue-950/80 to-black/20 backdrop-blur-md flex items-center justify-between px-4 md:px-6 shadow-lg text-white fixed top-0 z-50'>
//             {/* Logo */}
//             <h1 className='lg:text-[35px] md:text-[30px] sm:text-[25px] text-[20px] font-bold font-Eagle'>Painters' Diary</h1>
//             {/* Navigation */}
//             <div className='flex items-center justify-center gap-x-2'>
//                     <Link to={"/"}>
//                         <button className='lg:px-4 px-2 py-1 bg-blue-700/50 hover:bg-blue-800/80 rounded-md font-Playfair text-white border border-gray-400 text-[18px]'>
//                             <FaHome className="text-xl sm:hidden" />
//                             <span className="hidden sm:inline">Home</span>
//                         </button>
//                     </Link>
//                     <Link to={"/About"}>
//                         <button className='lg:px-4 px-2 py-1 bg-blue-700/80 rounded-md font-Playfair text-white border border-gray-400 text-[18px]'>
//                             <FaInfoCircle className="text-xl sm:hidden" />
//                             <span className="hidden sm:inline">About</span>
//                         </button>
//                     </Link>
//                     <Link to={"/Account"}>
//                         <button className='lg:px-4 px-2 py-1 bg-blue-700/50 hover:bg-blue-800/80 rounded-md font-Playfair text-white border border-gray-400 text-[18px]'>
//                             <FaUser className="text-xl sm:hidden"/>
//                             <span className="hidden sm:inline">Account</span>
//                         </button>
//                     </Link>
//                     <Link to={"/Diary"}>
//                         <button className='lg:px-4 px-2 py-1 bg-blue-700/50 hover:bg-blue-800/80 rounded-md font-Playfair text-white border border-gray-400 text-[18px]'>
//                             <FaBook className="text-xl sm:hidden" />
//                             <span className="hidden sm:inline">Diary</span>
//                         </button>
//                     </Link>
//                 </div>
//             </header>

//            <main className='w-screen h-full flex flex-col gap-y-4 items-center justify-center mt-[150px]'>
//             {/* the introduction part */}
//             <div className='lg:w-[80vw] w-[95vw] sm:w-[88vw] h-[80vh] rounded-md flex flex-col items-center justify-center lg:px-36 sm:px-20 px-8' style={{backgroundImage: `url(${introBackground})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
//                 <h1 className='lg:text-[50px] sm:text-[40px] text-[35px] font-Playfair font-semibold text-[#79021c] text-center'>Painters' Diary: A Canvas for Every Artist's Journey</h1>
//                 <p className=' text-center lg:text-[25px] sm:text-[20px] text-[18px] font-Upright font-bold text-[#e7e4eb]'>Painters' Diary is a dedicated space for artists to showcase their creativity,
//                 journey, and collaborations. Whether you're a painter, illustrator, or mixed-media artist,
//                 this platform is your creative diary—to express, share, and grow. More than just a gallery,
//                 it’s a thriving community where every brushstroke and idea finds its place.</p>
//             </div>

//             {/* what we offer section */}
//             <div  className='w-[95vw] sm:w-[88vw] lg:w-[80vw] rounded-md h-auto border border-gray-500 overflow-hidden p-4'>
//             {/* Upload Section */}
//             <section className='flex flex-col md:flex-row items-center justify-center gap-4 h-auto md:h-[50vh]'>
//         <div data-aos="fade-up" className='w-full text-center flex flex-col items-center justify-center gap-4 p-4'>
//           <h1 className='text-[25px] sm:text-[30px] lg:text-[35px] font-Playfair font-semibold text-[#e74c3c]'>
//             Showcase Your Artwork: Upload & Inspire
//           </h1>
//           <p className='text-[18px] sm:text-[20px] lg:text-[25px] font-Upright font-bold text-[#677bab]'>
//             Easily upload your artwork and share your creative vision with the world. Whether it’s a painting, illustration, or mixed-media piece, Painters' Diary provides a space for your art to be seen, appreciated, and celebrated. Let your work tell its story and connect with a community of fellow artists.
//           </p>
//         </div>
//         <div data-aos="fade-up" className='w-full md:w-[40%] h-[40vh] md:h-full p-4'>
//           <img className='w-full h-full object-cover rounded-md border border-black/20' src={uploadBackground} alt='Upload Artwork' />
//         </div>
//       </section>
      
//       {/* Diary Section */}
//       <section className='flex flex-col-reverse md:flex-row items-center justify-center gap-4 h-auto md:h-[50vh]'>
//         <div data-aos="fade-up" className='w-full md:w-[40%] h-[40vh] md:h-full p-4'>
//           <img className='w-full h-full object-cover rounded-md border border-black/20' src={DiaryBackground} alt='Artistic Diary' />
//         </div>
//         <div data-aos="fade-up"  className='w-full text-center flex flex-col items-center justify-center gap-4 p-4'>
//           <h1 className='text-[25px] sm:text-[30px] lg:text-[35px] font-Playfair font-semibold text-[#262d79]'>
//             Unfold Your Creativity: Share Your Artistic Diary
//           </h1>
//           <p className='text-[18px] sm:text-[20px] lg:text-[25px] font-Upright font-bold text-[#677bab]'>
//             Share your thoughts, inspirations, and creative process by uploading your artist’s diary. Whether it's sketches, ideas, or personal reflections, Painters' Diary lets you preserve and showcase your artistic growth. Your journey is just as valuable as your artwork—let it inspire others!
//           </p>
//         </div>
//       </section>
      
//       {/* Collaboration Section */}
//       <section className='flex flex-col md:flex-row items-center justify-center gap-4 h-auto md:h-[50vh]'>
//         <div data-aos="fade-up" className='w-full text-center flex flex-col items-center justify-center gap-4 p-4'>
//           <h1 className='text-[25px] sm:text-[30px] lg:text-[35px] font-Playfair font-semibold text-[#850F8D]'>
//             Collaborate & Connect: Join Artistic Forces
//           </h1>
//           <p className='text-[18px] sm:text-[20px] lg:text-[25px] font-Upright font-bold text-[#677bab]'>
//             Discover the power of collaboration in art. Work with fellow artists, blend creative styles, and build something unique together. Painters' Diary offers a platform where ideas merge and artistic friendships thrive. Let your creativity flow beyond boundaries!
//           </p>
//         </div>
//         <div data-aos="fade-up" className='w-full md:w-[40%] h-[40vh] md:h-full p-4'>
//           <img className='w-full h-full object-cover rounded-md border border-black/20' src={CollabBackground} alt='Collaboration' />
//         </div>
//       </section>
//            </div>

//               {/* the the platform section */}
              
//                <div  className='w-[95vw] sm:w-[88vw] lg:w-[80vw] h-auto lg:h-[70vh] rounded-md flex flex-col lg:flex-row items-center justify-center border border-gray-500 overflow-hidden p-4 gap-y-2'>
//       <div data-aos="fade-up" className='w-full lg:w-[50%] flex flex-col items-center justify-center px-6 text-center lg:text-left gap-4'>
//         <h1 className='text-[25px] sm:text-[30px] lg:text-[35px] font-Playfair font-semibold text-[#5b8c5a]'>
//           Why Painters' Diary? A Home for Every Artist
//         </h1>
//         <p className='text-[18px] sm:text-[20px] lg:text-[25px] font-Upright font-bold text-[#677bab]'>
//           Painters' Diary is more than just a platform—it’s a space where artists can truly express themselves. Unlike social media, which focuses on trends, we prioritize creativity, storytelling, and artistic growth. Whether you want to showcase your work, document your journey, or collaborate with fellow artists, this is your creative sanctuary.
//         </p>
//       </div>
//       <div data-aos="fade-up" className='w-full lg:w-[50%] h-[40vh] lg:h-full'>
//         <img className='w-full h-full object-cover rounded-md' src={whyBackground} alt='Why Painters ' />
//       </div>
//     </div>

//     {/* what is the difference from others */}
//     <div className='w-[95vw] sm:w-[88vw] lg:w-[80vw] h-auto lg:h-[70vh] rounded-md flex flex-col lg:flex-row items-center justify-center border border-gray-500 overflow-hidden p-4 gap-y-2'>
//     <div data-aos="fade-up" className='w-full lg:w-[50%] h-[40vh] lg:h-full'>
//         <img className='w-full h-full object-cover rounded-md' src={diffBackground} alt='Why Painters ' />
//       </div>
//       <div data-aos="fade-up" className='w-full lg:w-[50%] flex flex-col items-center justify-center px-6 text-center lg:text-left gap-4'>
//         <h1 className='text-[25px] sm:text-[30px] lg:text-[35px] font-Playfair font-semibold text-[#7971ea]'>
//         What Sets Us Apart: A Platform Designed for Artists
//         </h1>
//         <p className='text-[18px] sm:text-[20px] lg:text-[25px] font-Upright font-bold text-[#677bab]'>
//         Unlike generic social media or art galleries, Painters' Diary is built for artists who value storytelling, creativity, and meaningful connections. Here, your art isn't just displayed—it’s part of a journey. With features like diary uploads, collaborations, and a unique unfolding experience, we provide a space where every artist's voice is heard and celebrated.
//         </p>
//       </div>
//     </div>

//     {/* vision */}
//     <div className='w-[95vw] sm:w-[88vw] lg:w-[80vw] h-[70vh] lg:px-36 sm:px-20 px-8 rounded-md flex flex-col lg:flex-row items-center justify-center border border-gray-500 overflow-hidden p-4 gap-y-2' style={{backgroundImage: `url(${visionBackground})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
//     <div data-aos="fade-up" className='backdrop-blur-md flex flex-col items-center justify-center gap-y-4 p-4 border border-black/20 rounded-md bg-[#f7f7f72f] bg-opacity-80'>      
//       <h1 className='text-[25px] sm:text-[30px] lg:text-[35px] font-Playfair font-semibold text-center text-[#6A1E55]'>Uniting Artists Through Creativity: A Journey Beyond Boundaries</h1>
//       <p className='text-[18px] sm:text-[20px] lg:text-[25px] font-Upright font-bold text-center text-[#3B1E54]'>Art has the power to transcend borders, cultures, and languages. Painters' Diary was born in India with the vision of creating a global platform where artists can share their creativity, stories, and inspirations. What starts here will grow into a worldwide community—connecting artists from every corner of the world, fostering collaboration, and celebrating the universal language of art. Join us in building a space where creativity knows no boundaries!</p>
//     </div>
//     </div>

//       {/* call for joining */}
//       <div className='w-[95vw] sm:w-[88vw] lg:w-[80vw] h-auto lg:h-[70vh] bg-[#c7a5aa] rounded-md flex flex-col lg:flex-row items-center justify-center border border-gray-500 overflow-hidden p-4 gap-y-2'>
   
//       <div data-aos="fade-up" className='w-full lg:w-[50%] flex flex-col items-center justify-center px-6 text-center lg:text-left gap-4'>
//         <h1 className='text-[25px] sm:text-[30px] lg:text-[35px] font-Playfair font-semibold text-[#21191c] text-left'>
//         Join the Journey: Create, Share, and Inspire!
//         </h1>
//         <p className='text-[18px] sm:text-[20px] lg:text-[25px] font-Upright font-bold text-[#395e77]'>
//         Be part of a vibrant community where artists express their creativity, connect with like-minded individuals, and grow together. Upload your artwork, document your artistic journey, and collaborate on inspiring projects. At Painters' Diary, every brushstroke and idea matters. Start your journey today and let the world see your story unfold!
//         </p>
//       </div>
//       <div data-aos="fade-up" className='w-full lg:w-[50%] h-[40vh] lg:h-full'>
//         <img className='w-full h-full object-cover rounded-md' src={callBackground} alt='Why Painters ' />
//       </div>
//     </div>

//     </main>
//         </div>
//     )
// }

// export default About



import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBook, FaInfoCircle, FaHome, FaUser } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';
import introBackground from './About-images/side-view-man-holding-painting-brush.jpg';
import uploadBackground from './About-images/4860763.jpg';
import DiaryBackground from './About-images/3991843.jpg';
import CollabBackground from './About-images/19198668.jpg';
import whyBackground from './About-images/6943381.jpg';
import diffBackground from './About-images/5197176.jpg';
import callBackground from './About-images/3631943.jpg';
import visionBackground from './About-images/4346104.jpg';

function About() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: false, // Animate only once
    });
  }, []);

  // Framer Motion variants for sections
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  // Framer Motion variants for images
  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.8, ease: 'easeOut' } },
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };

  return (
    <div className="max-w-full min-h-screen bg-[#edf2fa] overflow-x-hidden overflow-y-auto pb-8">
      <header className="h-[100px] w-full bg-gradient-to-l from-black/80 via-blue-950/80 to-black/20 backdrop-blur-md flex items-center justify-between px-4 md:px-6 shadow-lg text-white fixed top-0 z-50">
        <h1 className="lg:text-[35px] md:text-[30px] sm:text-[25px] text-[20px] font-bold font-Eagle">
          Painters' Diary
        </h1>
        <div className="flex items-center justify-center gap-x-2">
          <Link to="/">
            <button className="lg:px-4 px-2 py-1 bg-blue-700/50 hover:bg-blue-800/80 rounded-md font-Playfair text-white border border-gray-400 text-[18px]">
              <FaHome className="text-xl sm:hidden" />
              <span className="hidden sm:inline">Home</span>
            </button>
          </Link>
          <Link to="/About">
            <button className="lg:px-4 px-2 py-1 bg-blue-700/80 rounded-md font-Playfair text-white border border-gray-400 text-[18px]">
              <FaInfoCircle className="text-xl sm:hidden" />
              <span className="hidden sm:inline">About</span>
            </button>
          </Link>
          <Link to="/Account">
            <button className="lg:px-4 px-2 py-1 bg-blue-700/50 hover:bg-blue-800/80 rounded-md font-Playfair text-white border border-gray-400 text-[18px]">
              <FaUser className="text-xl sm:hidden" />
              <span className="hidden sm:inline">Account</span>
            </button>
          </Link>
          <Link to="/Journal">
            <button className="lg:px-4 px-2 py-1 bg-blue-700/50 hover:bg-blue-800/80 rounded-md font-Playfair text-white border border-gray-400 text-[18px]">
              <FaBook className="text-xl sm:hidden" />
              <span className="hidden sm:inline">Diary</span>
            </button>
          </Link>
        </div>
      </header>

      <main className="w-screen h-full flex flex-col gap-y-8 items-center justify-center mt-[150px]">
        {/* Introduction Section */}
        <motion.div
          className="lg:w-[80vw] w-[95vw] sm:w-[88vw] h-[80vh] rounded-md flex flex-col items-center justify-center lg:px-36 sm:px-20 px-8"
          style={{
            backgroundImage: `url(${introBackground})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="lg:text-[50px] sm:text-[40px] text-[35px] font-Playfair font-semibold text-[#79021c] text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Painters' Diary: A Canvas for Every Artist's Journey
          </motion.h1>
          <motion.p
            className="text-center lg:text-[25px] sm:text-[20px] text-[18px] font-Upright font-bold text-[#e7e4eb]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Painters' Diary is a dedicated space for artists to showcase their creativity,
                journey, and collaborations. Whether you're a painter, illustrator, or mixed-media artist,
                this platform is your creative diary—to express, share, and grow. More than just a gallery,
                it’s a thriving community where every brushstroke and idea finds its place.
          </motion.p>
        </motion.div>

        {/* What We Offer Section */}
        <div className="w-[95vw] sm:w-[88vw] lg:w-[80vw] rounded-md h-auto border border-gray-500 overflow-hidden p-4">
          {/* Upload Section */}
          <motion.section
            className="flex flex-col md:flex-row items-center justify-center gap-4 h-auto md:h-[50vh]"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div
              data-aos="fade-right"
              data-aos-delay="100"
              className="w-full text-center flex flex-col items-center justify-center gap-4 p-4"
            >
              <h1 className="text-[25px] sm:text-[30px] lg:text-[35px] font-Playfair font-semibold text-[#e74c3c]">
                Showcase Your Artwork: Upload & Inspire
              </h1>
              <p className="text-[18px] sm:text-[20px] lg:text-[25px] font-Upright font-bold text-[#677bab]">
                 Easily upload your artwork and share your creative vision with the world. Whether it’s a painting, illustration, or mixed-media piece, Painters' Diary provides a space for your art to be seen, appreciated, and celebrated. Let your work tell its story and connect with a community of fellow artists.
              </p>
            </div>
            <motion.div
              data-aos="zoom-in"
              data-aos-delay="200"
              className="w-full md:w-[40%] h-[40vh] md:h-full p-4"
              variants={imageVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
            >
              <img
                className="w-full h-full object-cover rounded-md border border-black/20"
                src={uploadBackground}
                alt="Upload Artwork"
              />
            </motion.div>
          </motion.section>

          {/* Diary Section */}
          <motion.section
            className="flex flex-col-reverse md:flex-row items-center justify-center gap-4 h-auto md:h-[50vh]"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              data-aos="zoom-in"
              data-aos-delay="200"
              className="w-full md:w-[40%] h-[40vh] md:h-full p-4"
              variants={imageVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
            >
              <img
                className="w-full h-full object-cover rounded-md border border-black/20"
                src={DiaryBackground}
                alt="Artistic Diary"
              />
            </motion.div>
            <div
              data-aos="fade-left"
              data-aos-delay="100"
              className="w-full text-center flex flex-col items-center justify-center gap-4 p-4"
            >
              <h1 className="text-[25px] sm:text-[30px] lg:text-[35px] font-Playfair font-semibold text-[#262d79]">
                Unfold Your Creativity: Share Your Artistic Diary
              </h1>
              <p className="text-[18px] sm:text-[20px] lg:text-[25px] font-Upright font-bold text-[#677bab]">
               Share your thoughts, inspirations, and creative process by uploading your artist’s diary. Whether it's sketches, ideas, or personal reflections, Painters' Diary lets you preserve and showcase your artistic growth. Your journey is just as valuable as your artwork—let it inspire others!
              </p>
            </div>
          </motion.section>

          {/* Collaboration Section */}
          <motion.section
            className="flex flex-col md:flex-row items-center justify-center gap-4 h-auto md:h-[50vh]"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div
              data-aos="fade-right"
              data-aos-delay="100"
              className="w-full text-center flex flex-col items-center justify-center gap-4 p-4"
            >
              <h1 className="text-[25px] sm:text-[30px] lg:text-[35px] font-Playfair font-semibold text-[#850F8D]">
                Collaborate & Connect: Join Artistic Forces
              </h1>
              <p className="text-[18px] sm:text-[20px] lg:text-[25px] font-Upright font-bold text-[#677bab]">
Discover the power of collaboration in art. Work with fellow artists, blend creative styles, and build something unique together. Painters' Diary offers a platform where ideas merge and artistic friendships thrive. Let your creativity flow beyond boundaries!

              </p>
            </div>
            <motion.div
              data-aos="zoom-in"
              data-aos-delay="200"
              className="w-full md:w-[40%] h-[40vh] md:h-full p-4"
              variants={imageVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
            >
              <img
                className="w-full h-full object-cover rounded-md border border-black/20"
                src={CollabBackground}
                alt="Collaboration"
              />
            </motion.div>
          </motion.section>
        </div>

        {/* Why Painters' Diary Section */}
        <motion.div
          className="w-[95vw] sm:w-[88vw] lg:w-[80vw] h-auto lg:h-[70vh] rounded-md flex flex-col lg:flex-row items-center justify-center border border-gray-500 overflow-hidden p-4 gap-y-2"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="w-full lg:w-[50%] flex flex-col items-center justify-center px-6 text-center lg:text-left gap-4"
          >
            <h1 className="text-[25px] sm:text-[30px] lg:text-[35px] font-Playfair font-semibold text-[#5b8c5a]">
              Why Painters' Diary? A Home for Every Artist
            </h1>
            <p className="text-[18px] sm:text-[20px] lg:text-[25px] font-Upright font-bold text-[#677bab]">
Painters' Diary is more than just a platform—it’s a space where artists can truly express themselves. Unlike social media, which focuses on trends, we prioritize creativity, storytelling, and artistic growth. Whether you want to showcase your work, document your journey, or collaborate with fellow artists, this is your creative sanctuary.

            </p>
          </div>
          <motion.div
            data-aos="flip-left"
            data-aos-delay="200"
            className="w-full lg:w-[50%] h-[40vh] lg:h-full"
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true }}
          >
            <img className="w-full h-full object-cover rounded-md" src={whyBackground} alt="Why Painters" />
          </motion.div>
        </motion.div>

        {/* What Sets Us Apart Section */}
        <motion.div
          className="w-[95vw] sm:w-[88vw] lg:w-[80vw] h-auto lg:h-[70vh] rounded-md flex flex-col lg:flex-row items-center justify-center border border-gray-500 overflow-hidden p-4 gap-y-2"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            data-aos="flip-right"
            data-aos-delay="200"
            className="w-full lg:w-[50%] h-[40vh] lg:h-full"
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true }}
          >
            <img className="w-full h-full object-cover rounded-md" src={diffBackground} alt="What Sets Us Apart" />
          </motion.div>
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="w-full lg:w-[50%] flex flex-col items-center justify-center px-6 text-center lg:text-left gap-4"
          >
            <h1 className="text-[25px] sm:text-[30px] lg:text-[35px] font-Playfair font-semibold text-[#7971ea]">
              What Sets Us Apart: A Platform Designed for Artists
            </h1>
            <p className="text-[18px] sm:text-[20px] lg:text-[25px] font-Upright font-bold text-[#677bab]">
                      Unlike generic social media or art galleries, Painters' Diary is built for artists who value storytelling, creativity, and meaningful connections. Here, your art isn't just displayed—it’s part of a journey. With features like diary uploads, collaborations, and a unique unfolding experience, we provide a space where every artist's voice is heard and celebrated.
            </p>
          </div>
        </motion.div>

        {/* Vision Section */}
        <motion.div
          className="w-[95vw] sm:w-[88vw] lg:w-[80vw] h-[70vh] lg:px-36 sm:px-20 px-8 rounded-md flex flex-col lg:flex-row items-center justify-center border border-gray-500 overflow-hidden p-4 gap-y-2"
          style={{
            backgroundImage: `url(${visionBackground})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            data-aos="zoom-in-up"
            data-aos-delay="100"
            className="backdrop-blur-md flex flex-col items-center justify-center gap-y-4 p-4 border border-black/20 rounded-md bg-[#f7f7f72f] bg-opacity-80"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h1 className="text-[25px] sm:text-[30px] lg:text-[35px] font-Playfair font-semibold text-center text-[#6A1E55]">
             Uniting Artists Through Creativity: A Journey Beyond Boundaries
            </h1>
            <p className="text-[18px] sm:text-[20px] lg:text-[25px] font-Upright font-bold text-center text-[#3B1E54]">
             Art has the power to transcend borders, cultures, and languages. Painters' Diary was born in India with the vision of creating a global platform where artists can share their creativity, stories, and inspirations. What starts here will grow into a worldwide community—connecting artists from every corner of the world, fostering collaboration, and celebrating the universal language of art. Join us in building a space where creativity knows no boundaries!
            </p>
          </motion.div>
        </motion.div>

        {/* Call to Action Section */}
        <motion.div
          className="w-[95vw] sm:w-[88vw] lg:w-[80vw] h-auto lg:h-[70vh] bg-[#c7a5aa] rounded-md flex flex-col lg:flex-row items-center justify-center border border-gray-500 overflow-hidden p-4 gap-y-2"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="w-full lg:w-[50%] flex flex-col items-center justify-center px-6 text-center lg:text-left gap-4"
          >
            <h1 className="text-[25px] sm:text-[30px] lg:text-[35px] font-Playfair font-semibold text-[#21191c] text-left">
              Join the Journey: Create, Share, and Inspire!
            </h1>
            <p className="text-[18px] sm:text-[20px] lg:text-[25px] font-Upright font-bold text-[#395e77]">
                     Be part of a vibrant community where artists express their creativity, connect with like-minded individuals, and grow together. Upload your artwork, document your artistic journey, and collaborate on inspiring projects. At Painters' Diary, every brushstroke and idea matters. Start your journey today and let the world see your story unfold!
            </p>
          </div>
          <motion.div
            data-aos="flip-left"
            data-aos-delay="200"
            className="w-full lg:w-[50%] h-[40vh] lg:h-full"
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true }}
          >
            <img className="w-full h-full object-cover rounded-md" src={callBackground} alt="Join the Journey" />
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
}

export default About;