import React from 'react'
import { FaBook,FaInfoCircle,FaHome,FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function January() {
    const [selectedDay, setSelectedDay] = useState("");
    return (
        <div className=' min-h-screen max-w-screen bg-gradient-to-br from-slate-100 via-slate-300 to-slate-500 flex flex-col items-center justify-between pb-8 overflow-x-hidden'>
         
          <header className=' w-screen h-[100px] bg-white/10 backdrop-blur-sm flex items-center justify-between px-4 md:px-6 shadow-md z-50'>
           {/* Logo Section */}
          <div className='flex items-center'>
            <h1 className='lg:text-[35px] md:text-[30px] sm:text-[25px] text-[20px] font-bold font-Eagle text-black'>Painters' Diary</h1>
          </div>
          {/* Nagigation Buttons */}
          <div className='flex items-center justify-center gap-x-2'>
            <Link to={"/"}>
            <button className=' w-full sm:px-4 px-2 py-1  border border-gray-500  rounded-md font-Playfair text-[18px] font-medium'>
                <FaHome className="text-xl sm:hidden" /> {/* Icon for small screens */}
                <span className="hidden sm:inline">Home</span> {/* Text for larger screens */}
            </button>
            </Link>
            {/* About Section */}
            <Link to={"/About"}>
            <button className=' w-full sm:px-4 px-2 py-1  border border-gray-500  rounded-md font-Playfair text-[18px] font-medium'>
                <FaInfoCircle className="text-xl sm:hidden" />
               <span className="hidden sm:inline">About</span>
            </button>
            </Link>
            {/* Account section */}
           <Link to={"/Account"}>
           <button className=' w-full sm:px-4 px-2 py-1  border border-gray-500   rounded-md font-Playfair text-[18px] font-medium'>
            <FaUser className="text-xl sm:hidden" />
            <span className="hidden sm:inline">Account</span>
           </button>
           </Link>
           {/* Diary Section */}
            <Link to={"/Diary"}>
            <button className=' w-full sm:px-4 px-2 py-1 border border-gray-500 rounded-md font-Playfair text-[18px] font-medium'>
            <FaBook className="text-xl sm:hidden" />
            <span className="hidden sm:inline">Diary</span></button>
            </Link>
          </div>
          </header>


          {/* the main part */}
          <main className=' lg:w-[80%] w-[92%] bg-gradient-to-tr from-[#212529] to-[#343a40] mx-auto rounded-md border border-zinc-800 overflow-hidden mt-16 lg:p-6 p-2'>
            {/* The date time title section */}
            <div className=' w-full h-auto flex items-center justify-between lg:px-6 px-2 flex-wrap'>
                <div>
                    <h1 className=' md:text-[25px] text-[20px] font-Playfair font-semibold'>Title</h1>
                    <input
                    className='w-full h-10 bg-transparent border border-zinc-400 rounded-md px-4 py-2 outline-none font-serif'
                     type="text" />
                </div>
                <div>
                    <h1 className=' md:text-[25px] text-[20px] font-Playfair font-semibold'>Date</h1>
                    <input
                    className='w-full h-10 bg-transparent border border-zinc-400 rounded-md px-4 py-2 outline-none font-serif'
                    type="date" name="" id="" 
                    />         
                </div>
                <div>
                <div>
                    <h1 className=' md:text-[25px] text-[20px] font-Playfair font-semibold text-zinc-200'>Day</h1>
                 {/* <label htmlFor="day">Choose a day: </label> */}
                 <select className='w-full h-10 bg-transparent border border-zinc-400 rounded-md px-4 py-2 outline-none font-serif'
                  id="day" value={selectedDay}
                  onChange={(e) => setSelectedDay(e.target.value)}>
                 <option value="">Select a day</option>
                 <option value="sunday">Sunday</option>
                 <option value="monday">Monday</option>
                 <option value="tuesday">Tuesday</option>
                 <option value="wednesday">Wednesday</option>
                 <option value="thursday">Thursday</option>
                 <option value="friday">Friday</option>
                 <option value="saturday">Saturday</option>
                 </select>
                 </div>
                </div>
            </div>
            {/* The Image section */}
            <section className=' h-[300px] mt-8 flex gap-x-4 lg:mx-6 mx-2 overflow-x-scroll hide-scrollbar'>   
                <div className=' h-full w-1/4 bg-black'></div>
                <div className=' h-full w-1/4 bg-black'></div>
                <div className=' h-full w-1/4 bg-black'></div>
                <div className=' h-full w-1/4 bg-black'></div>

            </section>
            <div className="container mx-auto p-6">
 {/* Top Section */}
 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
    {/* Left - Art Stories */}
    <section className="lg:col-span-1 bg-gray-900/50 lg:p-4 p-2 border border-gray-600 rounded-md h-[500px] flex flex-col items-center justify-between">
      <h1 className="font-bold text-[25px] sm:text-[30px] lg:text-[35px] font-serif ">Art Stories</h1>
      <div className="h-[80%] bg-slate-800/80 border-t mt-2 w-[93%] border border-zinc-600 mx-auto"></div> {/* Placeholder for content */}
    </section>

    {/* Middle - Challenges */}
    {/* <section className="lg:col-span-2 bg-gray-200 p-4 border border-gray-400 rounded-md flex items-center justify-center h-[500px] sm:h-auto sm:row-span-2 lg:row-span-1 lg:h-[500px]">
    <div className="w-full h-full flex sm:flex-col lg:flex-row gap-4 items-center overflow-x-scroll">
      <div className='lg:w-[50%] sm:w-[90%] min-w-[85%] sm:h-[420px] h-[90%] bg-black'></div>
      <div className='lg:w-[50%] sm:w-[90%] min-w-[85%] sm:h-[420px] h-[90%] bg-black'></div>
    </div>
      </section> */}
   <section className="lg:col-span-2 bg-gray-200 p-4 border border-gray-400 rounded-md flex items-center justify-center h-[500px] sm:h-auto sm:row-span-2 lg:row-span-1 lg:h-[500px] ">
  {/* Wrapper div with horizontal scroll for <sm */}
  <div className="w-full h-full flex sm:flex-col lg:flex-row gap-4 items-center sm:overflow-hidden overflow-x-auto ">
    {/* Left Box */}
    <div className="  w-[90%] lg:w-1/2 sm:h-[420px] h-[90%] bg-black"></div>

    {/* Right Box */}
    <div className=" w-[90%] lg:w-1/2 sm:h-[420px] h-[90%] bg-black"></div>
  </div>
</section>


 

    {/* Right - Stories Behind The Progress */}
    <section className="lg:col-span-1 bg-gray-200 p-4 border border-gray-400 rounded-md h-[500px]">
      <h1 className="font-bold text-[25px] lg:text-[30px] font-serif">Stories of Progress..</h1>
      <div className="h-[50%] w-[93%] bg-red-300 border mt-2"></div> {/* Placeholder for image */}
      <div className="h-[35%] w-[93%] bg-slate-700 border-t mt-2"></div> {/* Placeholder for text */}
    </section>
  </div>

  {/* Bottom Section */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
    {/* Tips & Tricks */}
    <section className="bg-gray-200 p-4 border border-gray-400 rounded-md h-[350px]">
      <h1 className="font-bold text-lg">Tips & Tricks</h1>
    </section>

    {/* Before & After */}
    <section className="bg-gray-200 lg:col-span-2 p-4 border border-gray-400 rounded-md h-[350px] sm:h-auto sm:row-span-2 lg:row-span-1 lg:h-[350px]">
      <h1 className="font-bold text-lg">Before & After</h1>
      <div className="flex gap-2 mt-2">
        <div className=" h-[250px] w-1/2 bg-gray-400"></div>
        <div className=" w-1/2 bg-gray-400"></div>
      </div>
    </section>

    {/* Quotes */}
    <section className="bg-gray-200 p-4 border border-gray-400 rounded-md h-[350px]">
      <h1 className="font-bold text-lg">Quotes</h1>
    </section>
  </div>
</div>  
 
            <div className=' flex justify-center mt-6'>
            <button className='w-full sm:w-1/4 md:w-1/5 lg:w-1/6 h-10 bg-blue-500 text-white rounded-md font-Playfair text-[20px] font-medium mt-4'>Submit</button>
            </div>
          </main>
        
        </div>
    )
}

export default January
//md:grid-cols-[25%_40%_25%]
