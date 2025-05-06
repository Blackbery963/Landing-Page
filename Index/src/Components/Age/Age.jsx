import React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import background from '/home/swarnadip/Documents/Index/Index/Index/src/Components/Age/Images-of-Age/painting-4159435.jpg';
import Beginner from '/home/swarnadip/Documents/Index/Index/Index/src/Components/Age/Images-of-Age/a beginner kid artist.jpg';
import Mid from '/home/swarnadip/Documents/Index/Index/Index/src/Components/Age/Images-of-Age/a artist at about 16 years old boy with canvas.jpg';
import Student from '/home/swarnadip/Documents/Index/Index/Index/src/Components/Age/Images-of-Age/a boy student artist.jpg';
import Amatuer from '/home/swarnadip/Documents/Index/Index/Index/src/Components/Age/Images-of-Age/an amateur lady artist.jpg';
import Professional from '/home/swarnadip/Documents/Index/Index/Index/src/Components/Age/Images-of-Age/a professional artist man.jpg';
import AOS from "aos";
import "aos/dist/aos.css";



function Age() {
   useEffect(() => {
      AOS.init({ duration: 800 });
    }, [])
  
  return (
    <div
      className="min-h-[85vh] w-[95%] mx-auto rounded-md  justify-center flex items-center"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="flex md:flex-nowrap flex-wrap items-center justify-evenly px-4 py-8 gap-6">
        {/* Left Column */}
        <div className="flex flex-col w-full lg:w-1/4 md:w-3/4 gap-6">
          {/* Beginner Part */}
          <div data-aos="fade-up"  className="flex flex-col items-center border border-gray-300 rounded-md p-4 backdrop-blur-sm">
            <h1 className="text-2xl lg:text-3xl font-playfair text-center font-bold text-[#921A40]">Beginners</h1>
            <p className="text-sm lg:text-base font-Newsreader mt-2 text-center text-[#C4DAD2]">
              Just starting out, exploring styles and building their portfolios.
            </p>

            <Link className='w-full flex justify-center' to={'/Beginner'}>
            <button className="mt-4 w-[60%] bg-green-950 text-sm lg:text-base text-gray-200 py-2 rounded-lg hover:bg-green-900 border border-gray-400">
              Explore
            </button>
            </Link>

            <div className="mt-4 h-32 w-32 mx-auto rounded-md overflow-hidden">
              <img className="h-full w-full object-cover" src={Beginner} alt="Beginner" />
            </div>
          </div>

          {/* Mid-Carrier Part */}
          <div data-aos="fade-up"  className="flex flex-col border items-center border-gray-300 rounded-md p-4 backdrop-blur-sm">
            <h1 className="text-2xl lg:text-3xl font-playfair font-bold text-[#921A40]">Mid Carrier</h1>
            <p className="text-sm lg:text-base font-Newsreader mt-2 text-[#C4DAD2]">
              Established with regular exhibitions and growing recognition.
            </p>
           <Link className='w-full flex justify-center' to={'/Mid_Carrier'}>
           <button className="mt-4 w-[60%] bg-green-950 text-sm lg:text-base text-gray-200 py-2 rounded-lg hover:bg-green-900 border border-gray-400">
              Explore
            </button>
           </Link>
            <div className="mt-4 h-32 w-32 mx-auto rounded-md overflow-hidden">
              <img className="h-full w-full object-cover" src={Mid} alt="Mid Carrier" />
            </div>
          </div>
        </div>

        {/* Center Column (Professional Part) */}
        <div data-aos="fade-up"  className="w-full lg:w-2/6 md:w-3/4 flex flex-col items-center border border-gray-300 rounded-md p-6 backdrop-blur-sm">
          <h1 className="text-2xl lg:text-3xl font-playfair text-center font-bold text-[#921A40]">Professional</h1>
          <p className="text-sm lg:text-base font-Newsreader mt-4 text-center text-[#C4DAD2]">
            Experienced creators who make a living from their art, often with formal training,
            regular exhibitions, and a well-established reputation in the art community. They
            are dedicated to honing their craft and contributing to the art world.
          </p>
          <Link className='w-full flex justify-center' to={'/Professional'}>
          <button className="mt-6 w-[60%] bg-green-950 text-sm lg:text-base text-gray-200 py-2  rounded-lg hover:bg-green-900 border border-gray-400">
            Explore
          </button>
          </Link>
          <div className="mt-8 h-64 w-64 rounded-md overflow-hidden">
            <img className="h-full w-full object-cover" src={Professional} alt="Professional" />
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col w-full lg:w-1/4 md:w-3/4 gap-6">
          {/* Student Part */}
          <div data-aos="fade-up"  className="flex flex-col items-center border border-gray-300 rounded-md p-4 backdrop-blur-sm">
            <h1 className="text-2xl lg:text-3xl font-playfair font-bold text-[#921A40]">Student</h1>
            <p className="text-sm lg:text-base font-Newsreader mt-2 text-[#C4DAD2]">
              Learning and developing skills, often within formal education programs.
            </p>
            <Link className='w-full flex justify-center' to={'/Student'}>
            <button className="mt-4 w-[60%] bg-green-950 text-sm lg:text-base text-gray-200 py-2 rounded-lg hover:bg-green-900 border border-gray-400">
              Explore
            </button>
            </Link>
            <div className="mt-4 h-32 w-32 mx-auto rounded-md overflow-hidden">
              <img className="h-full w-full object-cover" src={Student} alt="Student" />
            </div>
          </div>

          {/* Amateur Part */}
          <div data-aos="fade-up"  className="flex flex-col items-center border border-gray-300 rounded-md p-4 backdrop-blur-sm">
            <h1 className="text-2xl lg:text-3xl font-playfair text-center text-[#921A40] font-bold">Amateur</h1>
            <p className="text-sm lg:text-base font-Newsreader mt-2 text-center text-[#C4DAD2]">
              Create art for personal enjoyment, often without formal training or professional
              aspirations.
            </p>
            <Link className='w-full flex justify-center' to={'/Amatuer'}>
            <button className="mt-4 w-[60%] bg-green-950 text-sm lg:text-base text-gray-200 py-2 rounded-lg hover:bg-green-900 border border-gray-400">
              Explore
            </button>
            </Link>
            <div className="mt-4 h-32 w-32 mx-auto rounded-md overflow-hidden">
              <img className="h-full w-full object-cover" src={Amatuer} alt="Amateur" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Age;
