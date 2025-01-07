import { useState } from 'react'
import './App.css'
import bgImage from '/home/swarnadip/Documents/Index/Connecting/Connecting/src/images/5570027.jpg'
import image from '/home/swarnadip/Documents/Index/Connecting/Connecting/src/images/freepik-export-20240929163902GStv.png'

function App() {
  const [count, setCount] = useState(0)

  return (
  <div className='w-screen min-w-screen h-[60vh] mt-24 bg-black bg-center bg-cover bg-no-repeat flex items-center justify-between pr-2 lg:overflow-hidden overflow-auto shadow-lg' 
  style={{backgroundImage: `url(${bgImage})`}} >


    <div className='h-[100%] lg:w-[40%] pl-4 lg:pl-16 pt-20 animate-slideDown '>
    <h1 className=' font-DM lg:text-[60px] text-[40px]'>Connecting Hearts Through Art</h1>

    <p className='font-Unna lg:text-left lg:text-[22px] text-[18px] mt-6 '>Art is a universal language that speaks to the soul,
       sparking creativity and emotion. It tells stories and 
       connect us across culture and time. Beyond beauty, art
        inspires changes, challenges perspectives and brings 
        meaning to our shared human beings.</p>
  
<div className="flex gap-12 mt-12 group">
  {/* First Button */}
  <button className="h-[40px] w-[150px] bg-black text-white rounded-2xl font-semibold transition duration-300 ease-in-out 
    hover:bg-transparent hover:text-black hover:border-2 hover:border-black group-hover:bg-transparent group-hover:text-black group-hover:border-2 group-hover:border-black">
    Start Journey
  </button>

  {/* Second Button */}
  <button className="h-[40px] w-[150px] bg-transparent text-black border-2 border-black rounded-2xl font-semibold transition duration-300 ease-in-out 
    hover:bg-black hover:text-white group-hover:bg-black group-hover:text-white">
    Sign up
  </button>
</div>



    </div>


    <div className=' h-[60vh] w-[45%] animate-slideDown lg:visible invisible'>
    <img className='h-[100%]' src={image} alt="" />
    </div>
  </div>

  
  )
}

export default App
