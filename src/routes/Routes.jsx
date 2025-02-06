import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import AddProducts from "../pages/AddProducts";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Products from "../pages/Products";
import Profile from "../pages/Profile";
import Register from "../pages/Register";
import SingleProduct from "../pages/SingleProduct";
import SingleUser from "../pages/SingleUser";
import Users from "../pages/Users";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        errorElement: <ErrorPage />,
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: 'users',
                element: <Users />
            },
            {
                path: 'user/:id',
                element: <SingleUser />,
            },
            {
                path: 'products',
                element: <Products />
            },
            {
                path: 'product/:id',
                element: <SingleProduct />
            },
            {
                path: 'add-product',
                element: <AddProducts />
            },
            {
                path: 'profile',
                // element: <Profile />
                element: <PrivateRoute><Profile /></PrivateRoute>
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'register',
                element: <Register />,
            },
        ]
    }
]);

export default router;
