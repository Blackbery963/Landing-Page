import { useState,useEffect } from 'react';
import Background from '/home/swarnadip/Documents/Index/Index/Index/src/Components/Creativity/Images-of-Creativity/Untitled design.png';
import Creative_autoplay from './Creative_autoplay';
import AOS from "aos";
import "aos/dist/aos.css";

function Creativity() {
  const [count, setCount] = useState(0);


    useEffect(() => {
      AOS.init({ duration: 800 });
    }, [])

  return (
    <div className="h-auto w-screen ">
      {/* the container for all section */}
      <div className="h-[85vh] w-full">
        {/* the upper section  */}
        {/* starting of upper section */}
        <div
          className="w-full h-[60vh] flex items-center justify-center "
          style={{
            backgroundImage: `url(${Background})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundColor: "#000",
          }}
        >
          <div className="h-[60%] w-[90%] md:w-[70%] lg:w-[50%] flex items-center justify-center flex-col text-center px-4">
            {/* Responsive Heading */}
            <h1 className="text-white font-medium text-[24px] sm:text-[30px] md:text-[40px] lg:text-[50px] leading-tight font-Create">
              Where Vision and Creativity Converge to Create Unique Artistic Journeys.
            </h1>
            
            {/* Responsive Paragraph */}
            <p className="text-gray-200 font-Upright font-medium text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] mt-4 leading-relaxed">
              Immerse yourself in a world where vision meets creativity, offering a collection
               of art that pushes the boundaries of imagination. Each piece is crafted to tell
                a unique story, blending technique and passion to create captivating visual
                 experiences. Whether you're seeking inspiration or a deeper connection, 
                 our art invites you on a journey that resonates beyond the canvas.
            </p>
          </div>
        </div>
        {/* ending of upper section */}

        {/* starting of lower section */}
        <div data-aos="fade-up" className='w-full h-[30vh] bg-gradient-to-t to-transparent from-slate-600 mt-[-5%] px-4 gap-4 flex justify-between  overflow-y-hidden'>
          <Creative_autoplay/>
        </div>
        {/* ending of lower section */}
      </div>
    </div>
  );
}

export default Creativity;
