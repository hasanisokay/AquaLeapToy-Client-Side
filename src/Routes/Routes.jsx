import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../components/Home';
import Homepage from '../components/Homepage/Homepage';
import Login from '../Pages/Login';
import SignUp from '../Pages/SignUp';
import AboutUs from '../Pages/AboutUs';
import Blog from '../Pages/Blog';





export const router = createBrowserRouter([
    {
        path:"/",
        element: <Home></Home>,
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