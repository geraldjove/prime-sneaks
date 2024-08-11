import React, { useEffect, useState, useContext } from "react";
import ProductCardComponent from "../components/ProductCardComponent";
import SectionComponent from "../components/SectionComponent";
import UserContext from "../UserContext";
import { ClipLoader } from "react-spinners";

const ProductsPage = () => {
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
      <SectionComponent>
        <div>
          <h1 className="font-black uppercase sm:text-5xl">All Products</h1>
        </div>
        {isLoading ? (
          <div className="flex justify-center items-center gap-2">
            <ClipLoader />
            <p>Loading shoes data... Try refreshing the page.</p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-5 gap-4">
            <ProductCardComponent />
          </div>
        )}
      </SectionComponent>
    </>
  );
};

export default ProductsPage;
