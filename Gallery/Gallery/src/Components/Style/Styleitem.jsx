import React from "react";

export default function Styleitem ({name, para, backImg}) {

    return(
        <div className='h-[230px] w-[230px] max-w-[230px]  bg-center bg-cover rounded-xl  overflow-hidden mt-8 shadow-md shadow-gray-700 ' style={{backgroundImage: `url(${backImg})`}}>
           <div className='h-[100%] w-[100%] hover:bg-black/50 opacity-0 hover:opacity-100  flex items-center justify-center flex-col transition ease-linear duration-500 '>
           <p className='text-2xl text-white  font-semibold'>
            {name}
            </p>
            <p className=" text-white font-normal pl-2 pr-2 text-[16px] text-center mt-2">
            {para}
            </p>
           </div>
         </div>  

    )
}


