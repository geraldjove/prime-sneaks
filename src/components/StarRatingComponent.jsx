import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { FaS } from "react-icons/fa6";

const StarRatingComponent = ({ rating }) => {
  const ratingStars = (rating) => {
    const stars = [];
    const maxRating = 5;
    for (let i = 0; i < maxRating; i++) {
      if (rating > i) {
        stars.push(<FaStar className="text-yellow-500" key={i} />);
      } else {
        stars.push(<FaStar className="text-gray-500" key={i} />);
      }
    }
    return <div className="flex">{stars}</div>;
  };
  return (
    <>
      <h1>{ratingStars(rating)}</h1>
    </>
  );
};

export default StarRatingComponent;
