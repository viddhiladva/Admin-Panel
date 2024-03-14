import React, { useEffect } from "react";
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
  const products = useSelector((state) => state.product.product);

  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  const navigateToAddProduct = () => {
    nav("/addProduct");
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      dispatch(deleteProduct(id));
    }
  };

  return (
    <>
      <div className="flex flex-col lg:flex-row bg-gray-200 min-h-screen">
        <Sidebar />
        <div className="w-full px-4 py-2 relative">
          <div className="flex justify-end">
            {/* Add Product Button */}
            <button
              className="bg-gray-800 text-white py-2 px-4 rounded flex justify-end"
              onClick={navigateToAddProduct}
            >
              <BsFillCartPlusFill className="text-2xl" />
            </button>
          </div>
          {/* card */}
          <div className="flex justify-center items-center w-full my-auto relative mt-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 ">
              {products.map((product) => (
                <div key={product.id} className="bg-white rounded-lg shadow-md p-5">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-44 object-cover mb-2 rounded"
                  />
                  <h2 className="text-2xl font-bold mb-2">{product.title}</h2>
                  <p className="text-gray-700 mb-2 text-xl font-semibold">{product.points}</p>
                  <p className="text-gray-700 mb-2">{product.description}</p>
                  <p className="text-gray-700 mb-2">Category : {product.category}</p>
                  <div className="flex justify-end ">
                    <button
                      className="bg-green-600 text-white py-2 px-2 rounded mr-2"
                      onClick={() => {
                        // Handle edit functionality here
                      }}
                    >
                      <AiOutlineEdit className="text-2xl" />
                    </button>
                    <button
                      className="bg-red-500 text-white py-2 px-2 rounded"
                      onClick={() => handleDelete(product.id)}
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