import { useState } from 'react';
import Reviewcard from './Reviewcard';
import profile_1 from '/home/swarnadip/Documents/Index/Index/Index/src/Components/Review/Images-of-Review/pexels-jruwa-7421636.jpg'



function Review() {

  const images = [
    
    {
      Profileimg: profile_1,
      Username: 'Swarnadip Biswas',
      Userdescription:'Frontend Devloper',
      Review: 'Painters Diary, beautifully captures the essence of art with its elegant design and thoughtful typography. It’s an inspiring platform for artists to explore, create, and connect.'
    },
    {
      Profileimg:profile_1,
      Username: 'Swarnadip Biswas',
      Userdescription:'Frontend Devloper',
      Review: 'Painters Diary, beautifully captures the essence of art with its elegant design and thoughtful typography. It’s an inspiring platform for artists to explore, create, and connect.'
    },
    {
      Profileimg: profile_1,
      Username: 'Swarnadip Biswas',
      Userdescription:'Frontend Devloper',
      Review: 'Painters Diary, beautifully captures the essence of art with its elegant design and thoughtful typography. It’s an inspiring platform for artists to explore, create, and connect.'
    },
    {
      Profileimg:profile_1,
      Username: 'Swarnadip Biswas',
      Userdescription:'Frontend Devloper',
      Review: 'Painters Diary, beautifully captures the essence of art with its elegant design and thoughtful typography. It’s an inspiring platform for artists to explore, create, and connect.'
    },
    { 
      Profileimg:profile_1,
      Username: 'Swarnadip Biswas',
      Userdescription:'Frontend Devloper',
      Review: 'Painters Diary, beautifully captures the essence of art with its elegant design and thoughtful typography. It’s an inspiring platform for artists to explore, create, and connect.'
    },
    {
      Profileimg:profile_1,
      Username: 'Swarnadip Biswas',
      Userdescription:'Frontend Devloper',
      Review: 'Painters Diary, beautifully captures the essence of art with its elegant design and thoughtful typography. It’s an inspiring platform for artists to explore, create, and connect.'
    },
    {
      Profileimg:profile_1,
      Username: 'Swarnadip Biswas',
      Userdescription:'Frontend Devloper',
      Review: 'Painters Diary, beautifully captures the essence of art with its elegant design and thoughtful typography. It’s an inspiring platform for artists to explore, create, and connect.'
    },
    {
      Profileimg:profile_1,
      Username: 'Swarnadip Biswas',
      Userdescription:'Frontend Devloper',
      Review: 'Painters Diary, beautifully captures the essence of art with its elegant design and thoughtful typography. It’s an inspiring platform for artists to explore, create, and connect.'
    }, 
    {
      Profileimg:profile_1,
      Username: 'Swarnadip Biswas',
      Userdescription:'Frontend Devloper',
      Review: 'Painters Diary, beautifully captures the essence of art with its elegant design and thoughtful typography. It’s an inspiring platform for artists to explore, create, and connect.'
    },
     {
      Profileimg:profile_1,
      Username: 'Swarnadip Biswas',
      Userdescription:'Frontend Devloper',
      Review: 'Painters Diary, beautifully captures the essence of art with its elegant design and thoughtful typography. It’s an inspiring platform for artists to explore, create, and connect.'
    },

  ]
  
  return (
  // Review Section
    <div className="w-full h-auto overflow-hidden bg-slate-300 p-4">
      <h1 className='md:text-[35px] text-[30px] font-Playfair md:text-left text-center font-semibold'> What People Say About Us</h1>
    {/* Scrollable Container */}
    <div className="flex gap-4 overflow-x-scroll h-full">
      {images.map((img, index) => (
        <Reviewcard
          key={index}
          Profileimg={img.Profileimg}
          Username={img.Username}
          // Userdescription={img.Userdescription}
          Review={img.Review}
        />
      ))}
    </div>
  </div>
  )
}

export default Review;