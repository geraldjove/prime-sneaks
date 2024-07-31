import React, { useState, useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import UserContext from "../UserContext";
import StarRatingComponent from "./StarRatingComponent";

const TopProductCardComponent = ({ limit }) => {
  const { id } = useParams();
  const { shoes } = useContext(UserContext);

  return (
    <>
      {Array.isArray(shoes.ok) &&
        shoes.ok.slice(0, limit || shoes.ok.length).map((shoe, index) => (
          <div
            key={index}
            className="border-2 max-w-full bg-white min-h-full rounded-lg p-2 flex flex-col justify-center items-center"
          >
            <div className="w-full flex justify-center">
              <img
                src={`${import.meta.env.VITE_API_URL}/${shoe.image.replace(
                  /\\/g,
                  "/"
                )}`} // Adjust the path
                alt={shoe.index}
                className="w-full object-cover"
              />
            </div>
            <div className="min-h-[150px] max-h-[150px] flex flex-col justify-end items-center space-y-2 p-2 overflow-hidden">
              <h3 className="sm:text-md text-center font-bold my-auto">
                {shoe.name}
              </h3>
              <div>
                <StarRatingComponent rating={shoe.rating} />
              </div>
              <h3>${shoe.price}</h3>
              <Link to={`/shop/${shoe._id}`}>
                <button className="p-2 bg-blue-500 rounded-lg text-white uppercase font-bold text-sm">
                  Go To Product
                </button>
              </Link>
            </div>
          </div>
        ))}
    </>
  );
};

export default TopProductCardComponent;
