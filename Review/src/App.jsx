import { useState } from 'react';
import './App.css'
import Reviewcard from './Reviewcard';
import profile_1 from '/home/swarnadip/Documents/Index/Review/src/Images/pexels-jruwa-7421636.jpg'



function App() {

  const images = [

    {
      Profileimg: profile_1,
      Username: 'Swarnadip',
      Userdescription:'Frontend Devloper',
      Review: 'Painters Diary, beautifully captures the essence of art with its elegant design and thoughtful typography. It’s an inspiring platform for artists to explore, create, and connect.'
    },
    {
      Profileimg:profile_1,
      Username: 'Swarnadip',
      Userdescription:'Frontend Devloper',
      Review: 'Painters Diary, beautifully captures the essence of art with its elegant design and thoughtful typography. It’s an inspiring platform for artists to explore, create, and connect.'
    },
    {
      Profileimg: profile_1,
      Username: 'Swarnadip',
      Userdescription:'Frontend Devloper',
      Review: 'Painters Diary, beautifully captures the essence of art with its elegant design and thoughtful typography. It’s an inspiring platform for artists to explore, create, and connect.'
    },
    {
      Profileimg:profile_1,
      Username: 'Swarnadip',
      Userdescription:'Frontend Devloper',
      Review: 'Painters Diary, beautifully captures the essence of art with its elegant design and thoughtful typography. It’s an inspiring platform for artists to explore, create, and connect.'
    },
    { 
      Profileimg:profile_1,
      Username: 'Swarnadip',
      Userdescription:'Frontend Devloper',
      Review: 'Painters Diary, beautifully captures the essence of art with its elegant design and thoughtful typography. It’s an inspiring platform for artists to explore, create, and connect.'
    },
    {
      Profileimg:profile_1,
      Username: 'Swarnadip',
      Userdescription:'Frontend Devloper',
      Review: 'Painters Diary, beautifully captures the essence of art with its elegant design and thoughtful typography. It’s an inspiring platform for artists to explore, create, and connect.'
    },
    {
      Profileimg:profile_1,
      Username: 'Swarnadip',
      Userdescription:'Frontend Devloper',
      Review: 'Painters Diary, beautifully captures the essence of art with its elegant design and thoughtful typography. It’s an inspiring platform for artists to explore, create, and connect.'
    },
    {
      Profileimg:profile_1,
      Username: 'Swarnadip',
      Userdescription:'Frontend Devloper',
      Review: 'Painters Diary, beautifully captures the essence of art with its elegant design and thoughtful typography. It’s an inspiring platform for artists to explore, create, and connect.'
    }, 
    {
      Profileimg:profile_1,
      Username: 'Swarnadip',
      Userdescription:'Frontend Devloper',
      Review: 'Painters Diary, beautifully captures the essence of art with its elegant design and thoughtful typography. It’s an inspiring platform for artists to explore, create, and connect.'
    },
     {
      Profileimg:profile_1,
      Username: 'Swarnadip',
      Userdescription:'Frontend Devloper',
      Review: 'Painters Diary, beautifully captures the essence of art with its elegant design and thoughtful typography. It’s an inspiring platform for artists to explore, create, and connect.'
    },

  ]

  

  return (
    <div className=' flex overflow-scroll overflow-y-hidden'>

          {images.map((img, index) => (
            <Reviewcard key={index}
            Profileimg={img.Profileimg}
            Username={img.Username}
            Userdescription={img.Userdescription}
            Review={img.Review} />
          ))}

    </div>
  )
}

export default App
