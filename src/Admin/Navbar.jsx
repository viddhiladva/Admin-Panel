import { BsPersonFill } from "react-icons/bs";


import React from 'react';

const Navbar = () => {
    return (
        <>
            <nav className="bg-none mb-4 flex justify-between items-center">
            {/* User Profile */}
            <div className="flex items-center">
              <h1 className="text-3xl font-bold mb-4 text-gray-800">
                Dashboard
              </h1>
            </div>
            <div className="flex items-center">
              <span className="text-gray-800  font-bold hidden lg:inline mr-2">
                Welcome, Admin
              </span>
              <div className="w-10 h-10 rounded-full  bg-gray-800 flex items-center justify-center">
                <BsPersonFill className="text-white text-2xl" />
              </div>
            </div>
          </nav> 
        </>
    );
}

export default Navbar;
