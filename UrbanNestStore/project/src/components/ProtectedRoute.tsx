import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useStore } from "../store/useStore";

interface ProtectedRouteProps {
  element: ReactNode;
}

const ProtectedRoute = ({ element }: ProtectedRouteProps) => {
  const isLoggedIn = useStore((state) => state.isLoggedIn);

  return isLoggedIn ? element : <Navigate to="/" />;
};

export default ProtectedRoute;