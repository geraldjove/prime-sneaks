import React, { useState } from "react";
import SectionComponent from "../components/SectionComponent";
import ProductsBarComponent from "../components/ProductsBarComponent";
import UsersBarComponent from "../components/UsersBarComponent";
import OrdersBarComponent from "../components/OrdersBarComponent";
import ChatsBarComponent from "../components/ChatsBarComponent";
import SettingsComponent from "../components/SettingsComponent";
import LogOutComponent from "../components/LogOutComponent";
import AddNewProductComponent from "../components/AddNewProductComponent";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import ReactModal from "react-modal";

const AdminPage = ({ shoes, onLogin, addProduct }) => {
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
          <LogOutComponent onLogin={onLogin} />
        </div>
        <div>
          {active === "UsersCard" && <UsersBarComponent />}
          {active === "ProductsCard" && (
            <>
              <ProductsBarComponent shoes={shoes} />
              <div className="flex justify-end">
                <Link to={`/products/add`}>
                  <button className="p-3 px-5 bg-blue-500 rounded-lg mt-5 text-white">
                    Add Product
                  </button>
                </Link>
              </div>
            </>
          )}
          {active === "OrdersCard" && <OrdersBarComponent />}
          {active === "InboxCard" && <ChatsBarComponent />}
          {active === "SettingsCard" && <SettingsComponent />}
        </div>
      </div>
    </SectionComponent>
  );
};

export default AdminPage;
