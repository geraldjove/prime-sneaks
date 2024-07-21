import React from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const LogoutComponent = ({ onLogin }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    Swal.fire({
      title: "Do you want to save the changes?",
      showCancelButton: true,
      confirmButtonText: "Log Out",
    }).then((result) => {
      if (result.isConfirmed) {
        onLogin(false);
        navigate("/");
      } else if (result.cancel) {
        Swal.fire("Log Out Cancelled");
      }
    });
  };

  return (
    <button
      onClick={handleClick}
      className="bg-blue-500 block w-full p-2 text-white"
    >
      Logout
    </button>
  );
};

export default LogoutComponent;
