import { useState } from 'react'
import './App.css'
import Background from './COMPONENT/Image/Background.jpg'
import pallete from './COMPONENT/Image/pallete.jpg'

function App() {
  const [count, setCount] = useState(0)

  const backgroundImg = {
    backgroundImage: `url(${Background})`,
    backgroundSize: '100% 100%',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',

  }

  return (
    // the div is for the whole screen
    <div className='bg-[#2e1414] text-white w-screen h-screen'>
      {/* the div is f0r the container */}
      {/* thefirst part starts here */}
      <div className='w-[80%] h-[90%] bg-white bg-opacity-30  absolute top-[5%] left-[10%] rounded-xl backdrop:blur-[10px] border-[1px] border-white flex'> 
        {/* the image container */}
        <div className='w-[100%] h-[100%]'>
          <div className='sm:w-[62%] sm:block hidden h-full border-[1px] border-white overflow-hidden rounded-xl ' style={backgroundImg}>
            {/* the company logo starts here */}
            <div className='h-[60px] w-[60px] rounded-full'>
              <img className='h-full w-full rounded-full mt-4 ml-4' src={pallete} alt="" />
            </div>
            {/* the comany logo ends here */}
            
            {/* the welcome part starts here */}
            <div className='lg:h-[20%] lg:w-[55%] sm:w-[90%] sm:h-[20%] sm:left-[5%] sm:top-[20%]  bg-[rgba(255,255,255,0.312)] bg-opacity-[12%] backdrop-blur-lg border-[1px]
             border-white rounded-xl relative lg:left-[20%] lg:top-[18%] flex flex-col flex-wrap'> 
              <p className='text-xl sm:text-2xl md:text-4xl lg:text-4xl font-bold mt-4 ml-4'>WELCOME !</p>
              <p className='ml-4 mt-5  text-blue-900 text-base'>Log in to continue your journey with us. <br /> We're exited to have you back.</p>
            </div>

          </div>
        </div>
        {/* the first ends here */}


        {/* the second part starts here */}
        {/* the main div of the second part stars with the div */}
        <div className= ' h-full w-auto border-black border-[1px]'>
               <p>hello

               </p>
        </div>
      </div>
    </div>
  )
}

export default App
