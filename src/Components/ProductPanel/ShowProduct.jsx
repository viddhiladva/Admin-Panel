import React, { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, fetchProduct } from "./Slice/ProductSlice";
import Sidebar from "../Admin/Sidebar";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { BsFillCartPlusFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const ShowProduct = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const product = useSelector((state) => state.product.product);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;

  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = product.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const navigateToAddProduct = () => {
    nav("/addProduct");
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      dispatch(deleteProduct(id));
    }
  };

  const handeUpdate = (id) =>{
    nav(`/updateProduct/${id}`)
  }

  return (
    <>
      <div className="flex flex-col lg:flex-row bg-gray-200 min-h-screen">
        <Sidebar />
        <div className="w-full px-4 py-2 relative">
          <div className="flex justify-between items-center mb-4">
            <button
              className="bg-gray-800 text-white py-2 px-4 rounded flex justify-end"
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
              {Array.from({ length: Math.ceil(product.length / productsPerPage) }).map(
                (_, index) => (
                  <button
                    key={index}
                    onClick={() => paginate(index + 1)}
                    className={`bg-gray-500 text-white py-2 px-4 rounded mx-1 ${
                      currentPage === index + 1 ? "bg-gray-800" : ""
                    }`}
                  >
                    {index + 1}
                  </button>
                )
              )}
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
          <div className="flex justify-center items-center w-full my-auto relative mt-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 ">
              {currentProducts.map((pro) => (
                <div key={pro.id} className="bg-white rounded-lg shadow-md p-5">
                  <img
                    src={pro.image}
                    alt={pro.title}
                    className="w-full h-44 object-cover mb-2 rounded"
                  />
                  <h2 className="text-2xl font-bold mb-2">{pro.title}</h2>
                  <p className="text-gray-700 mb-2 text-xl font-semibold">{pro.points}</p>
                  <p className="text-gray-700 mb-2">{pro.description}</p>
                  <p className="text-gray-700 mb-2">Category : {pro.category}</p>
                  <div className="flex justify-end ">
                    <button
                      className="bg-green-600 text-white py-2 px-2 rounded mr-2"
                      onClick={() => handeUpdate(pro.id)}
                    >
                      <AiOutlineEdit className="text-2xl" />
                    </button>
                    <button
                      className="bg-red-500 text-white py-2 px-2 rounded"
                      onClick={() => handleDelete(pro.id)}
                    >
                      <AiOutlineDelete className="text-2xl" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


export default ShowProduct; 