import React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";
import Item from './Item';
import Pic_1 from "/home/swarnadip/Documents/Index/Index/Index/src/Components/Category/Category-images/no-1.png";
import Pic_2 from "/home/swarnadip/Documents/Index/Index/Index/src/Components/Category/Category-images/no-3.jpg";
import Pic_3 from "/home/swarnadip/Documents/Index/Index/Index/src/Components/Category/Category-images/no-2.jpg";
import Pic_4 from "/home/swarnadip/Documents/Index/Index/Index/src/Components/Category/Category-images/no-4.jpg";
import Pic_5 from "/home/swarnadip/Documents/Index/Index/Index/src/Components/Category/Category-images/no-5.jpg";
import Pic_6 from "/home/swarnadip/Documents/Index/Index/Index/src/Components/Category/Category-images/no-6.jpg";
import Pic_7 from "/home/swarnadip/Documents/Index/Index/Index/src/Components/Category/Category-images/no-7.jpg";
import Pic_8 from "/home/swarnadip/Documents/Index/Index/Index/src/Components/Category/Category-images/no-8.jpg";
import { FaArrowRight } from 'react-icons/fa';
import useScrollAnimation from '/home/swarnadip/Documents/Index/Index/Index/src/Hooks/useScrollAnimation.js';


function Style() {
  const ref = useScrollAnimation('fade-left');

    useEffect(() => {
      AOS.init({ 
        duration: 800,
        once:false,
      });
    }, []);

  return (
    <div className="w-full h-auto flex flex-col gap-3 relative px-1">
      {/* Scrollable Container */}
      <div  className="flex items-center gap-x-4 p-4 w-full overflow-x-auto hide-scrollbar ">
          <Link to={'/Landscape'}><Item name="Landscape" backImg={Pic_1} /></Link>
          <Link to={'/Portrait'}><Item name="Portrait" backImg={Pic_2} /></Link>
          <Link to={'/Still-life'}><Item name="Still life" backImg={Pic_3} /></Link>
          <Link to={'/Oil Paint'}><Item name="Oil Paint" backImg={Pic_4} /></Link>
          <Link to={'/Watercolor'}><Item name="Watercolor" backImg={Pic_5} /></Link>
          <Link to={'/Abstract'}><Item name="Abstract" backImg={Pic_6} /></Link>
          <Link to={'/Historical'}><Item name="Historical Art" backImg={Pic_8} /></Link>
          {/* <Link to={'/Modern'}><Item name="Modern Art" backImg={Pic_7} /></Link> */}
      </div>

      {/* Button at the bottom-right corner */}
      <div className="w-full flex justify-end md:pr-6 pr-3 ">
        <Link to={'/Category'}>
          <button className="h-10 bg-black text-white px-6 rounded-xl font-semibold hover:bg-slate-700 hidden md:block">
            Browse More   
          </button>      
          <FaArrowRight className="block md:hidden border border-gray-800 px-1 py-1 text-2xl rounded-md"/>   
        </Link>
      </div>
    </div>
  );
}

export default Style;


// import React, { useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import Item from './Item';
// import Pic_1 from "/home/swarnadip/Documents/Index/Index/Index/src/Components/Category/Category-images/no-1.png";
// import Pic_2 from "/home/swarnadip/Documents/Index/Index/Index/src/Components/Category/Category-images/no-3.jpg";
// import Pic_3 from "/home/swarnadip/Documents/Index/Index/Index/src/Components/Category/Category-images/no-2.jpg";
// import Pic_4 from "/home/swarnadip/Documents/Index/Index/Index/src/Components/Category/Category-images/no-4.jpg";
// import Pic_5 from "/home/swarnadip/Documents/Index/Index/Index/src/Components/Category/Category-images/no-5.jpg";
// import Pic_6 from "/home/swarnadip/Documents/Index/Index/Index/src/Components/Category/Category-images/no-6.jpg";
// import Pic_7 from "/home/swarnadip/Documents/Index/Index/Index/src/Components/Category/Category-images/no-7.jpg";
// import Pic_8 from "/home/swarnadip/Documents/Index/Index/Index/src/Components/Category/Category-images/no-8.jpg";
// import { FaArrowRight } from 'react-icons/fa';

// // Custom hook for scroll animation
// const useScrollAnimation = () => {
//   useEffect(() => {
//     const handleScrollAnimation = (entries, observer) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add('animate-in');
//         }
//       });
//     };

//     const observer = new IntersectionObserver(handleScrollAnimation, {
//       root: null,
//       threshold: 0.1,
//       rootMargin: '0px',
//     });

//     const animatedElements = document.querySelectorAll('[data-animate]');
//     animatedElements.forEach((element) => observer.observe(element));

//     return () => {
//       observer.disconnect();
//     };
//   }, []);
// };

// function Style() {
//   useScrollAnimation();

//   return (
//     <div className="w-full h-auto flex flex-col gap-3 relative px-1">
//       {/* Scrollable Container */}
//       <div className="flex items-center gap-x-4 p-4 w-full overflow-x-auto hide-scrollbar">
//         <Link data-animate="slide-right" to={'/Landscape'}>
//           <Item name="Landscape" backImg={Pic_1} />
//         </Link>
//         <Link data-animate="slide-right" to={'/Portrait'}>
//           <Item name="Portrait" backImg={Pic_2} />
//         </Link>
//         <Link data-animate="slide-right" to={'/Still-life'}>
//           <Item name="Still life" backImg={Pic_3} />
//         </Link>
//         <Link data-animate="slide-right" to={'/Oil Paint'}>
//           <Item name="Oil Paint" backImg={Pic_4} />
//         </Link>
//         <Link data-animate="slide-right" to={'/Watercolor'}>
//           <Item name="Watercolor" backImg={Pic_5} />
//         </Link>
//         <Link data-animate="slide-right" to={'/Abstract'}>
//           <Item name="Abstract" backImg={Pic_6} />
//         </Link>
//         <Link data-animate="slide-right" to={'/Historical'}>
//           <Item name="Historical Art" backImg={Pic_8} />
//         </Link>
//       </div>

//       {/* Button at the bottom-right corner */}
//       <div className="w-full flex justify-end md:pr-6 pr-3">
//         <Link to={'/Category'}>
//           <button className="h-10 bg-black text-white px-6 rounded-xl font-semibold hover:bg-slate-700 hidden md:block">
//             Browse More
//           </button>
//           <FaArrowRight className="block md:hidden border border-gray-800 px-1 py-1 text-2xl rounded-md" />
//         </Link>
//       </div>
//     </div>
//   );
// }

// export default Style;