import React from "react";

const ProductCard = () => {
  return (
    <div>
      <div className="w-full max-w-sm border rounded-lg shadow-2xl bg-gray-100 ">
        <img
          className="px-5 pt-5 size-80 rounded-t-lg"
          src="https://imgs.search.brave.com/iO6rdLi3I3JOf2sF4qPilnIpcK1tQU8mxvDFY5duu6w/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cy5h/c3RyaWRhbmRtaXl1/LmNvbS9jZG4vc2hv/cC9wcm9kdWN0cy9B/TTIyLVE0RDEtTi1P/UkItQ1JZUy1SRy5q/cGc_dj0xNjY0ODc1/ODg2JndpZHRoPTY0/NA"
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
