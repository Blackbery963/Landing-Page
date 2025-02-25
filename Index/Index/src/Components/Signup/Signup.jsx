
import React, { useState, useEffect } from 'react';
import bgImage from '/home/swarnadip/Documents/Index/Index/Index/src/Components/Signup/Image/4267109.jpg';
import { Link, Outlet } from 'react-router-dom';

function Signup() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
    number: '',
    country: '',
    state: '',
    address: ''
  });

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 1024);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    for (let key in formData) {
      if (!formData[key].trim()) {  // Trim to remove spaces
        alert(`Please fill in the ${key} field.`);
        return; // Stop form submission
      }
    }
    localStorage.setItem('signupData', JSON.stringify(formData));

    // Reset form after submission
    setFormData({
      name: '',
      username: '',
      email: '',
      password: '',
      number: '',
      country: '',
      state: '',
      address: ''
    });

    alert('Signup successful! Data saved to local storage.');
  };

  return (
    <div className="h-screen w-screen overflow-auto bg-[#A9B5DF] lg:bg-gradient-to-b lg:from-red-400 lg:to-red-700 flex items-center justify-center">
      <div
        id="background"
        className="relative h-[95%] sm:h-[92vh] w-[90vw] rounded-[1vw] hover:rounded-none flex flex-col lg:hover:shadow-md lg:hover:shadow-slate-900"
        style={{
          backgroundImage: isSmallScreen ? 'none' : `url(${bgImage})`,
          backgroundColor: isSmallScreen ? 'rgb(169, 181, 223)':'transparent',  
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="flex lg:justify-around flex-col flex-wrap items-start">
          <div className=' sm:mx-auto items-start'>
            <h1 className="font-eagle sm:text-[40px] text-[25px] font-bold">Painters' Diary</h1>
            <h6 className="font-cookie text-[20px] sm:text-[25px] sm:ml-16 ml-7 mt-[-10px]">The Diary of Every Artist</h6>
          </div>
          <div className="flex lg:absolute lg:top-4 lg:right-4 flex-col items-center justify-center ml-[60%] lg:mt-0 mt-2 sm:mx-auto">
            <p className=''>Already Signed up?</p>
            <Link to="/Login">
              <button className="font-playfair font-semibold sm:px-2 px-1 rounded-md border border-gray-700 hover:border-green-600 hover:text-green-700">
                Log-in
              </button>
            </Link>
          </div>
        </div>

        {/* Signup Form */}
        <form className="w-full flex flex-col lg:flex-row lg:justify-between items-center lg:px-[10%] lg:gap-0 gap-4">
          <div className="w-full lg:w-auto flex flex-col items-center lg:ml-0 sm:ml-[50%]">
    
          <div className="w-full flex flex-col items-start">
          <h1 className="heading text-left w-full">Name</h1>
          <input type="text" name="name" value={formData.name} onChange={handleChange} id="name" placeholder="Name" className="input" required />
          </div>

          <div className="w-full flex flex-col items-start">
          <h1 className="heading text-left w-full">Username</h1>
          <input type="text" name="username" value={formData.username} onChange={handleChange} id="username" placeholder="Username" className="input" required />
          </div>

          <div className="w-full flex flex-col items-start">
          <h1 className="heading text-left w-full">Email</h1>
          <input type="email" name="email" value={formData.email} onChange={handleChange} id="email" placeholder="Email" className="input" required />
          </div>

          <div className="w-full flex flex-col items-start">
           <h1 className="heading text-left w-full">Password</h1>
          <input type="password" name="password" value={formData.password} onChange={handleChange} id="password" placeholder="Password" className="input" required />
          </div>
        </div>

          <div className="w-full lg:w-auto flex flex-col items-center lg:ml-0 sm:ml-[50%]">
            <div className="w-full flex flex-col items-start">
            <h1 className="heading text-left w-full">Number</h1>
            <input type="number" name="number" id="number" value={formData.number} onChange={handleChange} placeholder="Number" className="input" required />
            </div>
          
            <div className="w-full flex flex-col items-start">
           <h1 className="heading text-left w-full">Country</h1>
          <input type="text" name="country" id="country" value={formData.country} onChange={handleChange} placeholder="Country" className="input" required />
          </div>

            <div className="w-full flex flex-col items-start">
            <h1 className="heading text-left w-full">State</h1>
            <input type="text" name="state" id="state" value={formData.state} onChange={handleChange} placeholder="State" className="input" required />
            </div>
            <div className="w-full flex flex-col items-start">
            <h1 className="heading text-left w-full">Address</h1>
            <input type="text" name="address" id="address" value={formData.address} onChange={handleChange} placeholder="Address" className="input" required />
            </div>
            </div>
          </form>
          {/* Submit Button */}
          <button
           onClick={handleSubmit}
            type="submit"
             className="mx-auto mt-[10%] h-[40px] lg:w-[30vw] sm:w-[35vw] w-[40vw] font-semibold text-white backdrop-blur-md lg:rounded-xl rounded-md flex items-center justify-center border border-white lg:shadow-lg shadow-gray-700">
            Submit
          </button>
        
        

        {/* Terms & Conditions */}
        <p className="mx-auto items-center justify-center mt-3 text-white text-[16px] text-center">
          By Signing up you agree to our{' '}
          <span className="hover:text-blue-400 hover:underline">Terms & Condition</span> and{' '}
          <span className="hover:text-blue-500 hover:underline">Privacy Policy</span>
        </p>
      </div>
      <Outlet />
    </div>
  );
}

export default Signup;
//h-[4.3vh]