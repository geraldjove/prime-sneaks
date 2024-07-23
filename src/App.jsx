import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarComponent from "./components/NavbarComponent";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import FooterComponent from "./components/FooterComponent";
import ProductPage from "./pages/ProductPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import AdminPage from "./pages/AdminPage";
import CartPage from "./pages/CartPage";
import NotFoundPage from "./pages/NotFoundPage";
import shoesData from "../api.json";
import { UserProvider } from "./UserContext";

const App = () => {
  const [shoes, setShoes] = useState([]);
  const [user, setUser] = useState({ id: null, isAdmin: null });

  const unsetUser = () => {
    localStorage.clear();
    setUser({ id: null, isAdmin: null });
  };
  // Shoes

  useEffect(() => {
    setShoes(shoesData);
    console.log("This is shoe data ", shoesData);
  }, []);

  // Users
  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = "http://localhost:4000";
        const response = await fetch(`${apiUrl}/users/details`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access")}`,
          },
        });
        const data = await response.json();
        if (data) {
          setUser({
            id: data.result.id,
            email: data.result.contactEmail,
            isAdmin: data.result.isAdmin,
          });
        } else {
          setUser({
            id: null,
            email: null,
            isAdmin: null,
          });
        }
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    console.log("State: ");
    console.log(user); // checks the state
    console.log("Local storage");
    console.log(localStorage); // checks the localStorage
  }, [user]); // Log state changes

  return (
    <>
      <UserProvider value={{ user, setUser, unsetUser, shoes }}>
        <Router>
          <NavbarComponent />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<ProductsPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/admin-dashboard" element={<AdminPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/shop/:id" element={<ProductPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          <FooterComponent />
        </Router>
      </UserProvider>
    </>
  );
};

export default App;
