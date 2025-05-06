// import React, { useState, useEffect } from "react";
// import { FaThumbsUp } from "react-icons/fa6";
// import { MdPhoto, MdVideocam, MdBook } from "react-icons/md";
// import { databases, storage, account, config } from "/home/swarnadip/Documents/Index/Index/Index/src/appwriteConfig.js";
// import { useNavigate } from "react-router-dom";
// import { Query } from "appwrite";
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// function Your_Collections() {
//   const navigate = useNavigate();
//   const [activeButton, setActiveButton] = useState("Photos");
//   const [uploads, setUploads] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const handleButtonClick = (buttonName) => {
//     setActiveButton(buttonName);
//   };

//   useEffect(() => {
//     const fetchUploads = async () => {
//       try {
//         setLoading(true);
//         const user = await account.get();
//         const userId = user.$id;

//         const response = await databases.listDocuments(
//           config.databaseId,
//           config.usersCollectionId,
//           [
//             Query.equal("userId", userId),
//             Query.equal("type", activeButton.toLowerCase()),
//             Query.orderDesc("$createdAt") // Show newest first
//           ]
//         );

//         const uploadsWithMedia = await Promise.all(
//           response.documents.map(async (doc) => {
//             try {
//               if (doc.fileId) {
//                 // Use getFileView for permanent URLs or getFilePreview for resized images
//                 const fileUrl = storage.getFileView(
//                   config.storageBucketId,
//                   doc.fileId
//                 ).href;
                
//                 return { 
//                   ...doc, 
//                   mediaUrl: fileUrl,
//                   isImage: activeButton === "Photos" || activeButton === "Diary",
//                   isVideo: activeButton === "Videos"
//                 };
//               }
//               return { ...doc, mediaUrl: null };
//             } catch (err) {
//               console.error(`Error fetching file for ${doc.$id}:`, err);
//               return { ...doc, mediaUrl: null };
//             }
//           })
//         );

//         setUploads(uploadsWithMedia);
//       } catch (err) {
//         if (err.code === 401) {
//           toast.error("Please log in to view your collections.");
//           navigate("/login");
//         } else {
//           setError("Failed to load collections: " + err.message);
//           console.error("Fetch error:", err);
//           toast.error("Failed to load your collections");
//         }
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchUploads();
//   }, [activeButton, navigate]);

//   return (
//     <div className="min-h-screen w-full dark:bg-[#040d1200] dark:text-gray-100 transition-colors duration-300">
//       <ToastContainer position="top-right" autoClose={5000} />
      
//       {/* Navigation */}
//       <nav className="lg:w-[80%] sm:w-[90%] w-[98%] mx-auto border-t border-slate-300 dark:border-gray-700 bg-slate-50 dark:bg-gray-800">
//         <div className="flex lg:gap-4 gap-2 w-full px-4 py-2">
//           {["Photos", "Videos", "Diary"].map((buttonName) => (
//             <button
//               key={buttonName}
//               className={`relative px-2 md:px-4 py-1 flex items-center gap-2 font-Playfair transition-all duration-300 ${
//                 activeButton === buttonName 
//                   ? 'text-violet-600 dark:text-violet-400' 
//                   : 'text-gray-800 dark:text-gray-300 hover:text-violet-500 dark:hover:text-violet-400'
//               }`}
//               onClick={() => handleButtonClick(buttonName)}
//             >
//               <span className="text-sm md:text-base">{buttonName}</span>
//               {buttonName === "Photos" && <MdPhoto className="text-lg md:text-xl" />}
//               {buttonName === "Videos" && <MdVideocam className="text-lg md:text-xl" />}
//               {buttonName === "Diary" && <MdBook className="text-lg md:text-xl" />}
//               <span
//                 className={`absolute left-1/2 bottom-0 h-[2px] bg-violet-600 dark:bg-violet-400 transition-all duration-300 ease-in-out transform -translate-x-1/2 ${
//                   activeButton === buttonName ? "w-full" : "w-0 group-hover:w-full"
//                 }`}
//               ></span>
//             </button>
//           ))}
//         </div>
//       </nav>

//       {/* Content */}
//       <div className="w-full p-6">
//         {loading ? (
//           <div className="flex justify-center items-center h-64">
//             <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-violet-500"></div>
//           </div>
//         ) : error ? (
//           <p className="text-center text-red-500 dark:text-red-400 py-8">{error}</p>
//         ) : (
//           <>
//             {["Photos", "Videos", "Diary"].map((type) => (
//               activeButton === type && (
//                 <div key={type} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//                   {uploads.length === 0 ? (
//                     <div className="col-span-full text-center py-12">
//                       <p className="text-gray-600 dark:text-gray-400 text-lg">
//                         No {type.toLowerCase()} uploaded yet.
//                       </p>
//                       <button 
//                         onClick={() => navigate('/upload')}
//                         className="mt-4 px-4 py-2 bg-violet-600 text-white rounded-md hover:bg-violet-700 transition-colors"
//                       >
//                         Upload Your First {type.slice(0, -1)}
//                       </button>
//                     </div>
//                   ) : (
//                     uploads.map((upload) => (
//                       <div
//                         key={upload.$id}
//                         className="w-full max-w-[300px] mx-auto h-[450px] flex flex-col rounded-md overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
//                       >
//                         <div className="w-full h-[300px] bg-slate-200 dark:bg-gray-700 flex items-center justify-center overflow-hidden">
//                           {upload.mediaUrl ? (
//                             upload.isVideo ? (
//                               <div className="relative w-full h-full">
//                                 <video
//                                   src={upload.mediaUrl}
//                                   controls
//                                   className="w-full h-full object-cover"
//                                 />
//                                 <div className="absolute bottom-2 right-2 bg-black/50 text-white px-2 py-1 rounded text-xs">
//                                   Video
//                                 </div>
//                               </div>
//                             ) : (
//                               <div className="relative w-full h-full">
//                                 <img
//                                   src={upload.mediaUrl}
//                                   alt={upload.title || type}
//                                   className="w-full h-full object-cover"
//                                   onError={(e) => {
//                                     e.target.onerror = null;
//                                     e.target.src = "https://via.placeholder.com/300x300?text=Image+Not+Found";
//                                   }}
//                                 />
//                                 <div className="absolute bottom-2 right-2 bg-black/50 text-white px-2 py-1 rounded text-xs">
//                                   Image
//                                 </div>
//                               </div>
//                             )
//                           ) : (
//                             <div className="w-full h-full flex flex-col items-center justify-center text-gray-400 dark:text-gray-500 p-4 text-center">
//                               <MdPhoto className="text-4xl mb-2" />
//                               <p>Media not available</p>
//                             </div>
//                           )}
//                         </div>
//                         <div className="w-full flex-1 p-4 bg-slate-50 dark:bg-gray-800 text-gray-800 dark:text-gray-100">
//                           <h3 className="text-lg font-semibold truncate">
//                             {upload.title || "Untitled"}
//                           </h3>
//                           <p className="text-sm mt-2 line-clamp-3 text-gray-600 dark:text-gray-300">
//                             {upload.description || "No description provided"}
//                           </p>
//                           <div className="flex justify-between items-center mt-4">
//                             <span className="text-xs text-gray-500 dark:text-gray-400">
//                               {new Date(upload.$createdAt).toLocaleDateString()}
//                             </span>
//                             <button 
//                               className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-gray-700 text-violet-600 dark:text-violet-400"
//                               onClick={() => toast.info('Like functionality coming soon!')}
//                             >
//                               <FaThumbsUp size={18} />
//                             </button>
//                           </div>
//                         </div>
//                       </div>
//                     ))
//                   )}
//                 </div>
//               )
//             ))}
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
import { databases, storage, account, config } from "/home/swarnadip/Documents/Index/Index/Index/src/appwriteConfig.js";
import { useNavigate } from "react-router-dom";
import { Query } from "appwrite";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Your_Collections() {
  const navigate = useNavigate();
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
        setLoading(true);
        const user = await account.get();
        const userId = user.$id;

        // Query the imagesCollectionId, filtering by medium or type if applicable
        const response = await databases.listDocuments(
          config.databaseId,
          config.usersCollectionId, // Use imagesCollectionId to match App.jsx
          [
            Query.orderDesc("$createdAt"), // Show newest first
            // No userId filter; rely on permissions
            activeButton === "Photos" ? Query.equal("medium", ["Photography", "Digital Art", "Painting"]) :
            activeButton === "Videos" ? Query.equal("medium", "Video") :
            activeButton === "Diary" ? Query.equal("medium", "Other") : null
          ].filter(Boolean) // Remove null queries
        );

        const uploadsWithMedia = await Promise.all(
          response.documents.map(async (doc) => {
            try {
              if (doc.fileId) {
                const fileUrl = storage.getFileView(
                  config.usersBucketId, // Use bucketId to match App.jsx
                  doc.fileId
                ).href;
                
                return { 
                  ...doc, 
                  mediaUrl: fileUrl,
                  isImage: activeButton === "Photos" || activeButton === "Diary",
                  isVideo: activeButton === "Videos"
                };
              }
              return { ...doc, mediaUrl: null };
            } catch (err) {
              console.error(`Error fetching file for document ${doc.$id}:`, {
                message: err.message,
                code: err.code,
                type: err.type
              });
              return { ...doc, mediaUrl: null };
            }
          })
        );

        setUploads(uploadsWithMedia);
      } catch (err) {
        console.error("Fetch error:", {
          message: err.message,
          code: err.code,
          type: err.type
        });
        if (err.code === 401) {
          toast.error("Please log in to view your collections.");
          navigate("/login");
        } else if (err.code === 404) {
          setError("Collection or bucket not found. Check Appwrite configuration.");
          toast.error("Collection or bucket not found.");
        } else if (err.code === 403) {
          setError("Permission denied. Ensure you have access to the collection.");
          toast.error("Permission denied.");
        } else {
          setError(`Failed to load collections: ${err.message}`);
          toast.error("Failed to load your collections.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchUploads();
  }, [activeButton, navigate]);

  return (
    <div className="min-h-screen w-full dark:bg-[#040d1200] dark:text-gray-100 transition-colors duration-300">
      <ToastContainer position="top-right" autoClose={5000} />
      
      {/* Navigation */}
      <nav className="lg:w-[80%] sm:w-[90%] w-[98%] mx-auto border-t border-slate-300 dark:border-gray-700 bg-slate-50 dark:bg-gray-800">
        <div className="flex lg:gap-4 gap-2 w-full px-4 py-2">
          {["Photos", "Videos", "Diary"].map((buttonName) => (
            <button
              key={buttonName}
              className={`relative px-2 md:px-4 py-1 flex items-center gap-2 font-Playfair transition-all duration-300 ${
                activeButton === buttonName 
                  ? 'text-violet-600 dark:text-violet-400' 
                  : 'text-gray-800 dark:text-gray-300 hover:text-violet-500 dark:hover:text-violet-400'
              }`}
              onClick={() => handleButtonClick(buttonName)}
            >
              <span className="text-sm md:text-base">{buttonName}</span>
              {buttonName === "Photos" && <MdPhoto className="text-lg md:text-xl" />}
              {buttonName === "Videos" && <MdVideocam className="text-lg md:text-xl" />}
              {buttonName === "Diary" && <MdBook className="text-lg md:text-xl" />}
              <span
                className={`absolute left-1/2 bottom-0 h-[2px] bg-violet-600 dark:bg-violet-400 transition-all duration-300 ease-in-out transform -translate-x-1/2 ${
                  activeButton === buttonName ? "w-full" : "w-0 group-hover:w-full"
                }`}
              ></span>
            </button>
          ))}
        </div>
      </nav>

      {/* Content */}
      <div className="w-full p-6">
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-violet-500"></div>
          </div>
        ) : error ? (
          <p className="text-center text-red-500 dark:text-red-400 py-8">{error}</p>
        ) : (
          <>
            {["Photos", "Videos", "Diary"].map((type) => (
              activeButton === type && (
                <div key={type} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {uploads.length === 0 ? (
                    <div className="col-span-full text-center py-12">
                      <p className="text-gray-600 dark:text-gray-400 text-lg">
                        No {type.toLowerCase()} uploaded yet.
                      </p>
                      <button 
                        onClick={() => navigate('/upload')}
                        className="mt-4 px-4 py-2 bg-violet-600 text-white rounded-md hover:bg-violet-700 transition-colors"
                      >
                        Upload Your First {type.slice(0, -1)}
                      </button>
                    </div>
                  ) : (
                    uploads.map((upload) => (
                      <div
                        key={upload.$id}
                        className="w-full max-w-[300px] mx-auto h-[450px] flex flex-col rounded-md overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
                      >
                        <div className="w-full h-[300px] bg-slate-200 dark:bg-gray-700 flex items-center justify-center overflow-hidden">
                          {upload.mediaUrl ? (
                            upload.isVideo ? (
                              <div className="relative w-full h-full">
                                <video
                                  src={upload.mediaUrl}
                                  controls
                                  className="w-full h-full object-cover"
                                  onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.parentElement.innerHTML = `
                                      <div class="w-full h-full flex flex-col items-center justify-center text-gray-400 dark:text-gray-500 p-4 text-center">
                                        <svg class="text-4xl mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v18l15-9L5 3z" />
                                        </svg>
                                        <p>Video not available</p>
                                      </div>`;
                                  }}
                                />
                                <div className="absolute bottom-2 right-2 bg-black/50 text-white px-2 py-1 rounded text-xs">
                                  Video
                                </div>
                              </div>
                            ) : (
                              <div className="relative w-full h-full">
                                <img
                                  src={upload.mediaUrl}
                                  alt={upload.title || type}
                                  className="w-full h-full object-cover"
                                  onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = "https://via.placeholder.com/300x300?text=Image+Not+Found";
                                  }}
                                />
                                <div className="absolute bottom-2 right-2 bg-black/50 text-white px-2 py-1 rounded text-xs">
                                  Image
                                </div>
                              </div>
                            )
                          ) : (
                            <div className="w-full h-full flex flex-col items-center justify-center text-gray-400 dark:text-gray-500 p-4 text-center">
                              <MdPhoto className="text-4xl mb-2" />
                              <p>Media not available</p>
                            </div>
                          )}
                        </div>
                        <div className="w-full flex-1 p-4 bg-slate-50 dark:bg-gray-800 text-gray-800 dark:text-gray-100">
                          <h3 className="text-lg font-semibold truncate">
                            {upload.title || "Untitled"}
                          </h3>
                          <p className="text-sm mt-2 line-clamp-3 text-gray-600 dark:text-gray-300">
                            {upload.description || "No description provided"}
                          </p>
                          <div className="flex justify-between items-center mt-4">
                            <span className="text-xs text-gray-500 dark:text-gray-400">
                              {new Date(upload.createdAt).toLocaleDateString()}
                            </span>
                            <button 
                              className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-gray-700 text-violet-600 dark:text-violet-400"
                              onClick={() => toast.info('Like functionality coming soon!')}
                            >
                              <FaThumbsUp size={18} />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              )
            ))}
          </>
        )}  
      </div>
    </div>
  );
}

export default Your_Collections;