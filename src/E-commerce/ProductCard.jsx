import React from "react";

const ProductCard = () => {
  return (
    <div>
      <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <img class="px-8 pt-10 rounded-t-lg" src="https://imgs.search.brave.com/05qyvTyZlfUL-BoLuWDoz6npkpZIhtFkv4JDv2kYSb4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTcx/NTg1NzU2L3Bob3Rv/L3dhdGNoLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz0yQU9a/SEx0ZTU5d1RMS1NK/QnFRbnQzd0c3T3Zq/SzJGQktoTTRWRjdP/Z1hRPQ" alt="product image" />
    <div class="px-5 py-5">
        <div class="text-xl tracking-tight text-white">
            Apple Watch Series 7 GPS
        </div>
        <div class="text-3xl font-bold text-white mt-1">
            $599
        </div>
        <div class="flex justify-between gap-2 mt-4">
            <button class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Add to cart
            </button>
            <button class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                View
            </button>
        </div>
    </div>
</div>

    </div>
  );
};

export default ProductCard;
