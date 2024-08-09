import React, { useContext } from "react";
import { IoMdAdd, IoMdClose, IoMdRemove } from "react-icons/io";
import { CartContext } from "../Contexts/CartContext";

const CartItem = ({ item }) => {
  const {removeFromCart, increaseAmount, decreaseAmount} = useContext(CartContext);
  const { id, title, image, price, amount } = item;

  return (
    <>
      <div className="flex text-sm  gap-x-4 py-2 border-b border-gray-200 w-full font-light text-gray-500 lg:px-6">
        <div className="w-full min-h-[150px] flex items-center gap-x-4">
          <div>
            <img className="max-w-[80px]" src={image} />
          </div>
          <div className="flex w-full flex-col">
            <div className="flex justify-between mb-2">
              <div className="text-sm max-w-[200px] text-primary">
                {title}
                </div>
              <div onClick={() => removeFromCart(id)} className="text-gray-500 hover:text-red-500 transition cursor-pointer text-xl">
                <IoMdClose />
              </div>
            </div>
            <div className=" flex gap-x-2 h-[36px]">
              <div className="flex flex-1 items-center max-w-[100px] h-full border text-primary font-medium">
              
                <div onClick={()=> decreaseAmount(id)} className="flex-1 flex justify-center items-center cursor-pointer">
                  <IoMdRemove />
                </div>
                <div className="flex justify-center items-center cursor-pointer h-full px-2"> 
                  {amount}
                </div>
                <div onClick={()=> increaseAmount(id)} className="flex-1 flex justify-center items-center cursor-pointer"> 
                  <IoMdAdd />
                </div>
                </div>
              <div className="flex-1 flex justify-around items-center ">$ {price}</div>
              <div className="flex-1 flex justify-end items-center text-primary font-medium">{`$ ${parseFloat(price * amount).toFixed(2)}`}</div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default CartItem;
