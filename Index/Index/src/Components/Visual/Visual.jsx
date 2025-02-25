import { useState,useEffect } from "react";
import Like from "/home/swarnadip/Documents/Index/Visual/Visual/src/SVG/like.svg";
import Comment from "/home/swarnadip/Documents/Index/Visual/Visual/src/SVG/comment.svg";
import Similiar from "/home/swarnadip/Documents/Index/Visual/Visual/src/SVG/circles_four_icon_173253.svg";
import Download from "/home/swarnadip/Documents/Index/Visual/Visual/src/SVG/download.svg";
import AOS from "aos";
import "aos/dist/aos.css";


function Visual() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, [])

  const Images = [
    "/Image-of-Visual/img1.jpg",
    "/Image-of-Visual/img2.jpg",
    "/Image-of-Visual/img3.jpg",
    "/Image-of-Visual/img4.jpg",
    "/Image-of-Visual/img5.jpg",
    "/Image-of-Visual/img6.jpg",
    "/Image-of-Visual/img7.jpg",
    "/Image-of-Visual/img8.jpg",
    "/Image-of-Visual/img9.jpg",
    "/Image-of-Visual/img10.jpg",
  ];

  const Images_2 = [
    "/Image-of-Visual/img11.jpg",
    "/Image-of-Visual/img12.jpg",
    "/Image-of-Visual/img13.jpg",
    "/Image-of-Visual/img14.jpg",
    "/Image-of-Visual/img15.jpg",
    "/Image-of-Visual/img16.jpg",
    "/Image-of-Visual/img17.jpg",
    "/Image-of-Visual/img18.jpg",
    "/Image-of-Visual/img19.jpg",
    "/Image-of-Visual/img20.jpg",
  ]

  const Username = {
    Username: "Swarna",
    Description: "Developer",
  };

  return (
    <div className="h-auto w-full bg-slate-300 flex flex-col gap-y-12 overflow-auto">
      {/* First Section */}
      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Text Section */}
        <div className="w-full md:w-1/2 px-4 sm:px-20 flex flex-col items-center justify-center">
          <h1 className="text-[#c1121f] lg:text-[35px] sm:text-[30px] text-[25px]  font-bold font-Playfair text-center md:text-left">
            Transforming Ideas into Visual Art Experiences that Speak to the Soul
          </h1>
          <p className="text-[#780000] lg:text-[27px] md:text-[20px] text-[16px] font-Carattere text-center md:text-left">
            We turn concepts into captivating visual experiences, bringing your ideas to life through compelling and thoughtful artistry.
          </p>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 flex overflow-x-auto gap-4 p-4 hide-scrollbar">
          {Images.map((image, index) => (
            <div
              key={index}
              data-aos="fade-up"
              className="flex-shrink-0 bg-gradient-to-tl from-cyan-100 to-cyan-900 border border-white flex flex-col items-center justify-center gap-2 rounded-md p-2"
            >
              <div className="h-60 w-60 bg-white overflow-hidden rounded-md">
                <img src={image} alt={`Image ${index + 1}`} className="h-full w-full object-cover" loading="lazy" />
              </div>
              <div className="h-24 w-60 bg-red-400 backdrop-blur-md rounded-md">
                <div className="flex items-center justify-between p-2">
                  <div className="flex gap-2">
                    <button><img src={Like} alt="Like" /></button>
                    <button><img src={Comment} alt="Comment" /></button>
                    <button><img src={Similiar} alt="Similar" /></button>
                    <button><img src={Download} alt="Download" /></button>
                  </div>
                  <div className="h-6 w-20 rounded-lg bg-black text-white flex items-center justify-center">$220</div>
                </div>
                <div className="flex flex-col mt-1 ml-2">
                  <p className="text-lg font-semibold">{Username.Username}</p>
                  <p className="">{Username.Description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Second Section (Text above images in mobile, Right-aligned in larger screens) */}
      <div className="flex flex-col md:flex-row-reverse items-center gap-8 mt-8">
        {/* Text Section (Right Side on large screens) */}
        <div className="w-full md:w-1/2 px-4 sm:px-20 flex flex-col items-center justify-center order-first md:order-none">
          <h1 className="text-[#c1121f] lg:text-[35px] sm:text-[30px] text-[25px] font-bold font-Playfair text-center md:text-right">
            Explore Boundless Creativity and Innovative Art Crafted to Inspire
          </h1>
          <p className="text-[#780000] lg:text-[27px] md:text-[20px] text-[16px] font-Carattere text-center md:text-right">
            Dive into a curated collection of unique art pieces that push the boundaries of creativity, designed to evoke emotion and spark imagination.
          </p>
        </div>

        {/* Image Section (Left Side on large screens) */}
        <div className="w-full md:w-1/2 flex overflow-x-auto gap-4 p-4 hide-scrollbar">
          {Images_2.map((image, index) => (
            <div
              key={index}
              data-aos="fade-up"
              className="flex-shrink-0 bg-gradient-to-tl from-cyan-100 to-cyan-900 border border-white flex flex-col items-center justify-center gap-2 rounded-md p-2"
            >
              <div className="h-60 w-60 bg-white overflow-hidden rounded-md">
                <img src={image} alt={`Image ${index + 1}`} className="h-full w-full object-cover" loading="lazy" />
              </div>
              <div className="h-24 w-60 bg-red-400 backdrop-blur-md rounded-md">
                <div className="flex items-center justify-between p-2">
                  <div className="flex gap-2">
                    <button><img src={Like} alt="Like" /></button>
                    <button><img src={Comment} alt="Comment" /></button>
                    <button><img src={Similiar} alt="Similar" /></button>
                    <button><img src={Download} alt="Download" /></button>
                  </div>
                  <div className="h-6 w-20 rounded-lg bg-black text-white flex items-center justify-center">$220</div>
                </div>
                <div className="flex flex-col mt-1 ml-2">
                  <p className="text-lg font-semibold">{Username.Username}</p>
                  <p>{Username.Description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Visual;
