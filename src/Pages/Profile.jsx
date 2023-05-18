import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';

const Profile = () => {
    const { user, varifyEmail } = useContext(AuthContext);
    const handleVarifyEmail = ()=>{
        varifyEmail()
        .then(result=>{
            Swal.fire(
                'Email sent!',
                'Varification email has been send. Please check your spam folder if not found.',
                'success'
              )
        })
        .catch(error => {
            const message = error.message.slice(10)
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: `${message}`,
            })

        })
    }
    console.log(user);
    return (
        <div className="lg:flex-row items-center justify-center flex flex-col gap-10 mx-10 my-10">
            <div className='text-xl'>
                <h2>Name: <span className='font-semibold'>{user.displayName}</span> </h2>
                <p>Email: <span className='font-medium'>{user.email}</span> </p>
                <p>Email Varified: <span className='font-medium'>{user.emailVerified ? "Yes" : "No"}</span></p>
                <p>Phone Number: <span className='font-medium'>{user.phoneNumber ? user.phoneNumber : "Not Given"}</span></p>
                { !user.emailVerified && <button className='btn mt-8' onClick={handleVarifyEmail}>Verify your Email</button>}
            </div>
           <div> <img src={user.photoURL} className=' h-80 rounded' alt="profile photo" /></div>
        </div>
    );
};

export default Profile;