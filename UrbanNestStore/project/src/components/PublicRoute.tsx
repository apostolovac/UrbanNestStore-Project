import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface PublicRouteProps {
  element: ReactNode;
}

const PublicRoute = ({ element }: PublicRouteProps) => {
  const token = localStorage.getItem("token");

  // If token doesn't exist, render the element (sign-up or sign-in), otherwise redirect to /home
  return !token ? (
    element
  ) : (
    <Navigate to="/home" />
  );
};

export default PublicRoute;