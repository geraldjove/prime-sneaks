import React, { useState, useEffect, useContext } from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import UserContext from "../UserContext";

const Hero = () => {
  const { shoes } = useContext(UserContext);
  const [val, setVal] = useState(0);

  useEffect(() => {
    shoes.map((shoe) => shoe);
  }, []);

  const handleNext = () => {
    setVal((prevVal) => (prevVal < shoes.length - 1 ? prevVal + 1 : 0));
  };

  const handlePrevious = () => {
    setVal((prevVal) => (prevVal > 0 ? prevVal - 1 : shoes.length - 1));
  };

  return (
    <section className="min-h-[100vh] bg-background flex justify-center items-center">
      <div className="container mx-auto flex justify-center items-center">
        <div className="sm:text-3xl text-gray-200 me-auto">
          <button onClick={handlePrevious} className="sm:block hidden">
            <FaArrowAltCircleLeft />
          </button>
        </div>
        <div>
          <div className="flex justify-start items-center">
            <div className="relative">
              <h1 className="sm:text-[15em] text-[5rem] font-black">sneaker</h1>
            </div>
            <div className="sm:absolute sm:block hidden">
              {shoes.slice(val, val + 1).map((shoe) => (
                <img
                  key={shoe.id}
                  src={shoe.main_picture_url}
                  alt="shop"
                  className="rotate-[-30deg] scale-x-[-1] drop-shadow-xl z-10"
                />
              ))}
            </div>
            <div className="z-20 absolute">
              <h1 className="sm:text-[15em] sm:block hidden text-cyan-600 font-black">
                snea.
              </h1>
            </div>
          </div>
        </div>
        <div className="sm:text-3xl text-gray-200 ms-auto">
          <button onClick={handleNext}>
            <FaArrowAltCircleRight className="sm:block hidden" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
