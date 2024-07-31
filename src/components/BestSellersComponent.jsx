import React from "react";
import ProductCardComponent from "./ProductCardComponent";
import TopProductCardComponent from "./TopProductCardComponent";

const BestSellersComponent = () => {
  return (
    <>
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="min-h-[50px]">
          <TopProductCardComponent limit={1} />
        </div>
        <div className=" min-h-[50px] grid sm:grid-cols-3 sm:grid-rows-2 gap-4">
          <ProductCardComponent limit={6} />
        </div>
      </div>
    </>
  );
};

export default BestSellersComponent;
