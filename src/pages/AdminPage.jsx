import React, { useState } from "react";
import SectionComponent from "../components/SectionComponent";
import ProductsBarComponent from "../components/ProductsBarComponent";
import UsersBarComponent from "../components/UsersBarComponent";
import OrdersBarComponent from "../components/OrdersBarComponent";
import ChatsBarComponent from "../components/ChatsBarComponent";
import SettingsComponent from "../components/SettingsComponent";
import LogOutComponent from "../components/LogOutComponent";
import { Link } from "react-router-dom";

const AdminPage = ({ shoes, onLogin }) => {
  const [active, setActive] = useState("UsersCard");

  return (
    <SectionComponent>
      <div className="grid sm:grid-cols-[28%_70%] gap-4">
        <div className="flex flex-col justify-center items-center">
          <button
            onClick={() => setActive("UsersCard")}
            className=" w-full p-5 rounded-md font-medium text-gray-400 border-b-2"
          >
            Users
          </button>
          <button
            onClick={() => setActive("ProductsCard")}
            className=" w-full p-5 rounded-md font-medium text-gray-400 border-b-2"
          >
            Products
          </button>
          <button
            onClick={() => setActive("OrdersCard")}
            className=" w-full p-5 rounded-md font-medium text-gray-400 border-b-2"
          >
            Orders
          </button>
          <button
            onClick={() => setActive("InboxCard")}
            className=" w-full p-5 rounded-md font-medium text-gray-400 border-b-2"
          >
            Inbox
          </button>
          <button
            onClick={() => setActive("SettingsCard")}
            className=" w-full p-5 rounded-md font-medium text-gray-400 border-b-2"
          >
            Settings
          </button>

          {/* <button className="w-full p-5 rounded-md font-medium text-gray-400 border-b-2">
            Logout
          </button> */}
          <LogOutComponent onLogin={onLogin} />
        </div>
        {active === "UsersCard" ? <UsersBarComponent /> : null}
        {active === "ProductsCard" ? (
          <ProductsBarComponent shoes={shoes} />
        ) : null}
        {active === "OrdersCard" ? <OrdersBarComponent /> : null}
        {active === "InboxCard" ? <ChatsBarComponent /> : null}
        {active === "SettingsCard" ? <SettingsComponent /> : null}
      </div>
    </SectionComponent>
  );
};

export default AdminPage;
