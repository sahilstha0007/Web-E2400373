import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import CoursePage from "../pages/Coursepage";
import courses from "../components/course"

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

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (selectedCourse) {
    return <CoursePage course={selectedCourse} onBack={() => setSelectedCourse(null)} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1A2A44] via-[#2E4057] to-[#4A709A] text-white p-6">
      <div className="relative text-center py-20 bg-gradient-to-r from-[#1A2A44] to-[#F16529] rounded-2xl shadow-2xl mb-12 overflow-hidden">
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
      </div>

      <div className="mb-12 px-4">
        <div className="max-w-4xl mx-auto">
          <select
            className="w-full px-6 py-3 bg-[#2E4057] text-white border-none rounded-xl"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="All">All Categories</option>
            {Object.keys(courses).map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
      </div>

      {Object.keys(courses).map((category) => {
        const filteredCourses = selectedCategory === "All" || selectedCategory === category
          ? courses[category]
          : [];
        if (filteredCourses.length === 0) return null;

        return (
          <div key={category} className="mb-16">
            <h2 className="text-4xl font-bold text-[#E76F51] mb-6">{category} Courses</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {isLoading ? (
                Array(4).fill().map((_, idx) => <SkeletonLoader key={idx} />)
              ) : (
                filteredCourses.map((course, index) => (
                  <motion.div
                    key={index}
                    className="relative bg-[#2E4057] rounded-xl p-6 shadow-xl hover:shadow-2xl cursor-pointer"
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedCourse(course)}
                  >
                    <img src={course.image} alt={course.title} className="w-full h-40 object-cover rounded-lg mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-2">{course.title}</h3>
                    <p className="text-gray-300 text-sm mb-4">{course.description}</p>
                    <p className="text-gray-400 text-xs mb-4">Instructor: {course.faculty}</p>
                  </motion.div>
                ))
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CourseList;
