import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import CompanyDetails from "../Pages/CompanyDetails";

export const router = createBrowserRouter([
    {
        path:'/',
        Component: HomeLayout,
        children: [
            
        ]
    }, 
    {
        path: '/company/:id',
        Component: CompanyDetails,
        loader: () => fetch('/companies.json')
    }
])