import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../components/Home';
import Homepage from '../components/Homepage/Homepage';
import Login from '../Pages/Login';
import SignUp from '../Pages/SignUp';
import AboutUs from '../Pages/AboutUs';
import Blog from '../Pages/Blog';
import MyToys from '../Pages/MyToys';
import AllToys from '../Pages/AllToys';
import AddAToy from '../Pages/AddAToy';
import Profile from '../Pages/Profile';
import PrivateRoute from './PrivateRoute';
import ErrorPage from '../Pages/ErrorPage';
import ToyDetails from '../Pages/ToyDetails';
import UpdateToy from '../Pages/UpdateToy';





export const router = createBrowserRouter([
    {
        path:"/",
        element: <Home></Home>,
        errorElement: <ErrorPage></ErrorPage> ,
        children:[
            {
                path:"/",
                element: <Homepage></Homepage>
            },
            {
                path:"/login",
                element:<Login></Login>
            },
            {
                path:"signup",
                element: <SignUp></SignUp>
            },
            {
                path:"/about-us",
                element: <AboutUs></AboutUs>
            },
            {
                path:'blog',
                element: <Blog></Blog>
            },
            {
                path:"my-toys",
                element: <PrivateRoute><MyToys></MyToys></PrivateRoute>
            },
            {
                path: "all-toys",
                element: <AllToys></AllToys>
            },
            {
                path: "add-toy",
                element: <PrivateRoute><AddAToy></AddAToy></PrivateRoute>
            },
            {
                path: "profile",
                element: <PrivateRoute><Profile></Profile></PrivateRoute>
            },
            {
                path: "toy-details/:id",
                element: <PrivateRoute><ToyDetails></ToyDetails></PrivateRoute>
            },
            {
                path: "update-toy/:id",
                element: <PrivateRoute><UpdateToy></UpdateToy></PrivateRoute>,
                loader: ({params})=>fetch(`https://toy-market-server-8mjxd70mo-hasanisokay.vercel.app/toy/${params.id}`)
            }
        ]
    }
]) 
const Routes = () => {
    return (
        <div>
            
        </div>
    );
};

export default Routes;