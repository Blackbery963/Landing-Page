// import React, { useState } from 'react';
// import { FaThumbsUp } from 'react-icons/fa6';
// import { MdPhoto, MdVideocam, MdSettings, MdBook } from "react-icons/md"; 


// function Your_Collections({Photos}) {
//   const [activeButton, setActiveButton] = useState(null);


//   // Handle button click and set active state
//   const handleButtonClick = (buttonName) => {
//     setActiveButton(buttonName);
//     if (buttonName === 'Settings') toggleDropdown(); // Toggle dropdown only for Settings
//   };
  
//   return (
//     <div className='h-screen w-screen'>
//       <nav className='w-full bg-slate-50 flex items-center'>
//         <div className='flex lg:gap-4 gap-2 w-full px-4 py-2'>
//        <button
//         className={`relative px-2 md:px-4 py-1 flex items-center gap-2 font-Playfair transition-all duration-300 ${
//           activeButton === 'Photos' ? 'text-violet-600' : 'text-gray-800 hover:text-violet-500'
//         }`}
//         onClick={() => handleButtonClick('Photos')}
//       >
//         <span className="text-sm md:text-base">Photos</span>
//         <MdPhoto className="text-lg md:text-xl" />
//         <span
//           className={`absolute left-1/2 bottom-0 h-[2px] bg-violet-600 transition-all duration-300 ease-in-out transform -translate-x-1/2 ${
//             activeButton === 'Photos' ? 'w-full' : 'w-0 group-hover:w-full'
//           }`}
//         ></span>
//       </button>

//       {/* Videos Button */}
//       <button
//         className={`relative px-2 md:px-4 py-1 flex items-center font-Playfair gap-2 transition-all duration-300 ${
//           activeButton === 'Videos' ? 'text-violet-600' : 'text-gray-800 hover:text-violet-500'
//         }`}
//         onClick={() => handleButtonClick('Videos')}
//       >
//         <span className="text-sm md:text-base">Videos</span>
//         <MdVideocam className="text-lg md:text-xl" />
//         <span
//           className={`absolute left-1/2 bottom-0 h-[2px] bg-violet-600 transition-all duration-300 ease-in-out transform -translate-x-1/2 ${
//             activeButton === 'Videos' ? 'w-full' : 'w-0 group-hover:w-full'
//           }`}
//         ></span>
//       </button>

//       {/* Diary Button */}
//       <button
//         className={`relative px-2 md:px-4 py-1 flex items-center gap-2 font-Playfair transition-all duration-300 ${
//           activeButton === 'Diary' ? 'text-violet-600' : 'text-gray-800 hover:text-violet-500'
//         }`}
//         onClick={() => handleButtonClick('Diary')}
//       >
//         <span className="text-sm md:text-base">Diary</span>
//         <MdBook className="text-lg md:text-xl" />
//         <span
//           className={`absolute left-1/2 bottom-0 h-[2px] bg-violet-600 transition-all duration-300 ease-in-out transform -translate-x-1/2 ${
//             activeButton === 'Diary' ? 'w-full' : 'w-0 group-hover:w-full'
//           }`}
//         ></span>
//       </button>


//         </div>
//       </nav>
//       {/* the collections  */}
//        <div className='w-[300px] h-[450px] flex flex-col mt-4 ml-6 rounded-md  overflow-hidden'>
//         <div className='w-full h-[300px] bg-slate-300'>

//         </div>
//         <div className='w-full h-[150px] bg-slate-500'>
//           <div className='w-full  h-auto flex items-center justify-between'>
//             <FaThumbsUp size={20}/>
            
//           </div>

//         </div>
//        </div>
//     </div>
//   );
// }

// export default Your_Collections;

// import React, { useState, useEffect } from "react";
// import { FaThumbsUp } from "react-icons/fa6";
// import { MdPhoto, MdVideocam, MdBook } from "react-icons/md";
// import { databases, storage } from "/home/swarnadip/Documents/Index/Index/Index/src/appwriteConfig.js"; // Adjust path
// import { Query } from "appwrite";

// function Your_Collections() {
//   const [activeButton, setActiveButton] = useState("Photos"); // Default to Photos
//   const [uploads, setUploads] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Handle button click and set active state
//   const handleButtonClick = (buttonName) => {
//     setActiveButton(buttonName);
//   };

//   // Fetch uploads from Appwrite when component mounts
//   useEffect(() => {
//     const fetchUploads = async () => {
//       try {
//         // Fetch documents from Appwrite Database
//         const response = await databases.listDocuments(
//           "67f1646a00129d29d660", // Database ID
//           "67f16c9e0009042bf8ed"  // Collection ID
//           // Optional: Add Query filters if needed, e.g., Query.equal("userId", userId)
//         );

//         // Map documents to include image URLs from Storage
//         const uploadsWithImages = await Promise.all(
//           response.documents.map(async (doc) => {
//             const imageUrl = storage.getFilePreview(
//               "67f164850003fb3c9d8f", // Storage Bucket ID
//               doc.fileId              // File ID from the document
//             ).href;

//             return {
//               ...doc,
//               imageUrl, // Add the image URL
//             };
//           })
//         );

//         setUploads(uploadsWithImages);
//       } catch (err) {
//         setError("Failed to load collections: " + err.message);
//         console.error(err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchUploads();
//   }, []);

//   return (
//     <div className="h-screen w-screen">
//       {/* Navigation */}
//       <nav className="w-full bg-slate-50 flex items-center">
//         <div className="flex lg:gap-4 gap-2 w-full px-4 py-2">
//           {/* Photos Button */}
//           <button
//             className={`relative px-2 md:px-4 py-1 flex items-center gap-2 font-Playfair transition-all duration-300 ${
//               activeButton === "Photos" ? "text-violet-600" : "text-gray-800 hover:text-violet-500"
//             }`}
//             onClick={() => handleButtonClick("Photos")}
//           >
//             <span className="text-sm md:text-base">Photos</span>
//             <MdPhoto className="text-lg md:text-xl" />
//             <span
//               className={`absolute left-1/2 bottom-0 h-[2px] bg-violet-600 transition-all duration-300 ease-in-out transform -translate-x-1/2 ${
//                 activeButton === "Photos" ? "w-full" : "w-0 group-hover:w-full"
//               }`}
//             ></span>
//           </button>

//           {/* Videos Button */}
//           <button
//             className={`relative px-2 md:px-4 py-1 flex items-center font-Playfair gap-2 transition-all duration-300 ${
//               activeButton === "Videos" ? "text-violet-600" : "text-gray-800 hover:text-violet-500"
//             }`}
//             onClick={() => handleButtonClick("Videos")}
//           >
//             <span className="text-sm md:text-base">Videos</span>
//             <MdVideocam className="text-lg md:text-xl" />
//             <span
//               className={`absolute left-1/2 bottom-0 h-[2px] bg-violet-600 transition-all duration-300 ease-in-out transform -translate-x-1/2 ${
//                 activeButton === "Videos" ? "w-full" : "w-0 group-hover:w-full"
//               }`}
//             ></span>
//           </button>

//           {/* Diary Button */}
//           <button
//             className={`relative px-2 md:px-4 py-1 flex items-center gap-2 font-Playfair transition-all duration-300 ${
//               activeButton === "Diary" ? "text-violet-600" : "text-gray-800 hover:text-violet-500"
//             }`}
//             onClick={() => handleButtonClick("Diary")}
//           >
//             <span className="text-sm md:text-base">Diary</span>
//             <MdBook className="text-lg md:text-xl" />
//             <span
//               className={`absolute left-1/2 bottom-0 h-[2px] bg-violet-600 transition-all duration-300 ease-in-out transform -translate-x-1/2 ${
//                 activeButton === "Diary" ? "w-full" : "w-0 group-hover:w-full"
//               }`}
//             ></span>
//           </button>
//         </div>
//       </nav>

//       {/* Content Section */}
//       <div className="w-full p-6">
//         {loading ? (
//           <p className="text-center text-gray-600">Loading...</p>
//         ) : error ? (
//           <p className="text-center text-red-500">{error}</p>
//         ) : (
//           <>
//             {activeButton === "Photos" && (
//               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//                 {uploads.length === 0 ? (
//                   <p className="text-gray-600">No photos uploaded yet.</p>
//                 ) : (
//                   uploads.map((upload) => (
//                     <div
//                       key={upload.$id}
//                       className="w-[300px] h-[450px] flex flex-col rounded-md overflow-hidden shadow-md"
//                     >
//                       {/* Image Section */}
//                       <div className="w-full h-[300px] bg-slate-300">
//                         <img
//                           src={upload.imageUrl}
//                           alt={upload.title}
//                           className="w-full h-full object-cover"
//                         />
//                       </div>
//                       {/* Info Section */}
//                       <div className="w-full h-[150px] bg-slate-500 p-4 text-white">
//                         <h3 className="text-lg font-semibold">{upload.title}</h3>
//                         <p className="text-sm">{upload.description}</p>
//                         <div className="w-full h-auto flex items-center justify-between mt-2">
//                           <FaThumbsUp size={20} className="cursor-pointer hover:text-violet-300" />
//                         </div>
//                       </div>
//                     </div>
//                   ))
//                 )}
//               </div>
//             )}

//             {activeButton === "Videos" && (
//               <p className="text-gray-600">Videos section coming soon!</p>
//             )}

//             {activeButton === "Diary" && (
//               <p className="text-gray-600">Diary section coming soon!</p>
//             )}
//           </>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Your_Collections;

import React, { useState, useEffect } from "react";
import { FaThumbsUp } from "react-icons/fa6";
import { MdPhoto, MdVideocam, MdBook } from "react-icons/md";
import { databases, storage } from "/home/swarnadip/Documents/Index/Index/Index/src/appwriteConfig.js";
import { Query } from "appwrite";

function Your_Collections() {
  const [activeButton, setActiveButton] = useState("Photos");
  const [uploads, setUploads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  useEffect(() => {
    const fetchUploads = async () => {
      try {
        const response = await databases.listDocuments(
          "67f1646a00129d29d660",
          "67f16c9e0009042bf8ed"
        );
        console.log("Fetched documents:", response.documents); // Debug log

        const uploadsWithImages = await Promise.all(
          response.documents.map(async (doc) => {
            const imageUrl = storage.getFilePreview("67f164850003fb3c9d8f", doc.fileId).href;
            return { ...doc, imageUrl };
          })
        );
        setUploads(uploadsWithImages);
      } catch (err) {
        setError("Failed to load collections: " + err.message);
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchUploads();
  }, []);

  return (
    <div className="h-screen w-screen">
      <nav className="w-full bg-slate-50 flex items-center">
        <div className="flex lg:gap-4 gap-2 w-full px-4 py-2">
          <button
            className={`relative px-2 md:px-4 py-1 flex items-center gap-2 font-Playfair transition-all duration-300 ${
              activeButton === "Photos" ? "text-violet-600" : "text-gray-800 hover:text-violet-500"
            }`}
            onClick={() => handleButtonClick("Photos")}
          >
            <span className="text-sm md:text-base">Photos</span>
            <MdPhoto className="text-lg md:text-xl" />
            <span
              className={`absolute left-1/2 bottom-0 h-[2px] bg-violet-600 transition-all duration-300 ease-in-out transform -translate-x-1/2 ${
                activeButton === "Photos" ? "w-full" : "w-0 group-hover:w-full"
              }`}
            ></span>
          </button>
          <button
            className={`relative px-2 md:px-4 py-1 flex items-center font-Playfair gap-2 transition-all duration-300 ${
              activeButton === "Videos" ? "text-violet-600" : "text-gray-800 hover:text-violet-500"
            }`}
            onClick={() => handleButtonClick("Videos")}
          >
            <span className="text-sm md:text-base">Videos</span>
            <MdVideocam className="text-lg md:text-xl" />
            <span
              className={`absolute left-1/2 bottom-0 h-[2px] bg-violet-600 transition-all duration-300 ease-in-out transform -translate-x-1/2 ${
                activeButton === "Videos" ? "w-full" : "w-0 group-hover:w-full"
              }`}
            ></span>
          </button>
          <button
            className={`relative px-2 md:px-4 py-1 flex items-center gap-2 font-Playfair transition-all duration-300 ${
              activeButton === "Diary" ? "text-violet-600" : "text-gray-800 hover:text-violet-500"
            }`}
            onClick={() => handleButtonClick("Diary")}
          >
            <span className="text-sm md:text-base">Diary</span>
            <MdBook className="text-lg md:text-xl" />
            <span
              className={`absolute left-1/2 bottom-0 h-[2px] bg-violet-600 transition-all duration-300 ease-in-out transform -translate-x-1/2 ${
                activeButton === "Diary" ? "w-full" : "w-0 group-hover:w-full"
              }`}
            ></span>
          </button>
        </div>
      </nav>
      <div className="w-full p-6">
        {loading ? (
          <p className="text-center text-gray-600">Loading...</p>
        ) : error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : (
          <>
            {activeButton === "Photos" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {uploads.length === 0 ? (
                  <p className="text-gray-600">No photos uploaded yet.</p>
                ) : (
                  uploads.map((upload) => (
                    <div
                      key={upload.$id}
                      className="w-[300px] h-[450px] flex flex-col rounded-md overflow-hidden shadow-md"
                    >
                      <div className="w-full h-[300px] bg-slate-300">
                        <img
                          src={upload.imageUrl}
                          alt={upload.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="w-full h-[150px] bg-slate-500 p-4 text-white">
                        <h3 className="text-lg font-semibold">{upload.title}</h3>
                        <p className="text-sm">{upload.description}</p>
                        <div className="w-full h-auto flex items-center justify-between mt-2">
                          <FaThumbsUp size={20} className="cursor-pointer hover:text-violet-300" />
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            )}
            {activeButton === "Videos" && <p className="text-gray-600">Videos section coming soon!</p>}
            {activeButton === "Diary" && <p className="text-gray-600">Diary section coming soon!</p>}
          </>
        )}
      </div>
    </div>
  );
}

export default Your_Collections;