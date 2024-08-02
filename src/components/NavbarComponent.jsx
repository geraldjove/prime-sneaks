import React, { useContext, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import UserContext from "../UserContext";
import { RiCloseLargeFill } from "react-icons/ri";
import { FaBars } from "react-icons/fa";

const NavbarComponent = () => {
  const { user } = useContext(UserContext);
  const [firstName, setFirstName] = useState("");
  const [isActive, setIsActive] = useState(false);

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

        if (userDetails) {
          const data = await userDetails.json();

          if (data) {
            setFirstName(data.result.firstName);
          } else {
            console.log("error");
          }
        } else {
          setFirstName("");
        }
      } catch (error) {
        console.error("Error ", error);
      }
    };
    fetchUserDetails();
  }, [firstName]);

  const toggleActive = (e) => {
    if (isActive == false) {
      setIsActive(true);
    } else if (isActive == true) {
      setIsActive(false);
    }
  };

  return (
    <nav className=" w-full h-[50px] bg-green-500">
      <div className="container h-full mx-auto flex items-center uppercase font-bold text-sm px-5">
        <div>
          <NavLink to="/">
            <h1>
              Prime <span className="underline">Sneaks</span>
            </h1>
          </NavLink>
        </div>
        {/* Mobile Size */}
        <div className="sm:hidden ms-auto">
          {isActive ? (
            <RiCloseLargeFill onClick={toggleActive} className="relative" />
          ) : (
            <FaBars onClick={toggleActive} />
          )}
        </div>

        {/* Desktop Size */}
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
