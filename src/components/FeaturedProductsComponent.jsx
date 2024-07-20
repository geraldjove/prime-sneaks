import React from "react";
import ProductCardComponent from "./ProductCardComponent";

const FeaturedProductsComponent = () => {
  return (
    <>
      <section className="container mx-auto">
        <div className="flex justify-center items-center gap-4">
          <ProductCardComponent limit={5} />
        </div>
      </section>
    </>
  );
};

export default FeaturedProductsComponent;
