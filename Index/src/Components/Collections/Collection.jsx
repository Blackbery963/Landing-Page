
// import { useState, useEffect } from 'react'
// import Grid from './Grid'
// import Slider from './Slider'
// import { Link } from 'react-router-dom'
// import { FaArrowDown } from 'react-icons/fa'
// import AOS from "aos";
// import "aos/dist/aos.css";

// function Collection() {
//   useEffect(() => {
//     AOS.init({ duration: 800 });
//   }, []);

//   return (
//     <main className='w-screen min-h-screen bg-gray-100 dark:bg-[#040d1200] overflow-x-hidden pb-4'>
//       {/* Header Section */}
//       <section className='w-full py-8 px-4'>
//         <h1 className='font-dmserif font-medium lg:text-5xl text-3xl text-red-800 dark:text-red-400 text-center'>
//           Explore Our Collections
//         </h1>
//       </section>

//       {/* Main Content */}
//       <div className='w-[95%] mx-auto flex flex-col gap-4'>
//         {/* Slider Section */}
//         <section className='w-full h-[50vh] rounded-xl overflow-hidden shadow-lg dark:shadow-gray-800/50'>
//           <Slider/>
//         </section>

//         {/* Grid Section */}
//         <section className='w-full'>
//           <Grid />
//         </section>
         
//         {/* CTA Section */}
//         <section 
//           data-aos='fade-in' 
//           className='w-full h-20 bg-gradient-to-br from-red-100 via-pink-100 to-purple-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-950 backdrop-blur-sm flex items-center justify-center rounded-xl shadow-md'
//         >
//           <Link to='/Gallery'>
//             <button className='py-2 px-6 bg-white/70 dark:bg-gray-700/70 rounded-lg font-medium font-Playfair backdrop-blur-md cursor-pointer text-gray-800 dark:text-gray-100 hover:bg-white/90 dark:hover:bg-gray-600/80 transition-all duration-300 flex items-center justify-center gap-2'>
//               Explore More
//               <FaArrowDown className='animate-bounce'/>
//             </button>
//           </Link>
//         </section>
//       </div>
//     </main>
//   )
// }

// export default Collection


import { useEffect } from 'react'
import Grid from './Grid'
import Slider from './Slider'
import { Link } from 'react-router-dom'
import { FaArrowDown } from 'react-icons/fa'
import AOS from "aos";
import "aos/dist/aos.css";

function Collection() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <main className='w-screen min-h-screen bg-gray-100 dark:bg-gray-900 overflow-x-hidden pb-4 relative'>
      {/* Header Section */}
      <section className='w-full py-8 px-4'>
        <h1 className='font-dmserif font-medium lg:text-5xl text-3xl text-red-800 dark:text-red-400 text-center'>
          Explore Our Collections
        </h1>
      </section>

      {/* Main Content */}
      <div className='w-[95%] mx-auto flex flex-col gap-8'>
        {/* Slider Section */}
        <section className='w-full h-[50vh] rounded-xl overflow-hidden shadow-lg dark:shadow-gray-800/50'>
          <Slider/>
        </section>

        {/* Grid Section with Enhanced Foggy Effect */}
        <section className='w-full relative'>
          <div className='relative'>
            <Grid />
            {/* Darker Foggy Gradient Overlay with Button */}
            <div className='absolute bottom-0 left-0 w-full h-64 flex items-end justify-center pb-6'>
              <div className='absolute inset-0 bg-gradient-to-t from-gray-100 via-gray-100/70 to-transparent dark:from-gray-900 dark:via-gray-900/80 pointer-events-none'></div>
              <Link to='/Gallery' className='relative z-10'>
                <button className='py-3 px-8 bg-white/90 dark:bg-gray-800/90 rounded-full font-medium font-Playfair shadow-lg cursor-pointer text-gray-800 dark:text-gray-100 hover:bg-white dark:hover:bg-gray-700 transition-all duration-300 flex items-center justify-center gap-2 group'>
                  Explore More
                  <FaArrowDown className='group-hover:translate-y-1 transition-transform duration-300'/>
                </button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

export default Collection