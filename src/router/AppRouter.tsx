import { Routes, Route, Navigate } from "react-router-dom";
import { AboutUs } from "../components/aboutUs";
import { Basket } from "../components/basket/Basket";
import { CatalogComponent } from "../components/Catalog/CatalogComponent";
import { AnimatePresence } from "framer-motion";
import { RequireProfile, RequireAuthorization } from "../hoc/RequireAuth";
import { UserProfile } from "../components/Profile/UserProfileComponent";
import { NotFoundPage } from "../components/NotFoundPage/NotFoundPageComponent";
import { AuthComponent } from "../components/Auth/AuthComponent";

export const AppRouter = () => {
  return (
    <AnimatePresence>
      <Routes>
        <Route path="/catalog" element={<CatalogComponent />} />
        <Route path="/" element={<Navigate to="/catalog" />} />
        <Route
          path="/authorization"
          element={
            <RequireAuthorization>
              <AuthComponent />
            </RequireAuthorization>
          }
        />
        <Route
          path="/profile"
          element={
            <RequireProfile>
              <UserProfile />
            </RequireProfile>
          }
        />
        <Route path="/basket" element={<Basket />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </AnimatePresence>
  );
};
