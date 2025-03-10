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
