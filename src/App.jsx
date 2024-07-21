import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarComponent from "./components/NavbarComponent";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import FooterComponent from "./components/FooterComponent";
import ProductPage from "./pages/ProductPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";
import shoesData from "../api.json";

const App = () => {
  const [shoes, setShoes] = useState([]);

  useEffect(() => {
    setShoes(shoesData.sneakers.map((shoe) => shoe));
  }, []);

  console.log(shoes);
  return (
    <>
      <Router>
        <NavbarComponent />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ProductsPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          {shoes.map((shoe, index) => (
            <Route
              path={`/shop/${index}`}
              key={index}
              element={<ProductPage shoe={shoe} index={index} />}
            />
          ))}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <FooterComponent />
      </Router>
    </>
  );
};

export default App;
