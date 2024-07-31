import React, { useState } from "react";
import QuantityComponent from "./QuantityComponent";
import { IoMdClose } from "react-icons/io";

const CartCard = ({
  productId,
  image,
  name,
  initialQuantity,
  initialSubTotal,
  onQuantityChange,
}) => {
  const [quantity, setQuantity] = useState(initialQuantity);
  const [subTotal, setSubTotal] = useState(initialSubTotal);

  const handleQuantityChange = async (val) => {
    const fetchUpdateCart = await fetch(
      `${import.meta.env.VITE_API_URL}/cart/add-to-cart`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("access")}`,
        },
        body: JSON.stringify({
          productId,
          quantity: val,
        }),
      }
    );

    const parseResponse = await fetchUpdateCart.json();
    if (parseResponse && parseResponse.ok) {
      const cartItem = parseResponse.ok.cartItems.find(
        (cart) => cart.productId == productId
      );
      if (cartItem) {
        setQuantity(val); // Update the quantity after server confirmation
        setSubTotal(cartItem.subTotal); // Update the subTotal from the server response
        onQuantityChange(productId, val, cartItem.subTotal); // Notify parent component
      } else {
        console.error("Cart item not found in response");
      }
    } else {
      // Handle error
      console.error("Failed to update the cart:", parseResponse.message);
    }
  };

  const handleDelete = async (productId) => {
    const userConfirm = window.confirm("Do you want to remove this product?");
    if (userConfirm) {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/cart/delete/${productId}`,
        {
          method: "Delete",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access")}`,
          },
        }
      );
      window.alert("Successfully removed product", response);
    } else {
      console.log("cancelled");
    }
  };

  return (
    <div className="min-h-[100px] border-b border-gray-300 px-2">
      <div className="grid sm:grid-cols-3">
        <div className="min-h-[100px] flex items-center gap-4">
          <img
            src={`${import.meta.env.VITE_API_URL}/${image.replace(/\\/g, "/")}`}
            className="max-w-[50px]"
          />
          <h1 className="font-bold">{name}</h1>
        </div>
        <div className="bg-gray-100 min-h-[100px] flex justify-center items-center gap-2">
          <QuantityComponent
            quantity={quantity}
            OnQuantityChange={handleQuantityChange}
          />
          <button
            onClick={() => handleDelete(productId)}
            className="flex justify-center items-center bg-red-500 rounded-sm p-1 text-white"
          >
            <IoMdClose />
          </button>
        </div>
        <div className="min-h-[100px] flex justify-center items-center">
          <h1>P {subTotal}</h1>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
