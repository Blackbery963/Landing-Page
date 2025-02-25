import { useState,useEffect } from 'react'
import Grid from './Grid'
import Slider from './Slider'
import { Link } from 'react-router-dom'


function Collection() {
  const [count, setCount] = useState(0)


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
    <Link to='/Gallery'>
    <div className='bottom-0 left-0 w-[100%] h-[100px] bg-gradient-to-b from-transparent to-black pointer-events-none backdrop-blur-md flex items-center justify-center rounded-md'>     
     <button className='p-1 rounded-md font-medium text-white backdrop-blur-md bg-white/10 border border-gray-600 cursor-pointer'>
        Explore More
        <span className='ml-1 text-[20px]'>↓</span>
      </button>
    </div>
    </Link>
  </div>
</main>

  )
}

export default Collection
// border-white border-[1px]