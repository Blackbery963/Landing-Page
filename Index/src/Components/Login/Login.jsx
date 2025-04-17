// import { useState } from 'react'
// import Background from '/home/swarnadip/Documents/Index/Index/Index/src/Components/Login/Image/background.jpg'
// import { Link } from 'react-router-dom'


// function Login() {
//   const [count, setCount] = useState(0)
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleLogin = () => {
//     // Retrieve stored user data
//     const storedData = JSON.parse(localStorage.getItem('signupData'));

//     if (storedData) {
//       if (email === storedData.email && password === storedData.password) {
//         alert("Login Successful! Welcome back, " + storedData.username);
//         // Redirect user to dashboard or homepage (Example: window.location.href = "/dashboard";)
//       } else {
//         setError("Invalid Email or Password");
//       }
//     } else {
//       setError("No account found. Please sign up.");
//     }
//   };

//   const backgroundImg = {
//     backgroundImage: `url(${Background})`,
//     backgroundRepeat: 'no-repeat',
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//     backgroundAttachment: 'scroll'
//   }

//   return (
//     <div className='bg-[#2e1414] w-screen h-screen flex items-center justify-center p-4'>
//       <div className='h-[95vh] w-[90vw] bg-[#ffffff4d] backdrop-blur-xl rounded-xl overflow-hidden border border-white flex flex-col lg:flex-row'>
//         {/* Background div */}
//         <div className='hidden lg:block lg:w-[60%] h-full bg-center bg-cover' style={backgroundImg}>
//           <div className='h-[9vw] w-[30vw] bg-[#ffffff4d] backdrop-blur-xl border border-white mx-auto mt-[25vh] rounded-2xl p-4 text-center'>
//             <h1 className='font-playfair font-semibold text-[2.3vw] text-left text-teal-50'>WELCOME!</h1>
//             <p className='font-unna text-[1.2vw] text-cyan-800 text-left font-markazi'>Log in to continue your journey with us. We're excited to have you back.</p>
//           </div>
//         </div>

//           <div className='flex flex-col items-center justify-center w-full lg:w-[40%] p-6'>
//           <div className='text-center'>
//             <h1 className='font-eagle text-3xl lg:text-[2.3vw] font-bold'>Painters' Diary</h1>
//             <p className='font-cookie text-lg lg:text-[1.5vw] font-medium'>The Diary of Every Artist</p>
//           </div>

//           <div className='w-full max-w-xs mt-6'>
//             <h1 className='text-lg lg:text-[1.6vw] font-playfair font-bold'>Username</h1>
//             <input type='text' placeholder='Username' className='mt-2 w-full h-10 rounded-lg pl-4 bg-[#ffffff59] backdrop-blur-md placeholder-black font-unna shadow-md border border-white outline-none' />

//             <h1 className='mt-6 text-lg lg:text-[1.6vw] font-playfair font-bold'>E-mail</h1>
//             <input type='text' placeholder='E-mail' className='mt-2 w-full h-10 rounded-lg pl-4 bg-[#ffffff59] backdrop-blur-md placeholder-black font-unna shadow-md border border-white outline-none' value={email} onChange={(e) => setEmail(e.target.value)} />

//             <h1 className='mt-6 text-lg lg:text-[1.6vw] font-playfair font-bold'>Password</h1>
//             <input type='password' placeholder='Password' className='mt-2 w-full h-10 rounded-lg pl-4 bg-[#ffffff59] backdrop-blur-md placeholder-black font-unna shadow-md border border-white outline-none' value={password}  onChange={(e) => setPassword(e.target.value)}/>
//             <Link to={"/Login/ResetPassword"} className='flex items-center justify-end'>
//             <p className=' hover:underline font-Playfair pl-2 mt-1 cursor-pointer'>Forgot Password ?</p>
//             </Link>
//           </div>

          
//           {error && <p className="text-red-500 mt-2">{error}</p>}

//           <button  onClick={handleLogin} className='w-3/4 max-w-xs font-unna text-cyan-900 font-semibold text-lg bg-gradient-to-b from-gray-300 to-pink-800 flex items-center justify-center py-2 mt-12 rounded-xl hover:from-gray-200 hover:to-pink-700'>
//             Submit
//           </button>
//         </div>
             
//       </div>
//     </div>
//   )
// }

// export default Login;

// import { useState } from 'react';
// import Background from '/home/swarnadip/Documents/Index/Index/Index/src/Components/Login/Image/background.jpg';
// import { Link, useNavigate } from 'react-router-dom';
// import { Client, Account } from 'appwrite'; // Import Appwrite SDK

// // Initialize Appwrite client (adjust endpoint and project ID as per your setup)
// const client = new Client()
//   .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT) // Replace with your Appwrite endpoint
//   .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID); // Replace with your Appwrite project ID
// const account = new Account(client);

// function Login() {
//   const navigate = useNavigate(); // For redirecting after login
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleLogin = async () => {
//     try {
//       // Step 0: Optional — Clear any active session before creating a new one
//       await account.deleteSessions(); // This logs out the user from all sessions
  
//       // Step 1: Attempt to create a session with email and password
//       await account.createEmailPasswordSession(email, password);
  
//       // Step 2: Fetch the current user
//       const user = await account.get();
  
//       alert(`Login Successful! Welcome back, ${user.name || 'User'}`);
//       navigate('/dashboard');
//     } catch (err) {
//       console.error('Login error:', err);
//       setError(
//         err.message.includes('Invalid credentials')
//           ? 'Invalid Email or Password'
//           : err.message.includes('user_not_found')
//           ? 'No account found. Please sign up.'
//           : `Login failed: ${err.message}`
//       );
//     }
//   };

//   try {
//     (async () => {
//       try {
//         const user = await account.get(); // This only works if logged in
//         console.log('User session exists:', user);
//       } catch (error) {
//         console.log('No active session:', error.message);
//       }
//     })();
//   } catch (error) {
//     console.log('No active session:', error.message);
//   }
  
  
//   const backgroundImg = {
//     backgroundImage: `url(${Background})`,
//     backgroundRepeat: 'no-repeat',
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//     backgroundAttachment: 'scroll',
//   };

//   return (
//     <div className="bg-[#2e1414] w-screen h-screen flex items-center justify-center p-4">
//       <div className="h-[95vh] w-[90vw] bg-[#ffffff4d] backdrop-blur-xl rounded-xl overflow-hidden border border-white flex flex-col lg:flex-row">
//         {/* Background div */}
//         <div
//           className="hidden lg:block lg:w-[60%] h-full bg-center bg-cover"
//           style={backgroundImg}
//         >
//           <div className="h-[9vw] w-[30vw] bg-[#ffffff4d] backdrop-blur-xl border border-white mx-auto mt-[25vh] rounded-2xl p-4 text-center">
//             <h1 className="font-playfair font-semibold text-[2.3vw] text-left text-teal-50">
//               WELCOME!
//             </h1>
//             <p className="font-unna text-[1.2vw] text-cyan-800 text-left font-markazi">
//               Log in to continue your journey with us. We're excited to have you back.
//             </p>
//           </div>
//         </div>

//         <div className="flex flex-col items-center justify-center w-full lg:w-[40%] p-6">
//           <div className="text-center">
//             <h1 className="font-eagle text-3xl lg:text-[2.3vw] font-bold">
//               Painters' Diary
//             </h1>
//             <p className="font-cookie text-lg lg:text-[1.5vw] font-medium">
//               The Diary of Every Artist
//             </p>
//           </div>

//           <div className="w-full max-w-xs mt-6">
//             {/* Removed Username input since Appwrite auth uses email/password */}
//             <h1 className="mt-6 text-lg lg:text-[1.6vw] font-playfair font-bold">
//               E-mail
//             </h1>
//             <input
//               type="email"
//               placeholder="E-mail"
//               className="mt-2 w-full h-10 rounded-lg pl-4 bg-[#ffffff59] backdrop-blur-md placeholder-black font-unna shadow-md border border-white outline-none"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />

//             <h1 className="mt-6 text-lg lg:text-[1.6vw] font-playfair font-bold">
//               Password
//             </h1>
//             <input
//               type="password"
//               placeholder="Password"
//               className="mt-2 w-full h-10 rounded-lg pl-4 bg-[#ffffff59] backdrop-blur-md placeholder-black font-unna shadow-md border border-white outline-none"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//             <Link
//               to={'/Login/ResetPassword'}
//               className="flex items-center justify-end"
//             >
//               <p className="hover:underline font-Playfair pl-2 mt-1 cursor-pointer">
//                 Forgot Password ?
//               </p>
//             </Link>
//           </div>

//           {error && <p className="text-red-500 mt-2">{error}</p>}

//           <button
//             onClick={handleLogin}
//             className="w-3/4 max-w-xs font-unna text-cyan-900 font-semibold text-lg bg-gradient-to-b from-gray-300 to-pink-800 flex items-center justify-center py-2 mt-12 rounded-xl hover:from-gray-200 hover:to-pink-700"
//           >
//             Submit
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;

import { useState, useEffect } from 'react';
import Background from '/home/swarnadip/Documents/Index/Index/Index/src/Components/Login/Image/background.jpg';
import { Link, useNavigate } from 'react-router-dom';
import { Client, Account } from 'appwrite';

// Initialize Appwrite client
const client = new Client()
  .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT)
  .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID);
const account = new Account(client);

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Check for existing session on mount
  useEffect(() => {
    const checkSession = async () => {
      try {
        const user = await account.get();
        console.log('Active session found:', user);
        navigate('/Account/Dashboard'); // Redirect if already logged in
      } catch (err) {
        console.log('No active session:', err.message);
        // No action needed; user needs to log in
      }
    };
    checkSession();
  }, [navigate]);

  const handleLogin = async () => {
    setIsLoading(true);
    setError('');
    try {
      // Create a new session
      await account.createEmailPasswordSession(email, password);

      // Fetch user details
      const user = await account.get();
      alert(`Login Successful! Welcome back, ${user.name || 'User'}`);
      navigate('/dashboard');
    } catch (err) {
      console.error('Login error:', err);
      setError(
        err.code === 401
          ? 'Invalid Email or Password'
          : err.code === 404
          ? 'No account found. Please sign up.'
          : err.code === 429
          ? 'Too many requests. Please try again later.'
          : `Login failed: ${err.message}`
      );
    } finally {
      setIsLoading(false);
    }
  };

  const backgroundImg = {
    backgroundImage: `url(${Background})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'scroll',
  };

  return (
    <div className="bg-[#2e1414] w-screen h-screen flex items-center justify-center p-4">
      <div className="h-[95vh] w-[90vw] bg-[#ffffff4d] backdrop-blur-xl rounded-xl overflow-hidden border border-white flex flex-col lg:flex-row">
        {/* Background div */}
        <div
          className="hidden lg:block lg:w-[60%] h-full bg-center bg-cover"
          style={backgroundImg}
        >
          <div className="h-[9vw] w-[30vw] bg-[#ffffff4d] backdrop-blur-xl border border-white mx-auto mt-[25vh] rounded-2xl p-4 text-center">
            <h1 className="font-playfair font-semibold text-[2.3vw] text-left text-teal-50">
              WELCOME!
            </h1>
            <p className="font-unna text-[1.2vw] text-cyan-800 text-left font-markazi">
              Log in to continue your journey with us. We're excited to have you back.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center w-full lg:w-[40%] p-6">
          <div className="text-center">
            <h1 className="font-eagle text-3xl lg:text-[2.3vw] font-bold">
              Painters' Diary
            </h1>
            <p className="font-cookie text-lg lg:text-[1.5vw] font-medium">
              The Diary of Every Artist
            </p>
          </div>

          <div className="w-full max-w-xs mt-6">
            <h1 className="mt-6 text-lg lg:text-[1.6vw] font-playfair font-bold">
              E-mail
            </h1>
            <input
              type="email"
              placeholder="E-mail"
              className="mt-2 w-full h-10 rounded-lg pl-4 bg-[#ffffff59] backdrop-blur-md placeholder-black font-unna shadow-md border border-white outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isLoading}
            />

            <h1 className="mt-6 text-lg lg:text-[1.6vw] font-playfair font-bold">
              Password
            </h1>
            <input
              type="password"
              placeholder="Password"
              className="mt-2 w-full h-10 rounded-lg pl-4 bg-[#ffffff59] backdrop-blur-md placeholder-black font-unna shadow-md border border-white outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={isLoading}
            />
            <Link
              to={'/Login/ResetPassword'}
              className="flex items-center justify-end"
            >
              <p className="hover:underline font-Playfair pl-2 mt-1 cursor-pointer">
                Forgot Password ?
              </p>
            </Link>
          </div>

          {error && <p className="text-red-500 mt-2">{error}</p>}

          <button
            onClick={handleLogin}
            disabled={isLoading}
            className={`w-3/4 max-w-xs font-unna text-cyan-900 font-semibold text-lg bg-gradient-to-b from-gray-300 to-pink-800 flex items-center justify-center py-2 mt-12 rounded-xl hover:from-gray-200 hover:to-pink-700 ${
              isLoading ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {isLoading ? 'Logging in...' : 'Submit'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;