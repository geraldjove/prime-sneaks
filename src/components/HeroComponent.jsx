import React from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import shoesData from "../../api.json";

console.log(shoesData);

const Hero = () => {
  return (
    <>
      <section className="min-h-[100vh] bg-background flex justify-center items-center">
        <div className="container mx-auto flex justify-center items-center">
          <div className="text-3xl text-gray-200 me-auto">
            <FaArrowAltCircleLeft />
          </div>
          <div>
            <div className=" flex justify-start items-center">
              <div className="relative ">
                <h1 className="text-[15em] font-black">sneaker</h1>
              </div>
              <div className=" absolute">
                <img
                  src="https://png.pngtree.com/png-vector/20240125/ourmid/pngtree-white-sneaker-png-file-png-image_11492156.png"
                  alt="shop"
                  className="min-w-[850px] rotate-[-30deg] drop-shadow-xl z-10"
                />
              </div>
              <div className="z-20 absolute">
                <h1 className="text-[15em] text-cyan-600 font-black">snea.</h1>
              </div>
            </div>
          </div>
          <div className="text-3xl text-gray-200 ms-auto">
            <FaArrowAltCircleRight />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
