
import React, { useState, useEffect,useRef } from 'react';
import { FaBook, FaInfoCircle, FaHome, FaUser, FaArrowCircleUp,FaPen } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import { FaSearch } from "react-icons/fa";

function January() {
    const [selectedDay, setSelectedDay] = useState('');
    const [motivateImage, setMotivateImage] = useState(null);
    const [motivateText, setMotivateText] = useState("");    
    const [isWriting, setIsWriting] = useState(false);  
    const [startImage, setStartImage] = useState(null);
    const [finishImage, setFinishImage] = useState(null);
    const [isExpanded, setIsExpanded] = useState(false);
    const [query, setQuery] = useState("");

     useEffect(() => {
        AOS.init({ duration: 800 });
      }, [])

      const [image, setImage] = useState(null);

      const handleImageChange = (event) => {
          const file = event.target.files[0];
          if (file) {
              setImage(URL.createObjectURL(file)); // Create preview
          }
      };
  
      const handleUploadClick = () => {
          document.getElementById('fileInput').click();
      };

      const handleMotivateImageChange = (event) => {
        const file = event.target.files[0];
        if (file && file.type.startsWith("image/")) {
            setMotivateImage(URL.createObjectURL(file)); // Show image preview
            setIsWriting(false); // Disable writing mode
            setMotivateText(""); // Clear text if switching to image
        } else {
            alert("Please upload an image file (JPG, PNG, GIF, etc.)");
        }
    };

    const handleMotivateUploadClick = () => {
        document.getElementById("motivateFileInput").click();
    };

    const handleStartImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setStartImage(URL.createObjectURL(file));
        }
    };

    // Handles image selection for "How It Finished"
    const handleFinishImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFinishImage(URL.createObjectURL(file));
        }
    };

    return (
        <div className='min-h-screen max-w-screen bg-gradient-to-br from-gray-700 via-gray-500 to-gray-600 flex flex-col items-center justify-between pb-8 overflow-x-hidden'>

            {/* HEADER / NAVBAR */}
                <header className="w-full h-[100px] bg-gray-800/50 backdrop-blur-md flex items-center justify-between px-4 md:px-6 shadow-lg text-white fixed top-0 z-50">
      {/* Title */}
      <h1 className="text-[22px] sm:text-[28px] md:text-[32px] font-bold font-Eagle">
        Painters' Diary
      </h1>

      {/* Navigation + Search */}
      <div className="flex items-center gap-x-3">
        {/* Animated Search Bar */}
        <motion.div
          className="flex items-center bg-white border border-gray-300 rounded-full shadow-md overflow-hidden"
          initial={{ width: "40px" }}
          animate={{ width: isExpanded ? "200px" : "40px" }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <motion.input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className={`px-4 py-2 w-full outline-none text-gray-700 bg-transparent ${
              isExpanded ? "block" : "hidden"
            }`}
            placeholder="Search..."
          />
          <motion.button
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-2 text-gray-600 hover:text-gray-800"
            whileTap={{ scale: 0.9 }}
          >
            <FaSearch />
          </motion.button>
        </motion.div>

        {/* Menu Buttons */}
        <Link to={"/"}>
          <button className="px-3 py-1 bg-gray-700 hover:bg-gray-600 rounded-md text-white border border-gray-400 text-[16px] flex items-center gap-1">
            <FaHome className="text-lg sm:hidden" />
            <span className="hidden sm:inline">Home</span>
          </button>
        </Link>
        <Link to={"/About"}>
          <button className="px-3 py-1 bg-gray-700 hover:bg-gray-600 rounded-md text-white border border-gray-400 text-[16px] flex items-center gap-1">
            <FaInfoCircle className="text-lg sm:hidden" />
            <span className="hidden sm:inline">About</span>
          </button>
        </Link>
        <Link to={"/Account"}>
          <button className="px-3 py-1 bg-gray-700 hover:bg-gray-600 rounded-md text-white border border-gray-400 text-[16px] flex items-center gap-1">
            <FaUser className="text-lg sm:hidden" />
            <span className="hidden sm:inline">Account</span>
          </button>
        </Link>
        <Link to={"/Diary"}>
          <button className="px-3 py-1 bg-gray-700 hover:bg-gray-600 rounded-md text-white border border-gray-400 text-[16px] flex items-center gap-1">
            <FaBook className="text-lg sm:hidden" />
            <span className="hidden sm:inline">Diary</span>
          </button>
        </Link>
      </div>
    </header>

            {/* MAIN CONTENT */}
            <main className='lg:w-[80%] w-[92%] bg-gray-500 rounded-md border border-gray-400 mt-[150px] overflow-hidden lg:p-6 p-2 text-white'>

                {/* Title and Date Inputs */}
                <div className='w-full flex items-center justify-between lg:px-6 px-2 flex-wrap animate-fadeIn'>
                    <div>
                        <h1 className='md:text-[25px] text-[20px] font-Playfair font-semibold'>Title</h1>
                        <input className='w-full h-10 bg-gray-700 border border-gray-600 rounded-md px-4 py-2 outline-none text-white font-serif' type="text" />
                    </div>
                    <div>
                        <h1 className='md:text-[25px] text-[20px] font-Playfair font-semibold'>Date</h1>
                        <input className='w-full h-10 bg-gray-700 border border-gray-600 rounded-md px-4 py-2 outline-none text-white font-serif' type="date" />
                    </div>
                    <div>
                        <h1 className='md:text-[25px] text-[20px] font-Playfair font-semibold'>Day</h1>
                        <select className='w-full h-10 bg-gray-700 border border-gray-600 rounded-md px-4 py-2 outline-none text-white font-serif'
                            id="day"
                            value={selectedDay}
                            onChange={(e) => setSelectedDay(e.target.value)}>
                            <option value="">Select a day</option>
                            <option value="sunday">Sunday</option>
                            <option value="monday">Monday</option>
                            <option value="tuesday">Tuesday</option>
                            <option value="wednesday">Wednesday</option>
                            <option value="thursday">Thursday</option>
                            <option value="friday">Friday</option>
                            <option value="saturday">Saturday</option>
                        </select>
                    </div>
                </div>

                {/* Image Section */}
                
                <section className='h-[300px] w-[100%] mt-8 flex gap-x-4 overflow-x-scroll justify-between hide-scrollbar animate-fadeIn px-6'>
                    <div className='lg:w-[300px] w-[250px] min-w-[250px] h-full rounded-md bg-black/15 backdrop-blur-lg border border-stone-400'></div>
                    <div className='lg:w-[300px] w-[250px] min-w-[250px] h-full rounded-md bg-black/15 backdrop-blur-lg border border-stone-400'></div>
                    <div className='lg:w-[300px] w-[250px] min-w-[250px] h-full rounded-md bg-black/15 backdrop-blur-lg border border-stone-400'></div>
                    <div className='lg:w-[300px] w-[250px] min-w-[250px] h-full rounded-md bg-black/15 backdrop-blur-lg border border-stone-400'></div>
                </section>

                {/* Stories and Progress Section */}
                <div className="container mx-auto p-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        <section data-aos="fade-up" className="bg-gray-700/50 p-4 border border-gray-400 rounded-md h-[500px] animate-fadeIn">
                            <h1 className="text-[30px] font-serif">Art Stories</h1>
                            <textarea 
                            className="w-full h-[85%] mt-4 bg-[#faf3e0] border border-gray-400 rounded-md px-4 py-2 outline-none font-serif
                            shadow-md resize-none leading-relaxed text-gray-900 
                             relative before:content-[''] before:absolute before:top-0 before:left-6 before:h-full 
                             before:w-[1px] before:bg-red-500"
                             placeholder="Write your notes here..."
                            ></textarea>
                        </section>
                        
                            
                    
                        <section data-aos="fade-up" className="lg:col-span-2 bg-gray-700/50 p-4 border border-gray-400 rounded-md flex items-center justify-center h-[500px] sm:h-auto sm:row-span-2 lg:row-span-1 lg:h-[500px] animate-fadeIn">
                            <div  className="w-full h-full flex flex-col lg:flex-row gap-4 items-center sm:overflow-hidden overflow-y-scroll ">

                            {/* Left Box */}
                            <div className=" w-[90%] lg:w-1/2 min-h-[452px] sm:h-[420px] h-[90%] bg-black/30 rounded-md border border-gray-400"></div>
                            {/* Right Box */}
                            <div className=" w-[90%] lg:w-1/2 min-h-[452px] sm:h-[420px] h-[90%] bg-black/30 rounded-md border border-gray-400"></div>
                        </div>
                        </section>

                        <section data-aos="fade-up" className="bg-gray-700/50 p-4 border border-gray-400 rounded-md h-[500px] animate-fadeIn items-center flex flex-col">
                            <h1 className="text-[30px] font-serif">Stories of Progress</h1>
                            <div className=' w-[90%] h-full flex flex-col items-center gap-2 mt-4'>
                                {/* the image upload part */}
                                <div className='w-full h-[60%] max-h-[300px] bg-black/30 rounded-md relative border border-gray-400 overflow-hidden'>
                                    {/* Display Uploaded Image */}
                                    {image ? (
                                   <img src={image} alt="Uploaded" className="w-full h-full object-cover" />
                                    ) : (
                                  <p className="text-white font-Playfair pl-4 pt-3">No image uploaded</p>
                                  )}
                                     {/* Hidden File Input */}
                                 <input 
                                 type="file" 
                                 id="fileInput" 
                                 className="hidden" 
                                 accept="image/*" 
                                 onChange={handleImageChange} 
                                />

                              {/* Upload Button */}
                              <div 
                              className='h-[30px] w-[30px] flex items-center justify-center absolute top-2 right-2 bg-black/50 rounded-md text-white border border-gray-400 cursor-pointer hover:text-red-200'
                               onClick={handleUploadClick}
                                   >
                                 <FaArrowCircleUp className='text-[20px]' />
                                 </div>
                            </div>    
            
          
                                <div className='w-full h-[40%] bg-black rounded-md'>
                                <textarea 
                            className="w-full h-full bg-[#FAF3E0] border border-gray-400 rounded-md px-4 py-2 outline-none font-serif
                            shadow-md resize-none leading-relaxed text-gray-900 
                             relative before:content-[''] before:absolute before:top-0 before:left-6 before:h-full 
                             before:w-[1px] before:bg-red-500"
                             placeholder="Your Tips & Trics for others..."
                            ></textarea>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* Bottom Section */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
                        {/* tips and trics */}
                        <section data-aos="fade-up"  className="bg-gray-700/50 p-4 border border-gray-400 rounded-md h-[350px]">
                            <h1 className="text-lg font-Playfair">Tips & Tricks</h1>
                            <div className='w-full h-[85%]'>
                            <textarea 
                            className="w-full h-full mt-4 bg-[#FAF3E0] border border-gray-400 rounded-md px-4 py-2 outline-none font-serif
                            shadow-md resize-none leading-relaxed text-gray-900 
                             relative before:content-[''] before:absolute before:top-0 before:left-6 before:h-full 
                             before:w-[1px] before:bg-red-500"
                             placeholder="Your Tips & Trics for others..."
                            ></textarea>
                            </div>
                        </section>
                        {/* the before and after section */}
                      
                         <section 
            data-aos="fade-up" 
            className="bg-gray-700/50 lg:col-span-2 p-4 border border-gray-400 rounded-md h-[350px] 
            sm:h-auto sm:row-span-2 lg:row-span-1 lg:h-[350px] flex justify-between lg:flex-row flex-col 
            lg:gap-2 gap-4 items-center sm:overflow-hidden overflow-y-scroll hide-scrollbar"
            >
            {/* Left Box - How It Started */}
            <div className='lg:w-[50%] w-[95%] min-h-[300px] sm:h-[300px] bg-[#3B1C32] rounded-lg overflow-hidden relative flex flex-col'>
                <div className='flex items-center justify-between mt-3 px-4'>
                    <h1 className='text-[23px] font-semibold font-Playfair'>How It Started..</h1>
                    
                    {/* Upload Button */}
                    <div 
                        className='h-[30px] w-[30px] rounded-md bg-black/50 border border-zinc-400 cursor-pointer flex items-center justify-center'
                        onClick={() => document.getElementById("startImageInput").click()}
                    >
                        <FaArrowCircleUp className='text-[20px] text-white hover:text-[#f897dc]'/>
                    </div>
                    
                    {/* Hidden File Input */}
                    <input 
                        type="file" 
                        id="startImageInput" 
                        className="hidden" 
                        accept="image/*" 
                        onChange={handleStartImageChange} 
                    />
                </div>

                {/* Image Display Box */}
                <div className='w-[90%] h-[75%] bg-white/20 rounded-md relative border border-gray-400 overflow-hidden mx-auto mt-3 flex items-center justify-center'>
                    {startImage ? (
                        <img src={startImage} alt="How It Started" className="w-full h-full object-cover" />
                    ) : (
                        <p className="text-white text-center font-serif">Upload the starting image</p>
                    )}
                </div>
            </div>

            {/* Right Box - How It Finished */}
            <div className='lg:w-[50%] w-[95%] min-h-[300px] lg:h-[290px] bg-[#301B3F] rounded-lg overflow-hidden relative flex flex-col'>
                <div className='flex items-center justify-between mt-3 px-4 w-full'>
                    <h1 className='text-[23px] font-semibold font-Playfair'>How It Finished..</h1>

                    {/* Upload Button */}
                    <div 
                        className='h-[30px] w-[30px] rounded-md bg-black/50 border border-zinc-400 cursor-pointer flex items-center justify-center'
                        onClick={() => document.getElementById("finishImageInput").click()}
                    >
                        <FaArrowCircleUp className='text-[20px] text-white hover:text-[#c57cfa]'/>
                    </div>

                    {/* Hidden File Input */}
                    <input 
                        type="file" 
                        id="finishImageInput" 
                        className="hidden" 
                        accept="image/*" 
                        onChange={handleFinishImageChange} 
                    />
                </div>

                {/* Image Display Box */}
                <div className='w-[90%] h-[75%] bg-white/20 rounded-md relative border border-gray-400 overflow-hidden mx-auto mt-3 flex items-center justify-center'>
                    {finishImage ? (
                        <img src={finishImage} alt="How It Finished" className="w-full h-full object-cover" />
                    ) : (
                        <p className="text-white text-center font-serif">Upload the ending image</p>
                    )}
                </div>
            </div>
        </section>

                        {/* motivate section  */}
               <section 
            data-aos="fade-up" 
            className="bg-gray-700/50 lg:p-4 sm:p-2 p-1 border border-gray-400 rounded-md h-[350px] w-full mx-auto flex flex-col items-center">
            
            <h1 className="text-lg font-Playfair text-center sm:text-left">
                Motivate with your thought..
            </h1>

            {/* Unified Box for Image or Text */}
            <div 
                className="w-[90%] h-[80%] mt-4 bg-black/30 rounded-md relative border border-gray-400 overflow-hidden flex justify-center items-center"
            >
                {isWriting ? (
                    // Text Area Mode
                    <textarea 
                        className="w-full h-full p-2 bg-transparent text-white border-none resize-none focus:outline-none"
                        placeholder="Write your motivational thought here..."
                        value={motivateText}
                        onChange={(e) => setMotivateText(e.target.value)}
                        autoFocus
                    ></textarea>
                ) : motivateImage ? (
                    // Image Mode
                    <img src={motivateImage} alt="Uploaded" className="w-full h-full object-cover" />
                ) : (
                    // Default Message
                    <p className="text-white font-Playfair pl-4 pt-3">Upload an image or write your thoughts</p>
                )}
            </div>

            {/* Hidden File Input */}
            <input 
                type="file" 
                id="motivateFileInput" 
                className="hidden" 
                accept="image/*" 
                onChange={handleMotivateImageChange} 
            />

            {/* Upload & Write Buttons */}
            <div className="flex gap-4 mt-2">
                {/* Upload Button */}
                <div 
                    className='h-[30px] w-[30px] flex items-center justify-center bg-black/50 rounded-md text-white border border-gray-400 cursor-pointer hover:text-red-200'
                    onClick={handleMotivateUploadClick}
                >
                    <FaArrowCircleUp className='text-[20px]' />
                </div>

                {/* Write Button */}
                <div 
                    className='h-[30px] w-[30px] flex items-center justify-center bg-black/50 rounded-md text-white border border-gray-400 cursor-pointer hover:text-red-200'
                    onClick={() => {
                        setIsWriting(true);
                        setMotivateImage(null); // Remove image if switching to writing mode
                    }}
                >
                    <FaPen className='text-[18px]' />
                </div>
            </div>
        </section>
                    </div>
                </div>
 
                {/* Submit Button */}
                <div className='flex justify-center mt-4'>
                    <button className='w-1/4 md:w-1/5 lg:w-1/6 h-10 bg-zinc-700 border border-gray-300 hover:bg-zinc-600 text-white rounded-md font-Playfair text-[20px] font-medium mt-4'>
                        Save
                    </button>
                </div>
            </main>
        </div>
    );
}

export default January; 