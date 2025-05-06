

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBook, FaInfoCircle, FaHome, FaUser } from "react-icons/fa";
import { MdBook } from "react-icons/md";
import {motion} from "framer-motion"

const Cart = () => {

  const buttonVariants = {
    hover: { scale: 1.1, backgroundColor: '#A4C6EB', transition: { duration: 0.3 } },
    tap: { scale: 0.95 },
  };

  return (
    <div className=" h-screen w-screen overflow-x-hidden bg-slate-300">
      <header className='h-[80px] w-full bg-gradient-to-l from-[#3c25267c] via-[#5e3b4d75] to-[#d9a1bf80] backdrop-blur-md flex items-center justify-between px-4 md:px-6 shadow-lg text-white fixed top-0 z-50'>
            {/* Logo */}
             <h1 className='lg:text-[35px] md:text-[30px] sm:text-[25px] text-[20px] font-bold font-Eagle text-[#190909]'>Painters' Diary</h1>
             {/* Navigation */}
            <div className="flex gap-x-2 sm:gap-x-4 text-gray-800 font-playfair font-semibold">
            <Link to="/">
              <motion.button
                className="px-2 sm:px-2 py-1 sm:py-1 rounded-md hover:bg-rose-100 flex items-center gap-2"
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
                className="px-2 sm:px-2 py-1 sm:py-1 rounded-md hover:bg-rose-100 flex items-center gap-2"
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
                className="px-2 sm:px-2 py-1 sm:py-1 rounded-md hover:bg-rose-100 flex items-center gap-2"
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
                className="px-2 sm:px-2 py-1 sm:py-1 rounded-md hover:bg-rose-100 flex items-center gap-2"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <MdBook className="text-lg sm:text-xl" />
                <span className="hidden sm:inline">Diary</span>
              </motion.button>
            </Link>
           
          </div>
             </header>
</div>
  )
}
export default Cart;