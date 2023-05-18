import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Profile = () => {
    const { user } = useContext(AuthContext);
    console.log(user);
    return (
        <div className="card lg:w-1/2 w-11/12 shadow-xl my-8 mx-auto">
        <figure><img src={user.photoURL} className='w-1/2 rounded-full' alt="profile photo" /></figure>
        <div className="card-body text-center text-xl font-medium">
          <h2 className="">Name: {user.displayName}</h2>
          <p>Email: {user.email}</p>
          <p>Email Varified: {user.emailVerified ? "Yes" : "No" }</p>
          <p>Phone Number: {user.phoneNumber ? user.phoneNumber  : "Not Given" }</p>
          <button className='btn'>Verify your Email</button>
        </div>
      </div> 
    );
};

export default Profile;