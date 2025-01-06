import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="relative mx-auto w-[90%] md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl flex justify-between items-center py-2">
      <div className="relative z-10">
        <h1 className="text-2xl font-bold text-white">LOGO</h1>
      </div>

      <div className="relative z-10 hidden sm:block">
        <div className="space-x-4 lg:space-x-8 text-white">
        <a   href="#"
            className="text-white pb-3 border-b-2 border-transparent hover:border-white hover:transition-all hover:duration-500 hover:ease-in-out">
            Home
           </a>
          <a
            href="#"
            className="text-white pb-3 border-b-2 border-transparent hover:border-white hover:transition-all hover:duration-500 hover:ease-in-out"
          >
            Blog
          </a>
          <a
            href="#"
            className="text-white pb-3 border-b-2 border-transparent hover:border-white hover:transition-all hover:duration-500 hover:ease-in-out"
          >
            Service
          </a>
          <a
            href="#"
            className="text-white pb-3 border-b-2 border-transparent hover:border-white hover:transition-all hover:duration-500 hover:ease-in-out"
          >
            About
          </a>
          <Link to ="/table"
            className="text-white pb-3 border-b-2 border-transparent hover:border-white hover:transition-all hover:duration-500 hover:ease-in-out"
          >
            User Data
          </Link>
        </div>
      </div>

      <div className="relative z-10">
        <div className="flex gap-5 font-medium">
          <Link to="/sign_in">
            <button className="bg-white bg-opacity-50 py-1 px-7 rounded-full">
              Sign in
            </button>
          </Link>
          <Link to="/signUp">
            <button className="bg-slate-300 py-1 px-7 rounded-full">
              Sign up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
