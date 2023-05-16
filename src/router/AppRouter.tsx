import { Routes, Route, Navigate } from "react-router-dom";
import { AboutUs } from "../components/aboutUs";
import { Basket } from "../components/basket/Basket";
import { CatalogComponent } from "../components/Catalog/CatalogComponent";
import { AnimatePresence } from "framer-motion";
import { AuthComponent } from "../components/Auth";
import { RequireAuth } from "../hoc/RequireAuth";
import { UserProfile } from "../components/Profile";
import { NotFoundPage } from "../components/NotFoundPage";

export const AppRouter = () => {
  return (
    <AnimatePresence>
      <Routes>
        <Route path="catalog" element={<CatalogComponent />} />
        <Route path="/" element={<Navigate to="/catalog" />} />
        <Route path="authorization" element={<AuthComponent />} />
        <Route
          path="profile"
          element={
            <RequireAuth>
              <UserProfile />
            </RequireAuth>
          }
        />
        <Route path="basket" element={<Basket />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </AnimatePresence>
  );
};
