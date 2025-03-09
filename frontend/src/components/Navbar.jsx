import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBookOpen, FaSun, FaMoon, FaBell, FaBars, FaTimes } from 'react-icons/fa';
import defaultPFP from '../assets/non.png';
import SearchResults from '../components/Searchresult';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNotifOpen, setIsNotifOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const [searchQuery, setSearchQuery] = useState('');
  const [showResults, setShowResults] = useState(false);
  const searchContainerRef = useRef(null);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };


  useEffect(() => {
    document.body.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    setShowResults(e.target.value.length > 0);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target)) {
        setShowResults(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full ${theme === 'light' ? 'bg-gray-100' : 'bg-[#2f3136]'} flex justify-between items-center px-8 py-4 z-50`}>
      <div className="flex items-center gap-6 font-bold text-xl">
        <NavLink
        to={"/home"}>
        <p className="text-orange-500 text-2xl">MVIC</p>
        </NavLink>
        <nav className="hidden md:flex gap-6 font-light">
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/courses">Courses</NavLink>
          <NavLink to="/affiliate">Affiliate</NavLink>
        </nav>
      </div>

      <div className="flex items-center gap-6">
        <div className="relative flex items-center gap-4" ref={searchContainerRef}>
          <input
            type="text"
            placeholder="Search Courses"
            value={searchQuery}
            onChange={handleSearch}
            className={`border rounded-full py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-orange-500 ${theme === 'light' ? 'dark:bg-[#36393f] dark:text-white' : 'bg-[#36393f] text-white'} w-64`}
          />
          <FaBookOpen className={`absolute left-4 top-3 ${theme === 'light' ? 'text-gray-500' : 'text-gray-300'}`} />
          {showResults && (
            <div className={`absolute top-12 left-0 w-full ${theme === 'light' ? 'bg-white' : 'bg-[#2f3136]'} shadow-lg rounded-md z-50`}>
              <SearchResults query={searchQuery} setShowResults={setShowResults} />
            </div>
          )}
        </div>

        <div className="relative">
          <FaBell className="text-xl cursor-pointer" onClick={() => setIsNotifOpen(!isNotifOpen)} />
          {isNotifOpen && (
            <div className={`absolute right-0 mt-2 w-48 ${theme === 'light' ? 'bg-gray-200' : 'bg-[#2f3136]'} shadow-md rounded-md p-4`}>
              <p className={`${theme === 'light' ? 'text-black' : 'text-white'}`}>No new notifications</p>
            </div>
          )}
        </div>

        <div className="relative">
          <img
            src={defaultPFP}
            alt="User"
            className="w-10 h-10 rounded-full cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
          {isMenuOpen && (
            <div className={`absolute right-0 mt-2 w-48 ${theme === 'light' ? 'bg-gray-200' : 'bg-[#2f3136]'} shadow-md rounded-md p-4`}>
              <div className={`absolute -top-2 right-4 w-4 h-4 ${theme === 'light' ? 'bg-gray-200' : 'bg-[#2f3136]'} rotate-45`}></div>
              <button className={`w-full ${theme === 'light' ? 'text-black' : 'text-white'} rounded-full py-2 px-4 hover:bg-orange-100 dark:hover:text-black`}>
                Sign In
              </button>
              <button className={`w-full ${theme === 'light' ? 'text-black' : 'text-white'} rounded-full py-2 px-4 hover:bg-orange-100 dark:hover:text-black`}>
                Log In
              </button>
            </div>
          )}
        </div>

        <button onClick={toggleTheme} className="text-xl">
          {theme === 'light' ? <FaMoon /> : <FaSun />}
        </button>
      </div>
      <button className="md:hidden text-xl ml-4" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
        {isSidebarOpen ? <FaTimes /> : <FaBars />}
      </button>
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden" onClick={() => setIsSidebarOpen(false)}>
          <div className={`fixed left-0 top-0 w-64 h-full ${theme === 'light' ? 'bg-gray-100' : 'bg-[#2f3136]'} shadow-md z-50 p-4`}>
            <button className="text-xl mb-4" onClick={() => setIsSidebarOpen(false)}>
              <FaTimes />
            </button>
            <nav className="flex flex-col gap-4">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/courses">Courses</NavLink>
              <NavLink to="/affiliate">Affilate</NavLink>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
