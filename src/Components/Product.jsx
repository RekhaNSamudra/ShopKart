import React, { useContext } from "react";
// import {BsPlus} from 'react-icons'
import { BsPlus } from "react-icons/bs";
import { CartContext } from "../Contexts/CartContext";

const Product = ({ product }) => {
  // console.log("product", product)

  const { id, image, category, title, price } = product;
  const { addToCart } = useContext(CartContext);
  // console.log("cart Context p",useContext(CartContext));

  return (
    <>
      <div>
        <div className="border border-[#e4e4e4] h-[300px] mb-4 overflow-hidden relative group transition">
          <div className="w-full h-full flex justify-center items-center">
            <div className="w-[200px] mx-auto flex justify-center items-center">
              <img
                className="max-h-[160px] group-hover:scale-110 transition duration-300"
                src={image}
              />
            </div>
          </div>
          <div className="absolute top-0 right-0 bg-green-500 hover:bg-green-600 p-2">
            <button onClick={() => addToCart(product)}>
              <div className="flex justify-center items-center text-white w-12 h-12">
                <BsPlus className="text-3xl " />
              </div>
            </button>
          </div>
        </div>
        <div>
          <div className="text-sm capitalize text-gray-400 mb-1 ">
            {category}
          </div>
          <h2 className="font-semibold mb-1">{title}</h2>
          <div className="text-gray-600">$ {price}</div>
        </div>
      </div>
    </>
  );
};

export default Product;
