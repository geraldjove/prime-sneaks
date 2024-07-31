import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate, useParams } from "react-router-dom";
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
import EditProductPage from "./pages/EditProductPage";
import { UserProvider } from "./UserContext";
import AddProductPage from "./pages/AddProductPage";

const App = () => {
  const [shoes, setShoes] = useState([]);
  const [user, setUser] = useState({ id: null, isAdmin: null });
  const navigate = useNavigate();
  const { id } = useParams();

  const unsetUser = () => {
    localStorage.clear();
    setUser({ id: null, isAdmin: null });
  };
  // Fetch Shoes

  useEffect(() => {
    const fetchData = async () => {
      const fetchShoesData = await fetch("http://localhost:4000/products/all", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access")}`,
        },
      });
      const data = await fetchShoesData.json();
      if (data) {
        setShoes(data);
      } else {
        console.log("Error fetching data");
      }
    };
    fetchData();
  }, []);

  console.log(shoes);

  // Add Product
  const addProduct = async (product) => {
    const formData = new FormData();

    formData.append("image", product.image);
    formData.append("name", product.name);
    formData.append("description", product.description);
    formData.append("rating", product.rating);
    formData.append("price", product.price);
    formData.append("size", product.size);
    formData.append("color", product.color);
    formData.append("isActive", product.isActive);
    formData.append("isSale", product.isSale);
    formData.append("discountedPrice", product.discountedPrice);

    try {
      const addProductFetch = await fetch("http://localhost:4000/products", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access")}`,
        },
        body: formData, // Correct this line
      });

      const productParse = await addProductFetch.json();
      if (productParse) {
        console.log(productParse);
        window.alert("Successfully added product!", productParse);
      } else {
        window.alert("Error adding product!");
      }
    } catch (error) {
      window.alert("Error adding product!" + error);
    }
  };

  // Update Product
  const updateProduct = async (product) => {
    const formData = new FormData();

    formData.append("image", product.image);
    formData.append("name", product.name);
    formData.append("description", product.description);
    formData.append("rating", product.rating);
    formData.append("price", product.price);
    formData.append("discountedPrice", product.discountedPrice);
    formData.append("size", product.size);
    formData.append("color", product.color);
    formData.append("isActive", product.isActive);
    formData.append("isSale", product.isSale);

    console.log(formData);

    try {
      const updateProductFetch = await fetch(
        `http://localhost:4000/products/update/${product.id}`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access")}`,
          },
          body: formData, // Correct this line
        }
      );
      console.log(updateProductFetch);
      const productParse = await updateProductFetch.json();
      if (productParse) {
        console.log(productParse);
        window.alert("Successfully updated product!", productParse);
      } else {
        window.alert("Error updated product!");
      }
    } catch (error) {
      window.alert("Error updated product!" + error);
    }
  };

  // Delete Product

  const deleteProduct = async (id) => {
    const response = await fetch(
      `http://localhost:4000/products/delete/${id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access")}`,
        },
      }
    );

    const confirm = window.confirm(`Do you wish to delete ${id}?`);
    if (confirm) {
      const data = response.json();
      if (data) {
        window.alert("Successfully delete product", window.location.reload());
      } else {
        window.alert("Failed to delete product");
      }
    }
  };

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
  const deleteUser = async (userId) => {
    console.log(userId);
    const userConfirmed = window.confirm(
      "Do you want to permanently delete this account?"
    );

    if (userConfirmed) {
      const response = await fetch(`http://localhost:4000/users/${userId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access")}`,
        },
      });
      if (response) {
        if (user.isAdmin) {
          alert("Successfully Delete Account", navigate("/admin-dashboard"));
        } else {
          alert("Successfully Delete Account", navigate("/login"));
          unsetUser();
        }
      } else {
        alert("Error Deleting Account");
      }
    } else {
      console.log("Cancelled Action");
    }
  };

  return (
    <>
      <UserProvider
        value={{
          user,
          setUser,
          unsetUser,
          shoes,
          deleteUser,
          addProduct,
          updateProduct,
          deleteProduct,
        }}
      >
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
                  <Route
                    path="/admin-dashboard"
                    element={<AdminPage addProduct={addProduct} />}
                  />

                  <Route
                    path="/profile/admin-update/:id"
                    element={<AdminUpdatePage />}
                  />
                  <Route path="/products/add" element={<AddProductPage />} />
                  <Route
                    path="/products/edit/:id"
                    element={<EditProductPage />}
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
