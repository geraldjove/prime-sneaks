import React, { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../UserContext";

const UpdatePasswordComponent = () => {
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPass, setConfirmNewPass] = useState("");
  const [isActive, setIsActive] = useState(false);
  const { user } = useContext(UserContext);
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
          // setPassword(data.result.password.slice(0, 10));
        } else {
          console.log("Error fetching data");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (
      newPassword !== (null || undefined || "") &&
      confirmNewPass !== (null || undefined || "")
    ) {
      if (newPassword === confirmNewPass) {
        console.log("Testing True");
        setIsActive(true);
      } else {
        console.log("Testing False");
        setIsActive(false);
      }
    } else {
      setIsActive(false);
    }
  }, [newPassword, confirmNewPass]);

  const handleSubmit = async (e) => {
    e.preventDefault();

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
            password: newPassword,
          }),
        }
      );

      if (!response.ok) {
        // Handle server errors
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to update profile");
      }

      const data = await response.json();
      console.log(data); // Handle the success response
      // Optionally, provide feedback to the user or redirect
      setIsActive(true);
      alert("Profile updated successfully!", navigate("/profile"));
      navigate("/profile");
    } catch (error) {
      console.error("Error updating profile:", error);
      alert(`Error: ${error.message}`);
    }
  };

  return (
    <div className="max-w-[1000px] bg-white p-6 space-y-4 md:space-y-6 sm:p-8 rounded-md">
      <h1 className="text-black font-black text-3xl">Update Password</h1>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="w-full">
          <label htmlFor="contactAddress">Current Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="block w-full rounded-md py-1 px-2 bg-gray-200"
          />
        </div>
        <div className="w-full">
          <label htmlFor="newPassword">New Password</label>
          <input
            type="password"
            name="newPassword"
            id="newPassword"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="block w-full rounded-md py-1 px-2 bg-gray-200"
          />
        </div>
        <div className="flex flex-col justify-center">
          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmNewPass"
            id="confirmNewPass"
            value={confirmNewPass}
            onChange={(e) => setConfirmNewPass(e.target.value)}
            className="block rounded-md py-1 px-2 bg-gray-200"
          />
        </div>
        <div className="flex flex-col gap-2">
          <button
            type="submit"
            disabled={!isActive}
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
    </div>
  );
};

export default UpdatePasswordComponent;
