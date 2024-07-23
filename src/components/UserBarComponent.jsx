import React, { useState, useEffect } from "react";

const UserBarComponent = ({ user }) => {
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
            <button className="bg-blue-500 p-2">Update</button>
            <button className="bg-red-500 p-2">Delete</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserBarComponent;
