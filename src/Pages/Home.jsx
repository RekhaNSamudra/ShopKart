import React, { useContext } from "react";
import { ProductContext } from "../Contexts/ProductContext";
import Product from "../Components/Product";
import Hero from "../Components/Hero";

const Home = () => {
  const products = useContext(ProductContext);
  console.log("prods", products);

  const filteredProducts = products.filter((item) => {
    return (
      item.category === "men's clothing" || item.category === "women's clothing"
    );
  });

  console.log("first", filteredProducts);

  return (
    <>
      <Hero />
      <section className="py-16 ">
        {products && products.length > 0 ? (
          <div className="container m-auto">
            <div className="grid mx-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-[30px]">
              {filteredProducts.map((product) => {
                return <Product key={product.id} product={product} />;
              })}
            </div>
          </div>
        ) : (
          <div className="flex justify-center items-center">
            <h1 className="text-4xl font-bold">Loading...</h1>
          </div>
        )}
      </section>
    </>
  );
};

export default Home;
