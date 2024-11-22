


// import React from "react";
// import similiar from '/home/swarnadip/Documents/Index/imagehover/src/images/similiar.png'
// import favourite from '/home/swarnadip/Documents/Index/imagehover/src/images/favourite.png'
// import download from '/home/swarnadip/Documents/Index/imagehover/src/images/download.png'
// import info from '/home/swarnadip/Documents/Index/imagehover/src/images/info.png'
// import stephen from '/home/swarnadip/Documents/Index/imagehover/src/images/stefan.jpg'

// const images = [
//   "pexels-eberhardgross-1367192.jpg",
//   "pexels-philippedonn-1133957.jpg",
//   "pexels-pixabay-147411.jpg",
//    "blossoms.jpg",
//    "city.jpg",
//   "pexels-rafael-guajardo-194140-604684.jpg",
//   "pexels-singkham-178541-1108572.jpg",
//   "dino.jpg",
//   "dream.jpg",
//   "digital.jpg", 
 
// ];

// function MasonryGrid() {
 //const heights = [200, 300, 250, 400, 350, 300, 350,300,400,450,500]

//   return (
//     <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 bg-maroon py-10 px-4">
//       {images.map((src, index) => (
//         <div
//           key={index}
//           className="mb-4 break-inside-avoid rounded-lg shadow-lg"
//           style={{
//             backgroundImage: `url(${src})`,
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//             height: `${heights[index]}px`, // Fixed heights based on layout
//           }}>




//           {/* Optional Overlay for Hover Effect */}
      









//         </div>
//       ))}
//     </div>
//   );
// }

// export default MasonryGrid;



import React from "react";
import profileImg from '/home/swarnadip/Documents/Index/Collection/Collection/src/images/stefan.jpg'
import similiar from '/home/swarnadip/Documents/Index/Collection/Collection/src/images/similiar.png'
import favourite from '/home/swarnadip/Documents/Index/Collection/Collection/src/images/favourite.png'
import download from '/home/swarnadip/Documents/Index/Collection/Collection/src/images/download.png'
import info from '/home/swarnadip/Documents/Index/Collection/Collection/src/images/info.png'



const images = [
  "pexels-eberhardgross-1367192.jpg",
  "pexels-philippedonn-1133957.jpg",
  "pexels-pixabay-147411.jpg",
  "pexels-rafael-guajardo-194140-604684.jpg",
  "pexels-singkham-178541-1108572.jpg",
  "bloosoms.jpg",
  "city.jpg",
  "digital.jpg",
  "dino.jpg",
  "dream.jpg"
];

// const profileImg = "/home/swarnadip/Documents/Index/Collection/Collection/src/images/stefan.jpg"; // Replace with the actual profile image path
// const similiar = "similiar-icon.png";
// const favourite = "favourite-icon.png";
// const download = "download-icon.png";
// const info = "info-icon.png";

function MasonryGrid() {
  const heights = [200, 300, 250, 400, 350, 200, 300,400,300,450,400]; // Custom heights for layout

  return (
    <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 bg-maroon py-10 px-4">
      {images.map((src, index) => (
        <div
          key={index}
           className="relative rounded-lg shadow-lg group overflow-hidden break-inside-avoid mb-4"
            style={{
            backgroundImage: `url(${src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: `${heights[index]}px`,
          }}>



          {/* Hover Overlay */}
          <div className="h-[40%] w-[100%] bg-gradient-to-b from-transparent to-black absolute bottom-[-40%] transition-all ease-linear duration-500 group-hover:bottom-0 ">
            <div className="w-[100%] flex items-center justify-between pl-3 pr-3">
              {/* the profile div */}
              <div className="h-[2.7vw] w-[2.7vw] bg-red-500 rounded-full bottom-[-20%]">

              </div>
             {/* the other button div */}
              <div className="flex items-center justify-center gap-3">
                <div className="h-[1.8vw] w-[1.8vw] bg-white rounded-full"></div>
                <div className="h-[1.8vw] w-[1.8vw] bg-white rounded-full"></div>
                <div className="h-[1.8vw] w-[1.8vw] bg-white rounded-full"></div>
                <div className="h-[1.8vw] w-[1.8vw] bg-white rounded-full"></div>

              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MasonryGrid;
