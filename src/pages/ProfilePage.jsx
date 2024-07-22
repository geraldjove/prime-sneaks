import React, { useContext, useEffect } from "react";
import SectionComponent from "../components/SectionComponent";
import ProductCardComponent from "../components/ProductCardComponent";
import LogOutComponent from "../components/LogOutComponent";

const ProfilePage = () => {
  return (
    <SectionComponent>
      <div className="grid sm:grid-cols-[70%_28%] gap-4">
        <div className="bg-white rounded-lg min-h-[100px] p-5">
          <div>
            <h1 className="text-4xl font-bold">Your Name</h1>
          </div>
          <div>
            <h1 className="block text-xl">Your Last Order</h1>
            <div className="border border-black rounded-lg p-5 min-h-[250px]"></div>
          </div>
        </div>
        <div className="bg-white rounded-lg min-h-[100px] p-5 flex justify-center items-center flex-col">
          <div className="space-y-5">
            <h1 className="text-3xl font-black leading-none">Contact</h1>
            <h3>yourmail@mail.com</h3>
            <h3>(+1) 123 4567</h3>
            <h3>your address here, city here, zipcode here</h3>
            <div className="w-full flex flex-col justify-center items-center space-y-3 ">
              <button className="bg-blue-500 block w-full p-2 text-white">
                Update Profile
              </button>
              <button className="bg-blue-500 block w-full p-2 text-white">
                Change Password
              </button>
              <LogOutComponent />
              <p className="text-red-500 text-sm">Delete account</p>
            </div>
          </div>
        </div>
      </div>
    </SectionComponent>
  );
};

export default ProfilePage;
