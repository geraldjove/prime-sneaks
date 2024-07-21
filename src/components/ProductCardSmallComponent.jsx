import React, { useState, useEffect } from "react";
import shoeData from "../../api.json";

const ProductCardSmallComponent = ({ limit }) => {
  const [shoes, setShoes] = useState([]);

  useEffect(() => {
    setShoes(shoeData.sneakers.map((shoe) => shoe));
  }, []);

  return shoes.slice(0, limit || shoes.length).map((shoe, index) => (
    <div
      key={index}
      className="border-2 max-w-full min-h-full rounded-lg p-2 flex flex-col justify-center items-center"
    >
      <div className="min-h-[150px] bg-white flex justify-center">
        <img src={shoe.grid_picture_url} className="max-w-[150px]" />
      </div>
      <div className="min-h-[150px] max-h-[150px] flex flex-col justify-end items-center space-y-2 p-2 overflow-hidden">
        <h3 className="sm:text-md text-center font-bold my-auto">
          {shoe.name}
        </h3>
        <h3>${shoe.retail_price_cents / 100}</h3>
        <a href={`/shop/${index}`}>
          <button className="p-3 bg-blue-500 rounded-lg text-white uppercase font-bold text-sm">
            Go To Product
          </button>
        </a>
      </div>
    </div>
  ));
};

export default ProductCardSmallComponent;
