import React, { useState, useEffect, useContext } from "react";
import SectionComponent from "../components/SectionComponent";
import { FaStar } from "react-icons/fa";
import UserContext from "../UserContext";
import { useParams, Link } from "react-router-dom";
import StarRatingComponent from "../components/StarRatingComponent";
import QuantityComponent from "../components/QuantityComponent";

const ProductPage = () => {
  const { id } = useParams();
  const { shoes } = useContext(UserContext);

  const [shoe, setShoe] = useState({});
  const [image, setImage] = useState(null);

  useEffect(() => {
    if (shoes && shoes.ok) {
      const foundShoe = shoes.ok.find((shoe) => shoe._id === id);
      setShoe(foundShoe || null); // Set state with the found shoe or null if not found
    }
  }, [shoes, id]);

  if (!shoe) {
    return <p>Loading...</p>; // Show loading state or a message while the shoe is being fetched
  }

  if (!shoe.size || !shoe.color) {
    return <p>Data is not available.</p>; // Handle cases where size or color might be missing
  }

  const addToCart = async () => {
    const response = await fetch("http://localhost:4000/cart/add-to-cart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("access")}`,
      },
      body: JSON.stringify({
        productId: id,
        quantity: 1,
      }),
    });

    const data = await response.json();

    if (data) {
      window.alert("Successfully added to cart!");
    } else {
      console.log("Error adding to cart");
    }
  };

  console.log(shoe.image);

  return (
    <>
      <SectionComponent>
        <div className="grid sm:grid-cols-5 items-center">
          <div className=" min-h-50px space-y-2 p-5">
            <h1 className="text-3xl font-black">{shoe.name}</h1>
            <div
              dangerouslySetInnerHTML={{ __html: `${shoe.description}` }}
            ></div>
          </div>
          <div className="min-h-50px p-5 col-span-3 flex flex-col justify-center items-center">
            <div>
              <img
                src={`http://localhost:4000/${shoe.image.replace(/\\/g, "/")}`}
                alt="product-image"
              />
            </div>
          </div>
          <div className=" min-h-50px flex flex-col items-center space-y-10">
            <div className="grid grid-cols-2 w-full place-items-center gap-5">
              <div className="uppercase font-bold">size</div>
              <div className="uppercase font-bold">
                <select>
                  {shoe.size.map((range, index) => (
                    <option key={index}>{range}</option>
                  ))}
                </select>
              </div>

              <div className="uppercase font-bold">reviews</div>
              <div className="flex">
                <StarRatingComponent rating={shoe.rating} />
              </div>
              <div className="uppercase font-bold">price</div>
              <div>${shoe.price}</div>
              <div className="uppercase font-bold">color</div>
              <div>
                <select>
                  Color
                  {shoe.color.map((color, index) => (
                    <option value={color} key={index}>
                      {color}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <button
              onClick={addToCart}
              className="bg-black text-white p-3 px-5"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </SectionComponent>
    </>
  );
};

export default ProductPage;
