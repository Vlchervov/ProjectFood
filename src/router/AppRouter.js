import { Routes, Route, Navigate } from "react-router-dom";
import { AuthComponent } from "../components/Auth/AuthComponent";
import { Catalog, Singlepage } from "../components/Catalog";
import { CategoriesComponent } from "../components/categories";
import { FooterComponent } from "../components/footer";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<CategoriesComponent />}></Route>
      {/* <Route path="posts" element={<Blogpage />}></Route> */}
      <Route path="categories" element={<CategoriesComponent />}></Route>
      <Route path="categories/:id" element={<Singlepage />}></Route>
      <Route path="/Authorization" element={<AuthComponent />}></Route>
    </Routes>
  );
};
