import React from "react";
import Navbar from "./Navbar";
import ProductCard from "./ProductCard";

const Home = () => {
  return (
    <>
      <div className=" h-screen bg-gray-200">
        <Navbar />
      <div className="flex justify-evenly items-center mt-2">
        <ProductCard />
      </div>
      </div>
    </>
  );
};

export default Home;
