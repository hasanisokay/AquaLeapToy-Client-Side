import React from 'react';
import { Link } from 'react-router-dom';
import footerLogo from "../assets/logo1.png"
import { AiOutlineHome } from "react-icons/ai";
import { FaFacebookF, FaGooglePlusG, FaInstagram, FaTwitter, FaTwitterSquare } from "react-icons/fa";
const Footer = () => {
    return (
        <footer className="grid lg:grid-cols-4 grid-cols-1 gap-6 lg:p-10 p-4 bg-slate-400">
            <div className='h-full w-full'>
                <img src={footerLogo} className='h-20' alt="logo" />
                <p>AquaLeapToy Industries Ltd.<br />Providing reliable toys since 2020</p>
            </div>
            <div className='h-full w-full'>
                <p className="footer-title">Contact</p>
                <div className='flex gap-4 my-4'>
                    <Link><FaFacebookF className='text-blue-600 h-4' /></Link>
                    <Link><FaGooglePlusG className='text-red-600 h-5' /></Link>
                    <Link><FaTwitter className='text-blue-500 h-5' /></Link>
                    <Link><FaInstagram className='text-red-700 h-5' /></Link>
                </div>
                <hr className='h-1 rounded border-0 w-10/12 bg-gray-500' />
                <div className='mt-2 lg:mt-4'>
                    <AiOutlineHome />
                    <p>
                        Pragati Insurance Bhaban, Karwan Bazar Dhaka 1215, Bangladesh <br />
                        Office: 02 8180078-81, 02 55012201-09 <br />
                        Advertisement: 02 55012212 <br />
                        Fax: 02 55012200, 02 55012211 </p>
                </div>
            </div>
            <div className='h-full w-full'>
                <span className="footer-title">About Us</span>
                <p className='lg:mt-4 mt-2'>AquaLeapToys started as a traditional mail-order company. Our web store opened in 2020. We are proud to have loyal customers who return again and again for our carefully selected products, attractive prices and superior customer service.</p>
            </div>
            <div className='h-full w-full'>
                <span className="footer-title">Navigation</span>
                <div className='flex flex-col lg:mt-4 mt-2 lg:gap-4 gap-2'>
                    <Link to={"/"} className="link link-hover">Home</Link>
                    <Link to={"/about-us"} className="link link-hover">About Us</Link>
                    <Link to={"/blog"} className="link link-hover">Blog</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;