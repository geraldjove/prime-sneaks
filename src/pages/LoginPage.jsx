import React, { useState, useEffect, useContext } from "react";
import SectionComponent from "../components/SectionComponent";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import UserContext from "../UserContext";

const LoginPage = () => {
  const [contactEmail, setContactEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkboxTnC, setCheckboxTnC] = useState(false);
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const retrieveUserDetails = async (token) => {
    try {
      const apiUrl = "http://localhost:4000";
      const response = await fetch(`${apiUrl}/users/details`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();

      if (data) {
        setUser({
          id: data.result.id,
          isAdmin: data.result.isAdmin,
        });
      }
    } catch (error) {
      console.error("Error retrieving user details:", error);
    }
  };

  const authenticate = async (e) => {
    e.preventDefault();
    const apiUrl = "http://localhost:4000";

    try {
      const response = await fetch(`${apiUrl}/users/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contactEmail,
          password,
        }),
      });

      const data = await response.json();

      if (data.auth) {
        localStorage.setItem("access", data.auth);
        await retrieveUserDetails(data.auth); // Ensure to await this
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: data.message,
        }).then(() => {
          navigate("/profile");
        });
      } else {
        Swal.fire("Error", data.message || "Login failed", "error");
      }
    } catch (error) {
      console.error("Error during authentication:", error);
      Swal.fire("Error", "An error occurred during authentication.", "error");
    }
  };

  return (
    <SectionComponent>
      <div className="flex justify-center items-center">
        <div className="max-w-[500px] mx-auto bg-white p-6 space-y-4 md:space-y-6 sm:p-8 rounded-md">
          <h1 className="text-black font-black text-3xl">
            Sign in to your account
          </h1>
          <form onSubmit={authenticate} className="space-y-5">
            <div className="flex flex-col justify-center">
              <label>Your email</label>
              <input
                type="email"
                name="contactEmail"
                id="contactEmail"
                placeholder="name@company.com"
                value={contactEmail}
                onChange={(e) => setContactEmail(e.target.value)}
                required
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
                required
                onChange={(e) => setPassword(e.target.value)}
                className="block rounded-md py-1 px-2 bg-gray-200"
              />
            </div>
            <div className="flex gap-5">
              <input
                type="checkbox"
                name="checkboxTnC"
                id="checkboxTnC"
                checked={checkboxTnC}
                onChange={(e) => setCheckboxTnC(e.target.checked)}
              />
              <p>Remember me</p>
              <p className="ms-auto text-blue-500 font-medium">
                Forgot password?
              </p>
            </div>
            <div>
              <button
                className="bg-blue-500 p-2 w-full rounded-md font-bold text-white"
                // disabled={!isActive}
              >
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
  );
};

export default LoginPage;
