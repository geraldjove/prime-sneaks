import React, { useState, useEffect } from "react";
import SectionComponent from "../components/SectionComponent";

const RegisterPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkboxTnC, setCheckboxTnC] = useState(false);

  const handleSubmit = () => {
    console.log("Test Click");
  };

  return (
    <>
      <SectionComponent>
        <div className="flex justify-center items-center">
          <div className="max-w-[500px] mx-auto bg-gray-300 p-6 space-y-4 md:space-y-6 sm:p-8 rounded-md">
            <h1 className="text-black font-black text-3xl">
              Create an account
            </h1>
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
                    className="block w-full rounded-md py-1 px-2"
                  />
                </div>
                <div className="w-full">
                  <label htmlFor="firstName">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    placeholder="Doe"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="block w-full rounded-md py-1 px-2"
                  />
                </div>
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
                  className="block rounded-md py-1 px-2"
                />
              </div>
              <div className="flex flex-col justify-center">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="********"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block rounded-md py-1 px-2"
                />
              </div>
              <div className="flex flex-col justify-center">
                <label>Confirm password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="********"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block rounded-md py-1 px-2"
                />
              </div>
              <div className="flex gap-5">
                <input
                  type="checkbox"
                  name="checkboxTnC"
                  id="checkboxTnC"
                  value={checkboxTnC}
                  onChange={(e) => setCheckboxTnC(e.target.value)}
                />
                <p>I accept the Terms and Conditions</p>
              </div>
              <div>
                <button className="bg-blue-500 p-2 w-full rounded-md font-bold text-white">
                  Create an account
                </button>
              </div>
            </form>
            <p>Already have an account? Login here</p>
          </div>
        </div>
      </SectionComponent>
    </>
  );
};

export default RegisterPage;
