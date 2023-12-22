import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { MdDelete } from 'react-icons/md';
import { FaEdit, FaEye } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from './Navbar';

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [viewbookdetails, setViewbookdetails] = useState(null);

  useEffect(() => {
    getbookdetails();
  }, []);

  const deletebook = (index) => {
    axios.delete(`http://localhost:8080/deletebooks/${index}`).then((response) => {
      getbookdetails();
    });
  };

  const getbookdetails = () => {
    axios.get('http://localhost:8080/getbooks').then((response) => {
      setViewbookdetails(response.data);
    });
  };

  return (
    <div className="bg-slate-300 min-h-screen">
      <Navbar />
      <div className="flex justify-center p-5">
        <p className="text-3xl text-rose-900">Welcome to the Library Management System</p>
      </div>
      <div className="mx-5 mt-5">
        <table className="w-full bg-yellow-300 text-gray-800 border-separate border border-gray-600">
          <thead>
            <tr className="hover:bg-yellow-400">
              <th className="text-2xl p-3 border border-gray-600 border-r-4">Sno</th>
              <th className="text-2xl p-3 border border-gray-600 border-r-4">Book Name</th>
              <th className="text-2xl p-3 border border-gray-600 border-r-4">User Name</th>
              <th className="text-2xl p-3 border border-gray-600 border-r-4">Category</th>
              <th className="text-2xl p-3 border border-gray-600 border-r-4">Availability</th>
              <th className="text-2xl p-3 border border-gray-600 border-r-4">Entry Date</th>
              <th className="text-2xl p-3 border border-gray-600 border-r-4">Price</th>
              <th className="text-2xl p-3 border border-gray-600 border-r-4">Edit Data</th>
            </tr>
          </thead>

          <tbody>
            {viewbookdetails?.map((book, index) => (
              <tr
                key={index}
                className={`${
                  index % 2 === 0 ? 'bg-yellow-200' : 'bg-yellow-100'
                } hover:bg-yellow-400 cursor-pointer justify-center border-b-4 border-t-4`}
              >
                <td className="text-xl p-3 border border-gray-600 border-r-4">{book.id}</td>
                <td className="text-xl p-3 border border-gray-600 border-r-4">{book.bookname}</td>
                <td className="text-xl p-3 border border-gray-600 border-r-4">{book.username}</td>
                <td className="text-xl p-3 border border-gray-600 border-r-4">{book.category}</td>
                <td className="text-xl p-3 border border-gray-600 border-r-4">{book.availability}</td>
                <td className="text-xl p-3 border border-gray-600 border-r-4">{book.date}</td>
                <td className="text-xl p-3 border border-gray-600 border-r-4">{book.price}</td>
                <td className="border border-gray-600">
                  <div className="flex gap-2">
                    <FaEye
                      className="text-blue-500 text-4xl justify-center flex hover:scale-95 w-[3rem] cursor-pointer"
                      onClick={() => console.log('View clicked')}
                    />
                    <FaEdit
                      className="text-green-500 text-3xl justify-center flex w-[3rem] cursor-pointer"
                      onClick={() => navigate(`/editbooks/${book.id}`)}
                    />
                    <MdDelete
                      className="text-red-500 text-4xl justify-center flex w-[3rem] cursor-pointer ml-[-10px]"
                      onClick={() => deletebook(book.id)}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
