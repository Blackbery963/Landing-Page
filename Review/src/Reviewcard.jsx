import React from "react"; 
import Facebook from '/home/swarnadip/Documents/Index/Review/src/Images/facebook.svg'
import Instagram from '/home/swarnadip/Documents/Index/Review/src/Images/instagram.svg'
import Twitter from '/home/swarnadip/Documents/Index/Review/src/Images/twitter.svg'
import Star from '/home/swarnadip/Documents/Index/Review/src/Images/star.svg'


export default function Reviewcard ( {Profileimg, Username, Userdescription, Review}) {

    return (
      <div className="w-screen h-auto bg-transparent m-4">
        {/* The part for the perticular item */}
        <div className="h-[500px] w-[280px] rounded-lg bg-gradient-to-b from-slate-400 to-slate-800 ">
          {/* the Container for all the components */}
          <div className=" flex items-center justify-between flex-col pt-3"> 
            {/* the part of profile image */}
            <div className="h-[120px] w-[120px] rounded-full bg-black border-[5px] border-gray-400 cursor-pointer overflow-hidden">
                <img className="h-[100%] w-[100%] object-contain" src={Profileimg} alt="" />
            </div>
            {/* The part of username or user releated  description */}
            <div className="mt-1 cursor-pointer">
                <p className="text-center text-[23px] text-black font-normal font-DM">{Username}</p>
                <p className=" font-Newsreader">{Userdescription}</p>
                <div className=" flex items-center justify-center">
                    <img src={Star} alt="" />
                    <img src={Star} alt="" />
                    <img src={Star} alt="" />
                    <img src={Star} alt="" />
                    <img src={Star} alt="" />
                </div>
            </div>
            {/* The part of the description of the review*/}
            <div className="w-[85%] h-[250px] mt-4 bg-[#ffffff41] backdrop-blur-lg border-[1px] border-gray-300 rounded-lg pl-4 pt-4 flex flex-col animate-fadeIn">
                <div className="text-blue-100 font-Markazi text-[18px]">
                    <p>"{Review}"</p> 
                </div>
                {/* The part for social media icon of the user  */}
                <div className="flex items-center justify-center mt-8 ml-[-30px] gap-2">
                    <div className="h-[40px] w-[40px] object-cover cursor-pointer"> 
                        <img src={Facebook} alt="" />
                    </div>
                    <div className="h-[40px] w-[40px] object-cover cursor-pointer">
                        <img src={Instagram} alt="" />
                    </div>
                    <div className="h-[40px] w-[40px] object-cover cursor-pointer">
                        <img src={Twitter} alt="" />
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    )
}
