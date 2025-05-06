import { useState, useRef } from 'react';
import BackImg from '/home/swarnadip/Documents/Index/Index/Index/src/Sub-Components/Abstract/Abstract-images/pexels-steve-1570779.jpg';
import { Link } from 'react-router-dom';
import { FaHome, FaUser, FaInfoCircle,  FaPalette,FaSearch } from 'react-icons/fa'; // Importing icons
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu } from 'react-icons/fi';
import { MdClose } from 'react-icons/md';

function Abstract() {
  const [activeButton, setActiveButton] = useState('landscape');
  const contentRef = useRef(null); // Create a ref for the content section
  const [isExpanded, setIsExpanded] = useState(false);
  const [query, setQuery] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  const scrollToContent = () => {
    if (contentRef.current) {
      contentRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Dropdown animation variants
  const dropdownVariants = {
    hidden: {
      opacity: 0,
      y: -10,
      transition: { duration: 0.2 }
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.2 }
    }
  };

  return (
    <div className='h-screen w-screen overflow-x-hidden'>
      {/* Header Section */}
      <div className='h-screen w-full bg-center bg-cover' style={{ backgroundImage: `url(${BackImg})` }}>
        {/* Navbar */}
        <header className='fixed top-0 h-[80px] w-full bg-white/20 backdrop-blur-sm flex items-center justify-between px-4 md:px-6 shadow-md z-50'>
          {/* Logo Section */}
          <div className='flex items-center'>
            <h1 className='lg:text-[35px] md:text-[30px] sm:text-[25px] text-[21px] font-bold font-Eagle text-black'>Painters' Diary</h1>
          </div>
          {/* Navigation Buttons */}
          <div className='flex items-center gap-x-2 sm:gap-x-4'>
            {/* Search Bar */}
            <motion.div
              className="flex items-center bg-white/40 border border-gray-300 rounded-lg shadow-md overflow-hidden"
              initial={{ width: "40px" }}
              animate={{ width: isExpanded ? "200px" : "40px" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <motion.input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className={`px-2 py-1 w-full outline-none text-gray-700 bg-transparent ${isExpanded ? "block" : "hidden"}`}
                placeholder="Search..."
              />
              <motion.button
                onClick={() => setIsExpanded(!isExpanded)}
                className="px-2 py-1 text-gray-600 hover:text-gray-800"
                whileTap={{ scale: 0.9 }}
              >
                <FaSearch />
              </motion.button>
            </motion.div>
            {/* Desktop Navigation */}
            <nav className='hidden md:flex gap-x-4 text-black font-Playfair font-bold'>
              <Link to='/'>
                <button 
                  className={`px-2 py-1 rounded-md transition-all border-gray-400 border hover:bg-gray-600/50 flex items-center justify-center gap-1 ${activeButton === 'home' ? 'bg-gray-600/50' : ''}`}
                  onClick={() => setActiveButton('home')}
                >
                  <FaHome />
                  <span className="ml-1">Home</span>
                </button>
              </Link>
              <Link to='/About'> 
                <button 
                  className={`px-2 py-1 rounded-md transition-all border-gray-400 border hover:bg-gray-600/50 flex items-center justify-center gap-1 ${activeButton === 'about' ? 'bg-gray-600/50' : ''}`}
                  onClick={() => setActiveButton('about')}
                >
                  <FaInfoCircle />
                  <span className="ml-1">About</span>
                </button>
              </Link>
              <Link to='/Account'>
                <button 
                  className={`px-2 py-1 rounded-md transition-all border-gray-400 border hover:bg-gray-600/50 flex items-center justify-center gap-1 ${activeButton === 'account' ? 'bg-gray-600/50' : ''}`}
                  onClick={() => setActiveButton('account')}
                >
                  <FaUser />
                  <span className="ml-1">Account</span>
                </button>
              </Link>
              <Link to='/Landscape'>
                <button 
                  className={`px-2 py-1 rounded-md transition-all bg-blue-500 text-white flex items-center justify-center gap-1 ${activeButton === 'landscape' ? 'bg-blue-600' : ''}`}
                  onClick={() => setActiveButton('landscape')}
                >
                  <FaPalette />
                  <span className="ml-1">Gallery</span>
                </button>
              </Link>
            </nav>
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 text-black hover:text-gray-800 transition-all duration-300"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <MdClose size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </header>
        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              className="md:hidden fixed top-[85px] right-2 w-36 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm shadow-md z-40 rounded-lg"
              variants={dropdownVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <div className="flex flex-col items-center py-4 gap-y-3 font-Playfair font-bold text-black dark:text-gray-100">
                <Link to='/' onClick={() => { setActiveButton('home'); toggleMenu(); }}>
                  <button className={`w-full py-2 px-4 flex items-center justify-center gap-2 hover:bg-gray-200 dark:hover:bg-gray-700 ${activeButton === 'home' ? 'bg-gray-200 dark:bg-gray-700' : ''}`}>
                    <FaHome />
                    Home
                  </button>
                </Link>
                <Link to='/About' onClick={() => { setActiveButton('about'); toggleMenu(); }}>
                  <button className={`w-full py-2 px-4 flex items-center justify-center gap-2 hover:bg-gray-200 dark:hover:bg-gray-700 ${activeButton === 'about' ? 'bg-gray-200 dark:bg-gray-700' : ''}`}>
                    <FaInfoCircle />
                    About
                  </button>
                </Link>
                <Link to='/Account' onClick={() => { setActiveButton('account'); toggleMenu(); }}>
                  <button className={`w-full py-2 px-4 flex items-center justify-center gap-2 hover:bg-gray-200 dark:hover:bg-gray-700 ${activeButton === 'account' ? 'bg-gray-200 dark:bg-gray-700' : ''}`}>
                    <FaUser />
                    Account
                  </button>
                </Link>
                <Link to='/Landscape' onClick={() => { setActiveButton('landscape'); toggleMenu(); }}>
                  <button className={`w-full py-2 px-4 flex items-center justify-center gap-2 bg-blue-500 text-white hover:bg-blue-600 ${activeButton === 'landscape' ? 'bg-blue-600' : ''}`}>
                    <FaPalette />
                    Gallery
                  </button>
                </Link>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
        {/* Hero Section */}
        <main className='flex flex-col items-center justify-center h-full px-4 text-center'>
          <h1 className='font-Tapestary text-[30px] md:text-[50px] text-[#1b263b] drop-shadow-lg animate-fade-in'>
          Abstract Realms of Creativity
          </h1>
          <h5 className='font-Carattere font-normal text-[20px] md:text-[28px] text-[#38040e] mt-4 drop-shadow-md animate-fade-in delay-200'>
          Dive into a gallery of vibrant colors and forms where imagination takes shape and emotions come alive
          </h5>
          <button 
            className='mt-8 px-4 md:px-6 py-2 md:py-3 bg-gradient-to-r from-green-500 to-blue-500 text-white font-bold rounded-full shadow-lg hover:scale-105 transition-transform'
            onClick={scrollToContent} // Call the scroll function
          >
            Explore Now
          </button>
        </main>
        {/* Floating Decorative Element */}
        <div className='absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce'>
          <div className='w-6 h-6 border-4 border-white rounded-full'></div>
        </div>
      </div>
      {/* Content Section */}
      <section ref={contentRef} className='w-full py-12 bg-gray-100'>
  <div className='max-w-7xl mx-auto text-center mb-12'>
    <h2 className='text-2xl md:text-3xl font-bold font-Playfair text-gray-800 mb-4'>Echoes of the Mind – The Unspoken Language of Abstract Art</h2>
    <p className='text-base md:text-lg text-gray-600'>
    With every stroke and vibrant hue, each piece beckons you to journey into the depths of emotion, where imagination knows no bounds and meaning is shaped by the viewer’s soul.
    </p>
  </div>
  {/* Image with quote Grid Section */}
  <div className='flex overflow-x-scroll overflow-y-hidden w-[60%] gap-8 mx-auto'>
    
  </div>
</section>
        {/* all images */}
       <section>

       </section>

    </div>
  );
}

export default Abstract;




