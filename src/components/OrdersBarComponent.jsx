import React, { useEffect, useState } from "react";
import OrderBarComponent from "./OrderBarComponent";

const OrdersBarComponent = () => {
  const [orders, setOrders] = useState(null);

  useEffect(() => {
    const fetchOrdersData = async () => {
      const ordersResponse = await fetch(
        `${import.meta.env.VITE_API_URL}/orders/all`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access")}`,
          },
        }
      );

      const data = await ordersResponse.json();

      if (data) {
        setOrders(data);
      } else {
        console.log("Error placing data to orders");
      }
    };
    fetchOrdersData();
  }, []);

  if (orders === null) {
    return <p>Loading...</p>;
  }

  return (
    <div className="border-2 rounded-lg overflow-auto min-h-[100vh] max-h-[100vh]">
      {orders.ok.map((order, index) => (
        <OrderBarComponent key={index} order={order} />
      ))}
    </div>
  );
};

export default OrdersBarComponent;
