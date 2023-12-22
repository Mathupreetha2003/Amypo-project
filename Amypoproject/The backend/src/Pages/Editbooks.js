import React, { useEffect } from 'react'
import Navbar from './Navbar'
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import { FaBook } from "react-icons/fa6";
import axios from 'axios';

const Editbooks = () => {
    const {id} = useParams();

    const navigate = new useNavigate();

    const [bookdetails,setBookdetails] = useState(null);

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
        await axios.put(`http://localhost:8080/updatebooks/${id}`,bookdetails).then((response)=>{
        //   setStorebookdetails(response.data);
        })
       }

       const getbookdetails = () =>{
        axios.get(`http://localhost:8080/getbooksbyid/${id}`).then((response)=>{
          setBookdetails(response.data);
        })
       }
      
       
      
       useEffect(() => {
          getbookdetails();
          },[id])

  return (
    <div>
        <div>
            <Navbar/>
        </div>
    <div className='h-screen w-screen flex justify-center items-center'>
    

    <form className='p-[2rem]  border-slate-700 border-2 ' onSubmit={handlesubmit}>
    <div className="flex justify-center p-5">
    <FaBook className="text-4xl flex text-emerald-700"/>
    <p className='text-4xl text-pink-700 text-ellipsis p-2 justify-center flex w-full'>Book Registry </p>
    </div>
    <p className='text-lg text-black text-ellipsis p-2'>Book Name</p>
    <input value={bookdetails?.bookname} onChange={handlebookchange} class="p-3 rounded-xl border w-[15rem] " type="text" name="bookname" placeholder="BookName"></input>
    <p className='text-lg text-black text-ellipsis p-2'>User Name</p>
    <input  value={bookdetails?.username} onChange={handlebookchange}  class="p-3 rounded-xl border w-[15rem] " type="text" name="username" placeholder="name"></input>
    <p className='text-lg text-black text-ellipsis p-2'>Category</p>
    <input  value={bookdetails?.category} onChange={handlebookchange}  class="p-3 rounded-xl border w-[15rem] " type="text" name="category" placeholder="category"></input>
    <p className='text-lg text-black text-ellipsis p-2'>Availability</p>
    <input value={bookdetails?.availability} onChange={handlebookchange}  class="p-3 rounded-xl border w-[15rem] " type="number" name="availability" placeholder="availability"></input>
    <p className='text-lg text-black text-ellipsis p-2'>Entry Date</p>
    <input value={bookdetails?.date} onChange={handlebookchange}  class="p-3 rounded-xl border w-[15rem] " type="date" name="date" placeholder="date"></input>
    <p className='text-lg text-black text-ellipsis p-2'>Price</p>
    <input value={bookdetails?.price} onChange={handlebookchange}  class="p-3 rounded-xl border w-[15rem] " type="number" name="price" placeholder="date"></input>
    <div className="p-5 justify-center flex">
    <button class="py-2 px-5 bg-pink-700 border rounded-xl hover:scale-110 w-cover text-xl text-white">Edit Data</button>
    </div>
    </form>
   </div>
   </div>
  )
}

export default Editbooks
