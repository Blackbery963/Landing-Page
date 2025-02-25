import { Link } from "react-router-dom";
import { FaHome, FaUser, FaInfoCircle, FaPalette } from "react-icons/fa";
import backgroundImage from '/home/swarnadip/Documents/Index/Index/Index/src/Age-Components/Professional/Professional-images/cristina-gottardi-Rh-wSkhMn6k-unsplash.jpg'
import Professionalslider from "./Professionalslider";


function Professional() {
 
  return (
    <div className="min-h-screen max-w-screen overflow-x-hidden flex flex-col">
      {/* Background Section */}
      <div className="h-screen w-full bg-center bg-cover flex items-center justify-center" style={{backgroundImage:`url(${backgroundImage})`}}>
        {/* Header */}
        <header className="h-[100px] w-full backdrop-blur-md flex items-center justify-between shadow-lg px-4 md:px-6 fixed top-0 z-50">
          <div className="flex items-center">
            <h1 className="lg:text-[35px] md:text-[30px] sm:text-[25px] text-[20px] font-bold font-Eagle text-black">
              Painters' Diary
            </h1>
          </div>
          {/* Action Buttons */}
          <div className="flex gap-x-2 sm:gap-x-4 md:gap-x-6 text-black font-Playfair font-bold">
            <Link to="/">
              <button className="px-3 md:px-4 py-2 rounded-md hover:bg-gray-200">
                <FaHome className="text-xl sm:hidden" />
                <span className="hidden sm:inline">Home</span>
              </button>
            </Link>
            <Link to="/About">
              <button className="px-3 md:px-4 py-2 rounded-md hover:bg-gray-200">
                <FaInfoCircle className="text-xl sm:hidden" />
                <span className="hidden sm:inline">About</span>
              </button>
            </Link>
            <Link to="/Account">
              <button className="px-3 md:px-4 py-2 rounded-md hover:bg-gray-200">
                <FaUser className="text-xl sm:hidden" />
                <span className="hidden sm:inline">Account</span>
              </button>
            </Link>
            <button className="px-3 md:px-4 py-2 rounded-md bg-blue-500 text-white">
              <FaPalette className="text-xl sm:hidden" />
              <span className="hidden sm:inline">Professionals Gallery</span>
            </button>
          </div>
        </header>

        {/* Swiper Slider */}
        <div className="w-[80%] md:w-[60%] lg:w-[40%] h-[400px] mt-[100px] backdrop-blur-md">
        <Professionalslider/>
        </div>
      </div>

      {/* Title and Subtitle Section */}
      <div className="max-w-7xl mx-auto text-center mb-12 mt-8">
        <h2 className="text-2xl md:text-3xl font-bold font-Playfair text-gray-800 mb-4">
        Masterstrokes Studio The Art of Professional Brilliance
        </h2>
        <p className="text-base md:text-lg text-gray-600">
        Where Creativity Meets Expertise, Celebrating the Vision, Dedication, and Timeless Journey of Every Professional Artist in Their Pursuit of Mastery and Excellence
        </p>
      </div>
    </div>
  );
}

export default Professional;

