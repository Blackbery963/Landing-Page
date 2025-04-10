import React from "react";
import { FaHeart, FaComment, FaDownload, FaRegClone, FaArrowCircleDown, FaRegThumbsUp } from "react-icons/fa";
import {FiDownload , FiGrid,} from "react-icons/fi"
import {BiCommentEdit} from "react-icons/bi"

function Recentitem({ Image, Title, Description }) {
  return (
    <div className="w-full flex items-center justify-center">
      <div className="relative w-[260px] h-[400px] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300 scroll-smooth ">
        
        {/* Background Image */}
        <div
          className="w-full h-full bg-center bg-cover"
          style={{ backgroundImage: `url(${Image})` }}
        ></div>

        {/* Overlay for Title, Description, and Buttons */}
        <div className="absolute bottom-0 w-full bg-black/20 backdrop-blur-md text-white p-2 flex flex-col items-start">
          
          {/* Action Buttons */}
          <div className="flex gap-2 mb-2">
            <button className=" px-2 hover:text-red-400 transition ">
              <FaRegThumbsUp size={18} />
            </button>
            <button className="p-2 hover:text-blue-400 transition ">
              <BiCommentEdit size={20} />
            </button>
            <button className="p-2 hover:text-green-400 transition ">
              <FiGrid size={18} />
            </button>
            <button className="p-2 hover:text-yellow-400 transition">
              <FiDownload size={18} />
            </button>
          </div>

          {/* Title & Description */}
          <div className="text-start">
            <h1 className="text-lg font-normal font-Playfair">{Title}</h1>
            <p className="text-sm opacity-80 font-Newsreader">{Description}</p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Recentitem;
