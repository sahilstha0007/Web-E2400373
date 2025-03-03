import React, { useState } from "react";
import { motion } from "framer-motion";
import CoursePage from "../pages/Coursepage"; // Ensure this file exists

const courses = {
  BIT: [
    { title: "Introduction to Programming with Python", image: "python.jpg", description: "Learn the basics of Python programming.", faculty: "Dr. John Doe" },
    { title: "Web Development Fundamentals", image: "webdev.jpg", description: "Introduction to HTML, CSS, and JavaScript.", faculty: "Prof. Jane Smith" },
    { title: "Cybersecurity Essentials", image: "cybersecurity.jpg", description: "Fundamentals of cybersecurity and threat management.", faculty: "Dr. Alan Turing" },
    { title: "Data Science & Machine Learning", image: "datascience.jpg", description: "Basics of data analysis and machine learning.", faculty: "Prof. Ada Lovelace" },
  ],
  BHM: [
    { title: "Hospitality & Tourism Management", image: "hospitality.jpg", description: "Overview of hospitality industry management.", faculty: "Dr. Emily Carter" },
    { title: "Food & Beverage Management", image: "food.jpg", description: "Understanding restaurant and food service operations.", faculty: "Chef Gordon Ramsay" },
    { title: "Hotel Operations & Housekeeping", image: "hotel.jpg", description: "Hotel management and housekeeping essentials.", faculty: "Prof. Susan White" },
    { title: "Culinary Arts & Kitchen Management", image: "culinary.jpg", description: "Techniques in professional cooking and kitchen management.", faculty: "Chef Jamie Oliver" },
  ],
  BBA: [
    { title: "Principles of Management", image: "management.jpg", description: "Introduction to management principles and leadership.", faculty: "Dr. Peter Drucker" },
    { title: "Marketing Strategies & Digital Marketing", image: "marketing.jpg", description: "Comprehensive guide to marketing strategies.", faculty: "Prof. Philip Kotler" },
    { title: "Financial Accounting & Analysis", image: "finance.jpg", description: "Understanding financial statements and analysis.", faculty: "Dr. Warren Buffett" },
    { title: "Entrepreneurship & Business Development", image: "entrepreneurship.jpg", description: "Starting and growing a successful business.", faculty: "Prof. Elon Musk" },
  ],
};

const CourseList = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);

  // Show the Course Page if a course is selected
  if (selectedCourse) {
    return <CoursePage course={selectedCourse} onBack={() => setSelectedCourse(null)} />;
  }

  return (
    <div className="min-h-screen p-8 bg-gray-100 dark:bg-[#2f3136] text-black dark:text-white">
      {/* Header Section */}
      <div className="text-center py-16 bg-blue-600 text-white rounded-lg shadow-lg mb-10">
        <h1 className="text-4xl font-bold">Explore BIT, BHM, and BBA Courses</h1>
        <p className="text-lg mt-4">Learn from experienced, real-world experts and boost your career.</p>
      </div>

      {/* Course Categories */}
      {Object.keys(courses).map((category) => (
        <div key={category} className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-center">{category} Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses[category].map((course, index) => (
              <motion.div
                key={index}
                className="border p-4 rounded-lg shadow-lg bg-white dark:bg-gray-800 dark:text-white cursor-pointer"
                whileHover={{ scale: 1.05 }}
                onClick={() => setSelectedCourse(course)}
              >
                <img src={course.image} alt={course.title} className="w-full h-40 object-cover rounded-md mb-4" />
                <h3 className="text-xl font-medium mb-2">{course.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-2">{course.description}</p>
                <p className="text-gray-600 dark:text-gray-400 font-semibold">Faculty: {course.faculty}</p>
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CourseList;