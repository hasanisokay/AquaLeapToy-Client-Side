import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Lottie from "lottie-react";
import loadingJson from "../assets/jsonLottieFiles/loading.json"


const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()
   
    if(loading){
       return <div className='flex justify-center items-center flex-col'>
        <h1 className='mt-8 text-2xl font-semibold'>Loading.... Please Wait</h1>
        <Lottie animationData={loadingJson} className='w-80'/>
        </div>
    }
    if(user){
        return children
    }
    else{
    
        return <Navigate to="/login" state={location}></Navigate>
    }
};

export default PrivateRoute;