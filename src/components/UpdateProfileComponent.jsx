import React, { useState, useContext, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import UserContext from "../UserContext";

const UpdateProfileComponent = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [contactAddress, setContactAddress] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [role, setRole] = useState("member");
  const { user, deleteUser } = useContext(UserContext);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/users/details`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("access")}`,
            },
          }
        );
        const data = await response.json();
        console.log(data); // Check what data is received
        if (data && data.result) {
          setFirstName(data.result.firstName);
          setLastName(data.result.lastName);
          setContactEmail(data.result.contactEmail);
          setContactPhone(data.result.contactPhone);
          setContactAddress(data.result.contactAddress);
          setBirthDate(data.result.birthDate);
          setRole(data.result.isAdmin);
        } else {
          console.log("Error fetching data");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  // Update User
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Clicked");

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/users/update`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("access")}`,
          },
          body: JSON.stringify({
            firstName,
            lastName,
            contactEmail,
            contactPhone,
            contactAddress,
            birthDate,
          }),
        }
      );
      if (response) {
        alert("Successfully updated profile", navigate("/profile"));
      }
    } catch (error) {
      alert("Error ", error);
    }
  };

  return (
    <div className="max-w-[500px] mx-auto bg-white p-6 space-y-4 md:space-y-6 sm:p-8 rounded-md">
      <h1 className="text-black font-black text-3xl">Update Profile</h1>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="sm:flex gap-4">
          <div className="w-full">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              placeholder="John"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="block w-full rounded-md py-1 px-2 bg-gray-200"
            />
          </div>
          <div className="w-full">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Doe"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="block w-full rounded-md py-1 px-2 bg-gray-200"
            />
          </div>
        </div>
        <div className="sm:flex gap-4">
          <div className="w-full">
            <label htmlFor="birthDate">Birth Date</label>
            <input
              type="date"
              name="birthDate"
              id="birthDate"
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
              className="block w-full rounded-md py-1 px-2 bg-gray-200"
            />
          </div>
          <div className="w-full">
            <label htmlFor="contactPhone">Mobile No.</label>
            <input
              type="text"
              name="contactPhone"
              id="contactPhone"
              value={contactPhone}
              onChange={(e) => setContactPhone(e.target.value)}
              className="block w-full rounded-md py-1 px-2 bg-gray-200"
            />
          </div>
        </div>
        <div className="w-full">
          <label htmlFor="contactAddress">Address</label>
          <input
            type="text"
            name="contactAddress"
            id="contactAddress"
            placeholder="Subdv, Street, City, Country"
            value={contactAddress}
            onChange={(e) => setContactAddress(e.target.value)}
            className="block w-full rounded-md py-1 px-2 bg-gray-200"
          />
        </div>
        <div className="flex flex-col justify-center">
          <label>Your email</label>
          <input
            type="email"
            name="contactEmail"
            id="contactEmail"
            placeholder="name@company.com"
            value={contactEmail}
            onChange={(e) => setContactEmail(e.target.value)}
            className="block rounded-md py-1 px-2 bg-gray-200"
          />
        </div>
        <div className="flex flex-col gap-2">
          <button
            type="submit"
            className="bg-blue-500 p-2 w-full rounded-md font-bold text-white"
          >
            Save
          </button>
          <Link to="/profile">
            <button className="bg-blue-500 p-2 w-full rounded-md font-bold text-white">
              Cancel
            </button>
          </Link>
        </div>
      </form>
      <button
        onClick={deleteUser}
        className="bg-red-500 p-2 w-full rounded-md font-bold text-white"
      >
        Delete Account
      </button>
    </div>
  );
};

export default UpdateProfileComponent;
