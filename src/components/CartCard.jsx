import React from "react";
import QuantityComponent from "./QuantityComponent";

const CartCard = ({ shoes, limit }) => {
  return shoes.slice(0, limit || shoes.length).map((shoe, index) => (
    <div
      key={index}
      className="w-full  min-h-[100px] grid sm:grid-cols-3 items-center text-center border-b "
    >
      <div className="grid sm:grid-cols-2">
        <div className="min-w-[25px] min-h-[100px] flex flex-col justify-center items-center">
          <img src={shoe.grid_picture_url} />
        </div>
        <div className=" flex flex-col justify-center items-center p-2">
          <div className="font-bold text-blue-800 text-sm">{shoe.name}</div>
          <div className="font-bold text-red-500">
            $ {shoe.retail_price_cents / 100}
          </div>
        </div>
      </div>
      <div>
        <QuantityComponent />
      </div>
      <div>$ {shoe.retail_price_cents / 100}</div>
    </div>
  ));
};

export default CartCard;
