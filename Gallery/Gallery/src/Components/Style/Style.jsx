import React from 'react';
import Pic_1 from "/home/swarnadip/Documents/Index/Gallery/Gallery/src/Components/Images/no-1.png";
import Pic_2 from "/home/swarnadip/Documents/Index/Gallery/Gallery/src/Components/Images/no-2.jpg";
import Pic_3 from "/home/swarnadip/Documents/Index/Gallery/Gallery/src/Components/Images/no-3.jpg";
import Pic_4 from "/home/swarnadip/Documents/Index/Gallery/Gallery/src/Components/Images/no-4.jpg";
import Pic_5 from "/home/swarnadip/Documents/Index/Gallery/Gallery/src/Components/Images/no-5.jpg";
import Pic_6 from "/home/swarnadip/Documents/Index/Gallery/Gallery/src/Components/Images/no-6.jpg";
import Pic_7 from "/home/swarnadip/Documents/Index/Gallery/Gallery/src/Components/Images/no-7.jpg";
import Pic_8 from "/home/swarnadip/Documents/Index/Gallery/Gallery/src/Components/Images/no-8.jpg";
import Pic_9 from "/home/swarnadip/Documents/Index/Gallery/Gallery/src/Components/Images/no-9.jpg";
import Pic_10 from "/home/swarnadip/Documents/Index/Gallery/Gallery/src/Components/Images/no-10.jpg";
import Pic_11 from "/home/swarnadip/Documents/Index/Gallery/Gallery/src/Components/Images/no-11.jpg";
import Pic_12 from "/home/swarnadip/Documents/Index/Gallery/Gallery/src/Components/Images/no-12.jpg";
import Pic_13 from "/home/swarnadip/Documents/Index/Gallery/Gallery/src/Components/Images/no-13.jpg";
import Pic_14 from "/home/swarnadip/Documents/Index/Gallery/Gallery/src/Components/Images/no-14.jpg";
import Pic_15 from "/home/swarnadip/Documents/Index/Gallery/Gallery/src/Components/Images/no-15.jpg";
import Pic_16 from "/home/swarnadip/Documents/Index/Gallery/Gallery/src/Components/Images/no-16.jpg";
import Pic_17 from "/home/swarnadip/Documents/Index/Gallery/Gallery/src/Components/Images/no-17.jpeg";
import Styleitem from './Styleitem';
import Background from '/home/swarnadip/Documents/Index/Gallery/Gallery/src/Components/Images/detailed-picture-budding-purple-flower-field.jpg'



function Style() {

  const images = [
    { name: 'Portrait',
    para:"A portrait painting captures a person's face, expression, and personality, often focusing on likeness and emotional depth.", 
    backImg: 'https://images.pexels.com/photos/29451082/pexels-photo-29451082/free-photo-of-squirrel-in-autumn-tree-with-colorful-leaves.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    
    { name: 'Landscape',
      para:"A landscape painting portrays natural scenery like mountains, forests, or rivers, emphasizing light, atmosphere, and spatial perspective.",
      backImg: Pic_1 },

    { name: 'Water color',
      para: "Watercolor painting uses translucent pigments mixed with water, creating soft, luminous effects, often applied on textured paper.",
      backImg: Pic_2 },

    { name: 'Oil Painting',
      para: "Oil painting uses slow-drying pigments mixed with oil, creating rich textures, vibrant colors, and detailed, layered effects.",
      backImg: Pic_3 },

    { name: 'Landscape',
      para: "",
      backImg: Pic_4 },

    { name: 'Landscape',
      para: "",
      backImg: Pic_5 },
    { name: 'Landscape',
      para: "",
      backImg: Pic_6 },

    { name: 'Landscape',
      para: "",
      backImg: Pic_7 },

    { name: 'Landscape',
      para:"",
      backImg: Pic_8 },

    { name: 'Landscape',
      para: "",
      backImg: Pic_9 },

    { name: 'Landscape',
      para:"",
      backImg: Pic_10 },

    { name: 'Landscape',
      para: "",
      backImg: Pic_11 },

    { name: 'Landscape',
      para: "",
      backImg: Pic_12 },

    { name: 'Landscape',
      para:"",
      backImg: Pic_13 },

    { name: 'Landscape',
      para:"",
      backImg: Pic_14 },

    { name: 'Landscape',
      para:"",
      backImg: Pic_15 },

    { name: 'Landscape',
      para:"",
      backImg: Pic_16 },

    { name: 'Landscape',
      para:"",
      backImg: Pic_17 },
    
  ];

  return (
    <div className="h-screen w-screen ">
      <div className="h-[100%] w-[100%] flex items-center justify-center bg-center bg-cover" style={{backgroundImage: `url(${Background})`}}>
        <div
          className="h-[90%] w-[90%] backdrop-blur-lg bg-[#ffffff48] rounded-2xl border-[1px] grid
          border-gray-300 grid-cols-[repeat(auto-fill,minmax(230px,1fr))] gap-4 p-8 
           overflow-auto">
         {images.map((img, index) => (
            <Styleitem key={index} name={img.name} para={img.para} backImg={img.backImg} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Style;
