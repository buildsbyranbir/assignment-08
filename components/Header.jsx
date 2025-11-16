import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import { FaGithub } from "react-icons/fa";


const Header = () => {
    const activeLinkStyle = {
        color: '#6B46C1',
        textDecoration: 'underline',
        textUnderlineOffset: '8px'
    };

    return (
        <header className="bg-white shadow-sm sticky top-0 z-50">
            <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex-shrink-0">
                        <Link to="/" className="text-2xl font-bold text-primary"><img className="w-10 h-10 inline-block mr-2" src={logo} alt="Logo" />HERO.IO</Link>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            <NavLink 
                                to="/" 
                                className="text-gray-600 hover:text-primary px-3 py-2 rounded-md text-md font-medium"
                                style={({ isActive }) => isActive ? activeLinkStyle : undefined}
                            >
                                Home
                            </NavLink>
                            <NavLink 
                                to="/apps" 
                                className="text-gray-600 hover:text-primary px-3 py-2 rounded-md text-md font-medium"
                                style={({ isActive }) => isActive ? activeLinkStyle : undefined}
                            >
                                Apps
                            </NavLink>
                            <NavLink 
                                to="/installation" 
                                className="text-gray-600 hover:text-primary px-3 py-2 rounded-md text-md font-medium"
                                style={({ isActive }) => isActive ? activeLinkStyle : undefined}
                            >
                                Installation
                            </NavLink>
                        </div>
                    </div>
                    <a 
                        href="https://github.com" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="bg-primary text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-primary-light transition-colors flex items-center gap-2"
                    >
                        <FaGithub className="w-5 h-5" />
                        Contribute
                    </a>
                </div>
            </nav>
        </header>
    );
};

export default Header;
