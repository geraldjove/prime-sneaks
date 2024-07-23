import React, { useState, useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import UserContext from "../UserContext";
import StarRatingComponent from "./StarRatingComponent";

const ProductCardComponent = ({ limit }) => {
  const { id } = useParams();
  const { shoes } = useContext(UserContext);

  useEffect(() => {
    shoes.find((shoe) => shoe.id === id);
  }, []);

  return shoes.slice(0, limit || shoes.length).map((shoe, index) => (
    <div
      key={shoe.id}
      className="border-2 max-w-full bg-white min-h-full rounded-lg p-2 flex flex-col justify-center items-center"
    >
      <div className="min-h-[150px] bg-white flex justify-center">
        <img src={shoe.grid_picture_url} className="w-[100vh]" />
      </div>
      <div className="min-h-[150px] max-h-[150px] flex flex-col justify-end items-center space-y-2 p-2 overflow-hidden">
        <h3 className="sm:text-md text-center font-bold my-auto">
          {shoe.name}
        </h3>
        <div>
          <StarRatingComponent
            rating={Math.floor(shoe.retail_price_cents / 5000)}
          />
        </div>
        <h3>${shoe.retail_price_cents / 100}</h3>
        <Link to={`/shop/${shoe.id}`}>
          <button className="p-2 bg-blue-500 rounded-lg text-white uppercase font-bold text-sm">
            Go To Product
          </button>
        </Link>
      </div>
    </div>
  ));
};

export default ProductCardComponent;
