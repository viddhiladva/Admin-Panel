import React from 'react';
import Navbar from './Navbar';
import ProductCard from './ProductCard';

const Home = () => {
    return (
        <>
           <Navbar/> 
           <div className='flex justify-evenly items-center mt-2'>
           <ProductCard/>
           </div>
        </>
    );
}

export default Home;
