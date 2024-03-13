import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../Admin/Sidebar";
import { FaEdit } from "react-icons/fa";


const Update = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [categoryPoint, setCategoryPoints] = useState("");
  const [categoryData, setCategoryData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setId(localStorage.getItem("id"));
    setName(localStorage.getItem("name"));
    setUserName(localStorage.getItem("username"));
    setEmail(localStorage.getItem("email"));
    setCategoryPoints(localStorage.getItem("categoryData"));
  }, []);

  const navigateToShow = () => {
    navigate("/show");
  };

  const navigateToAddCategory = () => {
    navigate("/addCategory");
  };

  const handleUpdate = (e) => {
    e.preventDefault();

    // Calculate total points here
    const newPoints = Number(categoryPoint);
    const prevPoints = parseInt(localStorage.getItem("categoryData"));
    const totalPoints = prevPoints + newPoints;

    axios
      .put(`https://65e94d454bb72f0a9c511b56.mockapi.io/user/user/${id}`, {
        id,
        name,
        username,
        email,
        categoryData: totalPoints, // Use the total points here
      })
      .then(() => {
        navigate("/show");
      });
  };

  useEffect(() => {
    axios
      .get("https://65ed815f08706c584d99e8af.mockapi.io/category/category")
      .then((resp) => {
        setCategoryData(resp.data);
      });
  }, []);

  return (
    <>
      <div className="flex flex-col  lg:flex-row bg-gray-200 min-h-screen">
        <Sidebar />
        <div className="flex justify-center items-center h-full w-full my-auto">
          <form className="bg-white shadow-lg shadow-gray-500 rounded px-8 pt-6 pb-8 mb-4 w-1/3">
            <div className="text-center font-bold text-4xl">Update User</div>
            <div className="mb-4">
              <label
                className="block text-black  text-sm font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-black text-sm font-bold mb-2"
                htmlFor="username"
              >
                Username
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUserName(e.target.value)}
                required
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-black text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email Address
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <label
              className="block text-black text-sm font-bold mb-2"
              htmlFor="points"
            >
              Points
            </label>
            <div className=" mb-4 w-full flex">
              <select
                className="block appearance-none w-11/12 bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                name="points"
                value={categoryPoint}
                onChange={(e) => setCategoryPoints(e.target.value)}
                required
              >
                <option value="">slelect</option>
                {categoryData.map((getData, index) => (
                  <option key={index} value={getData.categoryPoint}>
                    {getData.category} - {getData.categoryPoint}
                  </option>
                ))}
              </select>
              <div className="w-1/12 ">
                <button className="px-2 py-2">
                  <FaEdit
                    className="text-[25px] text-gray-800"
                    onClick={navigateToAddCategory}
                  />
                </button>
              </div>
            </div>

            <div className="flex justify-center">
              <button
                className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
                onClick={handleUpdate}
              >
                Update
              </button>
              <button
                className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-2"
                type="submit"
                onClick={navigateToShow}
              >
                View Users
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Update;
