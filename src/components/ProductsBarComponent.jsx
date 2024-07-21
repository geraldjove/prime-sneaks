import React from "react";
import ProductBarComponent from "../components/ProductBarComponent";

const ProductsBarComponent = ({ shoes }) => {
  return (
    <div className="border-2 rounded-lg overflow-auto min-h-[100vh] max-h-[100vh]">
      {shoes.map((shoe, index) => (
        <ProductBarComponent shoe={shoe} index={index} key={index} />
      ))}
    </div>
  );
};

export default ProductsBarComponent;
