
import { useState, useEffect } from "react";
import backgroundImage from "/home/swarnadip/Documents/Index/Index/Index/src/Components/Header/Header-Images/freepik-export-20240918185148kruo.png";
import menu from "/home/swarnadip/Documents/Index/Index/Index/src/Components/Header/Header-Images/9165593_menu_list_icon.svg";
import { FaUserPlus, FaUser, FaBookOpen, FaTimes,FaImages,FaList,FaBlog,FaQuestionCircle,FaHandsHelping,FaComment  } from "react-icons/fa";
import { FaHome, FaHeart, FaDownload, FaUsers, FaCrown, FaCog } from "react-icons/fa";
import { Link } from "react-router-dom";
import menubackgroundImage from '/home/swarnadip/Documents/Index/Index/Index/src/Components/Header/Header-Images/freepik-export-20241117064007hmqY.png';
import { MdBook, MdGroups3 } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";
import Typewriter from "react-typewriter-effect";


function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [profileImage, setProfileImage] = useState(null);
  const [isMounted, setIsMounted] = useState(false);
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    fetch("/Dataset.json")
      .then((res) => res.json())
      .then((jsonData) => {
        setData(jsonData);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error loading data:", error);
        setError("Failed to load data. Please try again later.");
        setIsLoading(false);
      });
  }, []);

  const handleSearch = (searchQuery) => {
    if (!searchQuery.trim()) {
      setFilteredResults([]);
      return;
    }

    const results = data.filter(
      (item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.artist.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setFilteredResults(results);
  };

  const FallingLetters = ({ text, delayStart = 0 }) => {
    return (
      <span>
        {text.split("").map((char, index) => (
          <span
            key={index}
            className={isMounted ? "letter-fall" : ""}
            style={{ animationDelay: `${delayStart + index * 0.05}s` }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </span>
    );
  };

  const [profile, setProfile] = useState({
    username: '',
    email: '',
    bio: '',
    facebook: '',
    instagram: '',
    twitter: '',
    linkedin: ''
  });

  useEffect(() => {
    const savedProfile = JSON.parse(localStorage.getItem('userProfile')) || {};
    const savedProfileImage = localStorage.getItem('profileImage');
    setProfile((prev) => ({
      ...prev,
      ...savedProfile
    }));
    if (savedProfileImage) {
      setProfileImage(savedProfileImage);
    }
  }, []);

  useEffect(() => {
    setIsMounted(true);
  }, []);

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
  

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menubackgroundImg = {
    backgroundImage: `url(${menubackgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  const bottomSectionStyle = "flex items-center justify-center font-playfair text-slate-900 md:px-4 px-2 md:py-2 py-1 bg-white/60 backdrop-blur-lg md:rounded-2xl rounded-lg font-semibold hover:border hover:border-sky-700 hover:text-sky-700 hover:bg-white/80"
  return (
    <div className="h-[100vh] w-full flex flex-col justify-between pb-4 overflow-y-auto" style={backgroundImg}>
      <div className="w-full h-[12vh] flex justify-between items-center px-4 md:px-8">
        <div
          className="w-auto h-auto p-1 flex items-center justify-center bg-green-900 rounded-md hover:bg-green-700 transition-all"
          onClick={toggleMenu}
        >
          <img className="h-[18px] w-[18px] md:h-[26px] md:w-[26px] lg:h-[32px] lg:w-[32px]" src={menu} alt="Menu" />
        </div>

{/* Improved Title Section */}
<div className="flex-1 text-center flex flex-col items-center lg:ml-[12%]">
    <Typewriter
      textStyle={{
        fontFamily: "Eagle Lake",
        fontSize: "clamp(1.05rem, 2.5vw, 2.5rem)",
        fontWeight: "500",
        color: "#c83e4d",
      }}
      startDelay={100}
      cursorColor="transparent"
      multiText={["Painters' Diary"]}
      typeSpeed={150}
    />
    <Typewriter
      textStyle={{
        fontFamily: "Cookie",
        fontSize: "clamp(0.9rem, 1.5vw, 1.5rem)",
        color: "#D91656",
        marginTop: "-0.4rem",
      }}
      startDelay={2400}
      cursorColor="transparent"
      multiText={["The Diary of Every Artist"]}
      typeSpeed={150}
    />
  </div>
  
<div
  className={`fixed top-2 left-2 w-[80vw] sm:w-[350px] md:w-[375px] lg:w-[400px] overflow-hidden h-auto bg-white shadow-lg rounded-xl transition-all duration-700 ease-in-out ${isMenuOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"}`}
  style={{ zIndex: 9999 }}
>
  <div className="h-[18vh] sm:h-[20vh] bg-[#000000de] opacity-90 flex items-center justify-between p-2 sm:p-3">
    <div className="h-[100px] w-[100px] md:h-[120px] md:w-[120px] lg:h-[130px] lg:w-[130px] bg-white rounded-full text-[7vw] flex items-center justify-center ml-4 sm:ml-0">
      {profileImage ? (
        <img src={profileImage} alt="Profile" className="w-full h-full object-cover rounded-full" />
      ) : (
        <i className="ri-account-circle-fill text-gray-600"></i>
      )}
    </div>
    <div className=" mr-4 sm:mr-8 md:mr-12">
      <h1 className="text-white font-news text-base sm:text-[20px] md:text-[25px] lg:text-[30px] truncate">
        {profile.username || "USERNAME"}
      </h1>
      <p className="text-white font-news text-xs sm:text-sm md:text-[15px] truncate my-2">
        {profile.email || "xyz123@email.com"}
      </p>
      <p className="text-white font-news text-xs sm:text-sm">Follower: 122</p>
      <Link to="/Account">
        <button className="text-white font-news text-xs sm:text-sm md:text-[16px] hover:underline">
          Visit Profile
        </button>
      </Link>
    </div>
    <div
      className="h-5 w-5 sm:h-6 sm:w-6 bg-black text-white flex items-center justify-center rounded-lg cursor-pointer absolute right-2 top-2"
      onClick={toggleMenu}
      aria-label="Close Menu"
    >
      ✕
    </div>
  </div>
  <div className="w-full h-[1px] bg-white"></div>
  <div
    className="h-[50vh] sm:h-[63vh] flex flex-col items-center justify-center gap-y-2 sm:gap-y-3 md:gap-y-6 bg-center bg-cover overflow-y-auto"
    style={menubackgroundImg}
  >
    {Object.keys(routes).map((item) => (
      <Link
        to={routes[item]}
        key={item}
        className="h-8 sm:h-[2.8vh] w-[40%] bg-[#00000023] backdrop-blur-md text-gray-300 font-news pl-6 font-semibold hover:border hover:border-gray-500 flex items-center justify-start rounded-lg px-3 text-sm sm:text-base gap-2"
      >
        {routeIcons[item]} {/* Render the corresponding icon */}
        <span>{item}</span>
      </Link>
    ))}
  </div>
</div>;

        <div className="flex gap-4 text-sm h-[4vh] items-center">
          <Link to="/Signup">
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
          <Link to={"/Journal"}>
            <button className="flex items-center justify-center font-playfair font-semibold md:px-4 px-2 md:py-2 py-1 bg-white/70 backdrop-blur-lg md:rounded-2xl rounded-lg hover:border hover:border-green-600 hover:text-green-900 hover:bg-white/90">
              <MdBook className="md:hidden" />
              <span className="hidden md:block">My Diary</span>
            </button>
          </Link>
        </div>
      </div>
     
      <div className="h-auto lg:w-[40%] sm:w-[80%] w-[90%] px-4 py-6 mx-auto backdrop-blur-md border hover:blur-none border-gray-600 rounded-lg hover:shadow-lg hover:shadow-slate-900 hover:transition-transform text-center block animate-fadeIn">
        <h1 className="font-quint text-red-700 text-2xl md:text-3xl lg:text-4xl font-bold animate-slideInUp">
          IMMERSE YOURSELF IN ART
        </h1>
        <p className="font-markazi text-base md:text-lg lg:text-2xl font-semibold text-cyan-900 mt-4 lg:px-12 px-4 leading-relaxed animate-slideInUp delay-150">
       <span className="md:hidden block">
       Discover a curated collection of exceptional art from talented artists worldwide. Whether you're an artist or a collector, our platform connects creators and enthusiasts for browsing, buying, and exploring art.
       </span>
       <span className="hidden md:block">
          Explore a curated collection of exceptional paintings from talented artists
          worldwide. Our website is designed to bring art enthusiasts and creators
          together, providing a seamless experience for browsing, purchasing, and
          learning about art. Whether you're an artist seeking exposure or a
          collector looking for the perfect piece, our platform offers something
          special for everyone.   make a shorter version
       </span>
        </p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSearch(query);
          }}
          className="mt-6 flex items-center md:h-10 h-8 w-full md:w-[80%] mx-auto md:rounded-full rounded-lg bg-[#ffffff57] backdrop-blur-md shadow-md overflow-hidden"
        >
          <input
            type="search"
            list="search"
            placeholder="Explore The Gallery of Dreams..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-grow h-full px-4 text-[12px] sm:text-[16px] border-none outline-none bg-transparent font-playfair"
          />
          <datalist id="search">
            <option value="helllo"></option>
            <option value="he"></option>
            <option value="hell"></option>
            <option value="hello"></option>
            <option value="lllo"></option>
            <option value="o"></option>
            <option value="helllo"></option>

          </datalist>
          <div className="h-[80%] w-[2px] bg-slate-800 py-1"></div>
          <button type="submit" className="p-3" aria-label="Search" onClick={() => handleSearch(query)}>
            <IoMdSearch className="text-[20px]"/>
          </button>
        </form>

        {isLoading && <p className="text-gray-600 mt-4">Loading...</p>}
        {error && <p className="text-red-600 mt-4">{error}</p>}
        {!isLoading && !error && filteredResults.length === 0 && query && (
          <p className="text-gray-600 mt-4">No results found for "{query}"</p>
        )}
        {!isLoading && !error && filteredResults.length > 0 && (
          <div className="mt-4 w-full md:w-[80%] mx-auto bg-white p-4 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold text-gray-800 mb-3">Search Results:</h2>
            {filteredResults.map((item) => (
              <div key={item.id} className="border-b py-2">
                <h3 className="font-semibold text-gray-900">{item.title}</h3>
                <p className="text-sm text-gray-700">By {item.artist}</p>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="w-full flex justify-between items-center px-2 md:px-8 text-sm">
        <div className="flex md:gap-8 gap-3">
          <button className={bottomSectionStyle}>
            <FaHome className="md:hidden" />
            <span className="hidden md:block">Home</span>
          </button>
          <Link to={"/Favourite"}>
            <button className={bottomSectionStyle}>
              <FaHeart className="md:hidden" />
              <span className="hidden md:block">Favourite</span>
            </button>
          </Link>
          <a href="http://www.facebook.com/nasa" target="_blank" rel="noopener noreferrer">
            <button className={bottomSectionStyle}>
              <FaDownload className="md:hidden" />
              <span className="hidden md:block">Downloads</span>
            </button>
          </a>
        </div>
        <div className="flex md:gap-4 gap-3">
          <Link to={"/Community"}>
            <button className={bottomSectionStyle}>
              <MdGroups3 className="md:hidden" />
              <span className="hidden md:block">Communities</span>
            </button>
          </Link>
          <button className={bottomSectionStyle}>
            <FaCrown className="md:hidden" />
            <span className="hidden md:block">Premium</span>
          </button>
          <button className={bottomSectionStyle}>
            <FaCog className="md:hidden" />
            <span className="hidden md:block">Settings</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;