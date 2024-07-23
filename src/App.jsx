import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import NavbarComponent from "./components/NavbarComponent";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import FooterComponent from "./components/FooterComponent";
import ProductPage from "./pages/ProductPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import UpdatePage from "./pages/UpdatePage";
import UpdatePasswordPage from "./pages/UpdatePasswordPage";
import AdminPage from "./pages/AdminPage";
import AdminUpdatePage from "./pages/AdminUpdatePage";
import CartPage from "./pages/CartPage";
import NotFoundPage from "./pages/NotFoundPage";
import { UserProvider } from "./UserContext";

const App = () => {
  const [shoes, setShoes] = useState([]);
  const [user, setUser] = useState({ id: null, isAdmin: null });
  const navigate = useNavigate();

  const unsetUser = () => {
    localStorage.clear();
    setUser({ id: null, isAdmin: null });
  };
  // Shoes

  useEffect(() => {
    const fetchData = async () => {
      const fetchShoesData = await fetch("http://localhost:8000/sneakers");
      const data = await fetchShoesData.json();
      if (data) {
        setShoes(data);
      } else {
        console.log("Error fetching data");
      }
    };
    fetchData();
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

  // Delete User
  const deleteUser = async () => {
    const userConfirmed = window.confirm(
      "Do you want to permanently delete this account?"
    );

    if (userConfirmed) {
      const response = await fetch(`http://localhost:4000/users/${user.id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access")}`,
        },
      });
      if (response) {
        alert("Successfully Delete Account", navigate("/login"));
        unsetUser();
      } else {
        alert("Error Deleting Account");
      }
    } else {
      console.log("Cancelled Action");
    }
  };

  return (
    <>
      <UserProvider value={{ user, setUser, unsetUser, shoes, deleteUser }}>
        <NavbarComponent />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ProductsPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/shop/:id" element={<ProductPage />} />
          <Route path="*" element={<NotFoundPage />} />
          {user.id !== null && (
            <>
              {user.isAdmin && (
                <>
                  <Route path="/admin-dashboard" element={<AdminPage />} />
                  <Route
                    path="/profile/admin-update/:id"
                    element={<AdminUpdatePage />}
                  />
                </>
              )}
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/profile/update/:id" element={<UpdatePage />} />
              <Route
                path="/profile/update/password/:id"
                element={<UpdatePasswordPage />}
              />
            </>
          )}
        </Routes>
        <FooterComponent />
      </UserProvider>
    </>
  );
};

export default App;
