import React, { useState } from "react";
import Sidebar from "../Admin/Sidebar";
import { useDispatch } from "react-redux";
import { addProduct } from "./Slice/ProductSlice";

const AddProduct = () => {
  const dispatch = useDispatch();
  const [product,setProduct] = useState({
    image : '',
    title : '',
    description : '',
    points : '',
    category : '',
  });

  const handleChange = (e) =>{
    const {name,value} = e.target;
    setProduct((prevProduct) =>({
      ...prevProduct,
      [name] : value,
    }));
  };
  
  const handelSubmit = (e) =>{
    e.preventDefault();
    dispatch(addProduct(product));
    setProduct({
      image : '',
      title : '',
      description : '',
      points : '',
      category : '',
    });
    
    console.log(product);
  };


  return (
    <>
      <div className="flex flex-col lg:flex-row bg-gray-200 min-h-screen">
        <Sidebar />
        <div className="flex justify-center items-center h-full w-full my-auto">
          <form className="bg-white shadow-lg shadow-gray-500 rounded px-8 pt-6 pb-8 mb-4 w-1/2" onSubmit={handelSubmit}>
            <div className="text-center font-bold text-4xl mb-2">
              Add Product
            </div>
            <div className="mb-4">
              <label
                className="block text-black  text-sm font-bold mb-2"
              >
                Product Image
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="image"
                placeholder="Product url..."
                value={product.image}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-black text-sm font-bold mb-2"
              >
                Product Title
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="title"
                placeholder="Title"
                value={product.title}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-black text-sm font-bold mb-2">
                Product Description
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Description of Product"
                  name="description"
                value={product.description}
                onChange={handleChange}
                required
              ></textarea>
            </div>  
            <div className="mb-6">
              <label
                className="block text-black text-sm font-bold mb-2"
              >
                Point
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="points"
                placeholder="Point"
                value={product.points}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-black text-sm font-bold mb-2"
              >
                Category
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="category"
                placeholder="Product Category"
                value={product.category}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex justify-center">
              <button
                className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Submit
              </button>
              {/* <button
                className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-2"
                type="submit"
                // onClick={navigateToShow}
              >
                View Users
              </button> */}
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddProduct;
