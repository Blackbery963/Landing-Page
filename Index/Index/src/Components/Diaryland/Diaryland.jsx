import React from 'react'
import background from '/home/swarnadip/Documents/Index/Index/Index/src/Components/Diaryland/Diaryland-Images/calligraphy-7188024.jpg'
import { Link } from 'react-router-dom'
import { FaHome, FaInfoCircle, FaUser, FaBook, FaArrowRight, FaArrowUp } from 'react-icons/fa';
import Diarylandslider from './Diarylandslider';


function Diaryland() {
    return (
<div className=' h-screen w-screen bg-black bg-center bg-cover flex items-center justify-center' style={{backgroundImage: `url(${background})`}}>
     <div className=' h-[90%] w-[85%] border-[2px] border-white bg-black/50 rounded-lg flex flex-col items-center justify-between overflow-hidden'>
            <header className="h-[100px] w-full backdrop-blur-md shadow-md flex items-center justify-between pl-4 pr-8 sticky top-0 z-50">
        <div>
          <h1 className="font-Eagle font-bold lg:text-[35px] md:text-[30px] sm:text-[25px] text-[20px] text-[#001F3F]">
            Painters' Diary
          </h1>
        </div>
        <div className="font-Playfair flex md:gap-8 gap-4">
          <Link to="/">
            <button className="hidden sm:flex bg-gradient-to-tr from-amber-700 to-amber-900 text-white px-2 py-1 rounded-md">
              Home
            </button>
            <FaHome className="sm:hidden text-green-700 text-2xl" title="Home" />
          </Link>
          <button className="hidden sm:flex bg-gradient-to-tr from-amber-700 to-amber-900 text-white px-2 py-1 rounded-md">
            About
          </button>
          <FaInfoCircle className="sm:hidden text-green-700 text-2xl" title="About" />
          <Link to={"/Account"}>
            <button className="hidden sm:flex bg-gradient-to-tr from-amber-700 to-amber-900 text-white px-2 py-1 rounded-md">
              Account
            </button>
            <FaUser className="sm:hidden text-green-700 text-2xl" title="Contact" />
          </Link>
          <button className="hidden sm:flex bg-gradient-to-tr from-amber-700 to-amber-900 text-white px-2 py-1 rounded-md">
          Collection
          </button>
          <FaBook className="sm:hidden text-green-700 text-2xl" title="Collections" />
        </div>
        </header>

        <main className=' mx-auto px-8 md:px-0'>
            <h1 className=' lg:text-[40px] md:text-[30px] text-[25px] text-center text-white font-Playfair font-semibold'> A Chronicle of Thoughts, Dreams, and Memories</h1>
            <h5 className=' lg:text-[20px] text-white text-center font-news'>Explore the Pages of Time, Where Every Entry Holds a Story Waiting to Be Told</h5>
        </main>
        {/* the sliding section */}
        {/* <div className=' md:h-[45%] h-[35%] lg:w-[70%] sm:w-[85%] w-[90%] mb-8 border border-gray-300 flex items-center justify-between'>
         <Diarylandslider/>
        </div> */}
        <div className="flex justify-center items-center w-full mb-8">
         <div className="lg:w-[70%] md:w-[85%] sm:w-[90%] w-[95%] lg:h-[400px] md:h-[350px] sm:h-[300px] h-[250px] border border-gray-300 p-2 rounded-lg flex items-center">
          <Diarylandslider />
         </div>
        </div>


      </div>
 </div>
    )
}

export default Diaryland
