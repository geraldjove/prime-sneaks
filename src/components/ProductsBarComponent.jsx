import React, { useState, useEffect } from "react";

import ProductBarComponent from "../components/ProductBarComponent";

const ProductsBarComponent = () => {
  const [shoes, setShoes] = useState([]);

  useEffect(() => {
    const fetchAllShoes = async () => {
      const fetchShoes = await fetch(
        `${import.meta.env.VITE_API_URL}/products/all`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access")}`,
          },
        }
      );
      const data = await fetchShoes.json();

      if (data) {
        setShoes(data);
      } else {
        console.log(data);
      }
    };
    fetchAllShoes();
  }, []);

  if (!shoes.ok) {
    return <p>Loading</p>;
  }

  return (
    <>
      <div className="border-2 rounded-lg overflow-auto min-h-[100vh] max-h-[100vh]">
        {shoes.ok.map((shoe, index) => (
          <ProductBarComponent shoe={shoe} index={index} key={shoe._id} />
        ))}
      </div>
    </>
  );
};

export default ProductsBarComponent;
