import React from "react";
import logo from "./logo.svg";
import "./App.css";
import SignIn from "./pages/SignIn";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Register from "./pages/Register";
import ProductCreate from "./pages/ProductCreate";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/sign" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/product/create" element={<ProductCreate />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
