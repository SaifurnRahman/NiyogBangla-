// src/Routes/Routes.jsx
import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import CompanyDetails from "../Pages/CompanyDetails";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../Pages/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
  },
  {
    path: "/company/:id",
    element: <CompanyDetails />,
    loader: () => fetch("/companies.json"),
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "/auth/login",
        element: <Login />,
      },
    ],
  },
]);