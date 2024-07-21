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

const App = () => {
  const [shoes, setShoes] = useState([]);
  const [isLogged, setIsLogged] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const handleLogin = (credentials) => {
    if (credentials === true) {
      setIsLogged(true);
      setIsAdmin(true);
    } else if (credentials === false) {
      setIsLogged(false);
      setIsAdmin(false);
    } else {
      console.log("error");
    }
    console.log(typeof credentials);
  };

  useEffect(() => {
    setShoes(shoesData.sneakers.map((shoe) => shoe));
  }, []);

  console.log(shoes);
  return (
    <>
      <Router>
        <NavbarComponent isLogged={isLogged} isAdmin={isAdmin} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ProductsPage />} />
          {shoes.map((shoe, index) => (
            <Route
              path={`/shop/${index}`}
              key={index}
              element={<ProductPage shoe={shoe} index={index} />}
            />
          ))}
          {isLogged ? (
            <>
              <Route
                path="/profile"
                element={<ProfilePage onLogin={handleLogin} />}
              />
              <Route
                path="/admin-dashboard"
                element={<AdminPage shoes={shoes} onLogin={handleLogin} />}
              />
            </>
          ) : (
            <>
              <Route path="/register" element={<RegisterPage />} />
              <Route
                path="/login"
                element={<LoginPage onLogin={handleLogin} />}
              />
            </>
          )}
          <Route path="/cart" element={<CartPage shoes={shoes} />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <FooterComponent />
      </Router>
    </>
  );
};

export default App;
