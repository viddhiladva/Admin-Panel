import axios from "axios";
import React, { useState, useEffect } from "react";
import { FaRegEdit } from "react-icons/fa";
import { MdFileDownloadDone, MdDeleteForever } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";

const AddCategory = () => {
  const [category, setCategory] = useState("");
  const [categoryPoint, setCategoryPoints] = useState();
  const [showSuccess, setShowSuccess] = useState(false);
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(9);

  const navigate = useNavigate();

  const toLocalStorage = (id, category,categoryPoint ) => {
    localStorage.setItem("id", id);
    localStorage.setItem("category", category);
    localStorage.setItem("categoryPoint", categoryPoint);
  };

  // add data
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://65ed815f08706c584d99e8af.mockapi.io/category/category", {
        category,
        categoryPoint,
      })
      .then(() => {
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 1000);
        setCategory("");
        setCategoryPoints(); 
        fetchData();
      })
      .catch((error) => {
        console.error("Error adding item:", error);
      });
  };

  // display data
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://65ed815f08706c584d99e8af.mockapi.io/category/category"
      );
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // deleted data
  const deleteData = (id) => {
    axios
      .delete(
        `https://65ed815f08706c584d99e8af.mockapi.io/category/category/${id}`
      )
      .then(() => fetchData(id));
  };

  // logic for pagination
  const totalItems = data.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const renderPagination = () => {
    const pagination = [];
    for (let i = 1; i <= totalPages; i++) {
      pagination.push(
        <li
          key={i}
          className={`mx-1 px-3 py-1 border rounded-lg bg-gray-300 ${
            currentPage === i ? "font-bold" : ""
          }`}
        >
          <button onClick={() => paginate(i)} className="focus:outline-none">
            {i}
          </button>
        </li>
      );
    }
    return pagination;
  };
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="flex flex-col items-center h-screen bg-white">

      {/* add data */}
      <div className="bg-gray-200 p-3 px-5 rounded-lg w-1/3 mt-4">
        <form className="flex flex-col items-center mb-1">
      <h1 className="text-3xl font-bold m-4">Add Category</h1>
          <input
            type="text"
            className="border rounded-md px-4 py-2 mb-4 focus:outline-none w-full shadow-md text-lg"
            placeholder="Add Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          <input
            type="number"
            className="border  rounded-md px-4 py-2 mb-4 focus:outline-none w-full shadow-md text-lg"
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

      {/* pop-up */}
      {showSuccess && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white text-black px-6 py-10 rounded-md flex flex-col items-center space-y-2 shadow-md">
            <div className="flex flex-col items-center">
              <MdFileDownloadDone className="text-bold text-6xl text-green-500" />
              <div className="text-2xl font-semibold mt-5">
                Category added successfully...!
              </div>
            </div>
          </div>
        </div>
      )}

      {/* show data */}
      <table className="border border-gray-300 w-1/2 mt-4">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 px-4 py-2 text-[20px] text-center bg-gray-200">
              Category
            </th>
            <th className="border border-gray-300 px-4 py-2 text-[20px] text-center bg-gray-200 ">
              Points
            </th>
            <th className="border border-gray-300 px-4 py-2 text-[20px] text-center bg-gray-200 ">
              Update
            </th>
            <th className="border border-gray-300 px-4 py-2 text-[20px] text-center bg-gray-200 ">
              Delete
            </th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((eachData, i) => (
            <tr key={i}>
              <td className="border border-gray-300 px-4 py-2 text-[18px] text-center">
                {eachData.category}
              </td>
              <td className="border border-gray-300 px-4 py-2 text-[18px] text-center font-bold text-gray-700">
                {eachData.categoryPoint}
              </td>
              <td className="border  border-gray-300 px-2 py-2 text-[18px] text-center w-12">
                <div className="flex justify-center items-center">
                  <Link to="/updateCategory">
                  <FaRegEdit
                    className="text-green-600 text-[20px]"
                    onClick={() =>{
                      toLocalStorage(
                        eachData.id,
                        eachData.category,
                        eachData.categoryPoint
                      )
                    }}
                    />
                    </Link>
                </div>
              </td>
              <td className="border  border-gray-300 px-2 py-2 text-[18px] text-center w-12">
                <div className="flex justify-center items-center">
                <MdDeleteForever
                      className="text-red-600 text-[23px]"
                      onClick={() => deleteData(eachData.id)}
                    />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* pagination */}
      <ul className="flex justify-center mt-3">
        {currentPage > 1 && (
          <li className="mx-1 px-3 py-1 border rounded-lg bg-gray-300 font-semibold">
            <button
              onClick={() => paginate(currentPage - 1)}
              className="focus:outline-none"
            >
              Previous
            </button>
          </li>
        )}
        {renderPagination()}
        {currentPage < totalPages && (
          <li className="mx-1 px-3 py-1 border rounded-lg bg-gray-300 font-semibold">
            <button
              onClick={() => paginate(currentPage + 1)}
              className="focus:outline-none"
            >
              Next
            </button>
          </li>
        )}
      </ul>
    </div>
  );
};

export default AddCategory;
