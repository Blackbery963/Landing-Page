// import React, { useState } from 'react';
// import { FaHome, FaInfoCircle, FaUser, FaBook, FaArrowRight } from 'react-icons/fa';
// import { Link } from 'react-router-dom';
// import woodBackground from '/home/swarnadip/Documents/Index/Index/Index/src/Components/Diary/Diary-images/beige-wooden-textured-flooring-background.jpg';

// function Diary() {
//   const [backgroundImage, setBackgroundImage] = useState(null);
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [isSaved, setIsSaved] = useState(false);
//   const [explore, setExplore] = useState(false);

//   const handleBackgroundImage = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const imageURL = URL.createObjectURL(file);
//       setBackgroundImage(imageURL);
//     }
//   };
     
//   const handleSave = () => {
//     if (!title.trim() || !description.trim()) {
//       alert('Please enter both a Title and Description before saving!');
//       return;
//     }

//     const diaryEntry = { backgroundImage, title, description };
//     console.log('Diary Entry:', diaryEntry);
//     setIsSaved(true);
//     alert('Your diary entry has been saved!');
//   };

//   const handleExplore = () => {
//     setExplore(true);
//   };

//   return (
//     //the main container 
//     <div className="min-h-screen flex flex-col max-w-screen">
//        {/* Animated Wood Grain Effect */}
//        <div className="absolute inset-0 bg-gradient-to-t from-[#e09e72] via-[#d4c1a4]  to-[#ce8e41] animate-[grainMove_8s_infinite_linear]"></div>
      
//       {/* Header Section */}
//       <header className="h-[100px] w-full backdrop-blur-md shadow-md flex items-center justify-between pl-4 pr-8 sticky top-0 z-50">
//         <div>
//           <h1 className="font-Eagle font-bold lg:text-[35px] md:text-[30px] sm:text-[25px] text-[20px] text-[#001F3F]">
//             Painters' Diary
//           </h1>
//         </div>
//         <div className="font-Playfair flex gap-8">
//           <Link to="/">
//             <button className="hidden sm:flex bg-gradient-to-tr from-green-500 to-green-900 text-white px-2 py-1 rounded-md">
//               Home
//             </button>
//             <FaHome className="sm:hidden text-green-700 text-2xl" title="Home" />
//           </Link>
//           <button className="hidden sm:flex bg-gradient-to-tr from-green-500 to-green-900 text-white px-2 py-1 rounded-md">
//             About
//           </button>
//           <FaInfoCircle className="sm:hidden text-green-700 text-2xl" title="About" />
//          <Link to={"/Account"}>
//          <button className="hidden sm:flex bg-gradient-to-tr from-green-500 to-green-900 text-white px-2 py-1 rounded-md">
//             Account
//           </button>
//           <FaUser className="sm:hidden text-green-700 text-2xl" title="Contact" />
//          </Link>
//           <button className="hidden sm:flex bg-gradient-to-tr from-green-500 to-green-900 text-white px-2 py-1 rounded-md">
//             Explore More
//           </button>
//           <FaBook className="sm:hidden text-green-700 text-2xl" title="Collections" />
//         </div>
//       </header>

//       <div className="mt-8 lg:ml-14 md:ml-10 ml-4 flex flex-col items-center">
//         <h1 className="lg:text-4xl md:text-3xl text-2xl font-playfair">The Canvas of My Life</h1>
//       </div>

//       {!explore ? (
//         <section className="lg:w-[90vw] w-[95vw] h-[75vh] mx-auto mt-8 relative border border-black overflow-hidden">
//           {backgroundImage ? (
//             <div
//               className="w-full h-full bg-cover bg-center relative"
//               style={{ backgroundImage: `url(${backgroundImage})` }}
//             >
//               <div className="absolute inset-0 flex items-center justify-center p-4">
//                 <div className="backdrop-blur-lg border border-gray-300 shadow-lg w-[90%] md:w-[50%] lg:w-[40%] p-6 rounded-lg text-white flex justify-center items-center flex-col">
//                   <h1 className="text-center lg:text-4xl md:text-2xl text-xl font-bold mb-6 font-Playfair">
//                     The Memories of 2024
//                   </h1>
//                   <div className="relative mb-6">
//                     <input
//                       type="text"
//                       placeholder="Title"
//                       className="w-full bg-transparent border-b text-2xl border-gray-300 text-center placeholder-gray-100 focus:outline-none focus:ring-0 text-white font-Unna"
//                       value={title}
//                       onChange={(e) => setTitle(e.target.value)}
//                       required
//                     />
//                   </div>
//                   <div className="relative mb-6">
//                     <textarea
//                       placeholder="Description"
//                       className="w-full bg-transparent border-b text-xl border-gray-300 text-center placeholder-gray-100 focus:outline-none focus:ring-0 text-white font-Unna resize-none"
//                       rows={2}
//                       value={description}
//                       onChange={(e) => setDescription(e.target.value)}
//                       required
//                     />
//                   </div>
//                   <button
//                     onClick={isSaved ? handleExplore : handleSave}
//                     className="w-[40%] bg-blue-500 px-6 py-2 rounded-md hover:bg-blue-700 transition text-white"
//                   >
//                     {isSaved ? 'Explore' : 'Save'}
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ) : (
//             <label
//               htmlFor="background-upload"
//               className="w-full h-full bg-gradient-to-tr from-[#a11d33] to-[#602437] flex items-center justify-center cursor-pointer text-white font-Playfair text-lg font-semibold transition"
//             >
//               Upload Background Image to Discover More
//               <input
//                 type="file"
//                 id="background-upload"
//                 accept="image/*"
//                 className="hidden"
//                 onChange={handleBackgroundImage}
//               />
//             </label>
//           )}
//         </section>
//       ) : (
       
// <section className="lg:w-[90vw] w-[95vw] mx-auto mt-8 relative border border-black">
//   <div
//     className="flex flex-col items-center justify-start bg-gray-200 text-black text-lg font-semibold bg-center bg-cover p-4"
//     style={{ backgroundImage: `url(${woodBackground})`, minHeight: '75vh' }}
//   >
//     <h2 className="text-2xl font-Playfair mb-6 lg:mt-0 mt-4 text-center">
//       Your Year in 12 Chapters
//     </h2>
//     <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 w-full px-4">
//       {[
//         { month: 'January', description: 'The beginning, a fresh start.' },
//         { month: 'February', description: 'The month of love and reflection.' },
//         { month: 'March', description: 'Spring is here, time for new beginnings.' },
//         { month: 'April', description: 'A month of renewal and growth.' },
//         { month: 'May', description: 'The month of flowers and dreams.' },
//         { month: 'June', description: 'Summer approaches, energy and excitement.' },
//         { month: 'July', description: 'The height of summer, heat and adventure.' },
//         { month: 'August', description: 'A time to reflect and unwind.' },
//         { month: 'September', description: 'Back to routine, the fall breeze.' },
//         { month: 'October', description: 'The autumn chill, harvest and change.' },
//         { month: 'November', description: 'A time for gratitude and reflection.' },
//         { month: 'December', description: 'Endings and beginnings, a festive close.' },
//       ].map((item, index) => (
//         <div
//           key={index}
//           className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center justify-center cursor-pointer 
//                      hover:scale-105 transition-transform border border-gray-300"
//           style={{
//             height: '200px', // Maintain card height consistency
//             minHeight: 'auto',
//           }}
//         >
//           <h3 className="text-base sm:text-lg font-bold font-Playfair text-center">{item.month}</h3>
//           <p className="text-sm text-gray-600 font-Unna text-center">
//             {item.description}
//           </p>
//           {/* Show Explore button for screens larger than md */}
//           <button className="hidden md:block border border-gray-500 text-gray-700 px-2 font-Playfair rounded-md mt-4">
//             Explore
//           </button>
//           {/* Show icon for screens smaller than md */}
//           <FaArrowRight className="md:hidden text-blue-500 text-lg backdrop-blur-md border border-gray-500 p-1 mt-4" />
//         </div>
//       ))}
//     </div>
//   </div>
// </section>

//       )}
//     </div>
//   );
// }

// export default Diary;


// import React, { useState } from 'react';
// import { FaHome, FaInfoCircle, FaUser, FaBook, FaArrowRight } from 'react-icons/fa';
// import { Link } from 'react-router-dom';
// import woodBackground from '/home/swarnadip/Documents/Index/Index/Index/src/Components/Diary/Diary-images/beige-wooden-textured-flooring-background.jpg';
// import diaryBackground from '/home/swarnadip/Documents/Index/Index/Index/src/Components/Diary/Diary-images/freepik__upload__68172.png'
// function Diary() {
//   const [backgroundImage, setBackgroundImage] = useState(null);
//   const [monthsBackgrounds, setMonthsBackgrounds] = useState(Array(12).fill(null)); // State for storing backgrounds of each month
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [isSaved, setIsSaved] = useState(false);
//   const [explore, setExplore] = useState(false);

//   const handleBackgroundImage = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const imageURL = URL.createObjectURL(file);
//       setBackgroundImage(imageURL);
//     }
//   };

//   const handleMonthBackgroundImage = (e, monthIndex) => {
//     const file = e.target.files[0];
//     if (file) {
//       const imageURL = URL.createObjectURL(file);
//       const updatedMonthsBackgrounds = [...monthsBackgrounds];
//       updatedMonthsBackgrounds[monthIndex] = imageURL;
//       setMonthsBackgrounds(updatedMonthsBackgrounds);
//     }
//   };

//   const handleSave = () => {
//     if (!title.trim() || !description.trim()) {
//       alert('Please enter both a Title and Description before saving!');
//       return;
//     }

//     const diaryEntry = { backgroundImage, title, description };
//     console.log('Diary Entry:', diaryEntry);
//     setIsSaved(true);
//     alert('Your diary entry has been saved!');
//   };

//   const handleExplore = () => {
//     setExplore(true);
//   };

//   return (
//     <div className="min-h-screen flex flex-col max-w-screen">
//       <div className="absolute inset-0 bg-gradient-to-t from-[#e09e72] via-[#d4c1a4] to-[#ce8e41] animate-[grainMove_8s_infinite_linear]"></div>

//       {/* Header Section */}
//       <header className="h-[100px] w-full backdrop-blur-md shadow-md flex items-center justify-between pl-4 pr-8 sticky top-0 z-50">
//         <div>
//           <h1 className="font-Eagle font-bold lg:text-[35px] md:text-[30px] sm:text-[25px] text-[20px] text-[#001F3F]">
//             Painters' Diary
//           </h1>
//         </div>
//         <div className="font-Playfair flex gap-8">
//           <Link to="/">
//             <button className="hidden sm:flex bg-gradient-to-tr from-green-500 to-green-900 text-white px-2 py-1 rounded-md">
//               Home
//             </button>
//             <FaHome className="sm:hidden text-green-700 text-2xl" title="Home" />
//           </Link>
//           <button className="hidden sm:flex bg-gradient-to-tr from-green-500 to-green-900 text-white px-2 py-1 rounded-md">
//             About
//           </button>
//           <FaInfoCircle className="sm:hidden text-green-700 text-2xl" title="About" />
//           <Link to={"/Account"}>
//             <button className="hidden sm:flex bg-gradient-to-tr from-green-500 to-green-900 text-white px-2 py-1 rounded-md">
//               Account
//             </button>
//             <FaUser className="sm:hidden text-green-700 text-2xl" title="Contact" />
//           </Link>
//           <button className="hidden sm:flex bg-gradient-to-tr from-green-500 to-green-900 text-white px-2 py-1 rounded-md">
//             Explore More
//           </button>
//           <FaBook className="sm:hidden text-green-700 text-2xl" title="Collections" />
//         </div>
//       </header>

//       <div className="mt-8 lg:ml-14 md:ml-10 ml-4 flex flex-col items-center">
//         <h1 className="lg:text-4xl md:text-3xl text-2xl font-playfair">The Canvas of My Life</h1>
//       </div>

//       {!explore ? (
//         <section className="lg:w-[90vw] w-[95vw] h-[75vh] mx-auto mt-8 relative border border-black overflow-hidden">
//           {backgroundImage ? (
//             <div
//               className="w-full h-full bg-cover bg-center relative"
//               style={{ backgroundImage: `url(${backgroundImage})` }}
//             >
//               <div className="absolute inset-0 flex items-center justify-center p-4">
//                 <div className="backdrop-blur-lg border border-gray-300 shadow-lg w-[90%] md:w-[50%] lg:w-[40%] p-6 rounded-lg text-white flex justify-center items-center flex-col">
//                   <h1 className="text-center lg:text-4xl md:text-2xl text-xl font-bold mb-6 font-Playfair">
//                     The Memories of 2024
//                   </h1>
//                   <div className="relative mb-6">
//                     <input
//                       type="text"
//                       placeholder="Title"
//                       className="w-full bg-transparent border-b text-2xl border-gray-300 text-center placeholder-gray-100 focus:outline-none focus:ring-0 text-white font-Unna"
//                       value={title}
//                       onChange={(e) => setTitle(e.target.value)}
//                       required
//                     />
//                   </div>
//                   <div className="relative mb-6">
//                     <textarea
//                       placeholder="Description"
//                       className="w-full bg-transparent border-b text-xl border-gray-300 text-center placeholder-gray-100 focus:outline-none focus:ring-0 text-white font-Unna resize-none"
//                       rows={2}
//                       value={description}
//                       onChange={(e) => setDescription(e.target.value)}
//                       required
//                     />
//                   </div>
//                   <button
//                     onClick={isSaved ? handleExplore : handleSave}
//                     className="w-[40%] bg-blue-500 px-6 py-2 rounded-md hover:bg-blue-700 transition text-white"
//                   >
//                     {isSaved ? 'Explore' : 'Save'}
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ) : (
//             <label
//               htmlFor="background-upload"
//               className="w-full h-full bg-gradient-to-tr from-[#a11d33] to-[#602437] flex items-center justify-center cursor-pointer text-white font-Playfair text-lg font-semibold transition"
//             >
//               Upload Background Image to Discover More
//               <input
//                 type="file"
//                 id="background-upload"
//                 accept="image/*"
//                 className="hidden"
//                 onChange={handleBackgroundImage}
//               />
//             </label>
//           )}
//         </section>
//       ) : (
//         <section className="lg:w-[90vw] w-[95vw] mx-auto mt-8 relative border border-black bg-cover bg-center p-4" style={{backgroundImage: `url(${woodBackground})`}}>
//           <h2 className="text-2xl font-Playfair mb-6 lg:mt-0 mt-4 text-center">
//        Your Year in 12 Chapters
//          </h2>
//           <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 w-full px-4">
//             {[
//               { month: 'January', description: 'The beginning, a fresh start.' },
//               { month: 'February', description: 'The month of love and reflection.' },
//               { month: 'March', description: 'Spring is here, time for new beginnings.' },
//               { month: 'April', description: 'A month of renewal and growth.' },
//               { month: 'May', description: 'The month of flowers and dreams.' },
//               { month: 'June', description: 'Summer approaches, energy and excitement.' },
//               { month: 'July', description: 'The height of summer, heat and adventure.' },
//               { month: 'August', description: 'A time to reflect and unwind.' },
//               { month: 'September', description: 'Back to routine, the fall breeze.' },
//               { month: 'October', description: 'The autumn chill, harvest and change.' },
//               { month: 'November', description: 'A time for gratitude and reflection.' },
//               { month: 'December', description: 'Endings and beginnings, a festive close.' },
//             ].map((item, index) => (
//               <div
//                 key={index}
//                 className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center justify-center cursor-pointer 
//                           hover:scale-105 transition-transform border border-gray-300"
//                 style={{
//                   height: '200px', // Maintain card height consistency
//                   backgroundImage: `url(${monthsBackgrounds[index] || diaryBackground})`, // Use custom background or default
//                   backgroundSize: 'cover',
//                   backgroundPosition: 'center',
//                 }}
//               >
//                 <h3 className="text-base sm:text-lg font-bold font-Playfair text-center">{item.month}</h3>
//                 <p className="text-sm text-gray-600 font-Unna text-center">
//                   {item.description}
//                 </p>
//                 {/* File input to upload a background image for each month */}
//                 <input
//                   type="file"
//                   accept="image/*"
//                   className="mt-2"
//                   onChange={(e) => handleMonthBackgroundImage(e, index)} // Pass the month index
//                 />
//                  <button className="hidden md:block border border-gray-500 text-gray-700 px-2 font-Playfair rounded-md mt-4">
//                  Explore
//                  </button>
//                 <FaArrowRight className="md:hidden text-blue-500 text-lg backdrop-blur-md border border-gray-500 p-1 mt-4" />
//               </div>
//             ))}
//           </div>
//         </section>
//       )}
//     </div>
//   );
// }

// export default Diary;