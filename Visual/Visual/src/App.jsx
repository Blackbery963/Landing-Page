import { useState } from "react";
import "./App.css";
import Like from "/home/swarnadip/Documents/Index/Visual/Visual/src/SVG/like.svg";
import Comment from "/home/swarnadip/Documents/Index/Visual/Visual/src/SVG/comment.svg";
import Similiar from "/home/swarnadip/Documents/Index/Visual/Visual/src/SVG/circles_four_icon_173253.svg";
import Download from "/home/swarnadip/Documents/Index/Visual/Visual/src/SVG/download.svg";

function App() {
  const [count, setCount] = useState(0);
  const Images = [
    "/Images/img1.jpg",
    "/Images/img2.jpg",
    "/Images/img3.jpg",
    "/Images/img4.jpg",
    "/Images/img5.jpg",
    "/Images/img6.jpg",
    "/Images/img7.jpg",
    "/Images/img8.jpg",
    "/Images/img9.jpg",
    "/Images/img10.jpg",
  ];

  const Images_2 = [
    "/Images/img11.jpg",
    "/Images/img12.jpg",
    "/Images/img13.jpg",
    "/Images/img14.jpg",
    "/Images/img15.jpg",
    "/Images/img16.jpg",
    "/Images/img17.jpg",
    "/Images/img18.jpg",
    "/Images/img19.jpg",
    "/Images/img20.jpg",
  ]

  const Username = {
    Username: "Swarna",
    Description: "Developer",
  };

  return (
    <div className="h-screen w-screen bg-slate-300 flex flex-col gap-y-12 overflow-auto">
      {/* Container of first part */}
      <div className="w-screen flex mt-8">
        {/* Textual part */}
        <div className="w-[50%] flex flex-col items-center justify-center pl-20 pr-20">
          <h1 className="text-[#c1121f] text-[35px] font-bold font-Playfair">
            Transforming Ideas into Visual Art Experiences that Speak to the Soul
          </h1>
          <p className="text-[#780000] text-[27px] font-Carattere">
            We turn concepts into captivating visual experiences, bringing your ideas to life through compelling and thoughtful artistry.
          </p>
        </div>

        {/* Image part */}
        <div className="w-[50%] overflow-scroll overflow-y-hidden flex whitespace-nowrap hide-scrollbar gap-x-4 p-4 b mr-4">
          {Images.map((image, index) => (
            <div
              key={index}
              className="h-[380px] w-[270px] bg-gradient-to-tl from-cyan-100 to-cyan-900 border border-white flex flex-col items-center justify-center flex-shrink-0 gap-y-2 rounded-md"
            >
              {/* Image */}
              <div className="h-[250px] w-[250px] bg-white overflow-hidden">
                <img
                  src={image}
                  alt={`Image ${index + 1}`}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Info and Actions */}
              <div className="h-[100px] w-[250px] bg-red-400 backdrop-blur-md rounded-md">
                {/* Button part and price tag */}
                <div className="flex items-center justify-between pl-2 pr-2 mt-2">
                  <div className="flex gap-2">
                    <button>
                      <img src={Like} alt="Like" />
                    </button>
                    <button>
                      <img src={Comment} alt="Comment" />
                    </button>
                    <button>
                      <img src={Similiar} alt="Similar" />
                    </button>
                    <button>
                      <img src={Download} alt="Download" />
                    </button>
                  </div>
                  {/* Price tag */}
                  <div className="h-[25px] w-[80px] rounded-lg bg-black text-white flex items-center justify-center">
                    $220
                  </div>
                </div>

                {/* Name and description */}
                <div className="flex flex-col mt-1 ml-2">
                  <p className="text-[19px] font-semibold">{Username.Username}</p>
                  <p>{Username.Description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Container of last part */}
      <div className="flex">
        {/* Image part */}
        <div className="w-[50%] overflow-scroll overflow-y-hidden flex whitespace-nowrap hide-scrollbar gap-x-4 p-4  ml-4">
          {Images_2.map((image, index) => (
            <div
              key={index}
              className="h-[380px] w-[270px] bg-gradient-to-tl from-cyan-100 to-cyan-900 border border-white flex flex-col items-center justify-center flex-shrink-0 gap-y-2 rounded-md"
            >
              {/* Image */}
              <div className="h-[250px] w-[250px] bg-white overflow-hidden">
                <img
                  src={image}
                  alt={`Image ${index + 1}`}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Info and Actions */}
              <div className="h-[100px] w-[250px] bg-red-400 backdrop-blur-md rounded-md">
                {/* Button part and price tag */}
                <div className="flex items-center justify-between pl-2 pr-2 mt-2">
                  <div className="flex gap-2">
                    <button>
                      <img src={Like} alt="Like" />
                    </button>
                    <button>
                      <img src={Comment} alt="Comment" />
                    </button>
                    <button>
                      <img src={Similiar} alt="Similar" />
                    </button>
                    <button>
                      <img src={Download} alt="Download" />
                    </button>
                  </div>
                  {/* Price tag */}
                  <div className="h-[25px] w-[80px] rounded-lg bg-black text-white flex items-center justify-center">
                    $220
                  </div>
                </div>

                {/* Name and description */}
                <div className="flex flex-col mt-1 ml-2">
                  <p className="text-[19px] font-semibold">{Username.Username}</p>
                  <p>{Username.Description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Textual part */}
        <div className="w-[50%] flex flex-col items-center justify-center pl-20 pr-20">
          <h1 className="text-[#c1121f] text-[35px] font-bold font-Playfair">
            Explore Boundless Creativity and Innovative Art Crafted to Inspire
          </h1>
          <p className="text-[27px] font-Carattere text-[#780000]">
            Dive into a curated collection of unique art pieces that push the boundaries of creativity, designed to evoke emotion and spark imagination.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
