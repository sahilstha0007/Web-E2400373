import React, { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionItem } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button"; // Import Button from shadcn
import { ChevronDownIcon } from "@heroicons/react/solid";
import affiliateImage from '../assets/affiliate.png'; // Import the new image
import joinUsImage from '../assets/joinus.png';
import stayConnectedImage from '../assets/stayconnected.png';
import graduationImage from '../assets/graduation.png';
import Navbar from '../components/Navbar'; // Import Navbar
import { Globe } from '@/components/magicui/globe'; // Import Globe

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
      <div className={`bg-gray-100 dark:bg-[#2f3136] text-gray-900 dark:text-gray-100`}>
      <Navbar toggleTheme={toggleTheme} theme={theme} />
      <div className="bg-white dark:bg-[#3a3b3c] py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between">
            <div className="w-full lg:w-1/2">
              <h1 className="text-4xl font-bold text-orange-500">Become a Mid Valley International College<br />affiliate</h1>
              <p className="mt-4">Partner with Mid Valley International College and earn extra income while helping students know about Mid Valley International College.</p>
              <div className="mt-6">
                <Button as="a" href="https://midvalley.edu.np/sign-up-affiliates" className="mr-4" style={{ backgroundColor: '#f97316', borderColor: '#f97316' }}>Apply Now</Button>
                <Button as="a" href="https://midvalley.edu.np/login" variant="outline" style={{ backgroundColor: '#f97316', borderColor: '#f97316', color: '#fff' }}>Log In</Button>
              </div>
            </div>
            <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
              <img src={affiliateImage} alt="Affiliate Program" className="w-full h-auto max-h-[500px] object-cover" />
            </div>
          </div>
        </div>
      </div>
      <section className="py-16 bg-gray-100 dark:bg-[#2f3136]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-orange-500">How it works?</h2>
          </div>
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-1/3 p-4">
              <div className="bg-white dark:bg-[#3a3b3c] shadow-lg rounded-lg p-6 text-center">
                <img src={joinUsImage} alt="Join Us" className="w-32 h-32 mx-auto object-contain" />
                <h6 className="text-lg font-semibold mt-4 text-orange-500">Join the program</h6>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-4">
              <div className="bg-white dark:bg-[#3a3b3c] shadow-lg rounded-lg p-6 text-center">
                <img src={stayConnectedImage} alt="Stay Connected" className="w-32 h-32 mx-auto object-contain" />
                <h6 className="text-lg font-semibold mt-4 text-orange-500">Promote Mid Valley International College</h6>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-4">
              <div className="bg-white dark:bg-[#3a3b3c] shadow-lg rounded-lg p-6 text-center">
                <img src={graduationImage} alt="Graduation" className="w-32 h-32 mx-auto object-contain" />
                <h6 className="text-lg font-semibold mt-4 text-orange-500">Earn Commission</h6>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-gray-100 dark:bg-[#2f3136]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-orange-500">Become a Mid Valley International College Affiliate</h2>
          </div>
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-1/3 p-4">
              <div className="bg-white dark:bg-[#3a3b3c] shadow-lg rounded-lg p-6 text-center">
                <h3 className="text-xl font-semibold text-orange-500">Step-1</h3>
                <p className="mt-4">Click on "Apply Now" and fill up the form to apply for Mid Valley International College Enrollment</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-4">
              <div className="bg-white dark:bg-[#3a3b3c] shadow-lg rounded-lg p-6 text-center">
                <h3 className="text-xl font-semibold text-orange-500">Step-2</h3>
                <p className="mt-4">We will review your application and notify you within 3 working days</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-4">
              <div className="bg-white dark:bg-[#3a3b3c] shadow-lg rounded-lg p-6 text-center">
                <h3 className="text-xl font-semibold text-orange-500">Step-3</h3>
                <p className="mt-4">Once approved, You can login Lms of Mid Valley International College.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-gray-100 dark:bg-[#2f3136]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-orange-500">Frequently Asked Questions</h2>
          </div>
          <div className="flex justify-center">
            <div className="w-full lg:w-2/3">
              <Accordion type="single" collapsible>
                <AccordionItem value="what-is-mid-valley-international-college" title="What is Mid Valley International College?" icon={<ChevronDownIcon className="h-5 w-5" />}>
                  <p>Mid Valley International College provides online video courses for grades 1-12, engineering entrance, and more.</p>
                </AccordionItem>
                <AccordionItem value="affiliate-program" title="What is Mid Valley International College Affiliate Program?" icon={<ChevronDownIcon className="h-5 w-5" />}>
                  <p>It allows you to earn commissions by referring students to Mid Valley International College.</p>
                </AccordionItem>
                <AccordionItem value="how-to-apply" title="How do I apply?" icon={<ChevronDownIcon className="h-5 w-5" />}>
                  <p>Click "Apply Now," fill in the form, and wait for approval.</p>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </section>
    </div>
    <Globe />
    </>
  );
}
