import { useState } from "react";
import Typewriter from "react-typewriter-effect";
import backgroundImage from "/home/swarnadip/Documents/Index/Index/Index/src/Components/Header/Header-Images/freepik-export-20240918185148kruo.png";
import menu from "/home/swarnadip/Documents/Index/Index/Index/src/Components/Header/Header-Images/9165593_menu_list_icon.svg";
import search from "/home/swarnadip/Documents/Index/Index/Index/src/Components/Header/Header-Images/search.svg";
import { FaUserPlus, FaUser } from "react-icons/fa"; // Icons for Sign up and Account
import { FaHome, FaHeart, FaDownload, FaUsers, FaCrown, FaCog } from "react-icons/fa"; // Other icons

function Header() {
  const backgroundImg = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
  };

  return (
    <div
      className="h-[100vh] w-full flex flex-col justify-between pb-4 overflow-y-auto"
      style={backgroundImg}
    >
      {/* Header Section */}
      <div className="w-full h-[12vh] flex justify-between items-center px-4 md:px-8">
        {/* Menu */}
        <div className="w-[2.5rem] h-[2.5rem] flex items-center justify-center bg-green-900 rounded-lg hover:bg-green-700">
          <img className="h-[2rem] w-[2rem]" src={menu} alt="Menu" />
        </div>

        {/* Logo */}
        <div className="flex-1 flex flex-col items-center">
          <Typewriter
            textStyle={{
              fontFamily: "Eagle Lake",
              fontSize: "clamp(1rem, 2.8vw, 2.8rem)", // Responsive font size
              fontWeight: "500",
              color: "#c83e4d",
            }}
            startDelay={100}
            cursorColor="transparent"
            multiText={["Painters' Diary"]}
            multiTextDelay={1000}
            typeSpeed={200}
            deleteSpeed={1000}
          />
          <Typewriter
            textStyle={{
              fontFamily: "Cookie",
              fontSize: "clamp(1rem, 1.8vw, 1.75rem)", // Responsive font size
              color: "#D91656",
              marginTop: "-0.5rem", // Adjust vertical spacing
            }}
            startDelay={3500}
            cursorColor="transparent"
            multiText={["The Diary of Every Artist"]}
            multiTextDelay={1000}
            typeSpeed={200}
            deleteSpeed={100}
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-4 text-sm h-[4vh] items-center">
          <button className="flex items-center justify-center font-playfair font-semibold px-4 py-2 bg-white/70 backdrop-blur-lg rounded-2xl hover:border hover:border-green-600 hover:text-green-700 hover:bg-white/90">
            <FaUserPlus className="md:hidden" />
            <span className="hidden md:block">Sign up</span>
          </button>
          <button className="flex items-center justify-center font-playfair font-semibold px-4 py-2 bg-white/70 backdrop-blur-lg rounded-2xl hover:border hover:border-green-600 hover:text-green-900 hover:bg-white/90">
            <FaUser className="md:hidden" />
            <span className="hidden md:block">Account</span>
          </button>
        </div>
      </div>

      {/* Middle Section */}
     

<div
  className="h-auto lg:w-[40%] w-[80%] px-4 py-6 mx-auto backdrop-blur-md border hover:blur-none border-gray-600 rounded-lg hover:shadow-lg hover:shadow-slate-900 hover:transition-transform text-center hidden md:block animate-fadeIn"
>
  {/* Title */}
  <h1
    className="font-quint text-red-700 text-2xl md:text-3xl lg:text-4xl font-bold animate-slideInUp"
  >
    IMMERSE YOURSELF IN ART
  </h1>

  {/* Description */}
  <p
    className="font-markazi text-base md:text-lg lg:text-2xl font-semibold text-cyan-900 mt-4 px-12 leading-relaxed animate-slideInUp delay-150"
  >
    Explore a curated collection of exceptional paintings from talented artists
    worldwide. Our website is designed to bring art enthusiasts and creators
    together, providing a seamless experience for browsing, purchasing, and
    learning about art. Whether you're an artist seeking exposure or a
    collector looking for the perfect piece, our platform offers something
    special for everyone.
  </p>

  {/* Search Bar */}
  <div
    className="mt-6 flex items-center h-12 w-full md:w-[80%] mx-auto rounded-full bg-white/80 backdrop-blur-md shadow-md overflow-hidden animate-fadeIn delay-300"
  >
    <input
      type="text"
      placeholder="Explore The Gallery of Dreams..."
      className="flex-grow h-full px-4 border-none outline-none bg-transparent font-playfair"
    />
    <button className="p-3">
      <img className="h-6 w-6" src={search} alt="Search" />
    </button>
  </div>
</div>


      
      {/* Footer Section */}
      <div className="w-full flex justify-between items-center px-2 md:px-8 text-sm">
        {/* Navigation */}
        <div className="flex md:gap-8 gap-3">
          <button className="flex items-center justify-center font-playfair text-slate-900 px-4 py-2 bg-white/60 backdrop-blur-lg rounded-2xl font-semibold hover:border hover:border-sky-700 hover:text-sky-700 hover:bg-white/80">
            <FaHome className="md:hidden" />
            <span className="hidden md:block">Home</span>
          </button>
          <button className="flex items-center justify-center font-playfair text-slate-900 px-4 py-2 bg-white/60 backdrop-blur-lg rounded-2xl font-semibold hover:border hover:border-sky-700 hover:text-sky-700 hover:bg-white/80">
            <FaHeart className="md:hidden" />
            <span className="hidden md:block">Favourite</span>
          </button>
          <button className="flex items-center justify-center font-playfair text-slate-900 px-4 py-2 bg-white/60 backdrop-blur-lg rounded-2xl font-semibold hover:border hover:border-sky-700 hover:text-sky-700 hover:bg-white/80">
            <FaDownload className="md:hidden" />
            <span className="hidden md:block">Downloads</span>
          </button>
        </div>

        {/* Actions */}
        <div className="flex md:gap-4 gap-3">
          <button className="flex items-center justify-center font-playfair text-slate-900 px-4 py-2 bg-white/60 backdrop-blur-lg rounded-2xl font-semibold hover:border hover:border-sky-700 hover:text-sky-700 hover:bg-white/80">
            <FaUsers className="md:hidden" />
            <span className="hidden md:block">Communities</span>
          </button>
          <button className="flex items-center justify-center font-playfair text-slate-900 px-4 py-2 bg-white/60 backdrop-blur-lg rounded-2xl font-semibold hover:border hover:border-sky-700 hover:text-sky-700 hover:bg-white/80">
            <FaCrown className="md:hidden" />
            <span className="hidden md:block">Premium</span>
          </button>
          <button className="flex items-center justify-center font-playfair text-slate-900 px-4 py-2 bg-white/60 backdrop-blur-lg rounded-2xl font-semibold hover:border hover:border-sky-700 hover:text-sky-700 hover:bg-white/80">
            <FaCog className="md:hidden" />
            <span className="hidden md:block">Settings</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
