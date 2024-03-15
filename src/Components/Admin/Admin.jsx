import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux"; 
import { FaUsers } from "react-icons/fa";
import { FaBoxOpen } from "react-icons/fa6";
import axios from "axios";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { fetchProduct } from "../ProductPanel/Slice/ProductSlice";

const Admin = () => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product.product); 

  function getData() {
    axios
      .get("https://65e94d454bb72f0a9c511b56.mockapi.io/user/user")
      .then((resp) => {
        setData(resp.data);
      });
  }
  useEffect(()=>{
    dispatch(fetchProduct())
  },[dispatch]);

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="flex flex-col lg:flex-row bg-gray-200 min-h-screen">
        {/* Sidebar */}
       <Sidebar/>

        {/* Main Content */}
        <div className="w-full lg:flex-1 p-4">
          {/* Navbar */}
          <Navbar/>

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
            {/* Card 2 */}
            <div className=" bg-white p-4 rounded-lg shadow-lg flex items-center justify-between h-[8rem] transform transition duration-300  hover:scale-105">
              <div className="items-left">
                <FaBoxOpen className=" text-5xl text-gray-900 bg-slate-400 rounded-full p-3" />
                <h2 className="text-xl font-bold text-gray-800 mb-0">
                  Total Product
                </h2>
              </div>
              <div className="items-end">
                <p className="text-gray-800 text-5xl font-bold ml-auto">
                  {product.length}
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
