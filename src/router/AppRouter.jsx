import { Routes, Route, Navigate } from "react-router-dom";
import { AboutUs } from "../components/aboutUs";
import { Basket } from "../components/basket/Basket";
import { CatalogComponent } from "../components/Catalog/CatalogComponent";
import { Orders } from "../components/orders";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="catalog" element={<CatalogComponent />} />
      <Route path="/" element={<Navigate to="/catalog" />} />
      <Route path="basket" element={<Basket />} />
      <Route path="orders" element={<Orders />} />
      <Route path="about-us" element={<AboutUs />} />
    </Routes>
  );
};