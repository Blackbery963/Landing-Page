import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import Like from '/home/swarnadip/Documents/Index/Collection/Collection/src/images/like.svg'
import Liked from '/home/swarnadip/Documents/Index/Collection/Collection/src/images/liked.svg'; // Add a filled like icon
import Comment from '/home/swarnadip/Documents/Index/Collection/Collection/src/images/comment.svg';
import Similiar from '/home/swarnadip/Documents/Index/Collection/Collection/src/images/four.svg';
import Download from '/home/swarnadip/Documents/Index/Collection/Collection/src/images/download.svg';
import Info from '/home/swarnadip/Documents/Index/Collection/Collection/src/images/info.svg';
import AOS from "aos";
import "aos/dist/aos.css";


const images = [
  "/Image-of-Collection/pexels-eberhardgross-1367192.jpg",
  "/Image-of-Collection/pexels-philippedonn-1133957.jpg",
  "/Image-of-Collection/pexels-pixabay-147411.jpg",
  "/Image-of-Collection/pexels-rafael-guajardo-194140-604684.jpg",
  "/Image-of-Collection/pexels-singkham-178541-1108572.jpg",
  "/Image-of-Collection/bloosoms.jpg",
  "/Image-of-Collection/city.jpg",
  "/Image-of-Collection/digital.jpg",
  "/Image-of-Collection/dino.jpg",
  "/Image-of-Collection/dream.jpg"
];

function Grid() {
  const heights = [200, 300, 250, 400, 350, 200, 300, 400, 300, 450, 400]; // Custom heights for layout
  const [hoveredButton, setHoveredButton] = useState(null);
  const [likedImages, setLikedImages] = useState({}); // Track liked state for each image

  const toggleLike = (index) => {
    setLikedImages((prevLikedImages) => ({
      ...prevLikedImages,
      [index]: !prevLikedImages[index], // Toggle the like state for the image
    }));
  };

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, [])

  return (
    <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 bg-maroon py-10 px-4">
      {images.map((src, index) => (
        <div
          key={index}
          className="relative rounded-lg shadow-lg group overflow-hidden break-inside-avoid mb-4"
          data-aos="fade-up"
          style={{
            backgroundImage: `url(${src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: `${heights[index]}px`,
          }}
        >
          {/* Hover Overlay */}
          <div className="h-[40%] w-[100%] bg-gradient-to-b from-transparent to-black absolute bottom-[-40%] transition-all ease-linear duration-500 group-hover:bottom-0 "></div>

          {/* Container for the buttons */}
          <div className="w-[100%] flex items-center justify-between absolute bottom-3 opacity-0 transition-opacity duration-500 ease-linear group-hover:opacity-100 pl-3 pr-3">
            {/* Profile Div */}
            <Link to={'/Account'}>
            <div className="h-[2.7vw] w-[2.7vw] bg-red-500 rounded-full"
              onMouseEnter={() => setHoveredButton(`profile-${index}`)}
              onMouseLeave={() => setHoveredButton(null)}
            >
              {hoveredButton === `profile-${index}` && (
                <div className="absolute bottom-full mb-2 font-bold w-max bg-black text-white text-balance rounded px-2 py-1">
                  Profile
                </div>
              )}
            </div>
            </Link>

            {/* Other Buttons */}
            <div className="flex items-center justify-center gap-3">
              {/* Like Button */}
              <div
                className={`h-[1.5vw] w-[1.5vw] rounded-lg flex items-center justify-center cursor-pointer relative p-1 ${
                  likedImages[index] ? "bg-gray-500" : "hover:bg-gray-600"
                }`}
                onClick={() => toggleLike(index)} // Handle like toggle
                onMouseEnter={() => setHoveredButton(`like-${index}`)}
                onMouseLeave={() => setHoveredButton(null)}
              >
                <img
                  src={likedImages[index] ? Liked : Like} // Change icon based on like state
                  alt="Like"
                />
                {hoveredButton === `like-${index}` && (
                  <div className="absolute bottom-full mb-2 w-max bg-black text-white text-balance rounded px-2 py-1">
                    {likedImages[index] ? "Liked" : "Like"} {/* Dynamic tooltip */}
                  </div>
                )}
              </div>

              {/* Comment */}
              <div
                className="h-[1.5vw] w-[1.5vw] rounded-lg flex items-center justify-center cursor-pointer relative p-1 hover:bg-gray-600"
                onMouseEnter={() => setHoveredButton(`comment-${index}`)}
                onMouseLeave={() => setHoveredButton(null)}
              >
                <img src={Comment} alt="Comment" />
                {hoveredButton === `comment-${index}` && (
                  <div className="absolute bottom-full mb-2 w-max bg-black text-white text-balance rounded px-2 py-1">
                    Comment
                  </div>
                )}
              </div>

              {/* Similiar */}
              <div
                className="h-[1.5vw] w-[1.5vw] rounded-lg flex items-center justify-center cursor-pointer relative p-1 hover:bg-gray-600"
                onMouseEnter={() => setHoveredButton(`similiar-${index}`)}
                onMouseLeave={() => setHoveredButton(null)}
              >
                <img src={Similiar} alt="Similiar" />
                {hoveredButton === `similiar-${index}` && (
                  <div className="absolute bottom-full mb-2 w-max bg-black text-white text-balance rounded px-2 py-1">
                    Similiar
                  </div>
                )}
              </div>

              {/* Download */}
              <div
                className="h-[1.5vw] w-[1.5vw] rounded-lg flex items-center justify-center cursor-pointer relative p-1 hover:bg-gray-600"
                onMouseEnter={() => setHoveredButton(`download-${index}`)}
                onMouseLeave={() => setHoveredButton(null)}
                onClick={() => {
                  const ancor = document.createElement("a");
                  ancor.href = src;
                  ancor.download = src.split("/").pop();
                  ancor.click();
                  ancor.remove();
                }}
              >
                <img src={Download} alt="Download" />
                {hoveredButton === `download-${index}` && (
                  <div className="absolute bottom-full mb-2 w-max bg-black text-white text-balance rounded px-2 py-1">
                    Download
                  </div>
                )}
              </div>

              {/* Info */}
              <div
                className="h-[1.5vw] w-[1.5vw] rounded-lg flex items-center justify-center cursor-pointer relative p-1 hover:bg-gray-600"
                onMouseEnter={() => setHoveredButton(`info-${index}`)}
                onMouseLeave={() => setHoveredButton(null)}
              >
                <img src={Info} alt="Info" />
                {hoveredButton === `info-${index}` && (
                  <div className="absolute bottom-full mb-2 w-max bg-black text-white text-balance rounded px-2 py-1">
                    Info
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Grid;
