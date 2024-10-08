import React, { useState, useEffect, useContext } from "react";
import SectionComponent from "../components/SectionComponent";
import CartCard from "../components/CartCard";
import UserContext from "../UserContext";
import Swal from "sweetalert2";

const CartPage = () => {
  const { user } = useContext(UserContext);
  const [cart, setCart] = useState(null); // Initialize as null for loading state
  const [totalPrice, setTotalPrice] = useState(0);
  const [cartData, setCartData] = useState(null);

  console.log(cartData);

  useEffect(() => {
    const fetchCartData = async () => {
      const fetchCart = await fetch(`${import.meta.env.VITE_API_URL}/cart`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access")}`,
        },
      });
      const dataCart = await fetchCart.json();
      setCart(dataCart.ok ? dataCart.ok.cartItems : []);
      setCartData(dataCart.ok);
      calculateTotalPrice(dataCart.ok ? dataCart.ok.cartItems : []);
    };
    fetchCartData();
  }, []);

  const calculateTotalPrice = (cartItems) => {
    const total = cartItems.reduce((sum, item) => sum + item.subTotal, 0);
    setTotalPrice(total);
  };

  const handleQuantityChange = (productId, newQuantity, newSubTotal) => {
    const updatedCart = cart.map((item) =>
      item.productId === productId
        ? { ...item, quantity: newQuantity, subTotal: newSubTotal }
        : item
    );
    setCart(updatedCart);
    calculateTotalPrice(updatedCart);
  };

  const handleOrder = async (e) => {
    e.preventDefault();
    const orderResponse = await fetch(
      `${import.meta.env.VITE_API_URL}/orders`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("access")}`,
        },
        body: JSON.stringify({
          userId: user.id,
          productsOrdered: cartData.cartItems,
          totalPrice: totalPrice,
        }),
      }
    );

    const orderData = await orderResponse.json();

    if (orderResponse) {
      Swal.fire({
        title: "Success",
        text: "Successfully placed order",
        icon: "success",
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.reload();
        }
      });
    }

    console.log(orderResponse);
    console.log(orderData);
  };

  if (cart === null) {
    return <p>Loading...</p>;
  }

  console.log(cart);

  return (
    <SectionComponent>
      <div className="space-y-3">
        <div>
          <h1 className="font-bold text-2xl">Your Cart</h1>
          <div className="grid sm:grid-cols-[70%_28%] justify-center w-full gap-7">
            <div className="min-h-[100px] bg-white rounded-md">
              <div className="grid sm:grid-cols-3 text-center font-bold border-b border-gray-300">
                <div className="p-5">
                  <h2>Product</h2>
                </div>
                <div className="p-5">
                  <h2>Quantity</h2>
                </div>
                <div className="p-5">
                  <h2>Price</h2>
                </div>
              </div>
              <div>
                {cart.map((cart, index) => (
                  <CartCard
                    key={index}
                    productId={cart.productId}
                    image={cart.productImage}
                    imageUrl={cart.productImageUrl}
                    name={cart.name}
                    initialQuantity={cart.quantity}
                    initialSubTotal={cart.subTotal}
                    onQuantityChange={handleQuantityChange}
                  />
                ))}
              </div>
            </div>
            <div className="bg-white rounded-md min-h-[400px] p-5 space-y-10 flex flex-col justify-center ">
              <div className="grid sm:grid-cols-2">
                <div className="flex justify-start font-bold text-blue-800">
                  Total
                </div>
                <div className="flex justify-end font-bold text-blue-800">
                  P {totalPrice}
                </div>
              </div>
              {/* <div>
                <h3 className="font-bold text-red-500">You saved P 3000.00!</h3>
              </div> */}
              <div>
                <h3>Taxes and shipping calculated at checkout.</h3>
              </div>
              <div>
                <button
                  onClick={handleOrder}
                  className="bg-blue-500 p-5 px-10 w-full text-white"
                >
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionComponent>
  );
};

export default CartPage;
