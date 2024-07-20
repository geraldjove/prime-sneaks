import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarComponent from "./components/NavbarComponent";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import FooterComponent from "./components/FooterComponent";

const App = () => {
  return (
    <>
      <NavbarComponent />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ProductsPage />} />
        </Routes>
      </Router>
      <FooterComponent />
    </>
  );
};

export default App;
