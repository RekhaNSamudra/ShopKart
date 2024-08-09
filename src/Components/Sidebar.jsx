import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { SidebarContext } from "../Contexts/SidebarContext";
import { IoMdArrowForward } from "react-icons/io";
import { CartContext } from "../Contexts/CartContext";
import CartItem from "./CartItem";
import { FiTrash2 } from "react-icons/fi";

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
  const { cart, clearCart, total, itemAmount } = useContext(CartContext);
  const navigate = useNavigate();

  const handleCheckout = () => {
    if (cart.length === 0) {
      return;
    }

    clearCart();
    handleClose(); // Close the sidebar
    navigate("/checkout");
  };

  return (
    <>
      <div
        className={` ${
          isOpen ? "right-0" : "-right-full"
        } w-full bg-white h-full fixed top-0 shadow-2xl md:w-[30vw] xl:max-w-[30vw] lg:px-[35px] transition-all duration-300 z-20 px-4`}
      >
        {" "}
        <div className="flex items-center py-6 justify-between border-b ">
          <div className="uppercase text-sm font-semibold  ">
            Shopping Bag (<span className="text-red-500 ">{itemAmount}</span>)
          </div>
          <div className="cursor-pointer w-8 h-8" onClick={handleClose}>
            <IoMdArrowForward className="text-2xl" />
          </div>
        </div>
        <div className="flex flex-col gap-y-2 h-[400px] lg:h-[500px] border-b overflow-y-auto overfflow-x-hidden ">
          {cart.length === 0 ? (
            <div className="flex flex-col justify-center items-center h-full text-gray-500">
              <p>Your cart is empty...</p>
              <p>Please add items to checkout</p>
            </div>
          ) : (
            cart.map((item) => <CartItem key={item.id} item={item} />)
          )}
        </div>
        <div className="flex flex-col gap-y-3 py-4 ">
          <div className="flex justify-between w-full items-center">
            <div className="uppercase font-semibold ">
              <span className="mr-2 ">Total:</span> ${" "}
              {parseFloat(total).toFixed(2)}
            </div>
            <div
              onClick={() => clearCart()}
              className="cursor-pointer py-4 bg-red-500 text-white w-12 h-12 flex justify-center items-center text-xl"
            >
              <FiTrash2 />
            </div>
          </div>
          <div
            onClick={handleCheckout}
            className="bg-gray-500 text-white text-center py-3 font-semibold text-lg uppercase rounded-md hover:bg-green-600 transition-all duration-300 cursor-pointer"
          >
            Checkout
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
