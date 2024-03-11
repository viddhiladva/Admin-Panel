import React, { useEffect, useState } from "react";
import { MdSpaceDashboard } from "react-icons/md";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { FaUsers, FaBoxOpen, FaUser } from "react-icons/fa";
import { BsPersonFill } from "react-icons/bs";
import axios from "axios";

const Admin = () => {
  const [data, setData] = useState([]);

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

  function getData() {
    axios
      .get("https://65e94d454bb72f0a9c511b56.mockapi.io/user/user")
      .then((resp) => {
        setData(resp.data);
      });
  }
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="flex flex-col lg:flex-row bg-gray-200 min-h-screen">
        {/* Sidebar */}
        <div className="w-full lg:w-64 bg-gray-900 text-white flex flex-col justify-between">
          <div className="p-6 text-center">
            <h2 className="text-3xl font-bold">Admin</h2>
          </div>
          <nav>
            <div
              className="flex items-center py-3 px-4 text-[20px] transform transition duration-300 hover:scale-105 "
              onClick={handelDashboard}
            >
              <MdSpaceDashboard className="mr-2 w-5 h-5 text-gray-400 hover:text-white" />
              <button className="ml-2 text-gray-400 hover:text-white ">
                Dashboard
              </button>
            </div>
            <div
              className="flex items-center py-3 px-4 text-[20px] transform transition duration-300 hover:scale-105"
              onClick={handelUser}
            >
              <FaUser className="mr-2 w-5 h-5 text-gray-400 hover:text-white" />
              <button className="ml-2 text-gray-400 hover:text-white">
                Add Users
              </button>
            </div>
            <div
              className="flex items-center py-3 px-4 text-[20px] transform transition duration-300 hover:scale-105"
              onClick={handelUser}
            >
              <FaBoxOpen className="mr-2 w-5 h-5 text-gray-400 hover:text-white" />
              <button className="ml-2 text-gray-400 hover:text-white">
                Add Product
              </button>
            </div>
          </nav>
          <div className="mt-auto">
            <div
              className="flex items-center py-3 px-4 text-[23px]"
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

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {/* Card 1 */}
            <div className=" bg-white p-4 rounded-lg shadow-lg flex items-center justify-between h-[8rem] transform transition duration-300  hover:scale-105">
              <div className="items-left">
                <FaUsers className=" text-5xl text-gray-900 bg-slate-400 rounded-full p-3" />
                <h2 className="text-xl font-bold text-gray-800 mb-0">
                  Total Users
                </h2>
              </div>
              <div className="items-end">
                <p className="text-gray-800 text-5xl font-bold ml-auto">
                  {data.length}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;
