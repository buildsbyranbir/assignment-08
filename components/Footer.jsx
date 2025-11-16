import React from "react";
import logo from "../assets/logo.png";
import { FaFacebook, FaTwitter, FaGithub } from "react-icons/fa";

const socialLinks = [
  { href: "#", icon: <FaFacebook className="w-6 h-6" /> },
  { href: "#", icon: <FaTwitter className="w-6 h-6" /> },
  { href: "#", icon: <FaGithub className="w-6 h-6" /> },
];

const Footer = () => {
  return (
    <footer className="bg-dark-blue text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* Top Section: give a fixed/consistent height */}
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-700 py-4 mb-6 md:h-16">
          

          {/* Logo + Title */}
          <div className="text-2xl font-bold text-white flex items-center">
            <img className="w-10 h-10 inline-block mr-2" src={logo} alt="Logo" />
            HERO.IO
          </div>


          {/* Social Icons: make the container full height and center items vertically */}
          <div className="flex items-center space-x-4 h-full">
            <span className="text-slate font-medium">Social Links</span>

            {socialLinks.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-white hover:text-primary transition-colors inline-flex items-center justify-center"
                aria-label={`social-${index}`}
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>


        {/* Bottom Text */}
        <div className="text-center text-slate">
          <p>Copyright © 2025 - All right reserved</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
