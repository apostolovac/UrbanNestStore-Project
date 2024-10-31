import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Authentication from './components/Authentication.tsx'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import PublicRoute from "./components/PublicRoute.tsx";
import ProtectedRoute from "./components/ProtectedRoute.tsx";
import Home from "./components/Home.tsx"
import "./index.css";
import CategoryPage from './components/CategoryPage.tsx';
import ContactUs from './components/ContactUs.tsx';
import ProductPage from './components/ProductPage.tsx';
import Cart from './components/CartPage.tsx';

const router = createBrowserRouter([

  {
    path: "/",
    element: <PublicRoute element={<Authentication />} />,
  },
  {
    path: "/home",
    element: <ProtectedRoute element={<Home />} />,
  },
  {
    path: "/category/:category",
    element: <ProtectedRoute element={<CategoryPage />} />, 
  },
  {
    path: "/contact-us",
    element: <ContactUs />,
  },
  {
    path: "/product/:id",
    element: <ProtectedRoute element={<ProductPage />} />,
  },
  {
    path: "/cart",
    element: <ProtectedRoute element={<Cart />} />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
 <RouterProvider router={router} />
  </StrictMode>,
)
