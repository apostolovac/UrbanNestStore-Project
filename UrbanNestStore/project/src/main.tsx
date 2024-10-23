import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Auth from './components/Auth'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import PublicRoute from "./components/PublicRoute.js";
import ProtectedRoute from "./components/ProtectedRoute.js";
import Home from "./components/Home.js"
import "./index.css";

const router = createBrowserRouter([

  {
    path: "/",
    element: <PublicRoute element={<Auth />} />,
  },
  {
    path: "/home",
    element: <ProtectedRoute element={<Home />} />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
 <RouterProvider router={router} />
  </StrictMode>,
)