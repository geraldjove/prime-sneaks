import React, { useContext, useEffect } from "react";
import Swal from "sweetalert2";
import UserContext from "../UserContext";
import { useNavigate } from "react-router-dom";
import { SiUndertale } from "react-icons/si";

const LogoutComponent = () => {
  const { unsetUser, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const logOutClick = () => {
    unsetUser();
    setUser({ id: null, isAdmin: null });
    navigate("/login");
    console.log("testing");
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
