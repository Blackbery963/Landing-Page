import { useState } from 'react';
import './App.css';
import bg from '/home/swarnadip/Documents/Index/Container/Container/src/Images/pexels-pixabay-531880.jpg';
import { FaHome, FaInfoCircle, FaEnvelope, FaPalette } from 'react-icons/fa'; // Importing icons
import bg_1 from '/home/swarnadip/Documents/Index/Container/Container/public/Bgimage/img8.jpg'
import bg_2 from '/home/swarnadip/Documents/Index/Container/Container/public/Bgimage/img6.jpg'
import bg_3 from '/home/swarnadip/Documents/Index/Container/Container/public/Bgimage/img2.jpg'
import bg_4 from '/home/swarnadip/Documents/Index/Container/Container/public/Bgimage/img3.jpg'
import bg_5 from '/home/swarnadip/Documents/Index/Container/Container/public/Bgimage/img4.jpg'
import bg_6 from '/home/swarnadip/Documents/Index/Container/Container/public/Bgimage/img5.jpg'

function App() {




  return (
    <div className="w-screen min-h-screen flex flex-col">
      {/* Hero Section */}
      <div
        className="h-[75vh] w-full bg-center bg-cover flex flex-col"
        style={{ backgroundImage: `url(${bg})` }}
      >
        {/* Sticky Header */}
        <header className="h-[100px] w-full backdrop-blur-md shadow-md flex items-center justify-between pl-4 pr-8 sticky top-0 z-50">
          {/* Logo */}
          <div>
            <h1 className="font-Eagle font-bold lg:text-[35px] md:text-[30px] sm:text-[25px] text-[20px] text-[#001F3F]">
              Painters' Diary
            </h1>
          </div>
          {/* Action Buttons */}
          <div className="font-Playfair flex gap-8">
            <button className="hidden sm:flex bg-gradient-to-tr from-green-500 to-green-900 text-white px-2 py-1 rounded-md">
              Home
            </button>
            <FaHome className="sm:hidden text-green-700 text-2xl" title="Home" />

            <button className="hidden sm:flex bg-gradient-to-tr from-green-500 to-green-900 text-white px-2 py-1 rounded-md">
              About
            </button>
            <FaInfoCircle className="sm:hidden text-green-700 text-2xl" title="About" />

            <button className="hidden sm:flex bg-gradient-to-tr from-green-500 to-green-900 text-white px-2 py-1 rounded-md">
              Contact
            </button>
            <FaEnvelope className="sm:hidden text-green-700 text-2xl" title="Contact" />

            <button className="hidden sm:flex bg-gradient-to-tr from-green-500 to-green-900 text-white px-2 py-1 rounded-md">
              Collections
            </button>
            <FaPalette className="sm:hidden text-green-700 text-2xl" title="Collections" />
          </div>
        </header>

        {/* Title and Subtitle Section */}
        <section className="mx-auto lg:w-[50%] w-[80%] backdrop-blur-md pl-12 pr-12 mt-16 lg:py-6 py-3 border border-gray-600 shadow-lg animate-fadeIn">
          <h1 className="font-Tapestary lg:text-[40px] md:text-[30px] sm:text-[25px] text-[20px] text-[#6A1E55] text-left animate-slideInUp">
            Palette of Dreams A Showcase of Artistic Brilliance
          </h1>
          <h5 className="font-Carattere lg:text-[28px] text-[#1A1A1D] text-left animate-slideInUp">
            From timeless landscapes to mesmerizing abstract wonders, delve into
            the rich tapestry of stories, emotions, and creative inspirations
            woven into every brushstroke—a celebration of art's boundless beauty
            and its profound connection to the human spirit.
          </h5>
        </section>
      </div>

      {/* Responsive Image Container */}
      <div className="lg:h-[35vh] md:h-[30vh] h-[25vh] lg:w-[50vw] md:w-[60vw] w-[85vw] bg-black mt-[-8%] mx-auto flex items-center justify-center rounded-md">
        <p className="text-white">hello</p>
      </div>

      {/* Title and Subtitle for Quotes */}
      <div className="mx-auto w-[80%] lg:w-[40%] mt-6 text-center">
        <h1 className="text-center font-Playfair  lg:text-[40px] md:text-[30px] sm:text-[25px] text-[20px] font-semibold text-[#2f3e46]">
          Brushstrokes of Wisdom
        </h1>
        <h5 className="text-center font-Funnel lg:text-[20px] md:text-[18px] text-[16px] text-[#6a040f]">
          Explore Timeless Quotes That Capture the Essence of Painting,
          Celebrating the Beauty, Emotion, and Creativity Behind Every
          Masterpiece
        </h5>
      </div>
      {/* slider section */}
      <div className='w-[52vw] h-[350px] flex items-center gap-6 px-6 mt-4 mx-auto border border-gray-800 overflow-x-scroll '>
        {/* part 1  */}
        <div className=' h-[300px] w-[300px] bg-black flex-shrink-0 bg-center bg-cover flex items-center px-8' style={{backgroundImage: `url(${bg_1})`}}>
          <div>
            <p className='text-center  font-Playfair text-lg md:text-xl lg:text-2xl text-gray-800 leading-snug'>Painting is just another way of keeping a diary.</p>
            <p className='text-right font-Carattere text-base md:text-lg lg:text-xl text-gray-600'>—Pablo Picasso</p>
          </div>
        </div>
        {/* part 2 */}
        <div className=' h-[300px] w-[300px] bg-black flex-shrink-0 bg-center bg-cover flex items-center px-6' style={{backgroundImage: `url(${bg_2})`}}>
          <div className=' backdrop-blur-md px-4 py-1 border border-gray-400'>
            <p className='text-left font-Lora text-lg md:text-base lg:text-lg text-gray-800 leading-snug'>If I could say it in words, there would be no reason to paint.</p>
            <p className='text-right font-Poppins text-base md:text-lg text-gray-300'>—Edward Hopper</p>
          </div>
        </div>
        {/* part 3 */}
        <div className=' h-[300px] w-[300px] bg-black flex-shrink-0 bg-center bg-cover flex items-center px-6 ' style={{backgroundImage: `url(${bg_3})`}}>
        <div className='bg-white/60 px-3 rounded-md shadow-md backdrop-blur-sm'>
        <p className="font-Quintessential lg:text-lg md:text-base sm:text-sm text-[#a56a6a] leading-relaxed text-left">
        The only time I feel alive is when I’m painting.
      </p>
      <p className="font-Poppins lg:text-sm md:text-xs sm:text-[10px] text-[#4B5563] text-right mt-2">
        — Vincent van Gogh
      </p>
        </div>
        </div>
        {/* part 4 */}
        <div className=' h-[300px] w-[300px] bg-black flex-shrink-0 bg-center bg-cover flex items-center px-6' style={{backgroundImage: `url(${bg_4})`}}>
          <div>
          <p className="font-Protest lg:text-xl md:text-base sm:text-sm text-[#2C3E50] leading-relaxed text-left font-bold">
        Painting is self-discovery. Every good artist paints what he is.
      </p>
      <p className="font-Montserrat lg:text-sm md:text-xs sm:text-[10px] text-[#074044] text-right mt-2 font-semibold">
        — Jackson Pollock
      </p>
          </div>
        </div>
        {/* part 5 */}
        <div className=' h-[300px] w-[300px] bg-black flex-shrink-0 bg-center bg-cover flex items-center px-6' style={{backgroundImage: `url(${bg_5})`}}>
          <div>
          <p className="font-Lora lg:text-lg md:text-base sm:text-sm  text-white leading-relaxed text-left">
        <span className='bg-black px-2'>If I could say it in words, there would be no reason to paint.</span>
      </p>
      <p className="font-Quicksand lg:text-sm md:text-xs sm:text-[10px] text-[#ffffff8a]  text-right mt-2 font-semibold">
        <span className='bg-black px-2 py-1'>— Edward Hopper</span>
      </p>
          </div>
        </div>
        {/* part 6 */}
        <div className=' h-[300px] w-[300px] bg-black flex-shrink-0 bg-center bg-cover flex items-center px-6' style={{backgroundImage: `url(${bg_6})`}}>
          <div>
          <p className="font-Tapestary lg:text-lg md:text-base sm:text-sm text-[#041d18] leading-relaxed text-left">
        I dream of painting, and then I paint my dream.
      </p>
      <p className="font-Carattere font-bold lg:text-[18px] md:text-[16px] sm:text-[14px] text-[#444546] text-right mt-2">
        — Vincent van Gogh
      </p>
          </div>
        </div>
      </div>

      {/* main image container */}
      <div className=''>
        {/* header  */}
        <div className=' flex items-center justify-around mt-8'>
          <div className='h-[1px] w-[30vw] bg-black'></div>
          <h1 className=' font-Playfair lg:text-[40px] md:text-[35px] sm:text-[30px] text-[25px] text-center'>Explore the World of Paintings</h1>
          <div className='h-[1px] w-[30vw] bg-black'></div>

        </div>
        {/* Images */}
        <div className=' w-screen grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-6 px-[10%]'>
          
        </div>
      </div>
    </div>
  );
}

export default App;

