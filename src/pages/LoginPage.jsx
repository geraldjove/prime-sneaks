import React, { useState, useEffect } from "react";
import SectionComponent from "../components/SectionComponent";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const LoginPage = ({ onLogin }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkboxTnC, setCheckboxTnC] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(true);
    Swal.fire({
      title: "Logged in Successfully",
      text: "Welcome",
      icon: "success",
    });
    navigate("/");
  };

  return (
    <>
      <SectionComponent>
        <div className="flex justify-center items-center">
          <div className="max-w-[500px] mx-auto bg-gray-300 p-6 space-y-4 md:space-y-6 sm:p-8 rounded-md">
            <h1 className="text-black font-black text-3xl">
              Sign in to your account
            </h1>
            <form onSubmit={handleSubmit} className="space-y-5">
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
              <div className="flex gap-5">
                <input
                  type="checkbox"
                  name="checkboxTnC"
                  id="checkboxTnC"
                  value={checkboxTnC}
                  onChange={(e) => setCheckboxTnC(e.target.value)}
                />
                <p>Remember me</p>
                <p className="ms-auto text-blue-500 font-medium">
                  Forgot password?
                </p>
              </div>
              <div>
                <button className="bg-blue-500 p-2 w-full rounded-md font-bold text-white">
                  Sign in
                </button>
              </div>
            </form>
            <p>
              Don't have an account yet?{" "}
              <span className="text-blue-500 font-medium">Sign up</span>
            </p>
          </div>
        </div>
      </SectionComponent>
    </>
  );
};

export default LoginPage;
