import React from "react";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";

const ProductBarComponent = ({ shoe, index }) => {
  console.log(shoe.image);
  return (
    <>
      <div
        className=" w-full min-h-[50px] max-h-full border border-white rounded-md"
        key={index}
      >
        <div className="grid sm:grid-cols-8">
          <div className=" min-h-[50px] mx-auto flex justify-center items-center">
            <img
              src={`http://localhost:4000/${shoe.image.replace(/\\/g, "/")}`}
              className="h-[50px]"
            />
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
              <button className="bg-blue-500 p-2">Update</button>
            </Link>

            <button className="bg-red-500 p-2">Delete</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductBarComponent;
