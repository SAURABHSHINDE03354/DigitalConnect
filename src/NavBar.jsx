import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="bg-base-200 dark:bg-slate-900 dark:text-white fixed top-0 left-0 right-0 z-50 shadow-md">
      <div className="max-w-screen-2xl container mx-auto md:px-5 px-3 flex justify-between items-center py-4">
        <Link to="/" className="text-2xl md:text-3xl font-bold cursor-pointer">
          DigitalConnect
        </Link>
        <div className="flex space-x-6 text-lg">
          <Link to="/" className="hover:text-primary">
            Home
          </Link>
          <Link to="/about" className="hover:text-primary">
            About
          </Link>
          <Link to="/connect" className="hover:text-primary">
            Connect
          </Link>
          <Link to="/services" className="hover:text-primary">
            Services
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
