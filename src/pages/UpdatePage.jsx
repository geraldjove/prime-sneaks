import React from "react";
import SectionComponent from "../components/SectionComponent";
import UpdateProfileComponent from "../components/UpdateProfileComponent";

const UpdatePage = () => {
  return (
    <SectionComponent>
      <div className="flex justify-center items-center">
        <UpdateProfileComponent />
      </div>
    </SectionComponent>
  );
};

export default UpdatePage;
