// import { useState,useEffect } from 'react';
// import './App.css';
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from './Components/Header/Header';
// import Footer from './Components/Footer/Footer';
// import Collection from './Components/Collections/Collection';
// import Visual from './Components/Visual/Visual';
// import Account from './Components/Account/Account';
// import Upload from './Components/Account/Upload/Upload';
// import Signup from './Components/Signup/Signup';
// import Login from './Components/Login/Login';
// import Review from './Components/Review/Review';
// import Connecting from './Components/Connecting/Connecting';
// import Style from './Components/Style/Style';
// import Category from './Components/Category/Category';
// import Gallery from './Components/Gallery/Gallery';
// import Creativity from './Components/Creativity/Creativity';
// import Age from './Components/Age/Age';
// import Landscape from './Sub-Components/Landscape/Landscape';
// import Portrait from './Sub-Components/Portrait/Portrait';
// import Still_life from './Sub-Components/Still-life/Still_life';
// import Oil_paint from './Sub-Components/Oil-paint/Oil_paint';
// import Water_color from './Sub-Components/Water-color/Water_color';
// import Abstract from './Sub-Components/Abstract/Abstract';
// import Historical from './Sub-Components/Historical/Histoirical';
// import Modern from './Sub-Components/Modern/Modern';
// import Beginner from './Age-Components/Beginner/Beginner';
// import Professional from './Age-Components/Professional/Professional';
// import Amatuer from './Age-Components/Amatuer/Amatuer';
// import Student from './Age-Components/Student/Student';
// import Mid_Carrier from './Age-Components/Mid-Carrier/Mid_Carrier';
// import Diary from './Components/Diary/Diary';
// import Diarytemp from './Components/Diarytemp/Diarytemp';
// import Diaryland from './Components/Diaryland/Diaryland';
// import Recent from './Components/Recent/Recent';
// import January from './Months/January/January';
// import About from './Company/About/About';
// import Favourite from './Months/Favourite';
// import FAQs from './Resources/FAQs/FAQs';
// import Your_Collections from './Components/Account/Your_Collection/Your_Collections';
// import Feedback from './Resources/Feedback/Feedback';
// import Edit_Profile from './Components/Account/Edit_Profile/Edit_Profile';
// import Dashboard from './Components/Account/Dashboard/Dashboard';
// import Images from './Components/Account/Your_Collection/Your_Collections';

// function App() {
//   // const [count, setCount] = useState(0);
//   const [artworks, setArtworks] = useState([]);


//   useEffect(() => {
//     AOS.init({ duration: 800 });
//   }, [])


//   return (
//     <Router>
//       <Routes>
//         {/* Main Page */}
//          <Route 
//           path="/"
//           element={
//             <div className='flex items-center justify-center flex-col gap-y-2 overflow-x-hidden overflow-y-auto bg-slate-300'>
//              <Header />
//             <div data-aos="fade-left" className="w-full h-auto flex flex-col gap-3 relative px-1">
//             <Style/>
//             </div>

//              <div data-aos="fade-right" className='w-screen'>
//              <Collection />
//              </div>

//             <div data-aos="fade-left" className='w-screen'>
//             <Diarytemp/>
//             </div>
//               <div data-aos="fade-right" className='w-screen min-w-screen h-[60vh]'>
//               <Connecting/>
//               </div>

//              <div data-aos="fade-left" className='w-screen'>
//              <Creativity/>
//              </div>

//               <div data-aos="fade-right" className='w-screen'>
//               <Age/>
//               </div>

//              <div data-aos="fade-left" className='w-screen'>
//              <Visual />
//              </div>

//               <div data-aos = "fade-right" className='w-screen'>
//               <Recent/>
//               </div>
//               <div data-aos="fade-left" className='w-full h-full flex items-center justify-center flex-col gap-y-2'>
//               <Review/>
//               </div>
//             <div data-aos="fade-right" className='w-screen'>
//             <Footer />
//             </div>
//             </div>
//           }
//         /> 
      
//         {/* Profile Page */}
//         <Route path="/Account" element={<Account />} />
//         <Route path="/Diary" element={<Diary/>}/>
//         <Route path="/Signup" element={<Signup />}/>
//         <Route path="/Login" element={<Login />} /> 
//         <Route path='/Gallery' element={<Gallery />} />
//         <Route path='Category' element={<Category />} />
//         <Route path='/Landscape' element={<Landscape />} />
//         <Route path='/Portrait' element={<Portrait />} />
//         <Route path='/Still-life' element={<Still_life />} />
//         <Route path='/Oil Paint' element={<Oil_paint />} />
//         <Route path='/Watercolor' element={<Water_color />} />
//         <Route path='/Abstract' element={<Abstract />} />
//         <Route path='/Historical' element={<Historical />} />
//         <Route path='/Modern' element={<Modern />} />
//         <Route path='/Beginner' element={<Beginner />} />
//         <Route path='/Professional' element={<Professional/>}/>
//         <Route path='/Diaryland' element={<Diaryland/>}/>
//         <Route path='/Favourite' element={<Favourite/>}/>
//         <Route path='/January' element={<January/>}/>
//         <Route path='/About' element={<About/>}/>
//         <Route path='/Amatuer' element={<Amatuer/>}/>
//         <Route path='/Student' element={<Student/>}/>
//         <Route path='/Mid_Carrier' element={<Mid_Carrier/>}/>
//         <Route path='/FAQs' element={<FAQs/>}/>
//         <Route path='/Resources/Feedback' element={<Feedback/>}/>
//         <Route path='/Account/Edit_Profile' element={<Edit_Profile/>}/>
//         <Route path='/Account/Dashboard' element={<Dashboard/>}/>
//         {/* <Route path='/Account/Your_Collection' element={<Your_Collections/>}/>
//         <Route path="/Account/Upload" element={<Upload />} /> */}
//          {/* <Route path="/upload" element={<Upload setArtworks={setArtworks} />} />
//         <Route path="/collections" element={<Your_Collections artworks={artworks} setArtworks={setArtworks} />} />
//         <Route path="/Images" element={<Images artworks={artworks} />} /> */}
// <Route path="Account/Upload" element={<Upload setArtworks={setArtworks} />} />
//         <Route path="/collections" element={<Your_Collections artworks={artworks} setArtworks={setArtworks} />} />
//         <Route path="/diary" element={<Diary artworks={artworks} />} /> {/* Updated to /diary */}

//       </Routes>
//     </Router>
//   );
// }

// export default App;


import { useState, useEffect } from 'react';
import './App.css';
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Collection from './Components/Collections/Collection';
import Visual from './Components/Visual/Visual';
import Account from './Components/Account/Account';
import Upload from './Components/Account/Upload/Upload'; // Updated import
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
// import Historical from './Sub-Components/Historical/Historical'; // Fixed typo
import Historical from './Sub-Components/Historical/Histoirical';
import Modern from './Sub-Components/Modern/Modern';
import Beginner from './Age-Components/Beginner/Beginner';
import Professional from './Age-Components/Professional/Professional';
import Amatuer from './Age-Components/Amatuer/Amatuer';
import Student from './Age-Components/Student/Student';
import Mid_Carrier from './Age-Components/Mid-Carrier/Mid_Carrier';
import Diarytemp from './Components/Diarytemp/Diarytemp';
import Diaryland from './Components/Diaryland/Diaryland';
import Recent from './Components/Recent/Recent';
import January from './Months/January/January';
import About from './Company/About/About';
import Favourite from './Months/Favourite';
import FAQs from './Resources/FAQs/FAQs';
import Your_Collections from './Components/Account/Your_Collection/Your_Collections';
import Feedback from './Resources/Feedback/Feedback';
// import Edit_Profile from './Components/Account/Edit_Profile/Edit_Profile';
import Edit_Profile from './Components/Account/Edit_Profile/Edit_Profile';
import Dashboard from './Components/Account/Dashboard/Dashboard';
import Journal from './Components/Journal/Journal';
import Privacy_Policy from './Legal/Privacy_Policy/Privacy_Policy';

function App() {
  const [artworks, setArtworks] = useState([]);
  // const [artworks, setArtworks] = useState(() => {
  //   return JSON.parse(localStorage.getItem('artworks')) || [];
  // });
  
  // useEffect(() => {
  //   localStorage.setItem('artworks', JSON.stringify(artworks));
  // }, [artworks]);


  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <Router>
      <Routes>
        {/* Main Page */}
        <Route 
          path="/"
          element={
            <div className='flex items-center justify-center flex-col gap-y-2 overflow-x-hidden overflow-y-auto bg-slate-300'>
              <Header />
              <div data-aos="fade-left" className="w-full h-auto flex flex-col gap-3 relative px-1">
                <Style />
              </div>
              <div data-aos="fade-right" className='w-screen'>
                <Collection />
              </div>
              <div data-aos="fade-left" className='w-screen'>
                <Diarytemp />
              </div>
              <div data-aos="fade-right" className='w-screen min-w-screen h-[60vh]'>
                <Connecting />
              </div>
              <div data-aos="fade-left" className='w-screen'>
                <Creativity />
              </div>
              <div data-aos="fade-right" className='w-screen'>
                <Age />
              </div>
              <div data-aos="fade-left" className='w-screen'>
                <Visual />
              </div>
              <div data-aos="fade-right" className='w-screen'>
                <Recent />
              </div>
              <div data-aos="fade-left" className='w-full h-full flex items-center justify-center flex-col gap-y-2'>
                <Review />
              </div>
              <div data-aos="fade-right" className='w-screen'>
                <Footer />
              </div>
            </div>
          }
        />
        {/* Profile Page */}
        {/* <Route path="/account" element={<Account />} /> */}
        <Route path="/Account" element={<Account artworks={artworks} setArtworks={setArtworks} />} /> {/* Pass props */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} /> 
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/category" element={<Category />} />
        <Route path="/landscape" element={<Landscape />} />
        <Route path="/portrait" element={<Portrait />} />
        <Route path="/still-life" element={<Still_life />} />
        <Route path="/oil-paint" element={<Oil_paint />} />
        <Route path="/watercolor" element={<Water_color />} />
        <Route path="/abstract" element={<Abstract />} />
        <Route path="/historical" element={<Historical />} />
        <Route path="/modern" element={<Modern />} />
        <Route path="/beginner" element={<Beginner />} />
        <Route path="/professional" element={<Professional />} />
        <Route path="/diaryland" element={<Diaryland />} />
        <Route path="/favourite" element={<Favourite />} />
        <Route path="/january" element={<January />} />
        <Route path="/about" element={<About />} />
        <Route path="/amatuer" element={<Amatuer />} />
        <Route path="/student" element={<Student />} />
        <Route path="/mid-carrier" element={<Mid_Carrier />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/resources/feedback" element={<Feedback />} />
        <Route path="/Account/Edit_profile" element={<Edit_Profile />} />
        <Route path="/Account/dashboard" element={<Dashboard />} />
        <Route path="Account/Upload" element={<Upload setArtworks={setArtworks} />} />
        <Route path="/collections" element={<Your_Collections artworks={artworks} setArtworks={setArtworks} />} />
        {/* <Route path="/diary" element={<Diary artworks={artworks} />} /> Updated to /diary */}
        <Route path='/Journal' element={<Journal/>}/>
        <Route path='/Legal/Privacy_Policy' element={<Privacy_Policy/>}/>
      </Routes>
    </Router>
  );
}

export default App;