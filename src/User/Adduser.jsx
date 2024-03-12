import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Slide, toast } from "react-toastify";
import { MdOutlinePlaylistAdd } from "react-icons/md";
import Sidebar from "../Admin/Sidebar";

const Adduser = () => {
  const [name, setName] = useState("");
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [categoryPoint, setCategoryPoints] = useState(0);
  const [categoryData, setCategoryData] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!name || !username || !email || !categoryPoint) {
        alert("Please enter all the details.");
        return;
      }
      
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
      return;
    }

    axios
    .post("https://65e94d454bb72f0a9c511b56.mockapi.io/user/user", {
      name,
      username,
      email,
      categoryData : Number(categoryPoint),
      })
      .then(() => {
        navigate("/show");
      })
      .catch((error) => {
        console.error("Error adding user:", error);
        toast.error("Error adding user. Please try again later.");
      });
      
      localStorage.setItem("categoryData", categoryData);

    setName("");
    setUserName("");
    setEmail("");
    setCategoryPoints("");
  };

  useEffect(() => {
    axios
      .get("https://65ed815f08706c584d99e8af.mockapi.io/category/category")
      .then((resp) => {
        setCategoryData(resp.data);
      });
  }, []);

  const navigateToShow = () => {
    navigate("/show");
  };

  const navigateToAddCategory = () =>{
    navigate('/addCategory')
  }

  return (
    <>
      <div className="flex flex-col  lg:flex-row bg-gray-200 min-h-screen">
        <Sidebar/>
      <div className="flex justify-center items-center h-full w-full my-auto">
        <form className="bg-white shadow-lg shadow-gray-500 rounded px-8 pt-6 pb-8 mb-4 w-1/3">
          <div className="text-center font-bold text-4xl">Add User</div>
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
              id="points"
              name="points"
              value={categoryPoint}
              onChange={(e) => setCategoryPoints(e.target.value)}
              required
            >
              <option value="">select</option>
              {categoryData.map((getData, index) => (
                <option key={index} value={getData.categoryPoint}>
                  {getData.category} - {getData.categoryPoint}
                </option>
              ))}
            </select>
            <div className="w-1/12 ml-6">
              <button className="bg-gray-800 hover:bg-gray-700 text-white font-bold px-3 py-2 rounded-lg ml-2 float-end">
                <MdOutlinePlaylistAdd  className="text-[25px]" onClick={navigateToAddCategory}/>
              </button>
            </div>
          </div>

          <div className="flex justify-center">
            <button
              className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
              onClick={handleSubmit}
            >
              Submit
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

export default Adduser;
