import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()
   
    if(loading){
       return <div className='text-center relative my-40'>
        <p className='text-3xl font-medium'>Reloading... Please Wait.</p>
        <progress className="progress w-56"></progress>
        
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