import React from "react";
import ProductCardComponent from "./ProductCardComponent";

const FeaturedProductsComponent = () => {
  return (
    <>
      <section className="container mx-auto">
        <div className="grid sm:grid-cols-4 gap-4">
          <ProductCardComponent limit={4} />
        </div>
      </section>
    </>
  );
};

export default FeaturedProductsComponent;
