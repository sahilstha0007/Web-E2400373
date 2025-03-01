import React, { useState, useEffect } from "react";
import courses from "../components/course";

function Home() {
  const slides = [
    { image: "test.png", title: "Unlock Your Potential", description: "Learn from industry experts at your own pace" },
    { image: "test.png", title: "Advance Your Career", description: "Gain new skills and certifications" },
    { image: "test.png", title: "Learn Anytime, Anywhere", description: "Flexible courses to fit your schedule" }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedFaculty, setSelectedFaculty] = useState("BHM");
  const [randomCourses, setRandomCourses] = useState([]);

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

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white p-4 flex justify-between items-center"></nav>

      <header className="relative w-full h-96 overflow-hidden">
        <img src={slides[currentSlide].image} alt={slides[currentSlide].title} className="w-full h-full object-cover transition-all duration-500" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-center">
          <h2 className="text-3xl font-bold">{slides[currentSlide].title}</h2>
          <p className="mt-2">{slides[currentSlide].description}</p>
        </div>
      </header>

<section className="p-6">
  <h3 className="text-2xl font-semibold">Featured Courses</h3>
  <div className="grid grid-cols-3 gap-6 mt-4">
    {randomCourses.map((course, index) => (
      <div key={index} className="bg-white shadow-md p-4 rounded-lg">
        <img src={course.image} alt={course.name} className="w-full h-40 object-cover rounded-md" />
        <h4 className="text-xl font-bold mt-2">{course.name}</h4>
        <p className="text-gray-600">{course.desc}</p>
        <span className="mt-2 inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
          {course.faculty}
        </span>
      </div>
    ))}
  </div>
</section>

      <section className="p-6">
        <h3 className="text-2xl font-semibold">Faculties</h3>
        <div className="flex gap-4 mt-4">
          {["BHM", "BBA", "BIT"].map((faculty) => (
            <button
              key={faculty}
              className={`px-4 py-2 rounded-md ${selectedFaculty === faculty ? "bg-blue-500 text-white" : "bg-gray-200"}`}
              onClick={() => setSelectedFaculty(faculty)}
            >
              {faculty}
            </button>
          ))}
        </div>
      </section>
      <section className="p-6">
        <h3 className="text-2xl font-semibold">Courses for {selectedFaculty}</h3>
        <div className="grid grid-cols-3 gap-6 mt-4">
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course, index) => (
              <div key={index} className="bg-white shadow-md p-4 rounded-lg">
                <img src={course.image} alt={course.name} className="w-full h-40 object-cover rounded-md" />
                <h4 className="text-xl font-bold mt-2">{course.name}</h4>
                <p className="text-gray-600">{course.desc}</p>
              </div>
            ))
          ) : (
            <p>No courses available for this faculty.</p>
          )}
        </div>
      </section>
    </div>
  );
}

export default Home;
