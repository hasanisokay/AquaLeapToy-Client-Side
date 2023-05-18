import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user} = useContext(AuthContext);
    
    return (
        <div>
            {children}
        </div>
    );
};

export default PrivateRoute;