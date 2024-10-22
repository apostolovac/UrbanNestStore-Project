import { ReactNode } from "react";
import { Navigate } from "react-router-dom";


interface ProtectedRouteProps {
    element: ReactNode;
  }
const ProtectedRoute = ({ element }: ProtectedRouteProps) => {
  const token = localStorage.getItem("token");

  return token ? element : <Navigate to="/" />;
};
export default ProtectedRoute;