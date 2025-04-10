import React, { useState, useEffect, useRef } from 'react';
import Typewriter from "react-typewriter-effect";
import Menu from "/home/swarnadip/Documents/Index/Index/Index/src/Components/Header/Header-Images/9165593_menu_list_icon.svg";
import backgroundImage from "/home/swarnadip/Documents/Index/Index/Index/src/Components/Header/Header-Images/freepik-export-20241117064007hmqY.png";
import { Link } from 'react-router-dom';
import { FaUserEdit, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import Your_Collections from './Your_Collection/Your_Collections';
import { MdOutlineDashboardCustomize, MdOutlinePhotoCameraBack, MdSettings } from "react-icons/md";
import { FiUpload, FiEdit } from 'react-icons/fi';
import { IoIosLogOut } from 'react-icons/io';
import { CiCamera, CiEdit } from 'react-icons/ci';
import { FaXTwitter } from 'react-icons/fa6';
import { FaHome, FaHeart, FaDownload, FaUsers, FaCrown, FaCog } from "react-icons/fa";
import { FaUserPlus, FaUser, FaBookOpen, FaTimes,FaImages,FaList,FaBlog,FaQuestionCircle,FaHandsHelping,FaComment  } from "react-icons/fa";


function Account() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [image, setImage] = useState(null);
  const [showButton, setShowButton] = useState(true);
  const [profileImage, setProfileImage] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);
  const [profile, setProfile] = useState({
    username: '',
    email: '',
    bio: '',
    facebook: '',
    instagram: '',
    twitter: '',
    linkedin: ''
  });
  const dropdownRef = useRef(null);
  const timeoutRef = useRef(null);

  // Load profile data, profile image, and cover image from localStorage on mount
  useEffect(() => {
    const savedProfile = JSON.parse(localStorage.getItem('userProfile')) || {};
    const savedProfileImage = localStorage.getItem('profileImage');
    const savedCoverImage = localStorage.getItem('coverImage');
    setProfile((prev) => ({
      ...prev,
      ...savedProfile
    }));
    if (savedProfileImage) {
      setProfileImage(savedProfileImage);
    }
    if (savedCoverImage) {
      setImage(savedCoverImage);
      setShowButton(false);
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMouseLeave = () => {
    if (isLargeScreen) {
      timeoutRef.current = setTimeout(() => {
        setIsDropdownOpen(false);
      }, 300);
    }
  };

  const handleMouseEnter = () => {
    if (isLargeScreen) {
      clearTimeout(timeoutRef.current);
      setIsDropdownOpen(true);
    }
  };

  const toggleDropdown = () => {
    if (!isLargeScreen) {
      setIsDropdownOpen(!isDropdownOpen);
    }
  };

  useEffect(() => {
    return () => clearTimeout(timeoutRef.current);
  }, []);

  const routes = {
    Home: "/",
    Gallery: "/gallery",
    Category: "/category",
    "My Account": "/account",
    Community: "/community",
    Blog: "/blog",
    FAQs: "/FAQs",
    Help: "/help",
    Feedback: "/Resources/Feedback",
  };

    const routeIcons = {
      Home: <FaHome />,
      Gallery: <FaImages />,
      Category: <FaList />,
      "My Account": <FaUser />,
      Community: <FaUsers />,
      Blog: <FaBlog />,
      FAQs: <FaQuestionCircle />,
      Help: <FaHandsHelping />,
      Feedback: <FaComment />,
    };
    
  const backgroundImg = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Check file size (<5MB = 5 * 1024 * 1024 bytes)
      if (file.size >= 5 * 1024 * 1024) {
        alert('File size must be less than 5MB. Please upload a smaller image.');
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result;
        try {
          setImage(base64String);
          localStorage.setItem('coverImage', base64String);
          setShowButton(false);
        } catch (error) {
          console.error('Error saving cover image:', error);
          alert('Failed to save the image. It may be too large for local storage.');
        }
      };
      reader.onerror = () => {
        alert('Failed to process the image. Please try another file.');
      };
      reader.readAsDataURL(file);
    }
  };

  const handleProfileImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Apply the same <5MB limit to profile image
      if (file.size >= 5 * 1024 * 1024) {
        alert('File size must be less than 5MB. Please upload a smaller image.');
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result;
        try {
          setProfileImage(base64String);
          localStorage.setItem('profileImage', base64String);
        } catch (error) {
          console.error('Error saving profile image:', error);
          alert('Failed to save the image. It may be too large for local storage.');
        }
      };
      reader.onerror = () => {
        alert('Failed to process the image. Please try another file.');
      };
      reader.readAsDataURL(file);
    }
  };

  const handleLogout = () => {
    if (window.confirm('Are you sure you want to log out and clear all data?')) {
      localStorage.removeItem('userProfile');
      localStorage.removeItem('profileImage');
      localStorage.removeItem('coverImage');
      setProfile({
        username: '',
        email: '',
        bio: '',
        facebook: '',
        instagram: '',
        twitter: '',
        linkedin: ''
      });
      setImage(null);
      setProfileImage(null);
      setShowButton(true);
      setIsDropdownOpen(false);
    }
  };

  return (
    <div className="w-full min-h-screen flex flex-col pb-6 overflow-x-hidden bg-slate-100">
      {/* Header */}
      <header className="w-full h-[100px] backdrop-blur-lg bg-gradient-to-l to-[#f3d1d677] via-[#735e6275] from-[#251c2096] flex items-center justify-between px-6 z-50 fixed">
        <div className="h-fit w-fit py-1 px-1 bg-black/50 hover:bg-gray-700 rounded-md flex items-center justify-center">
          <button
            className="h-full w-full flex items-center justify-center"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <img className="lg:h-[30px] lg:w-[30px] md:h-[25px] md:w-[25px] h-[18px] w-[18px]" src={Menu} alt="Menu Icon" />
          </button>
        </div>
        <div className="flex-1 flex flex-col items-center">
          <Typewriter
            textStyle={{
              fontFamily: "Eagle Lake",
              fontSize: "clamp(1.5rem, 2.8vw, 2.8rem)",
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
              fontSize: "clamp(1rem, 1.8vw, 1.75rem)",
              color: "#D91656",
              marginTop: "-0.5rem",
            }}
            startDelay={3500}
            cursorColor="transparent"
            multiText={["The Diary of Every Artist"]}
            multiTextDelay={1000}
            typeSpeed={200}
            deleteSpeed={100}
          />
        </div>
        <div
          className="relative group"
          ref={dropdownRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <button
            className="sm:px-2 px-1 md:px-3 sm:py-2 py-1 border border-gray-400 rounded-md flex items-center gap-1 transition-all duration-200 bg-black/50 hover:bg-black/90"
            onClick={toggleDropdown}
          >
            <span className="text-sm md:text-base md:block hidden text-white font-Playfair">Settings</span>
            <MdSettings className="text-lg md:text-xl block text-white" />
          </button>
          <div
            className={`absolute top-full right-0 mt-2 w-[180px] bg-white border border-gray-300 rounded-md shadow-lg transition-all duration-200 z-50
              ${isDropdownOpen ? 'opacity-100 visible pointer-events-auto' : 'opacity-0 invisible pointer-events-none'}`}
          >
            <Link to={'/Account/Edit_Profile'}>
              <button
                className="w-full px-3 py-2 text-left hover:bg-violet-100 text-gray-800 flex items-center gap-2 text-sm"
                onClick={() => setIsDropdownOpen(false)}
              >
                <CiEdit className="text-lg" />
                Edit Profile
              </button>
            </Link>
            <Link to={'/Account/Dashboard'}>
              <button
                className="w-full px-3 py-2 text-left hover:bg-violet-100 text-gray-800 flex items-center gap-2 text-sm"
                onClick={() => setIsDropdownOpen(false)}
              >
                <MdOutlineDashboardCustomize className="text-lg" />
                Dashboard
              </button>
            </Link>
            <button
              className="w-full px-3 py-2 text-left hover:bg-violet-100 text-gray-800 flex items-center gap-2 text-sm"
              onClick={handleLogout}
            >
              <IoIosLogOut className="text-lg" />
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* Sliding Menu */}
       <div
        className={`fixed top-4 left-4 lg:w-[400px] sm:w-[375px] w-[350px] overflow-hidden h-auto bg-white shadow-lg rounded-xl transition-all duration-1000 ease-in-out ${isMenuOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"}`}
        style={{ zIndex: 9999 }}
      >
        <div className="h-[20vh] bg-[#000000de] opacity-90 flex items-center justify-between p-3">
          <div className="lg:h-[130px] lg:w-[130px] h-[100px] w-[100px] bg-white rounded-full text-[7vw] flex items-center justify-center">
            {profileImage ? (
              <img src={profileImage} alt="Profile" className="w-full h-full object-cover rounded-full" />
            ) : (
              <i className="ri-account-circle-fill"></i>
            )}
          </div>
          <div className="md:mr-12 mr-8">
            <h1 className="text-white font-news text-[20px] sm:text-[25px] lg:text-[30px]">{profile.username || 'USERNAME'}</h1>
            <p className="text-white font-news lg:text-[15px]">{profile.email || 'xyz123@email.com'}</p>
            <p className="text-white font-news text-[16px]">Follower: 122</p>
            <Link to={"/Account"}>
              <button className="text-white font-news text-[16px]">
                Visit Profile
              </button>
            </Link>
          </div>
          <div
            className="h-[22px] w-[22px] bg-black text-white flex items-center justify-center rounded-md cursor-pointer absolute right-2 top-2"
            onClick={() => setIsMenuOpen(false)}
          >
            ✕
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
              className="h-[2.8vh] w-[40%] bg-[#00000023] backdrop-blur-md text-gray-300 font-news font-semibold hover:border hover:border-gray-500 flex justify-start items-center rounded-lg px-2 pl-4 gap-2"
            >
              {/* {item} */}
              {routeIcons[item]} 
              <span>{item}</span> 
            </Link>
          ))}
        </div>
        </div>


      {/* Cover Image Section */}
      <div className="w-[95%] h-[460px] flex items-center justify-center relative mt-[100px] overflow-hidden mx-auto rounded-b-md">
        {showButton ? (
          <label
            htmlFor="file-upload"
            className="w-full rounded-b-md h-full flex items-center justify-center cursor-pointer bg-gradient-to-tl from-slate-200 to-slate-700 text-black text-lg font-semibold font-GreatVibes hover:bg-blue-400 transition overflow-hidden"
          >
            Add a Cover Image
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
                  className="absolute bottom-2 right-2 bg-white/25 text-white text-[15px] md:px-2 md:py-2 p-1 rounded-lg backdrop-blur-md shadow hover:bg-gray-700/50 transition"
                  onClick={() => {
                    setImage(null);
                    localStorage.removeItem('coverImage');
                    setShowButton(true);
                  }}
                >
                  <FiEdit className="block" />
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

      {/* Profile Image and Username/Bio */}
      <div className="relative w-full flex flex-col items-center justify-center mt-[100px]">
        <div
          className="absolute flex items-center justify-center"
          style={{
            width: "clamp(250px, 18vw, 280px)",
            height: "clamp(250px, 18vw, 280px)",
            top: "-90%",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          <div className="rounded-full border-[5px] border-white flex items-center justify-center bg-black overflow-hidden w-full h-full">
            {profileImage ? (
              <img
                src={profileImage}
                alt="Uploaded"
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="text-white font-serif">No Image</span>
            )}
          </div>
          <label
            htmlFor="upload"
            className="absolute bottom-1 right-12 bg-[#0c080a70] text-white hover:text-[#ffffff] rounded-2xl cursor-pointer hover:bg-[#74626859] px-2 py-2"
            style={{ backdropFilter: "blur(5px)", opacity: 1 }}
          >
            {profileImage ? <FaUserEdit size={22} /> : <MdOutlinePhotoCameraBack size={22} />}
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleProfileImageUpload}
            className="hidden"
            id="upload"
          />
        </div>

        <div className="flex flex-col items-center mt-[110px]">
          <p className="text-red-700 text-[35px] font-Playfair">{profile.username || 'Username'}</p>
          <p className="text-red-700 text-[25px] mt-[-5px] font-Markazi">{profile.bio || 'Bio'}</p>
        </div>
      </div>

      {/* Social Media Buttons */}
      <div className="flex gap-4 mx-auto mt-4">
        {[
          {
            platform: 'facebook',
            icon: <FaFacebook className="hover:text-blue-600" />,
            url: profile.facebook ? `https://www.facebook.com/${profile.facebook}` : null
          },
          {
            platform: 'instagram',
            icon: <FaInstagram className="hover:text-pink-900" />,
            url: profile.instagram ? `https://www.instagram.com/${profile.instagram}` : null
          },
          {
            platform: 'twitter',
            icon: <FaXTwitter className="hover:text-blue-400" />,
            url: profile.twitter ? `https://twitter.com/${profile.twitter}` : null
          },
          {
            platform: 'linkedin',
            icon: <FaLinkedin className="hover:text-blue-300" />,
            url: profile.linkedin ? `https://www.linkedin.com/${profile.linkedin}` : null
          }
        ].map((social) => (
          <a
            key={social.platform}
            href={social.url || '#'}
            target={social.url ? "_blank" : "_self"}
            rel={social.url ? "noopener noreferrer" : ""}
            className={`w-8 h-8 flex items-center justify-center rounded-md text-white bg-gray-700 hover:bg-gray-900 transition ${!social.url ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {social.icon}
          </a>
        ))}
      </div>

      {/* Follow, Following, Upload Buttons */}
      <div className="flex lg:gap-14 sm:gap-8 gap-6 mx-auto mt-4">
        <button className="px-2 py-0 border rounded-lg font-serif">
          Followers
        </button>
        <button className="px-2 py-1 border bg-transparent rounded-lg font-serif">
          Following
        </button>
        <Link to={'/Account/Upload'}>
          <button className="px-2 py-1 border bg-transparent rounded-lg flex items-center justify-center gap-1">
            <span>Upload </span>
            <FiUpload />
          </button>
        </Link>
      </div>

      <div className="mt-8">
        <Your_Collections />
      </div>
    </div>
  );
}

export default Account;