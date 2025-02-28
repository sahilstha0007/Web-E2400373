import React from 'react';

function About() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-gradient-to-b from-blue-900 to-orange-600">
      <div className="max-w-5xl bg-white shadow-2xl rounded-2xl p-10 flex flex-col md:flex-row items-center text-center md:text-left space-y-6 md:space-y-0 md:space-x-10">
        <div className="md:w-1/2">
          <h1 className="text-5xl font-extrabold text-blue-900 mb-6">About Us</h1>
          <p className="text-gray-700 leading-relaxed text-lg">
            Welcome to our platform! We are dedicated to providing top-notch services and 
            innovative solutions to help businesses and individuals achieve success.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg mt-4">
            Our team is driven by passion, excellence, and a commitment to customer satisfaction.
            With a strong focus on quality and integrity, we aim to deliver exceptional results 
            and create a positive impact in our community.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg mt-4">
            We embrace cutting-edge technology and creativity to transform ideas into reality, ensuring 
            an engaging and dynamic user experience.
          </p>
          <div className="mt-6 flex space-x-4">
            <button className="bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg shadow-md transition duration-300">
              Learn More
            </button>
            <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-6 rounded-lg shadow-md transition duration-300">
              Contact Us
            </button>
          </div>
        </div>
        <div className="md:w-1/2 flex flex-col items-center">
          <img src="/assets/about-image.jpg" alt="About Us" className="rounded-lg shadow-lg w-full max-w-sm" />
          <video className="rounded-lg shadow-lg w-full max-w-sm mt-4" controls>
            <source src="/assets/about-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
}

export default About;
