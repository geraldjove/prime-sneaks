import React, { useContext } from "react";
import SectionComponent from "../components/SectionComponent";
import CartCard from "../components/CartCard";
import ProductCardSmallComponent from "../components/ProductCardSmallComponent";
import UserContext from "../UserContext";

const CartPage = () => {
  const { shoes } = useContext(UserContext);
  return (
    <SectionComponent>
      <div className="space-y-3">
        <div>
          <h1 className="font-bold text-2xl">Your Cart</h1>
          <div className="grid sm:grid-cols-[70%_28%] justify-center w-full gap-7">
            <div className="min-h-[100px] bg-white rounded-md">
              <div className="grid sm:grid-cols-3 text-center font-bold border-b border-gray-300">
                <div className="p-5">
                  <h2>Product</h2>
                </div>
                <div className="p-5">
                  <h2>Quantity</h2>
                </div>
                <div className="p-5">
                  <h2>Price</h2>
                </div>
              </div>
              <div>
                <CartCard shoes={shoes} limit={1} />
              </div>
            </div>
            <div className="bg-white rounded-md min-h-[400px] p-5 space-y-10 flex flex-col justify-center ">
              <div className="grid sm:grid-cols-2">
                <div className="flex justify-start font-bold text-blue-800">
                  Total
                </div>
                <div className="flex justify-end font-bold text-blue-800">
                  P 1,500
                </div>
              </div>
              <div>
                <h3 className="font-bold text-red-500">You saved P 3000.00!</h3>
              </div>
              <div>
                <h3>Taxes and shipping calculated at checkout.</h3>
              </div>
              <div>
                <button className="bg-blue-500 p-5 px-10 w-full text-white">
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <h1 className="font-bold text-2xl">Recently Viewed</h1>
          <div className="bg-white min-h-[100px] w-full rounded-md flex gap-2 overflow-auto">
            {/* <ProductCardSmallComponent /> */}
          </div>
        </div>
      </div>
    </SectionComponent>
  );
};

export default CartPage;
