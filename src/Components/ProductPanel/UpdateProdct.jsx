import{ useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProductById, updateProduct } from "./Slice/ProductSlice";
import { useNavigate, useParams } from "react-router-dom";

const UpdateProduct = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product.product);
  const [Product, setUpdateProduct] = useState({
    image: "",
    title: "",
    description: "",
    points: "",
    category: "",
  });
  const nav = useNavigate();

  useEffect(() => {
    dispatch(fetchProductById(id));
  }, [dispatch, id]);

  useEffect(() => {
    setUpdateProduct(product);
  }, [product]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateProduct(Product));
    console.log("submitted successfully");
    navigateToShow();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdateProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const navigateToShow = () => {
    nav("/ShowProduct");
  };

  return (
    <div>
      <div className="flex flex-col lg:flex-row bg-gray-200 min-h-screen">
        {/* Your Sidebar component */}
        <div className="flex justify-center items-center h-full w-full my-auto">
          <form
            className="bg-white shadow-lg shadow-gray-500 rounded px-8 pt-6 pb-8 mb-4 w-1/2"
            onSubmit={handleSubmit}
          >
            <div className="text-center font-bold text-4xl mb-2">
              Update Product
            </div>
            <div className="mb-4">
              <label className="block text-black  text-sm font-bold mb-2">
                Product Image
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="image"
                placeholder="Product url..."
                value={Product.image}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
                             <label className="block text-black text-sm font-bold mb-2">
                 Product Title
               </label>
               <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="title"
                placeholder="Title"
                value={Product.title}
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
                value={Product.description}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <div className="mb-6">
              <label className="block text-black text-sm font-bold mb-2">
                Point
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="points"
                placeholder="Point"
                value={Product.points}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-black text-sm font-bold mb-2">
                Category
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="category"
                placeholder="Product Category"
                value={Product.category}
                onChange={handleChange}
                required
              />
            </div>
            
            {/*  */}
            <div className="flex justify-center">
              <button
                className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Update
              </button>
              <button
                className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-2"
                type="button"
                onClick={navigateToShow}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProduct;
