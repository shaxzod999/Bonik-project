import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import AddProduct from "./AddProduct";
import Register from "./Register";
import Login from "./Login";
import Card from "./Card";
import Favourite from "./Favourite";
import Laptops from "./Laptops";
import Mice from "./Mice";
import Keyboards from "./Keyboards";
import Headphones from "./Headphones";
import Phones from "./Phones";
import Microphones from "./Microphones";
import Processors from "./Processors";
import VideoCards from "./VideoCards";
import Monitors from "./Monitors";
import ScrollToTop from "./ScrollToTop";
import Product from "./Product";

function AppRouter() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/card" element={<Card />} />
        <Route path="/favourite" element={<Favourite />} />
        <Route path="/product/:id" element={<Product />} />

        <Route path="/laptops" element={<Laptops />} />
        <Route path="/mice" element={<Mice />} />
        <Route path="/keyboards" element={<Keyboards />} />
        <Route path="/headphones" element={<Headphones />} />
        <Route path="/phones" element={<Phones />} />
        <Route path="/microphones" element={<Microphones />} />
        <Route path="/processors" element={<Processors />} />
        <Route path="/video-cards" element={<VideoCards />} />
        <Route path="/monitors" element={<Monitors />} />
      </Routes>
    </BrowserRouter>
  );
}
export default AppRouter;
