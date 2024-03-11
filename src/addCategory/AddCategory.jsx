import axios from "axios";
import React, { useState, useEffect } from "react";
import { MdFileDownloadDone } from "react-icons/md";

const AddCategory = () => {
  const [category, setCategory] = useState("");
  const [categoryPoint, setCategoryPoints] = useState( );
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://65ed815f08706c584d99e8af.mockapi.io/category/category", {
        category,
        categoryPoint,
      })
      .then(() => {
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 2000);
        setCategory("");
        setCategoryPoints();
      })
      .catch((error) => {
        console.error("Error adding item:", error);
      });
  };

  return (
    <div className="flex flex-col items-center h-screen bg-white">
      <h1 className="text-4xl font-bold m-4">Add Category</h1>

      <div className="bg-gray-100 p-3 rounded-lg w-1/3">
        <form className="flex flex-col items-center  mb-1">
          <input
            type="text"
            className="border border-gray-800 rounded-md px-4 py-2 mb-4 focus:outline-none w-full shadow-md text-lg"
            placeholder="Add Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          <input
            type="number"
            className="border border-gray-800 rounded-md px-4 py-2 mb-4 focus:outline-none w-full shadow-md text-lg"
            placeholder="Add Points"
            value={categoryPoint}
            onChange={(e) => setCategoryPoints(Number(e.target.value))}
          />
          <button
            className="bg-gray-800 hover:bg-gray-700 text-white font-semibold px-4 py-2 rounded-md focus:outline-none text-lg"
            onClick={handleSubmit}
          >
            Add Category
          </button>
        </form>
      </div>

      {showSuccess && (
        <div class="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
          <div class="bg-white text-black px-6 py-10 rounded-md flex flex-col items-center space-y-2 shadow-md">
            <div class="flex flex-col items-center">
              <MdFileDownloadDone class="text-bold text-6xl text-green-500" />
              <div class="text-2xl font-semibold mt-5">
                Category added successfully...!
              </div>
            </div>
          </div>
        </div>
      )}

      <table className="border border-gray-300 w-1/2 mt-4">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 px-4 py-2 text-[23px] text-center bg-gray-200">
              Category
            </th>
            <th className="border border-gray-300 px-4 py-2 text-[23px] text-center bg-gray-200 ">
              Points
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 px-4 py-2 text-[20px] text-center">
              Category 1
            </td>
            <td className="border border-gray-300 px-4 py-2 text-[20px] text-center">
              10
            </td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </table>
    </div>
  );
};

export default AddCategory;
