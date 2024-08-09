import React, { useContext, useEffect, useState } from "react";
import { SidebarContext } from "../Contexts/SidebarContext";
import { BsBag } from "react-icons/bs";
import { CartContext } from "../Contexts/CartContext";
import { Link } from "react-router-dom";
import Logo from "../img/logo.svg";

const Header = () => {
  //header state

  const [headerActive, setHeaderActive] = useState(false);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 60 ? setHeaderActive(true) : setHeaderActive(false);
    })
  })

  return (
    <>
      <div className={`${headerActive ? 'bg-white py-4 shadow-md'  : 'bg-none py-6'} fixed w-full z-10 transition-all` }>
        <div className='container flex mx-auto justify-between items-center h-full'>
          <Link to="/">
            <div className="ml-5"> 
              <img className="w-[40px]" src={Logo} alt="" />
            </div>
          </Link>
        

        <div
          className="cursor-pointer mr-8 flex relative"
          onClick={() => setIsOpen(!isOpen)}
        >
          {/* open / close sidebar */}
          <BsBag className="text-2xl" />
          <div className="bg-red-500 text-[12px] flex justify-center items-center text-white w-[18px] h-[18px] rounded-full absolute -right-2 -bottom-2  ">
            {" "}
            {itemAmount}
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Header;
