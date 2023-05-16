import { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import CartContext from "../context/global/globalContext";

export const RequireAuth = ({ children }: any) => {
  const location = useLocation();
  const { isAuthorized } = useContext(CartContext);

  if (!isAuthorized) {
    return <Navigate to="/authorization" state={{ from: location }} />;
  }

  return children;
};
