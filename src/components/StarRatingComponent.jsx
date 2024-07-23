import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import UserContext from "../UserContext";

const StarRatingComponent = () => {
  const { id } = useParams();
  const { shoes } = useContext(UserContext);
  const [rating, setRating] = useState(0);

  useEffect(() => {
    if (shoes && shoes.length > 0) {
      const shoe = shoes.find((shoe) => shoe.id === id);
      if (shoe) {
        setRating(shoe.retail_price_cents);
      } else {
        console.error("Error getting ratings: Shoe not found");
      }
    }
  }, [shoes, id]);
  console.log(rating);
  return (
    <>
      <h1>{rating}</h1>
    </>
  );
};

export default StarRatingComponent;
