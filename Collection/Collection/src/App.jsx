import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Grid from './assets/Components/Grid'

function App() {
  const [count, setCount] = useState(0)

  return (
  <main className='w-screen h-screen bg-[#4D0015] overflow-x-hidden '>
    <h1 className='font-dmserif font-medium text-[2.5vw] text-white text-center'>Explore Our Collections</h1>



    {/* the  necessery divs starts from here */}
  <div className=' w-[95%] border-white border-[1px] mx-auto'>
    {/* the slider div */}
    <div className='w-[98%] h-[45vh] mx-auto mt-[1%] border-white border-[1px]'>
      slider
    </div>

    <div className='pl-4 pr-4'><Grid/> </div>
    
  </div>
  </main>
  )
}

export default App
