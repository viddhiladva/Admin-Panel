import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, fetchProduct } from "./Slice/ProductSlice";
import Sidebar from "../Admin/Sidebar";
import { BsFillCartPlusFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import Coin from "../../Assets/Coin.jpg";

const ShowProduct = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const product = useSelector((state) => state.product.product);
  // console.log("..........product",product);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const cardRef = useRef(null);

  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = product.slice(indexOfFirstProduct,indexOfLastProduct);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const nextPage = () => setCurrentPage((nextPage) => nextPage + 1);
  const prevPage = () => setCurrentPage((prevPage) => prevPage - 1);

  const navigateToAddProduct = () => {
    nav("/addProduct");
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      dispatch(deleteProduct(id));
    }
  };

  const handleUpdate = (id) => {
    nav(`/updateProduct/${id}`);
  };

  const toggleDropdown = (id) => {
    setDropdownOpen((prevId) => (prevId === id ? null : id));
  };

  const closeDropdown = (e) => {
    if (!cardRef.current.contains(e.target)) {
      setDropdownOpen(null);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", closeDropdown);
    return () => {
      document.removeEventListener("mousedown", closeDropdown);
    };
  }, []);

  return (
    <>
      <div className="flex flex-col lg:flex-row bg-gray-200 min-h-screen">
        <Sidebar />
        <div className="w-full px-4 py-2 relative">
          {/* pagination */}
          <div className="flex justify-between items-center mb-4">
            <button
              className="bg-gray-800 text-white py-4 px-4 rounded flex justify-end"
              onClick={navigateToAddProduct}
            >
              Add Product
              <BsFillCartPlusFill className="text-2xl ml-2" />
            </button>
            <div className="flex">
              <button
                onClick={prevPage}
                disabled={currentPage === 1}
                className="bg-gray-500 text-white py-2 px-4 rounded mx-1"
              >
                Previous
              </button>
              {Array.from({
                length: Math.ceil(product.length / productsPerPage),
              }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => paginate(index + 1)}
                  className={`bg-gray-500 text-white py-2 px-4 rounded mx-1 ${
                    currentPage === index + 1 ? "bg-gray-800" : ""
                  }`}
                >
                  {index + 1}
                </button>
              ))}
              <button
                onClick={nextPage}
                disabled={indexOfLastProduct >= product.length}
                className="bg-gray-500 text-white py-2 px-4 rounded mx-1"
              >
                Next
              </button>
            </div>
          </div>

          {/* card */}
          <div
            ref={cardRef}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
          >
            {currentProducts.map((pro) => (
              <div
                key={pro.id}
                className="relative w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-md transform transition duration-300  hover:scale-105"
              >
                <div className="flex justify-end px-4 pt-3">
                  <button
                    onClick={() => toggleDropdown(pro.id)}
                    className="inline-block text-gray-500 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg text-sm p-1.5"
                    type="button"
                  >
                    <span className="sr-only">Open dropdown</span>
                    <svg
                      className="w-5 h-5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 16 3"
                    >
                      <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                    </svg>
                  </button>

                  {/* Dropdown menu */}
                  {dropdownOpen === pro.id && (
                    <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 divide-y divide-gray-100 rounded-lg shadow">
                      <ul className="py-1">
                        <li>
                          <div
                            onClick={() => handleUpdate(pro.id)}
                            className="block px-4 py-2 text-md text-green-600 hover:bg-gray-100 cursor-pointer"
                          >
                            Edit
                          </div>
                        </li>
                        <li>
                          <div
                            onClick={() => handleDelete(pro.id)}
                            className="block px-4 py-2 text-md text-red-600 hover:bg-gray-100 cursor-pointer"
                          >
                            Delete
                          </div>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
                <div className="flex flex-col items-center pb-7">
                  <div className="py-3 px-3 w-full overflow-hidden">
                    <img
                      src={pro.image}
                      alt={pro.title}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <h5 className="mb-1 mt-1 text-xl  font-bold text-gray-900">
                    {pro.title}
                  </h5>
                  <div className="flex items-center">
                    <img src={Coin} alt="Coin" className="w-5 mr-2" />
                    <p className="text-2xl font-bold text-gray-500">
                      {pro.points}
                    </p>
                  </div>
                  <p className="text-md  text-gray-500">
                    Category: {pro.category}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowProduct;
