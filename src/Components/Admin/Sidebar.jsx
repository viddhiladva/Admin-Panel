import React from "react";
import { useNavigate } from "react-router-dom";
import { MdSpaceDashboard } from "react-icons/md";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { FaBoxOpen, FaUser } from "react-icons/fa";

const Sidebar = () => {
  const nav = useNavigate();
  const handelDashboard = () => {
    nav("/admin");
  };
  const handelUser = () => {
    nav("/show");
  };
  const logout = () =>{
    nav("/")
  }
  const handelProduct = () =>{
    nav("/addProduct")
  }
  return (
    <>
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
              Users
            </button>
          </div>
          <div
            className="flex items-center py-3 px-4 text-[20px] transform transition duration-300 hover:scale-105"
            onClick={handelProduct}
          >
            <FaBoxOpen className="mr-2 w-5 h-5 text-gray-400 hover:text-white" />
            <button className="ml-2 text-gray-400 hover:text-white">
              Product
            </button>
          </div>
        </nav>
        <div className="mt-auto" onClick={logout}>
            <div
              className="flex items-center py-3 px-4 text-[23px]"
            >
              <RiLogoutCircleRLine className="mr-2 w-5 h-5 text-gray-400" />
              <button className="ml-2 text-gray-400 hover:text-white">
                Log out
              </button>
            </div>
          </div>
      </div>
    </>
  );
};

export default Sidebar;
