import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Update = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [points, setPoints] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setId(localStorage.getItem("id"));
    setName(localStorage.getItem("name"));
    setUserName(localStorage.getItem("username"));
    setEmail(localStorage.getItem("email"));
    setPoints(localStorage.getItem("points"));
  }, []);

  const navigateToShow = () => {
    navigate("/show");
  };
  

  const handleUpdate = (e) => {
    e.preventDefault();
  
    // Parse the selected value to integer
    const newPoints = parseInt(points);
  
    // Retrieve the previously selected points from localStorage
    const prevPoints = parseInt(localStorage.getItem("points"));
    
    // Calculate the total points by adding previously selected points with new points
    const totalPoints = prevPoints + newPoints;
    
    axios
    .put(`https://65e94d454bb72f0a9c511b56.mockapi.io/user/user/${id}`, {
      id,
      name,
      username,
      email,
      points: totalPoints, // Use the total points here
    })
    .then(() => {
      navigate("/show");
    });
  };
  
  return (
    <>
      <div className="flex justify-center items-center h-screen bg-gray-800">
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
          <div className="mb-4">
            <label
              className="block text-black text-sm font-bold mb-2"
              htmlFor="points"
            >
              Points
            </label>
            <select
              className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
              id="points"
              name="points"
              value={points}
              onChange={(e) => setPoints(e.target.value)}
              required
            >
              <option value="">Select</option>
              <option value="300">Birthday</option>
              <option value="500">Game Winner</option>
              <option value="1000">Employee of the Month</option>
              <option value="2000">Year Anniversary</option>
              <option value="5000">Three Year Anniversary</option>
            </select>
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
    </>
  );
};

export default Update;
