import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";

const OrderBarComponent = ({ order }) => {
  const [user, SetUser] = useState("");

  useEffect(() => {
    const fetchUserData = async () => {
      const userResponse = await fetch(
        `${import.meta.env.VITE_API_URL}/users/${order.userId}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access")}`,
          },
        }
      );

      const data = await userResponse.json();

      SetUser(data);
    };

    fetchUserData();
  }, []);

  const fulfillOrder = async () => {
    await fetch(`${import.meta.env.VITE_API_URL}/orders/update/${order._id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("access")}`,
      },
      body: JSON.stringify({
        status: "Fulfilled Order",
      }),
    });

    window.location.reload();
  };

  const deleteOrder = async () => {
    await fetch(`${import.meta.env.VITE_API_URL}/orders/delete/${order._id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access")}`,
      },
    });
    Swal.fire({
      title: "Success",
      text: "Successfully Deleted Order",
      icon: "success",
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.reload();
      }
    });
  };

  return (
    <div className=" w-full min-h-[50px] max-h-full border border-white rounded-md">
      <div className="grid sm:grid-cols-6">
        <div className=" min-h-[50px] mx-auto flex justify-center items-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"
            className="h-[50px]"
          />
        </div>
        <div className=" min-h-[50px] flex justify-center items-center ">
          <h3 className="text-center">
            {user.firstName} {user.lastName}
          </h3>
        </div>
        <div className=" min-h-[50px] flex justify-center items-center">
          <h3 className="text-center">{user.contactEmail}</h3>
        </div>
        <div className=" min-h-[50px] flex justify-center items-center">
          <h3 className="text-center">{order.status}</h3>
        </div>
        <div className=" min-h-[50px] flex justify-center items-center">
          <h3 className="text-center">Payment Status</h3>
        </div>

        <div className=" min-h-[50px] flex justify-center items-center gap-4">
          <button
            onClick={fulfillOrder}
            className="bg-blue-500 p-2 rounded-md text-white"
          >
            Fulfill
          </button>
          <button
            onClick={deleteOrder}
            className="bg-red-500 p-2 rounded-md text-white"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderBarComponent;
