import { useState } from 'react'
import './App.css'
import menu from '/home/swarnadip/Documents/Index/navbar/src/image/menu.png'
import search from '/home/swarnadip/Documents/Index/navbar/src/image/search-icon.png'

function App() {
  
  return (
    <>
    <div className='h-[12vh] w-[100vw] bg-white sm:bg-slate-950 border-[1px] border-red-900 sm:border-none sticky'>


      <div className='h-[100%] w-[100%] flex justify-between overflow-hidden'>


        {/* The menu div */}
        <div className='sm:h-[45px] sm:w-[45px] h-[35px] w-[35px] bg-green-800 ml-4 mt-7 sm:mt-8 rounded-lg hover:bg-green-700'>
          <a href="https://www.google.com">
          <img className='sm:h-[40px] sm:w-[40px] h-[30px] w-[30px] pl-1 pt-1' src={menu} alt="menu" />
          </a>
        </div>
        {/* the logo div */}
        <div className='h-[100%] sm:w-[20%] w-[40%] sm:mt-3 mt-6 ml-[10%]'>
          <h1 className='sm:text-[40px] text-[20px] sm:font-bold font-semibold  font-eagle text-orange-700 ml-[5%]'>Painters' Diary</h1>
          <p className='sm:font-medium sm:mt-[-10px] mt-[-5px] font-dancing font-normal italic sm:text-2xl text-sm sm:ml-[18%] ml-[15%] text-blue-500'>The Diary of Every Artist</p>
        </div>




        {/* the buttun main div */}

         <div className='flex gap-3 mt-9 relative sm:invisible'>

          {/* for the search icon  */}

          
           {/* for the sisn up icom  */}
           <div>
            <button className='h-[28px] w-[70px] pl-1 pr-1 rounded-lg  bg-black text-red-700'>Sign in</button>
           </div>
          </div>











        {/* for larger screen approach */}
        <div className='h-[60px] w-[25%] bg-slate-950 mt-[27px] flex justify-between sm:visible invisible'>


          {/* div for search bar */}

          {/* the div for the larger screen approach */}
          <div className='w-[25%] bg-black h-[70%] rounded-3xl mt-[9px] ml-1 border-white border-[1px]'>
            <div></div>
          </div>



          {/* for all other buttons  */}

          <div className='w-[65%] h-[60%] bg-black mt-[12px] mr-2 flex justify-center items-center gap-6 '>
            {/* for home div */}
            <div>
              <a href="https://www.facebook.com">
              <button className='text-white font-medium h-[80%] w-auto hover:bg-slate-800 rounded-md  pl-1 pr-1'>Home</button>
              </a>
            </div>
            {/* About button */}
            <div>
              <a href="https://www.amazon.in">
              <button className='text-white font-medium h-[80%] w-auto hover:bg-slate-800 rounded-md  pl-1 pr-1'>About</button>
              </a>
            </div>
            {/* Contact button */}
            <div>
              <a href="https://www.wixstudio.com">
                <button className='text-white font-medium h-[80%] w-auto hover:bg-slate-800 rounded-md  pl-1 pr-1'>Contact</button>
              </a>
            </div>
            {/* Sign-up button */}
            <div>
              <a href="https://www.flipkart.com">
                <button className='text-white font-medium h-[80%] w-auto hover:bg-slate-800 rounded-md  pl-1 pr-1'>Sign-up</button>
              </a>
            </div>








          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
