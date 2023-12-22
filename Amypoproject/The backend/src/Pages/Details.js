import React from 'react'
import Signup from './Signup'
import { useNavigate } from "react-router-dom";

const Details = () => {
  const navigate = new useNavigate();
  return (
   <div className='h-screen w-screen flex justify-center items-center'>
    
    <div className='p-[2rem]  border-slate-700 border-2 '>
    <p className='text-xl text-black text-ellipsis p-2 justify-center flex w-full'>Login</p>
    <p className='text-lg text-black text-ellipsis p-2'>Email</p>
    <input class="p-3 rounded-xl border w-[15rem] " type="text" name="email" placeholder="Email"></input>
    <p className='text-lg text-black text-ellipsis p-2'>Password</p>
    <input class="p-3 rounded-xl border w-[15rem] " type="password" name="email" placeholder="Password"></input>
    <div className="justify-center flex w-full py-3">
    <button class="py-2 px-5 bg-slate-200 border rounded-xl hover:scale-110 w-full text-xl" onClick={() => navigate("/")}>Login</button>
    </div>
    <p className='text-xl justify-center flex p-2'> Or </p>
    <div className='flex'>
    <p className='text-lg text-black text-ellipsis p-2'>Create a new account</p><p className='underline text-blue-500 cursor-pointer text-xl' onClick={() => navigate("/signup")}>Signup</p>
    </div>
    </div>
   </div>
  )
}

export default Details
