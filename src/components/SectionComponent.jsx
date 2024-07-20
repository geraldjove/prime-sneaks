import React from "react";

const SectionComponent = ({ children }) => {
  return (
    <>
      <section className="bg-background p-5">
        <div className="container mx-auto">{children}</div>
      </section>
    </>
  );
};

export default SectionComponent;
