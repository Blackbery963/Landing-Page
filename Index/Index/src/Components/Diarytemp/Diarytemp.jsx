import React from 'react';
import DiarytempBack from '/home/swarnadip/Documents/Index/Index/Index/src/Components/Diarytemp/Diarytemp-images/people-2587310.jpg';
import mainCenter from '/home/swarnadip/Documents/Index/Index/Index/src/Components/Diarytemp/Diarytemp-images/notes-3819574.jpg'
import { Link } from 'react-router-dom';
import topleft from '/home/swarnadip/Documents/Index/Index/Index/src/Components/Diarytemp/Diarytemp-images/zaki-ahmed-h0NsueWIdzw-unsplash.jpg'
import leftBottom from '/home/swarnadip/Documents/Index/Index/Index/src/Components/Diarytemp/Diarytemp-images/medium-shot-senior-painter-indoors.jpg'
function Diarytemp() {
    return (
        <div className='max-w-screen min-h-[90vh]'>
            <div className='h-[90vh] w-screen bg-cover bg-center flex flex-col md:flex-row' style={{ backgroundImage: `url(${DiarytempBack})` }}>
                <div className='md:w-[40%] w-full flex flex-col items-center lg:justify-center p-6'>
                    <h1 className='lg:text-left text-center lg:text-[45px] md:text-[30px] text-[25px] font-Playfair px-8 font-semibold text-yellow-100'>Pages of the Soul - A timeless Journey Through Life’s Moments</h1>
                    <h5 className='lg:text-left text-center text-white font-Upright lg:text-[25px] font-semibold px-8'>A Diary of Thoughts, Dreams, and Memories Etched in Ink, Captures the Essence of Every Heart, the Whispers of Untold Stories, and the Beauty of Emotions That Shape Our Journey Through Time</h5>
                    <div className='flex gap-x-8 mt-6'>
                        <Link to="/Diary">
                            <button className='px-4 py-2 border-[2px] font-semibold text-slate-100 font-Playfair rounded-md border-gray-100'>My Diary</button>
                        </Link>
                        <Link to={"/Diaryland"}>
                        <button className='px-4 py-2 border-[2px] font-semibold text-slate-100 font-Playfair rounded-md border-gray-100'>Discover More</button>
                        </Link>
                    </div>
                </div>

                {/* Card floating section */}
                <div className='md:w-[60%] w-full flex backdrop-blur-sm relative flex-col md:flex-row items-center justify-center'>
                    {/* the main center */}
                    <div className='h-[50%] w-[60%] absolute  top-[15%] left-[20%] rounded-lg overflow-hidden bg-center bg-cover'style={{backgroundImage: `url(${mainCenter})`}}>
                        <div className=' w-full h-[30%] bg-black/15 backdrop-blur-md absolute bottom-0'></div>
                    </div>

                    {/* the top left corner */}
                    <div className='h-[35%] w-[16%] bg-slate-900 absolute md:top-[10%] top-[5%] left-[10%] rounded-md overflow-hidden shadow-slate-900 shadow-lg'>
                        <div className=' w-full h-[60%] bg-black'>
                            <img className=' h-full w-full' src={topleft} alt="" />
                        </div>
                    </div>
                    {/* the right bottom corner */}
                    <div className='h-[60%] w-[22%] border border-gray-600 bg-white/80 backdrop-blur-lg absolute md:bottom-[10%] bottom-[5%] right-[6%] rounded-md flex flex-col items-center justify-center'>
                    <div className=' h-[30%] w-[60%] bg-black rounded-full'>
                    </div>
                    </div>
                    {/* the left bottom corner */}
                    <div className='w-[50%] h-[25%] bg-blue-300 absolute md:bottom-[7%] bottom-[2%] left-[10%] rounded-md flex justify-center items-center'>
                        <div className=' h-[90%] w-[45%] p-4'>
                            <img className=' h-full w-full' src={leftBottom} alt="" />
                        </div>
                        <div className=' w-[55%] h-full bg-black'>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Diarytemp;
