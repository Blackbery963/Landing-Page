import React from 'react'
import { Link } from 'react-router-dom'
import { FaHome, FaInfoCircle, FaUser, FaBook } from 'react-icons/fa'
import FAQsBackground from '/home/swarnadip/Documents/Index/Index/Index/src/Resources/FAQs/FAQs-images/FAQS.jpeg'

function FAQs() {
    return (
        <div className='min-h-screen max-w-screen bg-slate-300 flex flex-col overflow-x-hidden overflow-y-auto pb-6'>
            <header className=' h-[100px] w-full bg-gradient-to-l from-[#10002bad] to-[#dec9e9a9] backdrop-blur-md flex items-center justify-between px-4 md:px-6 shadow-lg text-white fixed top-0 z-50'>
            {/* Logo */}
            <h1 className='lg:text-[35px] md:text-[30px] sm:text-[25px] text-[20px] font-bold font-Eagle'>Painters' Diary</h1>
            {/* Navigation */}
            <div className='flex items-center justify-center gap-x-2'>
                    <Link to={"/"}>
                        <button className='lg:px-4 px-2 py-1 bg-violet-900/50 hover:bg-violet-800/80 rounded-md font-Playfair text-white border border-gray-400 text-[18px]'>
                            <FaHome className="text-xl sm:hidden" />
                            <span className="hidden sm:inline">Home</span>
                        </button>
                    </Link>
                    <Link to={"/About"}>
                        <button className='lg:px-4 px-2 py-1 bg-violet-900/50 hover:bg-violet-800/80 rounded-md font-Playfair text-white border border-gray-400 text-[18px]'>
                            <FaInfoCircle className="text-xl sm:hidden" />
                            <span className="hidden sm:inline">About</span>
                        </button>
                    </Link>
                    <Link to={"/Account"}>
                        <button className='lg:px-4 px-2 py-1 bg-violet-900/50 hover:bg-violet-800/80 rounded-md font-Playfair text-white border border-gray-400 text-[18px]'>
                            <FaUser className="text-xl sm:hidden"/>
                            <span className="hidden sm:inline">Account</span>
                        </button>
                    </Link>
                    <Link to={"/Journal"}>
                        <button className='lg:px-4 px-2 py-1 bg-violet-900/50 hover:bg-violet-800/80 rounded-md font-Playfair text-white border border-gray-400 text-[18px]'>
                            <FaBook className="text-xl sm:hidden" />
                            <span className="hidden sm:inline">Diary</span>
                        </button>
                    </Link>
                </div>
            </header>
            {/* the first addressing section */}
            <section className='lg:w-[80%] sm:w-[90%] md:w-[85%] w-[95%] h-[80vh] border mx-auto mt-[150px] rounded-lg shadow-lg text-white flex flex-col items-center justify-center bg-no-repeat' style={{backgroundImage: `url(${FAQsBackground})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
                <div className='bg-black/10 backdrop-blur-md p-4 rounded-lg lg:w-[80%] sm:w-[88%] w-[92%] lg:px-20 md:px-16 sm:px-10 px-6 py-8'>
                    <h1 className='lg:text-[50px] sm:text-[40px] text-[35px] font-Playfair font-semibold text-[#0a2d2e] text-center'>Painters' Diary FAQs – Everything You Need to Know!</h1>
                    <p className='text-center lg:text-[25px] sm:text-[20px] text-[18px] font-Upright font-bold text-[#e7e4eb]'>Have questions about Painters' Diary? Find all the answers here! Whether you're an artist looking to showcase your work, a creative soul exploring art, or someone curious about our platform, this FAQ section covers everything you need to know. </p>
                </div>
            </section>
            
            <section className="w-[95%] sm:w-[90%] md:w-[85%] lg:w-[80%] min-h-[70vh] bg-gradient-to-tr from-[#f7ebe7] to-[#deae9f] border mx-auto mt-10 rounded-lg shadow-lg text-white flex flex-col items-center justify-center p-6">
  <h1 className="text-[25px] sm:text-[30px] md:text-[35px] lg:text-[40px] text-center font-Playfair font-semibold">
    Getting to Know Painters' Diary
  </h1>

  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full px-4 flex-1 mt-8">
    <div className="min-h-[200px] bg-gradient-to-l from-[#af92b5] to-[#fee0f9] rounded-lg shadow-md flex flex-col items-start justify-center px-10">
        <h1 className='lg:text-[25px] sm:text-[20px] text-[18px] font-Playfair font-semibold text-[#503d5c]'>1. What is Painters' Diary?</h1>
        <p className="text-left lg:text-lg text-sm font-GreatVibes text-[#463f3a]">Painters' Diary is an online platform designed for artists to showcase their work, share their creative journey, and connect with a like-minded community.</p>
    </div>
    <div className="min-h-[200px] bg-gradient-to-l from-[#af92b5] to-[#fee0f9] rounded-lg shadow-md flex items-start justify-center flex-col px-10">
      <h1 className='lg:text-[25px] sm:text-[20px] text-[18px] font-Playfair font-semibold text-[#503d5c]'>2. Who can join Painters' Diary?</h1>
      <p className="text-left lg:text-lg text-sm font-GreatVibes text-[#463f3a]"> Anyone passionate about art can join! Whether you're a professional artist, a hobbyist, or an art enthusiast, Painters' Diary welcomes you.</p>
    </div>
    <div className="min-h-[200px] bg-gradient-to-l from-[#af92b5] to-[#fee0f9] rounded-lg shadow-md flex items-start justify-center flex-col px-10">
      <h1 className='lg:text-[25px] sm:text-[20px] text-[18px] font-Playfair font-semibold text-[#503d5c]'>3. Is it free to use Painters' Diary?</h1>
      <p className="text-left lg:text-lg text-sm font-GreatVibes text-[#463f3a]">Yes! Painters' Diary offers free access to browse and showcase artwork. In the future, premium features may be introduced for an enhanced experience.</p>
    </div>
    <div className="min-h-[200px] bg-gradient-to-l from-[#af92b5] to-[#fee0f9] rounded-lg shadow-md flex items-start justify-center flex-col px-10">
      <h1 className='lg:text-[25px] sm:text-[20px] text-[18px] font-Playfair font-semibold text-[#503d5c]'>4. Can I sell my artwork on Painters' Diary?</h1>
      <p className="text-left lg:text-lg text-sm font-GreatVibes text-[#463f3a]">Currently, Painters' Diary is focused on showcasing and sharing art. However, we may introduce selling features in the future to help artists monetize their work.</p>
    </div>
  </div>
</section>
<section className="w-[95%] sm:w-[90%] md:w-[85%] lg:w-[80%] min-h-[70vh] bg-gradient-to-tr from-[#f7ebe7] to-[#deae9f] border mx-auto mt-10 rounded-lg shadow-lg text-white flex flex-col items-center justify-center p-6">
  <h1 className="text-[25px] sm:text-[30px] md:text-[35px] lg:text-[40px] text-center font-Playfair font-semibold">
  Share Your Art with the World
  </h1>

  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full px-4 flex-1 mt-8">
    <div className="min-h-[200px] bg-gradient-to-l from-[#af92b5] to-[#fee0f9] rounded-lg shadow-md flex flex-col items-start justify-center px-10">
        <h1 className='lg:text-[25px] sm:text-[20px] text-[18px] font-Playfair font-semibold text-[#503d5c]'>1. How do I upload my artwork?</h1>
        <p className="text-left lg:text-lg text-sm font-GreatVibes text-[#463f3a]">To upload your artwork, log in to your account, go to your profile dashboard, and click the "Upload Artwork" button. You can add a title, description, and tags to make your art more discoverable.</p>
    </div>
    <div className="min-h-[200px] bg-gradient-to-l from-[#af92b5] to-[#fee0f9] rounded-lg shadow-md flex items-start justify-center flex-col px-10">
      <h1 className='lg:text-[25px] sm:text-[20px] text-[18px] font-Playfair font-semibold text-[#503d5c]'>2. What types of artwork can I upload?</h1>
      <p className="text-left lg:text-lg text-sm font-GreatVibes text-[#463f3a]"> You can upload paintings, digital art, sketches, illustrations, and mixed media. Ensure that the artwork is your original creation and follows our content guidelines.However, AI-generated or plagiarized artwork is not allowed.</p>
    </div>
    <div className="min-h-[200px] bg-gradient-to-l from-[#af92b5] to-[#fee0f9] rounded-lg shadow-md flex items-start justify-center flex-col px-10">
      <h1 className='lg:text-[25px] sm:text-[20px] text-[18px] font-Playfair font-semibold text-[#503d5c]'>3. Can I edit or delete my uploaded artwork?</h1>
      <p className="text-left lg:text-lg text-sm font-GreatVibes text-[#463f3a]"> Yes! You can edit details or delete your artwork anytime from your profile dashboard under the "My Artworks" section.</p>
    </div>
    <div className="min-h-[200px] bg-gradient-to-l from-[#af92b5] to-[#fee0f9] rounded-lg shadow-md flex items-start justify-center flex-col px-10">
      <h1 className='lg:text-[25px] sm:text-[20px] text-[18px] font-Playfair font-semibold text-[#503d5c]'>4.  Is there a limit to how many artworks I can upload?</h1>
      <p className="text-left lg:text-lg text-sm font-GreatVibes text-[#463f3a]">Currently, there is no strict limit on uploads, but to maintain quality, we recommend uploading your best work. Future updates may introduce limits based on account type.</p>
    </div>
  </div>
</section>
<section className="w-[95%] sm:w-[90%] md:w-[85%] lg:w-[80%] min-h-[40vh] bg-gradient-to-tr from-[#f7ebe7] to-[#deae9f] border mx-auto mt-10 rounded-lg shadow-lg text-white flex flex-col items-center justify-center p-6">
  <h1 className="text-[25px] sm:text-[30px] md:text-[35px] lg:text-[40px] text-center font-Playfair font-semibold">
  Share Your Artistic Journal with the World
  </h1>

  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full px-4 flex-1 mt-8">
    <div className="min-h-[200px] bg-gradient-to-l from-[#af92b5] to-[#fee0f9] rounded-lg shadow-md flex flex-col items-start justify-center px-10">
        <h1 className='lg:text-[25px] sm:text-[20px] text-[18px] font-Playfair font-semibold text-[#503d5c]'>1. What is the Diary feature on Painters' Diary?</h1>
        <p className="text-left lg:text-lg text-sm font-GreatVibes text-[#463f3a]">The Diary feature allows artists to document their creative journey, share thoughts, and post work-in-progress updates to engage with the community.</p>
    </div>
    <div className="min-h-[200px] bg-gradient-to-l from-[#af92b5] to-[#fee0f9] rounded-lg shadow-md flex items-start justify-center flex-col px-10">
      <h1 className='lg:text-[25px] sm:text-[20px] text-[18px] font-Playfair font-semibold text-[#503d5c]'>2. Can I start my own blog on Painters' Diary?</h1>
      <p className="text-left lg:text-lg text-sm font-GreatVibes text-[#463f3a]">Currently, you can share diary entries, but a dedicated blogging feature may be introduced in the future to allow artists to write in-depth articles about their work and experiences.</p>
    </div>
  </div>
</section>
<section className="w-[95%] sm:w-[90%] md:w-[85%] lg:w-[80%] min-h-[40vh] bg-gradient-to-tr from-[#f7ebe7] to-[#deae9f] border mx-auto mt-10 rounded-lg shadow-lg text-white flex flex-col items-center justify-center p-6">
  <h1 className="text-[25px] sm:text-[30px] md:text-[35px] lg:text-[40px] text-center font-Playfair font-semibold">
  Join with the World
  </h1>

  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full px-4 flex-1 mt-8">
    <div className="min-h-[200px] bg-gradient-to-l from-[#af92b5] to-[#fee0f9] rounded-lg shadow-md flex flex-col items-start justify-center px-10">
        <h1 className='lg:text-[25px] sm:text-[20px] text-[18px] font-Playfair font-semibold text-[#503d5c]'>1. How can I collaborate with other artists?</h1>
        <p className="text-left lg:text-lg text-sm font-GreatVibes text-[#463f3a]">You can collaborate by connecting with artists through the platform, joining community challenges, or participating in special projects.</p>
    </div>
    <div className="min-h-[200px] bg-gradient-to-l from-[#af92b5] to-[#fee0f9] rounded-lg shadow-md flex items-start justify-center flex-col px-10">
      <h1 className='lg:text-[25px] sm:text-[20px] text-[18px] font-Playfair font-semibold text-[#503d5c]'>2. Can I comment and interact with other artists?</h1>
      <p className="text-left lg:text-lg text-sm font-GreatVibes text-[#463f3a]"> Yes, you can comment, like, and share other artists' work to engage with the community.</p>
    </div>
  </div>
</section>
<section className="w-[95%] sm:w-[90%] md:w-[85%] lg:w-[80%] min-h-[70vh] bg-gradient-to-tr from-[#f7ebe7] to-[#deae9f] border mx-auto mt-10 rounded-lg shadow-lg text-white flex flex-col items-center justify-center p-6">
  <h1 className="text-[25px] sm:text-[30px] md:text-[35px] lg:text-[40px] text-center font-Playfair font-semibold">
  Keeping Your Art Safe
  </h1>

  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full px-4 flex-1 mt-8">
    <div className="min-h-[200px] bg-gradient-to-l from-[#af92b5] to-[#fee0f9] rounded-lg shadow-md flex flex-col items-start justify-center px-10">
        <h1 className='lg:text-[25px] sm:text-[20px] text-[18px] font-Playfair font-semibold text-[#503d5c]'>1. How do I create an account on Painters' Diary?</h1>
        <p className="text-left lg:text-lg text-sm font-GreatVibes text-[#463f3a]">You can sign up using your email or social media accounts. Simply click the "Sign Up" button, fill in your details, and start showcasing your art!</p>
    </div>
    <div className="min-h-[200px] bg-gradient-to-l from-[#af92b5] to-[#fee0f9] rounded-lg shadow-md flex items-start justify-center flex-col px-10">
      <h1 className='lg:text-[25px] sm:text-[20px] text-[18px] font-Playfair font-semibold text-[#503d5c]'>2.  Is my artwork protected on Painters' Diary?</h1>
      <p className="text-left lg:text-lg text-sm font-GreatVibes text-[#463f3a]"> Yes! Your uploaded artwork remains your property. However, we recommend adding watermarks if needed. Painters' Diary does not claim ownership of any artist's work.</p>
    </div>
    <div className="min-h-[200px] bg-gradient-to-l from-[#af92b5] to-[#fee0f9] rounded-lg shadow-md flex items-start justify-center flex-col px-10">
      <h1 className='lg:text-[25px] sm:text-[20px] text-[18px] font-Playfair font-semibold text-[#503d5c]'>3. Can I delete my account?</h1>
      <p className="text-left lg:text-lg text-sm font-GreatVibes text-[#463f3a]">Yes, you can delete your account anytime from the settings page. Keep in mind that this will permanently remove all your uploaded artwork and profile data.</p>
    </div>
    <div className="min-h-[200px] bg-gradient-to-l from-[#af92b5] to-[#fee0f9] rounded-lg shadow-md flex items-start justify-center flex-col px-10">
      <h1 className='lg:text-[25px] sm:text-[20px] text-[18px] font-Playfair font-semibold text-[#503d5c]'>4.  How can I change my account details?</h1>
      <p className="text-left lg:text-lg text-sm font-GreatVibes text-[#463f3a]">You can update your username, profile picture, and other details from the "Account Settings" section in your profile dashboard.</p>
    </div>
  </div>
</section>


        </div>
    )
}

export default FAQs
