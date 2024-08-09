import React from "react";
import WomenImg from "../img/woman_hero.png";

const Hero = () => {
  return (
    <>
      <section className="bg-pink-200 h-[600px] bg-hero bg-no-repeat bg-cover bg-center py-24">
        <div className="container mx-auto flex justify-around h-full">
          <div className="flex flex-col justify-center ">
            <div className="font-semibold flex flex-col uppercase">
              <div className="flex flex-row">
                <div className="h-[2px] bg-red-500 w-10 mt-3 mx-3"></div>
                <p>New Trends</p>
              </div>
              <h1 className="text-[50px] leading-[1.1] font-light">
                AUTUMN STYLISH
              </h1>
              <h1 className="font-bold text-[100px] text-red-500">SALE</h1>
              <br />
            </div>
          </div>
          <div className="hidden lg:block mr-10 ">
            <img className="h-[500px]" src={WomenImg} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
