import React from "react";
import SectionComponent from "../components/SectionComponent";
import { FaStar } from "react-icons/fa";

const ProductPage = ({ shoe, index }) => {
  return (
    <>
      <SectionComponent>
        <div className="grid sm:grid-cols-5 items-center">
          <div className=" min-h-50px space-y-2 p-5">
            <h3 className="text-lg font-bold">{shoe.brand_name}</h3>
            <h1 className="text-3xl font-black">{shoe.name}</h1>
            <h3 className="text-sm">Designer: {shoe.designer}</h3>
            <div dangerouslySetInnerHTML={{ __html: shoe.story_html }}></div>
          </div>
          <div className="min-h-50px p-5 col-span-3 flex flex-col justify-center items-center">
            <img
              src={shoe.main_picture_url}
              className="w-[full] drop-shadow-lg"
            />
            <div className=" bg-gray-300 rounded-md w-full min-h-[100px] flex justify-center items-center">
              Placeholder for ProductPage shoe color component
            </div>
          </div>
          <div className=" min-h-50px flex flex-col items-center space-y-10">
            <div className="grid sm:grid-cols-2 w-full place-items-center gap-5">
              <div className="uppercase font-bold">size</div>
              <div className="uppercase font-bold">
                <select>
                  {shoe.size_range.map((range) => (
                    <option>{range}</option>
                  ))}
                </select>
              </div>

              <div className="uppercase font-bold">reviews</div>
              <div className="flex">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className="uppercase font-bold">price</div>
              <div>${shoe.retail_price_cents / 100}</div>
              <div className="uppercase font-bold">color</div>
              <div>{shoe.color}</div>
            </div>
            <a href={`/add-to-cart/${index}`}>
              <button className="bg-black text-white p-3 px-5">
                Add to Cart
              </button>
            </a>
          </div>
        </div>
      </SectionComponent>
    </>
  );
};

export default ProductPage;
