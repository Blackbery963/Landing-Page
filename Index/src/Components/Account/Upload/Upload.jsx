import React, { useState } from "react";
import { FaCamera, FaPlus, FaBook, FaInfoCircle, FaHome, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { databases, storage } from "/home/swarnadip/Documents/Index/Index/Index/src/appwriteConfig.js"; // adjust path
import { ID } from "appwrite";

const MAX_FILE_SIZE = 25 * 1024 * 1024; // 50MB in bytes

function UploadComponent({ index, onImageChange, onRemoveImage, image, classification, error }) {
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (file.size > MAX_FILE_SIZE) {
        onImageChange(index, null, file, "", "File size exceeds 50MB. Please choose a smaller file.");
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        onImageChange(index, reader.result, file, "", "");
      };
      reader.readAsDataURL(file);
    }
  };

  const [selectedTag, setSelectedTag] = useState("");
  const [customTag, setCustomTag] = useState("#");
  const [isCustom, setIsCustom] = useState(false);

  const handleTagChange = (e) => {
    const value = e.target.value;
    if (value === "custom") {
      setIsCustom(true);
      setSelectedTag("");
      setCustomTag("#"); // Ensure "#" appears by default
    } else {
      setIsCustom(false);
      setSelectedTag(value);
    }
  };

  const handleCustomTagChange = (e) => {
    let value = e.target.value;
    
    // Ensure "#" is always present at the start
    if (!value.startsWith("#")) {
      value = "#" + value.replace(/^#+/, ""); // Remove extra # if user tries to add multiple
    }

    setCustomTag(value);
  };

 

const handleSubmit = async (e, index) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const title = formData.get("title");
  const description = formData.get("description");
  const medium = formData.get("medium");
  const tags = formData.get("tags") || customTag;

  const imageFile = Upload[index].imageFile;

  try {
    // Step 1: Upload to Appwrite Storage
    const storageRes = await storage.createFile("67f164850003fb3c9d8f", ID.unique(), imageFile);

    // Step 2: Create Document in Database
    const document = await databases.createDocument(
      "67f1646a00129d29d660",
      "67f16c9e0009042bf8ed",
      ID.unique(),
      {
        title,
        description,
        medium,
        tags,
        fileId: storageRes.$id, // Store file reference
        classification: Upload[index].classification,
      }
    );

    alert("Upload successful!");
    console.log("Stored in Appwrite:", document);
  } catch (error) {
    console.error("Upload failed:", error);
    alert("Upload failed. Check console for details.");
  }
};


  return (
    <div className="w-[90%] lg:h-[70vh] md:h-[85vh] h-[95vh] bg-gradient-to-tr to-[#733b40] via-[#a6565d] from-[#990931] mx-auto mt-[40px] rounded-md flex flex-col lg:flex-row items-center justify-between p-4 gap-4">
      {/* Upload Section */}
      <div className="h-full lg:w-[40%] md:w-[60%] sm:w-[80%] w-[95%] bg-white/20 border border-[#fc8e97] backdrop-blur-md rounded-xl flex flex-col items-center justify-center gap-4 p-4">
        {!image ? (
          <label
            htmlFor={`fileUpload-${index}`}
            className="h-full w-full flex flex-col items-center justify-center border-2 border-dashed border-gray-500 rounded-md text-white cursor-pointer hover:border-[#fc8e97] transition duration-200"
          >
            <FaCamera className="text-3xl mb-2" />
            <span className="text-sm font-serif bg-black/50 hover:bg-black/60 px-2 py-1 rounded-md">Click to Upload</span>
            <input
              type="file"
              id={`fileUpload-${index}`}
              className="hidden"
              accept="image/*"
              onChange={handleImageChange}
            />
          </label>
        ) : (
          <div className="relative h-full w-full flex items-center justify-center border-2 border-gray-500 rounded-md overflow-hidden">
            <img src={image} alt="Uploaded Preview" className="w-full h-full object-cover rounded-md" />
            <button
              onClick={() => onRemoveImage(index)}
              className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 text-[16px] rounded-md hover:bg-red-700 transition"
            >
              ✕
            </button>
          </div>
        )}

        {classification && (
          <p className="text-sm text-white bg-[#fc8e97] px-3 py-1 rounded-md">Classification: {classification}</p>
        )}
        {error && <p className="text-sm text-red-500 bg-white/20 px-3 py-1 rounded-md">{error}</p>}

        <p className="text-xs text-gray-300">Supports JPG, PNG, GIF (Max: 50MB)</p>
      </div>

      {/* Form Section */}
      <form
        className="lg:w-[60%] sm:w-[80%] w-[95%] h-full flex items-center justify-center bg-black/20 rounded-xl border border-[#fc8e97be] flex-col lg:p-6 sm:p-4 p-2 gap-4"
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.target);
          console.log({
            title: formData.get("title"),
            description: formData.get("description"),
            medium: formData.get("medium"),
            tags: formData.get("tags"),
          });
        }}
      >
        <div className="w-full flex flex-col gap-1 items-start relative">
          <h1 className="text-white font-semibold text-left font-serif">Title</h1>
          <input
            name="title"
            className="h-10 lg:w-[60%] md:w-[75%] sm:w-[85%] w-[95%] px-3 border border-gray-500 rounded-md bg-transparent font-Funnel text-white outline-none placeholder-gray-400 focus:border-none focus:outline-none focus:ring-1 focus:ring-[#fc8e97]"
            placeholder="Enter the title of the artwork"
            type="text"
          />
        </div>

        <div className="w-full flex flex-col gap-1 items-start relative">
          <h1 className="text-white font-semibold font-serif">Description</h1>
          <textarea
            name="description"
            className="h-20 lg:w-[60%] md:w-[75%] sm:w-[85%] w-[95%] px-3 border border-gray-500 rounded-md bg-transparent font-Funnel text-white placeholder-gray-400 focus:border-none focus:outline-none focus:ring-1 focus:ring-[#fc8e97] resize-none"
            placeholder="Enter a short description..."
          />
        </div>

        <div className="w-full flex flex-col gap-2 items-start relative">
      <h1 className="text-white font-semibold font-serif">Tags</h1>

      <select
        className="h-10 lg:w-[60%] md:w-[75%] sm:w-[85%] w-[95%] outline-none focus:border-none px-3 border border-gray-500 rounded-md bg-transparent font-Funnel text-white focus:ring-1 focus:ring-[#fc8e97] cursor-pointer"
        onChange={handleTagChange}
        value={isCustom ? "custom" : selectedTag}
      >
        <option value="" disabled hidden>Choose a tag...</option>
        <option className="bg-[#9909326c] text-white" value="custom">Create New Tag</option>
        <option className="bg-[#9909326c] text-white">#Abstract</option>
        <option className="bg-[#9909326c] text-white">#Landscape</option>
        <option className="bg-[#9909326c] text-white">#Portrait</option>
        <option className="bg-[#9909326c] text-white">#Surrealism</option>
      </select>

      {isCustom && (
        <input
          type="text"
          placeholder="Enter your tag..."
          className="h-10 lg:w-[60%] md:w-[75%] sm:w-[85%] w-[95%] px-3 border outline-none focus:border-none border-gray-500 rounded-md bg-transparent font-Funnel text-white focus:ring-1 focus:ring-[#fc8e97]"
          value={customTag}
          onChange={handleCustomTagChange}
        />
      )}
    </div>

        <div className="w-full flex flex-col gap-1 items-start">
          <h1 className="text-white font-semibold font-serif">Medium</h1>
          <select
            name="medium"
            className="h-10 lg:w-[60%] md:w-[75%] sm:w-[85%] w-[95%] px-3 border border-gray-500 rounded-md bg-transparent font-Funnel outline-none text-white focus:border-none focus:ring-1 focus:ring-[#fc8e97] cursor-pointer"
          >
            <option value="" disabled selected hidden>
              Choose medium...
            </option>
            <option className="bg-[#990931] text-white">Oil</option>
            <option className="bg-[#990931] text-white">Watercolor</option>
            <option className="bg-[#990931] text-white">Digital</option>
            <option className="bg-[#990931] text-white">Acrylic</option>
          </select>
        </div>

        <div className="flex justify-center w-full mt-4">
          <button
            type="submit"
            className="px-8 lg:py-2 py-1 border border-gray-500 rounded-md text-white bg-[#fc8e97] hover:bg-[#d75b6b] transition-colors duration-200"
            onSubmit={(e) => handleSubmit(e, index)}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

function Upload() {
  const [uploads, setUploads] = useState([{ image: null, imageFile: null, classification: "", error: "" }]);

  const handleImageChange = async (index, image, imageFile, classification, error) => {
    setUploads((prev) => {
      const newUploads = [...prev];
      newUploads[index] = { image, imageFile, classification, error };
      return newUploads;
    });

    if (imageFile) {
      const formData = new FormData();
      formData.append("image", imageFile);

      try {
        const response = await fetch("http://localhost:5000/classify", {
          method: "POST",
          body: formData,
        });

        if (!response.ok) throw new Error(`Server Error: ${response.statusText}`);

        const data = await response.json();
        setUploads((prev) => {
          const newUploads = [...prev];
          newUploads[index].classification = data.result || "Unknown"; // Fallback if 'result' is undefined
          return newUploads;
        });
      } catch (error) {
        setUploads((prev) => {
          const newUploads = [...prev];
          newUploads[index].error = "Failed to classify image";
          return newUploads;
        });
        console.error("Error classifying image:", error);
      }
    }
  };

  const handleRemoveImage = (index) => {
    setUploads((prev) => {
      const newUploads = [...prev];
      newUploads[index] = { image: null, imageFile: null, classification: "", error: "" };
      return newUploads;
    });
  };

  const addNewUpload = () => {
    setUploads((prev) => [...prev, { image: null, imageFile: null, classification: "", error: "" }]);
  };

  return (
    <div className="min-w-screen min-h-screen bg-[#ffeeee]">
      <header className="h-[100px] w-full bg-gradient-to-l from-[#3c25267c] via-[#5e3b4d75] to-[#d9a1bf80] backdrop-blur-md flex items-center justify-between px-4 md:px-6 shadow-lg text-white fixed top-0 z-50">
        <h1 className="lg:text-[35px] md:text-[30px] sm:text-[25px] text-[20px] font-bold font-Eagle text-[#190909]">
          Painters' Diary
        </h1>
        <div className="flex items-center justify-center gap-x-2">
          <Link to={"/"}>
            <button className="lg:px-4 px-2 py-1 bg-[#a6565d] hover:bg-[#c68a9a] hover:text-[#2d1f23] rounded-md font-Playfair text-white border border-gray-400 text-[18px]">
              <FaHome className="text-xl sm:hidden" />
              <span className="hidden sm:inline">Home</span>
            </button>
          </Link>
          <Link to={"/About"}>
            <button className="lg:px-4 px-2 py-1 bg-[#a6565d] hover:bg-[#c68a9a] hover:text-[#2d1f23] rounded-md font-Playfair text-white border border-gray-400 text-[18px]">
              <FaInfoCircle className="text-xl sm:hidden" />
              <span className="hidden sm:inline">About</span>
            </button>
          </Link>
          <Link to={"/Account"}>
            <button className="lg:px-4 px-2 py-1 bg-[#a6565d] hover:bg-[#c68a9a] hover:text-[#2d1f23] rounded-md font-Playfair text-white border border-gray-400 text-[18px]">
              <FaUser className="text-xl sm:hidden" />
              <span className="hidden sm:inline">Account</span>
            </button>
          </Link>
          <Link to={"/Diary"}>
            <button className="lg:px-4 px-2 py-1 bg-[#a6565d] hover:bg-[#c68a9a] hover:text-[#2d1f23] rounded-md font-Playfair text-white border border-gray-400 text-[18px]">
              <FaBook className="text-xl sm:hidden" />
              <span className="hidden sm:inline">Diary</span>
            </button>
          </Link>
        </div>
      </header>

      <div className="w-full flex flex-col items-center mt-[100px] pt-12">
        <div
          onClick={addNewUpload}
          className="h-[50px] w-[50px] bg-black/10 hover:bg-black/25 border border-gray-400 rounded-lg flex items-center justify-center cursor-pointer"
        >
          <FaPlus />
        </div>
      </div>

      {uploads.map((upload, index) => (
        <UploadComponent
          key={index}
          index={index}
          onImageChange={handleImageChange}
          onRemoveImage={handleRemoveImage}
          image={upload.image}
          classification={upload.classification}
          error={upload.error}
        />
      ))}
    </div>
  );
}

export default Upload;
