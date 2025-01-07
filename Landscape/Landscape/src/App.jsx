import { useState, useRef } from 'react';
import './App.css';
import BackImg from '/home/swarnadip/Documents/Index/Landscape/Landscape/src/Image/pexels-bri-schneiter-28802-346529.jpg';
import Painting1 from './assets/img18.jpg'; // Example image for content section
import Painting2 from './assets/img19.jpg';
import Painting3 from './assets/img20.jpg';

function App() {
  const [activeButton, setActiveButton] = useState('landscape');
  const contentRef = useRef(null); // Create a ref for the content section

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
            <h1 className='text-[24px] md:text-[30px] font-bold font-Eagle text-black'>Painters' Diary</h1>
          </div>
          {/* Navigation Buttons */}
          <div className='flex gap-x-4 md:gap-x-6 text-black font-Playfair font-bold'>
            <button 
              className={`px-3 md:px-4 py-2 rounded-md transition-all ${activeButton === 'home' ? 'bg-blue-500 text-white' : 'hover:bg-gradient-to-br hover:from-gray-100 hover:to-gray-600'}`}
              onClick={() => setActiveButton('home')}
            >
              Home
            </button>
            <button 
              className={`px-3 md:px-4 py-2 rounded-md transition-all ${activeButton === 'about' ? 'bg-blue-500 text-white' : 'hover:bg-gradient-to-br hover:from-gray-100 hover:to-gray-600'}`}
              onClick={() => setActiveButton('about')}
            >
              About
            </button>
            <button 
              className={`px-3 md:px-4 py-2 rounded-md transition-all ${activeButton === 'account' ? 'bg-blue-500 text-white' : 'hover:bg-gradient-to-br hover:from-gray-100 hover:to-gray-600'}`}
              onClick={() => setActiveButton('account')}
            >
              Account
            </button>
            <button 
              className={`px-3 md:px-4 py-2 rounded-md transition-all ${activeButton === 'landscape' ? 'bg-blue-500 text-white' : 'hover:bg-gradient-to-br hover:from-gray-100 hover:to-gray-600'}`}
              onClick={() => setActiveButton('landscape')}
            >
              Landscape Gallery
            </button>
          </div>
        </header>
        {/* Hero Section */}
        <main className='flex flex-col items-center justify-center h-full px-4 text-center'>
          <h1 className='font-Tapestry text-[30px] md:text-[50px] text-white drop-shadow-lg animate-fade-in'>In The Lap Of Nature</h1>
          <h5 className='font-Carattere text-[20px] md:text-[28px] text-white mt-4 drop-shadow-md animate-fade-in delay-200'>
            An epic expedition into the heart of the wild, where every journey unfolds nature’s untold wonders and boundless beauty
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
    <h2 className='text-2xl md:text-3xl font-bold font-Playfair text-gray-800 mb-4'>Discover the Beauty of Landscapes</h2>
    <p className='text-base md:text-lg text-gray-600'>
      Explore our curated collection of breathtaking landscape paintings that celebrate the raw beauty of nature. Each piece tells a story, capturing moments of tranquility, adventure, and wonder.
    </p>
  </div>
  {/* Image Grid Section */}
  <div className='flex overflow-x-scroll overflow-y-hidden w-[60%] gap-8 mx-auto'>
    <div className='group relative overflow-hidden rounded-lg shadow-lg flex-shrink-0'>
      <img src={Painting1} alt='Landscape Painting 1' className='sm:w-[400px] sm:h-[400px] h-[300px] w-[300px] object-cover transform group-hover:scale-110 transition-transform duration-300' />
      <div className='absolute inset-0 bg-black/50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
        <p className='text-white font-bold pl-8 pr-8'>"The painter has the universe in their mind and hands." </p>
        <p className='text-white font-bold pl-8 pr-8 text-left'>-Leonardo da Vinchi</p>
      </div>
    </div>
    <div className='group relative overflow-hidden rounded-lg shadow-lg flex-shrink-0'>
      <img src={Painting2} alt='Landscape Painting 2' className='sm:w-[400px] sm:h-[400px] h-[300px] w-[300px] object-cover transform group-hover:scale-110 transition-transform duration-300' />
      <div className='absolute inset-0 bg-black/50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
        <p className='text-white font-bold pl-8 pr-8'>" Landscape painting is the art of observation, a journey into the heart of nature." </p>
        <p className='text-white font-bold text-left'>-John Constable</p>
      </div>
    </div>
    <div className='group relative overflow-hidden rounded-lg shadow-lg flex-shrink-0'>
      <img src={Painting3} alt='Landscape Painting 3' className='sm:w-[400px] sm:h-[400px] h-[300px] w-[300px] object-cover transform group-hover:scale-110 transition-transform duration-300' />
      <div className='absolute inset-0 bg-black/50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
        <p className='text-white font-bold pl-8 pr-8'>"There is nothing in the world of art like the songs mother nature sings to us."</p>
        <p className='text-white font-bold'>– Alfred Sisley</p>
      </div>
    </div>
    {/* Additional images can be added here */}
    <div className='group relative overflow-hidden rounded-lg shadow-lg flex-shrink-0'>
      <img src={Painting1} alt='Landscape Painting 4' className='sm:w-[400px] sm:h-[400px] h-[300px] w-[300px] object-cover transform group-hover:scale-110 transition-transform duration-300' />
      <div className='absolute inset-0 bg-black/50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
      <p className='text-white font-bold pl-8 pr-8'>"To paint a landscape is to capture a world beyond the visible." </p>
      <p className='text-white font-bold'>– Eugene Boudin</p>
      </div>
    </div>
    <div className='group relative overflow-hidden rounded-lg shadow-lg flex-shrink-0'>
      <img src={Painting2} alt='Landscape Painting 5' className='sm:w-[400px] sm:h-[400px] h-[300px] w-[300px] object-cover transform group-hover:scale-110 transition-transform duration-300' />
      <div className='absolute inset-0 bg-black/50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
      <p className='text-white font-bold pl-8 pr-8'>"Landscape art shows us how light and shadow dance in harmony with life." </p>
      <p className='text-white font-bold'>– J.M.W. Turner</p>
      </div>
    </div>
    <div className='group relative overflow-hidden rounded-lg shadow-lg flex-shrink-0'>
      <img src={Painting3} alt='Landscape Painting 6' className='sm:w-[400px] sm:h-[400px] h-[300px] w-[300px] object-cover transform group-hover:scale-110 transition-transform duration-300' />
      <div className='absolute inset-0 bg-black/50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
      <p className='text-white font-bold pl-8 pr-8'>"A landscape painting is a meditation; it is where time stands still." </p>
      <p className='text-white font-bold'>– Claude Monet</p>
      </div>
    </div>
  </div>
</section>
        {/* all images */}
       <section>

       </section>

    </div>
  );
}

export default App;
