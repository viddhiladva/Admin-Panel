import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "./Slice/ProductSlice";
import Sidebar from "../Admin/Sidebar";
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';
import Navbar from "../Admin/Navbar";

const ShowProduct = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.product);

  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  return (
    <>
      <div className="flex flex-col lg:flex-row bg-gray-200 min-h-screen">
        <Sidebar />
        <div className="flex justify-center items-center h-full w-full my-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-md p-5"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-44 object-cover mb-2 rounded"
                />
                <h2 className="text-2xl font-bold mb-2">{product.title}</h2>
                <p className="text-gray-700 mb-2 text-xl font-semibold">{product.points}</p>
                <p className="text-gray-700 mb-2">{product.description}</p>
                <p className="text-gray-700 mb-2">Category : {product.category}</p>
                <div className="flex justify-end">
                  <button className="bg-green-600 text-white py-2 px-2 rounded mr-2">
                    <AiOutlineEdit className="text-2xl" />
                  </button>
                  <button className="bg-red-500 text-white py-2 px-2 rounded">
                    <AiOutlineDelete className="text-2xl" />
                  </button>
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
