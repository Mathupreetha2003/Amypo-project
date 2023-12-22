import React from 'react'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { add } from '../Redux/userSlice';
import { FaBook } from "react-icons/fa6";
import axios from 'axios';

const Books = () => {

    const navigate = new useNavigate();
    const dispatch =new useDispatch();

    const [bookdetails,setBookdetails] = useState({
        bookname:"",
        username:"",
        category:"",
        availability:"",
        date:"",
        price:""
    });

    const handlebookchange = (event) =>{
        const propertyName = event.target.name;

        const propertyValue =event.target.value;

        setBookdetails({...bookdetails,[propertyName]:propertyValue});
    };

    const handlesubmit = async (e) =>{
        e.preventDefault();
        console.log(bookdetails);
       savebookdetails();
       navigate("/");
    
    }

    const savebookdetails = async () =>{
        await axios.post("http://localhost:8080/savebooks",bookdetails).then((response)=>{
    
        })
       }

  return (
    <div>
        <div>
            <Navbar/>
        </div>
    <div className='"min-h-screen bg-gradient-to-r from-pink-500 via-purple-500 to-blue-600h-screen w-screen flex justify-center items-center'>
    

    <form className='p-[2rem]  border-slate-700 border-2 ' onSubmit={handlesubmit}>
    <div className="flex justify-center p-5 ">
    <FaBook className="text-4xl flex text-stone-200"/>
    <p className='text-4xl text-white text-ellipsis p-2 justify-center flex w-full'>Book Registry </p>
    </div>
    <p className='text-lg text-black text-ellipsis p-2'>Book Name</p>
    <input onChange={handlebookchange} class="p-3 rounded-xl border w-[15rem] " type="text" name="bookname" placeholder="BookName"></input>
    <p className='text-lg text-black text-ellipsis p-2'>User Name</p>
    <input  onChange={handlebookchange}  class="p-3 rounded-xl border w-[15rem] " type="text" name="username" placeholder="name"></input>
    <p className='text-lg text-black text-ellipsis p-2'>Category</p>
    <input  onChange={handlebookchange}  class="p-3 rounded-xl border w-[15rem] " type="text" name="category" placeholder="category"></input>
    <p className='text-lg text-black text-ellipsis p-2'>Availability</p>
    <input  onChange={handlebookchange}  class="p-3 rounded-xl border w-[15rem] " type="number" name="availability" placeholder="availability"></input>
    <p className='text-lg text-black text-ellipsis p-2'>Entry Date</p>
    <input  onChange={handlebookchange}  class="p-3 rounded-xl border w-[15rem] " type="date" name="date" placeholder="date"></input>
    <p className='text-lg text-black text-ellipsis p-2'>Price</p>
    <input  onChange={handlebookchange}  class="p-3 rounded-xl border w-[15rem] " type="number" name="price" placeholder="date"></input>
    <div className="p-5 justify-center flex">
    <button class="py-2 px-5 bg-pink-700 border rounded-xl hover:scale-110 w-cover text-xl text-white">Add Data</button>
    </div>
    </form>
   </div>
   </div>
  )
}

export default Books
