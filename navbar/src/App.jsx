import React from 'react'
import Typewriter from 'react-typewriter-effect'
import Menu from '/home/swarnadip/Documents/Index/navbar/src/image/menu.png'

function App() {
  return (
    // the part for representing screen values
  <div className='w-screen h-screen bg-white'>
    {/*the main container */}
    <div className='h-[130px] w-[100%] bg-gradient-to-b from-[#000000e5] to-transparent pointer-events-none backdrop-blur-md sticky flex items-center justify-between pl-6 pr-6'>
      {/* the part for menu icon */}
      <div className='h-[45px] w-[45px] bg-[#6A1E55] hover:bg-[#A64D79] rounded-lg flex items-center justify-center'>
        <img className=' object-contain h-[80%] w-[80%]' src={Menu} alt="" />
      </div>

      {/* The part for logos  */}
      <div className=''>
        <div>
          <Typewriter
          textStyle={{
          fontFamily: "Eagle Lake",
          fontSize: "2.5rem",
          fontWeight: "500",
          color: "#c83e4d",
          }}
          startDelay={100}
          cursorColor="transparent"
          multiText={[
          "Painters' Diary",
         
          ]}
          multiTextDelay={1000}
          typeSpeed={200}
          deleteSpeed={1000}
          // loop={true}
          // multiTextLoop
          />
        </div>

        <div
          className='ml-[60px] mt-[-10px]'
          >
          <Typewriter
          textStyle={{
          fontFamily: "Cookie",
          fontSize: "28px",
          color: "#D91656",
          }}
          startDelay={3500}
          cursorColor="transparent"
          multiText={[
          "The Diary of Every Artist",
         
          ]}
          multiTextDelay={1000}
          typeSpeed={200}
          deleteSpeed={100}
          // loop-={true}
          // multiTextLoop
          />
        </div>
      </div>

      {/* the part for search bar and the other buttons */}
      <div>
        <button></button>
      </div>

    </div>
  </div>
       
  )
}

export default App