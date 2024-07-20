import React from "react";
import { FaCcVisa, FaCcMastercard, FaPaypal, FaCcStripe } from "react-icons/fa";

const FooterComponent = () => {
  return (
    <>
      <section className="min-h-[50px] w-full flex justify-center items-center bg-gray-900">
        <div className=" container grid sm:grid-cols-3 text-white">
          <div className="flex items-center justify-center">
            <p>© Copyright 2024 Gerald Jove. All Rights Reserved</p>
          </div>
          <div className="flex items-center justify-center">
            <h5>
              Prime <span className="underline">Sneaks</span>
            </h5>
          </div>
          <div className="flex items-center justify-center gap-10 text-2xl">
            <FaCcVisa />
            <FaCcMastercard />
            <FaPaypal />
            <FaCcStripe />
          </div>
        </div>
      </section>
    </>
  );
};

export default FooterComponent;
