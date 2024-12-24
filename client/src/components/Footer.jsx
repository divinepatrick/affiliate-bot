import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="flex justify-between items-center max-w-6xl mx-auto p-3 bg-slate-100">
            <div className="flex flex-col sm:flex-row items-center">
                <Link to="/">
                    <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
                        <span className="text-blue-700">EARNSHARE</span>
                        <span className="text-orange-500">AI</span>
                    </h1>
                </Link>
                <p className="text-slate-700 text-xs sm:text-sm mt-2 sm:mt-0 sm:ml-4">
                    &copy; 2024 EarnShare AI. All rights reserved.
                </p>
            </div>
            <ul className="flex gap-5">
                <Link to="/privacy">
                    <li className="text-slate-700 hover:underline">
                        Privacy Policy
                    </li>
                </Link>
                <Link to="/terms">
                    <li className="text-slate-700 hover:underline">
                        Terms of Service
                    </li>
                </Link>
            </ul>
            <div className="flex gap-3">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <FaFacebook className="text-slate-600" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <FaTwitter className="text-slate-600" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="text-slate-600" />
                </a>
            </div>
        </div>
    );
};

export default Footer;