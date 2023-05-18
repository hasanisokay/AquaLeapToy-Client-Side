import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()
    console.log(location);
    if(loading){
       
        return <div className='text-center my-40'><button className="btn btn-ghost text-2xl text-orange-700 btn-xl loading">loading</button></div>
    }
    if(user){
        return children
    }
    else{
    
        return <Navigate to="/login" state={location}></Navigate>
    }
};

export default PrivateRoute;