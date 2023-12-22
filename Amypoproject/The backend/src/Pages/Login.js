import React from "react";
import { useNavigate } from "react-router-dom";
import { IoFingerPrint } from "react-icons/io5";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Simulate a loading state or perform authentication logic here
    navigate("/");
  };

  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="p-8 bg-white border-2 border-blue-800 rounded-2xl shadow-lg w-[20rem] animate__animated animate__fadeIn">
        <div className="flex justify-center items-center p-4">
          <IoFingerPrint className="animate-pulse duration-3000 delay-2000  text-5xl text-blue-800" />
          <p className="text-3xl text-black ml-2">Login</p>
        </div>
        <form className="space-y-4">
          <div>
            <label className="text-lg text-black block mb-2">Email</label>
            <input
              className="p-3 rounded-xl border w-full focus:outline-none"
              type="text"
              name="email"
              placeholder="Email"
            />
          </div>
          <div>
            <label className="text-lg text-black block mb-2">Password</label>
            <input
              className="p-3 rounded-xl border w-full focus:outline-none"
              type="password"
              name="password"
              placeholder="Password"
            />
          </div>
          <div className="flex justify-center">
            <button
              className="bg-gradient-to-r from-blue-600 to-blue-800 py-2 px-5 text-white border rounded-xl hover:scale-110 w-full text-xl flex items-center justify-center transition-transform duration-300 transform hover:translate-y-[-2px]"
              onClick={handleLogin}
            >
              <span>Login</span>
              <span className="ml-2">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  ></path>
                </svg>
              </span>
            </button>
          </div>
        </form>
        <p className="text-xl text-center my-4">Or</p>
        <div className="flex justify-center">
          <p className="text-lg text-black mr-2">Create a new account</p>
          <p
            className="underline text-blue-500 cursor-pointer text-2xl"
            onClick={() => navigate("/signup")}
          >
            Signup
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
