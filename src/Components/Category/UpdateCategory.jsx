import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../Admin/Sidebar";

const UpdateCategory = () => {
    const [id,setId] = useState(0);
  const [category, setCategory] = useState("");
  const [categoryPoint, setCategoryPoints] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
    .put(`https://65ed815f08706c584d99e8af.mockapi.io/category/category/${id}`,{
        category,
        categoryPoint
    })
    .then(()=>{
        navigate('/addCategory');
    })  
  };

  useEffect(() => {
    setId(localStorage.getItem("id"));
    setCategory(localStorage.getItem("category"));
    setCategoryPoints(localStorage.getItem("categoryPoint"));
  }, []);


  return (
    <>
    <div className="flex flex-col lg:flex-row min-h-screen">
      <Sidebar/>
    <div className="flex justify-center items-center h-screen bg-white w-full">
      <div className="bg-gray-200 p-8 rounded-lg w-1/3 mt-2">
        <h1 className="text-3xl font-bold mb-4 text-gray-900 text-center">Update Category</h1>
        <form className="flex flex-col items-center space-y-4">
          <input
            type="text"
            className="border rounded-md px-4 py-2 focus:outline-none w-full shadow-md text-lg"
            placeholder="Add Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          <input
            type="number"
            className="border rounded-md px-4 py-2 focus:outline-none w-full shadow-md text-lg"
            placeholder="Add Points"
            value={categoryPoint}
            onChange={(e) => setCategoryPoints(e.target.value)}
          />
          <button
            className="bg-gray-800 hover:bg-gray-700 text-white font-semibold px-4 py-2 rounded-md focus:outline-none text-lg"
            onClick={handleSubmit}
          >
            Update
          </button>
        </form>
      </div>
 
    </div>
    </div>
  
    </>
   
  );
};

export default UpdateCategory;
