import { useState } from 'react'
import Grid from './Grid'
import Slider from './Slider'



function Collection() {
  const [count, setCount] = useState(0)

  return (
//     // the main part for screeec to screeen 
<main className='w-screen min-h-screen bg-[#8d5c5c] overflow-x-hidden pb-4'>
  <h1 className='font-dmserif font-medium text-[2.5vw] text-white text-center'>Explore Our Collections</h1>
  <div className='w-[95%] border-white border-[1px] mx-auto flex flex-col'>
    {/* Slider */}
    <div className='w-[98%] h-[50vh] mx-auto mt-[1%] border-white border-[1px]'>
      <Slider/>
    </div>
    <div className='pl-4 pr-4 w-[100%]'>
      <Grid />
    </div>
    <div className='bottom-0 left-0 w-[100%] h-[100px] bg-gradient-to-b from-transparent to-black pointer-events-none backdrop-blur-md flex items-center justify-center'>
      <button className='p-1 rounded-md font-medium text-white backdrop-blur-md bg-white/10 border border-gray-600 cursor-pointer'>
        Explore More
        <span className='ml-1 text-[20px]'>↓</span>
      </button>
    </div>
  </div>
</main>

  )
}

export default Collection
