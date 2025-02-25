import { useState } from 'react'
import { Link } from 'react-router-dom'
import footer from '/home/swarnadip/Documents/Index/Index/Index/src/Components/Footer/Footer-images/freepik-export-20240930073049yijq.png'
import palette from '/home/swarnadip/Documents/Index/Index/Index/src/Components/Footer/Footer-images/pallete.jpg'
import facebook from '/home/swarnadip/Documents/Index/Index/Index/src/Components/Footer/Footer-images/facebook.svg'
import instagram from '/home/swarnadip/Documents/Index/Index/Index/src/Components/Footer/Footer-images/instagram.svg'
import youtube from '/home/swarnadip/Documents/Index/Index/Index/src/Components/Footer/Footer-images/Youtube_icon-icons.com_66802.svg'
import twitter from '/home/swarnadip/Documents/Index/Index/Index/src/Components/Footer/Footer-images/twitter.svg'
import linkedin from '/home/swarnadip/Documents/Index/Index/Index/src/Components/Footer/Footer-images/linkedin.svg'

function Footer() {
  const foot = {
    backgroundImage: `url(${footer})`,
  };

  return (
    <footer className="min-h-screen bg-slate-300 w-full bg-cover bg-center flex justify-center items-center">
      <div
        className="md:h-[94vh] h-full w-[90vw] border border-red-50 rounded-lg shadow-lg bg-center bg-cover lg:my-0 my-4"
        style={foot}
      >
        {/* Top Navbar */}
        <nav className="w-full h-[14vh] border-b border-red-50 flex items-center justify-center md:justify-between px-4 md:px-6">
          {/* Logo */}
          <div className="h-[60px] w-[60px] bg-red-400 rounded-full overflow-hidden border-2 border-red-50 hidden md:block">
            <img className="h-full w-full" src={palette} alt="Logo" />
          </div>
          {/* Logo Name */}~
          <div className="text-center lg:ml-[-40%]">
            <h1 className="font-eagle text-lg md:text-4xl font-bold">
              Painters' Diary
            </h1>
            <h6 className="font-cookie text-sm md:text-2xl font-medium mt-[-4px]">
              The Diary of Every Artist
            </h6>
          </div>
          {/* Sign Up Button */}
          <Link to="/signup">
          <div>
            <button className="font-news w-full bg-red-400 px-2 md:px-3 md:rounded-lg text-sm md:text-lg text-white md:block hidden">
              Sign Up
            </button>
          </div>
          </Link>
        </nav>

        {/* Important Events */}
        <div className="my-6">
          <h1 className="text-center text-lg md:text-2xl font-bold">
            Important Events
          </h1>
          <div className="h-[25vh] w-[90%] mx-auto mt-4 border border-white rounded-xl"></div>
        </div>

        {/* Footer Links */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-6 px-[5vw] mt-8 text-center sm:text-left">
          {[
            {
              title: "Company",
              links: ["Home", "About Us", "Community", "Blog"],
            },
            {
              title: "Resources",
              links: ["FAQs", "Reviews", "Help & Support", "Events"],
            },
            {
              title: "Legal",
              links: ["Terms & Conditions", "Privacy Policy", "License", "Cookies"],
            },
            {
              title: "Product",
              links: ["Update", "Security"],
            },
            {
              title: "Contact Us",
              links: [
                "Berunanpukuriya",
                "Malikapur",
                "Kolkata, 700126",
                "+918617331488",
              ],
            },
          ].map((section, idx) => (
            <div key={idx}>
              <h1 className="text-lg md:text-xl font-dmserif text-white">
                {section.title}
              </h1>
              {section.links.map((link, index) => (
                <p
                  key={index}
                  className="text-sm md:text-base font-news font-semibold hover:underline hover:text-cyan-600"
                >
                  {link}
                </p>
              ))}
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="flex flex-col items-center justify-center mx-auto mt-10">
          <p className="text-sm md:text-base">EMAIL US</p>
          <p className="text-sm md:text-base">swarnadipb727@gmail.com</p>
        </div>

        {/* Social Media */}
        <div className="flex items-center justify-center gap-6 mt-4">
          <div className="hidden md:block w-[20vw] h-[2px] bg-black"></div>
          <div className="flex gap-6">
            {[facebook, instagram, twitter, youtube, linkedin].map(
              (icon, idx) => (
                <div
                  key={idx}
                  className="h-[40px] w-[40px] sm:h-[50px] sm:w-[50px] rounded-lg cursor-pointer"
                >
                  <img className="h-full w-full p-1" src={icon} alt="Social" />
                </div>
              )
            )}
          </div>
          <div className="hidden md:block w-[20vw] h-[2px] bg-black"></div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col items-center justify-center my-6 text-center text-xs md:text-sm">
          <p>Copyright © 2024 Painters' Diary. All Rights Reserved.</p>
          <p>
            This website and its content are the property of Painters' Diary.
            Unauthorized use is prohibited.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
