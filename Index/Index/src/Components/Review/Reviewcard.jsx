
import React, { useState } from 'react';
import frontbackground from '/home/swarnadip/Documents/Index/Index/Index/src/Components/Review/Images-of-Review/1646895.jpg';
import behindbackground from '/home/swarnadip/Documents/Index/Index/Index/src/Components/Review/Images-of-Review/1177739.jpg';
import { FaFacebookF, FaInstagram, FaTwitter, FaStar } from "react-icons/fa";

export default function ReviewCard({ Profileimg, Username, Review }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="w-full flex justify-center py-6">
      <div 
        className="relative w-[320px] md:w-[450px] h-[280px] perspective-1000"
        onClick={() => setFlipped(!flipped)}
      >
        {/* Card Inner */}
        <div className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${flipped ? 'rotate-y-180' : ''}`}>
          
          {/* Front Side */}
          <div 
            className="absolute w-full h-full bg-cover bg-center flex flex-col items-center justify-center backface-hidden rounded-xl shadow-xl"
            style={{ backgroundImage: `url(${frontbackground})` }}
          >
            {/* Profile Image */}
            <div className="w-[120px] h-[120px] rounded-full border-4 border-gray-400 overflow-hidden shadow-lg">
              <img src={Profileimg} alt="Profile" className="w-full h-full object-cover" />
            </div>

            {/* Username */}
            <h1 className="mt-3 text-xl font-Playfair text-gray-300">{Username}</h1>

            {/* Star Ratings */}
            <div className="flex mt-2">
              {[...Array(5)].map((_, index) => (
                <FaStar key={index} className="text-yellow-400 text-md mx-[2px]" />
              ))}
            </div>

            {/* Social Media Icons */}
            <div className="flex gap-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-all duration-300 border border-gray-500 p-1 rounded-md">
                <FaFacebookF size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-500 transition-all duration-300 border border-gray-500 p-1 rounded-md">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-sky-400 transition-all duration-300 border border-gray-500 p-1 rounded-md">
                <FaTwitter size={20} />
              </a>
            </div>
          </div>

          {/* Back Side */}
          <div 
            className="absolute w-full h-full bg-cover bg-center flex items-center justify-center backface-hidden rounded-xl shadow-xl rotate-y-180"
            style={{ backgroundImage: `url(${behindbackground})` }}
          >
            <div className='h-[80%] w-[80%] bg-white/10 backdrop-blur-sm border border-gray-400 rounded-md flex items-center justify-center text-center'>
              <p className='text-[20px] font-Upright text-center text-gray-300'>" {Review} "</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}