import React from 'react'
import { Link } from 'react-router-dom';
import Item from "./Components/Items/Item";
import Pic_1 from "/home/swarnadip/Documents/Index/Gallery/Gallery/src/Components/Images/no-1.png";
import Pic_2 from "/home/swarnadip/Documents/Index/Gallery/Gallery/src/Components/Images/no-2.jpg";
import Pic_3 from "/home/swarnadip/Documents/Index/Gallery/Gallery/src/Components/Images/no-3.jpg";
import Pic_4 from "/home/swarnadip/Documents/Index/Gallery/Gallery/src/Components/Images/no-4.jpg";
import Pic_5 from "/home/swarnadip/Documents/Index/Gallery/Gallery/src/Components/Images/no-5.jpg";
import Pic_6 from "/home/swarnadip/Documents/Index/Gallery/Gallery/src/Components/Images/no-6.jpg";
import Pic_7 from "/home/swarnadip/Documents/Index/Gallery/Gallery/src/Components/Images/no-7.jpg";
import Pic_8 from "/home/swarnadip/Documents/Index/Gallery/Gallery/src/Components/Images/no-8.jpg";


function Gallery() {
    return (
        <div className="w-screen h-screen overflow-x-auto">
      <div className="flex items-center flex-col p-4 min-w-[1000px] sm:min-w-full">
        <div className="flex flex-nowrap gap-5 pl-4 pr-4 sm:pl-2 sm:pr-2">
          <Item name="Portrait" backImg="https://images.pexels.com/photos/29451082/pexels-photo-29451082/free-photo-of-squirrel-in-autumn-tree-with-colorful-leaves.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <Item name="Landscape" backImg={Pic_1} />
          <Item name="Water Colour" backImg={Pic_2} />
          <Item name="Black&White" backImg={Pic_3} />
          <Item name="Pil Paint" backImg={Pic_4} />
          <Item name="Leaves" backImg={Pic_5} />
          <Item name="Pink" backImg={Pic_6} />
          <Item name="Deer" backImg={Pic_7} />
          <Item name="Skyscrapers" backImg={Pic_8} />
        </div>
        
        <div className="w-full flex justify-end mt-4">
          <button className="h-10 bg-black text-white px-6 rounded-xl font-semibold hover:bg-slate-700">
          <Link to="/Style"> Explore more </Link>
          </button>
        </div>
      </div>
      
    </div>
        
    )
}

export default Gallery
