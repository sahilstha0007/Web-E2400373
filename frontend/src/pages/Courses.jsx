import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import CoursePage from "../pages/Coursepage";

const courses = {
  BIT: [
    { title: "Introduction to Programming with Python", image: "python.jpg", description: "Learn the basics of Python programming.", faculty: "Dr. John Doe", duration: "6 Weeks", difficulty: "Beginner", rating: 4.8, students: "1.2k" },
    { title: "Web Development Fundamentals", image: "webdev.jpg", description: "Introduction to HTML, CSS, and JavaScript.", faculty: "Prof. Jane Smith", duration: "8 Weeks", difficulty: "Intermediate", rating: 4.5, students: "890" },
    { title: "Cybersecurity Essentials", image: "cybersecurity.jpg", description: "Fundamentals of cybersecurity and threat management.", faculty: "Dr. Alan Turing", duration: "10 Weeks", difficulty: "Advanced", rating: 4.9, students: "2.1k" },
    { title: "Data Science & Machine Learning", image: "datascience.jpg", description: "Basics of data analysis and machine learning.", faculty: "Prof. Ada Lovelace", duration: "12 Weeks", difficulty: "Intermediate", rating: 4.7, students: "1.5k" },
  ],
  BHM: [
    { title: "Hospitality & Tourism Management", image: "hospitality.jpg", description: "Overview of hospitality industry management.", faculty: "Dr. Emily Carter", duration: "6 Weeks", difficulty: "Beginner", rating: 4.6, students: "950" },
    { title: "Food & Beverage Management", image: "food.jpg", description: "Understanding restaurant and food service operations.", faculty: "Chef Gordon Ramsay", duration: "8 Weeks", difficulty: "Intermediate", rating: 4.8, students: "1.8k" },
    { title: "Hotel Operations & Housekeeping", image: "hotel.jpg", description: "Hotel management and housekeeping essentials.", faculty: "Prof. Susan White", duration: "10 Weeks", difficulty: "Beginner", rating: 4.4, students: "720" },
    { title: "Culinary Arts & Kitchen Management", image: "culinary.jpg", description: "Techniques in professional cooking and kitchen management.", faculty: "Chef Jamie Oliver", duration: "12 Weeks", difficulty: "Advanced", rating: "4.9", students: "2.3k" },
  ],
  BBA: [
    { title: "Principles of Management", image: "management.jpg", description: "Introduction to management principles and leadership.", faculty: "Dr. Peter Drucker", duration: "6 Weeks", difficulty: "Beginner", rating: 4.5, students: "1.1k" },
    { title: "Marketing Strategies & Digital Marketing", image: "marketing.jpg", description: "Comprehensive guide to marketing strategies.", faculty: "Prof. Philip Kotler", duration: "8 Weeks", difficulty: "Intermediate", rating: 4.7, students: "1.4k" },
    { title: "Financial Accounting & Analysis", image: "finance.jpg", description: "Understanding financial statements and analysis.", faculty: "Dr. Warren Buffett", duration: "10 Weeks", difficulty: "Advanced", rating: 4.8, students: "1.9k" },
    { title: "Entrepreneurship & Business Development", image: "entrepreneurship.jpg", description: "Starting and growing a successful business.", faculty: "Prof. Elon Musk", duration: "12 Weeks", difficulty: "Intermediate", rating: 4.6, students: "1.3k" },
  ],
};

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
      {/* Hero Section with Image Color Theme */}
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

      {/* Category Filter */}
      <div className="mb-12 px-4">
        <div className="max-w-4xl mx-auto">
          <select
            className="w-full px-6 py-3 bg-[#2E4057] text-white border-none rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E76F51] font-medium text-lg transition-all duration-300"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="All" className="bg-[#1A2A44] text-white">All Categories</option>
            {Object.keys(courses).map((cat) => (
              <option key={cat} value={cat} className="bg-[#1A2A44] text-white">{cat}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Courses Grid */}
      {Object.keys(courses).map((category) => {
        const filteredCourses = selectedCategory === "All" || selectedCategory === category
          ? courses[category]
          : [];
        if (filteredCourses.length === 0) return null;

        return (
          <div key={category} className="mb-16">
            <div className="flex items-center mb-10">
              <div className="flex-1 border-t-4 border-[#E76F51]"></div>
              <h2 className="mx-6 text-4xl font-bold text-[#E76F51] drop-shadow-lg">
                {category} Courses
                <span className="block mt-2 text-lg font-normal text-gray-300">
                  Explore {filteredCourses.length} courses
                </span>
              </h2>
              <div className="flex-1 border-t-4 border-[#E76F51]"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {isLoading ? (
                Array(4).fill().map((_, idx) => <SkeletonLoader key={idx} />)
              ) : (
                filteredCourses.map((course, index) => (
                  <motion.div
                    key={index}
                    className="relative bg-[#2E4057] rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer"
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedCourse(course)}
                  >
                    <img src={course.image} alt={course.title} className="w-full h-40 object-cover rounded-lg mb-4" />
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-3 py-1 bg-[#E76F51] text-white text-sm font-semibold rounded-full">
                        {course.duration}
                      </span>
                      <span className="px-3 py-1 bg-green-600 text-white text-sm font-semibold rounded-full">
                        {course.difficulty}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2 line-clamp-2">{course.title}</h3>
                    <p className="text-gray-300 text-sm mb-4 line-clamp-3">{course.description}</p>
                    <p className="text-gray-400 text-xs mb-4">Instructor: {course.faculty}</p>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-400">🎓 {course.students}+</span>
                    </div>
                  </motion.div>
                ))
              )}
            </div>
          </div>
        );
      })}

      {/* Floating Action Button */}
      <motion.button
        className="fixed bottom-10 right-10 p-4 bg-[#E76F51] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        📩 Enquire Now
      </motion.button>
    </div>
  );
};

export default CourseList;