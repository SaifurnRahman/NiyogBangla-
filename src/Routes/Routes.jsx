// src/Routes/Routes.jsx
import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import CompanyDetails from "../Pages/CompanyDetails";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import MyProfile from "../Pages/MyProfile";
import PrivateRoute from "./PrivateRoute";
import About from "../Pages/About";
import ErrorPage from "../Pages/ErrorPage";
import Loading from '../Components/Loading';


export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
  },
  {
    path: "/company/:id",
    element: <PrivateRoute><CompanyDetails />,</PrivateRoute>,
    loader: () => fetch("/companies.json"),
    hydrateFallbackElement: <Loading></Loading>
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
    element: <PrivateRoute><MyProfile></MyProfile></PrivateRoute>
  },
  {

    path: '/about',
    element: <About></About>
  },
  {
    path: '/*',
    element: <ErrorPage></ErrorPage>
  }
]);