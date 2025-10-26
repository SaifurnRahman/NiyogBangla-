// src/Routes/Routes.jsx
import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import CompanyDetails from "../Pages/CompanyDetails";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import MyProfile from "../Pages/MyProfile";

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
      {
        path : '/auth/registration',
        element: <Register></Register>
      }
    ],
  },
  {
    path: '/myprofile',
    element: <MyProfile></MyProfile>
  }
]);