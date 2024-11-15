import { useState } from 'react'
import './App.css'
import menu from '/home/swarnadip/Documents/Index/navbar/src/image/menu.png'
import search from '/home/swarnadip/Documents/Index/navbar/src/image/search-icon.png'

function App() {
  
  return (
    <nav>
      <div className='h-[12vh] w-full bg-slate-950 flex items-center justify-between pl-4 pr-4'>

        {/* the div for menu icon */}

        <div className='h-[4vh] w-[5vh] bg-green-900 items-center pl-2 rounded-md  hover:bg-green-800 hover:border-[1px] hover:border-green-600 '>
          <a href="https://www.google.com">
          <img className='h-[100%] w-[80%]' src={menu} alt="" />
          </a>
        </div>






        {/* The div for logo ('Painters Diary' and 'The Diary of Every Artist' ) icon */}
        <div className='ml-6'>
          <h1 className='text-orange-700 font-eagle font-bold text-[2vw]'>Painters' Diary</h1>
          <h6 className='text-blue-600 font-cookie font-medium text-[1.25vw] ml-[20%] mt-[-2%]'>The Diary  of Every Artist</h6>
        </div>



        {/* The last  button  */}
        <div className='flex gap-3 items-center'>

          {/* the div for search button */}
          <div className='h-[1.8vw] w-[6vw] border-[1px] border-slate-300 rounded-3xl'>
            <button>
            
            </button>
          </div>

          {/* the div for others button */}
          <div className='flex gap-6 text-[.75vw] h-[4vh] justify-center items-center'>
          <button className='h-[2.5vh] hover:bg-green-900 hover:border-[1px] hover:border-green-600 hover:text-black pl-2 pr-2 rounded-[0.5rem] text-white font-Faculty'>Home</button>
          <button className='h-[2.5vh] hover:bg-green-900 hover:border-[1px] hover:border-green-600 hover:text-black pl-2 pr-2 rounded-[0.5rem] text-white font-Faculty'>About</button>
          <button className='h-[2.5vh] hover:bg-green-900 hover:border-[1px] hover:border-green-600 hover:text-black pl-2 pr-2 rounded-[0.5rem] text-white font-Faculty'>Contact</button>
          <button className='h-[2.5vh] hover:bg-green-900 hover:border-[1px] hover:border-green-600 hover:text-black pl-2 pr-2 rounded-[0.5rem] text-white font-Faculty'>Sign-up</button>
          </div>
          
        </div>

      </div>
    </nav>
  )
}

export default App
