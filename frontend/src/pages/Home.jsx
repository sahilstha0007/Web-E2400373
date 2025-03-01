import React, { useState, useEffect } from "react";

function Home() {
  const slides = [
    { image: "/images/slide1.jpg", title: "Unlock Your Potential", description: "Learn from industry experts at your own pace" },
    { image: "/images/slide2.jpg", title: "Advance Your Career", description: "Gain new skills and certifications" },
    { image: "/images/slide3.jpg", title: "Learn Anytime, Anywhere", description: "Flexible courses to fit your schedule" }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-md p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-purple-700">Udemy</h1>
        <input
          type="text"
          placeholder="Search for courses"
          className="border px-4 py-2 rounded-md w-1/3"
        />
        <div>
          <button className="px-4 py-2 bg-purple-700 text-white rounded-md mx-2">
            Login
          </button>
          <button className="px-4 py-2 bg-gray-200 rounded-md">Sign Up</button>
        </div>
      </nav>

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
          <p>test</p>
          <p>test</p>
          <p>test</p>
        </div>
      </section>
      <section className="p-6">
        <h3 className="text-2xl font-semibold">Faculties</h3>
        <div className="flex gap-4 mt-4">
          <span className="px-4 py-2 bg-gray-200 rounded-md">BHM</span>
          <span className="px-4 py-2 bg-gray-200 rounded-md">BBA</span>
          <span className="px-4 py-2 bg-gray-200 rounded-md">BIT</span>
        </div>
      </section>
    </div>
  );
}

export default Home;
