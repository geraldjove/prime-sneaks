import React, { useState, useEffect } from "react";
import SectionComponent from "../components/SectionComponent";
import Swal from "sweetalert2";

const RegisterPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [contactAddress, setContactAddress] = useState("");
  const [password, setPassword] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [checkboxTnC, setCheckboxTnC] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Success",
      text: "Welcome",
      icon: "success",
    });
  };

  return (
    <>
      <SectionComponent>
        <div className="flex justify-center items-center">
          <div className="max-w-[500px] mx-auto bg-white p-6 space-y-4 md:space-y-6 sm:p-8 rounded-md">
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
                    className="block w-full rounded-md py-1 px-2 bg-gray-200"
                  />
                </div>
                <div className="w-full">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    placeholder="Doe"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="block w-full rounded-md py-1 px-2 bg-gray-200"
                  />
                </div>
              </div>
              <div className="sm:flex gap-4">
                <div className="w-full">
                  <label htmlFor="birthDate">Birth Date</label>
                  <input
                    type="date"
                    name="birthDate"
                    id="birthDate"
                    value={birthDate}
                    onChange={(e) => setBirthDate(e.target.value)}
                    className="block w-full rounded-md py-1 px-2 bg-gray-200"
                  />
                </div>
                <div className="w-full">
                  <label htmlFor="contactPhone">Mobile No.</label>
                  <input
                    type="text"
                    name="contactPhone"
                    id="contactPhone"
                    value={contactPhone}
                    onChange={(e) => setContactPhone(e.target.value)}
                    className="block w-full rounded-md py-1 px-2 bg-gray-200"
                  />
                </div>
              </div>
              <div className="w-full">
                <label htmlFor="contactAddress">Address</label>
                <input
                  type="text"
                  name="contactAddress"
                  id="contactAddress"
                  placeholder="Subdv, Street, City, Country"
                  value={contactAddress}
                  onChange={(e) => setContactAddress(e.target.value)}
                  className="block w-full rounded-md py-1 px-2 bg-gray-200"
                />
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
                  className="block rounded-md py-1 px-2 bg-gray-200"
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
                  className="block rounded-md py-1 px-2 bg-gray-200"
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
                  className="block rounded-md py-1 px-2 bg-gray-200"
                />
              </div>
              <div className="flex gap-5">
                <input
                  type="checkbox"
                  name="checkboxTnC"
                  id="checkboxTnC"
                  value={checkboxTnC}
                  required
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
