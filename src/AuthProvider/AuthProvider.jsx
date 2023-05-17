import React, { createContext } from 'react';
import {getAuth} from "firebase/auth";
import app from '../Firebase/firebase.config';

export const AuthContext = createContext(null);


const AuthProvider = ({children}) => {
    const auth = getAuth(app)



    const authinfo = {email:"HHHH"}
    return (
        <AuthContext.Provider value={authinfo}>
            {children}            
        </AuthContext.Provider>
    );
};

export default AuthProvider;