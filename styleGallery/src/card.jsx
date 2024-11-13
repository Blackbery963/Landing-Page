import React from 'react'

function Card( {btn, imgSrc} ) {
    return (
        <div className='h-[18rem] w-[14rem] border-[1px] border-orange-900 rounded-xl'>
            <div className='w-full h-[75%]  overflow-hidden rounded-xl'>
                <img src={imgSrc} alt="" />
            </div>

            <div className='w-[70%] h-[2rem] mt-5 ml-8 rounded-2xl'>
                <button className='h-full w-full text-white font-bold bg-gradient-to-t from-green-900 to-slate-300 rounded-2xl
                 hover:bg-gradient-to-t hover:from-green-700 hover:to-slate-200 '>{btn}</button>
            </div>
        </div>
    )
}

export default Card
