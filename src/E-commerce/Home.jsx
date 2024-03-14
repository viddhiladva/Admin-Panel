import React from "react";
import Navbar from "./Navbar";
import ProductCard from "./ProductCard";

const Home = () => {
  return (
    <>
      <div className=" h-screen bg-gray-200">
        <Navbar />
      <div className="flex justify-evenly items-center mt-5">
        <div className="grid grid-cols-5 gap-3">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        </div>
      </div>
      </div>
    </>
  );
};

export default Home;
