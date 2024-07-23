import React, { useState, useEffect, useContext } from "react";
import SectionComponent from "../components/SectionComponent";
import { FaStar } from "react-icons/fa";
import UserContext from "../UserContext";
import { useParams } from "react-router-dom";
import StarRatingComponent from "../components/StarRatingComponent";

const ProductPage = () => {
  const { id } = useParams();
  const { shoes } = useContext(UserContext);
  const [shoeName, setShoeName] = useState("");
  const [shoeBrandName, setShoeBrandName] = useState("");
  const [designer, setDesigner] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [size, setSize] = useState([]);
  const [price, setPrice] = useState("");
  const [color, setColor] = useState("");

  useEffect(() => {
    if (shoes && shoes.length > 0) {
      const shoe = shoes.find((shoe) => shoe.id === id);
      if (shoe) {
        setShoeName(shoe.name);
        setShoeBrandName(shoe.brand_name);
        setDesigner(shoe.designer);
        setDescription(shoe.story_html || " ");
        setImage(shoe.main_picture_url);
        setSize(shoe.size_range);
        setPrice(shoe.retail_price_cents / 100);
        setColor(shoe.color);
      }
    }
  }, [shoes, id, designer, description, image, size, price, color]);

  return (
    <>
      <SectionComponent>
        <div className="grid sm:grid-cols-5 items-center">
          <div className=" min-h-50px space-y-2 p-5">
            <h3 className="text-lg font-bold">{shoeBrandName}</h3>
            <h1 className="text-3xl font-black">{shoeName}</h1>
            <h3 className="text-sm">Designer: {designer}</h3>
            <div dangerouslySetInnerHTML={{ __html: `${description}` }}></div>
          </div>
          <div className="min-h-50px p-5 col-span-3 flex flex-col justify-center items-center">
            <img src={image} className="w-[full] drop-shadow-lg" />
            <div className=" bg-gray-300 rounded-md w-full min-h-[100px] flex justify-center items-center">
              Placeholder for ProductPage shoe color component
            </div>
          </div>
          <div className=" min-h-50px flex flex-col items-center space-y-10">
            <div className="grid sm:grid-cols-2 w-full place-items-center gap-5">
              <div className="uppercase font-bold">size</div>
              <div className="uppercase font-bold">
                <select>
                  {size.map((range, index) => (
                    <option key={index}>{range}</option>
                  ))}
                </select>
              </div>

              <div className="uppercase font-bold">reviews</div>
              <div className="flex">
                <StarRatingComponent />
              </div>
              <div className="uppercase font-bold">price</div>
              <div>${price}</div>
              <div className="uppercase font-bold">color</div>
              <div>{color}</div>
            </div>
            <a href={`/cart`}>
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
