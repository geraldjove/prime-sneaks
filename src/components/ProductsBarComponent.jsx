import React, { useContext } from "react";
import UserContext from "../UserContext";
import ProductBarComponent from "../components/ProductBarComponent";
import Modal from "react-modal";

const ProductsBarComponent = () => {
  const { shoes } = useContext(UserContext);
  console.log(shoes);
  return (
    <>
      <div className="border-2 rounded-lg overflow-auto min-h-[100vh] max-h-[100vh]">
        {shoes.ok.map((shoe, index) => (
          <ProductBarComponent shoe={shoe} index={index} key={shoe._id} />
        ))}
      </div>
    </>
  );
};

export default ProductsBarComponent;
