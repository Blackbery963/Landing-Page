import React from 'react'
    

export default function Item({name, backImg}) {

    return (
         <div className='h-[190px] w-[190px] bg-center bg-cover rounded-xl  overflow-hidden mt-8 shadow-md shadow-slate-700 ' style={{backgroundImage: `url(${backImg})`}}>
           <div className='h-[100%] w-[100%] hover:bg-black/50 opacity-0 hover:opacity-100  flex items-center justify-center transition ease-linear duration-500 '>
           <p className='text-2xl text-white font-semibold'>
            {name}
            </p>
           </div>
         </div>  
    )
}

