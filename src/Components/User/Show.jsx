import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { HiUserAdd } from "react-icons/hi";
import { useNavigate, Link } from "react-router-dom";
import Sidebar from "../Admin/Sidebar";

const Show = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(9);
  const navigation = useNavigate();

  const navigateToHome = () => {
    navigation("/admin  ");
  };

  const navigateToAddUser = () => {
    navigation("/adduser");
  };

  useEffect(() => {
    getData();
  }, []);

  function getData() {
    axios
      .get("https://65e94d454bb72f0a9c511b56.mockapi.io/user/user")
      .then((resp) => {
        setData(resp.data);
      });
  }
  const handleDelete = (id) => {
    axios
      .delete(`https://65e94d454bb72f0a9c511b56.mockapi.io/user/user/${id}`)
      .then(() => getData());
  };

  const toLocalstorage = (id, name, username, email, categoryData) => {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("username", username);
    localStorage.setItem("email", email);
    localStorage.setItem("categoryData", categoryData);
  };

  // Logic for pagination
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
    <div className="flex flex-col lg:flex-row min-h-screen">
      <Sidebar/>
    <div className="container mx-auto">
      <div className="flex justify-between">
        <div className="mt-3 font-semibold text-left text-4xl text-gray-900">
          User Data...
        </div>
        <div className="flex flex-row-reverse">
          <button
            className="bg-gray-900 hover:bg-gray-700 text-white font-bold py-0 px-4 mt-3 rounded-lg ml-2"
            onClick={navigateToAddUser}
          >
            <HiUserAdd className="text-xl" />
          </button>
        </div>
      </div>

      <div className=" overflow-auto w-full">
        <table className="min-w-full divide-y divide-gray-200 shadow-xl my-6 border">
          <thead>
            <tr className=" text-left bg-gray-200 text-black">
              <th className="py-3 px-6 text-center text-[23px]">Name</th>
              <th className="py-3 px-6 text-center text-[23px]">Username</th>
              <th className="py-3 px-6 text-center text-[23px]">Email</th>
              <th className="py-3 px-6 text-center text-[23px]">Points</th>
              <th className="py-3 px-6 text-center text-[23px]">Update</th>
              <th className="py-3 px-6 text-center text-[23px]">Delete</th>
            </tr>
          </thead>
          {currentItems.map((alldata) => (
            <tbody className="text-black" key={alldata.id}>
              <tr>
                <td className="py-3 px-6 text-center text-[20px]">
                  {alldata.name}
                </td>
                <td className="py-3 px-6 text-center text-[20px]">
                  {alldata.username}
                </td>
                <td className="py-3 px-6 text-center text-[20px]">
                  {alldata.email}
                </td>
                <td className="py-3 px-6 text-center font-bold text-gray-700 text-[20px]">
                  {alldata.categoryData}
                </td>
                <td className="py-3 px-2 text-center w-12">
                  <Link
                    to="/update"
                    className="flex justify-center items-center"
                    onClick={() => {
                      toLocalstorage(
                        alldata.id,
                        alldata.name,
                        alldata.username,
                        alldata.email,
                        alldata.categoryData
                      );
                    }}
                  >
                    <FaRegEdit className="text-green-600 text-[20px]" />
                  </Link>
                </td>
                <td className="py-3 px-2 text-center w-12">
                  <div className="flex justify-center items-center">
                    <MdDeleteForever
                      className="text-red-600 text-[23px]"
                      onClick={() => handleDelete(alldata.id)}
                    />
                  </div>
                </td>
              </tr>
            </tbody>
          ))}
        </table>

        {/* Pagination */}
        <ul className="flex justify-center">
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
    </div>
  </div>
  );
};

export default Show;
