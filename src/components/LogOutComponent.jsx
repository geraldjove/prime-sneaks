import React, { useContext } from "react";
import Swal from "sweetalert2";
import UserContext from "../UserContext";
import { useNavigate } from "react-router-dom";

const LogoutComponent = () => {
  const { unsetUser } = useContext(UserContext);
  const navigate = useNavigate();

  const logOutClick = async () => {
    try {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "Do you want to logout?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, logout!",
      });

      if (result.isConfirmed) {
        unsetUser();
        navigate("/login");
      } else {
        console.log("Logout cancelled");
      }
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return (
    <button
      onClick={logOutClick}
      className="bg-blue-500 block w-full p-2 text-white"
    >
      Logout
    </button>
  );
};

export default LogoutComponent;
