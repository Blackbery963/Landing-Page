// import React from 'react'
// import { useState, useEffect } from 'react';
// import bgImage from '/home/swarnadip/Documents/Index/Signup/Signup/src/image/4267109.jpg'
// import './App.css'
// // import Country from './country'

// function App() {

//   const [isSmallScreen, setIsSmallScreen] = useState(false);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsSmallScreen(window.innerWidth <= 1024);
//     };

//     // Initial check
//     handleResize();

//     // Listen for resize events
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   return (
//     <div className='h-screen w-screen overflow-auto bg-slate-800 lg:bg-gradient-to-b lg:from-red-400 lg:to-red-700 flex items-center justify-center'>
//        <div id ='background' 
//        className=' background h-[95%] sm:h-[92vh] w-[90vw] bg-center bg-cover rounded-[1vw] hover:rounded-none bg-no-repeat flex flex-col lg:hover:shadow-md lg:hover:shadow-slate-900'
//        style={{ backgroundImage: isSmallScreen ? 'none' : `url(${bgImage})`} } >

//         <div className='mx-auto'>
//           <div>
//           <h1 className=' font-eagle sm:text-[40px] text-[35px] font-bold'>Painters' Diary</h1>
//           <h6 className=' font-cookie sm:text-[30px] text-[25px] ml-12 mt-[-10px]'>The Diary of Every Artist</h6>
//           </div>

//           <div>

//           </div>
        
//         </div>

//         <div className='w-[100%] flex flex-wrap justify-between lg:pl-[10vw] lg:pr-[10vw] pl-0'>

//           {/* part one */}
//           <div className=''>
//             <form action="">
//               <h1 className='heading'>Name</h1>
//               <input type="text" name='name' id='name' placeholder='Name' className='input' />

//                <h1 className='heading'>Username</h1>
//                <input type="text" name="Username" id="Usernamee" placeholder='Username' className='input ' />

//                <h1 className='heading'>Email</h1>
//                <input type="email" name="email" id="email" placeholder='Email' className='input'/>

//                <h1 className='heading'>Password</h1>
//                <input type="password" name="password" id="password" placeholder='Password' className='input'/>
//             </form>
//           </div>


//           {/* part two */}
//           <div className=''>
//             <form action="">
//               <h1 className='heading'>Number</h1>
//               <input type="number" name="number" id="number" placeholder='Number' className='input' />

//               <h1 className='heading'>Country</h1>
//               <input type="text" placeholder='Country' className='input'/>

//               <h1 className='heading'>State</h1>
//               <input type="text" name="" id="" placeholder='State' className='input'/>

//               <h1 className='heading'>Address</h1>
//               <input type="" name="" id="" placeholder='Address' className='input'/>
              
//             </form>
//           </div>
//         </div>

//         <div className='mx-auto mt-[11%] lg:h-[4.3vh] h-[50px] w-[180px] lg:w-[30vw] font-semibold text-white 
//         bg-[#610d0d4d] backdrop-blur-md
//         rounded-xl flex items-center justify-center border-[1px] border-white shadow-md shadow-gray-700'>
//           <button>
//             <input type="submit" placeholder='Submit' className=''/>
//           </button>
//         </div>

//         <p className='mx-auto items-center justify-center mt-3 text-white text-[16px]'>By Signing up you agree our
//          <span className='hover:text-blue-400 hover:underline '>Terms & Condition </span>
//          and
//          <span className='hover:text-blue-500 hover:underline '> Privacy Policy</span></p>

//       </div>
//     </div>
//   )
// }

// export default App

import React, { useState, useEffect } from 'react';
import bgImage from '/home/swarnadip/Documents/Index/Signup/Signup/src/image/4267109.jpg';
import './App.css';

function App() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [address, setAddress] = useState('');
  const [locationError, setLocationError] = useState('');

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 1024);
    };

    // Initial check
    handleResize();

    // Listen for resize events
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
      setLocationError('Geolocation is not supported by this browser.');
    }
  };

  const showPosition = (position) => {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;

    fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=YOUR_API_KEY`)
      .then(response => response.json())
      .then(data => {
        if (data.status === 'OK') {
          if (data.results[0]) {
            setAddress(data.results[0].formatted_address);
            setLocationError('');
          } else {
            setLocationError('No results found');
          }
        } else {
          setLocationError('Geocoder failed due to: ' + data.status);
        }
      })
      .catch(error => {
        setLocationError('Error: ' + error.message);
      });
  };

  const showError = (error) => {
    switch(error.code) {
      case error.PERMISSION_DENIED:
        setLocationError('User denied the request for Geolocation. Please enable location services.');
        break;
      case error.POSITION_UNAVAILABLE:
        setLocationError('Location information is unavailable.');
        break;
      case error.TIMEOUT:
        setLocationError('The request to get user location timed out.');
        break;
      case error.UNKNOWN_ERROR:
        setLocationError('An unknown error occurred.');
        break;
      default:
        setLocationError('An unknown error occurred.');
    }
  };

  return (
    <div className='h-screen w-screen overflow-auto bg-slate-800 lg:bg-gradient-to-b lg:from-red-400 lg:to-red-700 flex items-center justify-center'>
      <div id='background' 
        className='background h-[95%] sm:h-[92vh] w-[90vw] bg-center bg-cover rounded-[1vw] hover:rounded-none bg-no-repeat flex flex-col lg:hover:shadow-md lg:hover:shadow-slate-900'
        style={{ backgroundImage: isSmallScreen ? 'none' : `url(${bgImage})` }} >

        <div className='mx-auto'>
          <div>
            <h1 className='font-eagle sm:text-[40px] text-[35px] font-bold'>Painters' Diary</h1>
            <h6 className='font-cookie sm:text-[30px] text-[25px] ml-12 mt-[-10px]'>The Diary of Every Artist</h6>
          </div>
        </div>

        <div className='w-[100%] flex flex-wrap justify-between lg:pl-[10vw] lg:pr-[10vw] pl-0'>
          {/* part one */}
          <div className=''>
            <form action="">
              <h1 className='heading'>Name</h1>
              <input type="text" name='name' id='name' placeholder='Name' className='input' />

              <h1 className='heading'>Username</h1>
              <input type="text" name="Username" id="Usernamee" placeholder='Username' className='input ' />

              <h1 className='heading'>Email</h1>
              <input type="email" name="email" id="email" placeholder='Email' className='input'/>

              <h1 className='heading'>Password</h1>
              <input type="password" name="password" id="password" placeholder='Password' className='input'/>
            </form>
          </div>

          {/* part two */}
          <div className=''>
            <form action="">
              <h1 className='heading'>Number</h1>
              <input type="number" name="number" id="number" placeholder='Number' className='input' />

              <h1 className='heading'>Country</h1>
              <input type="text" placeholder='Country' className='input'/>

              <h1 className='heading'>State</h1>
              <input type="text" name="" id="" placeholder='State' className='input'/>

              <h1 className='heading'>Address</h1>
              <input type="text" name="address" id="address" placeholder='Address' className='input' value={address} onChange={(e) => setAddress(e.target.value)} />
              <button type="button" onClick={getLocation} className='mt-2 ml-2 font-playfair font-semibold bg-blue-500 text-white px-4 py-2 rounded'>Fetch Address</button>
              {locationError && <p className='text-red-500 mt-2'>{locationError}</p>}
            </form>
          </div>
        </div>

        <div className='mx-auto mt-[10%] lg:h-[4.3vh] h-[50px] w-[180px] lg:w-[30vw] font-semibold text-white 
          bg-[#610d0d4d] backdrop-blur-md
          rounded-xl flex items-center justify-center border-[1px] border-white shadow-md shadow-gray-700'>
          <button className='h-full'>
            <input type="submit" placeholder='Submit' className='h-full'/>
          </button>
        </div>

        <p className='mx-auto items-center justify-center mt-3 text-white text-[16px]'>By Signing up you agree our
          <span className='hover:text-blue-400 hover:underline '>Terms & Condition </span>
          and
          <span className='hover:text-blue-500 hover:underline '> Privacy Policy</span></p>
      </div>
    </div>
  );
}

export default App;
