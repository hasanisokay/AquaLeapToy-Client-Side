import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaFacebook, FaGoogle } from "react-icons/fa";
import Swal from 'sweetalert2';
import { AuthContext } from '../AuthProvider/AuthProvider';
const SignUp = () => {
    document.title = "AquaLeapToy | SignUp"

    const location = useLocation()
    const { register, setProfile, withFacebook, withGoogle } = useContext(AuthContext)
    const navigate = useNavigate()
    const [password, setPassword] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const [emailError, setEmailError] = useState("")
    const [email, setEmail] = useState("")

    const handleEmail = e => {

        const input = e.target.value;
        if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input)) {
            setEmailError("Please enter a valid email")
        }
        else {
            setEmailError("")
        }
        if (input === "") {
            setEmailError("")
        }
        setEmail(input)
    }

    const handlePassword = e => {
        const input = e.target.value;
        if (input.length < 6) {
            setPasswordError("Password must be at least 6 character long")
        }
        else if (input.length > 5) {
            setPasswordError("")
        }
        if (input === "") {
            setPasswordError("")
        }
        setPassword(input)
    }

    const handleRegister = e => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        const name = form.name.value
        const photourl = form.photourl.value

        register(email, password)
            .then(result => {
                const user = result.user;
                setProfile(name, photourl)
                    .then()
                    .catch()
                navigate(location?.state?.pathname || "/")
            })
            .catch(error => {
                const message = error.message.slice(10)
                console.log(error, error.message);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: `${message}`,
                })
            })
    }


    const handleGoogleSignUp = () => {
        withGoogle()
            .then(result => navigate(location?.state?.pathname || "/")
            )
            .catch(error => {
                const message = error.message.slice(10)
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: `${message}`,
                })

            })
    }
    const handleFacebookSignUp = () => {
        withFacebook()
        .then(result=> navigate(location?.state?.pathname || "/"))
        .catch(error => {
            const message = error.message.slice(10)
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: `${message}`,
            })

        })
    }
    return (
        <>
            <h1 className='text-4xl font-semibold text-center my-4 text-slate-700'>Sign Up</h1>
            <h1 className='text-lg font-medium text-center text-slate-800 mx-4'>Please Sign Up for exiciting features like saving toys, adding and selling your own toys, pin blogs... </h1>
        <div className="card-body shadow-xl mx-auto lg:w-1/2 my-4">
            <form onSubmit={handleRegister}>
                <label className="label">
                    <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="name" className="input input-bordered w-5/6" required name='name' />

                
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" className="input input-bordered w-5/6" required name='email'
                    value={email} onChange={handleEmail} />
                <p className='text-error'>{emailError}</p>

                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" className="input input-bordered w-5/6" required name='password'
                    value={password} onChange={handlePassword}
                />
                <p className='text-error'>{passwordError}</p>

                <label className="label">
                    <span className="label-text">Photo Url</span>
                </label>
                <input type="url" placeholder="photo url" className="input input-bordered w-5/6" required name='photourl' />

                <br />
                <input className="btn bg-slate-500 border-0 mt-4  w-5/6" type='submit' name='submit' value="register" />
                <div>
                    <p>Already have an account? <Link to="/login" className='text-blue-800'>Please login</Link> </p>
                </div>
                <p className='text-sm mt-2'>Or, continue with</p>
                
            </form>
            <div className='flex gap-4 ms-4'>
                    <button className="text-red-600 rounded-full" title='Google' onClick={handleGoogleSignUp} >
                        <FaGoogle className='h-10 w-10'/>
                        </button>
                    <button className="text-blue-600  rounded-full" title='Facebook' onClick={handleFacebookSignUp} >
                        <FaFacebook className='h-10 w-10'/>
                        </button>
                   
                </div>
        </div>
    </>
    );
};

export default SignUp;