
// import React, { useState, useEffect,useRef } from 'react';
// import { FaBook, FaInfoCircle, FaHome, FaUser, FaArrowCircleUp,FaPen } from 'react-icons/fa';
// import { Link } from 'react-router-dom';
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { motion } from "framer-motion";
// import { FaSearch } from "react-icons/fa";
// import { FiUpload } from 'react-icons/fi';
// import ReactQuill from 'react-quill';
// import 'react-quill/dist/quill.snow.css';


// function January() {
//     const [selectedDay, setSelectedDay] = useState('');
//     const [motivateImage, setMotivateImage] = useState(null);
//     const [motivateText, setMotivateText] = useState("");    
//     const [isWriting, setIsWriting] = useState(false);  
//     const [startImage, setStartImage] = useState(null);
//     const [finishImage, setFinishImage] = useState(null);
//     const [isExpanded, setIsExpanded] = useState(false);
//     const [query, setQuery] = useState("");
//     const [image1, setImage1] = useState(null);
//     const [image2, setImage2] = useState(null);
//     const [image3, setImage3] = useState(null);
//     const [image4, setImage4] = useState(null);
//     // const [artStoryState, setArtStoryState] = useState(null);
// const [artStory,setArtStory]= useState(null)
// // const [artStoryState, setArtStoryState] = useState(EditorState.createEmpty());

//      useEffect(() => {
//         AOS.init({ duration: 800 });
//       }, [])

//       const [image, setImage] = useState(null);

//       const handleImageChange = (event) => {
//           const file = event.target.files[0];
//           if (file) {
//               setImage(URL.createObjectURL(file)); // Create preview
//           }
//       };
  
//       const handleUploadClick = () => {
//           document.getElementById('fileInput').click();
//       };

//       const handleMotivateImageChange = (event) => {
//         const file = event.target.files[0];
//         if (file && file.type.startsWith("image/")) {
//             setMotivateImage(URL.createObjectURL(file)); // Show image preview
//             setIsWriting(false); // Disable writing mode
//             setMotivateText(""); // Clear text if switching to image
//         } else {
//             alert("Please upload an image file (JPG, PNG, GIF, etc.)");
//         }
//     };

//     const handleMotivateUploadClick = () => {
//         document.getElementById("motivateFileInput").click();
//     };

//     const handleStartImageChange = (e) => {
//         const file = e.target.files[0];
//         if (file) {
//             setStartImage(URL.createObjectURL(file));
//         }
//     };

//     // Handles image selection for "How It Finished"
//     const handleFinishImageChange = (e) => {
//         const file = e.target.files[0];
//         if (file) {
//             setFinishImage(URL.createObjectURL(file));
//         }
//     };

//     return (
//         <div className='min-h-screen max-w-screen bg-gradient-to-br from-gray-700 via-gray-500 to-gray-600 flex flex-col items-center justify-between pb-8 overflow-x-hidden'>

//             {/* HEADER / NAVBAR */}
//                 <header className="w-full h-[100px] bg-gray-800/50 backdrop-blur-md flex items-center justify-between px-4 md:px-6 shadow-lg text-white fixed top-0 z-50">
//       {/* Title */}
//       <h1 className="text-[22px] sm:text-[28px] md:text-[32px] font-bold font-Eagle">
//         Painters' Diary
//       </h1>

//       {/* Navigation + Search */}
//       <div className="flex items-center gap-x-3">
//         {/* Animated Search Bar */}
//         <motion.div
//           className="flex items-center bg-white/50 backdrop-blur-md border border-gray-300 rounded-md shadow-md overflow-hidden"
//           initial={{ width: "40px" }}
//           animate={{ width: isExpanded ? "200px" : "40px" }}
//           transition={{ duration: 0.3, ease: "easeInOut" }}
//         >
//           <motion.input
//             type="text"
//             value={query}
//             onChange={(e) => setQuery(e.target.value)}
//             className={`px-4 py-2 w-full outline-none text-gray-500 bg-transparent ${
//               isExpanded ? "block" : "hidden"
//             }`}
//             placeholder="Search..."
//           />
//           <motion.button
//             onClick={() => setIsExpanded(!isExpanded)}
//             className="p-2 text-gray-600 hover:text-gray-800"
//             whileTap={{ scale: 0.9 }}
//           >
//             <FaSearch />
//           </motion.button>
//         </motion.div>

//         {/* Menu Buttons */}
//         <Link to={"/"}>
//           <button className="px-3 py-1 bg-gray-700 hover:bg-gray-600 rounded-md text-white border border-gray-400 text-[16px] flex items-center gap-1">
//             <FaHome className="text-lg sm:hidden" />
//             <span className="hidden sm:inline">Home</span>
//           </button>
//         </Link>
//         <Link to={"/About"}>
//           <button className="px-3 py-1 bg-gray-700 hover:bg-gray-600 rounded-md text-white border border-gray-400 text-[16px] flex items-center gap-1">
//             <FaInfoCircle className="text-lg sm:hidden" />
//             <span className="hidden sm:inline">About</span>
//           </button>
//         </Link>
//         <Link to={"/Account"}>
//           <button className="px-3 py-1 bg-gray-700 hover:bg-gray-600 rounded-md text-white border border-gray-400 text-[16px] flex items-center gap-1">
//             <FaUser className="text-lg sm:hidden" />
//             <span className="hidden sm:inline">Account</span>
//           </button>
//         </Link>
//         <Link to={"/Diary"}>
//           <button className="px-3 py-1 bg-gray-700 hover:bg-gray-600 rounded-md text-white border border-gray-400 text-[16px] flex items-center gap-1">
//             <FaBook className="text-lg sm:hidden" />
//             <span className="hidden sm:inline">Diary</span>
//           </button>
//         </Link>
//       </div>
//     </header>

//             {/* MAIN CONTENT */}
//             <main className='lg:w-[80%] w-[92%] bg-gray-500 rounded-md border border-gray-400 mt-[150px] overflow-hidden lg:p-6 p-2 text-white'>

//                 {/* Title and Date Inputs */}
//                 <div className='w-full flex items-center justify-between lg:px-6 px-2 flex-wrap animate-fadeIn'>
//                     <div>
//                         <h1 className='md:text-[25px] text-[20px] font-Playfair font-semibold'>Title</h1>
//                         <input className='w-full h-10 bg-gray-700 border border-gray-600 rounded-md px-4 py-2 outline-none text-white font-serif' type="text" />
//                     </div>
//                     <div>
//                         <h1 className='md:text-[25px] text-[20px] font-Playfair font-semibold'>Date</h1>
//                         <input className='w-full h-10 bg-gray-700 border border-gray-600 rounded-md px-4 py-2 outline-none text-white font-serif' type="date" />
//                     </div>
//                     <div>
//                         <h1 className='md:text-[25px] text-[20px] font-Playfair font-semibold'>Day</h1>
//                         <select className='w-full h-10 bg-gray-700 border border-gray-600 rounded-md px-4 py-2 outline-none text-white font-serif'
//                             id="day"
//                             value={selectedDay}
//                             onChange={(e) => setSelectedDay(e.target.value)}>
//                             <option value="">Select a day</option>
//                             <option value="sunday">Sunday</option>
//                             <option value="monday">Monday</option>
//                             <option value="tuesday">Tuesday</option>
//                             <option value="wednesday">Wednesday</option>
//                             <option value="thursday">Thursday</option>
//                             <option value="friday">Friday</option>
//                             <option value="saturday">Saturday</option>
//                         </select>
//                     </div>
//                 </div>

//                 {/* Image Section */}
           
//                 {/* // Replace the existing Image Section with this: */}
// <section className='h-[300px] w-[100%] mt-8 flex gap-x-4 overflow-x-scroll justify-between hide-scrollbar animate-fadeIn px-6'>
//     {/* Image 1 */}
//     <div className='lg:w-[300px] w-[250px] min-w-[250px] h-full rounded-md bg-black/15 backdrop-blur-lg border border-stone-400 relative overflow-hidden'>
//         {image1 ? (
//             <img src={image1} alt="Image 1" className="w-full h-full object-cover" />
//         ) : (
//             <p className="text-white font-Playfair absolute top-2 left-2">No image uploaded</p>
//         )}
//         <input 
//             type="file" 
//             id="image1Input" 
//             className="hidden" 
//             accept="image/*" 
//             onChange={(e) => {
//                 const file = e.target.files[0];
//                 if (file) setImage1(URL.createObjectURL(file));
//             }} 
//         />
//         <div 
//             className='h-[30px] w-[30px] flex items-center justify-center absolute top-2 right-2 rounded-md text-white cursor-pointer hover:text-red-200'
//             onClick={() => document.getElementById('image1Input').click()}
//         >
//             <FiUpload className='text-[18px]' />
//         </div>
//     </div>

//     {/* Image 2 */}
//     <div className='lg:w-[300px] w-[250px] min-w-[250px] h-full rounded-md bg-black/15 backdrop-blur-lg border border-stone-400 relative overflow-hidden'>
//         {image2 ? (
//             <img src={image2} alt="Image 2" className="w-full h-full object-cover" />
//         ) : (
//             <p className="text-white font-Playfair absolute top-2 left-2">No image uploaded</p>
//         )}
//         <input 
//             type="file" 
//             id="image2Input" 
//             className="hidden" 
//             accept="image/*" 
//             onChange={(e) => {
//                 const file = e.target.files[0];
//                 if (file) setImage2(URL.createObjectURL(file));
//             }} 
//         />
//         <div 
//             className='h-[30px] w-[30px] flex items-center justify-center absolute top-2 right-2 text-white  cursor-pointer hover:text-red-200'
//             onClick={() => document.getElementById('image2Input').click()}
//         >
//             <FiUpload className='text-[18px]' />
//             </div>
//     </div>

//     {/* Image 3 */}
//     <div className='lg:w-[300px] w-[250px] min-w-[250px] h-full rounded-md bg-black/15 backdrop-blur-lg border border-stone-400 relative overflow-hidden'>
//         {image3 ? (
//             <img src={image3} alt="Image 3" className="w-full h-full object-cover" />
//         ) : (
//             <p className="text-white font-Playfair absolute top-2 left-2">No image uploaded</p>
//         )}
//         <input 
//             type="file" 
//             id="image3Input" 
//             className="hidden" 
//             accept="image/*" 
//             onChange={(e) => {
//                 const file = e.target.files[0];
//                 if (file) setImage3(URL.createObjectURL(file));
//             }} 
//         />
//         <div 
//             className='h-[30px] w-[30px] flex items-center justify-center absolute top-2 right-2 rounded-md text-white cursor-pointer hover:text-red-200'
//             onClick={() => document.getElementById('image3Input').click()}
//         >
//             <FiUpload className='text-[18px]' />
//             </div>
//     </div>

//     {/* Image 4 */}
//     <div className='lg:w-[300px] w-[250px] min-w-[250px] h-full rounded-md bg-black/15 backdrop-blur-lg border border-stone-400 relative overflow-hidden'>
//         {image4 ? (
//             <img src={image4} alt="Image 4" className="w-full h-full object-cover" />
//         ) : (
//             <p className="text-white font-Playfair absolute top-2 left-2">No image uploaded</p>
//         )}
//         <input 
//             type="file" 
//             id="image4Input" 
//             className="hidden" 
//             accept="image/*" 
//             onChange={(e) => {
//                 const file = e.target.files[0];
//                 if (file) setImage4(URL.createObjectURL(file));
//             }} 
//         />
//         <div 
//             className='h-[30px] w-[30px] flex items-center justify-center absolute top-2 right-2 rounded-md text-white cursor-pointer hover:text-red-200'
//             onClick={() => document.getElementById('image4Input').click()}
//         >
//             <FiUpload className='text-[18px]' />
//             </div>
//     </div>
// </section>
//     {/* Stories and Progress Section */}
//     <div className="container mx-auto p-6">
//    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">       
//    <section data-aos="fade-up" className="bg-gray-700/50 p-4  rounded-md h-[500px] overflow-hidden animate-fadeIn">
//     <h1 className="text-[30px] font-serif">Art Stories</h1>
//   <ReactQuill
//     theme="snow"
//     value={artStory}
//     onChange={setArtStory}
//     className=" h-[85%] rounded-md mt-4 text-gray-900 bg-[#faf3e0]"
//     placeholder="Write your notes here..."
//   />
// </section>
//                         <section data-aos="fade-up" className="lg:col-span-2 bg-gray-700/50 p-4 border border-gray-400 rounded-md flex items-center justify-center h-[500px] sm:h-auto sm:row-span-2 lg:row-span-1 lg:h-[500px] animate-fadeIn">
//                             <div  className="w-full h-full flex flex-col lg:flex-row gap-4 items-center sm:overflow-hidden overflow-y-scroll ">

//                             {/* Left Box */}
//                             <div className=" w-[90%] lg:w-1/2 min-h-[452px] sm:h-[420px] h-[90%] bg-black/30 rounded-md border border-gray-400"></div>
//                             {/* Right Box */}
//                             <div className=" w-[90%] lg:w-1/2 min-h-[452px] sm:h-[420px] h-[90%] bg-black/30 rounded-md border border-gray-400"></div>
//                         </div>
//                         </section>

//                         <section data-aos="fade-up" className="bg-gray-700/50 p-4 border border-gray-400 rounded-md h-[500px] animate-fadeIn items-center flex flex-col">
//                             <h1 className="text-[30px] font-serif">Stories of Progress</h1>
//                             <div className=' w-[90%] h-full flex flex-col items-center gap-2 mt-4'>
//                                 {/* the image upload part */}
//                                 <div className='w-full h-[60%] max-h-[300px] bg-black/30 rounded-md relative border border-gray-400 overflow-hidden'>
//                                     {/* Display Uploaded Image */}
//                                     {image ? (
//                                    <img src={image} alt="Uploaded" className="w-full h-full object-cover" />
//                                     ) : (
//                                   <p className="text-white font-Playfair pl-4 pt-3">No image uploaded</p>
//                                   )}
//                                      {/* Hidden File Input */}
//                                  <input 
//                                  type="file" 
//                                  id="fileInput" 
//                                  className="hidden" 
//                                  accept="image/*" 
//                                  onChange={handleImageChange} 
//                                 />

//                               {/* Upload Button */}
//                               <div 
//                               className='h-[30px] w-[30px] flex items-center justify-center absolute top-2 right-2 bg-black/50 rounded-md text-white border border-gray-400 cursor-pointer hover:text-red-200'
//                                onClick={handleUploadClick}
//                                    >
//                                  <FaArrowCircleUp className='text-[20px]' />
//                                  </div>
//                             </div>    
            
          
//                                 <div className='w-full h-[40%] bg-black rounded-md'>
//                                 <textarea 
//                             className="w-full h-full bg-[#FAF3E0] border border-gray-400 rounded-md px-4 py-2 outline-none font-serif
//                             shadow-md resize-none leading-relaxed text-gray-900 
//                              relative before:content-[''] before:absolute before:top-0 before:left-6 before:h-full 
//                              before:w-[1px] before:bg-red-500"
//                              placeholder="Your Tips & Trics for others..."
//                             ></textarea>
//                                 </div>
//                             </div>
//                         </section>
//                     </div>

//                     {/* Bottom Section */}
//                     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
//                         {/* tips and trics */}
//                         <section data-aos="fade-up"  className="bg-gray-700/50 p-4 border border-gray-400 rounded-md h-[350px]">
//                             <h1 className="text-lg font-Playfair">Tips & Tricks</h1>
//                             <div className='w-full h-[85%]'>
//                             <textarea 
//                             className="w-full h-full mt-4 bg-[#FAF3E0] border border-gray-400 rounded-md px-4 py-2 outline-none font-serif
//                             shadow-md resize-none leading-relaxed text-gray-900 
//                              relative before:content-[''] before:absolute before:top-0 before:left-6 before:h-full 
//                              before:w-[1px] before:bg-red-500"
//                              placeholder="Your Tips & Trics for others..."
//                             ></textarea>
//                             </div>
//                         </section>
//                         {/* the before and after section */}
                      
//                          <section 
//             data-aos="fade-up" 
//             className="bg-gray-700/50 lg:col-span-2 p-4 border border-gray-400 rounded-md h-[350px] 
//             sm:h-auto sm:row-span-2 lg:row-span-1 lg:h-[350px] flex justify-between lg:flex-row flex-col 
//             lg:gap-2 gap-4 items-center sm:overflow-hidden overflow-y-scroll hide-scrollbar"
//             >
//             {/* Left Box - How It Started */}
//             <div className='lg:w-[50%] w-[95%] min-h-[300px] sm:h-[300px] bg-[#3B1C32] rounded-lg overflow-hidden relative flex flex-col'>
//                 <div className='flex items-center justify-between mt-3 px-4'>
//                     <h1 className='text-[23px] font-semibold font-Playfair'>How It Started..</h1>
                    
//                     {/* Upload Button */}
//                     <div 
//                         className='h-[30px] w-[30px] rounded-md bg-black/50 border border-zinc-400 cursor-pointer flex items-center justify-center'
//                         onClick={() => document.getElementById("startImageInput").click()}
//                     >
//                         <FaArrowCircleUp className='text-[20px] text-white hover:text-[#f897dc]'/>
//                     </div>
                    
//                     {/* Hidden File Input */}
//                     <input 
//                         type="file" 
//                         id="startImageInput" 
//                         className="hidden" 
//                         accept="image/*" 
//                         onChange={handleStartImageChange} 
//                     />
//                 </div>

//                 {/* Image Display Box */}
//                 <div className='w-[90%] h-[75%] bg-white/20 rounded-md relative border border-gray-400 overflow-hidden mx-auto mt-3 flex items-center justify-center'>
//                     {startImage ? (
//                         <img src={startImage} alt="How It Started" className="w-full h-full object-cover" />
//                     ) : (
//                         <p className="text-white text-center font-serif">Upload the starting image</p>
//                     )}
//                 </div>
//             </div>

//             {/* Right Box - How It Finished */}
//             <div className='lg:w-[50%] w-[95%] min-h-[300px] lg:h-[290px] bg-[#301B3F] rounded-lg overflow-hidden relative flex flex-col'>
//                 <div className='flex items-center justify-between mt-3 px-4 w-full'>
//                     <h1 className='text-[23px] font-semibold font-Playfair'>How It Finished..</h1>

//                     {/* Upload Button */}
//                     <div 
//                         className='h-[30px] w-[30px] rounded-md bg-black/50 border border-zinc-400 cursor-pointer flex items-center justify-center'
//                         onClick={() => document.getElementById("finishImageInput").click()}
//                     >
//                         <FaArrowCircleUp className='text-[20px] text-white hover:text-[#c57cfa]'/>
//                     </div>

//                     {/* Hidden File Input */}
//                     <input 
//                         type="file" 
//                         id="finishImageInput" 
//                         className="hidden" 
//                         accept="image/*" 
//                         onChange={handleFinishImageChange} 
//                     />
//                 </div>

//                 {/* Image Display Box */}
//                 <div className='w-[90%] h-[75%] bg-white/20 rounded-md relative border border-gray-400 overflow-hidden mx-auto mt-3 flex items-center justify-center'>
//                     {finishImage ? (
//                         <img src={finishImage} alt="How It Finished" className="w-full h-full object-cover" />
//                     ) : (
//                         <p className="text-white text-center font-serif">Upload the ending image</p>
//                     )}
//                 </div>
//             </div>
//         </section>

//                         {/* motivate section  */}
//                <section 
//             data-aos="fade-up" 
//             className="bg-gray-700/50 lg:p-4 sm:p-2 p-1 border border-gray-400 rounded-md h-[350px] w-full mx-auto flex flex-col items-center">
            
//             <h1 className="text-lg font-Playfair text-center sm:text-left">
//                 Motivate with your thought..
//             </h1>

//             {/* Unified Box for Image or Text */}
//             <div 
//                 className="w-[90%] h-[80%] mt-4 bg-black/30 rounded-md relative border border-gray-400 overflow-hidden flex justify-center items-center"
//             >
//                 {isWriting ? (
//                     // Text Area Mode
//                     <textarea 
//                         className="w-full h-full p-2 bg-transparent text-white border-none resize-none focus:outline-none"
//                         placeholder="Write your motivational thought here..."
//                         value={motivateText}
//                         onChange={(e) => setMotivateText(e.target.value)}
//                         autoFocus
//                     ></textarea>
//                 ) : motivateImage ? (
//                     // Image Mode
//                     <img src={motivateImage} alt="Uploaded" className="w-full h-full object-cover" />
//                 ) : (
//                     // Default Message
//                     <p className="text-white font-Playfair pl-4 pt-3">Upload an image or write your thoughts</p>
//                 )}
//             </div>

//             {/* Hidden File Input */}
//             <input 
//                 type="file" 
//                 id="motivateFileInput" 
//                 className="hidden" 
//                 accept="image/*" 
//                 onChange={handleMotivateImageChange} 
//             />

//             {/* Upload & Write Buttons */}
//             <div className="flex gap-4 mt-2">
//                 {/* Upload Button */}
//                 <div 
//                     className='h-[30px] w-[30px] flex items-center justify-center bg-black/50 rounded-md text-white border border-gray-400 cursor-pointer hover:text-red-200'
//                     onClick={handleMotivateUploadClick}
//                 >
//                     <FaArrowCircleUp className='text-[20px]' />
//                 </div>

//                 {/* Write Button */}
//                 <div 
//                     className='h-[30px] w-[30px] flex items-center justify-center bg-black/50 rounded-md text-white border border-gray-400 cursor-pointer hover:text-red-200'
//                     onClick={() => {
//                         setIsWriting(true);
//                         setMotivateImage(null); // Remove image if switching to writing mode
//                     }}
//                 >
//                     <FaPen className='text-[18px]' />
//                 </div>
//             </div>
//         </section>
//                     </div>
//                 </div>
 
//                 {/* Submit Button */}
//                 <div className='flex justify-center mt-4'>
//                     <button className='w-1/4 md:w-1/5 lg:w-1/6 h-10 bg-zinc-700 border border-gray-300 hover:bg-zinc-600 text-white rounded-md font-Playfair text-[20px] font-medium mt-4'>
//                         Save
//                     </button>
//                 </div>
//             </main>
//         </div>
//     );
// }

// export default January; 

import React, { useState, useEffect } from 'react';
import { FaBook, FaInfoCircle, FaHome, FaUser, FaArrowCircleUp, FaPen, FaSearch, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { FiUpload } from 'react-icons/fi';
import {HiArrowSmallRight,HiArrowSmallLeft} from 'react-icons/hi2'
import { Link } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";


function January() {
  const [diaryEntries, setDiaryEntries] = useState(() => JSON.parse(localStorage.getItem('diaryEntries')) || []);
  const [currentPage, setCurrentPage] = useState(0);

  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [selectedDay, setSelectedDay] = useState('');
  const [motivateImage, setMotivateImage] = useState(null);
  const [motivateText, setMotivateText] = useState("");
  const [isWriting, setIsWriting] = useState(false);
  const [startImage, setStartImage] = useState(null);
  const [finishImage, setFinishImage] = useState(null);
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [image3, setImage3] = useState(null);
  const [image4, setImage4] = useState(null);
  const [artStory, setArtStory] = useState("");
  const [progressImage, setProgressImage] = useState(null);
  const [progressText, setProgressText] = useState("");
  const [tipsText, setTipsText] = useState("");

  const [isExpanded, setIsExpanded] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    AOS.init({ duration: 800 });
    localStorage.setItem('diaryEntries', JSON.stringify(diaryEntries));
  }, [diaryEntries]);

  const handleShare = async () => {
    const shareData = {
      title: title || "Check out this artwork!",
      text: "I found this amazing artwork on Painters' Diary. Take a look!",
      url: window.location.href,
    };
    try {
      if (!navigator.share) {
        const fallbackMessage = `${shareData.title}\n${shareData.text}\n${shareData.url}`;
        await navigator.clipboard.writeText(fallbackMessage);
        alert("Share not supported. Link copied to clipboard instead!");
        return;
      }
      await navigator.share(shareData);
      console.log("Shared successfully!");
    } catch (error) {
      if (error.name !== "AbortError") {
        console.error("Sharing failed:", error);
        try {
          await navigator.clipboard.writeText(`${shareData.title}\n${shareData.text}\n${shareData.url}`);
          alert("Sharing failed, but the link was copied to your clipboard!");
        } catch (clipError) {
          alert("Sharing unavailable. Please copy the URL manually: " + shareData.url);
        }
      }
    }
  };

  const saveEntry = () => {
    if (!title || !date) {
      alert("Please enter a title and date!");
      return;
    }
    const newEntry = {
      title,
      date,
      day: selectedDay,
      motivateImage,
      motivateText,
      startImage,
      finishImage,
      image1,
      image2,
      image3,
      image4,
      artStory,
      progressImage,
      progressText,
      tipsText,
    };
    setDiaryEntries([...diaryEntries, newEntry]);
    resetForm();
  };

  const resetForm = () => {
    setTitle('');
    setDate('');
    setSelectedDay('');
    setMotivateImage(null);
    setMotivateText("");
    setIsWriting(false);
    setStartImage(null);
    setFinishImage(null);
    setImage1(null);
    setImage2(null);
    setImage3(null);
    setImage4(null);
    setArtStory("");
    setProgressImage(null);
    setProgressText("");
    setTipsText("");
  };

  const goToPrevious = () => setCurrentPage(Math.max(0, currentPage - 1));
  const goToNext = () => setCurrentPage(Math.min(diaryEntries.length, currentPage + 1));

  const currentEntry = diaryEntries[currentPage] || {};

  const handleImageChange = (setter) => (e) => {
    const file = e.target.files[0];
    if (file) setter(URL.createObjectURL(file));
  };

  const handleMotivateImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setMotivateImage(URL.createObjectURL(file));
      setIsWriting(false);
      setMotivateText("");
    } else {
      alert("Please upload an image file!");
    }
  };

  const pageVariants = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
  };

  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-700 via-gray-500 to-gray-600 flex flex-col items-center justify-between pb-8 overflow-x-hidden'>
      {/* HEADER / NAVBAR */}
      <header className="w-full h-[100px] bg-gray-800/50 backdrop-blur-md flex items-center justify-between px-4 md:px-6 shadow-lg text-white fixed top-0 z-50">
        <h1 className="text-[22px] sm:text-[28px] md:text-[32px] font-bold font-Eagle">Painters' Diary</h1>
        <div className="flex items-center gap-x-3">
          <motion.div
            className="flex items-center bg-white/50 backdrop-blur-md border border-gray-300 rounded-md shadow-md overflow-hidden"
            initial={{ width: "40px" }}
            animate={{ width: isExpanded ? "200px" : "40px" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <motion.input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className={`px-4 py-2 w-full outline-none text-gray-500 bg-transparent ${isExpanded ? "block" : "hidden"}`}
              placeholder="Search..."
            />
            <motion.button onClick={() => setIsExpanded(!isExpanded)} className="p-2 text-gray-600 hover:text-gray-800" whileTap={{ scale: 0.9 }}>
              <FaSearch />
            </motion.button>
          </motion.div>
          <Link to={"/"}><button className="px-3 py-1 bg-gray-700 hover:bg-gray-600 rounded-md text-white border border-gray-400 text-[16px] flex items-center gap-1"><FaHome className="text-lg sm:hidden" /><span className="hidden sm:inline">Home</span></button></Link>
          <Link to={"/About"}><button className="px-3 py-1 bg-gray-700 hover:bg-gray-600 rounded-md text-white border border-gray-400 text-[16px] flex items-center gap-1"><FaInfoCircle className="text-lg sm:hidden" /><span className="hidden sm:inline">About</span></button></Link>
          <Link to={"/Account"}><button className="px-3 py-1 bg-gray-700 hover:bg-gray-600 rounded-md text-white border border-gray-400 text-[16px] flex items-center gap-1"><FaUser className="text-lg sm:hidden" /><span className="hidden sm:inline">Account</span></button></Link>
          <Link to={"/Diary"}><button className="px-3 py-1 bg-gray-700 hover:bg-gray-600 rounded-md text-white border border-gray-400 text-[16px] flex items-center gap-1"><FaBook className="text-lg sm:hidden" /><span className="hidden sm:inline">Diary</span></button></Link>
        </div>
      </header>

      {/* MAIN CONTENT WITH NAVIGATION */}
      <div className="relative w-full flex items-center justify-center mt-[150px] px-4">
        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          disabled={currentPage === 0}
          className="absolute left-0 lg:left-[8%] text-xl text-white hover:text-gray-300 disabled:opacity-50 z-10 border p-1 rounded-md"
        >
        <HiArrowSmallLeft/>
        </button>

        {/* Main Content */}
        <motion.main
          key={currentPage}
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.5 }}
          className="lg:w-[80%] w-[92%] bg-gray-500 rounded-md border border-gray-400 overflow-hidden lg:p-6 p-2 text-white"
        >
          {/* Title and Date Inputs */}
          <div className="w-full flex items-center justify-between lg:px-6 px-2 flex-wrap animate-fadeIn">
            <div>
              <h1 className="md:text-[25px] text-[20px] font-Playfair font-semibold">Title</h1>
              <input className="w-full h-10 bg-gray-700 border border-gray-600 rounded-md px-4 py-2 outline-none text-white font-serif" type="text" value={currentEntry.title || title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div>
              <h1 className="md:text-[25px] text-[20px] font-Playfair font-semibold">Date</h1>
              <input className="w-full h-10 bg-gray-700 border border-gray-600 rounded-md px-4 py-2 outline-none text-white font-serif" type="date" value={currentEntry.date || date} onChange={(e) => setDate(e.target.value)} />
            </div>
            <div>
              <h1 className="md:text-[25px] text-[20px] font-Playfair font-semibold">Day</h1>
              <select className="w-full h-10 bg-gray-700 border border-gray-600 rounded-md px-4 py-2 outline-none text-white font-serif" value={currentEntry.day || selectedDay} onChange={(e) => setSelectedDay(e.target.value)}>
                <option value="">Select a day</option>
                {["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"].map(day => <option key={day} value={day}>{day.charAt(0).toUpperCase() + day.slice(1)}</option>)}
              </select>
            </div>
          </div>

          {/* Image Section */}
          <section className="h-[300px] w-[100%] mt-8 flex gap-x-4 overflow-x-scroll justify-between hide-scrollbar animate-fadeIn px-6">
            {[1, 2, 3, 4].map(num => (
              <div key={num} className="lg:w-[300px] w-[250px] min-w-[250px] h-full rounded-md bg-black/15 backdrop-blur-lg border border-stone-400 relative overflow-hidden">
                {eval(`currentEntry.image${num} || image${num}`) ? (
                  <img src={eval(`currentEntry.image${num} || image${num}`)} alt={`Image ${num}`} className="w-full h-full object-cover" />
                ) : (
                  <p className="text-white font-Playfair absolute top-2 left-2">No image uploaded</p>
                )}
                <input type="file" id={`image${num}Input`} className="hidden" accept="image/*" onChange={handleImageChange(eval(`setImage${num}`))} />
                <div className="h-[30px] w-[30px] flex items-center justify-center absolute top-2 right-2 rounded-md text-white cursor-pointer hover:text-red-200" onClick={() => document.getElementById(`image${num}Input`).click()}>
                  <FiUpload className="text-[18px]" />
                </div>
              </div>
            ))}
          </section>

          {/* Stories and Progress Section */}
          <div className="container mx-auto p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <section data-aos="fade-up" className="bg-gray-700/50 p-4 rounded-md h-[500px] overflow-hidden animate-fadeIn">
                <h1 className="text-[30px] font-serif">Art Stories</h1>
                {/* <ReactQuill theme="snow" value={currentEntry.artStory || artStory} onChange={setArtStory} className="h-[85%] rounded-md mt-4 text-gray-900 bg-[#faf3e0]" placeholder="Write your notes here..." /> */}
              </section>
              <section data-aos="fade-up" className="lg:col-span-2 bg-gray-700/50 p-4 border border-gray-400 rounded-md flex items-center justify-center h-[500px] sm:h-auto sm:row-span-2 lg:row-span-1 lg:h-[500px] animate-fadeIn">
                <div className="w-full h-full flex flex-col lg:flex-row gap-4 items-center sm:overflow-hidden overflow-y-scroll">
                  <div className="w-[90%] lg:w-1/2 min-h-[452px] sm:h-[420px] h-[90%] bg-black/30 rounded-md border border-gray-400"></div>
                  <div className="w-[90%] lg:w-1/2 min-h-[452px] sm:h-[420px] h-[90%] bg-black/30 rounded-md border border-gray-400"></div>
                </div>
              </section>
              <section data-aos="fade-up" className="bg-gray-700/50 p-4 border border-gray-400 rounded-md h-[500px] animate-fadeIn items-center flex flex-col">
                <h1 className="text-[30px] font-serif">Stories of Progress</h1>
                <div className="w-[90%] h-full flex flex-col items-center gap-2 mt-4">
                  <div className="w-full h-[60%] max-h-[300px] bg-black/30 rounded-md relative border border-gray-400 overflow-hidden">
                    {currentEntry.progressImage || progressImage ? (
                      <img src={currentEntry.progressImage || progressImage} alt="Uploaded" className="w-full h-full object-cover" />
                    ) : (
                      <p className="text-white font-Playfair pl-4 pt-3">No image uploaded</p>
                    )}
                    <input type="file" id="progressFileInput" className="hidden" accept="image/*" onChange={handleImageChange(setProgressImage)} />
                    <div className="h-[30px] w-[30px] flex items-center justify-center absolute top-2 right-2 bg-black/50 rounded-md text-white border border-gray-400 cursor-pointer hover:text-red-200" onClick={() => document.getElementById('progressFileInput').click()}>
                      <FaArrowCircleUp className="text-[20px]" />
                    </div>
                  </div>
                  <div className="w-full h-[40%] bg-black rounded-md">
                    <textarea className="w-full h-full bg-[#FAF3E0] border border-gray-400 rounded-md px-4 py-2 outline-none font-serif shadow-md resize-none leading-relaxed text-gray-900" placeholder="Your Tips & Tricks for others..." value={currentEntry.progressText || progressText} onChange={(e) => setProgressText(e.target.value)}></textarea>
                  </div>
                </div>
              </section>
            </div>

            {/* Bottom Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
              <section data-aos="fade-up" className="bg-gray-700/50 p-4 border border-gray-400 rounded-md h-[350px]">
                <h1 className="text-lg font-Playfair">Tips & Tricks</h1>
                <div className="w-full h-[85%]">
                  <textarea className="w-full h-full mt-4 bg-[#FAF3E0] border border-gray-400 rounded-md px-4 py-2 outline-none font-serif shadow-md resize-none leading-relaxed text-gray-900" placeholder="Your Tips & Tricks for others..." value={currentEntry.tipsText || tipsText} onChange={(e) => setTipsText(e.target.value)}></textarea>
                </div>
              </section>
              <section data-aos="fade-up" className="bg-gray-700/50 lg:col-span-2 p-4 border border-gray-400 rounded-md h-[350px] sm:h-auto sm:row-span-2 lg:row-span-1 lg:h-[350px] flex justify-between lg:flex-row flex-col lg:gap-2 gap-4 items-center sm:overflow-hidden overflow-y-scroll hide-scrollbar">
                <div className="lg:w-[50%] w-[95%] min-h-[300px] sm:h-[300px] bg-[#3B1C32] rounded-lg overflow-hidden relative flex flex-col">
                  <div className="flex items-center justify-between mt-3 px-4">
                    <h1 className="text-[23px] font-semibold font-Playfair">How It Started..</h1>
                    <div className="h-[30px] w-[30px] rounded-md bg-black/50 border border-zinc-400 cursor-pointer flex items-center justify-center" onClick={() => document.getElementById("startImageInput").click()}>
                      <FaArrowCircleUp className="text-[20px] text-white hover:text-[#f897dc]" />
                    </div>
                    <input type="file" id="startImageInput" className="hidden" accept="image/*" onChange={handleImageChange(setStartImage)} />
                  </div>
                  <div className="w-[90%] h-[75%] bg-white/20 rounded-md relative border border-gray-400 overflow-hidden mx-auto mt-3 flex items-center justify-center">
                    {currentEntry.startImage || startImage ? (
                      <img src={currentEntry.startImage || startImage} alt="How It Started" className="w-full h-full object-cover" />
                    ) : (
                      <p className="text-white text-center font-serif">Upload the starting image</p>
                    )}
                  </div>
                </div>
                <div className="lg:w-[50%] w-[95%] min-h-[300px] lg:h-[290px] bg-[#301B3F] rounded-lg overflow-hidden relative flex flex-col">
                  <div className="flex items-center justify-between mt-3 px-4 w-full">
                    <h1 className="text-[23px] font-semibold font-Playfair">How It Finished..</h1>
                    <div className="h-[30px] w-[30px] rounded-md bg-black/50 border border-zinc-400 cursor-pointer flex items-center justify-center" onClick={() => document.getElementById("finishImageInput").click()}>
                      <FaArrowCircleUp className="text-[20px] text-white hover:text-[#c57cfa]" />
                    </div>
                    <input type="file" id="finishImageInput" className="hidden" accept="image/*" onChange={handleImageChange(setFinishImage)} />
                  </div>
                  <div className="w-[90%] h-[75%] bg-white/20 rounded-md relative border border-gray-400 overflow-hidden mx-auto mt-3 flex items-center justify-center">
                    {currentEntry.finishImage || finishImage ? (
                      <img src={currentEntry.finishImage || finishImage} alt="How It Finished" className="w-full h-full object-cover" />
                    ) : (
                      <p className="text-white text-center font-serif">Upload the ending image</p>
                    )}
                  </div>
                </div>
              </section>
              <section data-aos="fade-up" className="bg-gray-700/50 lg:p-4 sm:p-2 p-1 border border-gray-400 rounded-md h-[350px] w-full mx-auto flex flex-col items-center">
                <h1 className="text-lg font-Playfair text-center sm:text-left">Motivate with your thought..</h1>
                <div className="w-[90%] h-[80%] mt-4 bg-black/30 rounded-md relative border border-gray-400 overflow-hidden flex justify-center items-center">
                  {isWriting ? (
                    <textarea className="w-full h-full p-2 bg-transparent text-white border-none resize-none focus:outline-none" placeholder="Write your motivational thought here..." value={currentEntry.motivateText || motivateText} onChange={(e) => setMotivateText(e.target.value)} autoFocus></textarea>
                  ) : (currentEntry.motivateImage || motivateImage) ? (
                    <img src={currentEntry.motivateImage || motivateImage} alt="Uploaded" className="w-full h-full object-cover" />
                  ) : (
                    <p className="text-white font-Playfair pl-4 pt-3">Upload an image or write your thoughts</p>
                  )}
                </div>
                <input type="file" id="motivateFileInput" className="hidden" accept="image/*" onChange={handleMotivateImageChange} />
                <div className="flex gap-4 mt-2">
                  <div className="h-[30px] w-[30px] flex items-center justify-center bg-black/50 rounded-md text-white border border-gray-400 cursor-pointer hover:text-red-200" onClick={() => document.getElementById("motivateFileInput").click()}>
                    <FaArrowCircleUp className="text-[20px]" />
                  </div>
                  <div className="h-[30px] w-[30px] flex items-center justify-center bg-black/50 rounded-md text-white border border-gray-400 cursor-pointer hover:text-red-200" onClick={() => { setIsWriting(true); setMotivateImage(null); }}>
                    <FaPen className="text-[18px]" />
                  </div>
                </div>
              </section>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-center gap-4 mt-4">
            <button onClick={saveEntry} className="w-1/4 md:w-1/5 lg:w-1/6 h-10 bg-zinc-700 border border-gray-300 hover:bg-zinc-600 text-white rounded-md font-Playfair text-[20px] font-medium">Save</button>
            <button onClick={handleShare} className="w-1/4 md:w-1/5 lg:w-1/6 h-10 bg-zinc-700 border border-gray-300 hover:bg-zinc-600 text-white rounded-md font-Playfair text-[20px] font-medium">Share</button>
          </div>
        </motion.main>

        <button
          onClick={goToNext}
          disabled={currentPage === diaryEntries.length}
          className="absolute right-0 lg:right-[8%] text-xl text-white hover:text-gray-300 disabled:opacity-50 z-10 border p-1 rounded-md"
        >
          <HiArrowSmallRight/>
        </button>
      </div>
    </div>
  );
}

export default January;

// import React, { useState, useEffect } from 'react';
// import { FaBook, FaInfoCircle, FaHome, FaUser, FaArrowCircleUp, FaPen, FaSearch } from 'react-icons/fa';
// import { FiUpload } from 'react-icons/fi';
// import { HiArrowSmallRight, HiArrowSmallLeft } from 'react-icons/hi2';
// import { Link } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import ReactQuill from 'react-quill';
// // import 'react-quill/dist/quill.snow.css';

// function January() {
//   const [diaryEntries, setDiaryEntries] = useState(() => JSON.parse(localStorage.getItem('diaryEntries')) || []);
//   const [currentPage, setCurrentPage] = useState(0);

//   const [title, setTitle] = useState('');
//   const [date, setDate] = useState('');
//   const [selectedDay, setSelectedDay] = useState('');
//   const [artStory, setArtStory] = useState('');
//   const [isExpanded, setIsExpanded] = useState(false);
//   const [query, setQuery] = useState('');

//   useEffect(() => {
//     localStorage.setItem('diaryEntries', JSON.stringify(diaryEntries));
//   }, [diaryEntries]);

//   const saveEntry = () => {
//     if (!title || !date) {
//       alert('Please enter a title and date!');
//       return;
//     }
//     const newEntry = { title, date, day: selectedDay, artStory };
//     setDiaryEntries([...diaryEntries, newEntry]);
//     resetForm();
//   };

//   const resetForm = () => {
//     setTitle('');
//     setDate('');
//     setSelectedDay('');
//     setArtStory('');
//   };

//   const goToPrevious = () => setCurrentPage(Math.max(0, currentPage - 1));
//   const goToNext = () => setCurrentPage(Math.min(diaryEntries.length, currentPage + 1));

//   const currentEntry = diaryEntries[currentPage] || {};

//   const pageVariants = {
//     initial: { opacity: 0, x: 100 },
//     animate: { opacity: 1, x: 0 },
//     exit: { opacity: 0, x: -100 },
//   };

//   // Quill modules and formats
//   const quillModules = {
//     toolbar: [
//       [{ header: [1, 2, false] }],
//       ['bold', 'italic', 'underline'],
//       ['image', 'code-block'],
//       [{ list: 'ordered' }, { list: 'bullet' }],
//     ],
//   };

//   const quillFormats = [
//     'header',
//     'bold',
//     'italic',
//     'underline',
//     'image',
//     'code-block',
//     'list',
//     'bullet',
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-700 via-gray-500 to-gray-600 flex flex-col items-center justify-between pb-8 overflow-x-hidden">
//       {/* HEADER / NAVBAR */}
//       <header className="w-full h-[100px] bg-gray-800/50 backdrop-blur-md flex items-center justify-between px-4 md:px-6 shadow-lg text-white fixed top-0 z-50">
//         <h1 className="text-[22px] sm:text-[28px] md:text-[32px] font-bold">Painters' Diary</h1>
//         <div className="flex items-center gap-x-3">
//           <motion.div
//             className="flex items-center bg-white/50 backdrop-blur-md border border-gray-300 rounded-md shadow-md overflow-hidden"
//             initial={{ width: '40px' }}
//             animate={{ width: isExpanded ? '200px' : '40px' }}
//             transition={{ duration: 0.3, ease: 'easeInOut' }}
//           >
//             <motion.input
//               type="text"
//               value={query}
//               onChange={(e) => setQuery(e.target.value)}
//               className={`px-4 py-2 w-full outline-none text-gray-500 bg-transparent ${isExpanded ? 'block' : 'hidden'}`}
//               placeholder="Search..."
//             />
//             <motion.button onClick={() => setIsExpanded(!isExpanded)} className="p-2 text-gray-600 hover:text-gray-800" whileTap={{ scale: 0.9 }}>
//               <FaSearch />
//             </motion.button>
//           </motion.div>
//           <Link to="/">
//             <button className="px-3 py-1 bg-gray-700 hover:bg-gray-600 rounded-md text-white border border-gray-400 text-[16px] flex items-center gap-1">
//               <FaHome className="text-lg sm:hidden" />
//               <span className="hidden sm:inline">Home</span>
//             </button>
//           </Link>
//           <Link to="/About">
//             <button className="px-3 py-1 bg-gray-700 hover:bg-gray-600 rounded-md text-white border border-gray-400 text-[16px] flex items-center gap-1">
//               <FaInfoCircle className="text-lg sm:hidden" />
//               <span className="hidden sm:inline">About</span>
//             </button>
//           </Link>
//           <Link to="/Account">
//             <button className="px-3 py-1 bg-gray-700 hover:bg-gray-600 rounded-md text-white border border-gray-400 text-[16px] flex items-center gap-1">
//               <FaUser className="text-lg sm:hidden" />
//               <span className="hidden sm:inline">Account</span>
//             </button>
//           </Link>
//           <Link to="/Diary">
//             <button className="px-3 py-1 bg-gray-700 hover:bg-gray-600 rounded-md text-white border border-gray-400 text-[16px] flex items-center gap-1">
//               <FaBook className="text-lg sm:hidden" />
//               <span className="hidden sm:inline">Diary</span>
//             </button>
//           </Link>
//         </div>
//       </header>

//       {/* MAIN CONTENT WITH NAVIGATION */}
//       <div className="relative w-full flex items-center justify-center mt-[150px] px-4">
//         {/* Navigation Arrows */}
//         <button
//           onClick={goToPrevious}
//           disabled={currentPage === 0}
//           className="absolute left-0 lg:left-[8%] text-xl text-white hover:text-gray-300 disabled:opacity-50 z-10 border p-1 rounded-md"
//         >
//           <HiArrowSmallLeft />
//         </button>

//         {/* Main Content */}
//         <motion.main
//           key={currentPage}
//           variants={pageVariants}
//           initial="initial"
//           animate="animate"
//           exit="exit"
//           transition={{ duration: 0.5 }}
//           className="lg:w-[80%] w-[92%] bg-gray-500 rounded-md border border-gray-400 overflow-hidden lg:p-6 p-2 text-white"
//         >
//           {/* Title and Date Inputs */}
//           <div className="w-full flex items-center justify-between lg:px-6 px-2 flex-wrap">
//             <div>
//               <h1 className="md:text-[25px] text-[20px] font-semibold">Title</h1>
//               <input
//                 className="w-full h-10 bg-gray-700 border border-gray-600 rounded-md px-4 py-2 outline-none text-white"
//                 type="text"
//                 value={currentEntry.title || title}
//                 onChange={(e) => setTitle(e.target.value)}
//               />
//             </div>
//             <div>
//               <h1 className="md:text-[25px] text-[20px] font-semibold">Date</h1>
//               <input
//                 className="w-full h-10 bg-gray-700 border border-gray-600 rounded-md px-4 py-2 outline-none text-white"
//                 type="date"
//                 value={currentEntry.date || date}
//                 onChange={(e) => setDate(e.target.value)}
//               />
//             </div>
//             <div>
//               <h1 className="md:text-[25px] text-[20px] font-semibold">Day</h1>
//               <select
//                 className="w-full h-10 bg-gray-700 border border-gray-600 rounded-md px-4 py-2 outline-none text-white"
//                 value={currentEntry.day || selectedDay}
//                 onChange={(e) => setSelectedDay(e.target.value)}
//               >
//                 <option value="">Select a day</option>
//                 {['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'].map((day) => (
//                   <option key={day} value={day}>
//                     {day.charAt(0).toUpperCase() + day.slice(1)}
//                   </option>
//                 ))}
//               </select>
//             </div>
//           </div>

//           {/* Art Stories Section with React Quill */}
//           <section className="mt-8 bg-gray-700/50 p-4 rounded-md h-[500px] overflow-hidden">
//             <h1 className="text-[30px] font-serif">Art Stories</h1>
//             <ReactQuill
//               theme="snow"
//               value={currentEntry.artStory || artStory}
//               onChange={setArtStory}
//               modules={quillModules}
//               formats={quillFormats}
//               className="h-[85%] mt-4 bg-white text-black"
//               placeholder="Write your notes here..."
//             />
//           </section>

//           {/* Buttons */}
//           <div className="flex justify-center gap-4 mt-4">
//             <button
//               onClick={saveEntry}
//               className="w-1/4 md:w-1/5 lg:w-1/6 h-10 bg-zinc-700 border border-gray-300 hover:bg-zinc-600 text-white rounded-md text-[20px] font-medium"
//             >
//               Save
//             </button>
//           </div>
//         </motion.main>

//         <button
//           onClick={goToNext}
//           disabled={currentPage === diaryEntries.length}
//           className="absolute right-0 lg:right-[8%] text-xl text-white hover:text-gray-300 disabled:opacity-50 z-10 border p-1 rounded-md"
//         >
//           <HiArrowSmallRight />
//         </button>
//       </div>
//     </div>
//   );
// }

// export default January;