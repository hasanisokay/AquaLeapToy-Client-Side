import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/logo2.png"
import { AuthContext } from '../AuthProvider/AuthProvider';
const Navbar = () => {
    const { email } = useContext(AuthContext)
    console.log(email);
    return (
        <div className="navbar bg-slate-300">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow-xl  w-52 bg-zinc-300">
                        <li> <Link>Home</Link> </li>
                        <li> <Link>Blog</Link> </li>
                        <li> <Link>My Toys</Link> </li>
                        <li> <Link>All Toys</Link> </li>
                    </ul>
                </div>
                <Link className="h-16 hover:bg-slate-400 rounded">
                    <img src={logo} className='h-full' alt="logo" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li> <Link>Home</Link> </li>
                    <li> <Link>Blog</Link> </li>
                    <li> <Link>My Toys</Link> </li>
                    <li> <Link>All Toys</Link> </li>
                </ul>
            </div>
            <div className="navbar-end">
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </label>
                    <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-zinc-300 w-52 ">
                        <li><a>Profile</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;