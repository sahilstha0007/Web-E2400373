import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { PlayCircle } from "lucide-react";

const CoursePage = ({ course }) => {
  const [isEnrolled, setIsEnrolled] = useState(false);

  if (!course) {
    return <p>Course not found.</p>;
  }

  return (
    <div className="flex flex-col items-center pt-20 p-6 bg-gray-100 dark:bg-[#1e1e1e] min-h-screen w-full">
      <div className="w-full max-w-5xl flex flex-col md:flex-row gap-6">
        <div className="flex-1">
          <h1 className="text-4xl font-bold mb-4">{course.name}</h1>
          <p className="text-gray-700 dark:text-gray-300 mb-4">{course.desc}</p>
          <div className="flex items-center gap-2 text-blue-500">
            <span className="font-bold text-lg">Faculty:</span>
            <span className="font-bold text-lg">{course.faculty}</span>
          </div>
          <div className="mt-4 flex items-center gap-4">
            <Button className="w-full md:w-auto" onClick={() => setIsEnrolled(true)}>
              {isEnrolled ? "Enrolled" : "Enroll Now"}
            </Button>
          </div>
        </div>
        
        <div className="relative w-full md:w-96 h-56 md:h-64 bg-black rounded-lg overflow-hidden">
          <img
            src={course.image}
            alt={course.name}
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <PlayCircle className="w-16 h-16 text-white cursor-pointer" />
          </div>
        </div>
      </div>
      
      {isEnrolled && (
        <div className="mt-6 p-4 w-full max-w-5xl bg-white dark:bg-gray-900 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-4">Course Content</h2>
          <p className="text-gray-700 dark:text-gray-300">Course UI Coming Soon...</p>
        </div>
      )}
    </div>
  );
};

export default CoursePage;
