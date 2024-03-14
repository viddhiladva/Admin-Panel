import React from "react";

const ProductCard = () => {
  return (
    <div>
      <div className="w-full max-w-sm border rounded-lg shadow-2xl bg-gray-100 ">
        <img
          className="px-5 pt-5 size-80 rounded-t-lg"
          src="https://imgs.search.brave.com/05qyvTyZlfUL-BoLuWDoz6npkpZIhtFkv4JDv2kYSb4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTcx/NTg1NzU2L3Bob3Rv/L3dhdGNoLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz0yQU9a/SEx0ZTU5d1RMS1NK/QnFRbnQzd0c3T3Zq/SzJGQktoTTRWRjdP/Z1hRPQ"
          alt="product image"
        />
        <div className="px-5 py-5">
          <div className="text-xl font-bold tracking-tight text-black">
            Apple Watch Series 7 GPS
          </div>
          <div className="flex justify-between mt-2">
            <div className="text-3xl font-bold text-black mt-1">$599</div>
            <div className="">
              <button className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline mr-1">
                Add to cart
              </button>
              <button className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline">
                View
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
