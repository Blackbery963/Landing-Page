import { useState,useEffect } from 'react';
import './App.css';
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Collection from './Components/Collections/Collection';
import Visual from './Components/Visual/Visual';
import Account from './Components/Account/Account';
import Signup from './Components/Signup/Signup';
import Login from './Components/Login/Login';
import Review from './Components/Review/Review';
import Connecting from './Components/Connecting/Connecting';
import Style from './Components/Style/Style';
import Category from './Components/Category/Category';
import Gallery from './Components/Gallery/Gallery';
import Creativity from './Components/Creativity/Creativity';
import Age from './Components/Age/Age';
import Landscape from './Sub-Components/Landscape/Landscape';
import Portrait from './Sub-Components/Portrait/Portrait';
import Still_life from './Sub-Components/Still-life/Still_life';
import Oil_paint from './Sub-Components/Oil-paint/Oil_paint';
import Water_color from './Sub-Components/Water-color/Water_color';
import Abstract from './Sub-Components/Abstract/Abstract';
import Historical from './Sub-Components/Historical/Histoirical';
import Modern from './Sub-Components/Modern/Modern';
import Beginner from './Age-Components/Beginner/Beginner';
import Professional from './Age-Components/Professional/Professional';
import Diary from './Components/Diary/Diary';
import Diarytemp from './Components/Diarytemp/Diarytemp';
import Diaryland from './Components/Diaryland/Diaryland';
import Recent from './Components/Recent/Recent';
import UnlockingPage from './Months/Unlockingpage';
import January from './Months/January/January';



function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, [])


  return (
    <Router>
      <Routes>
        {/* Main Page */}
         <Route 
          path="/"
          element={
            <div className='flex items-center justify-center flex-col gap-y-2 overflow-x-hidden overflow-y-auto bg-slate-300'>
             <Header />
            <div data-aos="fade-right" className="w-full h-auto flex flex-col gap-3 relative px-1">
            <Style/>
            </div>

             <div data-aos="fade-left" className='w-screen'>
             <Collection />
             </div>

            <div data-aos="fade-left" className='w-screen'>
            <Diarytemp/>
            </div>
              <div data-aos="fade-right" className='w-screen min-w-screen h-[60vh]'>
              <Connecting/>
              </div>

             <div data-aos="fade-left" className='w-screen'>
             <Creativity/>
             </div>

              <div data-aos="fade-right" className='w-screen'>
              <Age/>
              </div>

             <div data-aos="fade-left" className='w-screen'>
             <Visual />
             </div>

              <div data-aos = "fade-right" className='w-screen'>
              <Recent/>
              </div>
              <div data-aos="fade-left" className='w-full h-full flex items-center justify-center flex-col gap-y-2'>
              <Review/>
              </div>
            <div data-aos="fade-right" className='w-screen'>
            <Footer />
            </div>
            </div>
          }
        /> 
      
        {/* Profile Page */}
        <Route path="/Account" element={<Account />} />
        <Route path="/Diary" element={<Diary/>}/>
        <Route path="/Signup" element={<Signup />}/>
        <Route path="/Login" element={<Login />} /> 
        <Route path='/Gallery' element={<Gallery />} />
        <Route path='Category' element={<Category />} />
        <Route path='/Landscape' element={<Landscape />} />
        <Route path='/Portrait' element={<Portrait />} />
        <Route path='/Still-life' element={<Still_life />} />
        <Route path='/Oil Paint' element={<Oil_paint />} />
        <Route path='/Watercolor' element={<Water_color />} />
        <Route path='/Abstract' element={<Abstract />} />
        <Route path='/Historical' element={<Historical />} />
        <Route path='/Modern' element={<Modern />} />
        <Route path='/Beginner' element={<Beginner />} />
        <Route path='/Professional' element={<Professional/>}/>
        <Route path='/Diaryland' element={<Diaryland/>}/>
        <Route path='/UnlockingPage' element={<UnlockingPage/>}/>
        <Route path='/January' element={<January/>}/>
      </Routes>
    </Router>
  );
}

export default App;
