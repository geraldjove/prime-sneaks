import React from "react";
import { Link } from "react-router-dom";

const UserBarComponent = ({ user }) => {
  // Delete User as Admin
  const deleteSpecificUser = async (userId) => {
    const userConfirmed = await window.confirm(
      "Do you want to permanently delete this account?"
    );

    if (userConfirmed) {
      const response = await fetch(`http://localhost:4000/users/${userId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access")}`,
        },
      });
      if (response) {
        alert("Successfully Delete Account", window.location.reload());
      } else {
        alert("Error Deleting Account");
      }
    } else {
      console.log("Cancelled Action");
    }
  };
  return (
    <>
      <div className=" w-full min-h-[50px] max-h-full border border-white rounded-md">
        <div className="grid sm:grid-cols-6">
          <div className=" min-h-[50px] mx-auto flex justify-center items-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"
              className="h-[50px]"
            />
          </div>
          <div className=" min-h-[50px] flex justify-center items-center ">
            <h3 className="text-center">{`${user.firstName} ${user.lastName}`}</h3>
          </div>
          <div className=" min-h-[50px] flex justify-center items-center">
            <h3 className="text-center">{user.contactEmail}</h3>
          </div>
          <div className=" min-h-[50px] flex justify-center items-center">
            <h3 className="text-center">{user.contactPhone}</h3>
          </div>
          <div className=" min-h-[50px] flex justify-center items-center">
            <h3 className="text-center">{user.contactAddress}</h3>
          </div>
          <div className=" min-h-[50px] flex justify-center items-center gap-4">
            <Link to={`/profile/admin-update/${user._id}`}>
              <button className="bg-blue-500 p-2 rounded-md text-white">
                Update
              </button>
            </Link>

            <button
              onClick={() => deleteSpecificUser(user._id)}
              className="bg-red-500 p-2 rounded-md text-white"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserBarComponent;
