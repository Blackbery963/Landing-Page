// Header.jsx
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Community = () => {
  // Array of background images for your art
  const backgroundImages = [
    'https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    'https://images.unsplash.com/photo-1531913764164-f85c52e6e654?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    'https://images.unsplash.com/photo-1578926375605-eaf7559b1458?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Rotate background images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="relative h-screen overflow-hidden">
      {/* Background image gallery with fade transition */}
      <div className="absolute inset-0 z-0">
        {backgroundImages.map((image, index) => (
          <motion.div
            key={index}
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${image})`,
              opacity: index === currentImageIndex ? 1 : 0,
              transition: 'opacity 1.5s ease-in-out',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentImageIndex ? 1 : 0 }}
            transition={{ duration: 1.5 }}
          />
        ))}
        
        {/* Dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 px-6 py-4 sm:px-12 sm:py-6 flex justify-between items-center">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-2xl font-bold text-white"
        >
          <span className="text-yellow-300">ART</span>ISTIC
        </motion.div>

        {/* Desktop Navigation */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden md:flex space-x-8"
        >
          {['Signup', 'hello', 'About', 'Contact'].map((item) => (
            <a
              key={item}
              href="#"
              className="text-white hover:text-yellow-300 transition-colors duration-300 font-medium relative group"
            >
              {item}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-yellow-300 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </motion.div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden absolute top-20 right-6 z-20 bg-black bg-opacity-80 rounded-lg p-4 shadow-lg"
        >
          <div className="flex flex-col space-y-3">
            {['Gallery', 'Collections', 'About', 'Contact'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-white hover:text-yellow-300 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </motion.div>
      )}

      {/* Hero content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 sm:px-8">
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
        >
          <span className="text-yellow-300">Vision</span> Meets{' '}
          <span className="italic font-serif">Canvas</span>
        </motion.h1>

        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg sm:text-xl text-white max-w-2xl mb-10"
        >
          Discover a world where colors dance and emotions take shape. Each piece tells a unique story waiting to be shared.
        </motion.p>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <button className="px-8 py-3 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
            Explore Gallery
          </button>
          <button className="px-8 py-3 border-2 border-white hover:border-yellow-300 text-white hover:text-yellow-300 font-semibold rounded-full transition-all duration-300 transform hover:scale-105">
            Commission Art
          </button>
        </motion.div>

        {/* Scrolling indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="animate-bounce w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-2 bg-white rounded-full mt-2"></div>
          </div>
        </motion.div>
      </div>

      {/* Artistic signature in corner */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 right-6 z-10 text-white italic font-serif text-lg"
      >
        ~ Your Artist Name
      </motion.div>
    </header>
  );
};

export default Community;