import React, { useContext } from 'react';
import { Link, Link as NavLink } from 'react-router-dom';
import logo from "../assets/logo2.png"
import { AuthContext } from '../AuthProvider/AuthProvider';
const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const conditionalMenu = <>
        <li> <NavLink to={"/my-toys"}>My Toys</NavLink> </li>
        <li> <NavLink to={"add-toy"}>Add a Toy</NavLink> </li>
    </>

    return (
        <div className="navbar bg-slate-300">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow-xl  w-52 bg-zinc-300">
                        <li> <NavLink to={"/"}>Home</NavLink> </li>
                        <li> <NavLink to={"/all-toys"}>All Toys</NavLink> </li>
                        {user && conditionalMenu }
                        <li> <NavLink to={"blog"}>Blogs</NavLink> </li>
                    </ul>
                </div>
                <NavLink className="h-16 hover:bg-slate-400 rounded">
                    <img src={logo} className='h-full' alt="logo" />
                </NavLink>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li> <NavLink to={"/"}>Home</NavLink> </li>
                    <li> <NavLink to={"/all-toys"}>All Toys</NavLink> </li>
                    {user && conditionalMenu }
                    <li> <NavLink to={"blog"}>Blogs</NavLink> </li>
                </ul>
            </div>
            <div className="navbar-end">
                {user ? (<div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar" title={user?.displayName}>
                        <div className="w-10 rounded-full">
                            <img src={user?.photoURL} />
                        </div>
                    </label>
                    <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-zinc-300 w-52 ">
                        <li><Link to={"/profile"}>Profile</Link></li>
                        <li><Link onClick={()=>logOut()}>Logout</Link></li>
                    </ul>
                </div>) : <Link to={"/login"} className='btn btn-ghost'>Login</Link>}
            </div>
        </div>
    );
};

export default Navbar;