import React, { useState, useEffect } from 'react';
import bgImage from './Image/4267109.jpg';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Signup() {
  const navigate = useNavigate();
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [countryError, setCountryError] = useState(null);
  const [configError, setConfigError] = useState(null);
  const [formData, setFormData] = useState({
    username: '',
    gender: '',
    dateOfBirth: '',
    country: '',
    callingCode: '',
    phoneNumber: '',
    email: '',
    password: '',
    city: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Check environment variables
  useEffect(() => {
    const requiredEnvVars = [
      'VITE_APPWRITE_ENDPOINT',
      'VITE_APPWRITE_FUNCTION_ID',
      'VITE_APPWRITE_PROJECT_ID',
      'VITE_APPWRITE_API_KEY',
    ];

    const missingVars = requiredEnvVars.filter(varName => !import.meta.env[varName]);

    if (missingVars.length > 0) {
      const errorMessage = `Missing environment variables: ${missingVars.join(', ')}`;
      console.error(errorMessage);
      setConfigError(errorMessage);
      toast.error('Application configuration error. Please contact support.');
    }
  }, []);

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
        toast.error(`Failed to load countries: ${err.message}`);
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
        callingCode,
        phoneNumber: '',
      });
    } else if (name === 'phoneNumber') {
      setFormData({
        ...formData,
        phoneNumber: value,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  // Sign up user API call
  const signUpUser = async (userData) => {
    try {
      if (
        !import.meta.env.VITE_APPWRITE_ENDPOINT ||
        !import.meta.env.VITE_APPWRITE_FUNCTION_ID ||
        !import.meta.env.VITE_APPWRITE_PROJECT_ID ||
        !import.meta.env.VITE_APPWRITE_API_KEY
      ) {
        throw new Error('Missing environment configuration');
      }

      console.log('Attempting to sign up user with data:', {
        ...userData,
        password: '[REDACTED]',
      });

      const response = await fetch(
        `${import.meta.env.VITE_APPWRITE_ENDPOINT}/functions/${import.meta.env.VITE_APPWRITE_FUNCTION_ID}/executions`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-Appwrite-Project': import.meta.env.VITE_APPWRITE_PROJECT_ID,
            'X-Appwrite-Key': import.meta.env.VITE_APPWRITE_API_KEY,
          },
          body: JSON.stringify({
            data: JSON.stringify(userData),
          }),
        }
      );

      const data = await response.json();
      console.log('API response:', data);

      if (!response.ok) {
        const errorMessage =
          data.message ||
          data.error ||
          data.response?.message ||
          `Failed to sign up (Status: ${response.status})`;
        throw new Error(errorMessage);
      }

      return data;
    } catch (error) {
      console.error('Signup API error:', error);
      throw error;
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Validate required fields
      const requiredFields = ['username', 'gender', 'dateOfBirth', 'country', 'phoneNumber', 'email', 'password', 'city'];
      const missingFields = requiredFields.filter(field => !formData[field]?.trim());
      
      if (missingFields.length > 0) {
        throw new Error(`Please fill in all required fields: ${missingFields.map(f => 
          f.replace(/([A-Z])/g, ' $1').toLowerCase()).join(', ')}`);
      }

      // Validate date of birth
      const dob = new Date(formData.dateOfBirth);
      const today = new Date();
      const minAge = 13;
      const age = today.getFullYear() - dob.getFullYear();
      const monthDiff = today.getMonth() - dob.getMonth();
      const dayDiff = today.getDate() - dob.getDate();

      if (dob > today) {
        throw new Error('Date of birth cannot be in the future.');
      }
      if (age < minAge || (age === minAge && (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)))) {
        throw new Error(`You must be at least ${minAge} years old to sign up.`);
      }

      // Validate password length
      if (formData.password.length < 8) {
        throw new Error('Password must be at least 8 characters long.');
      }

      // Validate phone number
      if (!formData.phoneNumber) {
        throw new Error(`Phone number is required.`);
      }

      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        throw new Error('Please enter a valid email address.');
      }

      // Proceed with signup
      const result = await signUpUser({
        username: formData.username.trim(),
        email: formData.email.trim().toLowerCase(),
        phone: `${formData.callingCode}${formData.phoneNumber}`.trim(),
        password: formData.password,
        gender: formData.gender,
        dateOfBirth: formData.dateOfBirth,
        country: formData.country,
        city: formData.city,
        theme: 'light',
      });

      // Clear form data on success
      setFormData({
        username: '',
        gender: '',
        dateOfBirth: '',
        country: '',
        callingCode: '',
        phoneNumber: '',
        email: '',
        password: '',
        city: '',
      });

      toast.success('Signup successful! You are now logged in.', {
        onClose: () => navigate('/Account'),
      });
    } catch (error) {
      console.error('Signup error:', error);
      toast.error(error.message || 'Failed to sign up. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Render configuration error if present
  if (configError) {
    return (
      <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-tl from-[#4A00E0] to-[#8E2DE2]">
        <p className="text-white text-lg">Configuration error. Please contact support.</p>
      </div>
    );
  }

  return (
    <div className="h-screen w-screen overflow-auto bg-gradient-to-tl from-[#4b00e0a9] to-[#8E2DE2] lg:bg-gradient-to-b lg:from-red-400 lg:to-red-700 flex items-center justify-center">
      <div
        id="background"
        className="relative h-[95%] sm:h-[92vh] w-[95vw] rounded-[1vw] flex flex-col lg:hover:shadow-md lg:hover:shadow-slate-900 pb-6"
        style={{
          backgroundImage: isSmallScreen ? 'none' : `url(${bgImage})`,
          backgroundColor: isSmallScreen ? 'transparent' : 'transparent',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="flex lg:justify-around flex-col flex-wrap items-start">
          <div className="sm:mx-auto items-start">
            <h1 className="font-eagle sm:text-[40px] text-[25px] font-bold text-white lg:text-rose-700">
              Painters' Diary
            </h1>
            <h6 className="font-cookie text-[20px] sm:text-[25px] sm:ml-16 ml-7 mt-[-10px] text-white lg:text-rose-800">
              The Diary of Every Artist
            </h6>
          </div>
          <div className="flex lg:absolute lg:top-4 lg:right-4 flex-col items-center justify-center ml-[60%] lg:mt-0 mt-2 sm:mx-auto">
            <p className="text-white lg:text-gray-800">Already Signed up?</p>
            <Link to="/Login">
              <button className="font-playfair font-semibold sm:px-2 px-1 rounded-md hover:underline hover:border-green-600 hover:text-green-600 text-white lg:text-gray-800">
                Log-in
              </button>
            </Link>
          </div>
        </div>

        <form
          id="signup-form"
          onSubmit={handleSubmit}
          className="w-full lg:bg-none bg-gradient-to-br mt-4 from-[#ffffff8a] to-[#f0f0f57c] lg:backdrop-blur-0 backdrop-blur-lg lg:from-transparent lg:to-transparent flex flex-col lg:flex-row lg:justify-between items-center lg:px-[10%] lg:gap-0 gap-4 shadow-lg lg:shadow-none px-2 pb-4 rounded-md"
        >
          <div className="w-full lg:w-auto flex flex-col items-center lg:ml-0 sm:ml-[50%]">
            <div className="w-full flex flex-col items-start">
              <h1 className="heading text-left w-full text-gray-800 lg:text-white font-Playfair">Full Name</h1>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                id="username"
                placeholder="Full Name"
                className="input w-full bg-white lg:bg-gray-100/30 text-gray-800 placeholder-gray-500 lg:placeholder-gray-300 border-gray-300 lg:border-white/50 focus:ring-2 focus:ring-teal-500"
                aria-label="Full Name"
                required
              />
            </div>
            <div className="w-full flex flex-col items-start">
              <h1 className="heading text-left w-full text-gray-800 lg:text-white font-Playfair">Gender</h1>
              <select
                name="gender"
                id="gender"
                value={formData.gender}
                onChange={handleChange}
                className="input w-full bg-white lg:bg-gray-100/30 text-gray-800 placeholder-gray-500 lg:placeholder-gray-800 border-gray-300 lg:border-white/50 focus:ring-2 focus:ring-teal-500 font-Playfair"
                aria-label="Gender"
                required
              >
                <option className='text-gray-900' value="" disabled>Select gender</option>
                <option className='text-gray-900' value="Male">Male</option>
                <option className='text-gray-900' value="Female">Female</option>
                <option className='text-gray-900' value="Other">Other</option>
              </select>
            </div>
            <div className="w-full flex flex-col items-start">
              <h1 className="heading text-left w-full text-gray-800 lg:text-white font-Playfair">Date of Birth</h1>
              <input
                type="date"
                name="dateOfBirth"
                id="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
                className="input w-full bg-white lg:bg-gray-100/30 text-gray-800 placeholder-gray-500 lg:placeholder-gray-300 border-gray-300 lg:border-white/50 focus:ring-2 focus:ring-teal-500 font-Playfair"
                aria-label="Date of Birth"
                required
              />
            </div>
            <div className="w-full flex flex-col items-start">
              <h1 className="heading text-left w-full text-gray-800 lg:text-white font-Playfair">Country</h1>
              {loading ? (
                <p className="text-gray-600 lg:text-white">Loading countries...</p>
              ) : countryError ? (
                <p className="text-red-500">{countryError}</p>
              ) : (
                <select
                  name="country"
                  id="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="input w-full bg-white lg:bg-gray-100/30 text-gray-800 placeholder-gray-500 lg:placeholder-gray-300 border-gray-300 lg:border-white/50 focus:ring-2 focus:ring-teal-500 font-Playfair"
                  aria-label="Country"
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
              <h1 className="heading text-left w-full text-gray-800 lg:text-white font-Playfair">Phone Number</h1>
              <input
                type="tel"
                name="phoneNumber"
                id="phone"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder={
                  formData.country && countries.find((c) => c.name.common === formData.country)
                    ? `${formData.callingCode} 1234567890`
                    : 'Phone Number'
                }
                className="input w-full bg-white lg:bg-gray-100/30 text-gray-800 placeholder-gray-500 lg:placeholder-gray-300 border-gray-300 lg:border-white/50 focus:ring-2 focus:ring-teal-500"
                aria-label="Phone Number"
                required
              />
            </div>
            <div className="w-full flex flex-col items-start">
              <h1 className="heading text-left w-full text-gray-800 lg:text-white font-Playfair">Email</h1>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                id="email"
                placeholder="Email"
                className="input w-full bg-white lg:bg-gray-100/30 text-gray-800 placeholder-gray-500 lg:placeholder-gray-300 border-gray-300 lg:border-white/50 focus:ring-2 focus:ring-teal-500"
                aria-label="Email"
                required
              />
            </div>
            <div className="w-full flex flex-col items-start">
              <h1 className="heading text-left w-full text-gray-800 lg:text-white font-Playfair">Password</h1>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                id="password"
                placeholder="Password"
                className="input w-full bg-white lg:bg-gray-100/30 text-gray-800 placeholder-gray-500 lg:placeholder-gray-300 border-gray-300 lg:border-white/50 focus:ring-2 focus:ring-teal-500"
                aria-label="Password"
                required
              />
            </div>
            <div className="w-full flex flex-col items-start">
              <h1 className="heading text-left w-full text-gray-800 lg:text-white font-Playfair">City</h1>
              <input
                type="text"
                name="city"
                id="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="City"
                className="input w-full bg-white lg:bg-gray-100/30 text-gray-800 placeholder-gray-500 lg:placeholder-gray-300 border-gray-300 lg:border-white/50 focus:ring-2 focus:ring-teal-500"
                aria-label="City"
                required
              />
            </div>
          </div>
        </form>
        <form id="signup-form" onSubmit={handleSubmit} className="...">
  {/* ... all your form fields ... */}

        <button
        type="submit"
        disabled={isSubmitting}
        className="mx-auto mt-[7.5%] relative h-[45px] w-[80%] sm:w-[60%] md:w-[45%] lg:w-[30%] px-4 py-2 font-GreatVibes font-semibold text-white bg-gradient-to-r from-[#7C3AED] to-[#DB2777] rounded-xl shadow-lg border border-white/30 backdrop-blur-md hover:from-[#6D28D9] hover:to-[#BE185D] hover:scale-105 transition-all duration-300 ease-in-out flex items-center justify-center"
         >
        {isSubmitting ? (
      <>
        <svg className="animate-spin h-5 w-5 mr-2 text-white" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
        </svg>
        Creating Account...
      </>
         ) : (
      'Create Account'
    )}
        </button>
        </form>
        <p className="mx-auto items-center justify-center mt-3 text-white text-[16px] text-center font-GreatVibes">
          By Signing up you agree to our{' '}
          <Link to="/Legal/Terms">
            <span className="hover:text-blue-400 hover:underline text-purple-200 cursor-pointer">
              Terms & Condition
            </span>{' '}
          </Link>
          and{' '}
          <Link to="/Legal/Privacy_Policy">
            <span className="hover:text-blue-400 hover:underline text-purple-200 cursor-pointer">
              Privacy Policy
            </span>
          </Link>
        </p>

        <ToastContainer
        position="top-right"
        autoClose={5000} // Increased from 3000 to 5000
        hideProgressBar={false}
        newestOnTop={false}
         closeOnClick
         rtl={false}
         pauseOnFocusLoss
         draggable
         pauseOnHover
          theme="colored"
        style={{ zIndex: 9999 }} // Ensure it's above other elements
        />   
      </div>
    </div>
  );
}

export default Signup;