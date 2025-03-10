import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import courses from "../components/course";
import CoursePage from "../pages/Coursepage";
import Landing from "./Landing";

function Home() {
  const slides = [
    { image: "test.png", title: "Unlock Your Potential", description: "Learn from industry experts at your own pace" },
    { image: "test.png", title: "Advance Your Career", description: "Gain new skills and certifications" },
    { image: "test.png", title: "Learn Anytime, Anywhere", description: "Flexible courses to fit your schedule" }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedFaculty, setSelectedFaculty] = useState("BHM");
  const [randomCourses, setRandomCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    if (savedTheme === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);

  useEffect(() => {
    const shuffled = [...courses].sort(() => 0.5 - Math.random());
    setRandomCourses(shuffled.slice(0, 3));
  }, []);

  const filteredCourses = courses.filter(course => course.faculty === selectedFaculty);

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  if (selectedCourse) {
    return <CoursePage course={selectedCourse} onBack={() => setSelectedCourse(null)} />;
  }

  return (
    <>
    <div className="min-h-screen bg-gray-100 dark:bg-[#2f3136] text-black dark:text-white">
      <header className="relative w-full h-96 overflow-hidden">
        <img src={slides[currentSlide].image} alt={slides[currentSlide].title} className="w-full h-full object-cover transition-all duration-500" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-center">
          <h2 className="text-3xl font-bold">{slides[currentSlide].title}</h2>
          <p className="mt-2">{slides[currentSlide].description}</p>
        </div>
      </header>

      <motion.section className="p-6" initial="hidden" animate="visible" variants={sectionVariants}>
        <h3 className="text-2xl font-semibold">Featured Courses</h3>
        <div className="grid grid-cols-3 gap-6 mt-4">
          {randomCourses.map((course, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 shadow-md p-4 rounded-lg cursor-pointer" onClick={() => setSelectedCourse(course)}>
              <img src={course.image} alt={course.name} className="w-full h-40 object-cover rounded-md" />
              <h4 className="text-xl font-bold mt-2">{course.name}</h4>
              <p className="text-gray-600 dark:text-gray-300">{course.desc}</p>
              <span className="mt-2 inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium">
                {course.faculty}
              </span>
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section className="p-6" initial="hidden" animate="visible" variants={sectionVariants}>
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Faculties</h3>
        <div className="flex gap-4 mt-4">
          {["BHM", "BBA", "BIT"].map((faculty) => (
            <button
              key={faculty}
              className={`px-4 py-2 rounded-md ${selectedFaculty === faculty ? "bg-blue-500 text-white" : "bg-gray-200 dark:bg-gray-700 dark:text-white"}`}
              onClick={() => setSelectedFaculty(faculty)}
            >
              {faculty}
            </button>
          ))}
        </div>
      </motion.section>

      <motion.section className="p-6" initial="hidden" animate="visible" variants={sectionVariants}>
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Courses for {selectedFaculty}</h3>
        <div className="grid grid-cols-3 gap-6 mt-4">
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course, index) => (
              <div key={index} className="bg-white shadow-md p-4 rounded-lg dark:bg-gray-800 dark:text-white cursor-pointer" onClick={() => setSelectedCourse(course)}>
                <img src={course.image} alt={course.name} className="w-full h-40 object-cover rounded-md" />
                <h4 className="text-xl font-bold mt-2">{course.name}</h4>
                <p className="text-gray-600 dark:text-gray-400">{course.desc}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-600 dark:text-gray-400">No courses available for this faculty.</p>
          )}
        </div>
      </motion.section>
    </div>
    </>
  );
}

export default Home;
