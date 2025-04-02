
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FeedBackground from '/home/swarnadip/Documents/Index/Index/Index/src/Resources/Feedback/evaluation-feedback-customer-smiley-response.jpg'; // Relative path, src ke andar hona chahiye
import FeedBackground2 from '/home/swarnadip/Documents/Index/Index/Index/src/Resources/Feedback/9019830.jpg'; // Same yahan bhi
import { FaHome, FaInfoCircle, FaUser, FaBook } from 'react-icons/fa';

// function Feedback() {
//   const [rating, setRating] = useState(0);
//   const [hover, setHover] = useState(0);

//   // Colorful emotions with emoji and text
//   const emojiReactions = {
//     1: { text: 'Very Bad 😡', color: '#ff4d4d' }, // Red
//     2: { text: 'Bad 😞', color: '#ff8c1a' },      // Orange
//     3: { text: 'Okay 😐', color: '#ffd700' },     // Yellow
//     4: { text: 'Good 😊', color: '#00cc00' },     // Green
//     5: { text: 'Excellent! 😍', color: '#ff69b4' }, // Pink
//   };

//   const handleClick = (star) => {
//     setRating(star);
//   };

//   return (
//     <>
//       {/* Header */}
//       <header className="h-[100px] w-full bg-gradient-to-l from-[#10002bad] to-[#dec9e9a9] backdrop-blur-md flex items-center justify-between px-4 md:px-6 shadow-lg text-white fixed top-0 z-50">
//         <h1 className="lg:text-[35px] md:text-[30px] sm:text-[25px] text-[20px] font-bold font-Eagle">
//           Painters' Diary
//         </h1>
//         <div className="flex items-center justify-center gap-x-2">
//           <Link to="/">
//             <button className="lg:px-4 px-2 py-1 bg-violet-900/50 hover:bg-violet-800/80 rounded-md font-Playfair text-white border border-gray-400 text-[18px]">
//               <FaHome className="text-xl sm:hidden" />
//               <span className="hidden sm:inline">Home</span>
//             </button>
//           </Link>
//           <Link to="/About">
//             <button className="lg:px-4 px-2 py-1 bg-violet-900/50 hover:bg-violet-800/80 rounded-md font-Playfair text-white border border-gray-400 text-[18px]">
//               <FaInfoCircle className="text-xl sm:hidden" />
//               <span className="hidden sm:inline">About</span>
//             </button>
//           </Link>
//           <Link to="/Account">
//             <button className="lg:px-4 px-2 py-1 bg-violet-900/50 hover:bg-violet-800/80 rounded-md font-Playfair text-white border border-gray-400 text-[18px]">
//               <FaUser className="text-xl sm:hidden" />
//               <span className="hidden sm:inline">Account</span>
//             </button>
//           </Link>
//           <Link to="/Diary">
//             <button className="lg:px-4 px-2 py-1 bg-violet-900/50 hover:bg-violet-800/80 rounded-md font-Playfair text-white border border-gray-400 text-[18px]">
//               <FaBook className="text-xl sm:hidden" />
//               <span className="hidden sm:inline">Diary</span>
//             </button>
//           </Link>
//         </div>
//       </header>

//       {/* Desktop View */}
//       <div
//         className="min-h-screen w-screen bg-center bg-cover  items-center justify-center lg:block hidden pt-[200px]"
//         style={{ backgroundImage: `url(${FeedBackground})` }}
//       >
//         <main className="w-[80%] h-[70vh] bg-white/10 backdrop-blur-sm mx-auto flex items-center justify-center flex-col gap-4">
//           <h1 className="text-4xl text-center font-Playfair text-yellow-950 font-semibold">
//             What do You Think Is Very Important To Us!
//           </h1>
//           <form className="flex flex-col gap-6 w-full max-w-md">
//             <div>
//               <h1 className="text-[30px] font-Playfair text-white">Username</h1>
//               <input
//                 className="w-full p-2 rounded-md bg-white/20 text-white outline-none border border-gray-400"
//                 type="text"
//                 placeholder="Enter your name"
//               />
//             </div>
//             <div>
//               <h1 className="text-[30px] font-Playfair text-white">Rate Us</h1>
//               <div style={{ textAlign: 'center', fontSize: '24px' }}>
//                 {[1, 2, 3, 4, 5].map((star) => (
//                   <span
//                     key={star}
//                     onMouseEnter={() => setHover(star)}
//                     onMouseLeave={() => setHover(0)}
//                     onClick={() => handleClick(star)}
//                     style={{
//                       cursor: 'pointer',
//                       fontSize: '40px',
//                       transition: 'transform 0.2s',
//                       color: star <= (hover || rating) ? 'gold' : 'gray',
//                       transform: star === (hover || rating) ? 'scale(1.2)' : 'scale(1)',
//                     }}
//                   >
//                     ⭐
//                   </span>
//                 ))}
//                 {rating > 0 && (
//                   <p
//                     style={{
//                       fontSize: '25px',
//                       fontFamily: 'Playfair',
//                       marginTop: '10px',
//                       color: emojiReactions[rating].color,
//                       fontWeight: 'bold',
//                     }}
//                   >
//                     {emojiReactions[rating].text}
//                   </p>
//                 )}
//               </div>
//             </div>
//             <div>
//               <h1 className="text-[30px] font-Playfair text-white">Write What You Think</h1>
//               <input
//                 className="w-full p-2 rounded-md bg-white/20 text-white outline-none border border-gray-400"
//                 type="text"
//                 placeholder="Your feedback here"
//               />
//             </div>
//             <button
//               type="submit"
//               className="p-2 bg-violet-900/80 hover:bg-violet-800 rounded-md text-white font-Playfair text-lg"
//             >
//               Submit
//             </button>
//           </form>
//         </main>
//       </div>

//       {/* Mobile View */}
//       <div
//         className="min-h-screen w-screen bg-center bg-cover items-center justify-center lg:hidden block pt-[200px]"
//         style={{ backgroundImage: `url(${FeedBackground2})` }}
//       >
//         <main className="md:w-[80%] sm:w-[85%] w-[90%] h-[70vh] bg-white/10 backdrop-blur-sm mx-auto flex items-center justify-center flex-col gap-4">
//           <h1 className="md:text-3xl sm:text-2xl text-xl text-center font-Playfair text-white">
//             What do You Think Is Very Important To Us!
//           </h1>
//           <form className="flex flex-col gap-6 w-full max-w-md">
//             <div>
//               <h1 className="text-[25px] font-Playfair text-white">Username</h1>
//               <input
//                 className="w-full p-2 rounded-md bg-white/20 text-white outline-none border border-gray-400"
//                 type="text"
//                 placeholder="Enter your name"
//               />
//             </div>
//             <div>
//               <h1 className="text-[25px] font-Playfair text-white">Rate Us</h1>
//               <div style={{ textAlign: 'center', fontSize: '20px' }}>
//                 {[1, 2, 3, 4, 5].map((star) => (
//                   <span
//                     key={star}
//                     onMouseEnter={() => setHover(star)}
//                     onMouseLeave={() => setHover(0)}
//                     onClick={() => handleClick(star)}
//                     style={{
//                       cursor: 'pointer',
//                       fontSize: '35px',
//                       transition: 'transform 0.2s',
//                       color: star <= (hover || rating) ? 'gold' : 'gray',
//                       transform: star === (hover || rating) ? 'scale(1.2)' : 'scale(1)',
//                     }}
//                   >
//                     ⭐
//                   </span>
//                 ))}
//                 {rating > 0 && (
//                   <p
//                     style={{
//                       fontSize: '20px',
//                       fontFamily: 'Playfair',
//                       marginTop: '10px',
//                       color: emojiReactions[rating].color,
//                       fontWeight: 'bold',
//                     }}
//                   >
//                     {emojiReactions[rating].text}
//                   </p>
//                 )}
//               </div>
//             </div>
//             <div>
//               <h1 className="text-[25px] font-Playfair text-white">Write What You Think</h1>
//               <input
//                 className="w-full p-2 rounded-md bg-white/20 text-white outline-none border border-gray-400"
//                 type="text"
//                 placeholder="Your feedback here"
//               />
//             </div>
//             <button
//               type="submit"
//               className="p-2 bg-violet-900/80 hover:bg-violet-800 rounded-md text-white font-Playfair text-lg"
//             >
//               Submit
//             </button>
//           </form>
//         </main>
//       </div>
//     </>
//   );
// }

// export default Feedback;
// import React, { useState } from 'react';
// import FeedBackground from '../Resources/Feedback/evaluation-feedback-customer-smiley-response.jpg'; // Adjust path
// import FeedBackground2 from '../Resources/Feedback/9019830.jpg'; // Adjust path
// import { Link } from 'react-router-dom';
// import { FaHome, FaInfoCircle, FaUser, FaBook } from 'react-icons/fa';
import twemoji from 'twemoji'; // Twemoji import

function Feedback() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);


  // Colorful emotions with emoji and text
  const emojiReactions = {
    1: { text: 'Very Bad ', color: '#ff4d4d' }, // Red
    2: { text: 'Bad ', color: '#ff8c1a' },      // Orange
    3: { text: 'Okay ', color: '#ffd700' },     // Yellow
    4: { text: 'Good ', color: '#00cc00' },     // Green
    5: { text: 'Excellent! ', color: '#ff69b4' }, // Pink
  };

  const handleClick = (star) => {
    setRating(star);
  };

  // Function to parse emoji into colorful SVG
  const renderEmoji = (text) => {
    return { __html: twemoji.parse(text, { folder: 'svg', ext: '.svg' }) };
  };

  return (
    <>
      {/* Header */}
      <header className="h-[100px] w-full bg-gradient-to-l from-[#10002bad] to-[#dec9e9a9] backdrop-blur-md flex items-center justify-between px-4 md:px-6 shadow-lg text-white fixed top-0 z-50">
        <h1 className="lg:text-[35px] md:text-[30px] sm:text-[25px] text-[20px] font-bold font-Eagle">
          Painters' Diary
        </h1>
        <div className="flex items-center justify-center gap-x-2">
          <Link to="/">
            <button className="lg:px-4 px-2 py-1 bg-violet-900/50 hover:bg-violet-800/80 rounded-md font-Playfair text-white border border-gray-400 text-[18px]">
              <FaHome className="text-xl sm:hidden" />
              <span className="hidden sm:inline">Home</span>
            </button>
          </Link>
          <Link to="/About">
            <button className="lg:px-4 px-2 py-1 bg-violet-900/50 hover:bg-violet-800/80 rounded-md font-Playfair text-white border border-gray-400 text-[18px]">
              <FaInfoCircle className="text-xl sm:hidden" />
              <span className="hidden sm:inline">About</span>
            </button>
          </Link>
          <Link to="/Account">
            <button className="lg:px-4 px-2 py-1 bg-violet-900/50 hover:bg-violet-800/80 rounded-md font-Playfair text-white border border-gray-400 text-[18px]">
              <FaUser className="text-xl sm:hidden" />
              <span className="hidden sm:inline">Account</span>
            </button>
          </Link>
          <Link to="/Journal">
            <button className="lg:px-4 px-2 py-1 bg-violet-900/50 hover:bg-violet-800/80 rounded-md font-Playfair text-white border border-gray-400 text-[18px]">
              <FaBook className="text-xl sm:hidden" />
              <span className="hidden sm:inline">Diary</span>
            </button>
          </Link>
        </div>
      </header>

      {/* Desktop View */}
      <div
        className="min-h-screen w-screen bg-center bg-cover  items-center justify-center lg:block hidden pt-[200px]"
        style={{ backgroundImage: `url(${FeedBackground})` }}
      >
        <main className="w-[50%] h-[70vh] bg-white/10 backdrop-blur-sm mx-auto flex items-center justify-center flex-col gap-4 rounded-lg">
          <h1 className="text-4xl text-center font-Playfair text-yellow-950 font-semibold">
            What do You Think Is Very Important To Us!
          </h1>
          <form className="flex flex-col gap-6 w-full max-w-md">
            <div>
              <h1 className="text-[30px] font-Playfair text-[#720026]">Username</h1>
              <input
              id='FeedInput'
                className="w-full p-2 rounded-md bg-white/20 text-[#461220] outline-none border border-gray-400 font-Playfair"
                type="text"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <h1 className="text-[30px] font-Playfair text-[#720026]">Rate Us</h1>
              <div style={{ textAlign: 'center', fontSize: '24px' }}>
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    onMouseEnter={() => setHover(star)}
                    onMouseLeave={() => setHover(0)}
                    onClick={() => handleClick(star)}
                    style={{
                      cursor: 'pointer',
                      fontSize: '40px',
                      transition: 'transform 0.2s',
                      color: star <= (hover || rating) ? '#ca6702' : 'gray',
                      transform: star === (hover || rating) ? 'scale(1.2)' : 'scale(1)',
                    }}
                  >
                    ⭐
                  </span>
                ))}
                {rating > 0 && (
                  <p
                    style={{
                      fontSize: '25px',
                      fontFamily: 'Playfair',
                      marginTop: '10px',
                      color: emojiReactions[rating].color,
                      fontWeight: 'bold',
                    }}
                    dangerouslySetInnerHTML={renderEmoji(emojiReactions[rating].text)}
                  />
                )}
              </div>
            </div>
            <div>
              <h1 className="text-[30px] font-Playfair text-[#720026]">Write What You Think</h1>
              
                            <textarea 
                            className="w-full h-[100px] mt-2 bg-[#faf3e0] border border-gray-400 rounded-md px-4 py-2 outline-none font-serif
                            shadow-md resize-none leading-relaxed text-gray-900 
                             relative before:content-[''] before:absolute before:top-0 before:left-6 before:h-full 
                             before:w-[1px] before:bg-red-500"
                             placeholder="Write your notes here..."
                            ></textarea>

            </div>
            <button
              type="submit"
              className="p-2 bg-violet-900/80 hover:bg-violet-800 rounded-md text-white font-Playfair text-lg"
            >
              Submit
            </button>
          </form>
        </main>
      </div>

      {/* Mobile View */}
      <div
        className="min-h-screen w-screen bg-center bg-cover items-center justify-center lg:hidden block pt-[200px]"
        style={{ backgroundImage: `url(${FeedBackground2})` }}
      >
        <main className="md:w-[80%] sm:w-[85%] w-[90%] h-[70vh] bg-white/10 backdrop-blur-sm mx-auto flex items-center justify-center flex-col gap-4">
          <h1 className="md:text-3xl sm:text-2xl text-xl text-center font-Playfair text-[#ba181b]">
            What do You Think Is Very Important To Us!
          </h1>
          <form className="flex flex-col gap-6 w-full max-w-md pl-1 sm:pl-0 ">
            <div>
              <h1 className="text-[25px] font-Playfair text-[#774936]">Username</h1>
              <input
              id='FeedInput'
                className="sm:w-full w-[95%] p-2 rounded-md bg-white/20 text-[#b23a48] outline-none border border-gray-400"
                type="text"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <h1 className="text-[25px] font-Playfair text-[#774936]">Rate Us</h1>
              <div style={{ textAlign: 'center', fontSize: '20px' }}>
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    onMouseEnter={() => setHover(star)}
                    onMouseLeave={() => setHover(0)}
                    onClick={() => handleClick(star)}
                    style={{
                      cursor: 'pointer',
                      fontSize: '35px',
                      transition: 'transform 0.2s',
                      color: star <= (hover || rating) ? 'gold' : 'gray',
                      transform: star === (hover || rating) ? 'scale(1.2)' : 'scale(1)',
                    }}
                  >
                    ⭐
                  </span>
                ))}
                {rating > 0 && (
                  <p
                    style={{
                      fontSize: '20px',
                      fontFamily: 'Playfair',
                      marginTop: '10px',
                      color: emojiReactions[rating].color,
                      fontWeight: 'bold',
                    }}
                    dangerouslySetInnerHTML={renderEmoji(emojiReactions[rating].text)}
                  />
                )}
              </div>
            </div>
            <div>
              <h1 className="text-[25px] font-Playfair text-[#774936]">Write What You Think</h1>
              <textarea 
                            className="w-full h-[100px] mt-2 bg-[#faf3e0] border border-gray-400 rounded-md px-4 py-2 outline-none font-serif
                            shadow-md resize-none leading-relaxed text-[#774936]
                             relative before:content-[''] before:absolute before:top-0 before:left-6 before:h-full 
                             before:w-[1px] before:bg-red-500"
                             placeholder="Write your notes here..."
                            ></textarea>

            </div>
            <button
              type="submit"
              className="p-2 bg-violet-900/80 hover:bg-violet-800 rounded-md text-white font-Playfair text-lg"
            >
              Submit
            </button>
          </form>
        </main>
      </div>
    </>
  );
}

export default Feedback;