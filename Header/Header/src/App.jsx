import { useState } from 'react'
import './App.css'
import backgroundImage from '/home/swarnadip/Documents/Index/Header/Header/src/Images/freepik-export-20240918185148kruo.png'
import menu from '/home/swarnadip/Documents/Index/Header/Header/src/Images/menu.png'
import search from '/home/swarnadip/Documents/Index/Header/Header/src/Images/search-icon.png'



function App() {
  const [count, setCount] = useState(0)

  const backgroundImg = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: '100% 100%',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment:'fixed',
  }

  return (
  <div className='h-[90vh] w-[100vw] flex flex-col justify-between ' style= {backgroundImg}>

    {/* the header div */}
    <div className='w-[100vw] h-[12vh] flex justify-between items-center pl-4 pr-4'>

      {/* the menu div */}
      <div className='w-[2.5vw] h-[2.5vw] items-center justify-center flex bg-green-900 rounded-lg  hover:bg-green-700 hover:border-[1px] hover:border-green-950'>
        <img className='h-[2vw] w-[2vw]' src={menu} alt="" />
      </div>

      {/* the logo div */}
      <div className='ml-[10vw]'>
      <h1 className='text-orange-700 font-eagle font-bold text-[2.4vw]'>Painters' Diary</h1>
      <h6 className='text-blue-600 font-cookie font-medium text-[1.5vw] ml-[20%] mt-[-2%]'>The Diary  of Every Artist</h6>
      </div>

      {/* the button div */}
      <div className='flex gap-[3vw] text-[.9vw] h-[4vh] justify-center items-center'>
        <button className='font-playfair font-semibold h-[90%] pl-4 pr-4 w-auto bg-[#ffffff57] backdrop-blur-[10px] rounded-2xl hover:border-[1px] hover:border-green-600 hover:text-green-700 hover:bg-[#ffffff57] hover:backdrop-blur-md'>Sign up </button>
        <button className='font-playfair font-semibold h-[90%] pl-4 pr-4 w-auto bg-[#ffffff57] backdrop-blur-[10px] rounded-2xl hover:border-[1px] hover:border-green-600 hover:text-green-900 hover:bg-[#ffffff57] hover:backdrop-blur-md'>Account</button>
      </div>

    </div>






    {/* the middle div */}
    <div className='h-[50vh] w-[40vw] pl-[2vw] pr-[2vw] pt-[2vw] mx-auto rounded-[2.5vw] hover:shadow-lg hover:shadow-gray-700 hover:transition-all hover:ease-linear hover:delay-100' >
      <h1 className='font-quint text-red-700 text-[2vw] font-bold text-center'>IMMERSE YOURSELF ON ART</h1>
      <p className='font-markazi text-[1.2vw] font-semibold text-center text-wrap text-cyan-800 mt-[1vw]'>
      Explore a curated collection of exceptional painting from talented artist worldwide.
      Our website is designed to bring art enthusiasts and creator together, providing a
      seamless experience for browsing, purchasing, and learning about art. Whatever you're
      an artist seeking exposure or a collector looking for the perfect piece, our platform
      offers something special for everyone.</p>
      {/* div for search bar */}


      <div className='h-[4.5vh] w-[80%] mx-auto mt-[4vh] rounded-[4vw] bg-[#ffffff69] backdrop-blur-md flex items-center justify-between overflow-hidden'>
        <div className='w-[90%] h-[100%] overflow-hidden'>
          <button className='h-[100%] w-[100%] '>
            <input className='h-[100%] w-[100%] border-none pl-4 font-playfair font-medium' 
            type="text"
             placeholder='Explore The Gallery of Dreams...' />
          </button>
        </div>

        <div className=''>
          <img className='h-[3vh] w-[3vh] mr-[1.5vh]' src={search} alt="" />
        </div>
      </div>
    </div>






    {/* the last div */}
    <div className='h-[10vh] w-[100vw] flex text-[.9vw] justify-between items-center pl-4 pr-4'>
      {/* the first part */}
      <div className='flex gap-[3vw] text-[.9vw] h-[4vh]'>
        <button className=  'font-playfair text-slate-900 h-[90%] bg-[#ffffff9f] backdrop-blur-[10px] pl-4 pr-4 rounded-2xl font-semibold hover:border-[1px] hover:border-sky-700 hover:text-sky-700 hover:bg-[#ffffffb7] hover:backdrop-blur-md'>Home</button>
        <button className='font-playfair text-slate-900 bg-[#ffffff9f] h-[90%] backdrop-blur-[10px] pl-4 pr-4 rounded-2xl font-semibold hover:border-[1px] hover:border-sky-700 hover:text-sky-700 hover:bg-[#ffffffb7] hover:backdrop-blur-md'>Favourite</button>
        <button className='font-playfair text-slate-900 bg-[#ffffff9f] h-[90%] backdrop-blur-[10px] pl-4 pr-4 rounded-2xl font-semibold hover:border-[1px] hover:border-sky-700 hover:text-sky-700 hover:bg-[#ffffffb7] hover:backdrop-blur-md'>Downloads</button>
      </div>
      {/* the last part */}
      <div className='flex gap-[3vw] h-[4vh]'>
        <button className='font-playfair text-slate-900 bg-[#ffffff9f] h-[90%] backdrop-blur-[10px] pl-4 pr-4 rounded-2xl font-semibold hover:border-[1px] hover:border-sky-700 hover:text-sky-700 hover:bg-[#ffffffb7] hover:backdrop-blur-md'>Communities</button>
        <button className='font-playfair text-slate-900 bg-[#ffffff9f] h-[90%] backdrop-blur-[10px] pl-4 pr-4 rounded-2xl font-semibold hover:border-[1px] hover:border-sky-700 hover:text-sky-700 hover:bg-[#ffffffb7] hover:backdrop-blur-md'>Premiun</button>
        <button className='font-playfair text-slate-900 bg-[#ffffff9f] h-[90%] backdrop-blur-[10px] pl-4 pr-4 rounded-2xl font-semibold hover:border-[1px] hover:border-sky-700 hover:text-sky-700 hover:bg-[#ffffffb7] hover:backdrop-blur-md'>Settings</button>
      </div>
    </div>






  </div>
  )
}

export default App
