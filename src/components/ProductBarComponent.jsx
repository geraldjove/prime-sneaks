import React from "react";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";

const ProductBarComponent = ({ shoe, index }) => {
  return (
    <>
      <div className=" w-full min-h-[50px] max-h-full border border-white rounded-md">
        <div className="grid sm:grid-cols-8">
          <div className=" min-h-[50px] mx-auto flex justify-center items-center">
            <img src={shoe.grid_picture_url} className="h-[50px]" />
          </div>
          <div className=" min-h-[50px] mx-auto flex justify-center items-center">
            <Link to={`/shop/${shoe.id}`} className="flex gap-2 items-center">
              <FaEye />
              <h3>View</h3>
            </Link>
          </div>
          <div className=" min-h-[50px] flex justify-center items-center">
            <h3 className="text-center">${shoe.retail_price_cents / 100}</h3>
          </div>
          <div className=" min-h-[50px] flex justify-center items-center col-span-2">
            <h3 className="text-center">{shoe.name}</h3>
          </div>
          <div className="min-h-[50px] flex justify-center items-center gap-2">
            <h3>Size: </h3>
            <select>
              {shoe.size_range.map((size, index) => (
                <option key={index}>{size}</option>
              ))}
            </select>
          </div>
          <div className=" min-h-[50px] flex justify-center items-center gap-2">
            <h3>Color: </h3>
            <select>
              <option>{shoe.color}</option>
            </select>
          </div>
          <div className=" min-h-[50px] flex justify-center items-center gap-2">
            <button className="bg-blue-500 p-2">Update</button>
            <button className="bg-red-500 p-2">Delete</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductBarComponent;
