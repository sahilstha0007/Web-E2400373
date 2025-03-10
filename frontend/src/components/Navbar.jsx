import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Importing useNavigate hook

const Login = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate(); // Initialize the navigate function

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const endpoint = isSignup ? "http://localhost:8080/auth/signup" : "http://localhost:8080/auth/login";

    try {
      const response = await axios.post(endpoint, formData);
      alert(response.data || "Success!");

      if (!isSignup) {
        // Redirect to landing page upon successful login
        navigate("/courses"); // Ensure you navigate to the correct landing page
      }
    } catch (error) {
      alert(error.response?.data || "Something went wrong!");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center mb-4">{isSignup ? "Sign Up" : "Login"}</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg"
              placeholder="Enter your username"
              required
            />
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
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg"
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
            {isSignup ? "Sign Up" : "Login"}
          </button>
        </form>
        <p className="mt-4 text-center">
          {isSignup ? "Already have an account?" : "Don't have an account?"}
          <button onClick={() => setIsSignup(!isSignup)} className="text-blue-600 hover:underline ml-1">
            {isSignup ? "Login" : "Sign Up"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
