import React from 'react'
import { useState } from 'react';
import Typewriter from "react-typewriter-effect";
import Menu from "/home/swarnadip/Documents/Index/Profile/Profile/src/Images/9165593_menu_list_icon.svg";
import Book from "/home/swarnadip/Documents/Index/Profile/Profile/src/Images/book_24dp_UNDEFINED_FILL0_wght400_GRAD0_opsz24.svg";
import backgroundImage from "/home/swarnadip/Documents/Index/Menu/Menu/src/Image/freepik-export-20241117064007hmqY.png";
import Facebook from '/home/swarnadip/Documents/Index/Profile/Profile/src/Images/facebook.svg';
import Instagram from '/home/swarnadip/Documents/Index/Profile/Profile/src/Images/instagram.svg';
import Twitter from '/home/swarnadip/Documents/Index/Profile/Profile/src/Images/twitter.svg';
import Linkedin from '/home/swarnadip/Documents/Index/Profile/Profile/src/Images/linkedin.svg';
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';


function Account() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [image, setImage] = useState(null); // Initialize as null
  const [showButton, setShowButton] = useState(true);
  const [userName, setUsername] = useState("")
  const [isInputVisible, setIsInputVisible] = useState(false)
  const [socialMedia, setSocialMedia] = useState("");

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

  const backgroundImg = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setImage(imageURL);
      setShowButton(false);
    }
  };

  const handleInputChange = (e) => {
    setUsername(e.target.value);
  };

  const redirectToSocialMediaProfile = (platform) => {
    if (userName.trim()) {
      let profileURL = "";
      switch(platform) {
        case "facebook":
          profileURL = `https://www.facebook.com/in/${userName}`;
          break;
        case "instagram":
          profileURL = `https://www.instagram.com/${userName}`;
          break;
        case "twitter":
          profileURL = `https://twitter.com/${userName}`;
          break;
        case "linkedin":
          profileURL = `https://www.linkedin.com/in/${userName}`;
          break;
        default:
          break;
      }
      window.location.href = profileURL;
    } else {
      alert("Please enter a valid username.");
    }
  };

  return (
    <div className="w-full h-screen flex flex-col overflow-x-hidden">
      {/* Header */}
      <div className="w-full h-[100px] sticky backdrop-blur-lg border-b border-black flex items-center justify-between px-6">
        {/* Menu Button */}
        <div className="h-[30px] w-[30px] md:h-[40px] md:w-[40px] lg:h-[45px] lg:w-[45px] bg-black hover:bg-gray-700 rounded-lg flex items-center justify-center">
          <button
            className="h-full w-full flex items-center justify-center"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <img className="lg:h-[30px] lg:w-[30px] md:h-[25px] md:w-[25px] h-[20px] w-[20px]" src={Menu} alt="Menu Icon" />
          </button>
        </div>

        {/* Center-aligned Title */}
        <div className="flex-1 flex flex-col items-center">
          <Typewriter
            textStyle={{
              fontFamily: "Eagle Lake",
              fontSize: "clamp(1.5rem, 2.8vw, 2.8rem)", // Responsive font size
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

        {/* Diary Button */}
        <Link to={'/Diary'}>
        <div className="h-full w-full px-2 py-1 bg-black hover:bg-gray-700 rounded-lg flex items-center justify-center">
          <button className="h-full w-full flex items-center justify-center gap-2">
            <p className=" text-white hidden md:block font-Tapestry">Diary</p>
            <img className="lg:h-[30px] lg:w-[30px] md:h-[25px] md:w-[25px] h-[20px] w-[20px]" src={Book} alt="Settings Icon" />
          </button>
        </div>
        </Link>
      </div>

      {/* Sliding Menu */}
      
       <div className={`fixed top-4 left-4 lg:w-[400px] sm:w-[375px] w-[350px]  overflow-hidden h-auto bg-white shadow-lg rounded-xl transition-all duration-1000 ease-in-out ${isMenuOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"}`}
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
                        style={backgroundImg}
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
      
      {/* Image Upload Section */}
      {/* Cover image section */}
      <div className="w-full h-[450px] mt-1 flex items-center justify-center relative">
        {showButton ? (
          <label
            htmlFor="file-upload"
            className="w-full h-full flex items-center justify-center cursor-pointer bg-gradient-to-tl from-slate-200 to-slate-700 text-black text-lg font-semibold hover:bg-blue-400 transition"
          >
            Choose File
            <input
              type="file"
              id="file-upload"
              accept="image/*"
              className="hidden"
              onChange={handleImage}
            />
          </label>
        ) : (
          <div className="h-full w-full flex items-center justify-center">
            {image ? (
              <div className="relative w-full h-full">
                <img className="h-full w-full object-cover" src={image} alt="Uploaded" />
                <button
                  className="absolute bottom-2 right-2 bg-white/25 text-white text-[15px] md:px-2 md:py-2 p-1 rounded-lg backdrop-blur-md shadow hover:bg-gray-700 transition border border-gray-500"
                  onClick={() => setShowButton(true)}
                >
                  Edit Image
                </button>
              </div>
            ) : (
              <p className="font-semibold">
                The image is not uploaded. Please try again!
              </p>
            )}
          </div>
        )}
      </div>

      {/* Profile Image and Spacing for Username */}
      <div className="relative w-full flex flex-col items-center justify-center mt-[100px]">
        {/* Profile image */}
        <div
          className="bg-black mx-auto rounded-full absolute border-[5px] border-white"
          style={{
            width: "clamp(250px, 18vw, 280px)", // Responsive width
            height: "clamp(250px, 18vw, 280px)", // Responsive height
            top: "-90%", // Adjust top spacing to ensure it's above content
          }}>
        
        </div>

        {/* Username and Description */}
        <div className="flex flex-col items-center mt-[110px]"> {/* Adjust margin-top */}
          <p className="text-red-700 text-[35px] font-Playfair">Username</p>
          <p className="text-red-700 text-[25px] mt-[-5px] font-Markazi">Description</p>
        </div>
      </div>

      {/* Social Media Buttons */}
      <div className="flex gap-4 mx-auto">
        <div>
          <button className="w-[40px] h-[40px] flex items-center justify-center rounded-lg bg-transparent border border-gray-300 hover:bg-gray-100 transition"
            onClick={() => { setIsInputVisible(true); setSocialMedia("facebook"); }}>
            <img className="h-[30px] w-[30px]" src={Facebook} alt="Facebook" />
          </button>
          {isInputVisible && socialMedia === "facebook" && (
            <div>
              <input type="text"
                placeholder="Please input your username..."
                onChange={handleInputChange}
                value={userName}
              />
              <button onClick={() => redirectToSocialMediaProfile("facebook")}>
                Go to Facebook profile page
              </button>
            </div>
          )}
        </div>
        <div>
          <button className="w-[40px] h-[40px] flex items-center justify-center rounded-lg bg-transparent border border-gray-300 hover:bg-gray-100 transition"
            onClick={() => { setIsInputVisible(true); setSocialMedia("instagram"); }}>
            <img className="h-[30px] w-[30px]" src={Instagram} alt="Instagram" />
          </button>
          {isInputVisible && socialMedia === "instagram" && (
            <div>
              <input type="text"
                placeholder="Please input your username..."
                onChange={handleInputChange}
                value={userName}
              />
              <button onClick={() => redirectToSocialMediaProfile("instagram")}>
                Go to Instagram profile page
              </button>
            </div>
          )}
        </div>
        <div>
          <button className="w-[40px] h-[40px] flex items-center justify-center rounded-lg bg-black border border-gray-300 hover:bg-gray-800 transition"
            onClick={() => { setIsInputVisible(true); setSocialMedia("twitter"); }}>
            <img className="h-[30px] w-[30px]" src={Twitter} alt="Twitter" />
          </button>
          {isInputVisible && socialMedia === "twitter" && (
            <div>
              <input type="text"
                placeholder="Please input your username..."
                onChange={handleInputChange}
                value={userName}
              />
              <button onClick={() => redirectToSocialMediaProfile("twitter")}>
                Go to Twitter profile page
              </button>
            </div>
          )}
        </div>
        <div>
          <button className="w-[40px] h-[40px] flex items-center justify-center rounded-lg bg-transparent border border-gray-300 hover:bg-gray-100 transition"
            onClick={() => { setIsInputVisible(true); setSocialMedia("linkedin"); }}>
            <img className="h-[30px] w-[30px]" src={Linkedin} alt="LinkedIn" />
          </button>
          {isInputVisible && socialMedia === "linkedin" && (
            <div>
              <input type="text"
                placeholder="Please input your username..."
                onChange={handleInputChange}
                value={userName}
              />
              <button onClick={() => redirectToSocialMediaProfile("linkedin")}>
                Go to LinkedIn profile page
              </button>
            </div>
          )}
        </div>
      </div>
       {/* Important Buttons like Follow, Following, Upload */}
       <div className="flex gap-14 mx-auto mt-4">
        <button className="px-4 py-0 border bg-gradient-to-tr to-slate-100 from-slate-500 hover:bg-gradient-to-tr hover:to-gray-100 hover:from-slate-700 border-gray-400 rounded-lg ">
          Follow
        </button>
        <button className="px-4 py-1 border bg-gradient-to-tr to-slate-100 from-slate-500 hover:bg-gradient-to-tr hover:to-gray-100 hover:from-slate-700 border-gray-400 rounded-lg">
          Following
        </button>
        <button className="px-4 py-1 border bg-gradient-to-tr to-slate-100 from-slate-500 hover:bg-gradient-to-tr hover:to-gray-100 hover:from-slate-700 border-gray-400 rounded-lg">
          Upload
        </button>
      </div>
    </div>
    )
}

export default Account;

//h-[30px] md:h-[35px] lg:h-[40px] w-[100px]