'use client';

import { Send } from 'lucide-react';
import React from 'react';
import { motion } from 'framer-motion';

import FadeIn from '@/lib/variants';

const Contact = () => {
  return (
    <section id='Contact' className='bg-pink-100 py-28'> {/* Set background to beige-pink */}
      <div className='container flex flex-col items-center justify-center py-12 text-lg md:flex-row'>
        <motion.div
          variants={FadeIn('right', 0.2)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: true, amount: 0.8 }}
          className='mb-12 flex items-center text-center md:mr-6 md:text-left'
        >
          <h1 className='text-[40px] font-bold uppercase leading-[3rem] text-gray-800'> {/* Change text color to black for better visibility */}
            Let&apos;s work <br /> <span className='underline decoration-pink-600'>together</span>
          </h1>
        </motion.div>
        <motion.form
          variants={FadeIn('left', 0.2)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: true, amount: 0.8 }}
          className='flex max-w-3xl flex-1 flex-col items-center gap-y-6 rounded-lg bg-white shadow-lg p-8' // Change background to white for form
        >
          <input
            type='text'
            placeholder='Your Name'
            required
            className='w-full border-b border-gray-300 bg-transparent py-3 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500'
          />
          <input
            type='text'
            placeholder='Subject'
            required
            className='w-full border-b border-gray-300 bg-transparent py-3 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500'
          />
          <textarea
            name='message'
            id='message'
            rows='4'
            placeholder='Your Message'
            className='w-full resize-none border-b border-gray-300 bg-transparent py-3 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500'
          ></textarea>
          <button className='mt-6 flex items-center justify-between gap-x-2 rounded-full bg-blue-500 px-4 py-3 text-white transition-all duration-300 hover:bg-blue-600'>
            <p className='text-md capitalize'>Send Message</p>
            <Send className='h-5 w-5' />
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
