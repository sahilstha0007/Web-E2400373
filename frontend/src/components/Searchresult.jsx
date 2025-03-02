import React, { useState, useEffect } from 'react';
import courses from '../components/course';

const Searchresult = ({ query, setShowResults }) => {
  const [filteredCourses, setFilteredCourses] = useState([]);

  useEffect(() => {
    if (query) {
      const results = courses.filter(course => 
        course.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredCourses(results);
    }
  }, [query]);

  return (
    <div className="p-4 max-h-60 overflow-y-auto border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-[#2f3136] shadow-md">
      {filteredCourses.length > 0 ? (
        <ul>
          {filteredCourses.map(course => (
            <li 
              key={course.id} 
              className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer"
              onClick={() => setShowResults(false)}
            >
              {course.name}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500 p-2">No courses found.</p>
      )}
    </div>
  );
};

export default Searchresult;
