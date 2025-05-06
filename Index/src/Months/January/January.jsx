
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

// import React, { useState, useEffect } from 'react';
// import { FaBook, FaInfoCircle, FaHome, FaUser, FaArrowCircleUp, FaPen, FaSearch, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
// import { FiUpload } from 'react-icons/fi';
// import {HiArrowSmallRight,HiArrowSmallLeft} from 'react-icons/hi2'
// import { Link } from 'react-router-dom';
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { motion } from "framer-motion";


// function January() {
//   const [diaryEntries, setDiaryEntries] = useState(() => JSON.parse(localStorage.getItem('diaryEntries')) || []);
//   const [currentPage, setCurrentPage] = useState(0);

//   const [title, setTitle] = useState('');
//   const [date, setDate] = useState('');
//   const [selectedDay, setSelectedDay] = useState('');
//   const [motivateImage, setMotivateImage] = useState(null);
//   const [motivateText, setMotivateText] = useState("");
//   const [isWriting, setIsWriting] = useState(false);
//   const [startImage, setStartImage] = useState(null);
//   const [finishImage, setFinishImage] = useState(null);
//   const [image1, setImage1] = useState(null);
//   const [image2, setImage2] = useState(null);
//   const [image3, setImage3] = useState(null);
//   const [image4, setImage4] = useState(null);
//   const [artStory, setArtStory] = useState("");
//   const [progressImage, setProgressImage] = useState(null);
//   const [progressText, setProgressText] = useState("");
//   const [tipsText, setTipsText] = useState("");

//   const [isExpanded, setIsExpanded] = useState(false);
//   const [query, setQuery] = useState("");

//   useEffect(() => {
//     AOS.init({ duration: 800 });
//     localStorage.setItem('diaryEntries', JSON.stringify(diaryEntries));
//   }, [diaryEntries]);

//   const handleShare = async () => {
//     const shareData = {
//       title: title || "Check out this artwork!",
//       text: "I found this amazing artwork on Painters' Diary. Take a look!",
//       url: window.location.href,
//     };
//     try {
//       if (!navigator.share) {
//         const fallbackMessage = `${shareData.title}\n${shareData.text}\n${shareData.url}`;
//         await navigator.clipboard.writeText(fallbackMessage);
//         alert("Share not supported. Link copied to clipboard instead!");
//         return;
//       }
//       await navigator.share(shareData);
//       console.log("Shared successfully!");
//     } catch (error) {
//       if (error.name !== "AbortError") {
//         console.error("Sharing failed:", error);
//         try {
//           await navigator.clipboard.writeText(`${shareData.title}\n${shareData.text}\n${shareData.url}`);
//           alert("Sharing failed, but the link was copied to your clipboard!");
//         } catch (clipError) {
//           alert("Sharing unavailable. Please copy the URL manually: " + shareData.url);
//         }
//       }
//     }
//   };

//   const saveEntry = () => {
//     if (!title || !date) {
//       alert("Please enter a title and date!");
//       return;
//     }
//     const newEntry = {
//       title,
//       date,
//       day: selectedDay,
//       motivateImage,
//       motivateText,
//       startImage,
//       finishImage,
//       image1,
//       image2,
//       image3,
//       image4,
//       artStory,
//       progressImage,
//       progressText,
//       tipsText,
//     };
//     setDiaryEntries([...diaryEntries, newEntry]);
//     resetForm();
//   };

//   const resetForm = () => {
//     setTitle('');
//     setDate('');
//     setSelectedDay('');
//     setMotivateImage(null);
//     setMotivateText("");
//     setIsWriting(false);
//     setStartImage(null);
//     setFinishImage(null);
//     setImage1(null);
//     setImage2(null);
//     setImage3(null);
//     setImage4(null);
//     setArtStory("");
//     setProgressImage(null);
//     setProgressText("");
//     setTipsText("");
//   };

//   const goToPrevious = () => setCurrentPage(Math.max(0, currentPage - 1));
//   const goToNext = () => setCurrentPage(Math.min(diaryEntries.length, currentPage + 1));

//   const currentEntry = diaryEntries[currentPage] || {};

//   const handleImageChange = (setter) => (e) => {
//     const file = e.target.files[0];
//     if (file) setter(URL.createObjectURL(file));
//   };

//   const handleMotivateImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file && file.type.startsWith("image/")) {
//       setMotivateImage(URL.createObjectURL(file));
//       setIsWriting(false);
//       setMotivateText("");
//     } else {
//       alert("Please upload an image file!");
//     }
//   };

//   const pageVariants = {
//     initial: { opacity: 0, x: 100 },
//     animate: { opacity: 1, x: 0 },
//     exit: { opacity: 0, x: -100 },
//   };

//   return (
//     <div className='min-h-screen bg-gradient-to-br from-gray-700 via-gray-500 to-gray-600 flex flex-col items-center justify-between pb-8 overflow-x-hidden'>
//       {/* HEADER / NAVBAR */}
//       <header className="w-full h-[100px] bg-gray-800/50 backdrop-blur-md flex items-center justify-between px-4 md:px-6 shadow-lg text-white fixed top-0 z-50">
//         <h1 className="text-[22px] sm:text-[28px] md:text-[32px] font-bold font-Eagle">Painters' Diary</h1>
//         <div className="flex items-center gap-x-3">
//           <motion.div
//             className="flex items-center bg-white/50 backdrop-blur-md border border-gray-300 rounded-md shadow-md overflow-hidden"
//             initial={{ width: "40px" }}
//             animate={{ width: isExpanded ? "200px" : "40px" }}
//             transition={{ duration: 0.3, ease: "easeInOut" }}
//           >
//             <motion.input
//               type="text"
//               value={query}
//               onChange={(e) => setQuery(e.target.value)}
//               className={`px-4 py-2 w-full outline-none text-gray-500 bg-transparent ${isExpanded ? "block" : "hidden"}`}
//               placeholder="Search..."
//             />
//             <motion.button onClick={() => setIsExpanded(!isExpanded)} className="p-2 text-gray-600 hover:text-gray-800" whileTap={{ scale: 0.9 }}>
//               <FaSearch />
//             </motion.button>
//           </motion.div>
//           <Link to={"/"}><button className="px-3 py-1 bg-gray-700 hover:bg-gray-600 rounded-md text-white border border-gray-400 text-[16px] flex items-center gap-1"><FaHome className="text-lg sm:hidden" /><span className="hidden sm:inline">Home</span></button></Link>
//           <Link to={"/About"}><button className="px-3 py-1 bg-gray-700 hover:bg-gray-600 rounded-md text-white border border-gray-400 text-[16px] flex items-center gap-1"><FaInfoCircle className="text-lg sm:hidden" /><span className="hidden sm:inline">About</span></button></Link>
//           <Link to={"/Account"}><button className="px-3 py-1 bg-gray-700 hover:bg-gray-600 rounded-md text-white border border-gray-400 text-[16px] flex items-center gap-1"><FaUser className="text-lg sm:hidden" /><span className="hidden sm:inline">Account</span></button></Link>
//           <Link to={"/Diary"}><button className="px-3 py-1 bg-gray-700 hover:bg-gray-600 rounded-md text-white border border-gray-400 text-[16px] flex items-center gap-1"><FaBook className="text-lg sm:hidden" /><span className="hidden sm:inline">Diary</span></button></Link>
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
//         <HiArrowSmallLeft/>
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
//           <div className="w-full flex items-center justify-between lg:px-6 px-2 flex-wrap animate-fadeIn">
//             <div>
//               <h1 className="md:text-[25px] text-[20px] font-Playfair font-semibold">Title</h1>
//               <input className="w-full h-10 bg-gray-700 border border-gray-600 rounded-md px-4 py-2 outline-none text-white font-serif" type="text" value={currentEntry.title || title} onChange={(e) => setTitle(e.target.value)} />
//             </div>
//             <div>
//               <h1 className="md:text-[25px] text-[20px] font-Playfair font-semibold">Date</h1>
//               <input className="w-full h-10 bg-gray-700 border border-gray-600 rounded-md px-4 py-2 outline-none text-white font-serif" type="date" value={currentEntry.date || date} onChange={(e) => setDate(e.target.value)} />
//             </div>
//             <div>
//               <h1 className="md:text-[25px] text-[20px] font-Playfair font-semibold">Day</h1>
//               <select className="w-full h-10 bg-gray-700 border border-gray-600 rounded-md px-4 py-2 outline-none text-white font-serif" value={currentEntry.day || selectedDay} onChange={(e) => setSelectedDay(e.target.value)}>
//                 <option value="">Select a day</option>
//                 {["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"].map(day => <option key={day} value={day}>{day.charAt(0).toUpperCase() + day.slice(1)}</option>)}
//               </select>
//             </div>
//           </div>

//           {/* Image Section */}
//           <section className="h-[300px] w-[100%] mt-8 flex gap-x-4 overflow-x-scroll justify-between hide-scrollbar animate-fadeIn px-6">
//             {[1, 2, 3, 4].map(num => (
//               <div key={num} className="lg:w-[300px] w-[250px] min-w-[250px] h-full rounded-md bg-black/15 backdrop-blur-lg border border-stone-400 relative overflow-hidden">
//                 {eval(`currentEntry.image${num} || image${num}`) ? (
//                   <img src={eval(`currentEntry.image${num} || image${num}`)} alt={`Image ${num}`} className="w-full h-full object-cover" />
//                 ) : (
//                   <p className="text-white font-Playfair absolute top-2 left-2">No image uploaded</p>
//                 )}
//                 <input type="file" id={`image${num}Input`} className="hidden" accept="image/*" onChange={handleImageChange(eval(`setImage${num}`))} />
//                 <div className="h-[30px] w-[30px] flex items-center justify-center absolute top-2 right-2 rounded-md text-white cursor-pointer hover:text-red-200" onClick={() => document.getElementById(`image${num}Input`).click()}>
//                   <FiUpload className="text-[18px]" />
//                 </div>
//               </div>
//             ))}
//           </section>

//           {/* Stories and Progress Section */}
//           <div className="container mx-auto p-6">
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
//               <section data-aos="fade-up" className="bg-gray-700/50 p-4 rounded-md h-[500px] overflow-hidden animate-fadeIn">
//                 <h1 className="text-[30px] font-serif">Art Stories</h1>
//                 {/* <ReactQuill theme="snow" value={currentEntry.artStory || artStory} onChange={setArtStory} className="h-[85%] rounded-md mt-4 text-gray-900 bg-[#faf3e0]" placeholder="Write your notes here..." /> */}
//               </section>
//               <section data-aos="fade-up" className="lg:col-span-2 bg-gray-700/50 p-4 border border-gray-400 rounded-md flex items-center justify-center h-[500px] sm:h-auto sm:row-span-2 lg:row-span-1 lg:h-[500px] animate-fadeIn">
//                 <div className="w-full h-full flex flex-col lg:flex-row gap-4 items-center sm:overflow-hidden overflow-y-scroll">
//                   <div className="w-[90%] lg:w-1/2 min-h-[452px] sm:h-[420px] h-[90%] bg-black/30 rounded-md border border-gray-400"></div>
//                   <div className="w-[90%] lg:w-1/2 min-h-[452px] sm:h-[420px] h-[90%] bg-black/30 rounded-md border border-gray-400"></div>
//                 </div>
//               </section>
//               <section data-aos="fade-up" className="bg-gray-700/50 p-4 border border-gray-400 rounded-md h-[500px] animate-fadeIn items-center flex flex-col">
//                 <h1 className="text-[30px] font-serif">Stories of Progress</h1>
//                 <div className="w-[90%] h-full flex flex-col items-center gap-2 mt-4">
//                   <div className="w-full h-[60%] max-h-[300px] bg-black/30 rounded-md relative border border-gray-400 overflow-hidden">
//                     {currentEntry.progressImage || progressImage ? (
//                       <img src={currentEntry.progressImage || progressImage} alt="Uploaded" className="w-full h-full object-cover" />
//                     ) : (
//                       <p className="text-white font-Playfair pl-4 pt-3">No image uploaded</p>
//                     )}
//                     <input type="file" id="progressFileInput" className="hidden" accept="image/*" onChange={handleImageChange(setProgressImage)} />
//                     <div className="h-[30px] w-[30px] flex items-center justify-center absolute top-2 right-2 bg-black/50 rounded-md text-white border border-gray-400 cursor-pointer hover:text-red-200" onClick={() => document.getElementById('progressFileInput').click()}>
//                       <FaArrowCircleUp className="text-[20px]" />
//                     </div>
//                   </div>
//                   <div className="w-full h-[40%] bg-black rounded-md">
//                     <textarea className="w-full h-full bg-[#FAF3E0] border border-gray-400 rounded-md px-4 py-2 outline-none font-serif shadow-md resize-none leading-relaxed text-gray-900" placeholder="Your Tips & Tricks for others..." value={currentEntry.progressText || progressText} onChange={(e) => setProgressText(e.target.value)}></textarea>
//                   </div>
//                 </div>
//               </section>
//             </div>

//             {/* Bottom Section */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
//               <section data-aos="fade-up" className="bg-gray-700/50 p-4 border border-gray-400 rounded-md h-[350px]">
//                 <h1 className="text-lg font-Playfair">Tips & Tricks</h1>
//                 <div className="w-full h-[85%]">
//                   <textarea className="w-full h-full mt-4 bg-[#FAF3E0] border border-gray-400 rounded-md px-4 py-2 outline-none font-serif shadow-md resize-none leading-relaxed text-gray-900" placeholder="Your Tips & Tricks for others..." value={currentEntry.tipsText || tipsText} onChange={(e) => setTipsText(e.target.value)}></textarea>
//                 </div>
//               </section>
//               <section data-aos="fade-up" className="bg-gray-700/50 lg:col-span-2 p-4 border border-gray-400 rounded-md h-[350px] sm:h-auto sm:row-span-2 lg:row-span-1 lg:h-[350px] flex justify-between lg:flex-row flex-col lg:gap-2 gap-4 items-center sm:overflow-hidden overflow-y-scroll hide-scrollbar">
//                 <div className="lg:w-[50%] w-[95%] min-h-[300px] sm:h-[300px] bg-[#3B1C32] rounded-lg overflow-hidden relative flex flex-col">
//                   <div className="flex items-center justify-between mt-3 px-4">
//                     <h1 className="text-[23px] font-semibold font-Playfair">How It Started..</h1>
//                     <div className="h-[30px] w-[30px] rounded-md bg-black/50 border border-zinc-400 cursor-pointer flex items-center justify-center" onClick={() => document.getElementById("startImageInput").click()}>
//                       <FaArrowCircleUp className="text-[20px] text-white hover:text-[#f897dc]" />
//                     </div>
//                     <input type="file" id="startImageInput" className="hidden" accept="image/*" onChange={handleImageChange(setStartImage)} />
//                   </div>
//                   <div className="w-[90%] h-[75%] bg-white/20 rounded-md relative border border-gray-400 overflow-hidden mx-auto mt-3 flex items-center justify-center">
//                     {currentEntry.startImage || startImage ? (
//                       <img src={currentEntry.startImage || startImage} alt="How It Started" className="w-full h-full object-cover" />
//                     ) : (
//                       <p className="text-white text-center font-serif">Upload the starting image</p>
//                     )}
//                   </div>
//                 </div>
//                 <div className="lg:w-[50%] w-[95%] min-h-[300px] lg:h-[290px] bg-[#301B3F] rounded-lg overflow-hidden relative flex flex-col">
//                   <div className="flex items-center justify-between mt-3 px-4 w-full">
//                     <h1 className="text-[23px] font-semibold font-Playfair">How It Finished..</h1>
//                     <div className="h-[30px] w-[30px] rounded-md bg-black/50 border border-zinc-400 cursor-pointer flex items-center justify-center" onClick={() => document.getElementById("finishImageInput").click()}>
//                       <FaArrowCircleUp className="text-[20px] text-white hover:text-[#c57cfa]" />
//                     </div>
//                     <input type="file" id="finishImageInput" className="hidden" accept="image/*" onChange={handleImageChange(setFinishImage)} />
//                   </div>
//                   <div className="w-[90%] h-[75%] bg-white/20 rounded-md relative border border-gray-400 overflow-hidden mx-auto mt-3 flex items-center justify-center">
//                     {currentEntry.finishImage || finishImage ? (
//                       <img src={currentEntry.finishImage || finishImage} alt="How It Finished" className="w-full h-full object-cover" />
//                     ) : (
//                       <p className="text-white text-center font-serif">Upload the ending image</p>
//                     )}
//                   </div>
//                 </div>
//               </section>
//               <section data-aos="fade-up" className="bg-gray-700/50 lg:p-4 sm:p-2 p-1 border border-gray-400 rounded-md h-[350px] w-full mx-auto flex flex-col items-center">
//                 <h1 className="text-lg font-Playfair text-center sm:text-left">Motivate with your thought..</h1>
//                 <div className="w-[90%] h-[80%] mt-4 bg-black/30 rounded-md relative border border-gray-400 overflow-hidden flex justify-center items-center">
//                   {isWriting ? (
//                     <textarea className="w-full h-full p-2 bg-transparent text-white border-none resize-none focus:outline-none" placeholder="Write your motivational thought here..." value={currentEntry.motivateText || motivateText} onChange={(e) => setMotivateText(e.target.value)} autoFocus></textarea>
//                   ) : (currentEntry.motivateImage || motivateImage) ? (
//                     <img src={currentEntry.motivateImage || motivateImage} alt="Uploaded" className="w-full h-full object-cover" />
//                   ) : (
//                     <p className="text-white font-Playfair pl-4 pt-3">Upload an image or write your thoughts</p>
//                   )}
//                 </div>
//                 <input type="file" id="motivateFileInput" className="hidden" accept="image/*" onChange={handleMotivateImageChange} />
//                 <div className="flex gap-4 mt-2">
//                   <div className="h-[30px] w-[30px] flex items-center justify-center bg-black/50 rounded-md text-white border border-gray-400 cursor-pointer hover:text-red-200" onClick={() => document.getElementById("motivateFileInput").click()}>
//                     <FaArrowCircleUp className="text-[20px]" />
//                   </div>
//                   <div className="h-[30px] w-[30px] flex items-center justify-center bg-black/50 rounded-md text-white border border-gray-400 cursor-pointer hover:text-red-200" onClick={() => { setIsWriting(true); setMotivateImage(null); }}>
//                     <FaPen className="text-[18px]" />
//                   </div>
//                 </div>
//               </section>
//             </div>
//           </div>

//           {/* Buttons */}
//           <div className="flex justify-center gap-4 mt-4">
//             <button onClick={saveEntry} className="w-1/4 md:w-1/5 lg:w-1/6 h-10 bg-zinc-700 border border-gray-300 hover:bg-zinc-600 text-white rounded-md font-Playfair text-[20px] font-medium">Save</button>
//             <button onClick={handleShare} className="w-1/4 md:w-1/5 lg:w-1/6 h-10 bg-zinc-700 border border-gray-300 hover:bg-zinc-600 text-white rounded-md font-Playfair text-[20px] font-medium">Share</button>
//           </div>
//         </motion.main>

//         <button
//           onClick={goToNext}
//           disabled={currentPage === diaryEntries.length}
//           className="absolute right-0 lg:right-[8%] text-xl text-white hover:text-gray-300 disabled:opacity-50 z-10 border p-1 rounded-md"
//         >
//           <HiArrowSmallRight/>
//         </button>
//       </div>
//     </div>
//   );
// }

// export default January;
import React, { useState, useEffect } from 'react';
import { FaBook, FaInfoCircle, FaHome, FaUser, FaPen, FaSearch, FaShare, FaSave, FaTrash } from 'react-icons/fa';
import { FiUpload, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion, AnimatePresence } from 'framer-motion';

function January() {
  // State management
  const [diaryEntries, setDiaryEntries] = useState(() => {
    const saved = localStorage.getItem('diaryEntries');
    return saved ? JSON.parse(saved) : [];
  });
  
  const [currentPage, setCurrentPage] = useState(0);
  const [formData, setFormData] = useState({
    title: '',
    date: '',
    selectedDay: '',
    motivateImage: null,
    motivateText: '',
    startImage: null,
    finishImage: null,
    images: [null, null, null, null],
    artStory: '',
    progressImage: null,
    progressText: '',
    tipsText: ''
  });
  
  const [isWriting, setIsWriting] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [query, setQuery] = useState('');
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const [isEditing, setIsEditing] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Initialize AOS and theme
  useEffect(() => {
    AOS.init({ duration: 600, once: true });
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  // Save entries to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('diaryEntries', JSON.stringify(diaryEntries));
  }, [diaryEntries]);

  // Handle form input changes
  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  // Handle image uploads
  const handleImageChange = (field, index = null) => (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      const url = URL.createObjectURL(file);
      if (index !== null) {
        setFormData(prev => {
          const newImages = [...prev.images];
          newImages[index] = url;
          return { ...prev, images: newImages };
        });
      } else {
        handleInputChange(field, url);
      }
    }
  };

  // Toggle between light/dark theme
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  // Share functionality
  const handleShare = async () => {
    const shareData = {
      title: formData.title || 'My Art Diary Entry',
      text: 'Check out my latest artwork on Painters\' Diary!',
      url: window.location.href,
    };
    
    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(`${shareData.title}\n${shareData.text}\n${shareData.url}`);
        alert('Link copied to clipboard!');
      }
    } catch (err) {
      console.error('Error sharing:', err);
    }
  };

  // Save or update entry
  const saveEntry = () => {
    if (!formData.title || !formData.date) {
      alert('Please enter a title and date!');
      return;
    }
    
    const newEntry = { ...formData };
    
    if (isEditing) {
      const updatedEntries = [...diaryEntries];
      updatedEntries[currentPage] = newEntry;
      setDiaryEntries(updatedEntries);
    } else {
      setDiaryEntries([...diaryEntries, newEntry]);
      setCurrentPage(diaryEntries.length);
    }
    
    resetForm();
    setIsEditing(false);
  };

  // Delete current entry
  const deleteEntry = () => {
    if (window.confirm('Are you sure you want to delete this entry?')) {
      const updatedEntries = diaryEntries.filter((_, i) => i !== currentPage);
      setDiaryEntries(updatedEntries);
      setCurrentPage(Math.min(currentPage, updatedEntries.length - 1));
      resetForm();
      setIsEditing(false);
    }
  };

  // Reset form to empty state
  const resetForm = () => {
    setFormData({
      title: '',
      date: '',
      selectedDay: '',
      motivateImage: null,
      motivateText: '',
      startImage: null,
      finishImage: null,
      images: [null, null, null, null],
      artStory: '',
      progressImage: null,
      progressText: '',
      tipsText: ''
    });
  };

  // Navigation functions
  const goToPrevious = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
      setIsEditing(false);
    }
  };

  const goToNext = () => {
    if (currentPage < diaryEntries.length) {
      setCurrentPage(currentPage + 1);
      setIsEditing(false);
    }
  };

  // Load entry for editing
  const loadEntry = (index) => {
    if (index >= 0 && index < diaryEntries.length) {
      setFormData(diaryEntries[index]);
      setIsEditing(true);
    } else {
      resetForm();
      setIsEditing(false);
    }
  };

  // Current entry data
  const currentEntry = diaryEntries[currentPage] || {};
  const isEmpty = diaryEntries.length === 0;
  const isNewEntry = currentPage === diaryEntries.length;

  // Animation variants
  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };

  // Generate a daily challenge based on date
const getDailyChallenge = (dateString) => {
  const date = new Date(dateString);
  const dayOfYear = Math.floor((date - new Date(date.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24));
  
  const challenges = [
    "Try a monochromatic color scheme",
    "Experiment with a new brush technique",
    "Paint without using black",
    "Create art using only geometric shapes",
    "Draw with your non-dominant hand",
    "Make a piece using only 3 colors",
    "Create artwork inspired by music",
    "Try a style completely different from your usual",
    "Use only complementary colors",
    "Create a piece in 30 minutes or less"
  ];
  
  return challenges[dayOfYear % challenges.length];
};

// Generate a random color palette
const generateColorPalette = () => {
  const palettes = [
    ['#FFADAD', '#FFD6A5', '#FDFFB6', '#CAFFBF', '#9BF6FF'],
    ['#CDB4DB', '#FFC8DD', '#FFAFCC', '#BDE0FE', '#A2D2FF'],
    ['#F72585', '#7209B7', '#3A0CA3', '#4361EE', '#4CC9F0'],
    ['#D8F3DC', '#B7E4C7', '#95D5B2', '#74C69D', '#52B788'],
    ['#FF9F1C', '#FFBF69', '#FFFFFF', '#CBF3F0', '#2EC4B6'],
    ['#FF595E', '#FFCA3A', '#8AC926', '#1982C4', '#6A4C93']
  ];
  
  return palettes[Math.floor(Math.random() * palettes.length)];
};

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-colors duration-300">
      {/* Header */}
      {/* Header Component */}
<header className="w-full bg-white dark:bg-gray-800 shadow-sm fixed top-0 z-50 px-4 py-3">
  <div className="max-w-full mx-auto flex items-center justify-between">
    <h1 className="text-2xl font-bold font-Eagle text-indigo-600 dark:text-indigo-400">Painters' Diary</h1>
    
    <div className="flex items-center gap-4">
      {/* Search Bar (same as before) */}
      <motion.div
              className="flex items-center bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden"
              animate={{ width: isExpanded ? '240px' : '40px' }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              {isExpanded && (
                <motion.input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="px-4 py-1 w-full bg-transparent outline-none"
                  placeholder="Search entries..."
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                />
              )}
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="p-2 text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400"
              >
                <FaSearch />
              </button>
            </motion.div>
      
      {/* Theme Toggle (same as before) */}
      <button
        onClick={toggleTheme}
        className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
        aria-label="Toggle theme"
      >
        {theme === 'light' ? '🌙' : '☀️'}
      </button>
      
      {/* Desktop Navigation (hidden on mobile) */}
      <nav className="hidden md:flex items-center gap-2">
        <Link to="/" className="px-3 py-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center gap-2 transition-colors font-Playfair">
          <FaHome />
          <span>Home</span>
        </Link>
        <Link to="/About" className="px-3 py-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center gap-2 transition-colors font-Playfair">
          <FaInfoCircle />
          <span>About</span>
        </Link>
        <Link to="/Account" className="px-3 py-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center gap-2 transition-colors font-Playfair">
          <FaUser />
          <span>Account</span>
        </Link>
        <Link to="/Diary" className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 rounded-md text-indigo-600 dark:text-indigo-300 flex items-center gap-2 transition-colors font-Playfair">
          <FaBook />
          <span>Diary</span>
        </Link>
      </nav>
      
      {/* Mobile Dropdown Menu */}
      <div className="md:hidden relative">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 rounded-md bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
          aria-label="Toggle menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
          </svg>
        </button>
        
        {/* Dropdown Content */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1 z-50 border border-gray-200 dark:border-gray-700"
          >
            <Link
              to="/"
              className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center gap-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <FaHome />
              Home
            </Link>
            <Link
              to="/About"
              className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center gap-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <FaInfoCircle />
              About
            </Link>
            <Link
              to="/Account"
              className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center gap-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <FaUser />
              Account
            </Link>
            <Link
              to="/Diary"
              className="block px-4 py-2 text-sm text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/50 flex items-center gap-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <FaBook />
              Diary
            </Link>
          </motion.div>
        )}
      </div>
    </div>
  </div>
</header>

      {/* Main Content */}
      <main className="pt-20 pb-10 px-4 max-w-7xl mx-auto">
        {/* Entry Navigation */}
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={goToPrevious}
            disabled={currentPage === 0}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white dark:bg-gray-800 shadow hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50 transition-colors"
          >
            <FiChevronLeft />
            <span className="hidden sm:inline">Previous</span>
          </button>
          
          <div className="text-center">
            <h2 className="text-xl font-semibold">
              {isNewEntry ? 'New Entry' : currentEntry.title || 'Untitled Entry'}
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {isEmpty ? 'No entries yet' : `Entry ${currentPage + 1} of ${diaryEntries.length}`}
            </p>
          </div>
          
          <button
            onClick={goToNext}
            disabled={currentPage >= diaryEntries.length}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white dark:bg-gray-800 shadow hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50 transition-colors"
          >
            <span className="hidden sm:inline">Next</span>
            <FiChevronRight />
          </button>
        </div>

        {/* Diary Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageVariants}
            transition={{ duration: 0.3 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden"
          >
            {/* Entry Metadata */}
            <div className="p-6 border-b border-gray-100 dark:border-gray-700 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1 text-gray-600 dark:text-gray-300">Title</label>
                <input
                  type="text"
                  value={isEditing ? formData.title : currentEntry.title || ''}
                  onChange={(e) => handleInputChange('title', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                  placeholder="My Artwork"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1 text-gray-600 dark:text-gray-300">Date</label>
                <input
                  type="date"
                  value={isEditing ? formData.date : currentEntry.date || ''}
                  onChange={(e) => handleInputChange('date', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1 text-gray-600 dark:text-gray-300">Day</label>
                <select
                  value={isEditing ? formData.selectedDay : currentEntry.day || ''}
                  onChange={(e) => handleInputChange('selectedDay', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                >
                  <option value="">Select a day</option>
                  {['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].map((day) => (
                    <option key={day} value={day.toLowerCase()}>{day}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Art Gallery */}
            <section className="p-6 border-b border-gray-100 dark:border-gray-700">
              <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <span className="bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 p-2 rounded-lg">
                  <FaBook />
                </span>
                Art Gallery
              </h2>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {(isEditing ? formData.images : currentEntry.images || Array(4).fill(null)).map((img, index) => (
                  <div
                    key={index}
                    className="relative aspect-square bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden group"
                    data-aos="zoom-in"
                    data-aos-delay={index * 100}
                  >
                    {img ? (
                      <img
                        src={img}
                        alt={`Gallery ${index + 1}`}
                        className="w-full h-full object-cover transition-transform group-hover:scale-105"
                      />
                    ) : (
                      <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-400 dark:text-gray-500 p-4">
                        <FiUpload className="text-2xl mb-2" />
                        <span className="text-xs text-center">Upload Image</span>
                      </div>
                    )}
                    
                    <input
                      type="file"
                      id={`galleryImage${index}`}
                      className="hidden"
                      accept="image/*"
                      onChange={handleImageChange('images', index)}
                    />
                    <button
                      onClick={() => document.getElementById(`galleryImage${index}`).click()}
                      className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 bg-black/30 flex items-center justify-center text-white transition-opacity"
                    >
                      <FiUpload className="text-xl" />
                    </button>
                  </div>
                ))}
              </div>
            </section>

            {/* Art Story */}
            <section className="p-6 border-b border-gray-100 dark:border-gray-700">
              <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <span className="bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 p-2 rounded-lg">
                  <FaPen />
                </span>
                Art Story
              </h2>
              
              <textarea
                value={isEditing ? formData.artStory : currentEntry.artStory || ''}
                onChange={(e) => handleInputChange('artStory', e.target.value)}
                className="w-full h-40 px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                placeholder="Tell the story behind your artwork... What inspired you? What techniques did you use? How do you feel about the result?"
              />
            </section>

            {/* Progress Section */}
            <section className="p-6 border-b border-gray-100 dark:border-gray-700">
              <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <span className="bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 p-2 rounded-lg">
                  <FaPen />
                </span>
                Progress
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative aspect-video bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden group">
                  {isEditing ? formData.progressImage || currentEntry.progressImage ? (
                    <img
                      src={formData.progressImage || currentEntry.progressImage}
                      alt="Progress"
                      className="w-full h-full object-cover transition-transform group-hover:scale-105"
                    />
                  ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-400 dark:text-gray-500 p-4">
                      <FiUpload className="text-2xl mb-2" />
                      <span className="text-xs text-center">Upload Progress Image</span>
                    </div>
                  ) : currentEntry.progressImage ? (
                    <img
                      src={currentEntry.progressImage}
                      alt="Progress"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-gray-400 dark:text-gray-500">
                      No progress image
                    </div>
                  )}
                  
                  {isEditing && (
                    <>
                      <input
                        type="file"
                        id="progressImage"
                        className="hidden"
                        accept="image/*"
                        onChange={handleImageChange('progressImage')}
                      />
                      <button
                        onClick={() => document.getElementById('progressImage').click()}
                        className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 bg-black/30 flex items-center justify-center text-white transition-opacity"
                      >
                        <FiUpload className="text-xl" />
                      </button>
                    </>
                  )}
                </div>
                
                <textarea
                  value={isEditing ? formData.progressText : currentEntry.progressText || ''}
                  onChange={(e) => handleInputChange('progressText', e.target.value)}
                  className="w-full h-full min-h-[200px] px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                  placeholder="Describe your progress... What challenges did you face? What did you learn?"
                />
              </div>
            </section>

            {/* Before & After */}
            <section className="p-6 border-b border-gray-100 dark:border-gray-700">
              <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <span className="bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 p-2 rounded-lg">
                  <FaPen />
                </span>
                Before & After
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {['startImage', 'finishImage'].map((field, idx) => (
                  <div key={field} className="space-y-2">
                    <h3 className="font-medium text-gray-600 dark:text-gray-300">
                      {idx === 0 ? 'Starting Point' : 'Finished Work'}
                    </h3>
                    <div className="relative aspect-video bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden group">
                      {isEditing ? formData[field] || currentEntry[field] ? (
                        <img
                          src={formData[field] || currentEntry[field]}
                          alt={idx === 0 ? 'Start' : 'Finish'}
                          className="w-full h-full object-cover transition-transform group-hover:scale-105"
                        />
                      ) : (
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-400 dark:text-gray-500 p-4">
                          <FiUpload className="text-2xl mb-2" />
                          <span className="text-xs text-center">
                            Upload {idx === 0 ? 'Starting' : 'Finished'} Image
                          </span>
                        </div>
                      ) : currentEntry[field] ? (
                        <img
                          src={currentEntry[field]}
                          alt={idx === 0 ? 'Start' : 'Finish'}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center text-gray-400 dark:text-gray-500">
                          No {idx === 0 ? 'start' : 'finish'} image
                        </div>
                      )}
                      
                      {isEditing && (
                        <>
                          <input
                            type="file"
                            id={field}
                            className="hidden"
                            accept="image/*"
                            onChange={handleImageChange(field)}
                          />
                          <button
                            onClick={() => document.getElementById(field).click()}
                            className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 bg-black/30 flex items-center justify-center text-white transition-opacity"
                          >
                            <FiUpload className="text-xl" />
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Motivation */}
           {/* Motivation Section */}
<section className="p-6 border-b border-gray-100 dark:border-gray-700">
  <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
    <span className="bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 p-2 rounded-lg">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
      </svg>
    </span>
    Inspiration & Motivation
  </h2>
  
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
    {/* Motivational Quote */}
    <div className="relative bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-gray-700 dark:to-gray-800 rounded-xl p-6 h-full min-h-[200px] flex flex-col">
      {isEditing ? (
        isWriting || !formData.motivateImage ? (
          <textarea
            value={formData.motivateText}
            onChange={(e) => handleInputChange('motivateText', e.target.value)}
            className="w-full flex-1 p-4 bg-transparent focus:outline-none resize-none text-gray-800 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500"
            placeholder="Write your motivational thoughts or paste an inspiring quote..."
            autoFocus={isWriting}
          />
        ) : (
          <img
            src={formData.motivateImage}
            alt="Motivation"
            className="w-full h-full object-cover rounded-lg"
          />
        )
      ) : currentEntry.motivateText ? (
        <div className="flex-1 flex flex-col">
          <blockquote className="text-lg italic text-gray-700 dark:text-gray-300 mb-4 flex-1">
            "{currentEntry.motivateText}"
          </blockquote>
          <div className="text-right text-sm text-gray-500 dark:text-gray-400">
            — {currentEntry.title ? currentEntry.title : "Anonymous Artist"}
          </div>
        </div>
      ) : currentEntry.motivateImage ? (
        <img
          src={currentEntry.motivateImage}
          alt="Motivation"
          className="w-full h-full object-cover rounded-lg"
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center text-gray-400 dark:text-gray-500">
          No motivation content yet
        </div>
      )}
      
      {isEditing && (
        <div className="absolute bottom-4 right-4 flex gap-2">
          <input
            type="file"
            id="motivateImage"
            className="hidden"
            accept="image/*"
            onChange={(e) => {
              handleImageChange('motivateImage')(e);
              setIsWriting(false);
            }}
          />
          <button
            onClick={() => document.getElementById('motivateImage').click()}
            className="p-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors shadow-md"
            title="Upload inspirational image"
          >
            <FiUpload />
          </button>
          <button
            onClick={() => {
              setIsWriting(true);
              handleInputChange('motivateImage', null);
            }}
            className="p-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors shadow-md"
            title="Write inspirational text"
          >
            <FaPen />
          </button>
        </div>
      )}
    </div>

    {/* Daily Challenge */}
    <div className="bg-gradient-to-br from-yellow-50 to-amber-50 dark:from-gray-700 dark:to-gray-800 rounded-xl p-6 flex flex-col">
      <h3 className="font-medium text-lg mb-3 text-amber-700 dark:text-amber-400 flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
        Today's Art Challenge
      </h3>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        {getDailyChallenge(currentEntry.date || new Date().toISOString())}
      </p>
      <button 
        className="mt-auto px-4 py-2 bg-amber-100 dark:bg-amber-900/50 text-amber-700 dark:text-amber-300 rounded-lg hover:bg-amber-200 dark:hover:bg-amber-800 transition-colors text-sm"
        onClick={() => handleInputChange('tipsText', (formData.tipsText || '') + `\n\nChallenge Attempt: ${getDailyChallenge(currentEntry.date || new Date().toISOString())}`)}
      >
        Add to My Tips
      </button>
    </div>

    {/* Color Inspiration */}
    <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-700 dark:to-gray-800 rounded-xl p-6">
      <h3 className="font-medium text-lg mb-3 text-purple-700 dark:text-purple-400 flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z" clipRule="evenodd" />
        </svg>
        Color Palette Inspiration
      </h3>
      <div className="grid grid-cols-5 gap-2 mb-3">
        {generateColorPalette().map((color, i) => (
          <div 
            key={i} 
            className="aspect-square rounded-full cursor-pointer hover:scale-110 transition-transform"
            style={{ backgroundColor: color }}
            onClick={() => handleInputChange('tipsText', (formData.tipsText || '') + `\n\nColor Inspiration: ${color}`)}
          />
        ))}
      </div>
      <button 
        className="w-full px-4 py-2 bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 rounded-lg hover:bg-purple-200 dark:hover:bg-purple-800 transition-colors text-sm"
        onClick={() => handleInputChange('tipsText', (formData.tipsText || '') + `\n\nColor Palette: ${generateColorPalette().join(', ')}`)}
      >
        Save This Palette
      </button>
    </div>
  </div>
</section>

            {/* Tips & Tricks */}
            <section className="p-6">
              <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <span className="bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 p-2 rounded-lg">
                  <FaPen />
                </span>
                Tips & Tricks
              </h2>
              
              <textarea
                value={isEditing ? formData.tipsText : currentEntry.tipsText || ''}
                onChange={(e) => handleInputChange('tipsText', e.target.value)}
                className="w-full h-40 px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                placeholder="Share your artistic tips and tricks... What worked well? What would you do differently next time?"
              />
            </section>

            {/* Action Buttons */}
            <div className="p-6 bg-gray-50 dark:bg-gray-700/50 border-t border-gray-100 dark:border-gray-700 flex flex-wrap justify-between gap-4">
              <div className="flex gap-3">
                {isEditing ? (
                  <>
                    <button
                      onClick={saveEntry}
                      className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 flex items-center gap-2 transition-colors"
                    >
                      <FaSave />
                      Save
                    </button>
                    <button
                      onClick={() => {
                        setIsEditing(false);
                        loadEntry(currentPage);
                      }}
                      className="px-6 py-2 bg-gray-200 dark:bg-gray-600 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors"
                    >
                      Cancel
                    </button>
                  </>
                ) : (
                  <button
                    onClick={() => {
                      if (currentPage < diaryEntries.length) {
                        loadEntry(currentPage);
                      } else {
                        setIsEditing(true);
                      }
                    }}
                    className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 flex items-center gap-2 transition-colors"
                  >
                    <FaPen />
                    {currentPage < diaryEntries.length ? 'Edit' : 'Create New'}
                  </button>
                )}
                
                {currentPage < diaryEntries.length && !isEditing && (
                  <button
                    onClick={deleteEntry}
                    className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 flex items-center gap-2 transition-colors"
                  >
                    <FaTrash />
                    Delete
                  </button>
                )}
              </div>
              
              <div className="flex gap-3">
                <button
                  onClick={handleShare}
                  className="px-6 py-2 bg-gray-200 dark:bg-gray-600 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-500 flex items-center gap-2 transition-colors"
                  disabled={currentPage >= diaryEntries.length}
                >
                  <FaShare />
                  Share
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}

export default January;