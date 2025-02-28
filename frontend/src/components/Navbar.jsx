import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBookOpen } from 'react-icons/fa';
import defaultPFP from '../assets/non.png'; 

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white flex justify-between items-center px-8 py-4 z-50">
      <div className="flex items-center gap-6 font-bold text-xl">
        <p className="text-orange-500 text-2xl">MVIC</p>
        <nav className="flex gap-6 font-light">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'text-orange-500' : 'text-black hover:text-orange-500'}
          >
            Home
          </NavLink>
          <NavLink
            to="/courses"
            className={({ isActive }) =>
              isActive ? 'text-orange-500' : 'text-black hover:text-orange-500'}
          >
            Courses
          </NavLink>
        </nav>
      </div>

      <div className="relative flex items-center gap-4">
        <input
          type="text"
          placeholder="Search Courses"
          className="border rounded-full py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
        <FaBookOpen className="absolute left-4 top-3 text-gray-500" />
        
        <div className="relative">
          <img
            src={defaultPFP}
            alt="User"
            className="w-10 h-10 rounded-full cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
          {isMenuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-gray-200 shadow-md rounded-md p-4">
            <div className="absolute -top-2 right-4 w-4 h-4 bg-gray-200 rotate-45"></div>
            <button className="w-full text-left py-2 px-4 hover:bg-orange-100">Sign In</button>
            <button className="w-full text-left py-2 px-4 hover:bg-orange-100">Log In</button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
