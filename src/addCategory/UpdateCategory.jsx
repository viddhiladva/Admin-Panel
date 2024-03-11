import React, { useState } from "react";
import { MdFileDownloadDone } from "react-icons/md"; // Assuming you're using React Icons

const UpdateCategory = () => {
  const [category, setCategory] = useState("");
  const [categoryPoint, setCategoryPoints] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = () => {
    // Handle form submission logic
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-800">
      <div className="bg-gray-100 p-8 rounded-lg w-1/3">
        <h1 className="text-2xl font-bold mb-4 text-gray-900 text-center">Update Category</h1>
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
            Update Category
          </button>
        </form>
      </div>

      {/* Pop-up */}
      {showSuccess && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white text-black px-6 py-10 rounded-md flex flex-col items-center space-y-2 shadow-md">
            <MdFileDownloadDone className="text-bold text-6xl text-green-500" />
            <div className="text-2xl font-semibold mt-5">
              Category added successfully...!
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UpdateCategory;
