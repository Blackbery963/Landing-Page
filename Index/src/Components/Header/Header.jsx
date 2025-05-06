import { useState, useEffect, useRef, useContext, createContext } from "react";
import lightBackgroundImage from "/home/swarnadip/Documents/Index/Index/Index/src/Components/Header/Header-Images/mountains-440520.jpg";
import darkBackgroundImage from "/home/swarnadip/Documents/Index/Index/Index/src/Components/Header/Header-Images/pexels-eberhardgross-2098428.jpg";
import { FaUserPlus, FaUser, FaImages, FaList, FaBlog, FaQuestionCircle, FaHandsHelping, FaComment, FaCartPlus, FaSun, FaMoon } from "react-icons/fa";
import { FaHome, FaHeart,  FaUsers, FaCrown, FaCog } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdBook, MdGroups3, MdClose, MdHistory, MdOutlineFeedback } from "react-icons/md";
import { IoMdHelpCircleOutline, IoMdNotifications, IoMdSearch } from "react-icons/io";
import {ImBlog} from "react-icons/im"
import Typewriter from "react-typewriter-effect";
import { CiMenuFries } from "react-icons/ci";
import { motion } from "framer-motion";
import 'react-toastify';
import { toast } from "react-hot-toast";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { BiCategoryAlt } from "react-icons/bi";

export const DarkModeContext = createContext();

export const DarkModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode !== null ? savedMode === 'true' : window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      const newMode = !prev;
      toast.success(`Switched to ${newMode ? 'Dark' : 'Light'} Mode`, {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: true,
        style: { background: newMode ? '#1F2937' : '#F9FAFB', color: newMode ? '#F9FAFB' : '#1F2937' },
      });
      return newMode;
    });
  };

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

function Header() {
  const context = useContext(DarkModeContext);
  if (!context) {
    console.error("Header must be used within a DarkModeProvider");
    return (
      <div className="w-full h-[12vh] bg-gray-100 dark:bg-gray-900 flex justify-between items-center px-4 md:px-8 text-red-600 dark:text-red-400">
        <div>Error: Dark Mode Context is missing. Please contact support.</div>
        <Link to="/Signup">
          <button className="flex items-center gap-1 font-playfair font-semibold px-2 py-1 bg-white dark:bg-gray-800 rounded-lg text-gray-800 dark:text-gray-200">
            <FaUserPlus />
            <span className="hidden md:block">Sign up</span>
          </button>
        </Link>
      </div>
    );
  }
  const { darkMode, toggleDarkMode } = context;

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [profileImage, setProfileImage] = useState(null);
  const [isMounted, setIsMounted] = useState(false);
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [open, setOpen] = useState(false);

  const toogleDropdown = () => {
    setOpen(!open);
  };

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

  const [profile, setProfile] = useState({
    username: '',
    email: '',
    // bio: '',
    // facebook: '',
    // instagram: '',
    // twitter: '',
    // linkedin: ''
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
    backgroundImage: `url(${darkMode ? darkBackgroundImage : lightBackgroundImage})`,
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
    History: "/History",
    Community: "/community",
    Blog: "/blog",
    FAQs: "/FAQs",
    Help: "/Resources/Help",
    Feedback: "/Resources/Feedback",
  };

  const routeIcons = {
    Home: <FaHome />,
    Gallery: <FaImages />,
    Category: <BiCategoryAlt />,
    "My Account": <FaUser />,
    History:<MdHistory/>,
    Community: <FaUsers />,
    Blog: <ImBlog />,
    FAQs: <IoMdHelpCircleOutline />,
    Help: <FaHandsHelping />,
    Feedback: <MdOutlineFeedback />,
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuVariants = {
    open: { x: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeInOut' } },
    closed: { x: '-100%', opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } },
  };
  const buttonVariants = {
    hover: { scale: 1.1, transition: { duration: 0.3 } },
    tap: { scale: 0.95 },
  };

  const bottomSectionStyle = `flex items-center justify-center gap-1 font-playfair text-slate-900 dark:text-gray-200 md:px-4 px-2 md:py-2 py-1 bg-white/60 dark:bg-gray-800/60 backdrop-blur-lg md:rounded-2xl rounded-lg font-semibold hover:border hover:border-sky-700 dark:hover:border-sky-400 hover:text-sky-700 dark:hover:text-sky-400 hover:bg-white/80 dark:hover:bg-gray-700/80`;

  return (
    <div className="h-[100vh] w-full flex flex-col justify-between pb-4 overflow-y-auto" style={backgroundImg}>
      <div className="w-full h-[12vh] flex justify-between items-center px-4 md:px-8">
        <div
          className="w-auto h-auto md:p-2 p-1 flex items-center justify-center bg-green-900 dark:bg-green-700 rounded-md hover:bg-green-700 dark:hover:bg-green-600 transition-all cursor-pointer hover:rotate-180 duration-300"
          onClick={toggleMenu}
        >
          <CiMenuFries className="text-lg md:text-xl block text-white dark:text-gray-200" />
        </div>

        {/* Improved Title Section */}
        <div className="flex-1 text-center flex flex-col items-center lg:ml-[13%]">
          <Typewriter
            textStyle={{
              fontFamily: "Eagle Lake",
              fontSize: "clamp(1.05rem, 2.5vw, 2.5rem)",
              fontWeight: "500",
              color: darkMode ? "#f87171" : "#c83e4d", // Adjusted for dark mode
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
              color: darkMode ? "#f9a8d4" : "#D91656", // Adjusted for dark mode
              marginTop: "-0.4rem",
            }}
            startDelay={2400}
            cursorColor="transparent"
            multiText={["The Dairy of Every Artist"]}
            typeSpeed={150}
          />
        </div>

        {/* Sliding menu bar */}
        <motion.div
  className="fixed top-0 left-0 w-80 sm:w-96 h-full bg-white dark:bg-gray-900 shadow-2xl z-[9999] overflow-y-auto"
  variants={menuVariants}
  initial="closed"
  animate={isMenuOpen ? 'open' : 'closed'}
>
  {/* Profile section - updated with dark mode classes */}
  <div className="h-48 bg-slate-700 dark:bg-gray-800 p-4 flex items-center justify-between">
    <div className="h-24 w-24 sm:h-28 sm:w-28 bg-white dark:bg-gray-700 rounded-full overflow-hidden flex items-center justify-center">
      {profileImage ? (
        <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
      ) : (
        <FaUser className="text-4xl text-gray-400 dark:text-gray-300" />
      )}
    </div>
    <div className="flex-1 ml-4">
      <h1 className="text-white dark:text-gray-200 font-playfair text-lg sm:text-xl">{profile.username || 'Username'}</h1>
      <p className="text-white dark:text-gray-300 font-Playfair text-sm">{profile.email || 'xyz123@email.com'}</p>
      <p className="text-white dark:text-gray-300 font-newsreader text-sm">Followers: 122</p>
    </div>
    <motion.button
      className="absolute top-4 right-4 text-white dark:text-gray-200 text-xl font-Playfair"
      onClick={() => setIsMenuOpen(false)}
      variants={buttonVariants}
      whileHover="hover"
      whileTap="tap"
    >
      <MdClose />
    </motion.button>
  </div>
  
  {/* Menu items section - updated with dark mode classes */}
  <div className="p-4 bg-gray-100 dark:bg-gray-950 h-[calc(100%-12rem)]">
    {Object.keys(routes).map((item) => (
      <Link
        to={routes[item]}
        key={item}
        className="flex items-center gap-3 px-4 py-3 text-gray-800 dark:text-gray-200 font-newsreader text-base hover:bg-slate-200 dark:hover:bg-gray-800 rounded-md font-Playfair"
        onClick={() => setIsMenuOpen(false)}
      >
        {routeIcons[item]}
        <span>{item}</span>
      </Link>
    ))}
  </div>
</motion.div>

        <div className="flex gap-4 text-sm h-[4vh] items-center">
          <Link to="/Signup">
            <button className="flex items-center justify-center gap-1 font-playfair font-semibold md:px-4 px-2 md:py-2 py-1 bg-white/70 dark:bg-gray-800/70 backdrop-blur-lg md:rounded-2xl rounded-lg hover:border hover:border-green-600 dark:hover:border-green-400 hover:text-green-700 dark:hover:text-green-400 hover:bg-white/90 dark:hover:bg-gray-700/90 text-gray-800 dark:text-gray-200">
              <FaUserPlus className="" />
              <span className="hidden md:block">Sign up</span>
            </button>
          </Link>
          <Link to="/Account">
            <button className="flex items-center justify-center gap-1 font-playfair font-semibold md:px-4 px-2 md:py-2 py-1 bg-white/70 dark:bg-gray-800/70 backdrop-blur-lg md:rounded-2xl rounded-lg hover:border hover:border-green-600 dark:hover:border-green-400 hover:text-green-900 dark:hover:text-green-400 hover:bg-white/90 dark:hover:bg-gray-700/90 text-gray-800 dark:text-gray-200">
              <FaUser className="" />
              <span className="hidden md:block">My Profile</span>
            </button>
          </Link>
          <Link to="/Journal">
            <button className="flex items-center justify-center gap-1 font-playfair font-semibold md:px-4 px-2 md:py-2 py-1 bg-white/70 dark:bg-gray-800/70 backdrop-blur-lg md:rounded-2xl rounded-lg hover:border hover:border-green-600 dark:hover:border-green-400 hover:text-green-900 dark:hover:text-green-400 hover:bg-white/90 dark:hover:bg-gray-700/90 text-gray-800 dark:text-gray-200">
              <MdBook className="" />
              <span className="hidden md:block">My Diary</span>
            </button>
          </Link>
        </div>
      </div>

      <div className="h-auto lg:w-[40%] sm:w-[80%] w-[90%] px-4 py-6 mx-auto backdrop-blur-md border hover:blur-none border-gray-600 dark:border-gray-400 rounded-lg hover:shadow-lg hover:shadow-slate-900 dark:hover:shadow-gray-700 hover:transition duration-500 text-center block animate-fadeIn">
        <h1 className="font-quint text-red-700 dark:text-red-400 text-2xl md:text-3xl lg:text-4xl font-bold animate-slideInUp">
          IMMERSE YOURSELF IN ART
        </h1>
        <p className="font-markazi text-base md:text-lg lg:text-2xl font-semibold text-cyan-900 dark:text-cyan-300 mt-4 lg:px-12 px-4 leading-relaxed animate-slideInUp delay-150">
          <span className="md:hidden block">
            Discover a curated collection of exceptional art from talented artists worldwide. Whether you're an artist or a collector, our platform connects creators and enthusiasts for browsing, buying, and exploring art.
          </span>
          <span className="hidden md:block">
            Explore a curated collection of exceptional paintings from talented artists worldwide. Our website is designed to bring art enthusiasts and creators together, providing a seamless experience for browsing, purchasing, and learning about art. Whether you're an artist seeking exposure or a collector looking for the perfect piece, our platform offers something special for everyone.
          </span>
        </p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSearch(query);
          }}
          className="mt-6 flex items-center md:h-10 h-8 w-full md:w-[80%] mx-auto md:rounded-full rounded-lg bg-[#ffffff57] dark:bg-[#1f293757] backdrop-blur-md shadow-md overflow-hidden"
        >
          <input
            type="search"
            list="search"
            placeholder="Explore The Gallery of Dreams..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-grow h-full px-4 text-[12px] sm:text-[16px] border-none outline-none bg-transparent font-playfair text-gray-800 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400"
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
          <div className="h-[80%] w-[2px] bg-slate-800 dark:bg-gray-400 py-1"></div>
          <button type="submit" className="p-3" aria-label="Search" onClick={() => handleSearch(query)}>
            <IoMdSearch className="text-[20px] text-gray-800 dark:text-gray-200"/>
          </button>
        </form>

        {isLoading && <p className="text-gray-600 dark:text-gray-400 mt-4">Loading...</p>}
        {error && <p className="text-red-600 dark:text-red-400 mt-4">{error}</p>}
        {!isLoading && !error && filteredResults.length === 0 && query && (
          <p className="text-gray-600 dark:text-gray-400 mt-4">No results found for "{query}"</p>
        )}
        {!isLoading && !error && filteredResults.length > 0 && (
          <div className="mt-4 w-full md:w-[80%] mx-auto bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3">Search Results:</h2>
            {filteredResults.map((item) => (
              <div key={item.id} className="border-b py-2 border-gray-300 dark:border-gray-600">
                <h3 className="font-semibold text-gray-900 dark:text-gray-100">{item.title}</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">By {item.artist}</p>
                <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="w-full flex justify-between items-center px-2 md:px-8 text-sm">
        <div className="flex md:gap-8 gap-3">
          <button className={bottomSectionStyle}>
            <FaHome className="" />
            <span className="hidden md:block">Home</span>
          </button>
          <Link to="/Favourite">
            <button className={bottomSectionStyle}>
              <FaHeart className="" />
              <span className="hidden md:block">Favourite</span>
            </button>
          </Link>
          <Link to="/cart">
            <button className={bottomSectionStyle}>
              <FaCartPlus/>
              <span className="hidden md:block">Cart</span>
            </button>
          </Link>
        </div>
        <div className="flex md:gap-4 gap-3">
          <Link to="/Community">
            <button className={bottomSectionStyle}>
              <MdGroups3 className="" />
              <span className="hidden md:block">Communities</span>
            </button>
          </Link>
          <button className={bottomSectionStyle}>
            <FaCrown className="" />
            <span className="hidden md:block">Premium</span>
          </button>
          <button className={bottomSectionStyle} onClick={toogleDropdown}>
            <FaCog/>
            <span className="hidden md:block">Settings</span>
          </button>

          {open && (
            <ul className="absolute top-full right-6 mt-2 w-40 bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg py-1 z-10 px-2">
              <li
                onClick={() => {
                  toggleDarkMode();
                  setOpen(false);
                }}
                className="px-4 py-2 text-[16px] font-semibold hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer flex items-center justify-between text-gray-800 dark:text-gray-200 font-playfair rounded-md"
              >
                <span>{darkMode ? 'Light Mode' : 'Dark Mode'}</span>
                {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-700 dark:text-gray-300" />}
              </li>
              <li className="px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 dark:text-gray-200 dark:hover:text-gray-100 cursor-pointer text-[16px] font-semibold font-Playfair rounded-md text-gray-800 flex items-center justify-center gap-2">
               <span>Notification</span>
               <IoMdNotifications className=" text-xl"/>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;