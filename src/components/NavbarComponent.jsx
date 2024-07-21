import React from "react";
import { NavLink } from "react-router-dom";

const NavbarComponent = () => {
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
        <div className="flex w-[90%] mx-auto">
          <div className="flex space-x-5">
            <NavLink to="/">
              <h1>Home</h1>
            </NavLink>
            <span>|</span>
            <NavLink to="/shop">
              <h1>Shop</h1>
            </NavLink>
          </div>
          <div className="flex space-x-5 ms-auto">
            <NavLink to="/register">
              <h1>Register</h1>
            </NavLink>
            <span>|</span>
            <NavLink to="/login">
              <h1>Login</h1>
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarComponent;
