import React, { useContext, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import UserContext from "../UserContext";

const NavbarComponent = () => {
  const { user } = useContext(UserContext);
  const [firstName, setFirstName] = useState("");

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const userDetails = await fetch(
          `${import.meta.env.VITE_API_URL}/users/details`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("access")}`,
            },
          }
        );

        const data = await userDetails.json();

        if (data) {
          setFirstName(data.result.firstName);
        } else {
          console.log("error");
        }
      } catch (error) {
        console.error("Error ", error);
      }
    };
    fetchUserDetails();
  });

  return (
    <nav className=" w-full h-[50px] bg-background">
      <div className="container h-full mx-auto flex items-center uppercase font-bold text-sm">
        <div>
          <NavLink to="/">
            <h1>
              Prime <span className="underline">Sneaks</span>
            </h1>
          </NavLink>
        </div>
        <div className="sm:flex hidden w-[90%] mx-auto">
          <div className="flex space-x-5">
            <NavLink to="/">
              <h1>Home</h1>
            </NavLink>
            <span>|</span>
            <NavLink to="/shop">
              <h1>Shop</h1>
            </NavLink>
          </div>
          {user.id != null || user.id != undefined ? (
            <div className="flex space-x-5 ms-auto">
              {user.isAdmin === true ? (
                <>
                  <NavLink to="/admin-dashboard">
                    <h1>Admin Dashboard</h1>
                  </NavLink>
                  <span>|</span>
                </>
              ) : (
                <></>
              )}

              <NavLink to="/profile">
                <h1>{`Welcome, ${firstName}`}</h1>
              </NavLink>
              <span>|</span>
              <NavLink
                to="/cart"
                className="flex justify-center items-center gap-2"
              >
                <FaShoppingCart />
                <h3>Cart</h3>
              </NavLink>
            </div>
          ) : (
            <div className="flex space-x-5 ms-auto">
              <NavLink to="/register">
                <h1>Register</h1>
              </NavLink>
              <span>|</span>
              <NavLink to="/login">
                <h1>Login</h1>
              </NavLink>
              <NavLink
                to="/cart"
                className="flex justify-center items-center gap-2"
              >
                <FaShoppingCart />
                <h3>Cart</h3>
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavbarComponent;
