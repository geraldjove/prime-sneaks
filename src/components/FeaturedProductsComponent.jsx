import React, { useContext, useEffect, useState } from "react";
import ProductCardComponent from "./ProductCardComponent";
import { ClipLoader } from "react-spinners";
import UserContext from "../UserContext";

const FeaturedProductsComponent = () => {
  const { shoes } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (shoes.length === 0 || shoes.length === "undefined") {
      setIsLoading(true);
    } else {
      setIsLoading(false);
    }
  }, [shoes]);

  return (
    <>
      <section className="container mx-auto">
        {isLoading ? (
          <div className="flex justify-center items-center gap-2">
            <ClipLoader />
            <p>Loading shoes data... Try refreshing the page.</p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-4 gap-4">
            <ProductCardComponent limit={4} />
          </div>
        )}
      </section>
    </>
  );
};

export default FeaturedProductsComponent;
