import React from 'react'

function ReviewCard() {
    return (
        <div className='w-[25rem] h-[13rem] border-black border-[1px] rounded-xl flex justify-center items-center bg-[#ECA1A6]'>
            <div className='w-[90%] h-[85%] border-white mx-auto border-[1px] rounded-lg flex gap-[5%]'>
                <div className='h-full w-[60%]'>
                    <div className='ml-2'><h1 className='font-bold text-[20px]'>Username</h1></div>
                    <div className='ml-2'><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.  </p></div>
                    <div className='flex flex-row mt-12 ml-2 gap-1'>
                        <div><img className='h-[40px] w-[40px]' src="./src/Images/facebook.svg" alt="" /></div>
                        <div><img className='h-[40px] w-[40px]' src="./src/Images/twitter.svg" alt="" /></div>
                        <div><img className='h-[40px] w-[40px]' src="./src/Images/instagram.svg" alt="" /></div>
                    </div>
                </div>
                <div className='h-full w-[35%] justify-center items-center flex'>
                    <div className='h-[70%] w-full rounded-full border-[1px] border-black'>
                        <img src="" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReviewCard;