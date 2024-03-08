import React from "react";
import { MdSpaceDashboard } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { IoSearchSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";
import { HiUserAdd } from "react-icons/hi";

const Admin = () => {
  const nav = useNavigate("");

  const handelNavigation = () => {
    nav("/");
  };

  const handelDashboard = () => {
    nav("/admin");
  };

  const handelUser = () => {
    nav("/show");
  };

  const navigationToAddUser = () =>{
    nav("/show");
  }
  return (
    <>
      <div className="flex flex-col lg:flex-row bg-gray-100 min-h-screen">
        {/* Sidebar */}
        <div className="w-full lg:w-64 bg-gray-900 text-white flex flex-col justify-between">
          <div className="p-6 text-center">
            <h2 className="text-3xl font-bold">Admin</h2>
          </div>
          <nav>
            <div
              className="flex items-center py-3 px-4 text-[16px] hover:bg-gray-700"
              onClick={handelDashboard}
            >
              <MdSpaceDashboard className="mr-2 w-5 h-5 text-gray-400" />
              <button className="ml-2 text-gray-400 hover:text-white">
                Dashboard
              </button>
            </div>
            <div
              className="flex items-center py-3 px-4 text-[16px] hover:bg-gray-700"
              onClick={handelUser}
            >
              <FaUser className="mr-2 w-5 h-5 text-gray-400" />
              <button className="ml-2 text-gray-400 hover:text-white">
                Users
              </button>
            </div>
          </nav>
          <div className="mt-auto">
            <div
              className="flex items-center py-3 px-4 text-[16px]"
              onClick={handelNavigation}
            >
              <RiLogoutCircleRLine className="mr-2 w-5 h-5 text-gray-400" />
              <button className="ml-2 text-gray-400 hover:text-white">
                Log out
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="w-full lg:flex-1 p-4">
          {/* Navbar */}
          <nav className="bg-none mb-4 flex justify-between items-center">
            {/* Search Bar */}
            <div className="relative">
              <button className="absolute left-1 top-1 mt-2 ml-2 text-white">
                <IoSearchSharp className="text-black" />
              </button>
              <input
                type="text"
                className="px-8 pr-2 py-2 bg-white text-black rounded-lg w-full lg:w-[400px] focus:outline-none focus:ring focus:border-blue-300 hover:border-gray-500 border border-gray-300"
                placeholder="Search..."
              />
            </div>

            {/* User Profile */}
            <div className="flex items-center">
              <img
                src="https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="User Profile"
                className="w-8 h-8 rounded-full mr-3"
              />
              <span className="text-gray-600 hidden lg:inline">
                Welcome, Admin
              </span>
            </div>
          </nav>

          <h1 className="text-3xl font-bold mb-4 text-gray-800">Dashboard</h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Card 1 */}

            <div className="bg-white p-4 rounded-lg shadow-lg flex items-center justify-between">
              <div className="flex items-center">
                <AiOutlineUser className="text-3xl text-gray-800 mr-2" />
                <div>
                  <h2 className="text-xl font-semibold text-gray-800 mb-0">
                    Total Users
                  </h2>
                  <p className="text-gray-600 text-lg font-semibold">100</p>
                </div>
              </div>
            </div>

            {/* Card 2 */}

            <div className="bg-white p-4 rounded-lg shadow-lg flex items-center justify-between" onClick={navigationToAddUser}>
              <div className="flex items-center">
                <HiUserAdd className="text-3xl text-gray-800 mr-2" />
                <div>
                  <h2 className="text-xl font-semibold text-gray-800 mb-0">
                    Add Users
                  </h2>
                  <p className="text-gray-600 text-lg font-semibold">...</p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                Card Title 3
              </h2>
              <p className="text-gray-600">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                Card Title 4
              </h2>
              <p className="text-gray-600">
                Quis autem vel eum iure reprehenderit qui in ea voluptate velit
                esse quam nihil molestiae consequatur.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;
