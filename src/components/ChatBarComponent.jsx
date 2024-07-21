import React from "react";

const ChatBarComponent = () => {
  return (
    <div className=" w-full min-h-[50px] max-h-full border border-white rounded-md">
      <div className="grid sm:grid-cols-6">
        <div className=" min-h-[50px] mx-auto flex justify-center items-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"
            className="h-[50px]"
          />
        </div>
        <div className=" min-h-[50px] flex justify-center items-center ">
          <h3 className="text-center">User Name</h3>
        </div>
        <div className=" min-h-[50px] flex justify-center items-center">
          <h3 className="text-center">Email Address</h3>
        </div>
        <div className=" min-h-[50px] flex justify-center items-center">
          <h3 className="text-center">Message</h3>
        </div>
        <div className=" min-h-[50px] flex justify-center items-center">
          <h3 className="text-center">Read/Unread</h3>
        </div>
        <div className=" min-h-[50px] flex justify-center items-center gap-4">
          <button className="bg-blue-500 p-2">Chat</button>
          <button className="bg-red-500 p-2">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default ChatBarComponent;
