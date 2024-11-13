import { useState } from 'react';
import './App.css';
import background from '/home/swarnadip/Documents/Index/imagehover/src/Oil- painting -min.jpg'
import similiar from '/home/swarnadip/Documents/Index/imagehover/src/images/similiar.png'
import favourite from '/home/swarnadip/Documents/Index/imagehover/src/images/favourite.png'
import download from '/home/swarnadip/Documents/Index/imagehover/src/images/download.png'
import info from '/home/swarnadip/Documents/Index/imagehover/src/images/info.png'
import stephen from '/home/swarnadip/Documents/Index/imagehover/src/images/stefan.jpg'


function App() {

const style = {
backgroundImage: `url(${background})`,
backgroundRepeat: 'no-repaet',
height:'400px',
width:'300px',
backgroundPosition:'center',
backgroundCover: '100% 100%',
}
  return (
    <div className='rounded-lg relative overflow-hidden group mx-auto' style={style}>
      <div className='h-[40%] w-[100%] bg-gradient-to-b from-transparent to-black absolute bottom-[-40%] transition-all ease-linear duration-300 group-hover:bottom-0 flex justify-between'>
        <div className='absolute top-[70%] ml-3 h-[40px] w-[40px] rounded-full '>
          <img className='h-[100%] w-[100%] rounded-full border-none' src={stephen} alt="" />
        </div>

        <div className='absolute top-[75%] flex gap-2 ml-[54%]'>
        <div  className='text-black h-[25px] w-[25px] rounded-full'>
          <a href="https://www.google.com">
          <img src={similiar} alt="" /></a>
        </div>
        <div  className='text-black h-[25px] w-[25px] rounded-full'>
          <img src={favourite} alt="" />
        </div>
        <div  className='text-black h-[25px] w-[25px] rounded-full'>
          <img src={download} alt="" />
        </div>
        <div  className='text-black h-[25px] w-[25px] rounded-full'>
          <img src={info} alt="" />
        </div>
        </div>

      </div>
    </div>

    
  
  )
}

export default App

