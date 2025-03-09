import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronDownIcon } from "@heroicons/react/solid";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import joinUsImage from '../assets/joinus.png';
import stayConnectedImage from '../assets/stayconnected.png';
import graduationImage from '../assets/graduation.png';
import Navbar from '../components/Navbar';
import { Globe } from '@/components/magicui/globe';
import { FlipWords } from "../components/ui/flip-words";

const words = ["affiliate", "student", "partner", "graduate"];

export default function AffiliatePage() {
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

  return (
    <>
      <motion.div 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
        className="relative bg-white dark:bg-[#3a3b3c] py-16 overflow-hidden"
      >
        <div className="container mx-auto px-4 relative">
          <motion.div 
            initial={{ opacity: 0, y: 50 }} 
            whileInView={{ opacity: 1, y: 0 }}  
            viewport={{ once: true }} 
            transition={{ duration: 0.5 }}
            className="flex flex-wrap lg:mt-0 md:mt-6  mt-8 items-center justify-between relative z-10"
          >
            <div className="w-full lg:w-1/2">
              <h1 className="text-4xl font-bold text-orange-500">
                Become a Mid Valley International College <br /><FlipWords words={words} className='text-orange-500 '/> <br />
              </h1>
              <p className="mt-4">
                Partner with Mid Valley International College and earn extra income while helping students know about Mid Valley International College.
              </p>
              <div className="mt-6">
                <Button as="a" href="https://midvalley.edu.np/sign-up-affiliates" className="mr-4" style={{ backgroundColor: '#f97316', borderColor: '#f97316' }}>
                  Apply Now
                </Button> 
                <Button as="a" href="https://midvalley.edu.np/login" variant="outline" style={{ backgroundColor: '#f97316', borderColor: '#f97316', color: '#fff' }}>
                  Log In
                </Button>
              </div>
            </div>
            <div className="w-full lg:w-1/2 flex justify-center">
              <img src="https://mysecondteacher.com.np/wp-content/uploads/2021/05/tutor-support.svg"
                alt="Affiliate Program"
                className="w-3/4 lg:w-2/3 h-auto object-contain" />
            </div>
          </motion.div>
        </div>

        <motion.section 
          initial={{ opacity: 0, y: 50 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.5, delay: 0.2 }}
          className="py-16 bg-gray-100 dark:bg-[#2f3136]"
        >
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-orange-500">How it works?</h2>
            </div>
            <div className="flex flex-wrap justify-center">
              <motion.div 
                initial={{ opacity: 0, y: 50 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ duration: 0.5, delay: 0.3 }}
                className="w-full md:w-1/3 p-4"
              >
                <div className="bg-white dark:bg-[#3a3b3c] shadow-lg rounded-lg p-6 text-center">
                  <img src={joinUsImage} alt="Join Us" className="w-32 h-32 mx-auto object-contain" />
                  <h6 className="text-lg font-semibold mt-4 text-orange-500">Join the Program</h6>
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 50 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ duration: 0.5, delay: 0.4 }}
                className="w-full md:w-1/3 p-4"
              >
                <div className="bg-white dark:bg-[#3a3b3c] shadow-lg rounded-lg p-6 text-center">
                  <img src={stayConnectedImage} alt="Stay Connected" className="w-32 h-32 mx-auto object-contain" />
                  <h6 className="text-lg font-semibold mt-4 text-orange-500">Learn And Explore</h6>
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 50 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-full md:w-1/3 p-4"
              >
                <div className="bg-white dark:bg-[#3a3b3c] shadow-lg rounded-lg p-6 text-center">
                  <img src={graduationImage} alt="Graduation" className="w-32 h-32 mx-auto object-contain" />
                  <h6 className="text-lg font-semibold mt-4 text-orange-500">Build Future</h6>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        <motion.section 
          initial={{ opacity: 0, y: 50 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.5, delay: 0.4 }}
          className="py-16 bg-gray-100 dark:bg-[#2f3136]"
        >
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-orange-500">Become a Mid Valley International College Affiliate</h2>
            </div>
            <div className="flex flex-wrap justify-center">
              <motion.div 
                initial={{ opacity: 0, y: 50 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-full md:w-1/3 p-4"
              >
                <div className="bg-white dark:bg-[#3a3b3c] shadow-lg rounded-lg p-6 text-center">
                  <h3 className="text-xl font-semibold text-orange-500">Step-1</h3>
                  <p className="mt-4">Click on "Apply Now" and fill up the form to apply for Enrollment in MVIC</p>
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 50 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ duration: 0.5, delay: 0.6 }}
                className="w-full md:w-1/3 p-4"
              >
                <div className="bg-white dark:bg-[#3a3b3c] shadow-lg rounded-lg p-6 text-center">
                  <h3 className="text-xl font-semibold text-orange-500">Step-2</h3>
                  <p className="mt-4">We will review your application and notify you within 3 working days</p>
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 50 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ duration: 0.5, delay: 0.7 }}
                className="w-full md:w-1/3 p-4"
              >
                <div className="bg-white dark:bg-[#3a3b3c] shadow-lg rounded-lg p-6 text-center">
                  <h3 className="text-xl font-semibold text-orange-500">Step-3</h3>
                  <p className="mt-4">Once approved, You can login Lms of Mid Valley International College.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        <motion.section 
          initial={{ opacity: 0, y: 50 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.5, delay: 0.6 }}
          className="py-16 bg-gray-100 dark:bg-[#2f3136]"
        >
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-orange-500">Frequently Asked Questions</h2>
            </div>
            <div className="flex justify-center">
              <div className="w-full lg:w-2/3">
                <Accordion type="single" collapsible>
                  <motion.div 
                    initial={{ opacity: 0, y: 50 }} 
                    whileInView={{ opacity: 1, y: 0 }} 
                    viewport={{ once: true }} 
                    transition={{ duration: 0.5, delay: 0.7 }}
                  >
                    <AccordionItem value="what-is-mid-valley-international-college">
                      <AccordionTrigger>What is Mid Valley International College?</AccordionTrigger>
                      <AccordionContent>
                        <p>Mid Valley International College provides online video courses for grades 1-12, engineering entrance, and more.</p>
                      </AccordionContent>
                    </AccordionItem>
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0, y: 50 }} 
                    whileInView={{ opacity: 1, y: 0 }} 
                    viewport={{ once: true }} 
                    transition={{ duration: 0.5, delay: 0.8 }}
                  >
                    <AccordionItem value="affiliate-program">
                      <AccordionTrigger>What is Mid Valley International College Affiliate Program?</AccordionTrigger>
                      <AccordionContent>
                        <p>It allows you to earn commissions by referring students to Mid Valley International College.</p>
                      </AccordionContent>
                    </AccordionItem>
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0, y: 50 }} 
                    whileInView={{ opacity: 1, y: 0 }} 
                    viewport={{ once: true }} 
                    transition={{ duration: 0.5, delay: 0.9 }}
                  >
                    <AccordionItem value="how-to-apply">
                      <AccordionTrigger>How do I apply?</AccordionTrigger>
                      <AccordionContent>
                        <p>Click "Apply Now," fill in the form, and wait for approval.</p>
                      </AccordionContent>
                    </AccordionItem>
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0, y: 50 }} 
                    whileInView={{ opacity: 1, y: 0 }} 
                    viewport={{ once: true }} 
                    transition={{ duration: 0.5, delay: 1.0 }}
                  >
                    <AccordionItem value="bit-program">
                      <AccordionTrigger>What is the BIT program?</AccordionTrigger>
                      <AccordionContent>
                        <p>The Bachelor of Information Technology (BIT) program at Mid Valley International College focuses on providing students with a strong foundation in IT principles, programming, and systems analysis. The program prepares students for careers in software development, network administration, and IT management.</p>
                      </AccordionContent>
                    </AccordionItem>
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0, y: 50 }} 
                    whileInView={{ opacity: 1, y: 0 }} 
                    viewport={{ once: true }} 
                    transition={{ duration: 0.5, delay: 1.1 }}
                  >
                    <AccordionItem value="bhm-program">
                      <AccordionTrigger>What is the BHM program?</AccordionTrigger>
                      <AccordionContent>
                        <p>The Bachelor of Hotel Management (BHM) program at Mid Valley International College is designed to equip students with the skills and knowledge required for a successful career in the hospitality industry. The program covers various aspects of hotel management, including front office operations, food and beverage management, and housekeeping.</p>
                      </AccordionContent>
                    </AccordionItem>
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0, y: 50 }} 
                    whileInView={{ opacity: 1, y: 0 }} 
                    viewport={{ once: true }} 
                    transition={{ duration: 0.5, delay: 1.2 }}
                  >
                    <AccordionItem value="business-courses">
                      <AccordionTrigger>What business courses are available?</AccordionTrigger>
                      <AccordionContent>
                        <p>Mid Valley International College offers a range of business courses that cover topics such as marketing, finance, management, and entrepreneurship. These courses are designed to provide students with a comprehensive understanding of business principles and practices.</p>
                      </AccordionContent>
                    </AccordionItem>
                  </motion.div>
                </Accordion>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section 
          initial={{ opacity: 0, y: 50 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <div className="relative h-100 w-full flex justify-center py-16">
            <Globe className="w-[300px] lg:w-[400px] h-auto opacity-50" />
          </div>
        </motion.section>
      </motion.div>
    </>
  );
}
