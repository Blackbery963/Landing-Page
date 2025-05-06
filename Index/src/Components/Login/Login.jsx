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
        navigate('/Account'); // Redirect if already logged in
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
              className="mt-2 font-Playfair w-full h-10 rounded-lg pl-4 bg-[#ffffff59] backdrop-blur-md placeholder-black font-unna shadow-md border border-white outline-none"
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
              className="mt-2 font-Playfair w-full h-10 rounded-lg pl-4 bg-[#ffffff59] backdrop-blur-md placeholder-black font-unna shadow-md border border-white outline-none"
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
          <p className='font-Playfair '>Create an account 
            <Link to={"/Signup"}>
            <span className=' text-rose-600 pl-2 hover:underline'>Sign Up</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;