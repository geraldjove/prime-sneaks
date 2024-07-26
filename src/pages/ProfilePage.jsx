import React, { useState, useEffect } from "react";
import SectionComponent from "../components/SectionComponent";
import ProductCardComponent from "../components/ProductCardComponent";
import LogOutComponent from "../components/LogOutComponent";
import { Link } from "react-router-dom";

const ProfilePage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [id, setId] = useState("");

  useEffect(() => {
    const apiUrl = "http://localhost:4000";
    const fetchUserDetails = async () => {
      const userDetails = await fetch(`${apiUrl}/users/details`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access")}`,
        },
      });

      const data = await userDetails.json();

      if (data) {
        setId(data.result.id);
        setFirstName(data.result.firstName);
        setLastName(data.result.lastName);
        setEmail(data.result.contactEmail);
        setPhone(data.result.contactPhone);
        setAddress(data.result.contactAddress);
      } else {
        console.log("error");
      }
    };
    fetchUserDetails();
  });
  return (
    <SectionComponent>
      <div className="grid sm:grid-cols-[70%_28%] gap-4">
        <div className="bg-white rounded-lg min-h-[100px] p-5">
          <div>
            <h1 className="text-4xl font-bold">{`${firstName} ${lastName}`}</h1>
          </div>
          <div>
            <h1 className="block text-xl">Your Last Order</h1>
            <div className="border border-black rounded-lg p-5 min-h-[250px]"></div>
          </div>
        </div>
        <div className="bg-white w-full rounded-lg min-h-[100px] p-5 flex justify-center items-center flex-col">
          <div className="space-y-5 flex flex-col w-full">
            <h1 className="text-3xl font-black leading-none">Contact</h1>
            <h3>{email}</h3>
            <h3>{phone}</h3>
            <h3>{address}</h3>
            <div className="w-full flex flex-col justify-center items-center space-y-3 ">
              <Link to={`/profile/update/${id}`} className="w-full">
                <button className="bg-blue-500 block w-full p-2 text-white">
                  Update Profile
                </button>
              </Link>
              <Link to={`/profile/update/password/${id}`} className="w-full">
                <button className="bg-blue-500 block w-full p-2 text-white">
                  Change Password
                </button>
              </Link>

              <LogOutComponent />
            </div>
          </div>
        </div>
      </div>
    </SectionComponent>
  );
};

export default ProfilePage;
