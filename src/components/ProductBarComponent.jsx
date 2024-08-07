import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import UserContext from "../UserContext";

const ProductBarComponent = ({ shoe, index }) => {
  const { deleteProduct } = useContext(UserContext);

  const handleDelete = async (productId) => {
    deleteProduct(productId);
  };

  return (
    <>
      <div
        className=" w-full min-h-[50px] max-h-full border border-white rounded-md"
        key={index}
      >
        <div className="grid sm:grid-cols-8">
          <div className=" min-h-[50px] mx-auto flex justify-center items-center">
            {shoe.image !== null && shoe.image !== "null" ? (
              <img
                src={`${import.meta.env.VITE_API_URL}/${shoe.image.replace(
                  /\\/g,
                  "/"
                )}`}
                alt={shoe.index}
                className="h-[50px]"
              />
            ) : (
              <img src={shoe.imageUrl} className="h-[50px]" alt={shoe.index} />
            )}
          </div>
          <div className=" min-h-[50px] mx-auto flex justify-center items-center">
            <Link to={`/shop/${shoe._id}`} className="flex gap-2 items-center">
              <FaEye />
              <h3>View</h3>
            </Link>
          </div>
          <div className=" min-h-[50px] flex justify-center items-center col-span-2">
            <h3 className="text-center">{shoe.name}</h3>
          </div>
          <div className=" min-h-[50px] flex justify-center items-center">
            <h3 className="text-center">${shoe.price}</h3>
          </div>

          <div className="min-h-[50px] flex justify-center items-center gap-2">
            <h3>Size: </h3>
            <select>
              {shoe.size.map((size, index) => (
                <option key={index}>{size}</option>
              ))}
            </select>
          </div>
          <div className=" min-h-[50px] flex justify-center items-center gap-2">
            <h3>Color: </h3>
            <select>
              {shoe.color.map((color, index) => (
                <option key={index}>{color}</option>
              ))}
            </select>
          </div>
          <div className=" min-h-[50px] flex justify-center items-center gap-2">
            <Link to={`/products/edit/${shoe._id}`}>
              <button className="bg-blue-500 p-2 rounded-md text-white">
                Update
              </button>
            </Link>

            <button
              onClick={() => handleDelete(shoe._id)}
              className="bg-red-500 p-2 rounded-md text-white"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductBarComponent;
