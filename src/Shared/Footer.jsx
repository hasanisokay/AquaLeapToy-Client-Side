import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer p-10 bg-cyan-200 text-base-content">
            <div>

                <p>Fun Toys Industries Ltd.<br />Providing reliable tech since 2020</p>
            </div>
            <div>
                <span className="footer-title">Contact</span>

            </div>
            <div className='w-1/2 '>
                <span className="footer-title">About Us</span>
                <p>Fun Toys started as a traditional mail-order company. Our web store opened in 2020. We are proud to have loyal customers who return again and again for our carefully selected products, attractive prices and superior customer service. As we continue to grow we pledge to continue the highest level of customer service that our customers have come to expect.</p>
            </div>
            <div className=''>
                <span className="footer-title">Navigation</span>
                <Link to={"/"} className="link link-hover">Home</Link>
                <Link to={"/about-us"} className="link link-hover">About Us</Link>
                <Link to={"/blog"} className="link link-hover">Blog</Link>
            </div>
        </footer>
    );
};

export default Footer;