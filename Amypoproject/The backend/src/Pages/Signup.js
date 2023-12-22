import React from "react";
import { useNavigate } from "react-router-dom";
import { MdCloudDone } from "react-icons/md";

const Signup = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen w-screen flex justify-center items-center bg-gradient-to-r from-green-500 to-green-700">
      <div className="p-8 border-[0.15rem] rounded-2xl bg-white bg-opacity-80 shadow-lg animate__animated animate__fadeIn">
        <div className="flex justify-center items-center p-4">
          <MdCloudDone className="animate-bounce text-5xl text-green-700 animate__animated animate__tada" />
          <p className="text-3xl text-black text-ellipsis p-2 flex animate__animated animate__fadeInDown">
            Signup
          </p>
        </div>
        {/* ... other input fields ... */}
        <div className="flex gap-9">
          <div className="flex flex-col gap-4 text-4xl">
            <p className="text-lg text-black text-ellipsis p-2">First Name</p>
            <p className="text-lg text-black text-ellipsis p-2">Last Name</p>
            <p className="text-lg text-black text-ellipsis p-2">
              Mobile number
            </p>
            <p className="text-lg text-black text-ellipsis p-2">Email</p>
            <p className="text-lg text-black text-ellipsis p-2">Password</p>
            <p className="text-lg text-black text-ellipsis p-2">
              Date of Birth
            </p>
            <p className="text-lg text-black text-ellipsis p-2">Job</p>
            <p className="text-lg text-black text-ellipsis p-2">Role</p>
          </div>
          <div className="flex flex-col gap-3">
            <input
              class="p-3 rounded-xl border w-[15rem] "
              type="text"
              name="firstname"
              placeholder="FirstName"
            ></input>
            <input
              class="p-3 rounded-xl border w-[15rem] "
              type="text"
              name="lastname"
              placeholder="LastName"
            ></input>
            <input
              class="p-3 rounded-xl border w-[15rem] "
              type="mobile"
              name="mobilenumber"
              placeholder="mobile number"
            ></input>
            <input
              class="p-3 rounded-xl border w-[15rem] "
              type="text"
              name="email"
              placeholder="Email"
            ></input>
            <input
              class="p-3 rounded-xl border w-[15rem] "
              type="password"
              name="email"
              placeholder="Password"
            ></input>
            <input
              class="p-3 rounded-xl border w-[15rem] "
              type="password"
              name="dateofbirth"
              placeholder="DD/MM/YYY"
            ></input>
            <input
              class="p-3 rounded-xl border w-[15rem] "
              type="password"
              name="job"
              placeholder="Student/Teacher/Other"
            ></input>
            <input
              class="p-3 rounded-xl border w-[15rem] "
              type="password"
              name="role"
              placeholder="Admin / User"
            ></input>
          </div>
        </div>


     
        {/* Checkbox and Terms of Use */}
        <div className="flex items-center w-full mt-3 animate__animated animate__fadeInUp">
          <input
            className=" hover:scale-150 mr-2 form-checkbox text-green-700"
            type="checkbox"
            name="agreement"
            id="agreement"
          />
          <div className="flex">
            <label htmlFor="agreement" className="text-lg text-black text-ellipsis">
              Agree to the
            </label>
            <p className="underline text-green-700 cursor-pointer text-lg">
              Terms of Use
            </p>
          </div>
        </div>

        {/* Signup Button */}
        <div className="justify-center flex w-full py-3 animate__animated animate__fadeIn">
          <button
            className="py-2 mt-5 px-5 hover:scale-110 hover:ring-violet-200 bg-gradient-to-r from-green-500 to-green-700 border rounded-xl hover:animate__heartBeat w-full text-xl text-white"
            onClick={() => navigate("/")}
          >
            Sign Up
          </button>
        </div>

        {/* Login Link */}
        <div className="flex animate__animated animate__fadeIn">
          <p className="text-lg text-black text-ellipsis p-2">
            Already have an account?
          </p>
          <p
            className="underline text-green-700 cursor-pointer text-2xl"
            onClick={() => navigate("/login")}
          >
            Login
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
