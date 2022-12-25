import React from 'react';
import ProductCard from '../component/ProductCard';
import { useProduct } from './../Context/ProductProvider';


const Home = () => {
    const {state:{products,loading,error},dispatch} = useProduct()
    //console.log(products)
 let content;

 if (loading) {
   content = <p>Loading</p>;
 }

 if (error) {
   content = <p>Something went wrong</p>;
 }

 if (!loading && !error && products.length === 0) {
   content = <p>Nothing to show, product list is empty</p>;
 }

 if (!loading && !error && products.length) {
   content = products.map((product) => (
     <ProductCard key={product._id} product={product} dispatch={dispatch} />
   ));
 }

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-10 mx-auto my-10">
        {content}
      </div>
    );
};

export default Home;