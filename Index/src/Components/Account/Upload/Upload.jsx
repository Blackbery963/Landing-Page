import { Link } from 'react-router-dom';
import { FaHome, FaInfoCircle, FaUser, FaBars, FaTimes } from 'react-icons/fa';
import { MdBook, MdClose } from 'react-icons/md';
import { IoCloudUploadOutline } from 'react-icons/io5';
import { FiMenu } from 'react-icons/fi';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'react-toastify';
import { ToastContainer } from "react-toastify";
import { storage, account, databases, config, ID, Permission, Role } from '/home/swarnadip/Documents/Index/Index/Index/src/appwriteConfig.js';

const UploadEntry = ({ index, entry, updateEntry, removeEntry, handleFileChange, handleEntryUpload, uploading }) => {
  const [isDragging, setIsDragging] = useState(false);

  return (
    <div className="bg-white dark:bg-gray-800/90 p-6 rounded-xl shadow-lg mb-6 border border-gray-100 dark:border-gray-700 transform hover:scale-100 transition-transform duration-300">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">
          Image Entry {index + 1}
        </h3>
        {index > 0 && (
          <button
            onClick={() => removeEntry(index)}
            className="text-red-500 dark:text-red-400 hover:text-red-700 dark:hover:text-red-600 text-sm font-medium underline"
          >
            Remove
          </button>
        )}
      </div>
      <div className="grid grid-cols-1 gap-4">
        <div>
          <label className="text-base font-semibold text-teal-700 dark:text-teal-400 mb-1 block font-Playfair">
            Title *
          </label>
          <input
            type="text"
            placeholder="Give your image a catchy name"
            value={entry.title}
            onChange={(e) => updateEntry(index, 'title', e.target.value)}
            className="w-full p-3 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400 font-medium font-Playfair"
            required
          />
        </div>
        <div>
          <label className="text-base font-semibold text-teal-700 dark:text-teal-400 mb-1 block font-Playfair">
            Story Behind It
          </label>
          <textarea
            placeholder="Share the story or details"
            value={entry.description}
            onChange={(e) => updateEntry(index, 'description', e.target.value)}
            className="w-full p-3 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400 font-medium font-Playfair"
            rows="3"
          />
        </div>
        <div>
          <label className="text-base font-semibold text-teal-700 dark:text-teal-400 mb-1 block font-Playfair">
            Category Tag
          </label>
          <input
            type="text"
            placeholder="Add a relevant tag"
            value={entry.tag}
            onChange={(e) => updateEntry(index, 'tag', e.target.value)}
            className="w-full p-3 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400 font-medium font-Playfair"
          />
        </div>
        <div>
          <label className="text-base font-semibold text-teal-700 dark:text-teal-400 mb-1 block font-Playfair">
            Art Type *
          </label>
          <select
            value={entry.medium}
            onChange={(e) => updateEntry(index, 'medium', e.target.value)}
            className="w-full p-3 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-200 font-medium font-Playfair"
            required
          >
            <option value="">Choose Art Type</option>
            <option value="Photography">Photography</option>
            <option value="Digital Art">Digital Art</option>
            <option value="Painting">Painting</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div>
          <label className="text-base font-semibold text-teal-700 dark:text-teal-400 mb-1 block font-Playfair">
            Upload Your Masterpiece *
          </label>
          <div
            className={`border-2 border-dashed ${isDragging ? 'border-teal-500 bg-teal-50 dark:border-teal-400 dark:bg-teal-900' : 'border-teal-300 dark:border-teal-600'} rounded-xl p-6 text-center cursor-pointer transition-all bg-gradient-to-br from-gray-50 to-white dark:from-gray-700 dark:to-gray-800 hover:bg-gradient-to-tl hover:from-teal-50 hover:to-gray-50 dark:hover:from-teal-900 dark:hover:to-gray-700`}
            onDragOver={(e) => {
              e.preventDefault();
              setIsDragging(true);
            }}
            onDragLeave={(e) => {
              e.preventDefault();
              setIsDragging(false);
            }}
            onDrop={(e) => {
              e.preventDefault();
              setIsDragging(false);
              handleFileChange(index, e.dataTransfer.files);
            }}
            onClick={() => document.getElementById(`fileInput-${index}`).click()}
          >
            {entry.file ? (
              <div className="flex flex-col items-center">
                <img
                  src={URL.createObjectURL(entry.file)}
                  alt="Preview"
                  className="h-32 object-contain mb-2 rounded-lg"
                />
                <p className="text-gray-700 dark:text-gray-300 font-medium truncate max-w-xs">
                  {entry.file.name}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  {(entry.file.size / 1024 / 1024).toFixed(2)} MB
                </p>
              </div>
            ) : (
              <>
                <IoCloudUploadOutline className="mx-auto h-12 w-12 text-teal-500 dark:text-teal-400" />
                <p className="mt-2 text-gray-600 dark:text-gray-400 font-Playfair">
                  Drag & drop your image or{' '}
                  <span className="text-teal-600 dark:text-teal-400 font-semibold">browse</span>
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                  Supports JPG, PNG, WEBP (Max 25MB)
                </p>
              </>
            )}
            <input
              type="file"
              id={`fileInput-${index}`}
              className="hidden"
              accept="image/jpeg, image/png, image/webp"
              onChange={(e) => handleFileChange(index, e.target.files)}
            />
          </div>
        </div>
        <button
          className={`w-full bg-gradient-to-r from-teal-600 to-teal-300 dark:from-teal-500 dark:to-teal-700 text-white py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-70 mt-4 font-Playfair ${uploading ? 'opacity-70 cursor-not-allowed' : 'hover:from-teal-700 hover:to-teal-400 dark:hover:from-teal-600 dark:hover:to-teal-800'}`}
          onClick={() => handleEntryUpload(index)}
          disabled={uploading}
        >
          {uploading ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Uploading...
            </span>
          ) : (
            'Share Your Art'
          )}
        </button>
      </div>
    </div>
  );
};

const UploadSection = () => {
  const [entries, setEntries] = useState([
    { title: '', description: '', tag: '', medium: '', file: null },
  ]);
  const [uploadingStates, setUploadingStates] = useState({});
  const [progress, setProgress] = useState(0);

  const addEntry = () => {
    setEntries([...entries, { title: '', description: '', tag: '', medium: '', file: null }]);
  };

  const updateEntry = (index, field, value) => {
    const newEntries = [...entries];
    newEntries[index][field] = value;
    setEntries(newEntries);
  };

  const removeEntry = (index) => {
    setEntries(entries.filter((_, i) => i !== index));
  };

  const handleFileChange = (index, files) => {
    if (!files || files.length === 0) return;
    
    const file = files[0];
    const maxSize = 25 * 1024 * 1024; // 25MB
    const validTypes = ['image/jpeg', 'image/png', 'image/webp'];
    
    if (!validTypes.includes(file.type)) {
      toast.error('Please upload a valid image (JPEG, PNG, or WEBP)');
      return;
    }
    
    if (file.size > maxSize) {
      toast.error('File size exceeds 25MB limit');
      return;
    }
    
    const newEntries = [...entries];
    newEntries[index].file = file;
    setEntries(newEntries);
  };

  const uploadImage = async (file, userId) => {
    try {
      const response = await storage.createFile(
        config.storageBucketId,
        ID.unique(),
        file,
        [
          Permission.read(Role.user(userId)),
          Permission.update(Role.user(userId)),
          Permission.delete(Role.user(userId)),
          Permission.read(Role.any()) // For public access if needed
        ],
        (progress) => {
          const percentage = Math.round((progress.chunksUploaded / progress.chunksTotal) * 100);
          setProgress(percentage);
        }
      );
      return response;
    } catch (err) {
      console.error('Upload error:', err);
      throw new Error(err.message || 'Failed to upload image');
    }
  };

  const storeImageMeta = async (fileId, userId, otherData = {}) => {
    try {
      const response = await databases.createDocument(
        config.databaseId,
        config.usersCollectionId,
        ID.unique(),
        {
          fileId,
          userId,
          ...otherData,
          createdAt: new Date().toISOString(),
          status: 'active'
        },
        [
          Permission.read(Role.user(userId)),
          Permission.write(Role.user(userId)),
          Permission.delete(Role.user(userId)),
          Permission.read(Role.any()) // For public access if needed
        ]
      );
      return response;
    } catch (err) {
      console.error('Metadata storage error:', err);
      throw new Error(err.message || 'Failed to store metadata');
    }
  };

  const handleEntryUpload = async (index) => {
    const entry = entries[index];
    
    // Validate required fields
    if (!entry.title.trim()) {
      toast.error('Please provide a title for your artwork');
      return;
    }
    if (!entry.file) {
      toast.error('Please select an image to upload');
      return;
    }
    if (!entry.medium) {
      toast.error('Please select an art type');
      return;
    }

    setUploadingStates((prev) => ({ ...prev, [index]: true }));
    setProgress(0);

    try {
      // Verify user authentication
      let user;
      try {
        user = await account.get();
        if (!user || !user.$id) throw new Error('User not authenticated');
      } catch (authErr) {
        throw new Error('Please log in to upload images');
      }

      // Upload the file
      const uploadedFile = await uploadImage(entry.file, user.$id);
      if (!uploadedFile?.$id) throw new Error('File upload failed');

      // Store metadata
      const metadata = {
        title: entry.title.trim(),
        description: entry.description.trim(),
        tag: entry.tag.trim(),
        medium: entry.medium,
        dimensions: entry.dimensions || '',
        isPublic: true // You can make this configurable
      };

      const document = await storeImageMeta(uploadedFile.$id, user.$id, metadata);
      if (!document?.$id) throw new Error('Metadata storage failed');

      // Reset the form
      const newEntries = [...entries];
      newEntries[index] = { title: '', description: '', tag: '', medium: '', file: null };
      setEntries(newEntries);

      // Get the public URL for display
      const imageUrl = storage.getFileView(config.storageBucketId, uploadedFile.$id);
      console.log('Image available at:', imageUrl);

      toast.success(
        <div>
          <p className="font-semibold">"{entry.title}" uploaded successfully!</p>
          <p className="text-sm">Your artwork is now live.</p>
        </div>,
        { autoClose: 5000 }
      );

    } catch (err) {
      console.error('Upload process failed:', err);
      
      let errorMessage = 'Upload failed. Please try again.';
      if (err.message.includes('permission') || err.message.includes('authenticated')) {
        errorMessage = 'Please log in to upload images';
      } else if (err.message.includes('size')) {
        errorMessage = 'File is too large (max 25MB)';
      } else if (err.message.includes('type')) {
        errorMessage = 'Invalid file type (JPEG, PNG, or WEBP only)';
      }
      
      toast.error(errorMessage, { autoClose: 5000 });
    } finally {
      setUploadingStates((prev) => ({ ...prev, [index]: false }));
      setProgress(0);
    }
  };

  return (
    <div className="flex flex-col items-center p-6 bg-gradient-to-b from-gray-100 to-white dark:from-[#040d12f5] dark:to-[#1a2630f5] min-h-screen pt-[100px]">
      <div className="w-full max-w-5xl mb-8">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-2 font-Playfair">Share Your Artwork</h2>
        <p className="text-gray-600 dark:text-gray-300">Upload your creative masterpieces to the community gallery</p>
      </div>

      {entries.map((entry, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row gap-8 w-full max-w-5xl mb-8 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-teal-100 dark:border-gray-700"
        >
          <div className="w-full md:w-1/2 h-80 bg-gradient-to-br from-gray-200 to-gray-100 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center rounded-xl overflow-hidden p-4">
            {entry.file ? (
              <img
                src={URL.createObjectURL(entry.file)}
                alt="Preview"
                className="max-h-full max-w-full object-contain rounded-xl"
              />
            ) : (
              <div className="text-center">
                <IoCloudUploadOutline className="mx-auto h-16 w-16 text-gray-400 dark:text-gray-500 mb-4" />
                <p className="text-gray-500 dark:text-gray-400 text-xl font-medium font-Playfair">Image Preview</p>
                <p className="text-gray-400 dark:text-gray-500 text-sm mt-2">Your uploaded image will appear here</p>
              </div>
            )}
          </div>
          <div className="w-full md:w-1/2 space-y-4">
            <UploadEntry
              index={index}
              entry={entry}
              updateEntry={updateEntry}
              removeEntry={removeEntry}
              handleFileChange={handleFileChange}
              handleEntryUpload={handleEntryUpload}
              uploading={uploadingStates[index] || false}
            />
          </div>
        </div>
      ))}

      <button
        onClick={addEntry}
        className="mb-8 p-3 bg-teal-100 dark:bg-teal-600 text-teal-700 dark:text-white rounded-full hover:bg-teal-200 dark:hover:bg-teal-700 transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-2"
        title="Add another image"
        disabled={Object.values(uploadingStates).some(state => state)}
      >
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 4v16m8-8H4"
          />
        </svg>
        <span>Add Another Image</span>
      </button>

      {Object.values(uploadingStates).some((state) => state) && (
        <div className="w-full max-w-5xl mb-6">
          <div className="flex justify-between mb-1">
            <span className="text-sm font-medium text-teal-700 dark:text-teal-400">
              Upload Progress
            </span>
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
              {progress}%
            </span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2.5">
            <div
              className="bg-gradient-to-r from-teal-600 to-teal-300 dark:from-teal-500 dark:to-teal-700 h-2.5 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      )}
    </div>
  );
};

// Navbar and App components remain the same as in your original code

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const buttonVariants = {
    hover: { scale: 1.1, backgroundColor: '#A4C6EB', transition: { duration: 0.3 } },
    tap: { scale: 0.95 },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const dropdownVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeInOut' } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
  };

  return (
    <motion.header
      className="h-16 sm:h-20 w-full bg-gradient-to-r from-teal-400/50 to-teal-800/50 dark:bg-gray-900/80 backdrop-blur-md flex items-center justify-between shadow-lg px-4 sm:px-8 fixed top-0 z-50"
      variants={headerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="flex items-center">
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold font-Eagle text-rose-700 dark:text-teal-400">
          Painters' Diary
        </h1>
      </div>
      <div className="flex items-center gap-2">
        <nav className="hidden md:flex gap-x-4 text-gray-800 dark:text-gray-200 font-playfair font-semibold">
          <Link to="/">
            <motion.button
              className="px-2 sm:px-2 py-1 sm:py-1 rounded-md hover:bg-teal-700 dark:bg-teal-600 dark:hover:bg-teal-700 flex items-center gap-2"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <FaHome className="text-lg sm:text-xl" />
              <span className="hidden sm:inline">Home</span>
            </motion.button>
          </Link>
          <Link to="/About">
            <motion.button
              className="px-2 sm:px-2 py-1 sm:py-1 rounded-md hover:bg-teal-700 dark:bg-teal-600 dark:hover:bg-teal-700 flex items-center gap-2"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <FaInfoCircle className="text-lg sm:text-xl" />
              <span className="hidden sm:inline">About</span>
            </motion.button>
          </Link>
          <Link to="/Account">
            <motion.button
              className="px-2 sm:px-2 py-1 sm:py-1 rounded-md hover:bg-teal-700 dark:bg-teal-600 dark:hover:bg-teal-700 flex items-center gap-2"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <FaUser className="text-lg sm:text-xl" />
              <span className="hidden sm:inline">Account</span>
            </motion.button>
          </Link>
          <Link to="/Journal">
            <motion.button
              className="px-2 sm:px-2 py-1 sm:py-1 rounded-md hover:bg-teal-700 dark:bg-teal-600 dark:hover:bg-teal-700 flex items-center gap-2"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <MdBook className="text-lg sm:text-xl" />
              <span className="hidden sm:inline">Diary</span>
            </motion.button>
          </Link>
        </nav>
        <button
          className="md:hidden text-gray-800 dark:text-gray-200 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <MdClose className="text-2xl" /> : <FiMenu className="text-2xl" />}
        </button>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="absolute top-16 sm:top-20 mt-[5px] right-2 w-48 bg-teal-200/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg z-40 md:hidden"
            variants={dropdownVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <nav className="flex flex-col items-center gap-2 py-4 text-gray-800 dark:text-gray-200 font-playfair">
              <Link to="/" onClick={() => setIsMenuOpen(false)}>
                <motion.button
                  className="w-full px-4 py-2 hover:bg-teal-700 dark:hover:bg-teal-700 rounded-md flex items-center justify-center gap-2"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <FaHome className="text-lg" />
                  <span>Home</span>
                </motion.button>
              </Link>
              <Link to="/About" onClick={() => setIsMenuOpen(false)}>
                <motion.button
                  className="w-full px-4 py-2 hover:bg-teal-700 dark:hover:bg-teal-700 rounded-md flex items-center justify-center gap-2"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <FaInfoCircle className="text-lg" />
                  <span>About</span>
                </motion.button>
              </Link>
              <Link to="/Account" onClick={() => setIsMenuOpen(false)}>
                <motion.button
                  className="w-full px-4 py-2 hover:bg-teal-700 dark:hover:bg-teal-700 rounded-md flex items-center justify-center gap-2"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <FaUser className="text-lg" />
                  <span>Account</span>
                </motion.button>
              </Link>
              <Link to="/Journal" onClick={() => setIsMenuOpen(false)}>
                <motion.button
                  className="w-full px-4 py-2 hover:bg-teal-700 dark:hover:bg-teal-700 rounded-md flex items-center justify-center gap-2"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <MdBook className="text-lg" />
                  <span>Diary</span>
                </motion.button>
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};


const App = () => {
  return (
    <div className="min-h-screen">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <Navbar />
      <UploadSection />
    </div>
  );
};

export default App;