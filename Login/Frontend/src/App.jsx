import { useState } from 'react'
import './App.css'
import Background from './COMPONENT/Image/background.jpg'
import pallete from './COMPONENT/Image/pallete.jpg'
import facebook from '/home/swarnadip/Documents/Index/Login/Frontend/src/COMPONENT/Image/facebook.png'
import google from '/home/swarnadip/Documents/Index/Login/Frontend/src/COMPONENT/Image/search.png'

function App() {
  const [count, setCount] = useState(0)

  const backgroundImg = {
    backgroundImage: `url(${Background})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize:'cover'
  

  }

  return (
    // the div is for the whole scr'een
    <div className='bg-[#2e1414] w-screen h-screen flex items-center justify-center '>
      <div className='h-[95vh] w-[90vw] bg-[#ffffff4d] backdrop-blur-xl rounded-xl overflow-hidden border-[1px] border-white flex'>
        {/* the background div */}
        <div className='h-[100%] w-[60%] absolute bg-center hidden lg:block' style={backgroundImg}>
          
            <div className='h-[9vw] w-[30vw] bg-[#ffffff4d] backdrop-blur-xl border-[1px] border-white mx-auto mt-[25vh] rounded-2xl'>
              <h1 className='font-playfair font-semibold text-[2.3vw] pl-4 text-teal-50'>WELCOME!</h1>
              <p className='font-unna text-[1.2vw] pl-4 pr-4 text-cyan-800'>Log in to continue your journey with us. We're exited to have you back.</p>
            
            </div>
         
        </div>



        {/* the next part of the background image */}
        <div className='h-[100%] bg:w-[40%] w-[100%] bg-transparent lg:ml-[60%] ml-0 flex flex-col lg:items-center lg:justify-center'>
          <div className='mx-auto mt-2'>
            <h1 className='font-eagle text-[2.3vw] font-bold'>Painters' Diary</h1>
            <p className='font-cookie text-[1.5vw] font-medium mt-[-1.2vh] ml-[4vw]'>The Diary of Every Artist</p>
          </div>

             {/* the username  */}
          <div className='mx-auto mt-[5vw]'>
            <h1 className='text-[1.6vw] font-playfair font-bold'>Username</h1>
            <input type="text" 
            placeholder='Username' 
            className='mt-3 w-[20vw] h-[2.2vw] rounded-lg pl-4 bg-[#ffffff59] backdrop-blur-[20px] placeholder-black font-unna shadow-xl border-white border-[1px]'/>

            {/* email part */}
            <h1 className='mt-8 text-[1.6vw] font-playfair font-bold'>E-mail</h1>
            <input type="text" 
            placeholder='E-mail'
              className='mt-3 w-[20vw] h-[2.2vw] rounded-lg pl-4 bg-[#ffffff59] backdrop-blur-[20px] placeholder-black font-unna shadow-xl border-white border-[1px]' />
{/* password */}
            <h1 className='mt-8 text-[1.6vw] font-playfair font-bold'> Password</h1>
            
              <input type="password" 
              placeholder='Password' 
              className='mt-3 w-[20vw] h-[2.2vw] rounded-lg pl-4 bg-[#ffffff59] backdrop-blur-[20px] placeholder-black font-unna shadow-xl border-white border-[1px]'/>
          </div>

          {/* header for google and facebook */}
          <h3 className='font-unna text-[1.2vw] text-center mt-[3.8vw]'>Continue with</h3>
          {/* google or facebook part */}
        <div className='flex gap-8 mx-auto mt-2'>
          <div className='h-[2.5vw] text-white flex items-center justify-center gap-3 pl-3 pr-3 shadow-xl border-[1px] border-gray-500 rounded-xl'>
            <button className='h-[100%] w-[100%] text-[.9vw]'>Google  </button>
            <img className='h-[1.5vw] w-[1.5vw]' src={google} alt="" />
          </div>

          <div className='h-[2.5vw] text-white flex items-center justify-center gap-3 pl-3 pr-3 shadow-xl border-[1px] border-gray-500 rounded-xl'>
            <button className='h-[100%] w-[100%] text-[.9vw]'>
              Facebook
            </button>
            <img className='h-[1.5vw] w-[1.5vw]' src={facebook} alt="" />
          </div>
        </div>

{/* submit paart */}
        <div className='w-[70%] mx-auto font-unna text-cyan-900 font-semibold text-[1vw] bg-gradient-to-b from-gray-300 to-pink-800 flex items-center justify-center pt-3 pb-3 mt-[4vw] rounded-xl
        hover:bg-gradient-to-b hover:from-gray-200 hover:to-pink-700'>
          <input type="submit" placeholder='Submit' />
        </div>


        </div>


      


      </div>
    </div>
  )
}

export default App
