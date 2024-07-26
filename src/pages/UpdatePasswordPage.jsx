import React from "react";
import SectionComponent from "../components/SectionComponent";
import UpdatePasswordComponent from "../components/UpdatePasswordComponent";

const UpdatePage = () => {
  return (
    <SectionComponent>
      <div className="flex justify-center items-center">
        <UpdatePasswordComponent />
      </div>
    </SectionComponent>
  );
};

export default UpdatePage;
