import { useState } from 'react'
import './App.css'
import backgroundImage from '/home/swarnadip/Documents/Index/Menu/Menu/src/Image/freepik-export-20241117064007hmqY.png'

function App() {
  const [count, setCount] = useState(0)


  const backgroundImg = {
    backgroundImage: `url(${backgroundImage})`,
   
  }

  return (
    <menu className='h-[85vh] w-[22vw] ml-6 mt-8 rounded-[1vw] overflow-hidden'>

      {/* the first part */}
      <div className='h-[20vh] w-[100%] bg-[#000000de] opacity-90 flex items-center justify-between pl-3 pr-3'>

        {/* the username image div */}
        <div className='h-[7vw] w-[7vw] bg-white rounded-full border-[1.5px] text-[7vw] flex justify-center items-center'>
        <i class="ri-account-circle-fill"></i>
          </div>
        {/* the description div  */}
        <div className=' ml-[-2vw] gap-1'>
          <h1 className='text-white font-news text-[1.4vw]'>USERNAME</h1>
          <p className='text-white font-news text-[.8vw]'>xyv123@email.com</p>
          <p className='text-white font-news text-[.8vw]'>Follower:122</p>
          <button className='text-white font-news text-[.8vw]'>Visit Profile</button>
        </div>
        {/* the cross div */}
        <div className='h-[1.5vw] w-[1.5vw] bg-white text-black text-[1.5vw] flex items-center justify-center rounded-full mt-[-15vh]'>
        <i class="ri-close-fill"></i>
        </div>
      </div>






      {/* the border between this two div */}
      <div className='w-[100%] h-[1.5px] bg-white'></div>










      {/* the next part */}
      <div className='h-[63vh] w-[100%] bg-center bg-cover flex flex-col items-center justify-center gap-6' style={backgroundImg} >
        {/* home */}
        <div class ='home' className=''>Home</div>
        {/* gallery div */}
        <div className='h-[2.8vh] w-[5.5vw] bg-[#00000023] backdrop-blur-md text-gray-300 font-news font-semibold hover:border-[1px] hover:border-gray-500 flex justify-center items-center rounded-lg'>Gallery</div>
        {/* category div */}
        <div className='h-[2.8vh] w-[5.5vw] bg-[#00000023] backdrop-blur-md text-gray-300 font-news font-semibold hover:border-[1px] hover:border-gray-500 flex justify-center items-center rounded-lg'> Cetagory</div>
        {/* Account */}
        <div className='h-[2.8vh] w-[5.5vw] bg-[#00000023] backdrop-blur-md text-gray-300 font-news font-semibold hover:border-[1px] hover:border-gray-500 flex justify-center items-center rounded-lg'>My Account</div>
        {/* community */}
        <div className='h-[2.8vh] w-[5.5vw] bg-[#00000023] backdrop-blur-md text-gray-300 font-news font-semibold hover:border-[1px] hover:border-gray-500 flex justify-center items-center rounded-lg'>Community</div>
        {/* blog */}
        <div className='h-[2.8vh] w-[5.5vw] bg-[#00000023] backdrop-blur-md text-gray-300 font-news font-semibold hover:border-[1px] hover:border-gray-500 flex justify-center items-center rounded-lg'>Blog</div>
        {/* faqs */}
        <div className='h-[2.8vh] w-[5.5vw] bg-[#00000023] backdrop-blur-md text-gray-300 font-news font-semibold hover:border-[1px] hover:border-gray-500 flex justify-center items-center rounded-lg'>FAQs</div>
        {/* help */}
        <div className='h-[2.8vh] w-[5.5vw] bg-[#00000023] backdrop-blur-md text-gray-300 font-news font-semibold hover:border-[1px] hover:border-gray-500 flex justify-center items-center rounded-lg'>Help</div>
        {/* feedback */}
        <div className='h-[2.8vh] w-[5.5vw] bg-[#00000023] backdrop-blur-md text-gray-300 font-news font-semibold hover:border-[1px] hover:border-gray-500 flex justify-center items-center rounded-lg'>Feedback</div>
      </div>
    </menu>
  )
}

export default App
