import React, { useState, useEffect, useContext } from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import UserContext from "../UserContext";

const Hero = () => {
  const { shoes } = useContext(UserContext);
  const [val, setVal] = useState(0);

  // Ensure `shoes` is an array
  const isArray = Array.isArray(shoes);

  return (
    <section className="min-h-[100vh] bg-background flex justify-center items-center">
      <div className="container mx-auto flex justify-center items-center">
        <div>
          <div className="flex justify-start items-center">
            <div className="relative">
              <h1 className="sm:text-[15em] text-[5rem] font-black">sneaks</h1>
            </div>
            <div className="sm:absolute sm:block hidden">
              <img
                src="https://image.goat.com/750/attachments/product_template_pictures/images/011/119/994/original/218099_00.png.png"
                alt="shop"
                className="rotate-[-30deg] scale-x-[-1] drop-shadow-xl z-10"
              />
            </div>
            <div className="z-20 absolute">
              <h1 className="sm:text-[15em] sm:block hidden text-cyan-600 font-black">
                snea.
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
