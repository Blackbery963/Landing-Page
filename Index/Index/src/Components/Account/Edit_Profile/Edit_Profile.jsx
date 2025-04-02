import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaHome, FaInfoCircle, FaUser, FaBook, FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';

function Edit_Profile() { // Renamed to camelCase
  const [isExpanded, setIsExpanded] = useState(false);
  const [query, setQuery] = useState('');
  const [profile, setProfile] = useState({
    username: '',
    email: '',
    bio: '',
    facebook: '',
    instagram: '',
    twitter: '',
    linkedin: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Profile updated:', profile);
    // Save to local storage
    localStorage.setItem('userProfile', JSON.stringify(profile));
    // Optionally redirect to Account page after saving
    // window.location.href = '/Account';
  };

  const navLinks = [
    { to: '/', icon: FaHome, text: 'Home' },
    { to: '/About', icon: FaInfoCircle, text: 'About' },
    { to: '/Account', icon: FaUser, text: 'Account' },
    { to: '/Journal', icon: FaBook, text: 'Diary' },
  ];

  const socialLinks = [
    { name: 'facebook', icon: FaFacebook, placeholder: 'Facebook ID', color: 'text-blue-600' },
    { name: 'instagram', icon: FaInstagram, placeholder: 'Instagram ID', color: 'text-pink-600' },
    { name: 'twitter', icon: FaTwitter, placeholder: 'Twitter ID', color: 'text-black' },
    { name: 'linkedin', icon: FaLinkedin, placeholder: 'LinkedIn ID', color: 'text-blue-800' },
  ];

  return (
    <div className="min-h-screen w-full bg-slate-300 flex flex-col pb-6">
      {/* Header */}
      <header className="fixed top-0 h-[90px] w-full bg-white/20 backdrop-blur-sm flex items-center justify-between px-4 md:px-6 shadow-md z-50">
        <div className="flex items-center">
          <h1 className="text-[20px] sm:text-[25px] md:text-[30px] lg:text-[35px] font-bold font-Eagle text-black">
            Painters' Diary
          </h1>
        </div>
        <div className="flex items-center gap-2 sm:gap-4 md:gap-6">
          <motion.div
            className="flex items-center justify-center bg-white/40 border border-gray-300 rounded-lg shadow-md overflow-hidden h-[36px]"
            initial={{ width: '40px' }}
            animate={{ width: isExpanded ? '200px' : '40px' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <motion.input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className={`px-2 py-1 w-full outline-none text-gray-700 bg-transparent h-full ${
                isExpanded ? 'block' : 'hidden'
              }`}
              placeholder="Search..."
            />
            <motion.button
              onClick={() => setIsExpanded(!isExpanded)}
              className="px-2 lg:px-3 py-1 bg-blue-700/50 hover:bg-blue-800/80 text-white h-full flex items-center justify-center rounded-r-md border border-gray-400"
              whileTap={{ scale: 0.9 }}
            >
              <FaSearch className="text-xl" />
            </motion.button>
          </motion.div>
          <nav className="flex items-center gap-2">
            {navLinks.map((link) => (
              <Link key={link.text} to={link.to}>
                <button className="px-2 lg:px-4 py-1 bg-blue-700/50 hover:bg-blue-800/80 rounded-md text-white border border-gray-400 text-[18px] flex items-center gap-1 font-Playfair font-bold h-[36px]">
                  <link.icon className="text-xl sm:hidden" />
                  <span className="hidden sm:inline">{link.text}</span>
                </button>
              </Link>
            ))}
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center pt-[120px] px-4">
        <motion.div
          className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl w-full max-w-md lg:max-w-2xl xl:max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold font-Eagle text-gray-800 mb-6 text-center">
            Edit Profile
          </h2>

          {/* Form Section */}
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-2">
              <label className="block text-gray-700 font-Playfair mb-1">Username</label>
              <input
                type="text"
                name="username"
                value={profile.username}
                onChange={handleInputChange}
                className="w-full lg:w-[70%] px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="Enter username"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-gray-700 font-Playfair mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={profile.email}
                onChange={handleInputChange}
                className="w-full lg:w-[70%] px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="Enter email"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-gray-700 font-Playfair mb-1">Bio</label>
              <textarea
                name="bio"
                value={profile.bio}
                onChange={handleInputChange}
                className="w-full lg:w-[70%] px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 resize-y outline-none"
                placeholder="Tell us about yourself"
                rows="4"
              />
            </div>

            {/* Social Media Section */}
            <div className="md:col-span-2">
              <h3 className="text-lg font-semibold font-Playfair text-gray-800 mb-2">
                Social Media Links
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social) => (
                  <div key={social.name}>
                    <label className="block text-gray-700 font-Playfair mb-1 flex items-center gap-2">
                      <social.icon className={`${social.color} text-xl`} />
                      {social.placeholder}
                    </label>
                    <input
                      type="text"
                      name={social.name}
                      value={profile[social.name]}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                      placeholder={`Enter ${social.placeholder}`}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="md:col-span-2">
              <button
                type="submit"
                className="w-full py-3 bg-blue-700/80 hover:bg-blue-800/90 text-white font-bold rounded-lg transition-all shadow-md"
              >
                Save Changes
              </button>
            </div>
          </form>

          {/* Profile Preview Section */}
          <div className="mt-8 border-t border-gray-300 pt-6">
            <h3 className="text-lg font-semibold font-Playfair text-gray-800 mb-2 text-center">
              Profile Preview
            </h3>
            <div className="space-y-2 text-center">
              <div className="flex lg:flex-row flex-col items-center justify-around">
                <p><strong>Username:</strong> {profile.username || 'Not set'}</p>
                <p><strong>Email:</strong> {profile.email || 'Not set'}</p>
                <p><strong>Bio:</strong> {profile.bio || 'Not set'}</p>
              </div>
              <div className="flex justify-center gap-4 mt-2">
                {socialLinks.map((social) =>
                  profile[social.name] && (
                    <a
                      key={social.name}
                      href={`https://${social.name}.com/${profile[social.name]}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${social.color} hover:opacity-80`}
                    >
                      <social.icon className="text-2xl" />
                    </a>
                  )
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}

export default Edit_Profile;