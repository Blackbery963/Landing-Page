import React from 'react'
import image1 from '/home/swarnadip/Documents/Index/Index/Index/src/Components/Recent/Recent-images/pexels-tiana-18128-2964117.jpg'
import Recentitem from './Recentitem'

function Recent() {
    const images = [
        {
            Image:image1,
            Title:'hello',
            Description:'hello everyone'
        },
        {
            Image:image1,
            Title:'hello',
            Description:'hello everyone',
        },
        {
            Image:image1,
            Title:'hello',
            Description:'hello everyone'
        },
        {
            Image:image1,
            Title:'hello',
            Description:'hello everyone',
        },
        {
            Image:image1,
            Title:'hello',
            Description:'hello everyone',
        },
        {
            Image:image1,
            Title:'hello',
            Description:'hello everyone',
        },
        {
            Image:image1,
            Title:'hello',
            Description:'hello everyone',
        },
        {
            Image:image1,
            Title:'hello',
            Description:'hello everyone',
        },
    ]
    return (
        <div className=' w-screen bg-slate-300 flex flex-col'>
            <h1 className=' text-blue-900 md:text-[35px] text-[30px] font-Playfair pl-8 md:text-left text-center font-semibold'>Recently Explored</h1>
            <div className=' w-full flex gap-4 overflow-x-scroll overflow-y-hidden px-8 hide-scrollbar mt-4'>
                {images.map((img,Index) => (
                <Recentitem
                key={Index}
                Image={img.Image}
                Title={img.Title}
                Description={img.Description}
                />
                ))}                
            </div>
        </div>
    )
}

export default Recent
//lg:h-[450px] sm:h-[425px] h-[400px]