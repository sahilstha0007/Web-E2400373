import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import CoursePage from "../pages/Coursepage";
import bg from '../assets/bg.png';

const courses = [
  {
    image: bg,
    name: "Hotel Management Basics",
    desc: "Learn the fundamentals of hotel management.",
    faculty: "BHM",
  },
  {
    image: bg,
    name: "Business Administration 101",
    desc: "Introduction to business management and leadership.",
    faculty: "BBA",
  },
  {
    image: bg,
    name: "Introduction to Programming",
    desc: "Learn programming fundamentals using Python.",
    faculty: "BIT",
  },
  {
    image: bg,
    name: "Web Development",
    desc: "Master front-end and back-end web development.",
    faculty: "BIT",
  },
  {
    image: bg,
    name: "Marketing Strategies",
    desc: "Learn how to create effective marketing campaigns.",
    faculty: "BBA",
  },
];

const SkeletonLoader = () => (
  <div className="animate-pulse space-y-4">
    <div className="h-48 bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg"></div>
    <div className="h-6 bg-gray-200 rounded w-3/4"></div>
    <div className="h-4 bg-gray-200 rounded w-full"></div>
  </div>
);

const CourseList = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [theme]);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (selectedCourse) {
    return <CoursePage course={selectedCourse} onBack={() => setSelectedCourse(null)} />;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className={`min-h-screen ${theme === 'light' ? 'bg-gradient-to-b from-[#1A2A44] via-[#2E4057] to-[#4A709A] text-white' : 'bg-[#1A2A44] text-white'} p-6`}
    >
      <div className={`relative text-center py-20 ${theme === 'light' ? 'bg-gradient-to-r from-[#1A2A44] to-[#F16529]' : 'bg-gradient-to-r from-[#1A2A44] to-[#F16529]'} rounded-2xl shadow-2xl mb-12 overflow-hidden`}>
        <div className="absolute inset-0 bg-black opacity-40 rounded-2xl"></div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative text-5xl font-extrabold text-white mb-6 drop-shadow-lg"
        >
          Explore BIT, BHM, and BBA Courses
        </motion.h1>
        <p className="relative text-xl mb-8 text-gray-200">Advance Your Career with Industry Experts</p>
        <div className="relative flex justify-center gap-6">
          <motion.button
            whileHover={{ scale: 1.1, backgroundColor: "#F4A261" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-white text-[#1A2A44] rounded-lg font-semibold shadow-lg transition-all duration-300"
          >
            View Brochure
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1, backgroundColor: "#F4A261" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg font-semibold shadow-lg transition-all duration-300"
          >
            Book Consultation
          </motion.button>
        </div>
      </div>
      <div className="mb-12 px-4">
        <div className="max-w-4xl mx-auto">
          <select
            className={`w-full px-6 py-3 ${theme === 'light' ? 'bg-[#2E4057] text-white' : 'bg-[#2E4057] text-white'} border-none rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E76F51] font-medium text-lg transition-all duration-300`}
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="All" className="bg-[#1A2A44] text-white">All Categories</option>
            {Array.from(new Set(courses.map(course => course.faculty))).map((faculty) => (
              <option key={faculty} value={faculty} className="bg-[#1A2A44] text-white">{faculty}</option>
            ))}
          </select>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-16"
      >
        <div className="flex items-center mb-10">
          <div className="flex-1 border-t-4 border-[#E76F51]"></div>
          <h2 className="mx-6 text-4xl font-bold text-[#E76F51] drop-shadow-lg">
            Available Courses
            <span className="block mt-2 text-lg font-normal text-gray-300">
              Explore {courses.length} courses
            </span>
          </h2>
          <div className="flex-1 border-t-4 border-[#E76F51]"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {isLoading ? (
            Array(4).fill().map((_, idx) => <SkeletonLoader key={idx} />)
          ) : (
            courses.filter(course => selectedCategory === "All" || course.faculty === selectedCategory).map((course, index) => (
              <motion.div
                key={index}
                className={`relative ${theme === 'light' ? 'bg-[#2E4057]' : 'bg-[#1A2A44]'} rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer`}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedCourse(course)}
              >
                <img src={course.image} alt={course.name} className="w-full h-40 object-cover rounded-lg mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2 line-clamp-2">{course.name}</h3>
                <p className="text-gray-300 text-sm mb-4 line-clamp-3">{course.desc}</p>
                <p className="text-gray-400 text-xs mb-4">Faculty: {course.faculty}</p>
              </motion.div>
            ))
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default CourseList;
