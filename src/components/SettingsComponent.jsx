import React from "react";

const SettingsComponent = () => {
  return (
    <div className="border-2 rounded-lg overflow-auto min-h-[100vh] max-h-[100vh]">
      <div className="p-5">
        <form>
          <div>
            <label className="block">Site Name</label>
            <input type="text" className="w-full" />
          </div>
          <div>
            <label className="block">Site Description</label>
            <textarea className="w-full"></textarea>
          </div>
          <div className="flex gap-2">
            <button className="bg-blue-500 p-2 px-5">Save</button>
            <button className="bg-gray-400 p-2 px-5">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SettingsComponent;
