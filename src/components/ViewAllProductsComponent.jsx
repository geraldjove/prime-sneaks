import React from "react";
import SectionComponent from "./SectionComponent";

const ViewAllProductsComponent = () => {
  return (
    <>
      <SectionComponent>
        <div className="flex justify-center items-center">
          <a href="/shop">
            <button className="border-black border-2 p-3 rounded-lg text-black font-bold uppercase">
              View All Products
            </button>
          </a>
        </div>
      </SectionComponent>
    </>
  );
};

export default ViewAllProductsComponent;
