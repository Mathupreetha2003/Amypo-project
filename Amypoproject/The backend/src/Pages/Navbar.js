import React from 'react'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = new useNavigate();
  return (
    <div className="bg-slate-600 p-[1rem] text-xl text-white flex">
      <div className='flex w-full'>
        <div className="justify-start text-2xl flex w-full"> 
        <p>Library Management System</p>
        </div>
        <div className="justify-end flex w-full gap-5">
        <button class="py-1 px-5 bg-slate-200 border rounded-xl hover:scale-110 w-cover text-black text-lg p-1" onClick={() => navigate("/")}>Home</button>
        <button class="py-1 px-5 bg-slate-200 border rounded-xl hover:scale-110 w-cover text-black text-lg p-1" onClick={() => navigate("/books")}>Books</button>
        <button class="py-1 px-5 bg-slate-200 border rounded-xl hover:scale-110 w-cover text-black text-lg p-1" onClick={() => navigate("/login")}>Logout</button>
        <button class="py-1 px-5 bg-slate-200 border rounded-xl hover:scale-110 w-cover text-black text-lg p-1" onClick={() => navigate("/signup")}>Sign Up</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
