import { useState } from "react";
import Typewriter from "react-typewriter-effect";
import backgroundImage from "/home/swarnadip/Documents/Index/Index/Index/src/Components/Header/Header-Images/freepik-export-20240918185148kruo.png";
import menu from "/home/swarnadip/Documents/Index/Index/Index/src/Components/Header/Header-Images/9165593_menu_list_icon.svg";
import search from "/home/swarnadip/Documents/Index/Index/Index/src/Components/Header/Header-Images/search.svg";
import { FaUserPlus, FaUser, FaBookOpen, FaTimes } from "react-icons/fa"; // Icons for Sign up and Account
import { FaHome, FaHeart, FaDownload, FaUsers, FaCrown, FaCog } from "react-icons/fa"; // Other icons}
import { Link } from "react-router-dom";
 import menubackgroundImage from '/home/swarnadip/Documents/Index/Index/Index/src/Components/Header/Header-Images/freepik-export-20241117064007hmqY.png'
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const backgroundImg = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
  };

  const routes = {
    Home: "/",
    Gallery: "/gallery",
    Category: "/category",
    "My Account": "/account",
    Community: "/community",
    Blog: "/blog",
    FAQs: "/faqs",
    Help: "/help",
    Feedback: "/feedback",
  };


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

    const menubackgroundImg = {
      backgroundImage: `url(${menubackgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    };


  return (
    <div
      className="h-[100vh] w-full flex flex-col justify-between pb-4 overflow-y-auto"
      style={backgroundImg}
    >
      {/* Header Section */}
      <div className="w-full h-[12vh] flex justify-between items-center px-4 md:px-8">
        {/* Menu */}
        {/* <div className="lg:w-[40px] lg:h-[40px] md:h-[35px] h-[30px]  flex items-center justify-center bg-green-900 lg:rounded-lg md:rounded-md sm:rounded-sm hover:bg-green-700"
          onClick={() => setIsMenuOpen(true)}>
          <img className=" lg:h-[30px] lg:w-[30px] md:h-[25px] h-[20px] md:w-[25px] w-[20px]" src={menu} alt="Menu" />
        </div> */}
        <div
        className="w-auto h-auto max-w-fit p-1 flex items-center justify-center bg-green-900 rounded-lg hover:bg-green-700 transition-all"
         onClick={() => setIsMenuOpen(true)}
          >
         <img className="h-[20px] w-[20px] md:h-[26px] md:w-[26px] lg:h-[32px] lg:w-[32px]" src={menu} alt="Menu" />
         </div>



        {/* Logo */}
        <div className="flex-1 flex flex-col items-center relative lg:ml-[12%] sm:ml-[8%] ml-[3%]">
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

        {/* sliding menu section starting */}
           <div
                className={`fixed top-4 left-4 lg:w-[400px] sm:w-[375px] w-[350px]  overflow-hidden h-auto bg-white shadow-lg rounded-xl transition-all duration-1000 ease-in-out ${isMenuOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"}`}
                style={{ zIndex: 9999 }}
              >
                <div className="h-[20vh] bg-[#000000de] opacity-90 flex items-center justify-between p-3">
                  <div className=" h-[150px] w-[150px] bg-white rounded-full text-[7vw] flex items-center justify-center">
                    <i className="ri-account-circle-fill"></i>
                  </div>
                  <div className="md:mr-12 mr-8">
                    <h1 className="text-white font-news text-[20px] sm:text-[25px] lg:text-[30px]">USERNAME</h1>
                    <p className="text-white font-news lg:text-[15px]">xyz123@email.com</p>
                    <p className="text-white font-news text-[16px]">Follower: 122</p>
                    <Link to={"/Account"}>
                    <button className="text-white font-news text-[16px]">
                      Visit Profile
                    </button>
                    </Link>
                  </div>
        
                  {/* Close button */}
                  <div
                    className="h-[22px] w-[22px] bg-black text-white flex items-center justify-center rounded-xl cursor-pointer absolute right-2 top-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {/* <img src={Close} alt="Close Menu" /> */}
                    <FaTimes/>
                  </div>
                </div>
                <div className="w-full h-[1.5px] bg-white"></div>
                <div
                  className="h-[63vh] flex flex-col items-center justify-center md:gap-y-6 gap-y-3 bg-center bg-cover"
                  style={menubackgroundImg}
                >
                 {Object.keys(routes).map((item) => (
                 <Link
                  to={routes[item]}
                  key={item}
                  className="h-[2.8vh] bg-[#00000023] backdrop-blur-md text-gray-300 font-news font-semibold hover:border hover:border-gray-500 flex justify-center items-center rounded-lg px-2"
                  >
                  {item}
                  </Link>
                  ))}
               </div>
              </div>
             

        {/* Ending menu sliding section */}

        {/* Buttons */}
        <div className="flex gap-4 text-sm h-[4vh] items-center">
        <Link to= "/Signup">
        <button className="flex items-center justify-center font-playfair font-semibold md:px-4 px-2 md:py-2 py-1 bg-white/70 backdrop-blur-lg md:rounded-2xl rounded-lg hover:border hover:border-green-600 hover:text-green-700 hover:bg-white/90">
            <FaUserPlus className="md:hidden" />
            <span className="hidden md:block">Sign up</span>
          </button>
        </Link>
          <Link to="/Account">
          <button className="flex items-center justify-center font-playfair font-semibold md:px-4 px-2 md:py-2 py-1 bg-white/70 backdrop-blur-lg md:rounded-2xl rounded-lg hover:border hover:border-green-600 hover:text-green-900 hover:bg-white/90">
          <FaUser className="md:hidden" />
          <span className="hidden md:block">My Profile</span>
          </button>
          </Link>
          <Link to={"/Diary"}>
          <button className="flex items-center justify-center font-playfair font-semibold md:px-4 px-2 md:py-2 py-1 bg-white/70 backdrop-blur-lg md:rounded-2xl rounded-lg hover:border hover:border-green-600 hover:text-green-900 hover:bg-white/90">
          <FaBookOpen className="md:hidden" />
          <span className="hidden md:block">My Diary</span>
          </button>
          </Link>
        </div>
      </div>

      {/* Middle Section */}
     

<div
  className="h-auto lg:w-[40%] w-[80%] px-4 py-6 mx-auto backdrop-blur-md border hover:blur-none border-gray-600 rounded-lg hover:shadow-lg hover:shadow-slate-900 hover:transition-transform text-center hidden md:block animate-fadeIn">
  {/* Title */}
  <h1 className="font-quint text-red-700 text-2xl md:text-3xl lg:text-4xl font-bold animate-slideInUp">
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
      type="search"
      placeholder="Explore The Gallery of Dreams..."
      className="flex-grow h-full px-4 border-none outline-none bg-transparent font-playfair"
    />
    <div className="h-[80%] w-[2px] bg-slate-500 py-1">

    </div>
    <button className="p-3">
      <img className="h-6 w-6" src={search} alt="Search" />
    </button>
  </div>
</div>


      
      {/* Footer Section */}
      <div className="w-full flex justify-between items-center px-2 md:px-8 text-sm">
        {/* Navigation */}
        <div className="flex md:gap-8 gap-3">
          <button className="flex items-center justify-center font-playfair text-sky-900 md:px-4 px-2 md:py-2 py-1 bg-white/80 backdrop-blur-lg md:rounded-2xl rounded-lg font-semibold hover:border hover:border-sky-700 hover:text-sky-700 ">
            <FaHome className="md:hidden" />
            <span className="hidden md:block">Home</span>
          </button>
          <Link to={"/Unlockingpage"}>
          <button className="flex items-center justify-center font-playfair text-slate-900 md:px-4 px-2 md:py-2 py-1 bg-white/60 backdrop-blur-lg md:rounded-2xl rounded-lg font-semibold hover:border hover:border-sky-700 hover:text-sky-700 hover:bg-white/80">
            <FaHeart className="md:hidden" />
            <span className="hidden md:block">Favourite</span>
          </button>
          </Link>
          <button className="flex items-center justify-center font-playfair text-slate-900 md:px-4 px-2 md:py-2 py-1 bg-white/60 backdrop-blur-lg md:rounded-2xl rounded-lg font-semibold hover:border hover:border-sky-700 hover:text-sky-700 hover:bg-white/80">
            <FaDownload className="md:hidden" />
            <span className="hidden md:block">Downloads</span>
          </button>
        </div>

        {/* Actions */}
        <div className="flex md:gap-4 gap-3">
          <button className="flex items-center justify-center font-playfair text-slate-900 md:px-4 px-2 md:py-2 py-1 bg-white/60 backdrop-blur-lg md:rounded-2xl rounded-lg font-semibold hover:border hover:border-sky-700 hover:text-sky-700 hover:bg-white/80">
            <FaUsers className="md:hidden" />
            <span className="hidden md:block">Communities</span>
          </button>
          <button className="flex items-center justify-center font-playfair text-slate-900 md:px-4 px-2 md:py-2 py-1 bg-white/60 backdrop-blur-lg md:rounded-2xl rounded-lg font-semibold hover:border hover:border-sky-700 hover:text-sky-700 hover:bg-white/80">
            <FaCrown className="md:hidden" />
            <span className="hidden md:block">Premium</span>
          </button>
          <button className="flex items-center justify-center font-playfair text-slate-900 md:px-4 px-2 md:py-2 py-1 bg-white/60 backdrop-blur-lg md:rounded-2xl rounded-lg font-semibold hover:border hover:border-sky-700 hover:text-sky-700 hover:bg-white/80">
            <FaCog className="md:hidden" />
            <span className="hidden md:block">Settings</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;

