import { useState } from 'react'
import './App.css'
import footer from '/home/swarnadip/Documents/Index/Footer/Footer/src/bgimg/freepik-export-20240930073049yijq.png'
import palette from '/home/swarnadip/Documents/Index/Footer/Footer/src/bgimg/pallete.jpg'
import facebook from '/home/swarnadip/Documents/Index/Footer/Footer/src/bgimg/facebook (2).png'
import instagram from '/home/swarnadip/Documents/Index/Footer/Footer/src/bgimg/instagram.png'
import youtube from '/home/swarnadip/Documents/Index/Footer/Footer/src/bgimg/youtube.png'
import twitter from '/home/swarnadip/Documents/Index/Footer/Footer/src/bgimg/twitter.png'
import linkedin from '/home/swarnadip/Documents/Index/Footer/Footer/src/bgimg/linkedin.png'

function App() {
  const [count, setCount] = useState(0)

  const foot = {
    backgroundImage: `url(${footer})`,
  }

  return (
   <footer className='h-screen w-screen bg-[#947c5f] flex justify-center items-center'>
    {/*  div for containing all components */}
    <div className='h-[94vh] w-[90vw] border-[1px] border-red-50 rounded-lg bg-center bg-cover shadow-black shadow-lg' style={foot}>
      {/* the top navbar */}
      <nav className='w-[100%] h-[14vh] border-buttom-[1px] border-red-50 flex items-center justify-between pl-6 pr-6'>
        {/* medium the logo image */}
        <div className='h-[3.2vw] w-[3.2vw] bg-red-400 rounded-full overflow-hidden border-red-50 border-[2px]'>
          <img className='h-[100%] w-[100%]' src={palette} alt="" />
        </div>
        {/* the logo name */}
        <div className=''>
          <h1 className='font-eagle text-[2.5vw] font-bold'>Painters' Diary</h1>
          <h6 className='font-cookie text-[1.5vw] font-medium mt-[-.5vw] ml-[4.5vw]'>The Diary of Every Artist</h6>
        </div>
        {/* sign up button */}
        <div>
          <button className='font-news h-[4vh] bg-red-400 pl-6 pr-6 rounded-xl font-medium text-[1vw] text-white'> Sign up</button>
        </div>
      </nav>



    <div>
      <h1 className='text-center text-[1.5vw] font-bold'>Important Events</h1>
      <div id='event-container ' className='h-[25vh] w-[90%] border-white border-[1px] mx-auto mt-4 rounded-xl'>
      </div>
    </div>



    <div className='w-[100%]  flex items-center  justify-between pl-[5vw] pr-[5vw] mt-8'>

      {/* Company */}
      <div className='group'>
        <h1 className='text-[1.3vw] font-dmserif text-white'>Company</h1>
        <p className='text-[.9vw] font-semibold font-news hover:underline hover:text-cyan-600'>Home</p>
        <p className='text-[.9vw] font-semibold font-news hover:underline hover:text-cyan-600'>About us</p>
        <p className='text-[.9vw] font-semibold font-news hover:underline hover:text-cyan-600'>Community</p>
        <p className='text-[.9vw] font-semibold font-news hover:underline hover:text-cyan-600'>Blog</p>
      </div>
      {/* resources */}
      <div>
        <h1 className='text-[1.3vw] font-dmserif text-white'>Resources</h1>
        <p className='text-[.9vw] font-semibold font-news hover:underline hover:text-cyan-600'>FAQs</p>
        <p className='text-[.9vw] font-semibold font-news hover:underline hover:text-cyan-600'>Reviews</p>
        <p className='text-[.9vw] font-semibold font-news hover:underline hover:text-cyan-600'>Help & Support</p>
        <p className='text-[.9vw] font-semibold font-news hover:underline hover:text-cyan-600'>Events</p>
      </div>
      {/* legal */} 
      <div>
        <h1 className='text-[1.3vw] font-dmserif text-white'>Legal</h1>
        <p className='text-[.9vw] font-semibold font-news hover:underline hover:text-cyan-600'>Terms & Conditions</p>
        <p className='text-[.9vw] font-semibold font-news hover:underline hover:text-cyan-600'>Privacy Policy</p>
        <p className='text-[.9vw] font-semibold font-news hover:underline hover:text-cyan-600'>License</p>
        <p className='text-[.9vw] font-semibold font-news hover:underline hover:text-cyan-600'>Coolies</p>
      </div>
      {/*product  */}
      <div>
        <h1 className='text-[1.3vw] font-dmserif text-white'>Product</h1>
        <p className='text-[.9vw] font-semibold font-news hover:underline hover:text-cyan-600'>Update</p>
        <p className='text-[.9vw] font-semibold font-news hover:underline hover:text-cyan-600'>Security</p>
      </div>
      {/* contacts */}
      <div>
        <h1 className='text-[1.3vw] font-dmserif text-white'>Contact us</h1>
        <p className='text-[.9vw] font-semibold font-news'>Berunanpukuriya</p>
        <p className='text-[.9vw] font-semibold font-news'>malikapur</p>
        <p className='text-[.9vw] font-semibold font-news'>Kolkata 700126</p>
        <p className='text-[.9vw] font-semibold font-news'>+918617331488</p>
      </div>

    </div>

    <div className='flex flex-col items-center justify-center mx-auto mt-[10vh]'>
      <p>EMAIL US</p>
      <p>swarnadipb727@gmail.com</p>
    </div>

    {/* div for social meda icon */}
    <div className=' flex items-center justify-center gap-6 mt-4'>
      {/* first line */}
      <div className='w-[20vw] h-[2px] bg-black'></div>

      {/* social media part  */}
      <div className='flex gap-6 overflow-hidden'> 
        <div className='h-[2.7vw] w-[2.7vw] rounded-lg'>
          <img className='h-[100%] w-[100%] p-1' src={facebook} alt="" />
        </div>
        <div className='h-[2.7vw] w-[2.7vw] rounded-lg'>
        <img className='h-[100%] w-[100%] p-1' src={instagram} alt="" />
        </div>
        <div className='h-[2.7vw] w-[2.7vw] rounded-lg'>
        <img className='h-[95%] w-[95%] p-2 rounded-lg bg-white' src={twitter} alt="" />
        </div>
        <div className='h-[2.7vw] w-[2.7vw]  rounded-lg '>
        <img className='h-[100%] w-[100%] p-1' src={youtube} alt="" />
        </div>
        <div className='h-[2.7vw] w-[2.7vw] rounded-lg'>
        <img className='h-[100%] w-[100%] p-1' src={linkedin} alt="" />
        </div>
      </div>
      {/* the last line */}
      <div className='w-[20vw] h-[2px] bg-black'></div>
    </div>


    <div className=' flex flex-col items-center justify-center my-8'>
      <p>Copyright © 2024 Painters' Diary. All Rights Reserved.</p>
      <p>This website and its content are the property of Painters' Diary. Unauthorized use is prohibited.</p>
    </div>
      </div>
   </footer>
  )
}

export default App
