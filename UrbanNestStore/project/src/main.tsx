import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Authentication from './components/Authentication.tsx'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import PublicRoute from "./components/PublicRoute.tsx";
import ProtectedRoute from "./components/ProtectedRoute.tsx";
import Home from "./pages/Home.tsx"
import "./index.css";
import CategoryPage from './pages/CategoryPage.tsx';
import ContactUs from './pages/ContactUsPage.tsx';
import ProductPage from './pages/ProductPage.tsx';
import Cart from './pages/CartPage.tsx';
import Checkout from './pages/CheckoutPage.tsx';
import OrderComplete from './pages/OrderCompletePage.tsx';
import Profile from './pages/ProfilePage.tsx';

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
  {
    path: "/checkout",
    element: <ProtectedRoute element={<Checkout />} />,
  },
  {
    path: "/ordercomplete",
    element: <ProtectedRoute element={<OrderComplete />} />,
  },
  {
    path: "/profile",
    element: <ProtectedRoute element={<Profile/>} />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
 <RouterProvider router={router} />
  </StrictMode>,
)
