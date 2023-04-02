import { Routes, Route, Navigate } from "react-router-dom";
import { AboutUs } from "../components/aboutUs";
import { AuthComponent } from "../components/Auth/AuthComponent";
import { Basket } from "../components/basket/Basket";
import { Singlepage } from "../components/Catalog";
import { CatalogComponent } from "../components/Catalog/CatalogComponent";
import { Orders } from "../components/orders";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="catalog" element={<CatalogComponent />} />
      <Route path="/" element={<Navigate to="/catalog" />} />
      {/* <Route path="posts" element={<Blogpage />}></Route> */}
      <Route path="catalog/:id" element={<Singlepage />} />
      <Route path="basket" element={<Basket />} />
      <Route path="orders" element={<Orders />} />
      <Route path="about-us" element={<AboutUs />} />
      <Route path="Authorization" element={<AuthComponent />} />
    </Routes>
  );
};
