import React from 'react'
import { useNavigate } from 'react-router-dom'

const Footer = () => {

    const navigate = new useNavigate();

  return (
    <div className="bg-slate-400">
      <div className="p-5 flex justify-between">
        <p className="text-semibold text-4xl text-black">Freelancer</p>
        
        <div className="flex justify-between gap-7">
        
        <a href="https://www.facebook.com/facebook/" target="_blank" rel="noreferrer"><BsFacebook className="text-4xl cursor-pointer hover:text-blue-800 hover:rounded-full" /></a>
        <a href="https://twitter.com/home" target="_blank" rel="noreferrer" ><BsTwitter className="text-4xl cursor-pointer  hover:text-blue-500" /></a> 
        <a href="https://www.instagram.com/Instagram/" target="_blank" rel="noreferrer"><BsInstagram className="text-4xl cursor-pointer  hover:text-pink-800" /></a> 
        <a href="https://www.youtube.com/" target="_blank" rel="noreferrer"><BsYoutube className="text-4xl cursor-pointer  hover:text-red-700" /></a>

        </div>
      </div>
      <div className=" h-[0.03rem]  bg-white">
      </div>

      <div className="flex justify-around pb-5">
        
        <div className="p-5 flex flex-col gap-4">
          <h1 className="text-2xl text-bold">Categories</h1>
          <p>Graphic Design</p>
          <p>Digital Marketing</p>
          <p>Content Creation</p>
          <p>Music & Audio</p>
          <p>Video & Animation</p>
          <p>Data</p>
          <p>Buissness</p>
          <p>LifeStyle</p>
        </div>
        <div className="p-5 flex flex-col gap-4">
          <h1 className="text-2xl text-bold">About</h1>
          <p>Careers</p>
          <p>Press & News</p>
          <p>Partnership</p>
          <p  className="cursor-pointer" onClick={() => navigate("/privacy")}>Privacy Policy</p>
          <p  className="cursor-pointer" onClick={() => navigate("/contact")}>Contact Us</p>
          <p className="cursor-pointer" onClick={() => navigate("/terms")}>Terms & Conditions</p>
          <p className="cursor-pointer" onClick={() => navigate("/faq")}>FAQs</p>
        </div>
        <div className="p-5 flex flex-col gap-4">
          <h1 className="text-2xl text-bold">Support & Educaton</h1>
          <p>Help & Support</p>
          <p>Trust & Safety</p>
          <p>Buy on Freelancer</p>
          <p>Selling on Freelancer</p>
          <p>Freelancer Guide</p>
          <p>Freelancer WorkShop</p>
        </div>
        <div className="p-5 flex flex-col gap-4">
          <h1 className="text-2xl text-bold">Community</h1>
          <p>Customer Success Stories</p>
          <p>Community Hub</p>
          <p>Blog</p>
          <p>Influencers</p>
          <p>Podcasts</p>
          <p>Invite a friend</p>
          <p>Become a Seller</p>
          <p>Community Standards</p>
        </div>
      </div>
      <div className=" h-[0.03rem] ml-10 mr-10 bg-slate-700">
      </div>

      <div class="flex justify-around p-5">
      <div className="">
        <p className="text-3xl">60,43,564</p>
        <p>Registered Users</p>
      </div>
      <div>
        <p className="text-3xl">23,65,234</p>
        <p>Total Jobs Posted</p>
      </div>
      <div className="flex flex-row gap-3">
        <BsGlobe className="text-4xl text-gray-700" />
        <p  className="text-2xl">English</p>
      </div>
      <div className="flex flex-row gap-3">
        <BiCopyright className="text-3xl text-gray-700" />
        <p  className="text-2xl">Freelancer International Ltd.2023</p>
      </div>
      </div>

    </div>
  )
}

export default Footer
