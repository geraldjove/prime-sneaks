import React, { useState, useEffect, useContext } from "react";
import ProductCardComponent from "./ProductCardComponent";
import TopProductCardComponent from "./TopProductCardComponent";
import UserContext from "../UserContext";
import { ClipLoader } from "react-spinners";

const BestSellersComponent = () => {
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
      {isLoading ? (
        <div className="flex gap-2 justify-center items-center">
          <ClipLoader />
          <p>Loading shoes data... Try refreshing the page.</p>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="min-h-[50px]">
            <TopProductCardComponent limit={1} />
          </div>
          <div className=" min-h-[50px] grid sm:grid-cols-3 sm:grid-rows-2 gap-4">
            <ProductCardComponent limit={6} />
          </div>
        </div>
      )}
    </>
  );
};

export default BestSellersComponent;
