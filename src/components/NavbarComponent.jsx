import React, { useState, useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { RiCloseLargeFill } from "react-icons/ri";
import { FaBars, FaShoppingCart } from "react-icons/fa";
import { FaB } from "react-icons/fa6";
import UserContext from "../UserContext";

const NavbarComponent = () => {
  const { user } = useContext(UserContext);
  const [isOpen, setIsOpen] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    if (user.isAdmin) {
      setIsAdmin(true);
    } else {
      setIsAdmin(false);
    }

    if (user.id != null) {
      setIsLogged(true);
    } else {
      setIsLogged(false);
    }
  }, [user]);

  const toggleNav = (e) => {
    e.preventDefault();
    if (isOpen == true) {
      setIsOpen(false);
    } else if (isOpen == false) {
      setIsOpen(true);
    }
  };

  return (
    <nav className="bg-background min-h-[50px] sm:relative absolute w-full z-10">
      <div className="container px-4 mx-auto sm:flex pt-3 sm:pt-0 gap-4 min-h-[50px] justify-center items-center">
        <div className="flex justify-between">
          <NavLink to="/" className="font-bold uppercase">
            Prime <span className="underline">Sneaks</span>
          </NavLink>
          <button onClick={toggleNav} className="sm:hidden">
            {isOpen ? <FaBars /> : <RiCloseLargeFill />}
          </button>
        </div>
        <div className={`sm:flex sm:space-x-1 ${isOpen ? "hidden" : "block"}`}>
          <NavLink to="/" className="block text-center p-3">
            Home
          </NavLink>
          <span className="sm:flex hidden p-3">|</span>
          <NavLink to="/shop" className="block text-center p-3">
            Shop
          </NavLink>
        </div>
        <div
          className={`sm:flex ms-auto sm:space-x-1 ${
            isOpen ? "hidden" : "block"
          }`}
        >
          {isLogged ? (
            <>
              {isAdmin && (
                <>
                  <NavLink
                    to="/admin-dashboard"
                    className="block text-center p-3"
                  >
                    Admin Dashboard
                  </NavLink>
                  <span className="sm:flex hidden p-3">|</span>
                </>
              )}
              <NavLink to="/profile" className="block text-center p-3">
                Welcome, {user.email}
              </NavLink>
              <span className="sm:flex hidden p-3">|</span>
            </>
          ) : (
            <>
              <NavLink
                to="/register"
                className="flex justify-center items-center text-center gap-2 p-3"
              >
                Register
              </NavLink>
              <span className="sm:flex hidden p-3">|</span>
              <NavLink
                to="/login"
                className="flex justify-center items-center text-center gap-2 p-3"
              >
                Login
              </NavLink>
              <span className="sm:flex hidden p-3">|</span>
            </>
          )}

          <NavLink
            to="/cart"
            className="flex justify-center items-center text-center gap-2 p-3"
          >
            <FaShoppingCart />
            <h3>Cart</h3>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavbarComponent;
