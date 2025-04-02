import { useState,useEffect } from 'react'
import Grid from './Grid'
import Slider from './Slider'
import { Link } from 'react-router-dom'
import { FaArrowDown } from 'react-icons/fa'
import AOS from "aos";
import "aos/dist/aos.css";


function Collection() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
//     // the main part for screeec to screeen 
<main className='w-screen min-h-screen bg-slate-300 overflow-x-hidden pb-4 rounded-md'>
  <h1 className='font-dmserif font-medium lg:text-5xl text-2xl text-red-800 text-center'>Explore Our Collections</h1>
  <div className='w-[95%] mx-auto flex flex-col'>
    {/* Slider */}
    <div className='w-[98%] h-[50vh] mx-auto mt-[1%]  overflow-hidden'>
      <Slider/>
    </div>
    <div className=' w-[100%]'>
      <Grid />
    </div>
    
    <div data-aos='fade-in' className='bottom-0 left-0 w-[98%] mx-auto h-[80px] bg-gradient-to-tr from-[#e5b2997e] to-[#f2bed17c] backdrop-blur flex items-center justify-center rounded-md mt-[-2%]'>
      <Link to='/Gallery'>
     <button className=' mx-auto py-2 px-2 bg-white/40 rounded-md font-medium font-Playfair backdrop-blur-md cursor-pointer text-[#212121] flex items-center justify-center gap-1'>
        Explore More
        <FaArrowDown/>
      </button>
      </Link>
    </div>
    
  </div>
</main>

  )
}

export default Collection