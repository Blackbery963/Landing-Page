
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBook, FaInfoCircle, FaHome, FaUser } from "react-icons/fa";

const Favourite = () => {
  const [favoriteImages, setFavoriteImages] = useState([]);

  useEffect(() => {
    // Fetch favorite images from local storage when the page loads
    const storedFavorites = JSON.parse(localStorage.getItem("favoriteImages")) || [];
    setFavoriteImages(storedFavorites);
  }, []);

  // Function to remove image from favorites
  const removeFromFavorites = (imageSrc) => {
    const updatedFavorites = favoriteImages.filter(img => img !== imageSrc);
    
    // Update local storage
    localStorage.setItem("favoriteImages", JSON.stringify(updatedFavorites));
    
    // Update state
    setFavoriteImages(updatedFavorites);
  };

  return (
    <div className=" h-screen w-screen overflow-x-hidden bg-slate-300">
      <header className='h-[100px] w-full bg-gradient-to-l from-[#3c25267c] via-[#5e3b4d75] to-[#d9a1bf80] backdrop-blur-md flex items-center justify-between px-4 md:px-6 shadow-lg text-white fixed top-0 z-50'>
            {/* Logo */}
             <h1 className='lg:text-[35px] md:text-[30px] sm:text-[25px] text-[20px] font-bold font-Eagle text-[#190909]'>Painters' Diary</h1>
             {/* Navigation */}
             <div className='flex items-center justify-center gap-x-2'>
                     <Link to={"/"}>
                         <button className='lg:px-4 px-2 py-1 bg-[#a6565d] hover:bg-[#c68a9a] hover:text-[#2d1f23] rounded-md font-Playfair text-white border border-gray-400 text-[18px]'>
                             <FaHome className="text-xl sm:hidden" />
                             <span className="hidden sm:inline">Home</span>
                         </button>
                     </Link>
                     <Link to={"/About"}>
                         <button className='lg:px-4 px-2 py-1 bg-[#a6565d] hover:bg-[#c68a9a] hover:text-[#2d1f23] rounded-md font-Playfair text-white border border-gray-400 text-[18px]'>
                             <FaInfoCircle className="text-xl sm:hidden" />
                             <span className="hidden sm:inline">About</span>
                         </button>
                     </Link>
                     <Link to={"/Account"}>
                         <button className='lg:px-4 px-2 py-1 bg-[#a6565d] hover:bg-[#c68a9a] hover:text-[#2d1f23] rounded-md font-Playfair text-white border border-gray-400 text-[18px]'>
                             <FaUser className="text-xl sm:hidden"/>
                             <span className="hidden sm:inline">Account</span>
                         </button>
                     </Link>
                     <Link to={"/Diary"}>
                         <button className='lg:px-4 px-2 py-1 bg-[#a6565d] hover:bg-[#c68a9a] hover:text-[#2d1f23] rounded-md font-Playfair text-white border border-gray-400 text-[18px]'>
                             <FaBook className="text-xl sm:hidden" />
                             <span className="hidden sm:inline">Diary</span>
                         </button>
                     </Link>
                 </div>
             </header>
           <div className="p-4 mt-[120px]">
      <h1 className="text-2xl font-bold mb-4 font-serif">Favourite Images</h1>
      {favoriteImages.length === 0 ? (
        <p className=" font-GreatVibes">No favorite images saved yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {favoriteImages.map((src, index) => (
            <div key={index} className="relative">
              <img src={src} alt="Favorite" className="w-full h-auto rounded-lg shadow-lg" />
              
              {/* Favourite Icon (Click to Remove) */}
              <button
                onClick={() => removeFromFavorites(src)}
                className="absolute top-2 right-2 bg-white px-2 py-1 rounded-lg shadow-md"
              >
                ❌ {/* You can replace this with an actual Favorite icon */}
              </button>

            </div>
          ))}
        </div>
      )}
    </div>
    </div>
  );
};

export default Favourite;
