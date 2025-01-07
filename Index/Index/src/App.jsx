import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Collection from './Components/Collections/Collection'
import Visual from './Components/Visual/Visual'


function App() {
  const [count, setCount] = useState(0)

  return (
  <div className=' flex items-center justify-center flex-col gap-y-2 overflow-x-hidden overflow-y-auto '>
     <Header/>
     <Collection/>
     <Visual/>
     <Footer/>
  </div>
  )
}

export default App
