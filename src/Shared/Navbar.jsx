import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/logo.jpg"
import { AuthContext } from '../AuthProvider/AuthProvider';
const Navbar = () => {
    const {email} = useContext(AuthContext)
    console.log(email);
    return (
        <div className="navbar bg-green-500">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost mr-6 lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="#363124" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Item 1</a></li>
                        <li> <a>item 3</a> </li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>
                <Link className="h-12 w-20" to={"/"}> <img className='h-full w-full rounded-lg' src={logo} alt="logo" /> </Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Item 1</a></li>
                    <li> <a>item 6</a> </li>
                    <li><a>Item 3</a></li>
                </ul>
            </div>
            <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10  rounded-full">
                        <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                </label>
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-cyan-100 rounded-box w-52">
                    <li>
                        <a className="font-semibold">
                            Profile
                        </a>
                    </li>
                    <li><a className='font-semibold'>Logout</a></li>
                </ul>
            </div>

        </div>
    );
};

export default Navbar;