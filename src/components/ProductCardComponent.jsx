import React, { useState, useEffect } from "react";
import shoeData from "../../api.json";

const ProductCardComponent = ({ limit }) => {
  const [shoes, setShoes] = useState([]);

  useEffect(() => {
    setShoes(shoeData.sneakers.map((shoe) => shoe));
  }, []);

  return shoes.slice(0, limit || shoes.length).map((shoe, index) => (
    <div
      key={index}
      className="bg-gray-200 max-w-full min-h-full rounded-lg p-2 flex flex-col justify-center items-center"
    >
      <div className="min-h-[150px] bg-white flex justify-center">
        <img src={shoe.grid_picture_url} className="w-[100vh]" />
      </div>
      <div className="bg-gray-200 min-h-[150px] max-h-[150px] flex flex-col justify-end items-center space-y-2 p-2 overflow-hidden">
        <h3 className="sm:text-md text-center font-bold mb-auto">
          {shoe.name}
        </h3>
        <h3>${shoe.retail_price_cents / 100}</h3>
        <a href={`/shoes/${index}`}>
          <button className="p-3 bg-blue-500 rounded-lg text-white">
            Go to Product
          </button>
        </a>
      </div>
    </div>
  ));
};

export default ProductCardComponent;
