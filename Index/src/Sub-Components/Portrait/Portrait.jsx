import { useState, useRef } from 'react';
import BackImg from '/home/swarnadip/Documents/Index/Index/Index/src/Sub-Components/Portrait/Portrait-images/clem-onojeghuo-Ib1Cn2B5MlI-unsplash.jpg';
import { Link } from 'react-router-dom';
import { FaHome, FaUser, FaInfoCircle, FaPalette,FaSearch } from 'react-icons/fa'; // Importing icons
import { motion } from "framer-motion";

function App() {
  const [activeButton, setActiveButton] = useState('landscape');
  const contentRef = useRef(null); // Create a ref for the content section
  const [isExpanded, setIsExpanded] = useState(false);
  const [query, setQuery] = useState("");

  const scrollToContent = () => {
    if (contentRef.current) {
      contentRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='h-screen w-screen overflow-x-hidden'>
      {/* Header Section */}
      <div className='h-screen w-full bg-center bg-cover' style={{ backgroundImage: `url(${BackImg})` }}>
        {/* Navbar */}
        <header className='fixed top-0 h-[100px] w-full bg-white/20 backdrop-blur-sm flex items-center justify-between px-4 md:px-6 shadow-md z-50'>
          {/* Logo Section */}
          <div className='flex items-center'>
            <h1 className='lg:text-[35px] md:text-[30px] sm:text-[25px] text-[20px] font-bold font-Eagle text-black'>Painters' Diary</h1>
          </div>
          {/* Navigation Buttons */}
          <div className='flex gap-x-2 sm:gap-x-4 md:gap-x-6 text-black font-Playfair font-bold'>
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
            className={`px-4 py-2 w-full outline-none text-gray-700 bg-transparent ${
              isExpanded ? "block" : "hidden"
            }`}
            placeholder="Search..."
          />
          <motion.button
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-2 text-gray-600 hover:text-gray-800"
            whileTap={{ scale: 0.9 }}
          >
            <FaSearch />
          </motion.button>
        </motion.div>
          <Link to='/'>
            <button 
              className={`px-2 md:px-4 py-2 rounded-md transition-all border-gray-400 border hover:bg-gray-600/50`}
              
            >
              <FaHome className="text-xl sm:hidden" /> {/* Icon for small screens */}
              <span className="hidden sm:inline">Home</span> {/* Text for larger screens */}
            </button>
            </Link>

            <Link to='/About'> 
            <button 
              className={`px-2 md:px-4 py-2 rounded-md transition-all border-gray-400 border hover:bg-gray-600/50`}
              onClick={() => setActiveButton('about')}
            >
              <FaInfoCircle className="text-xl sm:hidden" />
              <span className="hidden sm:inline">About</span>
            </button>
            </Link>

           <Link to='/Account'>
           <button 
              className={`px-2 md:px-4 py-2 rounded-md transition-all border-gray-400 border hover:bg-gray-600/50`}
              onClick={() => setActiveButton('account')}
            >
              <FaUser className="text-xl sm:hidden" />
              <span className="hidden sm:inline">Account</span>
            </button>
           </Link>
            <button 
              className={`px-3 md:px-4 py-2 rounded-md transition-all bg-blue-500 text-white`}>
             <FaPalette className="text-xl sm:hidden" />
             <span className="hidden sm:inline">Portrait Gallery</span> 
            </button>
          </div>
        </header>
        {/* Hero Section */}
        <main className='flex flex-col items-center justify-center h-full px-4 text-center'>
          <h1 className='font-Tapestary text-[30px] md:text-[50px] text-[#31511E] drop-shadow-lg animate-fade-in'>
          Eternal Echoes of the Soul
          </h1>
          <h5 className='font-Carattere font-semibold text-[20px] md:text-[28px] text-[#8B0000] mt-4 drop-shadow-md animate-fade-in delay-200'>
          Through every brushstroke, a portrait unveils the depths of human emotion, immortalizing fleeting moments and the unspoken stories of the heart.
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
    <h2 className='text-2xl md:text-3xl font-bold font-Playfair text-gray-800 mb-4'>The Human Canvas A Celebration of Life's Unique Stories</h2>
    <p className='text-base md:text-lg text-gray-600'>
    Explore an exquisite collection of portrait paintings that transform the human form into a living canvas, capturing the beauty, depth, and individuality of every soul.
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

export default App;




