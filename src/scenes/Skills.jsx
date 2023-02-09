import React from 'react';
import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import mysql from '../assets/mysql.png';
import cpp from '../assets/cpp.png';
import python from '../assets/python.png';
import redux from '../assets/redux.png';
import django from '../assets/django.png';


const Skills = () => {
  return (
    <div id='skills' className='text-gray-300 pt-80 pb-80 mt-8'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div className="md:flex md:justify-between md:gap-16 mt-32">
              <motion.div
                className="md:w-1/3"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 },
                 }}
              >
            <p className="font-playfair font-semibold text-4xl mb-5">
                MY <span className="text-red">SKILLS</span>
            </p>
            <LineGradient width="w-1/3" />
            <p className="mt-10 mb-7">
                  These are the technologies I've worked with            </p>
            </motion.div>
            </div>

          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={cpp} alt="HTML icon" />
                  <p className='my-4'>C++</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                  <p className='my-4'>HTML</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={CSS} alt="HTML icon" />
                  <p className='my-4'>CSS</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={JavaScript} alt="HTML icon" />
                  <p className='my-4'>JAVASCRIPT</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={ReactImg} alt="HTML icon" />
                  <p className='my-4'>REACT</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={redux} alt="HTML icon" />
                  <p className='my-4'>REDUX</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Tailwind} alt="HTML icon" />
                  <p className='my-4'>TAILWIND</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={python} alt="HTML icon" />
                  <p className='my-4'>PYTHON</p>
              </div>            
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={django} alt="HTML icon" />
                  <p className='my-4'>DJANGO</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={GitHub} alt="HTML icon" />
                  <p className='my-4'>GITHUB</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={mysql} alt="HTML icon" />
                  <p className='my-4'>MySQL</p>
              </div>
          </div>
      </div>
    </div>
  );
};

export default Skills;
