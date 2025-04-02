import React, { useState } from 'react';
import { MdPhoto, MdVideocam, MdSettings, MdBook } from "react-icons/md"; 


function Your_Collections({Photos}) {
  const [activeButton, setActiveButton] = useState(null);


  // Handle button click and set active state
  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
    if (buttonName === 'Settings') toggleDropdown(); // Toggle dropdown only for Settings
  };
  
  return (
    <div className='h-screen w-screen'>
      <nav className='w-full bg-slate-50 flex items-center'>
        <div className='flex lg:gap-4 gap-2 w-full px-4 py-2'>
       <button
        className={`relative px-2 md:px-4 py-1 flex items-center gap-2 font-Playfair transition-all duration-300 ${
          activeButton === 'Photos' ? 'text-violet-600' : 'text-gray-800 hover:text-violet-500'
        }`}
        onClick={() => handleButtonClick('Photos')}
      >
        <span className="text-sm md:text-base">Photos</span>
        <MdPhoto className="text-lg md:text-xl" />
        <span
          className={`absolute left-1/2 bottom-0 h-[2px] bg-violet-600 transition-all duration-300 ease-in-out transform -translate-x-1/2 ${
            activeButton === 'Photos' ? 'w-full' : 'w-0 group-hover:w-full'
          }`}
        ></span>
      </button>

      {/* Videos Button */}
      <button
        className={`relative px-2 md:px-4 py-1 flex items-center font-Playfair gap-2 transition-all duration-300 ${
          activeButton === 'Videos' ? 'text-violet-600' : 'text-gray-800 hover:text-violet-500'
        }`}
        onClick={() => handleButtonClick('Videos')}
      >
        <span className="text-sm md:text-base">Videos</span>
        <MdVideocam className="text-lg md:text-xl" />
        <span
          className={`absolute left-1/2 bottom-0 h-[2px] bg-violet-600 transition-all duration-300 ease-in-out transform -translate-x-1/2 ${
            activeButton === 'Videos' ? 'w-full' : 'w-0 group-hover:w-full'
          }`}
        ></span>
      </button>

      {/* Diary Button */}
      <button
        className={`relative px-2 md:px-4 py-1 flex items-center gap-2 font-Playfair transition-all duration-300 ${
          activeButton === 'Diary' ? 'text-violet-600' : 'text-gray-800 hover:text-violet-500'
        }`}
        onClick={() => handleButtonClick('Diary')}
      >
        <span className="text-sm md:text-base">Diary</span>
        <MdBook className="text-lg md:text-xl" />
        <span
          className={`absolute left-1/2 bottom-0 h-[2px] bg-violet-600 transition-all duration-300 ease-in-out transform -translate-x-1/2 ${
            activeButton === 'Diary' ? 'w-full' : 'w-0 group-hover:w-full'
          }`}
        ></span>
      </button>


        </div>
      </nav>
      {/* the collections  */}
  
    </div>
  );
}

export default Your_Collections;

