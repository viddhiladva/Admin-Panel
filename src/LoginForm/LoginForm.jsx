import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa6";


const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [error, setError] = useState(false);
  const nav = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const resp = await fetch("http://localhost:3000/admin");
    const data = await resp.json();

    if (username === data[0].Username && password == data[0].Password) {
      nav("/admin");
    } else {
      setError(true);
    }

    setUsername("");
    setPassword("");
    setSelectedOption("");

    setTimeout(() => {
      setError(false);
    }, 2000);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        className="w-1/2 bg-white shadow-lg shadow-gray-500 rounded-lg px-10 py-8 mb-8 text-lg text-black"
        onSubmit={handleSubmit}
      >
        <div className="text-4xl text-center font-bold mb-5">Admin</div>
        <div className="mb-6">
          <div className="flex items-center">
            <FaUser className="mr-2" />
            <label
              className="text-black mb-2 text-xl"
              htmlFor="username"
            >
              Username
            </label>
          </div>
          <input
            className="shadow shadow-gray-300 appearance-none border rounded-lg w-full py-3 px-4 text-lg leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder= "Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <div className="flex items-center">
            <FaLock  className="mr-2" />
            <label
              className="block text-black mb-2 text-xl"
              htmlFor="username"
            >
              Password
            </label>
          </div>

          <input
            className="shadow shadow-gray-300  appearance-none border rounded-lg w-full py-3 px-4 text-lg text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {/* <div className="mb-6">
          <label className="block font-bold mb-2 text-xl" htmlFor="dropdown">
            Select a Role...
          </label>
          <select
            className="shadow shadow-gray-300  appearance-none border rounded-lg w-full py-3 px-4 text-lg text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
          >
            <option value="">Role...</option>
            <option value="Admin">Admin</option>
            <option value="HR">HR</option>
          </select>
        </div> */}
        <div className="flex items-center justify-center">
          <button
            className="bg-gray-800 hover:bg-gray-900 text-white  py-3 px-6 rounded-lg focus:outline-none focus:shadow-outline text-xl"
            type="submit"
          >
            Login
          </button>
        </div>
        <p className="text-red-500 text-center">
          {error ? "Invalid Username or Password" : ""}
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
