import { Routes, Route, Navigate } from "react-router-dom";
import { AuthComponent } from "../components/Auth/AuthComponent";
import { Catalog, Singlepage } from "../components/Catalog";
import { CatalogComponent } from "../components/Catalog/CatalogComponent";
import { FooterComponent } from "../components/footer";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<CatalogComponent />}></Route>
      {/* <Route path="posts" element={<Blogpage />}></Route> */}
      <Route path="catalog" element={<CatalogComponent />}></Route>
      <Route path="catalog/:id" element={<Singlepage />}></Route>
      <Route path="/Authorization" element={<AuthComponent />}></Route>
    </Routes>
  );
};
