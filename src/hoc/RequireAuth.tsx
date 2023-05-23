import { Navigate, useLocation } from "react-router";

interface IChild {
  children: JSX.Element;
}

export const RequireProfile = ({ children }: IChild) => {
  const location = useLocation();

  if (!localStorage.getItem("user")) {
    return <Navigate to="/authorization" state={{ from: location }} />;
  }

  return children;
};

export const RequireAuthorization = ({ children }: IChild) => {
  const location = useLocation();

  if (localStorage.getItem("user")) {
    return <Navigate to="/profile" state={{ from: location }} />;
  }

  return children;
};
