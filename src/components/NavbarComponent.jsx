import React from "react";

const NavbarComponent = () => {
  return (
    <nav className=" w-full h-[50px] bg-background">
      <div className="container h-full mx-auto flex items-center p-5 uppercase font-bold text-sm">
        <div>
          <a href="/">
            <h1>Logo</h1>
          </a>
        </div>
        <div className="flex w-[90%] mx-auto">
          <div className="flex space-x-2">
            <a href="/">
              <h1>Home</h1>
            </a>
            <span>|</span>
            <a href="/shop">
              <h1>Shop</h1>
            </a>
          </div>
          <div className="flex space-x-2 ms-auto">
            <a href="/">
              <h1>Register</h1>
            </a>
            <span>|</span>
            <a href="/">
              <h1>Login</h1>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarComponent;
