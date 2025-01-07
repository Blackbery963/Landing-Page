import { useState } from 'react'
import './App.css'
import Grid from './assets/Components/Grid'


function App() {
  const [count, setCount] = useState(0)

  return (
    // the main part for screeec to screeen 
  <main className='w-screen h-screen bg-[#8d5c5c] overflow-x-hidden '>
    <h1 className='font-dmserif font-medium text-[2.5vw] text-white text-center'>Explore Our Collections</h1>

    {/* the container of all divs like the slider and the images starts from here */}
  <div className=' w-[95%] border-white border-[1px] mx-auto flex flex-col'>
    {/* the slider div */}
    <div className='w-[98%] h-[45vh] mx-auto mt-[1%] border-white border-[1px]'>
      slider
    </div>

    <div className='pl-4 pr-4 w-[100%]'>
    <Grid/>
    </div>
      {/* the blurry part later the grid images */}
      <div className=' bottom-0 left-0 w-[100%] h-16 bg-gradient-to-b from-transparent to-black pointer-events-none backdrop-blur-md flex items-center justify-center'>
      <button className=' p-1 rounded-md font-medium text-white backdrop-blur-md bg-white/10 border border-gray-600 cursor-pointer'>
      Explore More 
      <span className='ml-1 text-[20px]'>↓</span>
      </button>
      </div>
  </div>
  </main>
  )
}

export default App
