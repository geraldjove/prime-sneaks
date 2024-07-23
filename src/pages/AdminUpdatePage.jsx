import React from "react";
import SectionComponent from "../components/SectionComponent";
import AdminUpdateProfileComponent from "../components/AdminUpdateProfileComponent";

const AdminUpdatePage = () => {
  return (
    <SectionComponent>
      <div className="flex justify-center items-center">
        <AdminUpdateProfileComponent />
      </div>
    </SectionComponent>
  );
};

export default AdminUpdatePage;
