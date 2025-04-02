
import React, { useState } from 'react';
import { FaHome, FaInfoCircle, FaUser, FaBook, FaArrowRight, FaArrowUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import woodBackground from '/home/swarnadip/Documents/Index/Index/Index/src/Components/Journal/Diary-images/beige-wooden-textured-flooring-background.jpg';
import diaryBackground from '/home/swarnadip/Documents/Index/Index/Index/src/Components/Journal/Diary-images/1d19d578-7d3a-454b-9ce3-2dae3fd63c7b.jpg';
import { FiUpload } from 'react-icons/fi';
import {LuArrowRightFromLine} from "react-icons/lu"
function Journal() {
  const [backgroundImage, setBackgroundImage] = useState(null);
  const [monthsBackgrounds, setMonthsBackgrounds] = useState(Array(12).fill(null));
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [isSaved, setIsSaved] = useState(false);
  const [explore, setExplore] = useState(false);

  const handleBackgroundImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setBackgroundImage(imageURL);
    }
  };

  const handleMonthBackgroundImage = (e, monthIndex) => {
    const file = e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      const updatedMonthsBackgrounds = [...monthsBackgrounds];
      updatedMonthsBackgrounds[monthIndex] = imageURL;
      setMonthsBackgrounds(updatedMonthsBackgrounds);
    }
  };

  const handleSave = () => {
    if (!title.trim() || !description.trim()) {
      alert('Please enter both a Title and Description before saving!');
      return;
    }
    const diaryEntry = { backgroundImage, title, description };
    console.log('Diary Entry:', diaryEntry);
    setIsSaved(true);
    alert('Your diary entry has been saved!');
  };

  const handleExplore = () => {
    setExplore(true);
  };

  return (
    <div className="min-h-screen flex flex-col max-w-screen bg-gradient-to-t from-[#e09e72] via-[#d4c1a4] to-[#ce8e41]">
      {/* Header Section (unchanged) */}
      <header className="h-[100px] w-full backdrop-blur-md shadow-md flex items-center justify-between px-6 sticky top-0 z-50">
        <div>
          <h1 className="font-Eagle font-bold lg:text-[35px] md:text-[30px] sm:text-[25px] text-[20px] text-[#001F3F]">
            Painters' Diary
          </h1>
        </div>
        <div className="font-Playfair flex md:gap-8 gap-3">
          <Link to="/">
            <button className="hidden sm:flex bg-gradient-to-tr from-green-500 to-green-900 text-white px-2 py-1 rounded-md">
              Home
            </button>
            <FaHome className="sm:hidden text-green-700 text-xl" title="Home" />
          </Link>
          <Link to="/About">
            <button className="hidden sm:flex bg-gradient-to-tr from-green-500 to-green-900 text-white px-2 py-1 rounded-md">
              About
            </button>
          </Link>
          <FaInfoCircle className="sm:hidden text-green-700 text-xl" title="About" />
          <Link to="/Account">
            <button className="hidden sm:flex bg-gradient-to-tr from-green-500 to-green-900 text-white px-2 py-1 rounded-md">
              Account
            </button>
            <FaUser className="sm:hidden text-green-700 text-xl" title="Contact" />
          </Link>
          <button className="hidden sm:flex bg-gradient-to-tr from-green-500 to-green-900 text-white px-2 py-1 rounded-md">
            Explore More
          </button>
          <FaBook className="sm:hidden text-green-700 text-xl" title="Collections" />
        </div>
      </header>

      <div className="mt-8 lg:ml-14 md:ml-10 ml-4 flex flex-col items-center">
        <h1 className="lg:text-4xl md:text-3xl text-2xl font-playfair">The Canvas of My Life</h1>
      </div>

      {!explore ? (
        /* Main Section (unchanged) */
        <section className="lg:w-[90vw] w-[95vw] h-[75vh] mx-auto mt-8 relative border border-black overflow-hidden">
          {backgroundImage ? (
            <div
              className="w-full h-full bg-cover bg-center relative"
              style={{ backgroundImage: `url(${backgroundImage})` }}
            >
              <div className="absolute inset-0 flex items-center justify-center p-4">
                <div className="backdrop-blur-lg border border-gray-300 shadow-lg w-[90%] md:w-[50%] lg:w-[40%] p-6 rounded-md text-white flex justify-center items-center flex-col">
                  <h1 className="text-center lg:text-4xl md:text-2xl text-xl font-bold mb-6 font-Playfair">
                    The Memories of 2024
                  </h1>
                  <div className="relative mb-6">
                    <input
                      type="text"
 Tori placeholder="Title"
                      className="w-full bg-transparent border-b text-2xl border-gray-300 text-center placeholder-gray-100 focus:outline-none focus:ring-0 text-white font-Unna"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      required
                    />
                  </div>
                  <div className="relative mb-6">
                    <textarea
                      placeholder="Description"
                      className="w-full bg-transparent border-b text-xl border-gray-300 text-center placeholder-gray-100 focus:outline-none focus:ring-0 text-white font-Unna resize-none"
                      rows={2}
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      required
                    />
                  </div>
                  <button
                    onClick={isSaved ? handleExplore : handleSave}
                    className="w-[40%] bg-blue-500 px-6 py-2 rounded-md hover:bg-blue-700 transition text-white"
                  >
                    {isSaved ? 'Explore' : 'Save'}
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <label
              htmlFor="background-upload"
              className="w-full h-full bg-gradient-to-tr from-[#a11d33] to-[#602437] flex items-center justify-center cursor-pointer text-white font-Playfair text-lg font-semibold transition"
            >
              Upload Background Image to Discover More
              <input
                type="file"
                id="background-upload"
                accept="image/*"
                className="hidden"
                onChange={handleBackgroundImage}
              />
            </label>
          )}
        </section>
      ) : (
        /* Updated Months Section with Upload Button in Top-Right */
        <section
          className="lg:w-[90vw] w-[95vw] mx-auto mt-8 relative border border-black bg-cover bg-center p-4"
          style={{ backgroundImage: `url(${woodBackground})` }}
        >
          <h2 className="text-3xl font-Playfair mb-6 lg:mt-0 mt-4 text-center">
            Your Year in 12 Chapters
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full px-4">
            {[
              { month: 'January', description: 'The beginning, a fresh start.', to: '/January' },
              { month: 'February', description: 'The month of love and reflection.', to: '/February' },
              { month: 'March', description: 'Spring is here, time for new beginnings.', to: '/March' },
              { month: 'April', description: 'A month of renewal and growth.', to: '/April' },
              { month: 'May', description: 'The month of flowers and dreams.', to: '/May' },
              { month: 'June', description: 'Summer approaches, energy and excitement.', to: '/June' },
              { month: 'July', description: 'The height of summer, heat and adventure.', to: '/July' },
              { month: 'August', description: 'A time to reflect and unwind.', to: '/August' },
              { month: 'September', description: 'Back to routine, the fall breeze.', to: '/September' },
              { month: 'October', description: 'The autumn chill, harvest and change.', to: '/October' },
              { month: 'November', description: 'A time for gratitude and reflection.', to: '/November' },
              { month: 'December', description: 'Endings and beginnings, a festive close.', to: '/December' },
            ].map((item, index) => {
              const hasBackground = monthsBackgrounds[index] !== null;
              return (
                <div
                  key={index}
                  className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center justify-center cursor-pointer  transition-transform border border-gray-300 relative"
                  style={{
                    height: '200px',
                    backgroundImage: `url(${monthsBackgrounds[index] || diaryBackground})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    color: hasBackground ? 'white' : 'black',
                  }}
                >
                  <h3
                    className={`text-base sm:text-xl font-semibold font-Playfair text-center ${
                      hasBackground ? 'text-white' : 'text-black'
                    }`}
                  >
                    {item.month}
                  </h3>
                  <p
                    className={`text-base sm:text-lg font-normal font-Newsreader text-center ${
                      hasBackground ? 'text-white' : 'text-slate-800'
                    }`}
                  >
                    {item.description}
                  </p>

                  {/* Upload Button in Top-Right Corner */}
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    id={`upload-${index}`}
                    onChange={(e) => handleMonthBackgroundImage(e, index)}
                  />
                  <label
                    htmlFor={`upload-${index}`}
                    className="absolute top-2 right-2 bg-transparent text-black p-1 rounded-md cursor-pointer hover:bg-gray-200 transition"
                  >
                    <FiUpload />
                  </label>

                  {/* Explore Button/Link */}
                  <Link to={item.to}>
                    <button
                      className={`hidden md:block border px-2 font-Playfair rounded-md mt-4 backdrop-blur-md ${
                        hasBackground ? 'text-white border-slate-100' : 'text-slate-800 border-gray-600'
                      }`}
                    >
                      Explore
                    </button>
                  </Link>
                  <Link to={item.to}>
                    <LuArrowRightFromLine size={22}
                      className="md:hidden text-blue-500 text-lg backdrop-blur-md p-1 mt-4"
                    />
                  </Link>
                </div>
              );
            })}
          </div>
        </section>
      )}
    </div>
  );
}

export default Journal;