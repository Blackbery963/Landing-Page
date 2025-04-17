// import React, { useState, useEffect } from 'react';
// import bgImage from './Image/4267109.jpg'; // Adjust path relative to src
// import { Link, Outlet, useNavigate } from 'react-router-dom';
// import { signUpUser } from '/home/swarnadip/Documents/Index/Index/Index/src/Components/appwriteService/auth.js'; // Import the signUpUser function

// function Signup() {
//   const navigate = useNavigate();
//   const [isSmallScreen, setIsSmallScreen] = useState(false);
//   const [countries, setCountries] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [countryError, setCountryError] = useState(null);
//   const [formData, setFormData] = useState({
//     username: '',
//     email: '',
//     password: '',
//     number: '',
//     country: '',
//     state: '',
//     dateOfBirth: '',
//     age: '',
//   });
//   const [error, setError] = useState('');

//   // Handle screen size
//   useEffect(() => {
//     const handleResize = () => {
//       setIsSmallScreen(window.innerWidth <= 1024);
//     };

//     handleResize();
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   // Fetch countries with calling codes
//   useEffect(() => {
//     const fetchCountries = async () => {
//       try {
//         const response = await fetch('https://restcountries.com/v3.1/all?fields=name,cca3,idd');
//         if (!response.ok) {
//           throw new Error('Failed to fetch countries');
//         }
//         const data = await response.json();
//         // Process and sort countries
//         const sortedData = data
//           .map((country) => ({
//             ...country,
//             callingCode: country.idd?.root
//               ? `${country.idd.root}${country.idd.suffixes?.[0] || ''}`
//               : '',
//           }))
//           .filter((country) => country.callingCode) // Exclude countries without calling codes
//           .sort((a, b) => a.name.common.localeCompare(b.name.common));
//         setCountries(sortedData);
//         setLoading(false);
//       } catch (err) {
//         setCountryError(err.message);
//         setLoading(false);
//       }
//     };

//     fetchCountries();
//   }, []);

//   // Calculate age from date of birth
//   const calculateAge = (dob) => {
//     if (!dob) return '';
//     const birthDate = new Date(dob);
//     const today = new Date();
//     let age = today.getFullYear() - birthDate.getFullYear();
//     const monthDiff = today.getMonth() - birthDate.getMonth();
//     if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
//       age--;
//     }
//     return age >= 0 ? age.toString() : '';
//   };

//   // Handle form input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     if (name === 'dateOfBirth') {
//       const newAge = calculateAge(value);
//       setFormData({
//         ...formData,
//         [name]: value,
//         age: newAge,
//       });
//     } else if (name === 'country') {
      
//       // Find the selected country's calling code
//       const selectedCountry = countries.find((c) => c.name.common === value);
//       const callingCode = selectedCountry ? selectedCountry.callingCode : '';
//       setFormData({
//         ...formData,
//         country: value,
//         number: callingCode || '',
//       });
//     } else if (name === 'number') {
//       // Ensure number starts with the correct calling code
//       const selectedCountry = countries.find((c) => c.name.common === formData.country);
//       const callingCode = selectedCountry ? selectedCountry.callingCode : '';
//       if (callingCode && !value.startsWith(callingCode)) {
//         setFormData({
//           ...formData,
//           number: callingCode,
//         });
//       } else {
//         setFormData({
//           ...formData,
//           number: value,
//         });
//       }
//     } else {
//       setFormData({
//         ...formData,
//         [name]: value,
//       });
//     }
//     setError('');
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Validate required fields
//     for (let key in formData) {
//       if (!formData[key].toString().trim() && key !== 'age') {
//         setError(`Please fill in the ${key} field.`);
//         return;
//       }
//     }

//     if (!formData.age) {
//       setError('Please provide a valid date of birth to calculate age.');
//       return;
//     }

//     // Validate phone number
//     const selectedCountry = countries.find((c) => c.name.common === formData.country);
//     const callingCode = selectedCountry ? selectedCountry.callingCode : '';
//     if (!formData.number.startsWith(callingCode)) {
//       setError(`Phone number must start with ${callingCode} for ${formData.country}.`);
//       return;
//     }

//     try {
//       // Call signUpUser with formData
//       await signUpUser({
//         ...formData,
//         theme: 'light', // Optional: Set default theme or add to form
//       });

//       // Reset form
//       setFormData({
//         username: '',
//         email: '',
//         password: '',
//         number: '',
//         country: '',
//         state: '',
//         dateOfBirth: '',
//         age: '',
//       });
//       setError('');
//       alert('Signup successful! You are now logged in.');

//       // Redirect to a dashboard or home page
//       navigate('/Account'); // Adjust the route as needed
//     } catch (error) {
//       console.error('Signup error:', error);
//       setError(`Failed to sign up: ${error.message}`);
//     }
//   };

//   return (
//     <div className="h-screen w-screen overflow-auto bg-gradient-to-tl from-[#5E0035] to-[#B9A1E5] lg:bg-gradient-to-b lg:from-red-400 lg:to-red-700 flex items-center justify-center ">
//       <div
//         id="background"
//         className="relative h-[95%] sm:h-[92vh] w-[95vw] rounded-[1vw] flex flex-col lg:hover:shadow-md lg:hover:shadow-slate-900 pb-6"
//         style={{
//           backgroundImage: isSmallScreen ? 'none' : `url(${bgImage})`,
//           backgroundColor: isSmallScreen ? 'linear-gradient(to top left, #5E0035, #B9A1E5)' : 'transparent',
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//         }}
//       >
//         <div className="flex lg:justify-around flex-col flex-wrap items-start">
//           <div className="sm:mx-auto items-start">
//             <h1 className="font-eagle sm:text-[40px] text-[25px] font-bold">Painters' Diary</h1>
//             <h6 className="font-cookie text-[20px] sm:text-[25px] sm:ml-16 ml-7 mt-[-10px]">
//               The Diary of Every Artist
//             </h6>
//           </div>
//           <div className="flex lg:absolute lg:top-4 lg:right-4 flex-col items-center justify-center ml-[60%] lg:mt-0 mt-2 sm:mx-auto">
//             <p>Already Signed up?</p>
//             <Link to="/Login">
//               <button className="font-playfair font-semibold sm:px-2 px-1 rounded-md hover:underline hover:border-green-600 hover:text-green-700">
//                 Log-in
//               </button>
//             </Link>
//           </div>
//         </div>

//         {/* Signup Form */}
//         <form
//           onSubmit={handleSubmit}
//           className="w-full lg:bg-none bg-gradient-to-br mt-4 to-[#fff0f39f] from-[#2f2f2f8f] flex flex-col lg:flex-row lg:justify-between items-center lg:px-[10%] lg:gap-0 gap-4 shadow-lg lg:shadow-none px-2 pb-4 rounded-md"
//         >
//           <div className="w-full lg:w-auto flex flex-col items-center lg:ml-0 sm:ml-[50%]">
//             <div className="w-full flex flex-col items-start">
//               <h1 className="heading text-left w-full">Username</h1>
//               <input
//                 type="text"
//                 name="username"
//                 value={formData.username}
//                 onChange={handleChange}
//                 id="username"
//                 placeholder="Username"
//                 className="input"
//                 required
//               />
//             </div>
//             <div className="w-full flex flex-col items-start">
//               <h1 className="heading text-left w-full">Email</h1>
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 id="email"
//                 placeholder="Email"
//                 className="input"
//                 required
//               />
//             </div>
//             <div className="w-full flex flex-col items-start">
//               <h1 className="heading text-left w-full">Password</h1>
//               <input
//                 type="password"
//                 name="password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 id="password"
//                 placeholder="Password"
//                 className="input"
//                 required
//               />
//             </div>
//             <div className="w-full flex flex-col items-start">
//               <h1 className="heading text-left w-full">Number</h1>
//               <input
//                 type="tel"
//                 name="number"
//                 id="number"
//                 value={formData.number}
//                 onChange={handleChange}
//                 placeholder={
//                   formData.country && countries.find((c) => c.name.common === formData.country)
//                     ? `${countries.find((c) => c.name.common === formData.country).callingCode} 1234567890`
//                     : 'Number'
//                 }
//                 className="input"
//                 required
//               />
//             </div>
//           </div>
//           <div className="w-full lg:w-auto flex flex-col items-center lg:ml-0 sm:ml-[50%]">
//             {/* Country */}
//             <div className="w-full flex flex-col items-start">
//               <h1 className="heading text-left w-full">Country</h1>
//               {loading ? (
//                 <p>Loading countries...</p>
//               ) : countryError ? (
//                 <p className="text-red-500">{countryError}</p>
//               ) : (
//                 <select
//                   name="country"
//                   id="country"
//                   value={formData.country}
//                   onChange={handleChange} // Use the unified handleChange
//                   className="input w-full font-Playfair"
//                   required
//                 >
//                   <option value="" disabled>
//                     Select a country
//                   </option>
//                   {countries.map((country) => (
//                     <option key={country.cca3} value={country.name.common}>
//                       {country.name.common}
//                     </option>
//                   ))}
//                 </select>
//               )}
//             </div>
//             <div className="w-full flex flex-col items-start">
//               <h1 className="heading text-left w-full">State</h1>
//               <input
//                 type="text"
//                 name="state"
//                 id="state"
//                 value={formData.state}
//                 onChange={handleChange}
//                 placeholder="State"
//                 className="input"
//                 required
//               />
//             </div>
//             <div className="w-full flex flex-col items-start">
//               <h1 className="heading text-left w-full font-Playfair">Date of Birth</h1>
//               <input
//                 type="date"
//                 name="dateOfBirth"
//                 id="dateOfBirth"
//                 value={formData.dateOfBirth}
//                 onChange={handleChange}
//                 className="input font-Playfair"
//                 required
//               />
//             </div>
//             <div className="w-full flex flex-col items-start">
//               <h1 className="heading text-left w-full">Age</h1>
//               <div className="input flex items-center justify-start pl-4">
//                 <p className="text-[16px] text-gray-900 font-Playfair">
//                   Age: {formData.age || 'Not calculated yet'}
//                 </p>
//               </div>
//             </div>
//           </div>
//         </form>

//         {/* Error Message */}
//         {error && <p className="text-center text-red-500 mt-2">{error}</p>}

//         {/* Submit Button */}
//         <button
//           type="submit"
//           onClick={handleSubmit}
//           className="mx-auto mt-[7.5%] h-[45px] w-[80%] sm:w-[60%] md:w-[45%] lg:w-[30%] px-4 py-2 font-GreatVibes font-semibold text-white bg-gradient-to-r from-violet-600/50 to-indigo-600/50 rounded-xl shadow-lg border border-white/30 backdrop-blur-md hover:from-violet-700/50 hover:to-indigo-700/50 hover:scale-105 transition-all duration-300 ease-in-out"
//         >
//           Create Account
//         </button>

//         {/* Terms & Conditions */}
//         <p className="mx-auto items-center justify-center mt-3 text-white text-[16px] text-center">
//           By Signing up you agree to our{' '}
//           <Link>
//             <span className="hover:text-blue-400 hover:underline text-purple-900 cursor-pointer">
//               Terms & Condition
//             </span>{' '}
//             and{' '}
//           </Link>
//           <Link to={'/Legal/Privacy_Policy'}>
//             <span className="hover:text-blue-500 hover:underline text-purple-900 cursor-pointer">
//               Privacy Policy
//             </span>
//           </Link>
//         </p>
//       </div>
//       {/* <Outlet /> */}
//     </div>
//   );
// }

// export default Signup;

import React, { useState, useEffect } from 'react';
import bgImage from './Image/4267109.jpg';
import { Link, useNavigate } from 'react-router-dom';
import { signUpUser } from '/home/swarnadip/Documents/Index/Index/Index/src/Components/appwriteService/auth.js';

function Signup() {
  const navigate = useNavigate();
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [countryError, setCountryError] = useState(null);
  const [formData, setFormData] = useState({
    username: '',
    gender: '',
    dateOfBirth: '',
    country: '',
    number: '',
    email: '',
    password: '',
    city: '',
  });
  const [error, setError] = useState('');

  // Handle screen size
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 1024);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Fetch countries with calling codes
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch('https://restcountries.com/v3.1/all?fields=name,cca3,idd');
        if (!response.ok) {
          throw new Error('Failed to fetch countries');
        }
        const data = await response.json();
        const sortedData = data
          .map((country) => ({
            ...country,
            callingCode: country.idd?.root
              ? `${country.idd.root}${country.idd.suffixes?.[0] || ''}`
              : '',
          }))
          .filter((country) => country.callingCode)
          .sort((a, b) => a.name.common.localeCompare(b.name.common));
        setCountries(sortedData);
        setLoading(false);
      } catch (err) {
        setCountryError(err.message);
        setLoading(false);
      }
    };
    fetchCountries();
  }, []);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'country') {
      const selectedCountry = countries.find((c) => c.name.common === value);
      const callingCode = selectedCountry ? selectedCountry.callingCode : '';
      setFormData({
        ...formData,
        country: value,
        number: callingCode || '',
      });
    } else if (name === 'number') {
      const selectedCountry = countries.find((c) => c.name.common === formData.country);
      const callingCode = selectedCountry ? selectedCountry.callingCode : '';
      if (callingCode && !value.startsWith(callingCode)) {
        setFormData({
          ...formData,
          number: callingCode,
        });
      } else {
        setFormData({
          ...formData,
          number: value,
        });
      }
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
    setError('');
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate required fields
    const requiredFields = ['username', 'gender', 'dateOfBirth', 'country', 'number', 'email', 'password', 'city'];
    for (let key of requiredFields) {
      if (!formData[key].trim()) {
        setError(`Please fill in the ${key.replace(/([A-Z])/g, ' $1').toLowerCase()} field.`);
        return;
      }
    }

    // Validate phone number
    const selectedCountry = countries.find((c) => c.name.common === formData.country);
    const callingCode = selectedCountry ? selectedCountry.callingCode : '';
    if (!formData.number.startsWith(callingCode)) {
      setError(`Phone number must start with ${callingCode} for ${formData.country}.`);
      return;
    }

    try {
      await signUpUser({
        ...formData,
        theme: 'light',
      });

      setFormData({
        username: '',
        gender: '',
        dateOfBirth: '',
        country: '',
        number: '',
        email: '',
        password: '',
        city: '',
      });
      setError('');
      alert('Signup successful! You are now logged in.');
      navigate('/Account');
    } catch (error) {
      console.error('Signup error:', error);
      setError(`Failed to sign up: ${error.message}`);
    }
  };

  return (
    <div className="h-screen w-screen overflow-auto bg-gradient-to-tl from-[#5E0035] to-[#B9A1E5] lg:bg-gradient-to-b lg:from-red-400 lg:to-red-700 flex items-center justify-center">
      <div
        id="background"
        className="relative h-[95%] sm:h-[92vh] w-[95vw] rounded-[1vw] flex flex-col lg:hover:shadow-md lg:hover:shadow-slate-900 pb-6"
        style={{
          backgroundImage: isSmallScreen ? 'none' : `url(${bgImage})`,
          backgroundColor: isSmallScreen ? 'linear-gradient(to top left, #5E0035, #B9A1E5)' : 'transparent',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="flex lg:justify-around flex-col flex-wrap items-start">
          <div className="sm:mx-auto items-start">
            <h1 className="font-eagle sm:text-[40px] text-[25px] font-bold">Painters' Diary</h1>
            <h6 className="font-cookie text-[20px] sm:text-[25px] sm:ml-16 ml-7 mt-[-10px]">
              The Diary of Every Artist
            </h6>
          </div>
          <div className="flex lg:absolute lg:top-4 lg:right-4 flex-col items-center justify-center ml-[60%] lg:mt-0 mt-2 sm:mx-auto">
            <p>Already Signed up?</p>
            <Link to="/Login">
              <button className="font-playfair font-semibold sm:px-2 px-1 rounded-md hover:underline hover:border-green-600 hover:text-green-700">
                Log-in
              </button>
            </Link>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="w-full lg:bg-none bg-gradient-to-br mt-4 to-[#fff0f39f] from-[#2f2f2f8f] flex flex-col lg:flex-row lg:justify-between items-center lg:px-[10%] lg:gap-0 gap-4 shadow-lg lg:shadow-none px-2 pb-4 rounded-md"
        >
          <div className="w-full lg:w-auto flex flex-col items-center lg:ml-0 sm:ml-[50%]">
            <div className="w-full flex flex-col items-start">
              <h1 className="heading text-left w-full">Full Name</h1>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                id="username"
                placeholder="Full Name"
                className="input"
                required
              />
            </div>
            <div className="w-full flex flex-col items-start">
              <h1 className="heading text-left w-full">Gender</h1>
              <select
                name="gender"
                id="gender"
                value={formData.gender}
                onChange={handleChange}
                className="input w-full font-Playfair"
                required
              >
                <option value="" disabled>Select gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="w-full flex flex-col items-start">
              <h1 className="heading text-left w-full font-Playfair">Date of Birth</h1>
              <input
                type="date"
                name="dateOfBirth"
                id="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
                className="input font-Playfair"
                required
              />
            </div>
            <div className="w-full flex flex-col items-start">
              <h1 className="heading text-left w-full">Country</h1>
              {loading ? (
                <p>Loading countries...</p>
              ) : countryError ? (
                <p className="text-red-500">{countryError}</p>
              ) : (
                <select
                  name="country"
                  id="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="input w-full font-Playfair"
                  required
                >
                  <option value="" disabled>Select a country</option>
                  {countries.map((country) => (
                    <option key={country.cca3} value={country.name.common}>
                      {country.name.common}
                    </option>
                  ))}
                </select>
              )}
            </div>
          </div>
          <div className="w-full lg:w-auto flex flex-col items-center lg:ml-0 sm:ml-[50%]">
            <div className="w-full flex flex-col items-start">
              <h1 className="heading text-left w-full">Phone Number</h1>
              <input
                type="tel"
                name="number"
                id="number"
                value={formData.number}
                onChange={handleChange}
                placeholder={
                  formData.country && countries.find((c) => c.name.common === formData.country)
                    ? `${countries.find((c) => c.name.common === formData.country).callingCode} 1234567890`
                    : 'Phone Number'
                }
                className="input"
                required
              />
            </div>
            <div className="w-full flex flex-col items-start">
              <h1 className="heading text-left w-full">Email</h1>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                id="email"
                placeholder="Email"
                className="input"
                required
              />
            </div>
            <div className="w-full flex flex-col items-start">
              <h1 className="heading text-left w-full">Password</h1>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                id="password"
                placeholder="Password"
                className="input"
                required
              />
            </div>
            <div className="w-full flex flex-col items-start">
              <h1 className="heading text-left w-full">City</h1>
              <input
                type="text"
                name="city"
                id="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="City"
                className="input"
                required
              />
            </div>
          </div>
        </form>

        {error && <p className="text-center text-red-500 mt-2">{error}</p>}

        <button
          type="submit"
          onClick={handleSubmit}
          className="mx-auto mt-[7.5%] h-[45px] w-[80%] sm:w-[60%] md:w-[45%] lg:w-[30%] px-4 py-2 font-GreatVibes font-semibold text-white bg-gradient-to-r from-violet-600/50 to-indigo-600/50 rounded-xl shadow-lg border border-white/30 backdrop-blur-md hover:from-violet-700/50 hover:to-indigo-700/50 hover:scale-105 transition-all duration-300 ease-in-out"
        >
          Create Account
        </button>

        <p className="mx-auto items-center justify-center mt-3 text-white text-[16px] text-center">
          By Signing up you agree to our{' '}
          <Link>
            <span className="hover:text-blue-400 hover:underline text-purple-900 cursor-pointer">
              Terms & Condition
            </span>{' '}
            and{' '}
          </Link>
          <Link to={'/Legal/Privacy_Policy'}>
            <span className="hover:text-blue-500 hover:underline text-purple-900 cursor-pointer">
              Privacy Policy
            </span>
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;