import React from "react";

export default function Galleryitem({ name, backImg }) {
  return (
    <div
      className=" h-[230px] w-[230px] max-w-[230px] bg-center bg-cover rounded-xl overflow-hidden mt-8 shadow-md shadow-slate-700"
      style={{ backgroundImage: `url(${backImg})` }}
    >
      {/* Always visible background on small screens, hover effect on larger screens */}
      <div className="h-full w-full bg-black/50 flex items-center justify-center opacity-70 md:opacity-0 md:hover:opacity-100 transition ease-linear duration-500">
        <p className="text-2xl text-white font-semibold font-Playfair">{name}</p>
      </div>
    </div>
  );
 }

//  md:h-[250px] md:w-[250px] h-[200px] w-[200px]