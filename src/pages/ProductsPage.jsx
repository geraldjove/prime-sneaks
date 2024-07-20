import React from "react";
import ProductCardComponent from "../components/ProductCardComponent";
import SectionComponent from "../components/SectionComponent";

const ProductsPage = () => {
  return (
    <>
      <SectionComponent>
        <div>
          <h1 className="font-black uppercase sm:text-5xl">All Products</h1>
        </div>
        <div className="grid sm:grid-cols-5 gap-4">
          <ProductCardComponent />
        </div>
      </SectionComponent>
    </>
  );
};

export default ProductsPage;
